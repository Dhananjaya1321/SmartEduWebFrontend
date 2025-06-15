import {FileUploader} from "../../../component/FileUploader/FileUploader";
import {DropdownField} from "../../../component/DropdownField/DropdownField";
import {Link} from "react-router-dom";
// @ts-ignore
import backgroundImage from "../../../assets/images/backgroundImage.jpg";
import React, {useState} from "react";
import {TextFieldForLoginPages} from "../../../component/TextFieldForLoginPages/TextFieldForLoginPages";

const provinceDistrictMap: Record<string, string[]> = {
    "Western": ["Colombo", "Gampaha", "Kalutara"],
    "Central": ["Kandy", "Matale", "Nuwara Eliya"],
    "Southern": ["Galle", "Matara", "Hambantota"],
    "Northern": ["Jaffna", "Mannar", "Vavuniya", "Mullaitivu", "Kilinochchi"],
    "Eastern": ["Batticaloa", "Ampara", "Trincomalee"],
    "North Western": ["Kurunegala", "Puttalam"],
    "North Central": ["Anuradhapura", "Polonnaruwa"],
    "Uva": ["Badulla", "Moneragala"],
    "Sabaragamuwa": ["Ratnapura", "Kegalle"]
};
export const districtZoneMap: Record<string, string[]> = {
    "Colombo": ["Colombo", "Homagama", "Piliyandala", "Sri Jayawardanapura"],
    "Gampaha": ["Gampaha", "Kelaniya", "Minuwangoda", "Negombo"],
    "Kalutara": ["Horana", "Kalutara", "Matugama"],

    "Kandy": ["Denuwara", "Gampola", "Kandy", "Katugastota", "Teldeniya", "Wathegama"],
    "Matale": ["Galewela", "Matale", "Naula", "Wilgamuwa"],
    "Nuwara Eliya": ["Hanguranketha", "Hatton", "Kotmale", "Nuwara Eliya", "Walapane"],

    "Galle": ["Ambalangoda", "Elpitiya", "Galle", "Udugama"],
    "Matara": ["Akuressa", "Matara", "Morawaka", "Mulatiyana (Hakmana)"],
    "Hambantota": ["Hambantota", "Tangalle", "Walasmulla"],

    "Jaffna": ["Islands", "Jaffna", "Thenmarachchi", "Vadamarachchi", "Valikamam"],
    "Mannar": ["Madhu", "Mannar"],
    "Vavuniya": ["Vavuniya North", "Vavuniya South"],
    "Mullaitivu": ["Mullaitivu", "Thunukkai"],
    "Kilinochchi": ["Kilinochchi North", "Kilinochchi South"],

    "Batticaloa": ["Batticaloa", "Batticaloa Central", "Batticaloa West", "Kalkudah", "Paddiruppu"],
    "Ampara": ["Akkaraipattu", "Ampara", "Dehiattakandiya", "Kalmunai", "Mahaoya", "Sammanthurai", "Thirukkovil"],
    "Trincomalee": ["Kantale", "Kinniya", "Muttur", "Trincomalee", "Trincomalee North"],

    "Kurunegala": ["Giriulla", "Ibbagamuwa", "Kuliyapitiya", "Kurunegala", "Maho", "Nikaweratiya"],
    "Puttalam": ["Chilaw", "Puttalam"],

    "Anuradhapura": ["Anuradhapura", "Galenbindunuwewa", "Kebithigollewa", "Kekirawa", "Thambuttegama"],
    "Polonnaruwa": ["Dimbulagala", "Hingurakgoda", "Polonnaruwa"],

    "Badulla": ["Badulla", "Bandarawela", "Mahiyanganaya", "Passara", "Viyaluwa", "Welimada"],
    "Moneragala": ["Bibile", "Moneragala", "Thanamalwila", "Wellawaya"],

    "Ratnapura": ["Balangoda", "Embilipitiya", "Nivitigala", "Ratnapura"],
    "Kegalle": ["Dehiowita", "Kegalle", "Mawanella"]
};


export const SchoolVerifyPage = () => {
    const [selectedProvince, setSelectedProvince] = useState('');
    const [districts, setDistricts] = useState<string[]>([]);
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [zonals, setZonals] = useState<string[]>([]);
    const [selectedZonal, setSelectedZonal] = useState('');

    return (
        <section className='relative justify-center items-center flex flex-row w-full h-[800px]'>
            <aside className='h-[800px] w-[40%] self-start relative items-center justify-center flex
         bg-[#F8F8F8]'>
                <section
                    className="pl-5 pr-20 relative flex flex-col justify-center items-start">
                    <div className="bg-black opacity-75 w-full h-full absolute"></div>
                    <h3 className="font-medium text-white text-[32px] z-10 text-start">Welcome to</h3>
                    <h1 className="font-medium leading-[100px] bg-gradient-to-r from-purple-400 via-[#F90766] to-[#1100FF] bg-clip-text text-transparent z-50 text-[98px] text-start">
                        SmartEdu
                    </h1>
                    <h3 className="font-medium text-white text-[38px] z-10 text-start">The future of education</h3>
                    <p className="text-white z-10 text-start">
                        A powerful all-in-one digital platform connecting schools, teachers, students, parents,
                        and education authorities.
                        From attendance to admissions, SmartEdu streamlines every process, promotes transparency,
                        and empowers smarter learning across the nation.</p>
                    <div className="mt-5 z-50 flex gap-5">
                        <Link to={'/login'}>
                            <button
                                className="w-[200px] bg-white text-black px-[40px] py-4 text-2xl font-medium rounded-full hover:bg-blue-200 transition"
                            >
                                Login
                            </button>
                        </Link>
                    </div>
                </section>
                <img
                    src={backgroundImage}
                    className="absolute inset-0 w-full h-full object-cover"
                    alt="Background"
                />
            </aside>
            {/*aside*/}
            <article className='loginArticles flex flex-col justify-center sm:w-[60%] h-[800px] bg-white px-8
            absolute sm:relative'>
                <div className='flex flex-col text-start mb-5'>
                    <h1 className='loginH1 text-3xl poppins-semibold'>School Details</h1>
                    <p className="loginP">Please fill in the school details.</p>
                </div>
                <div className='flex flex-col text-start'>
                    <div className="flex items-center justify-center flex-row gap-3">
                        <TextFieldForLoginPages
                            name="schoolName"
                            placeholder={'School name'}
                            important={"*"}
                            label={'School name'}
                            type="password"

                        />
                        <FileUploader label={"School logo"} height={"46px"} important={"*"}/>
                    </div>
                    <div className="flex items-center justify-center flex-row gap-3">
                        <DropdownField
                            important={"*"}
                            label={"Select province"}
                            options={
                                [
                                    {label: 'Select...', value: ''},
                                    ...Object.keys(provinceDistrictMap).map(p => ({label: p, value: p}))
                                ]
                            }
                            value={selectedProvince}
                            onChange={(e) => {
                                const province = e.target.value;
                                setSelectedProvince(province);
                                const districts = provinceDistrictMap[province] || [];
                                setDistricts(districts);
                                setSelectedDistrict('');
                                setZonals([]);
                                setSelectedZonal('');
                            }}
                        />
                        <DropdownField
                            important={"*"}
                            label={"Select district"}
                            options={[{label: 'Select...', value: ''}, ...districts.map(d => ({label: d, value: d}))]}
                            value={selectedDistrict}
                            onChange={(e) => {
                                const district = e.target.value;
                                setSelectedDistrict(district);
                                setZonals(districtZoneMap[district] || []);
                                setSelectedZonal('');
                            }}
                        />
                        <DropdownField
                            important={"*"}
                            label={"Select zonal"}
                            options={[{label: 'Select...', value: ''}, ...zonals.map(z => ({label: z, value: z}))]}
                            value={selectedZonal}
                            onChange={(e) => setSelectedZonal(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center justify-center flex-row gap-3">
                        <DropdownField
                            important={"*"}
                            label={"Level of School"}
                            options={[
                                {label: 'Select...', value: ''},
                                {label: "National Schools", value: "national"},
                                {label: "Provincial Schools", value: "provincial"}
                            ]}
                        />
                        <DropdownField
                            important={"*"}
                            label={"Type of School"}
                            options={[
                                {label: 'Select...', value: ''},
                                {label: "1AB Schools", value: "1ab"},
                                {label: "1C Schools", value: "1c"},
                                {label: "Type 2 Schools", value: "type2"},
                                {label: "Type 3 Schools", value: "type3"}
                            ]}
                        />
                        <DropdownField
                            important={"*"}
                            label={"Grade Span"}
                            options={[
                                {label: 'Select...', value: ''},
                                {label: "Grade 1-5", value: "1-5"},
                                {label: "Grade 1-8", value: "1-8"},
                                {label: "Grade 1-11", value: "1-11"},
                                {label: "Grade 1-13", value: "1-13"},
                                {label: "Grade 6-11", value: "6-11"},
                                {label: "Grade 6-13", value: "6-13"}
                            ]}
                        />
                    </div>
                    <div className="flex items-center justify-center flex-row gap-3">
                        <DropdownField
                            important={"*"}
                            label={"Select gender"}
                            options={[
                                {label: 'Select...', value: ''},
                                {label: "Boys Schools", value: "boys"},
                                {label: "Girls Schools", value: "girls"},
                                {label: "Mixed Schools", value: "mixed"}
                            ]}/>
                        <DropdownField
                            important={"*"}
                            label={"Select ethnicity"}
                            options={[
                                {label: 'Select...', value: ''},
                                {label: "Sinhala Schools", value: "sinhala"},
                                {label: "Tamil Schools", value: "tamil"},
                                {label: "Muslim Schools", value: "muslim"}
                            ]}/>
                        <DropdownField
                            important={"*"}
                            label={"Select language medium"}
                            options={[
                                {label: 'Select...', value: ''},
                                {label: "Sinhala Medium", value: "sinhala"},
                                {label: "Tamil Medium", value: "tamil"},
                                {label: "Sinhala and Tamil Medium", value: "sinhala_tamil"},
                                {label: "Sinhala and Bilingual (S/E)", value: "sinhala_bilingual"},
                                {label: "Tamil and Bilingual (T/E)", value: "tamil_bilingual"},
                                {label: "Trilingual", value: "trilingual"}
                            ]}
                        />
                    </div>
                    <div className="flex items-center justify-center flex-row gap-3">
                        <DropdownField
                            important={"*"}
                            label={"Select student Population"}
                            options={[
                                {label: 'Select...', value: ''},
                                {label: "1–50", value: "1-50"},
                                {label: "51–100", value: "51-100"},
                                {label: "101–200", value: "101-200"},
                                {label: "201–500", value: "201-500"},
                                {label: "501–1,000", value: "501-1000"},
                                {label: "Above 1,000", value: "above_1000"}
                            ]}
                        />
                        <DropdownField
                            important={"*"}
                            label={"Select teacher Population"}
                            options={[
                                {label: 'Select...', value: ''},
                                {label: "1–50", value: "1-50"},
                                {label: "51–100", value: "51-100"},
                                {label: "101–200", value: "101-200"},
                                {label: "201–500", value: "201-500"},
                                {label: "501–1,000", value: "501-1000"},
                                {label: "Above 1,000", value: "above_1000"}
                            ]}
                        />
                    </div>
                    <TextFieldForLoginPages
                        name="classCount"
                        placeholder={'Class count'}
                        important={"*"}
                        label={'Class count (Number of Grade 1 classes)'}

                    />

                    <button
                        className={`mt-7 bg-[#006CAF] px-6 w-full py-3 rounded-md text-white font-medium`}
                    >
                        Request to Register
                    </button>
                </div>
            </article>
        </section>
    );
};
