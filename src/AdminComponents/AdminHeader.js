import React from "react";
import { useNavigate } from "react-router-dom";
import "./AdminHeader.css";
import AdminProfileHeader from "./AdminProfileHeader";
import ZCMCLOGO from "../Assets/zcmc_logo.png";

const AdminHeader = () => {
  const navigate = useNavigate();
  return (
    <div className="admin-header">
      <div className="admin-header-brand">
        <h1 onClick={() => navigate("/dashboard")}>
          <img src={ZCMCLOGO} alt="Logo" />
          TeleMedicine
        </h1>
      </div>

      <AdminProfileHeader />
    </div>
  );
};

export default AdminHeader;
