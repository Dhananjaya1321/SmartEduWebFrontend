import apiClient from './apiClient';

const examsAndApplicationsAPIController = {
    save: async (payload: any) => {
        try {
            const response = await apiClient.post(
                `/exams`,
                payload
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
};

export default examsAndApplicationsAPIController;
