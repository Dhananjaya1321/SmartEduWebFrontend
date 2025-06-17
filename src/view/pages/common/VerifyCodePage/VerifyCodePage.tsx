import React, {useState} from "react";
import {Link} from "react-router-dom";
import {LoginAside} from "../../../component/LoginAside/LoginAside";
import {TextFieldForLoginPages} from "../../../component/TextFieldForLoginPages/TextFieldForLoginPages";


export const VerifyCodePage = () => {
    return (
            <section className='relative justify-center items-center flex flex-row w-full sm:h-[600px]'>
                <LoginAside btnStatus={"Login"}/>
                <article className='verifyCodeArticle flex flex-col justify-center w-[80%] sm:w-[40%] h-[600px] bg-white px-8
            absolute sm:relative'>
                    <div className='flex flex-col text-start mb-5'>
                        <h1 className='verifyCodeH1 text-3xl poppins-semibold'>We sent a code to your email</h1>
                        <p className='verifyCodeP'>Enter the 6-digit verification code sent to your email.</p>
                    </div>
                    <div className='flex flex-col text-start'>
                        <TextFieldForLoginPages
                            name="otpCode"
                            placeholder={'OTP Code'}
                            label={'OTP Code'}
                            important={"*"}

                        />
                        <button
                            className='mt-4 flex justify-start  text-blue-900'
                        >
                            <p>
                                Re-send code
                            </p>
                        </button>
                        <button
                            className={`mt-7 bg-[#006CAF] px-6 w-{100%} py-3 rounded-md text-white font-medium`}
                            >
                            Submit
                        </button>
                        <Link to={'/forgot-password'}
                              className={`w-full`}>
                            <button
                                className={`mt-7 border-[1px] border-solid border-[#006CAF] px-6 w-full py-3 rounded-md text-[#006CAF] font-medium`}
                            >
                                Back
                            </button>
                        </Link>
                    </div>
                </article>
            </section>
        );
    }
;
