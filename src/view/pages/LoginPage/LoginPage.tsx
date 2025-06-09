import {LoginAside} from "../../component/LoginAside/LoginAside";
import {TextFieldForLoginPages} from "../../component/TextFieldForLoginPages/TextFieldForLoginPages";
import {Link} from "react-router-dom";

export const LoginPage = () => {
    return (
        <section className='relative justify-center items-center flex flex-row w-full sm:h-[600px]'>
            <LoginAside btnStatus={"Register"}/>
            <article className='loginArticles flex flex-col justify-center w-[80%] sm:w-[40%] h-[600px] bg-white px-8
            absolute sm:relative'>
                <div className='flex flex-col text-start mb-5'>
                    <h1 className='loginH1 text-3xl poppins-semibold'>Welcome to Mega City Cab!</h1>
                    <p className="loginP">To book your cab, please first login to your account.</p>
                </div>
                <div className='flex flex-col text-start'>
                    <TextFieldForLoginPages
                        name="emailOrUsername"
                        placeholder={'Email or Username'}
                        label={'Email or Username'}
                        important={"*"}

                    />
                    <TextFieldForLoginPages
                        name="password"
                        placeholder={'Password'}
                        label={'Password'}
                        type={'password'}
                        important={"*"}

                    />
                    <Link className='flex justify-end mt-4 text-blue-900' to={'/forgot-password'}>
                        <p>Forgot password?</p>
                    </Link>
                    <button
                        className={`mt-7 bg-[#006CAF] px-6 w-full py-3 rounded-md text-white font-medium`}
                    >
                        Login
                    </button>
                    <div className={`flex justify-center mt-2 `}>
                        <p className={`loginP text-center text-gray-400`}
                        >
                            If you don't have an account, please
                            <Link className='text-blue-900 pl-1' to={'/create-account'}>
                                create account
                            </Link>.
                        </p>
                    </div>
                </div>
            </article>
        </section>
    );
};
