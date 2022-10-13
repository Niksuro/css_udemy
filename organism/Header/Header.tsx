import DefaultOrganism from "../DefaultOrganism/DefaultOrganism";
import { HeaderWrapper } from "./Header.style";

const Header = () => {
    return (
        <HeaderWrapper>
            <DefaultOrganism>Texto de prueba</DefaultOrganism>
        </HeaderWrapper>
    );
}

export default Header;