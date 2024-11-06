import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useLocation } from "react-router-dom";
import Routers from "../../Routers/Routers";
import AdminNav from "../../Admin/AdComponents/AdminNav/AdminNav";
import AdminFooter from "../../Admin/AdComponents/AdFooter/AdminFooter";
const Layout = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname.startsWith("/admin") ? <AdminNav /> : <Header />}
      <div className="mb-20">
        <Routers />
      </div>
      {location.pathname.startsWith("/admin") ? <AdminFooter /> : <Footer />}
    </>
  );
};

export default Layout;
