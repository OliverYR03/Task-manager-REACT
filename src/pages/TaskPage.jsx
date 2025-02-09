import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext.";
import { useTasks } from "../context/TaskContext";
import TaskCard from "../components/TaskCard";
import images from "../assets/images";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import Dropzone from "react-dropzone";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

function TaskPage() {
  const { getTasks, tasks } = useTasks();
  const [preview, setPreview] = useState(null); // Para vista previa
  const { user } = useAuth();
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();
  const { register, handleSubmit, setValue, reset } = useForm();
  const { createTask } = useTasks();

  const [image, setImage] = useState(null);

  const onSubmit = handleSubmit((data) => {
    const dataValid = {
      ...data,
      img: image,
      date: data.date ? dayjs.utc(data.date).format() : dayjs.utc().format(),
    };

    createTask(dataValid); 
    setModal(!modal);
  });

  const toggleModal = () => {
    reset();
    setModal(!modal);
  };

  const editTask = (id) => {
    navigate(`/tasks/${id}`)
  }

  useEffect(() => {
    getTasks();
  }, []);

  if (tasks.length === 0) return <h1> No hay tareas</h1>;
  const today = dayjs();
  const startOfWeek = dayjs().startOf("week");
  const endOfWeek = dayjs().endOf("week");

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file) {
      setValue("img", file); 
      setPreview(URL.createObjectURL(file)); 
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); 
      };
      reader.readAsDataURL(file); 
    }
  };


  const todayTasks = tasks.filter((task) => {
    const taskDate = dayjs(task.date);
    return taskDate.isSame(today, "day");
  });

  const completedTasks = tasks.filter((task) => task.status === "Completed");

  return (
    <div className=" max-w-[1200px]  h-[calc(80vh - 100px) w-screen font-['Inter'] p-9">
      <nav className="flex   items-center justify-between">
        <h2 className="text-4xl font-medium">
          Welcome back, {user.firstname} 👋🏻
        </h2>
        <div className="friends flex gap-6">
          <ul>
            <li className="flex">
              <img src={images.friend1} />
              <img src={images.friend2} />
              <img src={images.friend3} />
              <img src={images.friend4} />
              <img src={images.friend5} />
            </li>
          </ul>
          <button className="border-2 border-[#FF6767] flex gap-2 items-center rounded-md p-1 text-[#FF6767] w-auto h-auto">
            <img src={images.invite} />
            Invite
          </button>
        </div>
      </nav>

      <div className="justify-center flex border-[#A1A3AB] border-2  h-[calc(75vh)]">
        <div className="shadow-xl p-8 w-[70vh]">
          <nav className="flex justify-between">
            <h3 className="flex text-[#FF6767] font-medium">
              <img src={images.pending} className="w-[28px] h-[31px]" />
              To-Do
            </h3>
            <button onClick={toggleModal} className="btn-modal">
              <i className="fa-solid fa-plus text-[#ff6767]"></i> Add Task
            </button>
          </nav>
          <div className="date mt-3">
            <p className="text-xs font-normal">
              20 June <span className="text-[#A1A3AB] ">·Today</span>
            </p>
          </div>
          <div className="todayTask p-6  no-scrollbar overflow-y-auto flex-1 h-[400px]">
            <div className="grid auto-cols-auto gap-5">
              {todayTasks.length === 0 ? (
                <> No hay tareas :V wa</>
              ) : (
                <>
                  {todayTasks.map((task) => (
                    <div key={task._id}>
                      <TaskCard task={task} key={task._id} onClick={() => navigate(`/${task._id}`)}/>
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
          <hr className="border-[#A1A3AB] border-1" />
          <div className="allTask">
            <div className="grid auto-cols-auto gap-5 no-scrollbar overflow-y-scroll h-[200px]">
              {tasks.length === 0 ? (
                <>No tienes tareas todavía, ¿por qué no creas una?</>
              ) : (
                <>
                  {tasks.map((task) => (
                    <div key={task._id}>
                      <TaskCard
                       task={task} onClick={() => edit(task._id) } />
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[50vh] h-[80vh]">
          <div className="shadow-xl  rounded-xl h-[25vh]">
            <nav>
              <h3 className="flex text-[#FF6767] font-medium p-6">
                <img src={images.taskstatus} className="w-[28px] h-[31px]" />
                Task Status
              </h3>
            </nav>
          </div>
          <div className="shadow-xl  rounded-xl h-[50vh] ">
            <nav>
              <h3 className="flex text-[#FF6767] font-medium p-6 ">
                <img src={images.taskcompleted} className="w-[25px] h-[27px]" />
                Completed Task
              </h3>
            </nav>
            <div className="overflow-y-auto p-3">
              <div className="grid auto-cols-auto gap-5 p-5">
                {completedTasks.length === 0 ? (
                  <>
                  <h4>Todavía no has completado ninguna tarea</h4>
                  </>
                ) : (
                  <>
                    {completedTasks.map((task) => (
                      <div key={task._id}>
                        <TaskCard task={task} onClick={() => navigate(`/${task._id}`)} />
                      </div>
                    ))}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {modal && (
        <div className="modal w-screen h-screen fixed top-0 left-0 bg-[rgba(49,49,49,0.8)]">
          <div className="overlay flex justify-center items-center w-full h-full">
            <div
              className="relative flex flex-col h-[70vh] max-w-[1000px] w-full bg-white rounded-2xl p-8 font-['Montserrat']"
              onClick={(e) => e.stopPropagation()}
            >
              <nav className="flex justify-between items-baseline mb-4">
                <h3 className="text-lg font-semibold">
                  <span className="border-b-2 border-[#F24E1E]">
                    Add New Ta
                  </span>
                  sk
                </h3>
                <a
                  onClick={toggleModal}
                  className="text-sm underline font-medium"
                >
                  Go Back
                </a>
              </nav>
              <form onSubmit={onSubmit}>
                <div className="grid grid-cols-createtask gap-6">
                  {/* Form Section */}
                  <div>
                    <div className="mb-4">
                      <label htmlFor="title" className="text-sm font-semibold">
                        Title
                      </label>
                      <input
                        type="text"
                        id="title"
                        {...register("title")}
                        className="w-full p-3 rounded-lg border border-gray-300 mt-2"
                      />
                    </div>

                    <div className="mb-4">
                      <label htmlFor="date" className="text-sm font-semibold">
                        Date
                      </label>
                      <input
                        type="date"
                        id="date"
                        {...register("date")}
                        className="w-full p-3 rounded-lg border border-gray-300 mt-2"
                      />
                    </div>

                    <div className="mb-4">
                      <p className="text-sm font-semibold mb-2">Priority</p>
                      <div className="flex gap-6">
                        <div className="flex items-center gap-2 hover:bg-inherit">
                          <label
                            htmlFor="extreme"
                            className="text-sm flex items-center gap-2"
                          >
                            <i className="fa-solid fa-circle text-[#F21E1E] text-[7px]"></i>{" "}
                            Extreme
                          </label>
                          <input
                            type="radio"
                            id="extreme"
                            {...register("priority")}
                            value="Extreme"
                            className="w-4 h-4 accent-red-600 "
                          />
                        </div>
                        <div className="flex items-center gap-2">
                          <label
                            htmlFor="moderate"
                            className="text-sm flex items-center gap-2"
                          >
                            <i className="fa-solid fa-circle text-[#3ABEFF] text-[7px]"></i>{" "}
                            Moderate
                          </label>
                          <input
                            type="radio"
                            id="moderate"
                            {...register("priority")}
                            value="Moderate"
                            className="w-4 h-4 accent-blue-600"
                          />
                        </div>
                        <div className="flex items-center gap-2">
                          <label
                            htmlFor="low"
                            className="text-sm flex items-center gap-2"
                          >
                            <i className="fa-solid fa-circle text-[#05A301] text-[7px]"></i>{" "}
                            Low
                          </label>
                          <input
                            type="radio"
                            id="low"
                            {...register("priority")}
                            value="Low"
                            className="w-4 h-4 accent-green-600"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="description"
                        className="text-sm font-semibold"
                      >
                        Task Description
                      </label>
                      <textarea
                        id="description"
                        name="description"
                        {...register("description")}
                        className="w-full h-[200px] p-3 rounded-lg border border-gray-300 mt-2 "
                        placeholder="Start writing here..."
                      ></textarea>
                    </div>
                  </div>

                  {/* Upload Image Section */}
                  <div className="flex flex-col items-center mt-4">
                    <p className="font-semibold text-sm mb-2">Upload Image</p>
                    <Dropzone onDrop={onDrop}>
                      {({ getRootProps, getInputProps }) => (
                        <div
                          {...getRootProps()}
                          className="border p-4 cursor-pointer"
                        >
                          <input {...getInputProps()} />
                          {preview ? (
                            <img
                              src={preview}
                              alt="Vista previa"
                              className="w-20 h-20"
                            />
                          ) : (
                            <p>Sube tu imagen aquí</p>
                          )}
                        </div>
                      )}
                    </Dropzone>
                  </div>
                </div>

                <button className="mt-6 w-full py-3 bg-[#F24E1E] text-white font-medium rounded-lg hover:bg-[#d83c1b]">
                  Done
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskPage;
