import React, { useContext } from "react";
import styled from "styled-components";
import { AuthContext } from "../../Provider/AuthProvider";

const LogoutButton = ({ onLogout }) => {
  const { signOutUser, setUser,user } = useContext(AuthContext);

  const handleLogOut = () => {
    signOutUser()
      .then(() => {
        setUser(null);
        if (onLogout) onLogout(); 
      })
      .catch((error) => console.error("Logout error:", error));
  };

  return (
    <StyledWrapper>
      <button onClick={handleLogOut} className="Btn">
        <div className="sign">
          <img
            src={user?.photoURL || user?.reloadUserInfo?.photoUrl }
            alt="logout"
          />
        </div>
        <div className="text">Logout</div>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .Btn {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 35px;
    height: 35px;
    border-radius: 50px;
    border: 1px solid rgb(61, 106, 255);
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition-duration: 0.3s;
    color: #fff;
    background-color: transparent;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.199);
    font-family: ui-sans-serif, system-ui, sans-serif;
  }

  .sign {
    width: 100%;
    transition-duration: 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .text {
    position: absolute;
    right: 0%;
    width: 0%;
    opacity: 0;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    transition-duration: 0.3s;
  }

  .Btn:hover {
    width: 125px;
    border-radius: 5px;
    background: #3d6aff;
    transition-duration: 0.3s;
  }

  .Btn:hover .sign {
    width: 30%;
    transition-duration: 0.3s;
    padding-left: 20px;
  }

  .Btn:hover .text {
    opacity: 1;
    width: 70%;
    transition-duration: 0.3s;
    padding-right: 10px;
  }

  .Btn:active {
    transform: translate(2px, 2px);
  }
`;

export default LogoutButton;
