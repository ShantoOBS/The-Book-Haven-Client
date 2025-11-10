import React from 'react';
import styled from 'styled-components';

const Button = ({Name}) => {
  return (
    <StyledWrapper>
      <button>
        {
         Name
       }
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  button {
    position: relative;
    padding: 8px 20px;
    border-radius: 7px;
    border: 1px solid rgb(61, 106, 255);
    font-size: 16px;
    font-weight: 600;
    background: transparent;
    color: #fff;
    overflow: hidden;
    box-shadow: 0 0 0 0 transparent;
    transition: all 0.2s ease-in;
    cursor: pointer; /* 👈 Added this line */
    font-family: ui-sans-serif, system-ui, sans-serif, 
      "Apple Color Emoji", "Segoe UI Emoji", 
      "Segoe UI Symbol", "Noto Color Emoji"; 
  }

  button:hover {
    background: rgb(61, 106, 255);
    box-shadow: 0 0 30px 5px rgba(0, 142, 236, 0.815);
    transition: all 0.2s ease-out;
  }

  button:hover::before {
    animation: sh02 0.5s 0s linear;
  }

  button::before {
    content: '';
    display: block;
    width: 0px;
    height: 86%;
    position: absolute;
    top: 7%;
    left: 0%;
    opacity: 0;
    background: #fff;
    box-shadow: 0 0 50px 30px #fff;
    transform: skewX(-20deg);
  }

  @keyframes sh02 {
    from {
      opacity: 0;
      left: 0%;
    }

    50% {
      opacity: 1;
    }

    to {
      opacity: 0;
      left: 100%;
    }
  }

  button:active {
    box-shadow: 0 0 0 0 transparent;
    transition: box-shadow 0.2s ease-in;
  }
`;

export default Button;
