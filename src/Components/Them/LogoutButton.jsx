import React, { useContext } from 'react';
import styled from 'styled-components';
import { AuthContext } from '../../Provider/AuthProvider';

const LogoutButton = () => {
  
   const {setUser,handleLogout}=useContext(AuthContext);

   const handelLogOut=()=>{

      handleLogout()
      setUser(null);
   }

  return (
    <StyledWrapper>
      <button 
      onClick={handelLogOut}
      className="Btn">
        <div className="sign">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTShZ42ixLLDas7Vp5s07jlza2Bj9jrQKgFm1MITv9G3ncaB4_26oHCvBjS5p8w4j-Rk6OZ8550Ps-g6hw1_kRp-K--BwCY2hhHOycqoFcR&s=10" alt="" />
        </div>
        <div className="text">Logout</div>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .Btn {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 35px;
    height: 35px;
 border-radius: 7px;
    border: 1px solid rgb(61, 106, 255);
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition-duration: 0.3s;
    color: #fff; /* 🔹 Text color white */
    background-color: transparent;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.199);
    font-family: ui-sans-serif, system-ui, sans-serif, 
      "Apple Color Emoji", "Segoe UI Emoji", 
      "Segoe UI Symbol", "Noto Color Emoji";
  }

  .sign {
    width: 100%;
    transition-duration: 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .sign svg {
    width: 17px;
  }

  .sign svg path {
    fill: #fff; /* 🔹 Icon color white */
  }

  .text {
    position: absolute;
    right: 0%;
    width: 0%;
    opacity: 0;
    color: #fff; /* 🔹 Text color white */
    font-size: 16px;
    font-weight: 600;
    transition-duration: 0.3s;
  }

  .Btn:hover {
    width: 125px;
    border-radius: 5px;
    background: #3D6AFF; /* 🔹 Blue hover background */
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
