// src/api/FileUploadService.js
import apiClient from './ApiService';

const uploadFile = async (file) => {
  const formData = new FormData();
  
  // Append the file and other data to the form data
  formData.append('file', {
    uri: file.uri,
    type: file.type,
    name: file.name,
  });

  try {
    const response = await apiClient.post('/upload-endpoint', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error('File upload failed:', error);
    throw error;
  }
};

export default {
  uploadFile,
};
