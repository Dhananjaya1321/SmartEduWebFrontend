import apiClient from './apiClient';

const studentAPIController = {
    saveAchievements: async (achievement: any, studentId: any) => {
        try {
            const response = await apiClient.post(
                `/achievements/student/${studentId}`,
                achievement
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
    getAchievementsByStudentId: async (id: any) => {
        try {
            const response = await apiClient.get(`/achievements/student/${id}`);
            if (response.status === 200 && response.data.state === "OK") {
                return response.data.data;
            }
            return null;
        } catch (error) {
            return null;
        }
    },
    deleteAchievementsByStudentId: async (id: string) => {
        try {
            const response = await apiClient.delete(`/achievements/${id}`);
            return response.status === 200 && response.data.state === 'OK';
        } catch (error) {
            return false;
        }
    },
};

export default studentAPIController;
