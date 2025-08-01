import apiClient from './apiClient';

const eventAPIController = {
    saveEvent: async (event: any) => {
        try {
            const response = await apiClient.post(
                `/events`,
                event
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
    updateEvent: async (payload: any) => {
        try {
            const response = await apiClient.put(`/events/${payload.id}`, payload);
            return response.status === 200 && response.data.state === 'OK';
        } catch (error) {
            return false;
        }
    },
    deleteEvent: async (id: string) => {
        try {
            const response = await apiClient.delete(`/events/${id}`);
            return response.status === 200 && response.data.state === 'OK';
        } catch (error) {
            return false;
        }
    },
    getAllEvents: async () => {
        try {
            const response = await apiClient.get(`/events`);
            if (response.status === 200 && response.data.state === "OK") {
                return response.data.data;
            }
            return null;
        } catch (error) {
            return null;
        }
    },
};

export default eventAPIController;
