import React from 'react';

type DropdownOption = {
    label: string;
    value: string;
};

type Props = {
    label: string;
    options: DropdownOption[];
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    name?: string;
    disabled?: boolean;
    msg?: string;
    important?: string;
    mt?: string;
    mb?: string;
    ml?: string;
    mr?: string;
};

export const DropdownField = ({label, options, value, onChange, name, disabled = false, msg, important,mt="20px",mb="0px",ml="0px",mr="0px"}: Props) => {
    return (
        <div style={{marginTop:mt, marginLeft:ml,marginRight:mr,marginBottom:mb}} className='grow mt-2 gap-1 flex flex-col justify-start'>
            <div className='flex flex-row'>
                <label className='textFieldForLoginPageLabel text-black flex justify-start'>{label}</label>
                <small className={`text-red-600 text-[16px] ${important == null ? 'hidden' : 'block'}`}>*</small>
            </div>
            <div className="custom-select-wrapper">
                <select
                    className='custom-select min-w-[220px] border-[1px] border-[#9F9F9F] border-solid rounded-lg w-[100%] h-[46px] pl-3 bg-white'
                    value={value}
                    onChange={onChange}
                    name={name}
                    disabled={disabled}
                >
                    {options.map((opt, idx) => (
                        <option key={idx} value={opt.value}>
                            {opt.label}
                        </option>
                    ))}
                </select>
                <span className="custom-arrow"></span>
            </div>
            <div className={`h-[5px]`}>
                <small className={`text-start text-red-600 block`}>{msg}</small>
            </div>
        </div>
    );
};
