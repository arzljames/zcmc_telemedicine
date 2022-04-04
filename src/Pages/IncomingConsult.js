import React from "react";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import "./Homepage.css";
import "./IncomingConsult.css";
import Toast from "../Components/Toast";
import ConsultationNavbar from "../Components/ConsultationNavbar";
import useAuth from "../Hooks/useAuth";
import IncomingCaseActive from "../Components/IncomingCaseActive";
import { AnimatePresence } from "framer-motion";

const IncomingConsult = () => {
  const { cases, user, toast } = useAuth();

  return (
    <>
      <div className="container">
        <AnimatePresence>{toast && <Toast />}</AnimatePresence>
        <Sidebar />
        <div className="content">
          <Header />
          <div className="consultation-content">
            <ConsultationNavbar />
            <div className="content-body">
              <div className="admin-subheading">
                <div>
                  <h2>All Incoming Requests</h2>
                  <p>
                    List of consultation request coming from other referring
                    health facilites.
                  </p>
                </div>
              </div>

              <div className="case-body">
                {cases
                  .filter((f) => f.specialization === user.specialization && f.active === true)
                  .map((item) => {
                    return <IncomingCaseActive item={item} name={"sds"} />;
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IncomingConsult;
