import {LoginAside} from "../../../component/LoginAside/LoginAside";
import {TextFieldForLoginPages} from "../../../component/TextFieldForLoginPages/TextFieldForLoginPages";
import {Link, useNavigate} from "react-router-dom";
import userAPIController from "../../../../controller/UserAPIController";
import {useState} from "react";

export const LoginPage = () => {
    const [loginData, setLoginData] = useState({
        username: '',
        password: '',
    });

    const [errors, setErrors] = useState({
        username: "",
        password: ""
    });

    const navigate = useNavigate();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setLoginData({
            ...loginData,
            [name]: value,
        });

        setErrors({
            ...errors,
            [name]: ""
        });
    };

    const handleLogin = async () => {
        const { username, password } = loginData;

        if (!username || !password) {
            setErrors({
                username: !username ? 'Please enter your email or username to login' : '',
                password: !password ? 'Please enter your password to login' : '',
            });
            return;
        }

        try {
            const response = await userAPIController.checkLogin(username, password);

            if (response && response.token) {
                // Save to localStorage
                localStorage.setItem("token", response.token);
                localStorage.setItem("username", response.username);
                localStorage.setItem("role", response.role);

                // Redirect based on role
                const role = response.role;
                if (["MOE_ADMIN", "MOE_EMPLOYEE"].includes(role)) {
                    navigate("/ministry-education-offices-admin");
                } else if (["PMOE_ADMIN", "PMOE_EMPLOYEE"].includes(role)) {
                    navigate("/provincial-education-offices-admin");
                } else if (["ZMOE_ADMIN", "ZMOE_EMPLOYEE"].includes(role)) {
                    navigate("/zonal-education-offices-admin");
                } else if (["SCHOOL_ADMIN", "SCHOOL_EMPLOYEE"].includes(role)) {
                    navigate("/school-admin");
                } else {
                    // fallback route
                    navigate("/");
                }
            } else if (response && response.error) {
                if (response.error === "Incorrect password") {
                    setErrors({ username: "", password: "Incorrect password" });
                } else if (response.error === "Incorrect email or username") {
                    setErrors({ username: "Incorrect email or username", password: "" });
                }
            }
        } catch (error) {
            console.error("Login failed:", error);
            setErrors({
                username: "",
                password: "Login failed, try again later"
            });
        }
    };

    return (
            <section className='relative justify-center items-center flex flex-row w-full sm:h-[600px]'>
                <LoginAside btnStatus={"Register"}/>
                <article className='loginArticles flex flex-col justify-center w-[80%] sm:w-[40%] h-[600px] bg-white px-8
            absolute sm:relative'>
                    <div className='flex flex-col text-start mb-5'>
                        <h1 className='loginH1 text-3xl poppins-semibold'>Welcome to SmartEdu!</h1>
                        <p className="loginP">please sign-in to your account and start adventure.</p>
                    </div>
                    <div className='flex flex-col text-start'>
                        <TextFieldForLoginPages
                            name="username"
                            placeholder={'Username'}
                            label={'Username'}
                            important={"*"}
                            value={loginData.username}
                            onChange={handleInputChange}
                            msg={errors.username}
                        />
                        <TextFieldForLoginPages
                            name="password"
                            placeholder={'Password'}
                            label={'Password'}
                            type={'password'}
                            important={"*"}
                            value={loginData.password}
                            onChange={handleInputChange}
                            msg={errors.password}
                        />
                        <Link className='flex justify-end mt-4 text-blue-900' to={'/forgot-password'}>
                            <p>Forgot password?</p>
                        </Link>
                        <button
                            className={`mt-7 bg-[#006CAF] px-6 w-full py-3 rounded-md text-white font-medium`}
                            onClick={handleLogin}
                        >
                            Login
                        </button>
                        <div className={`flex justify-center mt-2 `}>
                            <p className={`loginP text-center text-gray-400`}
                            >
                                If you don't have an account, please
                                <Link className='text-blue-900 pl-1' to={'/register'}>
                                    register
                                </Link>.
                            </p>
                        </div>
                    </div>
                </article>
            </section>
        );
    };
