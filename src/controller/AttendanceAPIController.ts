import apiClient from './apiClient';

const attendanceAPIController = {
    getAttendanceByStudentId: async (studentId:any) => {
        try {
            const response = await apiClient.get(`/attendance/to-principal/${studentId}`);
            if (response.status === 200 && response.data.state === "OK") {
                return response.data.data;
            }
            return null;
        } catch (error) {
            return null;
        }
    },
};

export default attendanceAPIController;
