import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <Background>
      <StyledWrapper>
        <div className="loader" />
        <p className="loading-text">Loading...</p>
      </StyledWrapper>
    </Background>
  );
}

// Background styling
const Background = styled.div`
  background-color: #0B1120; /* Dark background */
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// Loader styling
const StyledWrapper = styled.div`
  position: relative;
  text-align: center;

  .loader {
    position: relative;
    width: 2.5em;
    height: 2.5em;
    transform: rotate(165deg);
    margin: 0 auto;
  }

  .loader:before, .loader:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    width: 0.5em;
    height: 0.5em;
    border-radius: 0.25em;
    transform: translate(-50%, -50%);
  }

  .loader:before {
    animation: before8 2s infinite;
  }

  .loader:after {
    animation: after6 2s infinite;
  }

  @keyframes before8 {
    0% { width: 0.5em; box-shadow: 1em -0.5em rgba(225, 20, 98, 0.75), -1em 0.5em rgba(111, 202, 220, 0.75); }
    35% { width: 2.5em; box-shadow: 0 -0.5em rgba(225, 20, 98, 0.75), 0 0.5em rgba(111, 202, 220, 0.75); }
    70% { width: 0.5em; box-shadow: -1em -0.5em rgba(225, 20, 98, 0.75), 1em 0.5em rgba(111, 202, 220, 0.75); }
    100% { box-shadow: 1em -0.5em rgba(225, 20, 98, 0.75), -1em 0.5em rgba(111, 202, 220, 0.75); }
  }

  @keyframes after6 {
    0% { height: 0.5em; box-shadow: 0.5em 1em rgba(61, 184, 143, 0.75), -0.5em -1em rgba(233, 169, 32, 0.75); }
    35% { height: 2.5em; box-shadow: 0.5em 0 rgba(61, 184, 143, 0.75), -0.5em 0 rgba(233, 169, 32, 0.75); }
    70% { height: 0.5em; box-shadow: 0.5em -1em rgba(61, 184, 143, 0.75), -0.5em 1em rgba(233, 169, 32, 0.75); }
    100% { box-shadow: 0.5em 1em rgba(61, 184, 143, 0.75), -0.5em -1em rgba(233, 169, 32, 0.75); }
  }

  .loading-text {
    color: #FFFFFF; /* White text for contrast */
    margin-top: 2rem;
    font-size: 1.2rem;
    font-weight: 500;
  }
`;

export default Loader;
