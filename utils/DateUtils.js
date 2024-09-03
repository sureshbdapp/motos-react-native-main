// src/utils/DateUtils.js
import moment from 'moment';

export default class DateUtils {
  static formatDate(date, format = 'YYYY-MM-DD') {
    return moment(date).format(format);
  }

  static getDaysDifference(date1, date2) {
    return moment(date1).diff(moment(date2), 'days');
  }

  static isDateBefore(date1, date2) {
    return moment(date1).isBefore(date2);
  }
}
