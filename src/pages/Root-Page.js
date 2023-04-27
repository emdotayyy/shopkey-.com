import { Outlet } from "react-router-dom";
import Header from "../components/Layout/Header";
import Wrapper from "../helpers/Wrapper";

function RootPage() {
    return (
        <Wrapper>
            <Header />
            <main>
                <Outlet />
            </main>
        </Wrapper>
    );
};

export default RootPage;