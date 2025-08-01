import apiClient from './apiClient';

const teacherAPIController = {
    update: async (payload: any) => {
        try {
            const response = await apiClient.put(`/teachers/${payload.id}`, payload);
            return response.status === 200 && response.data.state === 'OK';
        } catch (error) {
            return false;
        }
    },
    findAllForZonalOffice: async () => {
        try {
            const response = await apiClient.get(`/teachers/for-zonal-office`);
            if (response.status === 200 && response.data.state === "OK") {
                return response.data.data.content;
            }
            return null;
        } catch (error) {
            return null;
        }
    },
};

export default teacherAPIController;
