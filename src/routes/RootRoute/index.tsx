import { BrowserRouter, Route,Routes } from "react-router-dom";
import DefaultLayout from "../../layout/DefaultLayout";
import HomePage from "../../pages/HomePage";

const RootRoute = () => {

    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route index element={<HomePage />} />
            </Route>
        </Routes>
        </BrowserRouter>
    )
}

export default RootRoute;