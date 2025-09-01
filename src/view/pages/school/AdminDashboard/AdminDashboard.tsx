import React, {useEffect, useState} from "react";
import dashboardAPIController from "../../../../controller/DashboardAPIController";

interface DashboardData {
    parentsCount: number,
    principalsCount: number,
    provinceCount: number,
    schoolsCount: number,
    staffUsersCount: number,
    studentsCount: number,
    teachersCount: number,
    zonalCount: number,
}

export const AdminDashboard = () => {
    const [data, setData] = useState<DashboardData | undefined>(undefined);

    const fetchDashboardData = async () => {
        const response = await dashboardAPIController.getDetailsToSchoolDashboard();
        if (response) {
            setData(response)
        }
    }
    useEffect(() => {
        fetchDashboardData();
    }, []);


    return (
        <section className='w-full h-max flex items-center flex-col'>
            <section className="h-max flex w-[95%] flex-col justify-center ">
                <section className='text-[#005285] flex flex-row justify-start mt-5'>
                    <h3>Dashboard</h3>
                </section>

                <section className='text-[#005285] flex flex-row justify-center mt-5 flex-wrap gap-5 '>
                    <div
                        className="shadow-xl rounded w-[300px] h-[200px] bg-white flex flex-col justify-center align-middle">
                        <h1 className="text-7xl mb-2">{data?.studentsCount ?? 0}</h1>
                        <h1>Students Count</h1>
                    </div>
                    <div
                        className="shadow-xl rounded w-[300px] h-[200px] bg-white flex flex-col justify-center align-middle">
                        <h1 className="text-7xl mb-2">{data?.parentsCount ?? 0}</h1>
                        <h1>Parents Count</h1>
                    </div>
                    <div
                        className="shadow-xl rounded w-[300px] h-[200px] bg-white flex flex-col justify-center align-middle">
                        <h1 className="text-7xl mb-2">{data?.teachersCount ?? 0}</h1>
                        <h1>Teachers Count</h1>
                    </div>
                    <div
                        className="shadow-xl rounded w-[300px] h-[200px] bg-white flex flex-col justify-center align-middle">
                        <h1 className="text-7xl mb-2">{data?.staffUsersCount ?? 0}</h1>
                        <h1>Staff Users Count</h1>
                    </div>
                </section>
            </section>
        </section>
    );
};
