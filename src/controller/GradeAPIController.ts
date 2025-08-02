import apiClient from './apiClient';

const gradeAPIController = {
    saveGrades: async (grades: any) => {
        try {
            const response = await apiClient.post(
                `/grades`,
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
    getAllGrades: async () => {
        try {
            const response = await apiClient.get(`/grades`);
            if (response.status === 200 && response.data.state === "OK") {
                return response.data.data.content;
            }
            return null;
        } catch (error) {
            return null;
        }
    },
};

export default gradeAPIController;
