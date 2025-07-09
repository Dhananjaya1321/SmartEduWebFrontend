import {FileUploader} from "../../../component/FileUploader/FileUploader";
import {DropdownField} from "../../../component/DropdownField/DropdownField";
import {Link, useLocation, useNavigate} from "react-router-dom";
// @ts-ignore
import backgroundImage from "../../../assets/images/backgroundImage.jpg";
import React, {useState} from "react";
import {TextFieldForLoginPages} from "../../../component/TextFieldForLoginPages/TextFieldForLoginPages";
import {
    districtZoneMap, ethnicityOptions, genderOptions,
    gradeSpanOptions, languageMediumOptions,
    provinceDistrictMap, schoolLevelOptions,
    schoolTypeOptions, studentPopulationOptions, teacherPopulationOptions
} from "../../../context/Arrays";
import schoolAPIController from "../../../../controller/SchoolAPIController";

export const SchoolVerifyPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const collectedData = location.state;

    const [schoolName, setSchoolName] = useState('');
    const [schoolLogo, setSchoolLogo] = useState<string | null>(null);
    const [selectedProvince, setSelectedProvince] = useState('');
    const [districts, setDistricts] = useState<string[]>([]);
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [zonals, setZonals] = useState<string[]>([]);
    const [selectedZonal, setSelectedZonal] = useState('');
    const [schoolLevel, setSchoolLevel] = useState('');
    const [schoolType, setSchoolType] = useState('');
    const [gradeSpan, setGradeSpan] = useState('');
    const [gender, setGender] = useState('');
    const [ethnicity, setEthnicity] = useState('');
    const [languageMedium, setLanguageMedium] = useState('');
    const [studentPop, setStudentPop] = useState('');
    const [teacherPop, setTeacherPop] = useState('');
    const [classCount, setClassCount] = useState('');

    const handleSubmit = async () => {
        const payload = {
            // Principal info
            fullName: collectedData.yourFullName,
            nic: collectedData.nICNumber,
            contact: collectedData.contact,
            username: collectedData.username,
            password: collectedData.password,
            email: collectedData.email,
            address: collectedData.address,

            // Documents
            nicFront: collectedData.documents.nicFront,
            nicBack: collectedData.documents.nicBack,
            moeFront: collectedData.documents.moeFront,
            moeBack: collectedData.documents.moeBack,
            appointment: collectedData.documents.appointment,

            // School details
            schoolName: schoolName,
            logoUrl: schoolLogo,
            province: selectedProvince,
            district: selectedDistrict,
            zonal: selectedZonal,

            schoolLevel: schoolLevel,
            schoolType: schoolType,
            gradeSpan: gradeSpan,

            gender: gender,
            ethnicity: ethnicity,
            languageMedium: languageMedium,

            studentPopulation: studentPop,
            teacherPopulation: teacherPop,
            classCount: classCount
        };

        try {
            const res = await schoolAPIController.saveSchoolWithAdmin(payload);
            if (res) {
                alert("School registration request submitted successfully!");
                navigate('/login');
            } else {
                alert("Failed to submit registration. Please try again.");
            }
        } catch (err) {
            console.error(err);
            alert("Server error during registration.");
        }
    };

    return (
        <section className='relative justify-center items-center flex flex-row w-full h-[800px]'>
            <aside className='h-[800px] w-[40%] self-start relative items-center justify-center flex bg-[#F8F8F8]'>
                <section className="pl-5 pr-20 relative flex flex-col justify-center items-start">
                    <div className="bg-black opacity-75 w-full h-full absolute"></div>
                    <h3 className="font-medium text-white text-[32px] z-10 text-start">Welcome to</h3>
                    <h1 className="font-medium leading-[100px] bg-gradient-to-r from-purple-400 via-[#F90766] to-[#1100FF] bg-clip-text text-transparent z-50 text-[98px] text-start">
                        SmartEdu
                    </h1>
                    <h3 className="font-medium text-white text-[38px] z-10 text-start">The future of education</h3>
                    <p className="text-white z-10 text-start">
                        A powerful all-in-one digital platform connecting schools, teachers, students, parents,
                        and education authorities...
                    </p>
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

            <article className='loginArticles flex flex-col justify-center sm:w-[60%] h-[800px] bg-white px-8 absolute sm:relative'>
                <div className='flex flex-col text-start mb-5'>
                    <h1 className='loginH1 text-3xl poppins-semibold'>School Details</h1>
                    <p className="loginP">Please fill in the school details.</p>
                </div>

                <div className='flex flex-col text-start'>
                    <div className="flex items-center justify-center flex-row gap-3">
                        <TextFieldForLoginPages
                            name="schoolName"
                            placeholder="School name"
                            label="School name"
                            important="*"
                            value={schoolName}
                            onChange={(e) => setSchoolName(e.target.value)}
                        />
                        <FileUploader label="School logo" height="46px" important="*" onChange={setSchoolLogo}/>
                    </div>

                    <div className="flex items-center justify-center flex-row gap-3">
                        <DropdownField
                            important="*"
                            label="Select province"
                            options={[{label: 'Select...', value: ''}, ...Object.keys(provinceDistrictMap).map(p => ({label: p, value: p}))]}
                            value={selectedProvince}
                            onChange={(e) => {
                                const p = e.target.value;
                                setSelectedProvince(p);
                                setDistricts(provinceDistrictMap[p] || []);
                                setSelectedDistrict('');
                                setZonals([]);
                                setSelectedZonal('');
                            }}
                        />
                        <DropdownField
                            important="*"
                            label="Select district"
                            options={[{label: 'Select...', value: ''}, ...districts.map(d => ({label: d, value: d}))]}
                            value={selectedDistrict}
                            onChange={(e) => {
                                const d = e.target.value;
                                setSelectedDistrict(d);
                                setZonals(districtZoneMap[d] || []);
                                setSelectedZonal('');
                            }}
                        />
                        <DropdownField
                            important="*"
                            label="Select zonal"
                            options={[{label: 'Select...', value: ''}, ...zonals.map(z => ({label: z, value: z}))]}
                            value={selectedZonal}
                            onChange={(e) => setSelectedZonal(e.target.value)}
                        />
                    </div>

                    <div className="flex items-center justify-center flex-row gap-3">
                        <DropdownField label="Level of School" important="*" options={schoolLevelOptions} value={schoolLevel} onChange={(e) => setSchoolLevel(e.target.value)} />
                        <DropdownField label="Type of School" important="*" options={schoolTypeOptions} value={schoolType} onChange={(e) => setSchoolType(e.target.value)} />
                        <DropdownField label="Grade Span" important="*" options={gradeSpanOptions} value={gradeSpan} onChange={(e) => setGradeSpan(e.target.value)} />
                    </div>

                    <div className="flex items-center justify-center flex-row gap-3">
                        <DropdownField label="Select gender" important="*" options={genderOptions} value={gender} onChange={(e) => setGender(e.target.value)} />
                        <DropdownField label="Select ethnicity" important="*" options={ethnicityOptions} value={ethnicity} onChange={(e) => setEthnicity(e.target.value)} />
                        <DropdownField label="Select language medium" important="*" options={languageMediumOptions} value={languageMedium} onChange={(e) => setLanguageMedium(e.target.value)} />
                    </div>

                    <div className="flex items-center justify-center flex-row gap-3">
                        <DropdownField label="Select student Population" important="*" options={studentPopulationOptions} value={studentPop} onChange={(e) => setStudentPop(e.target.value)} />
                        <DropdownField label="Select teacher Population" important="*" options={teacherPopulationOptions} value={teacherPop} onChange={(e) => setTeacherPop(e.target.value)} />
                    </div>

                    <TextFieldForLoginPages
                        name="classCount"
                        placeholder="Class count"
                        label="Class count (Number of Grade 1 classes)"
                        important="*"
                        value={classCount}
                        onChange={(e) => setClassCount(e.target.value)}
                    />

                    <button
                        onClick={handleSubmit}
                        className="mt-7 bg-[#006CAF] px-6 w-full py-3 rounded-md text-white font-medium"
                    >
                        Request to Register
                    </button>
                </div>
            </article>
        </section>
    );
};
