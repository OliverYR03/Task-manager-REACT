import { useTasks } from "../context/TaskContext";
import { Link } from "react-router-dom";
import days from "dayjs";
import utc from "dayjs/plugin/utc";
import images from "../assets/images";
days.extend(utc);

function TaskCard({ task }) {
  const { deleteTask } = useTasks();
  // bg-[rgba(161,163,171,0.13)]  border-gray-400 border-2
  return (
    <div className="cardTask font-['Inter'] mt-4 p-3 pl-10 rounded-2xl border-gray-400 border-2 cursor-pointer">
      <div className="cardTop flex gap-3 font-semibold text-base items-center justify-between">
        <img src={images.notStarted} className=" ml-[-20px] w-3 h-3" />
        <h4 className="justify-start">{task.title}</h4>
        <i className="fa-light fa-ellipsis-stroke text-[#A1A3AB]"></i>
      </div>
      <div className="cardDesc flex items-center justify-between text-[#747474] font-normal">
        <p>{task.description}</p>
        <img
          src={`${task.img || images.default}`}
          alt=""
          className="rounded-[14px] w-[100px] h-[100px]"
        />
      </div>
      <div className="cardInfo flex justify-between font-normal text-[10px] mt-2">
        <h4 className="text-sm font-normal">
          Priority{" "}
          <span
            className={`${
              task.priority === "Extreme"
                ? "text-[#F21E1E]"
                : task.priority === "Moderate"
                ? "text-[#42ADE2]"
                : task.priority === "Low"
                ? "text-[#05A301]"
                : "text-gray-600"
            }`}
          >
            {task.priority}
          </span>
        </h4>
        <h4 className="text-sm font-normal">
          Status <span className="text-[#F21E1E]">{task.status}</span>
        </h4>
        <h4 className="text-[#A1A3AB] text-sm font-normal">
          Created on <span>{days(task.date).utc().format("DD/MM/YYYY")}</span>
        </h4>
      </div>
    </div>
  );
}

export default TaskCard;
