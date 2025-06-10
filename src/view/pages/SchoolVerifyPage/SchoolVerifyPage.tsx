import {LoginAside} from "../../component/LoginAside/LoginAside";

import {FileUploader} from "../../component/FileUploader/FileUploader";
import {DropdownField} from "../../component/DropdownField/DropdownField";
import {Link} from "react-router-dom";
// @ts-ignore
import backgroundImage from "../../assets/images/backgroundImage.jpg";
import React from "react";
import {TextFieldForLoginPages} from "../../component/TextFieldForLoginPages/TextFieldForLoginPages";

export const SchoolVerifyPage = () => {
    return (
        <section className='relative justify-center items-center flex flex-row w-full h-[800px]'>
            <aside className='h-[800px] w-[40%] self-start relative items-center justify-center flex
         bg-[#F8F8F8]'>
                <section
                    className="pl-5 pr-20 relative flex flex-col justify-center items-start">
                    <div className="bg-black opacity-75 w-full h-full absolute"></div>
                    <h3 className="font-medium text-white text-[32px] z-10 text-start">Welcome to</h3>
                    <h1 className="font-medium leading-[100px] bg-gradient-to-r from-purple-400 via-[#F90766] to-[#1100FF] bg-clip-text text-transparent z-50 text-[98px] text-start">
                        SmartEdu
                    </h1>
                    <h3 className="font-medium text-white text-[38px] z-10 text-start">The future of education</h3>
                    <p className="text-white z-10 text-start">
                        A powerful all-in-one digital platform connecting schools, teachers, students, parents,
                        and education authorities.
                        From attendance to admissions, SmartEdu streamlines every process, promotes transparency,
                        and empowers smarter learning across the nation.</p>
                    <div className="mt-5 z-50 flex gap-5">
                        <Link to={'/login'}>
                            <button
                                className="w-[200px] bg-white text-black px-[40px] py-4 text-2xl font-medium rounded-full hover:bg-blue-200 transition"
                            >
                                Login
                            </button>
                        </Link>
                    </div>
                </section>
                <img
                    src={backgroundImage}
                    className="absolute inset-0 w-full h-full object-cover"
                    alt="Background"
                />
            </aside>
            {/*aside*/}
            <article className='loginArticles flex flex-col justify-center sm:w-[60%] h-[800px] bg-white px-8
            absolute sm:relative'>
                <div className='flex flex-col text-start mb-5'>
                    <h1 className='loginH1 text-3xl poppins-semibold'>School Details</h1>
                    <p className="loginP">Please fill in the school details.</p>
                </div>
                <div className='flex flex-col text-start'>
                    <div className="flex items-center justify-center flex-row gap-3">
                        <TextFieldForLoginPages
                            name="schoolName"
                            placeholder={'School name'}
                            important={"*"}
                            label={'School name'}
                            type="password"

                        />
                        <FileUploader label={"School logo"} height={"46px"} important={"*"}/>
                    </div>
                    <div className="flex items-center justify-center flex-row gap-3">
                        <DropdownField important={"*"} label={"Select province"} options={[
                            {label: "Yes", value: "yes"},
                            {label: "No", value: "no"}
                        ]}/>
                        <DropdownField important={"*"} label={"Select zonal"} options={[
                            {label: "Yes", value: "yes"},
                            {label: "No", value: "no"}
                        ]}/>
                        <DropdownField important={"*"} label={"Select district"} options={[
                            {label: "Yes", value: "yes"},
                            {label: "No", value: "no"}
                        ]}/>
                    </div>
                    <div className="flex items-center justify-center flex-row gap-3">
                        <DropdownField important={"*"} label={"Level of School"} options={[
                            {label: "Yes", value: "yes"},
                            {label: "No", value: "no"}
                        ]}/>
                        <DropdownField important={"*"} label={"Type of School"} options={[
                            {label: "Yes", value: "yes"},
                            {label: "No", value: "no"}
                        ]}/>
                        <DropdownField important={"*"} label={"Grade Span"} options={[
                            {label: "Yes", value: "yes"},
                            {label: "No", value: "no"}
                        ]}/>
                    </div>
                    <div className="flex items-center justify-center flex-row gap-3">
                        <DropdownField important={"*"} label={"Select gender"} options={[
                            {label: "Yes", value: "yes"},
                            {label: "No", value: "no"}
                        ]}/>
                        <DropdownField important={"*"} label={"Select ethnicity"} options={[
                            {label: "Yes", value: "yes"},
                            {label: "No", value: "no"}
                        ]}/>
                        <DropdownField important={"*"} label={"Select language medium"} options={[
                            {label: "Yes", value: "yes"},
                            {label: "No", value: "no"}
                        ]}/>
                    </div>
                    <div className="flex items-center justify-center flex-row gap-3">
                        <DropdownField important={"*"} label={"Select student Population"} options={[
                            {label: "Yes", value: "yes"},
                            {label: "No", value: "no"}
                        ]}/>
                        <DropdownField important={"*"} label={"Select teacher Population"} options={[
                            {label: "Yes", value: "yes"},
                            {label: "No", value: "no"}
                        ]}/>
                    </div>
                    <TextFieldForLoginPages
                        name="classCount"
                        placeholder={'Class count'}
                        important={"*"}
                        label={'Class count (Number of Grade 1 classes)'}
                        type="password"

                    />

                    <button
                        className={`mt-7 bg-[#006CAF] px-6 w-full py-3 rounded-md text-white font-medium`}
                    >
                        Next
                    </button>
                </div>
            </article>
        </section>
    );
};
