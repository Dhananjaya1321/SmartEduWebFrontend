import {LoginAside} from "../../../component/LoginAside/LoginAside";
import {TextFieldForLoginPages} from "../../../component/TextFieldForLoginPages/TextFieldForLoginPages";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

export const RegisterPage = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        fullName: '',
        nic: '',
        address: '',
        contact: '',
        email: '',
        username: '',
        password: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleNext = () => {
        navigate("/verify-principal", { state: formData });
    };

    return (
        <section className='relative justify-center items-center flex flex-row w-full h-[900px]'>
            <LoginAside btnStatus={"Login"} height={"900px"} />
            <article className='loginArticles flex flex-col justify-center sm:w-[40%] h-[900px] bg-white px-8 absolute sm:relative'>
                <div className='flex flex-col text-start mb-5'>
                    <h1 className='loginH1 text-3xl poppins-semibold'>Welcome to SmartEdu!</h1>
                    <p className="loginP">To register a school, you must be the principal of that school.</p>
                </div>
                <div className='flex flex-col text-start'>
                    <TextFieldForLoginPages
                        name="fullName"
                        placeholder={'Your Full Name'}
                        label={'Your Full Name'}
                        important={"*"}
                        value={formData.fullName}
                        onChange={handleChange}
                    />
                    <TextFieldForLoginPages
                        name="nic"
                        placeholder={'NIC Number'}
                        label={'NIC Number'}
                        important={"*"}
                        value={formData.nic}
                        onChange={handleChange}
                    />
                    <TextFieldForLoginPages
                        name="address"
                        placeholder={'Address'}
                        label={'Address'}
                        important={"*"}
                        value={formData.address}
                        onChange={handleChange}
                    />
                    <TextFieldForLoginPages
                        name="contact"
                        placeholder={'Contact'}
                        label={'Contact'}
                        important={"*"}
                        value={formData.contact}
                        onChange={handleChange}
                    />
                    <TextFieldForLoginPages
                        name="email"
                        placeholder={'Email'}
                        label={'Email'}
                        important={"*"}
                        type={'email'}
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <TextFieldForLoginPages
                        name="username"
                        placeholder={'Username'}
                        label={'Username'}
                        important={"*"}
                        value={formData.username}
                        onChange={handleChange}
                    />
                    <TextFieldForLoginPages
                        name="password"
                        placeholder={'Password'}
                        label={'Password'}
                        type={'password'}
                        important={"*"}
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <button
                        className={`mt-7 bg-[#006CAF] px-6 w-full py-3 rounded-md text-white font-medium`}
                        onClick={handleNext}
                    >
                        Next
                    </button>
                </div>
            </article>
        </section>
    );
};
