import React from "react";
import Navbar from "../components/Navbar";
import { CiLocationArrow1 } from "react-icons/ci";
import StepCounterComp from "../components/StepCounterComp";
import Weight from "../components/Weight";
import Calories from "../components/Calories";
import HeartRate from "../components/HeartRate";
import Facts from "../components/Facts";
import HealthStatus from "../components/HealthStatus";
import { useLocation, useNavigate } from "react-router-dom";
import SleepStatus from "../components/SleepStatus";
import Sleep from "../components/Sleep";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen w-full p-10 flex ">
      {/* <Navbar /> */}
      <div className="sm:ml-10  h-screen w-full flex flex-col sm:flex-row gap-5 sm:gap-8 mb-10 ">
        <div className="flex flex-col gap-5 w-full sm:w-[30%] min-h-[100vh] sm:min-h-[120vh]">
          <div className="flex h-[30%] sm:h-[20%] gap-5">
            <Weight />
            <Calories />
          </div>
          <div className="h-[30%] sm:h-[30%] w-full relative">
            <CiLocationArrow1
              onClick={() => navigate("/steps")}
              className="absolute right-3 top-3 z-50 bg-[#EAF1F3] rounded-xl h-8 p-1 w-8 cursor-pointer"
            />
            <StepCounterComp />
          </div>

          <div className="h-[30vh] sm:h-[50vh] w-full sm:w-[100%] flex gap-2">
            <HealthStatus />
            <SleepStatus />
          </div>
        </div>
        <div className=" w-full flex gap-5 min-h-[100vh] sm:min-h-[105vh] flex-col ">
          <div className="flex sm:flex-row flex-col gap-2 h-full w-full items-center justify-center">
            <HeartRate />
            <Facts />
          </div>
          <div className="w-full border-2 border-gray-400 h-fit sm:min-h-[50vh] mt-6  rounded-3xl">
            <div className="h-80% w-full flex-col sm:flex-row flex gap-2 p-3">
              <div className="h-[30vh] w-full rounded-2xl sm:w-[33.33%] bg-[#fff]"></div>
              <div className="h-[30vh] rounded-2xl w-full sm:w-[33.33%] bg-[#fff]"></div>
              <div className="h-[30vh] rounded-2xl w-full sm:w-[33.33%] bg-[#fff]"></div>
            </div>
            <div className="h-20% p-3">
              <div className="h-[13vh] rounded-3xl w-full border-2 border-gray-400">
                <Sleep />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
