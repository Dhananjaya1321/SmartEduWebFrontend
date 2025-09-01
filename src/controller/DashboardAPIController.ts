import apiClient from './apiClient';

const dashboardAPIController = {
    getDetailsToSchoolDashboard: async () => {
        try {
            const response = await apiClient.get(`/dashboard/to-school`);
            if (response.status === 200 && response.data.state === 'OK') {
                return response.data.data;
            }
            return [];
        } catch (error) {
            return [];
        }
    },
    getDetailsToZonalDashboard: async () => {
        try {
            const response = await apiClient.get(`/dashboard/to-zonal`);
            if (response.status === 200 && response.data.state === 'OK') {
                return response.data.data;
            }
            return [];
        } catch (error) {
            return [];
        }
    },
    getDetailsToProvinceDashboard: async () => {
        try {
            const response = await apiClient.get(`/dashboard/to-province`);
            if (response.status === 200 && response.data.state === 'OK') {
                return response.data.data;
            }
            return [];
        } catch (error) {
            return [];
        }
    },
    getDetailsToMOEDashboard: async () => {
        try {
            const response = await apiClient.get(`/dashboard/to-moe`);
            if (response.status === 200 && response.data.state === 'OK') {
                return response.data.data;
            }
            return [];
        } catch (error) {
            return [];
        }
    },
};

export default dashboardAPIController;
