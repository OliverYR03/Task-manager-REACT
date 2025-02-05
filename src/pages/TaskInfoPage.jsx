import { useEffect, useState  } from "react";
import images from "../assets/images";
import { useTasks } from "../context/TaskContext";
import { useParams } from "react-router-dom";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

function TaskInfoPage() {
  const { getTask } = useTasks(); 
  const params = useParams();
  const [task, setTask] = useState();


  useEffect(() => {
    async function loadTask() {
      const taskData = await getTask(params.id);
      if (taskData) {
        setTask(taskData);
      }
    }
    loadTask();
  }, [params.id, getTask]);

  if (!task) {
    return <div>Loading...</div>; // Muestra un mensaje de carga mientras se obtienen los datos
  }
  
  return (
    <div className="grid  max-w-[1200px] h-[calc(80vh)] m-7 gap-7 ">
      <div className="myTaskDesc rounded-2xl border border-[#A1A3AB] border-1 p-7 flex flex-col">
        <div className="taskDesc font-['Inter'] items-center flex gap-4">
          <img src={images.vital1} alt="#" className="w-[158px] h-[158px]" />
          <div className="flex flex-col mt-7">
            <h3 className="font-semibold text-base " >{task.title}</h3>
            <p className="text-xs font-normal mt-3">
              Priority: <span className="text-[#F21E1E]">{task.priority || "N/A"}</span>
            </p>
            <p className="text-xs font-normal mt-3">
              Status: <span className="text-[#F21E1E]" >{task.status || "N/A"}</span>
            </p>
            <p className="text-xs font-normal mt-3 text-[#A1A3AB] text-[10px]">
              Created on: <span >{days(task.date).utc().format("DD/MM/YYYY")}</span>
            </p>
          </div>
        </div>
        <div className="taskInfo mt-5">
          <div className="info-top text-justify">
            <h4 className="text-base font-bold font-['Inter'] text-[#747474]">
              Task Title:
              <span className="text-base font-normal text-[#747474] font-['Inter']">
              {task.title}
              </span>
            </h4>
            <h4 className="text-base font-bold font-['Inter'] text-[#747474] mt-3">
              Objective:
              <span className="text-base font-normal text-[#747474] font-['Inter']">
                Take the dog to the park and bring treats as well.
              </span>
            </h4>
          </div>
          <div className="info-desc text-justify mt-3">
            <h4 className="text-base font-bold font-['Inter'] text-[#747474]">
              Task Description:{" "}
              <span className="text-base font-normal text-[#747474] font-['Inter']">
              {task.description}
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
            <button className="bg-[#FF6767] w-9 h-9 rounded-lg">
              <i className="fa-solid fa-trash text-white"></i>
            </button>
            <button className="bg-[#FF6767] w-9 h-9 rounded-lg items-center">
              <img src={images.edit} className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskInfoPage;
