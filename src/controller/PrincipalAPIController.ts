import apiClient from './apiClient';

const principalAPIController = {
    getPrincipalUserAccountDetailsByProfileId: async (id: string) => {
        try {
            const response = await apiClient.get(`/principals/principal-user-account-details/${id}`);

            if (response.status === 200 && response.data.state === 'OK') {
                return response.data.data;
            }
            return [];
        } catch (error) {
            return [];
        }
    },
    update: async (payload: any) => {
        try {
            const response = await apiClient.put(`/principals/${payload.id}`, payload);
            return response.status === 200 && response.data.state === 'OK';
        } catch (error) {
            return false;
        }
    },
    getAll: async () => {
        try {
            const response = await apiClient.get(`/principals`);
            if (response.status === 200 && response.data.state === "OK") {
                return response.data.data.content;
            }
            return null;
        } catch (error) {
            return null;
        }
    },
};

export default principalAPIController;
