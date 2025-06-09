import React from "react";
import {LoginAside} from "../../component/LoginAside/LoginAside";
import {TextFieldForLoginPages} from "../../component/TextFieldForLoginPages/TextFieldForLoginPages";


export const ChangePasswordPage = () => {
   return (
        <section className='relative justify-center items-center flex flex-row w-full sm:h-[600px]'>
            <LoginAside btnStatus={"Login"}/>
            <article className='changePasswordArticle flex flex-col justify-center w-[80%] sm:w-[40%] h-[600px] bg-white px-8
            absolute sm:relative'>
                <div className='flex flex-col text-start mb-5'>
                    <h1 className='changePasswordH1 text-3xl poppins-semibold'>Change password</h1>
                    <p className='changePasswordP'>Create a new password for your</p>
                </div>
                <div className='flex flex-col text-start gap-3'>
                    <TextFieldForLoginPages
                        name="newPassword"
                        placeholder={'New Password'}
                        important={"*"}
                        label={'New Password'}
                        type="password"

                    />
                    <TextFieldForLoginPages
                        name="conformNewPassword"
                        placeholder={'Conform New Password'}
                        important={"*"}
                        label={'Conform New Password'}
                        type="password"

                    />
                    <button
                        className={`mt-7 bg-[#006CAF] px-6 w-{100%} py-3 rounded-md text-white font-medium`}
                    >Save
                    </button>
                </div>
            </article>
        </section>
    );
};
