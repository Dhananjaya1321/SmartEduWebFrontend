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
    getAll: async (applicationType:any) => {
        try {
            const response = await apiClient.get(`/exams-and-nic-applications/${applicationType}`);
            if (response.status === 200 && response.data.state === "OK") {
                return response.data.data;
            }
            return null;
        } catch (error) {
            return null;
        }
    },
};

export default examsAndApplicationsAPIController;
