import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {LoginAside} from "../../../component/LoginAside/LoginAside";
import {TextFieldForLoginPages} from "../../../component/TextFieldForLoginPages/TextFieldForLoginPages";
import userAPIController from "../../../../controller/UserAPIController";

export const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        setErrors('');
    };

    const handleResetPassword = async () => {
        if (email === '') {
            setErrors('Please enter your email');
            return;
        }

        try {
            const otp = await userAPIController.checkEmailAndSendOTP(email);

            if (otp && otp.error) {
                if ("Incorrect email" === otp.error) {
                    alert('Incorrect email');
                } else {
                    alert(otp.error);
                }
            } else if (otp) {
                navigate('/verify-code', { state: { email: email, otp } });
            }
        } catch (error) {
            alert('An error occurred. Please try again.');
        }
    };

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
                        name="email"
                        placeholder={'Email'}
                        label={'Email'}
                        important={"*"}
                        value={email}
                        onChange={handleInputChange}
                    />

                    <button
                        className={`mt-7 bg-[#006CAF] px-6 w-full py-3 rounded-md text-white font-medium`}
                        onClick={handleResetPassword}
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
