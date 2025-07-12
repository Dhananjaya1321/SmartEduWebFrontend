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
};

export default principalAPIController;
