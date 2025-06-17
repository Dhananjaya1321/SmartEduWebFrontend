import React from "react";
import {FooterSpace} from "../../../component/FooterSpace/FooterSpace";

export const SchoolTeacher = () => {
    return (
        <section className='h-max flex w-[95%] flex-col justify-center'>
            <section className='text-[#005285] flex flex-row justify-start mt-5'>
                <h3>Teachers and Uses &gt; Manage Teachers</h3>
            </section>
            {/*url display section*/}
             <section
                className='bg-white flex flex-row flex-wrap items-center justify-center mt-5 p-5 rounded-xl shadow-md'>
            </section>
            <FooterSpace/>
        </section>
    );
};
