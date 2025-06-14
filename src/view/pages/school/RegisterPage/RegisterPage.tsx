import {LoginAside} from "../../../component/LoginAside/LoginAside";
import {TextFieldForLoginPages} from "../../../component/TextFieldForLoginPages/TextFieldForLoginPages";
import {Link} from "react-router-dom";

export const RegisterPage = () => {
    return (
        <section className='relative justify-center items-center flex flex-row w-full h-[900px]'>
            <LoginAside btnStatus={"Login"} height={"900px"}/>
            <article className='loginArticles flex flex-col justify-center sm:w-[40%] h-[900px] bg-white px-8
            absolute sm:relative'>
                <div className='flex flex-col text-start mb-5'>
                    <h1 className='loginH1 text-3xl poppins-semibold'>Welcome to SmartEdu!</h1>
                    <p className="loginP">To register a school, you must be the principal of that school.</p>
                </div>
                <div className='flex flex-col text-start'>
                    <TextFieldForLoginPages
                        name="yourFullName"
                        placeholder={'Your Full Name'}
                        label={'Your Full Name'}
                        important={"*"}

                    />
                    <TextFieldForLoginPages
                        name="nICNumber"
                        placeholder={'NIC Number'}
                        label={'NIC Number'}
                        important={"*"}

                    />
                    <TextFieldForLoginPages
                        name="address"
                        placeholder={'Address'}
                        label={'Address'}
                        important={"*"}

                    />
                    <TextFieldForLoginPages
                        name="contact"
                        placeholder={'Contact'}
                        label={'Contact'}
                        important={"*"}

                    />
                    <TextFieldForLoginPages
                        name="email"
                        placeholder={'Email'}
                        label={'Email'}
                        important={"*"}
                        type={'email'}

                    />
                    <TextFieldForLoginPages
                        name="username"
                        placeholder={'Username'}
                        label={'Username'}
                        important={"*"}

                    />
                    <TextFieldForLoginPages
                        name="password"
                        placeholder={'Password'}
                        label={'Password'}
                        type={'password'}
                        important={"*"}

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
