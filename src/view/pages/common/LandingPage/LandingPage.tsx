// @ts-ignore
import backgroundImage from "../../../assets/images/backgroundImage.jpg";
export const LandingPage = () => {
    return (
        <main className='relative w-[100%]'>
            <section
                id={"hero-section"}
                className="h-[650px] w-[100%] relative flex flex-col justify-center items-center">
                <img src={backgroundImage}
                     className="absolute inset-0 w-full h-full object-cover"
                     alt="Background"
                />
                <div className="bg-black opacity-75 w-full h-full absolute"></div>
                <h3 className="font-medium px-16 text-white text-[44px] z-10 text-center">Welcome to</h3>
                <h1 className="font-medium leading-[130px] bg-gradient-to-r from-purple-400 via-[#F90766] to-[#1100FF] bg-clip-text text-transparent z-50 text-[150px] text-center">
                    SmartEdu
                </h1>
                <h3 className="font-medium px-16 text-white text-[64px] z-10 text-center">The future of education</h3>
                <p className="lg:px-72 mt-2 text-white z-10 text-center">
                    A powerful all-in-one digital platform connecting schools, teachers, students, parents,
                    and education authorities.
                    From attendance to admissions, SmartEdu streamlines every process, promotes transparency,
                    and empowers smarter learning across the nation.</p>
                <div className="mt-5 z-50 flex gap-5">
                    <button
                        className="w-[200px] bg-white text-black px-[40px] py-4 text-2xl font-medium rounded-full hover:bg-blue-200 transition"
                    >
                        Register
                    </button>
                    <button
                        className="w-[200px] bg-white text-black px-[40px] py-4 text-2xl font-medium rounded-full hover:bg-blue-200 transition"
                    >
                        Login
                    </button>
                </div>
            </section>
        </main>
    );
};
