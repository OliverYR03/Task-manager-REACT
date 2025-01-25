import { useTasks } from "../context/TaskContext";
import { Link } from "react-router-dom";
import days from "dayjs";
import utc from "dayjs/plugin/utc";
days.extend(utc);

function TaskCard({ task }) {
  const { deleteTask } = useTasks();

  return (
    // <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
    //     <header className="flex justify-between">
    //         <h1 className=" text-2xl font-bold">{task.title}</h1>
    //         <div className="flex gap-x-2 items-center">
    //             <button onClick={() => {
    //               deleteTask(task._id)
    //             }}>Delete</button>
    //             <Link to={`/tasks/${task._id}`}>Edit</Link>
    //         </div>
    //     </header>
    //         <p className="text-slate-300">{task.description}</p>
    //         <p>{days(task.date).utc().format("DD/MM/YYYY")}</p>
    // </div>

    <div className="card flex flex-col p-6 bg-white justify-between rounded-[20px] h-auto w-[350px]">
      <div className="c-top flex justify-between align-middle">
        <p className="left text-[13px] font-medium">
          <i className="fa-solid fa-circle text-red-600 "></i> DESIGN SYSTEM
        </p>
        <p className="right align-middle">
          <i className="fa-solid fa-trash pr-2 cursor-pointer" onClick={() => {
                    deleteTask(task._id)
                  }}></i>
          <Link to={`/tasks/${task._id}`}><i className="fa-sharp fa-solid fa-pen-to-square"></i></Link>  
          
        </p>
      </div>
      <div className="c-body">
        <p className="c-title">{task.title}</p>
        <p className="c-text text-[15px] text-justify">
        {task.description}
        </p>
        <p className="c-text text-[15px] text-justify text-red-400 font-bold">
        {task.status.title}
        </p>
        <p className="c-text text-[15px] text-justify text-red-500 font-bold">
        {task.priority.title}
        </p>
        <p>{days(task.date).utc().format("DD/MM/YYYY")}</p>
      </div>
      <div className="c-seen text-[25px]">
        <span>
          
          <i className="fa-light fa-circle-user"></i>
        </span>

      </div>
    </div>
  );
}

export default TaskCard;
