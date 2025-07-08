import apiClient from './apiClient';

const pMOEAPIController = {
    savePMOEOfficeWithAdmin: async (user: any) => {
        try {
            const response = await apiClient.post(
                `/pmoe`,
                user
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

export default pMOEAPIController;
