import { useForm } from "react-hook-form";
import { useTasks } from "../context/TaskContext";
import { useStatuses } from "../context/StatusContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);



function TaskFormPage() {
  const { register, handleSubmit, setValue,} = useForm();
  const {setStatuses} = useState([])
  const { createTask, getTask, updateTask } = useTasks();
  const navigate = useNavigate();
  const params = useParams();

  const  {getStatuses, statuses}  = useStatuses();
  const {getPriorities, priorities} = useStatuses();
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedValue(value);  
    console.log(value);  
  };


  useEffect(() => {
    async function loadTask() {
      if (params.id) {
        const task = await getTask(params.id);
        console.log(task);
        setValue("title", task.title);
        setValue("description", task.description);
        setValue("date", dayjs(task.date).utc().format("YYYY-MM-DD"));
        setValue("priority", task.priority);
        setValue("status", task.status);
      }
    }
    getPriorities();
    getStatuses();
    loadTask();
  }, []);

  const onSubmit = handleSubmit((data) => {
    const dataValid = {
      ...data,
      date: data.date ? dayjs.utc(data.date).format() : dayjs.utc().format(),
    };

    if (params.id) {
      updateTask(params.id, dataValid);
    } else {
      createTask(dataValid);
    }
    navigate("/tasks");
  });

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-[#ff6767] max-w-md w-full p-10 rounded-md ">
        <form onSubmit={onSubmit}>
          <label htmlFor="title">TITLE</label>
          <input
            type="text"
            placeholder="Title"
            {...register("title")}
            autoFocus
            className="w-full  bg-red-200  px-4 py-2 rounded-md my-2"
          />
          <label htmlFor="status">Status:</label>
          <select
            id="status"
            {...register("status")} 
            defaultValue={statuses.find((status) => status.titile === "Not Started")?._id}
            className="w-full  bg-red-200 px-4 py-2 rounded-md my-2"
          >
            {statuses
            .map((status) => (
              <option key={status._id} value={status._id}>
                {status.title}
              </option>
            ))}
          </select>

          <label htmlFor="priority">Priority:</label>
          <select
            id="priority"
            className="w-full bg-red-200  px-4 py-2 rounded-md my-2"
            {...register("priority")} 
            onChange={handleChange} value={selectedValue}
          >
            <option >Select a priority</option>
            {priorities.map((priority) => (
              <option key={priority._id} value={priority._id}>
                {priority.title}
                {priority._id}
              </option>
            ))}
          </select>
          <label htmlFor="description">description</label>
          <textarea
            rows="3"
            placeholder="Description"
            {...register("description")}
            className="w-full bg-red-200  px-4 py-2 rounded-md my-2"
          ></textarea>
          <label htmlFor="date">date</label>
          <input
            type="date"
            {...register("date")}
            className="w-full bg-red-200 px-4 py-2 rounded-md my-2"
          />
          <button className="bg-red-200 px-3 py-2 rounded-md">Save</button>
        </form>
      </div>
    </div>
  );
}

export default TaskFormPage;
