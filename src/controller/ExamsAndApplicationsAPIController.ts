import apiClient from './apiClient';

const examsAndApplicationsAPIController = {
    save: async (event: any) => {
        try {
            const response = await apiClient.post(
                `/exams-and-nic-applications`,
                event
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
