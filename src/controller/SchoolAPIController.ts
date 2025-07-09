import apiClient from './apiClient';

const schoolAPIController = {
    saveSchoolWithAdmin: async (school: any) => {
        try {
            const response = await apiClient.post(
                `/schools`,
                school
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

export default schoolAPIController;
