// src/utils/ValidationUtils.js
export default class ValidationUtils {
    static isEmailValid(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    }
  
    static isPasswordStrong(password) {
      return password.length >= 8;
    }
  
    static isEmpty(value) {
      return value.trim() === '';
    }

    static mobileValidation(mobile){
      return mobile.length==10 ;
    }
  }
  