import axios from 'axios';
import {base_url} from "./config/apiConfig";

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
    }
    // you can now add other methods (e.g. register, fetchProfile) here
};

export default userAPIController;
