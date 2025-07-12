import apiClient from './apiClient';

const schoolAPIController = {
    saveSchoolWithAdmin: async (school: any) => {
        try {
            const response = await apiClient.post(
                `/schools`,
                school
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
    updateSchoolStatus: async (id: string, status: string) => {
        try {
            const response = await apiClient.put(`/schools/update-school-status/${id}`, null, {
                params: {status}
            });

            return response.status === 200 && response.data.state === 'OK';
        } catch (err: any) {
            return false;
        }
    },
    findAllApprovedSchools: async () => {
        try {
            const response = await apiClient.get(`/schools/approved-schools`);

            if (response.status === 200 && response.data.state === 'OK') {
                return response.data.data;
            }
            return [];
        } catch (error) {
            return [];
        }
    },
    findAllPendingSchools: async () => {
        try {
            const response = await apiClient.get(`/schools/pending-schools`);

            if (response.status === 200 && response.data.state === 'OK') {
                return response.data.data;
            }
            return [];
        } catch (error) {
            return [];
        }
    },
};

export default schoolAPIController;
