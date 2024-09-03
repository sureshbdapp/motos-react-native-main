// src/api/HostSelectionInterceptor.js
import axios from 'axios';

class HostSelectionInterceptor {
  constructor() {
    this.host = null;
    this.scheme = null;

    if (!HostSelectionInterceptor.instance) {
      HostSelectionInterceptor.instance = this;
    }

    return HostSelectionInterceptor.instance;
  }

  setInterceptor(url) {
    try {
      const urlObject = new URL(url);
      this.scheme = urlObject.protocol.replace(':', ''); // Removing colon from 'https:'
      this.host = urlObject.hostname;
    } catch (error) {
      console.error('Invalid URL:', error);
    }
  }

  attachInterceptor() {
    axios.interceptors.request.use((config) => {
      if (this.scheme && this.host) {
        const url = new URL(config.url);
        url.protocol = this.scheme;
        url.hostname = this.host;

        config.url = url.toString();
      }
      return config;
    }, (error) => {
      return Promise.reject(error);
    });
  }
}

const interceptorInstance = new HostSelectionInterceptor();
Object.freeze(interceptorInstance); 

export default interceptorInstance;
