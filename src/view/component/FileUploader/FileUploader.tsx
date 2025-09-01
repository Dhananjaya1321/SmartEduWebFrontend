import { UploadButton } from "react-uploader";
import { Uploader } from "uploader";

type Props = {
    label: string;
    height?: string;
    msg?: string;
    important?: string;
    onChange?: (base64: string) => void;
};

export const FileUploader = ({
                                 height = "112px",
                                 label,
                                 msg,
                                 important,
                                 onChange,
                             }: Props) => {
    const uploader = Uploader({ apiKey: "free" });
    const options = { multi: false };

    const convertUrlToBase64 = async (url: string): Promise<string> => {
        const response = await fetch(url);
        const blob = await response.blob();

        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => {
                if (reader.result) {
                    resolve(reader.result.toString());
                } else {
                    reject("Failed to read file as base64");
                }
            };
            reader.readAsDataURL(blob);
        });
    };

    return (
        <div className="grow mt-2 sm:mt-5 gap-1 flex flex-col justify-start">
            <div className="flex flex-row">
                <label className="textFieldForLoginPageLabel text-black flex justify-start">{label}</label>
                {important && (
                    <small className="text-red-600 text-[16px]">*</small>
                )}
            </div>

            <UploadButton
                uploader={uploader}
                options={options}
                onComplete={async (files) => {
                    const url = files?.[0]?.fileUrl;
                    if (url && onChange) {
                        const base64 = await convertUrlToBase64(url);
                        onChange(base64);
                    }
                }}
            >
                {({ onClick }) => (
                    <button
                        onClick={onClick}
                        style={{ height }}
                        className="rounded-md border-gray-500 border-[1px] border-solid p-2"
                    >
                        Upload a file...
                    </button>
                )}
            </UploadButton>

            <div className="h-[5px]">
                <small className="text-start text-red-600 block">{msg}</small>
            </div>
        </div>
    );
};
