import Wrapper from "../helpers/Wrapper";
import mainImg from '../components/Assets/mainImg.png';
import { NavLink } from "react-router-dom";
import classes from '../helpers/Home-Page.module.css';

function Homepage() {
    return (
        <Wrapper>
            <div>
                <div className={classes.mainImage}>
                    <img src={mainImg} alt=""/>
                    <ul className={classes.list}>
                        <NavLink to='/products'>Show Products</NavLink>
                    </ul>
                </div>
            </div>
        </Wrapper>
    );
};

export default Homepage;