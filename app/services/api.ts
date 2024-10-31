import axios from 'axios';
import { Document } from '@/types/document';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://sjhbdpnj-5000.inc1.devtunnels.ms';

export const uploadDocument = async (file: File): Promise<Document> => {
    const formData = new FormData();
    formData.append('file', file);
    const response = await axios.post(`${API_URL}/api/upload`, formData);
    return response.data;
};


export const searchDocuments = async (query: string): Promise<Document[]> => {
    const response = await axios.get(`${API_URL}/api/search`, { params: { query } });
    return response.data;
};
