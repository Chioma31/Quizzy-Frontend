import sid from'./Sidebar.module.css';
import { SidebarData } from './SidebarData';
const Sidebar = () => {
    return ( 
        <>
        <div className={sid.Sidebar}>
            <img src="images/logo.png" alt="" />
              <ul className={sid.SidebarList}>
           {SidebarData.map((val, key)=>{
               return(
                <li key={key}
                className={sid.row}
                id={window.location.pathname === val.link ? "active" : ""}
                 onClick={()=>{window.location.pathname = val.link}}>
                   {" "}
                   <div id='icon' className={sid.icon}>{val.icon}</div>{" "}
                   <div id='title' className={sid.title}>
                       {val.title}
                   </div>
                   </li>
               );
           })}
           </ul>
        </div>
        </>
     );
}
 
export default Sidebar;