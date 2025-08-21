import apiClient from './apiClient';

const letterAPIController = {
    saveLetterPDF: async (data: any,studentId:any,requestId:any) => {
        try {
            const response = await apiClient.post(
                `/letters/save-pdf/${studentId}/${requestId}`,
                data,{
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            if (response.status === 200) {
                return response.data;
            } else {
                return null;
            }
        } catch (error) {
            return null;
        }
    },
    getAllLetters: async () => {
        try {
            const response = await apiClient.get(`/letters/pending`);
            if (response.status === 200 && response.data.state === "OK") {
                return response.data.data;
            }
            return null;
        } catch (error) {
            return null;
        }
    },
};

export default letterAPIController;
