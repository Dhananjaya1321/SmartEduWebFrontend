import apiClient from './apiClient';

const letterAPIController = {
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
