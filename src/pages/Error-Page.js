import Header from "../components/Layout/Header";
import Wrapper from "../helpers/Wrapper";
import PageContent from "../components/UI/Page-Content";


function ErrorPage() {
    return(
        <Wrapper>
            <Header />
            <PageContent title='An Error Occured'>
                <p>Something went wrong</p>
            </PageContent>
        </Wrapper>
    )
};

export default ErrorPage;