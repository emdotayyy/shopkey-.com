import Wrapper from "../../helpers/Wrapper";
import classes from './Page-Content.module.css'

function PageContent({title, children}) {
    return (
        <Wrapper>
            <div className={classes.content}>
                <h1>{title}</h1>
                {children}
            </div>
        </Wrapper>
    );
};

export default PageContent;