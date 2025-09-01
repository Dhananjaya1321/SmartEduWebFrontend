import React from "react";
import {FooterSpace} from "../../../component/FooterSpace/FooterSpace";
import {Footer} from "../../../component/Footer/Footer";
import {Link, Outlet} from "react-router-dom";

export const ExamsAndNIC = () => {
    return (
        <section className='h-max flex w-[95%] flex-col justify-center'>
            <section
                className='flex flex-row gap-5'>
                <section
                    className='bg-white flex flex-col flex-wrap items-center justify-start mt-5 p-5 rounded-xl shadow-md'>
                    <div className="w-[180px] flex flex-col items-center justify-start">
                        <Link to={'manage-applications'} className="w-full justify-center flex ">
                            <button
                                className="bg-[#F0F4F9] w-full px-6 py-3 rounded-md text-black hover:bg-blue-950 hover:text-white font-medium mt-2">
                                Apply
                            </button>
                        </Link>
                        <Link to={'view-applications'} className="w-full justify-center flex ">
                            <button
                                className="bg-[#F0F4F9] w-full px-6 py-3 rounded-md text-black hover:bg-blue-950 hover:text-white font-medium mt-2">
                                View
                            </button>
                        </Link>

                    </div>
                </section>
                <section
                    className='w-[900px] bg-white flex flex-col flex-wrap items-center justify-center mt-5 p-5 rounded-xl shadow-md'>
                    <Outlet/>
                </section>
            </section>
            <FooterSpace/>
            <Footer/>
        </section>
    );
};
