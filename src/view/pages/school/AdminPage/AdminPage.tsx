
import {Outlet} from "react-router-dom";
import {DashboardTopNavBar} from "../../../component/DashboardTopNavBar/DashboardTopNavBar";
import {AdminSideNavBar} from "../../../component/AdminSideNavBar/AdminSideNavBar";

export const AdminPage = () => {
    return (
        <main className='h-screen relative'>
            <DashboardTopNavBar/>
            <AdminSideNavBar/>
            <main className='bg-[#fbfbfb] w-[90%] h-max flex justify-center absolute right-0 top-[75px] m-auto'>
                <Outlet/>
            </main>
        </main>
    );
};
