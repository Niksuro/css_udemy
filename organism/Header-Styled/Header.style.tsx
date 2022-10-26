import styled, { keyframes } from "styled-components";

const moveInUp = keyframes`
 0% { opacity: 0; transform: translateY(-100px) }
 80% { opacity: 0.8; transform: translateY(10px)  }
 100% { opacity: 1; transform: translateY(0px) }
`;

const moveInDown = keyframes`
 0% { opacity: 0; transform: translateY(30px) }
 80% { opacity: 0.8; transform: translateY(-5px)  }
 100% { opacity: 1; transform: translateY(0px) }
`;

export const HeaderWrapper = styled.header`
  height: 95vh;
  background-image: linear-gradient(to right bottom, #7ed56f90, #28b485ea),
    url(/img/star_guardian_quinn.jpg);
  background-size: cover;
  background-position: top;
  position: relative;
  clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
`;

export const LogoBox = styled.div`
  position: absolute;
  top: 4rem;
  left: 4rem;
`;
export const LogoBoxImgIntrinsic = styled.img`
  height: 10rem;
`;
export const LogoBoxImg = styled.div`
  height: 10rem;
  width: 10rem;
`;
export const TextBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;
export const HeadingPrimary = styled.h1`
  color: white;
  text-transform: uppercase;
  backface-visibility: hidden;
  margin-bottom: 6rem;
`;
export const HeadingPrimaryMain = styled.span`
  display: block;
  font-size: 6rem;
  font-weight: 400;
  letter-spacing: 3.5rem;

  animation-name: ${moveInUp};
  animation-duration: 2s;
  animation-timing-function: ease-out;
`;
export const HeadingPrimarySub = styled.span`
  display: block;
  font-size: 1.6rem;
  font-weight: 700;
  letter-spacing: 1rem;

  animation: ${moveInDown} 2s ease-out;
`;
