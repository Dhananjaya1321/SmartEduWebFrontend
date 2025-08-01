import apiClient from './apiClient';

const teacherAPIController = {
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
