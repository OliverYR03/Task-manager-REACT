import { useEffect } from "react";
import { useAuth } from "../context/AuthContext.";
import { useTasks } from "../context/TaskContext";
import TaskCard from "../components/TaskCard";
import images from "../assets/images";

function TaskPage() {
  const { getTasks, tasks } = useTasks();
  const { user } = useAuth();

  useEffect(() => {
    getTasks();
  }, []);

  if (tasks.length === 0) return <h1> No hay tareas</h1>;

  return (
    // <div>
    //   <div className="mt-10 flex justify-between align-middle">
    //     <h2 className="text-3xl font-medium">Board</h2>
    //     <p className="text-base">
    //       This week <i className="fa-solid fa-chevron-down"></i>
    //     </p>
    //   </div>
    //   <section className="to-do-container grid  justify-between h-full">
    //     <div className="to-do overflow-y-auto flex flex-col m-5 rounded-xl bg-gray-200 px-5 py-8">
    //       <div className="to-do-text flex align-middle justify-between text-[#707070] font-medium text-lg">
    //         <p>To do</p>
    //         <p className="plus-eli flex gap-4">
    //           <i className="fa-solid fa-plus"></i>
    //           <i className="fa-solid fa-ellipsis"></i>
    //         </p>
    //       </div>
    //       <div className="card-container mt-5 grid justify-center auto-cols-auto gap-5 ">
    //         {tasks.map((task) => (
    //         <div key={task._id}>
    //           <TaskCard task={task} key={task._id} />
    //         </div>
    //       ))}
    //       </div>
    //     </div>
    //     <div className="inprogress m-5 rounded-xl bg-gray-200 px-5 py-8">
    //       <div className="inprogress-text flex align-middle justify-between text-[#707070] font-medium text-lg">
    //         <p>In progress</p>
    //         <p className="plus-eli flex gap-4">
    //           <i className="fa-solid fa-plus"></i>
    //           <i className="fa-solid fa-ellipsis"></i>
    //         </p>
    //       </div>
    //       <div className="card-container mt-5 grid justify-center auto-cols-auto gap-5 ">

    //       </div>
    //     </div>
    //       <div className="done m-5 rounded-xl bg-gray-200 px-5 py-8">
    //         <div className="done-text flex align-middle justify-between text-[#707070] font-medium text-lg">
    //           <p>Done</p>
    //           <p className="plus-eli flex gap-4">
    //             <i className="fa-solid fa-plus"></i>
    //             <i className="fa-solid fa-ellipsis"></i>
    //           </p>
    //         </div>
    //         <div className="card-container mt-5 grid justify-center auto-cols-auto gap-5 ">

    //         </div>
    //       </div>
    //   </section>

    //   <div className="grid md:grid-cols-3 gap-2 sm:gridcols-2 m-8">

    //   </div>
    // </div>
    <div className=" max-w-[1200px] bg-gray-200 h-[calc(80vh - 100px) w-screen font-['Inter'] p-9">
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
            <p>
              <i className="fa-solid fa-plus text-[#ff6767]"></i> Add Task
            </p>
          </nav>
          <div className="date mt-3">
            <p className="text-xs font-normal">
              20 June <span className="text-[#A1A3AB] ">·Today</span>
            </p>
          </div>
          <div className="todayTask p-6  overflow-y-auto flex-1 h-[400px]">
            <div className="grid auto-cols-auto gap-5 ">
              {tasks.map((task) => (
                <div key={task._id}>
                  <TaskCard task={task} key={task._id} />
                </div>
              ))}
            </div>
          </div>
          <hr className="border-[#A1A3AB] border-1" />
          <div className="allTask">
            <div className="grid auto-cols-auto gap-5 overflow-y-scroll h-[200px]">
              {tasks.map((task) => (
                <div key={task._id}>
                  <TaskCard task={task} key={task._id} />
                </div>
              ))}
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
          <div className="shadow-xl  rounded-xl h-[50vh]">
            <nav>
              <h3 className="flex text-[#FF6767] font-medium p-6 ">
                <img src={images.taskstatus} className="w-[28px] h-[31px]" />
                Completed Task
              </h3>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
