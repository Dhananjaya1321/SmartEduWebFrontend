import React, {useState} from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {LoginAside} from "../../../component/LoginAside/LoginAside";
import {TextFieldForLoginPages} from "../../../component/TextFieldForLoginPages/TextFieldForLoginPages";
import userAPIController from "../../../../controller/UserAPIController";


export const VerifyCodePage = () => {
        const location = useLocation();
        const navigate = useNavigate();

        // Get email and OTP passed from previous page (Forgot Password)
        const {email: email, otp: initialOtp} = location.state || {};

        const [enteredCode, setEnteredCode] = useState('');
        const [otp, setOtp] = useState(initialOtp);
        const [errors, setErrors] = useState('');

        // Input change handler
        const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            setEnteredCode(e.target.value);
            setErrors(''); // Clear errors on typing
        };

        // Resend OTP handler
        const handleResendOTP = async () => {
            if (!email) {
                alert('Email missing. Please start again.');
                return;
            }
            try {
                const response = await userAPIController.checkEmailAndSendOTP(email);
                if (response && !response.error) {
                    setOtp(response.otp); // Update OTP with new one
                    setErrors('');
                } else {
                    alert(response.error || 'Failed to resend OTP. Please try again.');
                }
            } catch (error) {
                alert('An error occurred while resending OTP.');
            }
        };

        // Verify code handler
        const handleVerifyCode = () => {
            if (enteredCode.trim() === '') {
                alert('Please enter the verification code.');
                return;
            }

            if (enteredCode !== otp) {
                alert('Invalid verification code.');
                return;
            }

            // Success: navigate to change-password page with emailOrUsername
            navigate('/change-password', {state: {email: email}});
        };

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
                            value={enteredCode}
                            onChange={handleInputChange}
                            msg={errors}
                        />
                        <button
                            className='mt-4 flex justify-start  text-blue-900'
                            onClick={handleResendOTP}
                            type="button"
                        >
                            <p>
                                Re-send code
                            </p>
                        </button>
                        <button
                            className={`mt-7 bg-[#006CAF] px-6 w-{100%} py-3 rounded-md text-white font-medium`}
                            onClick={handleVerifyCode}
                            type="button"
                        >
                            Submit
                        </button>
                        <Link to={'/forgot-password'}
                              className={`w-full`}>
                            <button
                                className={`mt-7 border-[1px] border-solid border-[#006CAF] px-6 w-full py-3 rounded-md text-[#006CAF] font-medium`}
                                type="button"
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
