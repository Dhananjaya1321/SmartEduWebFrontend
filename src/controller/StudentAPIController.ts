import apiClient from './apiClient';

const studentAPIController = {
    saveStudent: async (students: any) => {
        try {
            const response = await apiClient.post(
                `/students`,
                students
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
    classesReshuffle: async () => {
        try {
            const response = await apiClient.put(`/classes/classes-reshuffle`);
            return response.status === 200 && response.data.state === 'OK';
        } catch (error) {
            return false;
        }
    },
    getAllStudents: async () => {
        try {
            const response = await apiClient.get(`/students`);
            if (response.status === 200 && response.data.state === "OK") {
                return response.data.data;
            }
            return null;
        } catch (error) {
            return null;
        }
    },
    getStudentByStudentId: async (id:any) => {
        try {
            const response = await apiClient.get(`/students/by-studentId/${id}`);
            if (response.status === 200 && response.data.state === "OK") {
                return response.data.data;
            }
            return null;
        } catch (error) {
            return null;
        }
    },
    searchStudentsByName: async (inputValue: string, selectedApplication: string) => {
        try {
            const response = await apiClient.get(`/students/search/${inputValue}/${selectedApplication}`);
            if (response.status === 200 && response.data.state === "OK") {
                return response.data.data;
            }
            return null;
        } catch (error) {
            return null;
        }
    },
    generateRegistrationNumber: async () => {
        try {
            const response = await apiClient.get(`/students/registration-number`);
            if (response.status === 200 && response.data.state === "OK") {
                return response.data.data;
            }
            return null;
        } catch (error) {
            return null;
        }
    },
};

export default studentAPIController;
