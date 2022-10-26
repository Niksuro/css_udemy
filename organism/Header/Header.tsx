import RoundButton from "../../components/atoms/Buttons/RoundButton/RoundButton";
import NextImage from "../../components/atoms/Image";

const logo = {
  src: "/img/niksuro_logo.png",
  alt: "alt_niksuro_logo",
  title: "title_niksuro_logo",
};

const Header = () => {
  return (
    <header className="header">
        <div className="header__logo-box">
          <NextImage {...logo} />
        </div>
        <div className="header__text-box">
            <h1 className="heading-primary">
                <span className="heading-primary--main">Quinn</span>
                <span className="heading-primary--sub">is all that matters</span>
            </h1>
            <RoundButton>Discover our builds</RoundButton>
        </div>
    </header>
  );
};

export default Header;
