import React from "react";
import Logo from "../assets/Logo.jpg";

const Title = () => {
    return (
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 p-4 md:p-6 bg-linear-to-t from-green-500 to-green-700 shadow-md lg:space-x-10">
            
            <div className="w-25 h-25 md:w-25 md:h-25 lg:ml-10 border-none border-white rounded-full overflow-hidden shadow-[0_0_15px_3px_rgba(255,255,255,1)]">
            <img src={Logo} alt="School Logo" className="w-full h-full object-cover" />
            </div>

            <div className="text-center text-white md:text-left font-semibold ">
                <h1 className="text-2xl  md:text-4xl font-bold font-serif  leading-snug">
                    Shahjalal University School & College
                </h1>
                <h3 className="text-sm md:text-lg ">
                    SUST Campus, SUST-3114, Sylhet, Bangladesh
                </h3>
                <h3 className="text-sm md:text-lg">
                    Established : 2000 | EIIN-130396 | College Code-1092
                </h3>
            </div>
        </div>
    );
};

export default Title;