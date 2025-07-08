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
    getAllPMOEAdmins: async () => {
        try {
            const response = await apiClient.get('/pmoe/admins');
            if (response.status === 200 && response.data.state === 'OK') {
                return response.data.data; // assuming data is an array of PMOE objects
            }
            return [];
        } catch (error) {
            console.error("Error fetching PMOE admins:", error);
            return [];
        }
    },
    getLoggedInPMOE: async () => {
        try {
            const response = await apiClient.get('/pmoe/province'); // or another endpoint
            if (response.status === 200 && response.data.state === 'OK') {
                return response.data.data; // PMOE admin data
            }
            return null;
        } catch (error) {
            console.error("Error fetching PMOE:", error);
            return null;
        }
    }


};

export default pMOEAPIController;
