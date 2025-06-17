
import {Outlet} from "react-router-dom";
import {DashboardTopNavBar} from "../../../component/DashboardTopNavBar/DashboardTopNavBar";
import {AdminSideNavBar} from "../../../component/AdminSideNavBar/AdminSideNavBar";
import {ZEoMAdminSideNavBar} from "../../../component/ZEoMAdminSideNavBar/ZEoMAdminSideNavBar";

export const ZMoEAdminPage = () => {
    return (
        <main className='h-screen relative'>
            <DashboardTopNavBar/>
            <ZEoMAdminSideNavBar/>
            <main className='bg-[#fbfbfb] w-[90%] h-[500px] overflow-scroll flex justify-center absolute right-0 top-[75px] m-auto'>
                <Outlet/>
            </main>
        </main>
    );
};
