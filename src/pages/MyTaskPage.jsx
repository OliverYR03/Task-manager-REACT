import images from "../assets/images";

function MyTaskPage() {
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
            <h4>Submit Documents</h4>
            <i class="fa-light fa-ellipsis-stroke text-[#A1A3AB]"></i>
          </div>
          <div className="cardDesc flex items-center justify-between text-[#747474] font-normal">
            <p>Make sure to submit all the necessary docum....</p>
            <img src={images.card1} alt="" lassName="rounded-[14px]" />
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
            <h4>Complete assignments</h4>
            <i class="fa-light fa-ellipsis-stroke text-[#A1A3AB] cursor-pointer"></i>
          </div>
          <div className="cardDesc flex items-center justify-between text-[#747474] font-normal">
            <p>The assignments must be completed to pass final year....</p>
            <img src={images.card2} alt="" className="rounded-[14px]" />
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
          <img src={images.card1} alt="#" className="w-[158px] h-[158px]" />
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
        <div className="taskInfo">
          <div className="info-top text-justify">
            <h4 className="text-base font-bold font-['Inter'] text-[#747474]">
              Task Title:{" "}
              <span className="text-base font-normal text-[#747474] font-['Inter']">
                Document Submission.
              </span>
            </h4>
            <h4 className="text-base font-bold font-['Inter'] text-[#747474]">
              Objective:{" "}
              <span className="text-base font-normal text-[#747474] font-['Inter']">
                To submit required documents for something important
              </span>
            </h4>
          </div>
          <div className="info-desc text-justify">
            <h4 className="text-base font-bold font-['Inter'] text-[#747474]">
              Task Description:{" "}
              <span className="text-base font-normal text-[#747474] font-['Inter']">
                Review the list of documents required for submission and ensure
                all necessary documents are ready. Organize the documents
                accordingly and scan them if physical copies need to be
                submitted digitally. Rename the scanned files appropriately for
                easy identification and verify the accepted file formats. Upload
                the documents securely to the designated platform, double-check
                for accuracy, and obtain confirmation of successful submission.
                Follow up if necessary to ensure proper processing.
              </span>
            </h4>
          </div>
          <div className="additional">
            <h4 className="text-base font-bold font-['Inter'] text-[#747474]">
              Additional Notes:
            </h4>
            <ul>
              <li className="list-disc text-base font-normal text-[#747474] font-['Inter'] list-inside ml-3 text-justify">
                Ensure that the documents are authentic and up-to-date
              </li>
              <li className="list-disc text-base font-normal text-[#747474] font-['Inter'] list-inside ml-3 text-justify">
                Maintain confidentiality and security of sensitive
              </li>
              <li className="list-disc text-base font-normal text-[#747474] font-['Inter'] list-inside ml-3 text-justify">
                If there are specific guidelines or deadlines for submission,
                adhere to them diligently.
              </li>
            </ul>
            <h4 className="text-base font-bold font-['Inter'] text-[#747474]">
              Deadline for Submission:{" "}
              <span className="text-base font-normal text-[#747474] font-['Inter']">
                End of Day
              </span>
            </h4>
          </div>
          <div className="action gap-4 flex flex-">
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
  );
}

export default MyTaskPage;
