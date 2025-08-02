import apiClient from './apiClient';

const classAPIController = {
    saveClasses: async (grades: any) => {
        try {
            const response = await apiClient.post(
                `/classes`,
                grades
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

export default classAPIController;
