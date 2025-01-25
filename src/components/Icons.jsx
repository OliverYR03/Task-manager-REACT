import { BiTask, BiSolidDashboard } from "react-icons/bi";
import { MdOutlineLogout, MdOutlineCalendarMonth, MdOutlineHome } from "react-icons/md";
import { PiBellSimple } from "react-icons/pi";
import { IoHelpCircleSharp } from "react-icons/io5";
import { FaUser, FaSearch, FaExclamation } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineSetting } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { GrTask } from "react-icons/gr";

const Icons = {
  Calendar: MdOutlineCalendarMonth,
  Home: MdOutlineHome,
  User: FaUser,
  Search: FaSearch,
  Settings: AiOutlineSetting,
  bell: PiBellSimple,
  twitter: FaSquareXTwitter,
  google: FcGoogle,
  dashboard: BiSolidDashboard,
  exclamation: FaExclamation,
  task: BiTask,
  categories: GrTask,
  settings: IoMdSettings,
  help: IoHelpCircleSharp,
  logout: MdOutlineLogout,
};

export default Icons;
