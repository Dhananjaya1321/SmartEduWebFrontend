import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { LoginAside } from "../../../component/LoginAside/LoginAside";
import { TextFieldForLoginPages } from "../../../component/TextFieldForLoginPages/TextFieldForLoginPages";
import userAPIController from "../../../../controller/UserAPIController";

export const ChangePasswordPage = () => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const { email: email } = location.state || {};

    const handleSubmit = async () => {
        if (!newPassword || !confirmPassword) {
            alert("Both fields are required.");
            return;
        }

        if (newPassword !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        const success = await userAPIController.updatePassword(newPassword, email);

        if (success) {
            navigate("/login");
        } else {
            alert("Failed to update password. Try again.");
        }
    };

    return (
        <section className='relative justify-center items-center flex flex-row w-full sm:h-[600px]'>
            <LoginAside btnStatus={"Login"} />
            <article className='changePasswordArticle flex flex-col justify-center w-[80%] sm:w-[40%] h-[600px] bg-white px-8 absolute sm:relative'>
                <div className='flex flex-col text-start mb-5'>
                    <h1 className='changePasswordH1 text-3xl poppins-semibold'>Change password</h1>
                    <p className='changePasswordP'>Create a new password for your account</p>
                </div>
                <div className='flex flex-col text-start gap-3'>
                    <TextFieldForLoginPages
                        name="newPassword"
                        placeholder='New Password'
                        label='New Password'
                        important="*"
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        msg={error}
                    />
                    <TextFieldForLoginPages
                        name="confirmPassword"
                        placeholder='Confirm New Password'
                        label='Confirm New Password'
                        important="*"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        msg={error}
                    />
                    <button
                        className={`mt-7 bg-[#006CAF] px-6 w-full py-3 rounded-md text-white font-medium`}
                        onClick={handleSubmit}
                    >
                        Save
                    </button>
                </div>
            </article>
        </section>
    );
};
