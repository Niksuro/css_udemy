import NextImage from "../../components/atoms/Image";
import {
  HeaderWrapper,
  HeadingPrimary,
  HeadingPrimaryMain,
  HeadingPrimarySub,
  LogoBox,
  LogoBoxImg,
  LogoBoxImgIntrinsic,
  TextBox,
} from "./Header.style";

const logo = {
  src: "/img/niksuro_logo.png",
  alt: "alt_niksuro_logo",
  title: "title_niksuro_logo",
};

const Header = () => {
  return (
    <HeaderWrapper>
      <LogoBox>
        <LogoBoxImg>
          <NextImage {...logo} />
        </LogoBoxImg>
        {/* <LogoBoxImgIntrinsic src={logo.src} /> */}
      </LogoBox>
      <TextBox>
        <HeadingPrimary>
          <HeadingPrimaryMain>Quinn</HeadingPrimaryMain>
          <HeadingPrimarySub>is all that matters</HeadingPrimarySub>
        </HeadingPrimary>
      </TextBox>
    </HeaderWrapper>
  );
};

export default Header;
