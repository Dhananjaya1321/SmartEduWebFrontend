export const TextFieldForLoginPages = ({label, placeholder, type, disabled, msg, important, name, value, onChange}: props) => {
    return (
        <div className='grow mt-2 sm:mt-5 gap-1 flex flex-col justify-start '>
            <div className='flex flex-row'>
                <label className='textFieldForLoginPageLabel text-black flex justify-start'>{label}</label>
                <small className={`text-red-600 text-[16px] ${important==null?'hidden':'block'}`}>*</small>
            </div>
            <input
                className='min-w-[220px] border-[1px] border-[#9F9F9F]  border-solid rounded-lg w-[100%] h-[46px] pl-3'
                type={type == null ? "text" : type}
                placeholder={placeholder}
                disabled={disabled == null ? false : true}
                value={value}
                onChange={onChange}
                name={name}
            ></input>
            <div className={`h-[5px]`}>
                <small
                    className={`text-start text-red-600 block`}>
                    {msg}
                </small>
            </div>
        </div>
    );
};
type props = {
    label: string,
    placeholder?: string,
    type?: string,
    disabled?: string,
    msg?: string,
    important?: string,
    name?: string,
    value?: any;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}


