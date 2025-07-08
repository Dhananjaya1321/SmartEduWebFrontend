import apiClient from './apiClient';

const zMOEAPIController = {
    saveZMOEOfficeWithAdmin: async (user: any) => {
        try {
            const response = await apiClient.post(
                `/zmoe`,
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
    getAllZMOEAdmins: async () => {
        try {
            const response = await apiClient.get('/zmoe/admins');
            if (response.status === 200 && response.data.state === 'OK') {
                return response.data.data;
            }
            return [];
        } catch (error) {
            console.error("Error fetching ZMOE admins:", error);
            return [];
        }
    }

};

export default zMOEAPIController;
