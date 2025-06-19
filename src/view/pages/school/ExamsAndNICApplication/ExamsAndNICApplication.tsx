import React, {useState} from "react";
import {Button} from "../../../component/Button/Button";
import {FooterSpace} from "../../../component/FooterSpace/FooterSpace";
import {Autocomplete} from "@mui/material";
import {DropdownField} from "../../../component/DropdownField/DropdownField";
import {examsAndNICApplicationOptions} from "../../../context/Arrays";
import {FileUploader} from "../../../component/FileUploader/FileUploader";

interface Student {
    id: number;
    name: string;
    index: string;
}

export const ExamsAndNICApplication = () => {
    const [selectedApplication, setSelectedApplication] = useState('');
    const [student, setStudent] = useState<Student[]>([]);
    const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
    const handleStudentSearch = async (inputValue: string) => {

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
                                                    getOptionLabel={(option) => `${option.name} (${option.index})`}
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
                                            <FileUploader label={"Birth certificate photo"}/>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                                    <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                                        <div
                                            className='mx-3 flex flex-row flex-wrap items-center justify-center w-full'>
                                            <FileUploader label={"NIC front side photo"}/>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                                    <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                                        <div
                                            className='mx-3 flex flex-row flex-wrap items-center justify-center w-full'>
                                            <FileUploader label={"NIC back side photo"}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Button name={'Apply'} color={'bg-green-600'}/>
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
                                                    getOptionLabel={(option) => `${option.name} (${option.index})`}
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
                                            <FileUploader label={"Birth certificate photo"}/>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                                    <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                                        <div
                                            className='mx-3 flex flex-row flex-wrap items-center justify-center w-full'>
                                            <FileUploader label={"NIC front side photo"}/>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                                    <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                                        <div
                                            className='mx-3 flex flex-row flex-wrap items-center justify-center w-full'>
                                            <FileUploader label={"NIC back side photo"}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Button name={'Apply'} color={'bg-green-600'}/>
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
                                                    getOptionLabel={(option) => `${option.name} (${option.index})`}
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
                                            <FileUploader label={"Birth certificate photo"}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Button name={'Apply'} color={'bg-green-600'}/>
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
                                                    getOptionLabel={(option) => `${option.name} (${option.index})`}
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
                                            <FileUploader label={"Birth certificate photo"}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Button name={'Apply'} color={'bg-green-600'}/>
                    </div>
                )}
            </section>
            <FooterSpace/>
        </section>
    );
};
