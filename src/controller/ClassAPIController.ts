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
    updateClasses: async (payload: any) => {
        try {
            const response = await apiClient.put(`/classes/${payload.id}`, payload);
            return response.status === 200 && response.data.state === 'OK';
        } catch (error) {
            return false;
        }
    },
    deleteClass: async (id: string) => {
        try {
            const response = await apiClient.delete(`/classes/${id}`);
            return response.status === 200 && response.data.state === 'OK';
        } catch (error) {
            return false;
        }
    },
};

export default classAPIController;
