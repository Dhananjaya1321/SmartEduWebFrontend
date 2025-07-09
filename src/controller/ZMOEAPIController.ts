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
    },
    updateZMOEOffice: async (payload: { institutionID: string; officeAddress: string; address: string }) => {
        try {
            const response = await apiClient.put(`/zmoe/${payload.institutionID}`, {
                officeAddress: payload.officeAddress,
                address: payload.address
            });

            return response.status === 200 && response.data.state === 'OK';
        } catch (err: any) {
            console.error("Error updating ZMOE:", err);
            return false;
        }
    },
};

export default zMOEAPIController;
