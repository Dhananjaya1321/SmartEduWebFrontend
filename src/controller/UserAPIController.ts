import apiClient from './apiClient';

const userAPIController = {
    checkLogin: async (username: string, password: string) => {
        try {
            const response = await apiClient.post('/auth/login', {
                username,
                password,
            });

            if (response.status === 200 && response.data.token) {
                return response.data;
            } else {
                return {error: response.data.message || 'Login failed'};
            }
        } catch (err: any) {
            if (err.response) {
                return {error: err.response.data.message || 'Login failed. Please try again.'};
            }
            return {error: 'Network error. Please try again later.'};
        }
    },
    checkEmailAndSendOTP: async (email: string) => {
        try {
            const response = await apiClient.get(`/user/check-email-and-send-otp`, {
                params: { email }
            });

            if (response.status === 200 && response.data.state === 'OK') {
                return { otp: response.data.data };
            } else {
                return { error: response.data.message || 'Failed to send OTP.' };
            }
        } catch (err: any) {
            if (err.response) {
                return { error: err.response.data.message || 'OTP send failed. Try again.' };
            }
            return { error: 'Unexpected error occurred during OTP send.' };
        }
    }
};

export default userAPIController;
