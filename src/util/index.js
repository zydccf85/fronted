import moment from 'moment'
const DateUtil = {
  /**
   * Compares if two date1 and date2 are the same with specified granularity(date, month, year)
   * @param date1
   * @param date2
   * @param granularity
   * @return Boolean returns if the dates are the same with this granularity
   */
  isSame: (date1, date2, granularity) => {},
  /**
   * Get number of days in month specified by year and month
   * @param year
   * @param month
   * @return int number of days
   */
  daysInMonth: (year, month) => {},
  /**
   * Return ISO week number for date
   * @param date
   * returns int the week number
   */
  weekNumber: (date) => {},
  /**
   * Formats the date object with the specified mask.
   * @see https://github.com/felixge/node-dateformat
   *
   * @param date
   * @param mask
   * return String the formatted date
   */
  format: (date, mask) => {},
  /**
   * Get next month from date
   * @param date
   * @return Date the first day of the next month
   */
  nextMonth: (date) => {},
  /**
   * Get previous month from date
   * @param date
   * @return Date the first day of the previous month
   */
  prevMonth: (date) => {},
  /**
   * Validates a date base on date range [min, max]. Keeps the date in the constraint.
   * @param newDate
   * @param min
   * @param max
   * @return Date the date after it has been checked if it is in the range specified.
   */
  validateDateRange: (newDate, min, max) => true,
  /**
   * Returns the locale data based on passed options object.
   * @param options
   * @return {{cancelLabel: string, applyLabel: string, format: string, daysOfWeek: *, separator: string, customRangeLabel: string, weekLabel: string, direction: string}}
   */
  localeData: (options) => {
    let default_locale ={
                direction: 'ltr',
                format: 'yyyy-mm-dd',
                separator: ' - ',
                applyLabel: '确定',
                cancelLabel: '取消',
                weekLabel: 'W',
                customRangeLabel: 'Custom Range',
                daysOfWeek: ['日', '一', '二', '三', '四', '五', '六'],
                monthNames: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
                firstDay: 0
            };

    return {...default_locale, ...options }
  },
  /**
   * Returns date in the format YYYYMM
   * @param date
   * return String the date formatted
   */
  yearMonth: (date) => {}
}

export default DateUtil
