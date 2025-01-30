import images from "../assets/images";

function VitalTaskPage() {
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
            <div className="cardTask font-['Inter'] mt-4 p-3 pl-10 rounded-2xl bg-[rgba(161,163,171,0.13)]  border-gray-400 border-2">
              <div className="cardTop flex gap-3 font-semibold text-base items-center justify-between">
                <img
                  src={images.notStarted}
                  className="absolute ml-[-20px] w-3 h-3"
                />
                <h4>Walk the dog</h4>
                <i class="fa-light fa-ellipsis-stroke text-[#A1A3AB]"></i>
              </div>
              <div className="cardDesc flex items-center justify-between text-[#747474] font-normal">
                <p className="pr-8">Take the dog to the park and bring treats as well....</p>
                <img src={images.vital1} alt="" lassName="rounded-[14px]" />
              </div>
              <div className="cardInfo flex justify-between font-normal text-[10px] mt-2">
                <h4>
                  Priority <span className="text-[#F21E1E]">Extreme</span>
                </h4>
                <h4>
                  Status <span className="text-[#F21E1E]">Not Started</span>
                </h4>
                <h4 className="text-[#A1A3AB]">
                  Created on <span>20/06/2023</span>
                </h4>
              </div>
            </div>
            <div className="cardTask font-['Inter'] mt-4 p-3 pl-10 rounded-2xl   border-gray-400 border-2">
              <div className="cardTop flex gap-3 font-semibold text-base items-center justify-between">
                <img
                  src={images.inProgress}
                  className="absolute ml-[-20px] w-3 h-3"
                />
                <h4>Take grandma to Hospital</h4>
                <i class="fa-light fa-ellipsis-stroke text-[#A1A3AB] cursor-pointer"></i>
              </div>
              <div className="cardDesc flex items-center justify-between text-[#747474] font-normal">
                <p className="pr-8">Go back home and take grandma to the hosp....</p>
                <img src={images.vital2} alt="" className="rounded-[14px]" />
              </div>
              <div className="cardInfo flex justify-between font-normal text-[10px] mt-2">
                <h4>
                  Priority <span className="text-[#42ADE2]">Moderate</span>
                </h4>
                <h4>
                  Status <span className="text-[#0225FF]">In Progress</span>
                </h4>
                <h4 className="text-[#A1A3AB]">
                  Created on <span>20/06/2023</span>
                </h4>
              </div>
            </div>
          </div>
    
          <div className="myTaskDesc rounded-2xl border border-[#A1A3AB] border-1 p-7 flex flex-col">
            <div className="taskDesc font-['Inter'] items-center flex gap-4">
              <img src={images.vital1} alt="#" className="w-[158px] h-[158px]" />
              <div className="flex flex-col mt-7">
                <h3 className="font-semibold text-base ">Submit Documents</h3>
                <p className="text-xs font-normal mt-3">
                  Priority: <span className="text-[#F21E1E]">Extreme</span>
                </p>
                <p className="text-xs font-normal mt-3">
                  Status: <span className="text-[#F21E1E]">Not Started</span>
                </p>
                <p className="text-xs font-normal mt-3 text-[#A1A3AB] text-[10px]">
                  Created on: <span>20/06/2023</span>
                </p>
              </div>
            </div>
            <div className="taskInfo mt-5">
              <div className="info-top text-justify">
                <h4 className="text-base font-bold font-['Inter'] text-[#747474]">
                  Task Title:{" "}
                  <span className="text-base font-normal text-[#747474] font-['Inter']">
                  Walk the dog.
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
                  Take Luffy and Jiro for a leisurely stroll around the neighborhood. 
                  Enjoy the fresh air and give them the exercise and mental stimulation 
                  they need for a happy and healthy day. Don't forget to bring along squeaky
                   and fluffy for some extra fun along the way!
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
                  <img src={images.edit} className="ml-2"/>
                </button>
              </div>
            </div>
          </div>
        </div>
  )
}

export default VitalTaskPage