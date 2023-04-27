import Wrapper from "../../helpers/Wrapper";
import HeaderCartButton from "./Header-Cart-Button";
import classes from './Header.module.css';
import header from '../Assets/header.png';

function Header() {
    return (
        <Wrapper>
            <header className={classes.header}>
                <img className={classes.imgHeader} src={header} alt=""/>
                <HeaderCartButton />
            </header>
        </Wrapper>
    );
};

export default Header;