// @ts-ignore
import backgroundImage from "../../assets/images/backgroundImage.jpg";
import React from "react";
import {Link} from "react-router-dom";

export const LoginAside = ({btnStatus}: props) => {
    return (
        <aside className='self-start relative items-center justify-center flex w-full sm:w-[60%]
        h-[650px] bg-[#F8F8F8]'>
            <section
                className="pl-5 pr-20 relative flex flex-col justify-center items-start">
                <div className="bg-black opacity-75 w-full h-full absolute"></div>
                <h3 className="font-medium text-white text-[36px] z-10 text-start">Welcome to</h3>
                <h1 className="font-medium leading-[130px] bg-gradient-to-r from-purple-400 via-[#F90766] to-[#1100FF] bg-clip-text text-transparent z-50 text-[120px] text-start">
                    SmartEdu
                </h1>
                <h3 className="font-medium text-white text-[48px] z-10 text-start">The future of education</h3>
                <p className="text-white z-10 text-start">
                    A powerful all-in-one digital platform connecting schools, teachers, students, parents,
                    and education authorities.
                    From attendance to admissions, SmartEdu streamlines every process, promotes transparency,
                    and empowers smarter learning across the nation.</p>
                <div className="mt-5 z-50 flex gap-5">
                    {btnStatus === "Register" ? (
                        <Link to={'/register'}>
                            <button
                                className="w-[200px] bg-white text-black px-[40px] py-4 text-2xl font-medium rounded-full hover:bg-blue-200 transition"
                            >
                                Register
                            </button>
                        </Link>
                    ) : (
                        <Link to={'/login'}>
                            <button
                                className="w-[200px] bg-white text-black px-[40px] py-4 text-2xl font-medium rounded-full hover:bg-blue-200 transition"
                            >
                                Login
                            </button>
                        </Link>

                    )}
                </div>
            </section>
            <img
                src={backgroundImage}
                className="absolute inset-0 w-full h-full object-cover"
                alt="Background"
            />
        </aside>
    );
};
type props = {
    btnStatus: string,
}
