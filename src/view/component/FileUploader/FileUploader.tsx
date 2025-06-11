import {UploadButton} from "react-uploader";
import {Uploader} from "uploader";

export const FileUploader = ({height="112px", label, placeholder, msg, important, name, value, onChange}: props) => {
    // Initialize once (at the start of your app).
    const uploader = Uploader({
        apiKey: "free" // Get production API keys from Bytescale
    });
    const options = { multi: true };

    return (
        <div className='grow mt-2 sm:mt-5 gap-1 flex flex-col justify-start '>
            <div className='flex flex-row'>
                <label className='textFieldForLoginPageLabel text-black flex justify-start'>{label}</label>
                <small className={`text-red-600 text-[16px] ${important == null ? 'hidden' : 'block'}`}>*</small>
            </div>
            <div className="flex flex-col gap-2">
                <UploadButton uploader={uploader}
                              options={options}
                              onComplete={files => alert(files.map(x => x.fileUrl).join("\n"))}>
                    {({onClick}) =>
                        <button onClick={onClick}  style={{ height }} className="rounded-md border-gray-500 border-[1px] border-solid">
                            Upload a file...
                        </button>
                    }
                </UploadButton>
            </div>
            <div className={`h-[5px]`}>
                <small
                    className={`text-start text-red-600 block`}>
                    {msg}
                </small>
            </div>
        </div>
    )
};
type props = {
    label: string,
    placeholder?: string,
    height?: string,
    type?: string,
    disabled?: string,
    msg?: string,
    important?: string,
    name?: string,
    value?: any;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
