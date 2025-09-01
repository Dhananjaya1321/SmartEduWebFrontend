import React, {useState} from "react";
import {Button} from "../../../component/Button/Button";
import {FooterSpace} from "../../../component/FooterSpace/FooterSpace";
import {Autocomplete} from "@mui/material";
import {DropdownField} from "../../../component/DropdownField/DropdownField";
import {examsAndNICApplicationOptions} from "../../../context/Arrays";
import {FileUploader} from "../../../component/FileUploader/FileUploader";
import studentAPIController from "../../../../controller/StudentAPIController";
import examsAndApplicationsAPIController from "../../../../controller/ExamsAndApplicationsAPIController";

interface Student {
    id: number;
    fullName: string;
    registrationNumber: string;
}

export const ExamsAndNICApplication = () => {
    const [selectedApplication, setSelectedApplication] = useState('');
    const [student, setStudent] = useState<Student[]>([]);
    const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);

    const [nicFrontAL, setNicFrontAL] = useState<string | null>(null);
    const [nicBackAL, setNicBackAL] = useState<string | null>(null);
    const [birthCertificateFrontAL, setBirthCertificateFrontAL] = useState<string | null>(null);
    const [birthCertificateBackAL, setBirthCertificateBackAL] = useState<string | null>(null);

    const [nicFrontOL, setNicFrontOL] = useState<string | null>(null);
    const [nicBackOL, setNicBackOL] = useState<string | null>(null);
    const [birthCertificateFrontOL, setBirthCertificateFrontOL] = useState<string | null>(null);
    const [birthCertificateBackOL, setBirthCertificateBackOL] = useState<string | null>(null);

    const [birthCertificateFrontG5, setBirthCertificateFrontG5] = useState<string | null>(null);
    const [birthCertificateBackG5, setBirthCertificateBackG5] = useState<string | null>(null);

    const [birthCertificateFrontNIC, setBirthCertificateFrontNIC] = useState<string | null>(null);
    const [birthCertificateBackNIC, setBirthCertificateBackNIC] = useState<string | null>(null);

    const handleStudentSearch = async (inputValue: string) => {
        const response = await studentAPIController.searchStudentsByName(inputValue, selectedApplication);
        if (response) {
            setStudent(response);
        }
    };
    const handleApplyForAL = async () => {
        if (!selectedStudent || !selectedApplication) {
            alert("Please select student and application type");
            return;
        }

        const payload = {
            type:selectedApplication,
            studentId: selectedStudent.id,
            nicFrontImageUrl: nicFrontAL,
            nicBackImageUrl: nicBackAL,
            birthCertificateFrontImageUrl: birthCertificateFrontAL,
            birthCertificateBackImageUrl: birthCertificateBackAL
        };


        try {
            const res = await examsAndApplicationsAPIController.save(payload);
            if (res) {
                alert("Application submitted successfully!");
                setSelectedStudent(null)
            } else {
                alert("Failed to submit application");
            }
        } catch (err) {
            console.error(err);
            alert("Error submitting application");
        }
    };

    const handleApplyForOL = async () => {
        if (!selectedStudent || !selectedApplication) {
            alert("Please select student and application type");
            return;
        }

        const payload = {
            type:selectedApplication,
            studentId: selectedStudent.id,
            nicFrontImageUrl: nicFrontOL,
            nicBackImageUrl: nicBackOL,
            birthCertificateFrontImageUrl: birthCertificateFrontOL,
            birthCertificateBackImageUrl: birthCertificateBackOL
        };

        try {
            const res = await examsAndApplicationsAPIController.save(payload);
            if (res) {
                alert("Application submitted successfully!");
                setSelectedStudent(null)
            } else {
                alert("Failed to submit application");
            }
        } catch (err) {
            console.error(err);
            alert("Error submitting application");
        }
    };

    const handleApplyForG5 = async () => {
        if (!selectedStudent || !selectedApplication) {
            alert("Please select student and application type");
            return;
        }

        const payload = {
            type:selectedApplication,
            studentId: selectedStudent.id,
            birthCertificateFrontImageUrl: birthCertificateFrontG5,
            birthCertificateBackImageUrl: birthCertificateBackG5
        };

        try {
            const res = await examsAndApplicationsAPIController.save(payload);
            if (res) {
                alert("Application submitted successfully!");
                setSelectedStudent(null)
            } else {
                alert("Failed to submit application");
            }
        } catch (err) {
            console.error(err);
            alert("Error submitting application");
        }
    };

    const handleApplyForNIC = async () => {
        if (!selectedStudent || !selectedApplication) {
            alert("Please select student and application type");
            return;
        }

        const payload = {
            type:selectedApplication,
            studentId: selectedStudent.id,
            birthCertificateFrontImageUrl: birthCertificateFrontNIC,
            birthCertificateBackImageUrl: birthCertificateBackNIC
        };

        try {
            const res = await examsAndApplicationsAPIController.save(payload);
            if (res) {
                alert("Application submitted successfully!");
                setSelectedStudent(null)
            } else {
                alert("Failed to submit application");
            }
        } catch (err) {
            console.error(err);
            alert("Error submitting application");
        }
    };

    return (
        <section className='h-max flex w-[95%] flex-col justify-center'>
            <section className='text-[#005285] flex flex-row justify-start mt-5'>
                <h3>Manage Exam and NIC Application &gt; Apply</h3>
            </section>
            {/*url display section*/}
            <section
                className='bg-white flex flex-row flex-wrap items-center justify-center mt-5 p-5 rounded-xl shadow-md'>
                <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                    <DropdownField
                        label="Select Application Type"
                        important="*"
                        mt={"12px"}
                        mb={"12px"}
                        ml={"12px"}
                        mr={"12px"}
                        options={examsAndNICApplicationOptions}
                        value={selectedApplication}
                        onChange={(e) => setSelectedApplication(e.target.value)}
                    />
                </div>
            </section>
            <section
                className='bg-white flex flex-row flex-wrap items-center justify-center mt-5 p-5 rounded-xl shadow-md'>
                {selectedApplication === 'ol' && (
                    <div className='flex flex-col items-end w-full'>
                        <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                            <div
                                className="w-full h-max rounded-md shadow-md mb-4 flex flex-col items-center justify-center">
                                <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                                    <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                                        <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                                            <div className='grow mx-3 my-3 gap-1 flex flex-col justify-start'>
                                                <div className='flex flex-row'>
                                                    <label className='text-black flex justify-start'>Student</label>
                                                    <small className={`text-red-600 text-[16px] block`}>*</small>
                                                </div>
                                                <Autocomplete
                                                    options={student}
                                                    getOptionLabel={(option) => `${option.fullName} (${option.registrationNumber})`}
                                                    value={selectedStudent}
                                                    onChange={(event, newValue) => setSelectedStudent(newValue)}
                                                    onInputChange={(event, value) => handleStudentSearch(value)}
                                                    renderInput={(params) => (
                                                        <div ref={params.InputProps.ref}>
                                                            <input
                                                                {...params.inputProps}
                                                                className="text-input"
                                                                type="text"
                                                                placeholder="Search student..."
                                                                value={params.inputProps.value}
                                                            />
                                                        </div>
                                                    )}
                                                />
                                                <div className={`h-[5px]`}>
                                                    <small
                                                        className={`text-start text-red-600 block`}></small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                                    <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                                        <div
                                            className='mx-3 flex flex-row flex-wrap items-center justify-center w-full'>
                                            <FileUploader label={"Birth certificate front side photo"} onChange={setBirthCertificateFrontOL}/>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                                    <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                                        <div
                                            className='mx-3 flex flex-row flex-wrap items-center justify-center w-full'>
                                            <FileUploader label={"Birth certificate back side photo"} onChange={setBirthCertificateBackOL}/>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                                    <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                                        <div
                                            className='mx-3 flex flex-row flex-wrap items-center justify-center w-full'>
                                            <FileUploader label={"NIC front side photo"} onChange={setNicFrontOL}/>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                                    <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                                        <div
                                            className='mx-3 flex flex-row flex-wrap items-center justify-center w-full'>
                                            <FileUploader label={"NIC back side photo"} onChange={setNicBackOL}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Button name={'Apply'} onClick={handleApplyForOL} color={'bg-green-600'}/>
                    </div>
                )}

                {selectedApplication === 'al' && (
                    <div className='flex flex-col items-end w-full'>
                        <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                            <div
                                className="w-full h-max rounded-md shadow-md mb-4 flex flex-col items-center justify-center">
                                <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                                    <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                                        <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                                            <div className='grow mx-3 my-3 gap-1 flex flex-col justify-start'>
                                                <div className='flex flex-row'>
                                                    <label className='text-black flex justify-start'>Student</label>
                                                    <small className={`text-red-600 text-[16px] block`}>*</small>
                                                </div>
                                                <Autocomplete
                                                    options={student}
                                                    getOptionLabel={(option) => `${option.fullName} (${option.registrationNumber})`}
                                                    value={selectedStudent}
                                                    onChange={(event, newValue) => setSelectedStudent(newValue)}
                                                    onInputChange={(event, value) => handleStudentSearch(value)}
                                                    renderInput={(params) => (
                                                        <div ref={params.InputProps.ref}>
                                                            <input
                                                                {...params.inputProps}
                                                                className="text-input"
                                                                type="text"
                                                                placeholder="Search student..."
                                                                value={params.inputProps.value}
                                                            />
                                                        </div>
                                                    )}
                                                />
                                                <div className={`h-[5px]`}>
                                                    <small
                                                        className={`text-start text-red-600 block`}></small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                                    <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                                        <div
                                            className='mx-3 flex flex-row flex-wrap items-center justify-center w-full'>
                                            <FileUploader label={"Birth certificate front side photo"} onChange={setBirthCertificateFrontAL}/>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                                    <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                                        <div
                                            className='mx-3 flex flex-row flex-wrap items-center justify-center w-full'>
                                            <FileUploader label={"Birth certificate back side photo"} onChange={setBirthCertificateBackAL}/>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                                    <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                                        <div
                                            className='mx-3 flex flex-row flex-wrap items-center justify-center w-full'>
                                            <FileUploader label={"NIC front side photo"} onChange={setNicFrontAL}/>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                                    <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                                        <div
                                            className='mx-3 flex flex-row flex-wrap items-center justify-center w-full'>
                                            <FileUploader label={"NIC back side photo"} onChange={setNicBackAL}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Button name={'Apply'} onClick={handleApplyForAL} color={'bg-green-600'}/>
                    </div>
                )}

                {selectedApplication === 'g5' && (
                    <div className='flex flex-col items-end w-full'>
                        <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                            <div
                                className="w-full h-max rounded-md shadow-md mb-4 flex flex-col items-center justify-center">
                                <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                                    <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                                        <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                                            <div className='grow mx-3 my-3 gap-1 flex flex-col justify-start'>
                                                <div className='flex flex-row'>
                                                    <label className='text-black flex justify-start'>Student</label>
                                                    <small className={`text-red-600 text-[16px] block`}>*</small>
                                                </div>
                                                <Autocomplete
                                                    options={student}
                                                    getOptionLabel={(option) => `${option.fullName} (${option.registrationNumber})`}
                                                    value={selectedStudent}
                                                    onChange={(event, newValue) => setSelectedStudent(newValue)}
                                                    onInputChange={(event, value) => handleStudentSearch(value)}
                                                    renderInput={(params) => (
                                                        <div ref={params.InputProps.ref}>
                                                            <input
                                                                {...params.inputProps}
                                                                className="text-input"
                                                                type="text"
                                                                placeholder="Search student..."
                                                                value={params.inputProps.value}
                                                            />
                                                        </div>
                                                    )}
                                                />
                                                <div className={`h-[5px]`}>
                                                    <small
                                                        className={`text-start text-red-600 block`}></small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                                    <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                                        <div
                                            className='mx-3 flex flex-row flex-wrap items-center justify-center w-full'>
                                            <FileUploader label={"Birth certificate front side photo"} onChange={setBirthCertificateFrontG5}/>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                                    <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                                        <div
                                            className='mx-3 flex flex-row flex-wrap items-center justify-center w-full'>
                                            <FileUploader label={"Birth certificate back side photo"} onChange={setBirthCertificateBackG5}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Button name={'Apply'} onClick={handleApplyForG5} color={'bg-green-600'}/>
                    </div>
                )}

                {selectedApplication === 'nic' && (
                    <div className='flex flex-col items-end w-full'>
                        <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                            <div
                                className="w-full h-max rounded-md shadow-md mb-4 flex flex-col items-center justify-center">
                                <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                                    <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                                        <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                                            <div className='grow mx-3 my-3 gap-1 flex flex-col justify-start'>
                                                <div className='flex flex-row'>
                                                    <label className='text-black flex justify-start'>Student</label>
                                                    <small className={`text-red-600 text-[16px] block`}>*</small>
                                                </div>
                                                <Autocomplete
                                                    options={student}
                                                    getOptionLabel={(option) => `${option.fullName} (${option.registrationNumber})`}
                                                    value={selectedStudent}
                                                    onChange={(event, newValue) => setSelectedStudent(newValue)}
                                                    onInputChange={(event, value) => handleStudentSearch(value)}
                                                    renderInput={(params) => (
                                                        <div ref={params.InputProps.ref}>
                                                            <input
                                                                {...params.inputProps}
                                                                className="text-input"
                                                                type="text"
                                                                placeholder="Search student..."
                                                                value={params.inputProps.value}
                                                            />
                                                        </div>
                                                    )}
                                                />
                                                <div className={`h-[5px]`}>
                                                    <small
                                                        className={`text-start text-red-600 block`}></small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                                    <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                                        <div
                                            className='mx-3 flex flex-row flex-wrap items-center justify-center w-full'>
                                            <FileUploader label={"Birth certificate front side photo"} onChange={setBirthCertificateFrontNIC}/>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                                    <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                                        <div
                                            className='mx-3 flex flex-row flex-wrap items-center justify-center w-full'>
                                            <FileUploader label={"Birth certificate back side photo"} onChange={setBirthCertificateBackNIC}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Button name={'Apply'} onClick={handleApplyForNIC} color={'bg-green-600'}/>
                    </div>
                )}
            </section>
            <FooterSpace/>
        </section>
    );
};
