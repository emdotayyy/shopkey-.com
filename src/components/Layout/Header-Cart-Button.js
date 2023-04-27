import Wrapper from "../../helpers/Wrapper";
import classes from './Header-Cart-Button.module.css';
import CartIcon from './Cart-Icon';

function HeaderCartButton() {
    return (
        <Wrapper>
            <button className={classes.button}>
                <span className={classes.icon}><CartIcon /></span>
                <span className={classes.badge}>2</span>
            </button>
        </Wrapper>
    );
};

export default HeaderCartButton;