import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import images from "../assets/images";
import { useTasks } from "../context/TaskContext";
import TaskCardVital from "../components/TaskCardVital";
import { useParams } from "react-router-dom";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import Swal from "sweetalert2";
dayjs.extend(utc);

function VitalTaskPage() {
  const { getTasks, tasks, getTask, deleteTask } = useTasks();
  const { watch, setValue } = useForm();
  const [modal, setModal] = useState(false);
  const [selectedTaskId, setSelectedTaskId] = useState(null); // Guardamos el ID de la tarea seleccionada

  useEffect(() => {
    getTasks();
  }, []);
  const confirmDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed && selectedTaskId) {
        await deleteTask(selectedTaskId);
        setModal(false);
        getTasks();
        Swal.fire({
          title: "Deleted!",
          text: "Your task has been deleted.",
          icon: "success",
        });
      }
    });
  };
  async function loadTask(id) {
    if (!id) return;
    const task = await getTask(id);
    console.log(task);
    setValue("title", task.title);
    setValue("description", task.description);
    setValue("default", images.default);
    setValue("date", dayjs(task.date).utc().format("YYYY-MM-DD"));
    setValue("priority", task.priority);
    setValue("status", task.status);
    setValue("img", task.img);
  }

  const toggleModal = async (taskId) => {
    if (!modal) {
      await loadTask(taskId);
      setSelectedTaskId(taskId); // Guardamos el ID de la tarea seleccionada
    }
    setModal(!modal);
  };

  if (tasks.length === 0) return <h1>No hay Tareas</h1>;

  const vitalTasks = tasks.filter(
    (task) =>
      (task.priority === "Moderate" && task.status !== "Completed") ||
      (task.priority === "Extreme" && task.status !== "Completed")
  );
  return (
    <div className="grid  max-w-[1200px] h-[calc(80vh)] m-7 gap-7 grid-cols-mytaskp">
      <div className="myTask rounded-2xl border border-[#A1A3AB] border-1 px-7 py-4">
        <nav className="font-['Montserrat'] text-base font-semibold">
          <h3>
            <span
              className="border-[#F24E1E] border-solid  
            border-b-2 font-semibold"
            >
              My{" "}
            </span>
            Tasks
          </h3>
        </nav>
        <div className="todayTask  h-[calc(70vh)] no-scrollbar overflow-y-auto flex-1 ">
          <div className="grid auto-cols-auto gap-5">
            {vitalTasks.map((task) => (
              <div key={task._id}>
                <TaskCardVital
                  onClick={() => toggleModal(task._id)}
                  task={task}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="myTaskDesc rounded-2xl border border-[#A1A3AB] border-1 p-7 flex flex-col">
        {modal && (
          <>
            <div>
              <div className="taskDesc font-['Inter'] items-center flex gap-4">
                <img
                  src={`${watch("img") || watch("default")}`}
                  alt="Imagen"
                  className="w-[158px] h-[158px]"
                />
                <div className="flex flex-col mt-7">
                  <h3 className="font-semibold text-base ">{watch("title")}</h3>
                  <p className="text-xs font-normal mt-3">
                    Priority:{" "}
                    <span
                      className={`${
                        watch("priority") === "Extreme"
                          ? "text-[#F21E1E]"
                          : watch("priority") === "Moderate"
                          ? "text-[#42ADE2]"
                          : watch("priority") === "Low"
                          ? "text-[#05A301]"
                          : "text-gray-600"
                      }`}
                    >
                      {watch("priority")}
                    </span>
                  </p>
                  <p className="text-xs font-normal mt-3">
                    Status:{" "}
                    <span
                      className={`${
                        watch("status") === "Not Started"
                          ? "text-[#F21E1E]"
                          : watch("status") === "In Progress"
                          ? "text-[#0225FF]"
                          : watch("status") === "Completed"
                          ? "text-[#05A301]"
                          : "text-gray-600"
                      }`}
                    >
                      {watch("status")}
                    </span>
                  </p>
                  <p className="text-xs font-normal mt-3 text-[#A1A3AB] text-[10px]">
                    Created on: <span>{watch("date")}</span>
                  </p>
                </div>
              </div>
              <div className="taskInfo mt-5">
                <div className="info-top text-justify">
                  <h4 className="text-base font-bold font-['Inter'] text-[#747474]">
                    Task Title:{" "}
                    <span className="text-base font-normal text-[#747474] font-['Inter']">
                      {watch("title")}
                    </span>
                  </h4>
                  <h4 className="text-base font-bold font-['Inter'] text-[#747474] mt-3">
                    Objective:{" "}
                    <span className="text-base font-normal text-[#747474] font-['Inter']">
                      Take the dog to the park and bring treats as well.
                    </span>
                  </h4>
                </div>
                <div className="info-desc text-justify mt-3">
                  <h4 className="text-base font-bold font-['Inter'] text-[#747474]">
                    Task Description:{" "}
                    <span className="text-base font-normal text-[#747474] font-['Inter']">
                      {watch("description")}
                    </span>
                  </h4>
                </div>
                <div className="additional mt-3">
                  <h4 className="text-base font-bold font-['Inter'] text-[#747474]">
                    Additional Notes:
                  </h4>
                  <ul>
                    <li className="list-decimal text-base font-normal text-[#747474] font-['Inter'] list-inside ml-3 text-justify">
                      Listen to a podcast or audiobook
                    </li>
                    <li className="list-decimal text-base font-normal text-[#747474] font-['Inter'] list-inside ml-3 text-justify">
                      Practice mindfulness or meditation
                    </li>
                    <li className="list-decimal text-base font-normal text-[#747474] font-['Inter'] list-inside ml-3 text-justify">
                      Take photos of interesting sights along the way
                    </li>
                    <li className="list-decimal text-base font-normal text-[#747474] font-['Inter'] list-inside ml-3 text-justify">
                      Practice obedience training with your dog
                    </li>
                    <li className="list-decimal text-base font-normal text-[#747474] font-['Inter'] list-inside ml-3 text-justify">
                      Chat with neighbors or other dog walkers
                    </li>
                    <li className="list-decimal text-base font-normal text-[#747474] font-['Inter'] list-inside ml-3 text-justify">
                      Listen to music or an upbeat playlist
                    </li>
                  </ul>
                  <h4 className="text-base font-bold font-['Inter'] text-[#747474] mt-3">
                    Deadline for Submission:{" "}
                    <span className="text-base font-normal text-[#747474] font-['Inter']">
                      End of Day
                    </span>
                  </h4>
                </div>
                <div className="action gap-4 flex mt-3 align-baseline justify-end">
                  <button
                    className="bg-[#FF6767] w-9 h-9 rounded-lg"
                    onClick={confirmDelete}
                  >
                    <i className="fa-solid fa-trash text-white"></i>
                  </button>
                  <button className="bg-[#FF6767] w-9 h-9 rounded-lg items-center">
                    <img src={images.edit} className="ml-2" />
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default VitalTaskPage;
