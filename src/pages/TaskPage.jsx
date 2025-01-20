import { useEffect } from "react";
import { useAuth } from "../context/AuthContext.";
import { useTasks } from "../context/TaskContext";
import TaskCard from "../components/TaskCard";

function TaskPage() {
  const { getTasks, tasks } = useTasks();

  useEffect(() => {
    getTasks();
  }, []);

  if (tasks.length === 0) return <h1> No hay tareas</h1>;

  return (
    <div>
      <div className="mt-10 flex justify-between align-middle">
        <h2 className="text-3xl font-medium">Board</h2>
        <p className="text-base">
          This week <i className="fa-solid fa-chevron-down"></i>
        </p>
      </div>
      <section className="to-do-container grid  justify-between h-full">
        <div className="to-do overflow-y-auto flex flex-col m-5 rounded-xl bg-gray-200 px-5 py-8">
          <div className="to-do-text flex align-middle justify-between text-[#707070] font-medium text-lg">
            <p>To do</p>
            <p className="plus-eli flex gap-4">
              <i className="fa-solid fa-plus"></i>
              <i className="fa-solid fa-ellipsis"></i>
            </p>
          </div>
          <div className="card-container mt-5 grid justify-center auto-cols-auto gap-5 ">
            {tasks.map((task) => (
            <div key={task._id}>
              <TaskCard task={task} key={task._id} />
            </div>
          ))}
          </div>
        </div>
        <div className="inprogress m-5 rounded-xl bg-gray-200 px-5 py-8">
          <div className="inprogress-text flex align-middle justify-between text-[#707070] font-medium text-lg">
            <p>In progress</p>
            <p className="plus-eli flex gap-4">
              <i className="fa-solid fa-plus"></i>
              <i className="fa-solid fa-ellipsis"></i>
            </p>
          </div>
          <div className="card-container mt-5 grid justify-center auto-cols-auto gap-5 ">

          </div>
        </div>
          <div className="done m-5 rounded-xl bg-gray-200 px-5 py-8">
            <div className="done-text flex align-middle justify-between text-[#707070] font-medium text-lg">
              <p>Done</p>
              <p className="plus-eli flex gap-4">
                <i className="fa-solid fa-plus"></i>
                <i className="fa-solid fa-ellipsis"></i>
              </p>
            </div>
            <div className="card-container mt-5 grid justify-center auto-cols-auto gap-5 ">

            </div>
          </div>
      </section>

      <div className="grid md:grid-cols-3 gap-2 sm:gridcols-2 m-8">

      </div>
    </div>
  );
}

export default TaskPage;
