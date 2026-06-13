import  { useContext, useEffect } from "react";
import Dashboard from "../../pages/dashboard/Dashboard";
import Navbar from "./navbar/Index";
import Sidebar from "./sidebar/Index";
import { AdminContext } from "../../context/adminLayoutContext";

const Index = () => {
  const {showSidebar} = useContext(AdminContext)
  useEffect(()=>{
    // require('../../assets/js/toggleSidebar')
    // toggleSidebar();
  },[])
  return (

      <div>
        <Navbar />
        <Sidebar />
        <section id="content_section"
        className={`bg-light py-2 px-3 ${showSidebar ? "with_sidebar" : null}`}>
          <Dashboard/>
        </section>
      </div>

  );
};

export default Index;
