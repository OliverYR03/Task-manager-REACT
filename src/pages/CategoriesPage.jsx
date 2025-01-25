import React from "react";
import images from "../assets/images.js";

function CategoriesPage() {
  return (
    <div className="flex flex-col rounded-2xl border border-[#A1A3AB]  h-[80vh] max-w-[1000px] w-full flex-1 m-9 overflow-hidden p-4">
      <div className="topT font-['Inter'] flex justify-between p-4">
        <h2 className="text-2xl font-semibold ">
          <span
            className="border-[#F24E1E] border-solid  
        border-b-2"
          >
            Task
          </span>{" "}
          Categories
        </h2>
        <p className='font-["Montserrat"] text-base font-semibold underline underline-offset-1'>
          Go back
        </p>
      </div>
      <div className="btn font-['Inter'] flex p-4">
        <button className="text-white bg-[#F24E1E] rounded-md p-2 text-sm">
          Add Category
        </button>
      </div> 
      <div className="tStatus flex flex-col p-4 ">
        <div className="flex justify-between">
          <h3 className="font-['Inter'] font-semibold">
            <span
              className="border-[#F24E1E] border-solid  
        border-b-2"
            >
              Task S
            </span>
            tatus
          </h3>
          <p>
            <i className="fa-solid fa-plus fa-rotate-90 text-[#F24E1E]"></i> Add
            Task Status
          </p>
        </div>
        <div className="overflow-x-auto mt-3">
          <table className="table-auto border-collapse border border-gray-300 w-full text-left rounded-2xl font-['Montserrat']">
            <thead className="bg-gray-100 rounded-xl text-center">
              <tr className="font-semibold text-base">
                <th className="border border-gray-300 px-4 py-2  ">SN</th>
                <th className="border border-gray-300 px-4 py-2 ">Task Status</th>
                <th className="border border-gray-300 px-4 py-2 ">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-dashed divide-gray-300 text-center ">
              <tr className="font-medium text-base" >
                <td className="border border-gray-300 px-4 py-2">1</td>
                <td className="border border-gray-300 px-4 py-2">Completed</td>
                <td className="border border-gray-300 px-4 py-2 flex gap-2 justify-center">
                  <button className="bg-[#F24E1E] text-white px-3 py-1 rounded flex justify-center gap-1 items-center">
                    <img src={images.edit} className="w-4 h-4" />
                    Edit
                  </button>
                  <button className="bg-[#F24E1E] text-white px-3 py-1 rounded flex justify-center items-center gap-1">
                    <img src={images.deleted} className="w-4 h-4" />
                    Delete
                  </button>
                </td>
              </tr>
              <tr className="font-medium text-base">
                <td className="border border-gray-300 px-4 py-2">2</td>
                <td className="border border-gray-300 px-4 py-2">In Progress</td>
                <td className="border border-gray-300 px-4 py-2 flex gap-2 justify-center">
                  <button className="bg-[#F24E1E] text-white px-3 py-1 rounded flex justify-center gap-1 items-center">
                    <img src={images.edit} className="w-4 h-4" />
                    Edit
                  </button>
                  <button className="bg-[#F24E1E] text-white px-3 py-1 rounded flex justify-center items-center gap-1">
                    <img src={images.deleted} className="w-4 h-4" />
                    Delete
                  </button>
                </td>
              </tr>
              <tr className="font-medium text-base">
                <td className="border border-gray-300 px-4 py-2">3</td>
                <td className="border border-gray-300 px-4 py-2">Not Started</td>
                <td className="border border-gray-300 px-4 py-2 flex gap-2 justify-center">
                  <button className="bg-[#F24E1E] text-white px-3 py-1 rounded flex justify-center gap-1 items-center">
                    <img src={images.edit} className="w-4 h-4" />
                    Edit
                  </button>
                  <button className="bg-[#F24E1E] text-white px-3 py-1 rounded flex justify-center items-center gap-1">
                    <img src={images.deleted} className="w-4 h-4" />
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <hr className="border-[#A1A3AB] m-0 p-0" />
      <div className="ptPriority flex flex-col p-4">
        <div className="flex justify-between">
          <h3 className="font-['Inter'] font-semibold">
            <span
              className="border-[#F24E1E] border-solid  
        border-b-2"
            >
              Task P
            </span>
            riority
          </h3>
          <p>
            <i className="fa-solid fa-plus fa-rotate-90 text-[#F24E1E]"></i> Add
            Task Priority
          </p>
        </div>
        <div className="overflow-x-auto mt-3">
          <table className="table-auto border-collapse border border-gray-300 w-full text-left font-['Montserrat'] text-center">
            <thead className="bg-gray-100">
              <tr className="font-semibold text-base">
                <th className="border border-gray-300 px-4 py-2">SN</th>
                <th className="border border-gray-300 px-4 py-2">Task Priority</th>
                <th className="border border-gray-300 px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-dashed divide-gray-300 text-center">
              <tr className="font-medium text-base">
                <td className="border border-gray-300 px-4 py-2">1</td>
                <td className="border border-gray-300 px-4 py-2">Extreme</td>
                <td className="border border-gray-300 px-4 py-2 flex gap-2 justify-center">
                  <button className="bg-[#F24E1E] text-white px-3 py-1 rounded flex justify-center gap-1 items-center">
                    <img src={images.edit} className="w-4 h-4" />
                    Edit
                  </button>
                  <button className="bg-[#F24E1E] text-white px-3 py-1 rounded flex justify-center items-center gap-1">
                    <img src={images.deleted} className="w-4 h-4" />
                    Delete
                  </button>
                </td>
              </tr>
              <tr className="font-medium text-base">
                <td className="border border-gray-300 px-4 py-2">2</td>
                <td className="border border-gray-300 px-4 py-2 font-medium">
                  Moderate
                </td>
                <td className="border border-gray-300 px-4 py-2 flex gap-2 justify-center">
                  <button className="bg-[#F24E1E] text-white px-3 py-1 rounded flex justify-center gap-1 items-center">
                    <img src={images.edit} className="w-4 h-4" />
                    Edit
                  </button>
                  <button className="bg-[#F24E1E] text-white px-3 py-1 rounded flex justify-center items-center gap-1">
                    <img src={images.deleted} className="w-4 h-4" />
                    Delete
                  </button>
                </td>
              </tr>
              <tr className="font-medium text-base">
                <td className="border border-gray-300 px-4 py-2">3</td>
                <td className="border border-gray-300 px-4 py-2">Low</td>
                <td className="border border-gray-300 px-4 py-2 flex gap-2 justify-center">
                  <button className="bg-[#F24E1E] font-['Montserrat']  text-white px-3 py-1 rounded flex justify-center gap-1 items-center">
                    <img src={images.edit} className="w-4 h-4" />
                    Edit
                  </button>
                  <button className="bg-[#F24E1E] text-white px-3 py-1 rounded flex justify-center items-center gap-1">
                    <img src={images.deleted} className="w-4 h-4" />
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CategoriesPage;
