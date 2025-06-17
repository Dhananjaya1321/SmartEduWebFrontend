import React from "react";
import {Link} from "react-router-dom";
import {LoginAside} from "../../../component/LoginAside/LoginAside";
import {TextFieldForLoginPages} from "../../../component/TextFieldForLoginPages/TextFieldForLoginPages";

export const ForgotPassword = () => {
    return (
        <section className='relative justify-center items-center flex flex-row w-full sm:h-[600px]'>
            <LoginAside btnStatus={"Login"}/>
            <article className='forgotPasswordArticle flex flex-col justify-center w-[80%] sm:w-[40%] h-[600px] bg-white px-8
            absolute sm:relative'>
                <div className='flex flex-col text-start mb-5'>
                    <h1 className='forgotPasswordH1 text-3xl poppins-semibold'>Forgot password</h1>
                    <p className='forgotPasswordP '>Reset password in two quick steps</p>
                </div>
                <div className='flex flex-col text-start'>
                    <TextFieldForLoginPages
                        name="emailOrUsername"
                        placeholder={'Email'}
                        label={'Email'}
                        important={"*"}

                    />

                    <button
                        className={`mt-7 bg-[#006CAF] px-6 w-full py-3 rounded-md text-white font-medium`}
                        >
                        Reset Password
                    </button>

                    <Link to={'/login'}
                          className={`w-full`}>
                        <button
                            className={`mt-7 border-[1px] border-solid border-[#006CAF] px-6 w-full py-3 rounded-md text-[#006CAF] font-medium`}
                        >
                            Back to Login
                        </button>
                    </Link>
                </div>
            </article>
        </section>
    );
};
