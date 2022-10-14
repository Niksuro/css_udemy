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
  top: 40px;
  left: 40px;
`;
export const LogoBoxImgIntrinsic = styled.img`
  height: 100px;
`;
export const LogoBoxImg = styled.div`
  height: 100px;
  width: 100px;
`;
export const TextBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const HeadingPrimary = styled.h1`
  color: white;
  text-transform: uppercase;
  backface-visibility: hidden;
`;
export const HeadingPrimaryMain = styled.span`
  display: block;
  font-size: 60px;
  font-weight: 400;
  letter-spacing: 35px;

  animation-name: ${moveInUp};
  animation-duration: 2s;
  animation-timing-function: ease-out;
`;
export const HeadingPrimarySub = styled.span`
  display: block;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 10px;

  animation: ${moveInDown} 2s ease-out;
`;
