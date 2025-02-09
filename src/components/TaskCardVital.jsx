import { useTasks } from "../context/TaskContext";
import { Link } from "react-router-dom";
import days from "dayjs";
import utc from "dayjs/plugin/utc";
import images from "../assets/images";
days.extend(utc);

function TaskCardVital({ task, onClick }) {
  const { deleteTask } = useTasks();

  // bg-[rgba(161,163,171,0.13)]

  const toggleModal = () => {};

  return (
    <div
      className="cardTask font-['Inter'] mt-4 p-3 pl-10 rounded-2xl   border-gray-400 border-2 cursor-auto"
      onClick={onClick}
    >
      <div className="cardTop flex gap-3 font-semibold text-base items-center justify-between">
        <div className="items-center flex gap-2">
          <i
            className={`ml-[-25px] fa-regular fa-circle ${
              task.status === "Not Started"
                ? "text-[#F21E1E]"
                : task.status === "In Progress"
                ? "text-[#0225FF]"
                : task.status === "Completed"
                ? "text-[#05A301]"
                : "text-gray-600"
            }`}
          ></i>
          <h4>{task.title}</h4>
        </div>

        <i className="fa-light fa-ellipsis-stroke text-[#A1A3AB]"></i>
      </div>
      <div className="cardDesc flex items-center justify-between text-[#747474] font-normal">
        <p className="pr-8">{task.description}</p>
        <img
          src={`${task.img || images.default}`}

          alt=""
          className="rounded-[14px] w-[100px] h-[100px]"
        />
      </div>
      <div className="cardInfo flex justify-between font-normal text-[10px] mt-2">
        <h4 className="text-sm">
          Priority:{" "}
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
        <h4 className="text-sm">
          Status:{" "}
          <span
            className={`${
              task.status === "Not Started"
                ? "text-[#F21E1E]"
                : task.status === "In Progress"
                ? "text-[#0225FF]"
                : task.status === "Completed"
                ? "text-[#05A301]"
                : "text-gray-600"
            }`}
          >
            {task.status}
          </span>
        </h4>
        <h4 className="text-[#A1A3AB] text-sm font-normal">
          Created on: <span>{days(task.date).utc().format("DD/MM/YYYY")}</span>
        </h4>
      </div>
    </div>
  );
}

export default TaskCardVital;
