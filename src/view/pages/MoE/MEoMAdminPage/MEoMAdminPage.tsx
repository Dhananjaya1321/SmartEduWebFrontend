
import {Outlet} from "react-router-dom";
import {DashboardTopNavBar} from "../../../component/DashboardTopNavBar/DashboardTopNavBar";
import {MEoMAdminSideNavBar} from "../../../component/MEoMAdminSideNavBar/MEoMAdminSideNavBar";

export const MEoMAdminPage = () => {
    return (
        <main className='h-screen relative'>
            <DashboardTopNavBar/>
            <MEoMAdminSideNavBar/>
            <main className='bg-[#fbfbfb] w-[90%] h-max flex justify-center absolute right-0 top-[75px] m-auto'>
                <Outlet/>
            </main>
        </main>
    );
};
