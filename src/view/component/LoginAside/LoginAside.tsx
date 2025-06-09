// @ts-ignore
import backgroundImage from "../../assets/images/backgroundImage.jpg";
import React from "react";

export const LoginAside = () => {
    return (
        <aside className='self-start relative items-center justify-center flex w-full sm:w-[60%]
        h-[650px] bg-[#F8F8F8]'>
            <img
                src={backgroundImage}
                className="absolute inset-0 w-full h-full object-cover"
                alt="Background"
            />
        </aside>
    );
};
