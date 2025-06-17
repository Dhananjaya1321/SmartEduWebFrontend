import {LoginAside} from "../../../component/LoginAside/LoginAside";

import {FileUploader} from "../../../component/FileUploader/FileUploader";

export const PrincipalVerifyPage = () => {
    return (
        <section className='relative justify-center items-center flex flex-row w-full h-[700px]'>
            <LoginAside btnStatus={"Login"} height={"700px"}/>
            <article className='loginArticles flex flex-col justify-center sm:w-[40%] h-[700px] bg-white px-8
            absolute sm:relative'>
                <div className='flex flex-col text-start mb-5'>
                    <h1 className='loginH1 text-3xl poppins-semibold'>Verify</h1>
                    <p className="loginP">Please verify that you are the principal.</p>
                </div>
                <div className='flex flex-col text-start'>
                    <div className="flex items-center justify-center flex-row gap-3">
                        <FileUploader label={"NIC front photo"} />
                        <FileUploader label={"NIC back photo"}/>
                    </div>
                    <div className="flex items-center justify-center flex-row gap-3">
                        <FileUploader label={"MoE ID card front photo"}/>
                        <FileUploader label={"MoE ID card back photo"}/>
                    </div>
                    <FileUploader label={"Appointment letter pdf or photo"}/>
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
