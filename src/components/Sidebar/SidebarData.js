import {MdDashboard} from "react-icons/md";
import {MdQuiz} from "react-icons/md";
import {HiOutlineBookOpen}  from "react-icons/hi";
import {CgProfile} from "react-icons/cg";
import {GoItalic} from "react-icons/go"

export const SidebarData = [
    {
        title:"Dashboard",
        icon:<MdDashboard size={50}/>,
        link:"/AdminPage"
    },
    {
        title:"Take quiz",
        icon:<MdQuiz size={50}/>,
        link:"/TakeQuiz"
    },
    {
        title:"Test Yourself",
        icon:<HiOutlineBookOpen size={50}/>,
        link:"/TestYourSelf"
    },
    {
        title:"Edit Profile",
        icon:<CgProfile size={50}/>,
        link:"/Username"
    },
    {
        title:"Help",
        icon:<GoItalic size={50}/>,
        link:"/Problem"
    },
];
  
