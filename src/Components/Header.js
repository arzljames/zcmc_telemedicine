import React, { useEffect, useState } from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import ProfileHeader from "./ProfileHeader";
import useAuth from "../Hooks/useAuth";
import api from "../API/Api";

const Header = () => {
  const navigate = useNavigate();
  const { user, facilities } = useAuth();

  return (
    <div className="admin-header">
      <h1 onClick={() => navigate("/")}>Telemedicine</h1>

      <ProfileHeader />
    </div>
  );
};

export default Header;
