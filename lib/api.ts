import axios from 'axios';
import type { ContactFormData, ApiResponse } from '@/types';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const submitContactForm = async (
  data: ContactFormData
): Promise<ApiResponse> => {
  try {
    const response = await apiClient.post<ApiResponse>('/api/contact', data);
    return response.data;
  } catch (error: any) {
    return {
      success: false,
      message: error.response?.data?.message || 'Failed to submit form',
    };
  }
};

export default apiClient;
