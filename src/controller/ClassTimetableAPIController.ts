import apiClient from './apiClient';

const classTimetableAPIController = {
    saveClassTimetable: async (timetable: any) => {
        try {
            const response = await apiClient.post(
                `/timetables`,
                timetable
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
};

export default classTimetableAPIController;
