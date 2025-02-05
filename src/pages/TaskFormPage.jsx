import { useForm } from "react-hook-form";
import { useTasks } from "../context/TaskContext";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Dropzone from "react-dropzone";
import images from "../assets/images";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

function TaskFormPage() {
  const { register, handleSubmit, setValue } = useForm();
  const { createTask, getTask, updateTask } = useTasks();
  const navigate = useNavigate();
  const params = useParams();

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
    // <div className="flex h-[calc(100vh-100px)] items-center justify-center">
    //   <div className="bg-[#ff6767] max-w-md w-full p-10 rounded-md ">
    //     <form onSubmit={onSubmit}>
    //       <label htmlFor="title">TITLE</label>
    //       <input
    //         type="text"
    //         placeholder="Title"
    //         {...register("title")}
    //         autoFocus
    //         className="w-full  bg-red-200  px-4 py-2 rounded-md my-2"
    //       />
    //       <label htmlFor="status">Status:</label>
    //       <select name="status" id="status" {...register("status")}>
    //         <option value="Not Started">
    //           Not started
    //         </option>
    //         <option value="hola">xd</option>
    //       </select>

    //       <label htmlFor="priority">Priority:</label>

    //       <label htmlFor="description">description</label>
    //       <textarea
    //         rows="3"
    //         placeholder="Description"
    //         {...register("description")}
    //         className="w-full bg-red-200  px-4 py-2 rounded-md my-2"
    //       ></textarea>
    //       <label htmlFor="date">date</label>
    //       <input
    //         type="date"
    //         {...register("date")}
    //         className="w-full bg-red-200 px-4 py-2 rounded-md my-2"
    //       />
    //       <button className="bg-red-200 px-3 py-2 rounded-md">Save</button>
    //     </form>
    //   </div>
    // </div>

    <div className="flex justify-center flex-col h-[70vh] max-w-[1200px] font-['Montserrat'] border border-[#A1A3AB] border-1 p-6">
      <nav className="flex justify-between">
        <h3 className="font-semibold text-base ">
          <span
            className="border-[#F24E1E] border-solid  
        border-b-2 "
          >
            Add New ta
          </span>
          sk
        </h3>
        <Link className="text-sm underline underline-offset-2 font-semibold">
          Go back
        </Link>
      </nav>
      <div className="formContainer grid grid-cols-createtask">
        <div className="">
          <div className="top flex flex-col">
            <label htmlFor="title" className="text-sm font-semibold">Title</label>
            <input
              type="text"
              {...register("title")}
              className="w-full p-2 px-5 rounded-md border border-[#A1A3AB]"
            />
            <label htmlFor="Date" className="text-sm font-semibold">Date</label>
            <input
              type="date"
              {...register("date")}
              className=" px-4 py-2  border border-[#A1A3AB] text-white rounded-md my-2"
            />
            <p className="text-sm font-semibold">Priority</p>
            <div className="priorityC ">
              <ul className="flex gap-4">
                <li>
                  <label htmlFor="extreme">Extreme</label>
                  <input type="checkbox" name="extreme" id="extreme" />
                </li>
                <li>
                  <label htmlFor="moderate">Moderate</label>
                  <input type="checkbox" name="moderate" id="moderate" />
                </li>
                <li>
                  <label htmlFor="low">Low</label>
                  <input type="checkbox" name="low" id="low" />
                </li>
              </ul>
            </div>
          </div>
          <div className="bot flex justify-between">
            <div className="desc flex flex-col">
              <label htmlFor="description">Task Description</label>
              <textarea
                className="w-full border border-[#A1A3AB]"
                name="description"
                id="description"
                placeholder="Start writing here..."
              ></textarea>
            </div>
          </div>
        </div>
        <div className="img flex flex-col">
          <p className="font-semibold text-sm">Upload Image</p>
          <Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
            {({ getRootProps, getInputProps }) => (
              <div className="border border-[#A1A3AB] border-1 h-[214px] w-[205px] flex justify-center">
                <div
                  {...getRootProps()}
                  className="text-[#A1A3AB] flex flex-col items-center justify-center"
                >
                  <img src={images.imgup} alt="" srcset="" />
                  <input {...getInputProps()} />
                  <p className="text-center">Drag&Drop files here <br /> or</p>
                  <button className="border rounded-md p-2 text-xs font-medium">
                    Browse
                  </button>
                </div>
              </div>
            )}
          </Dropzone>
        </div>
      </div>
    </div>
  );
}

export default TaskFormPage;
