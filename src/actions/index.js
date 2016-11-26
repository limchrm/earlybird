/**
 * Action Types
 */
export const TAKE_NOTE = 'TAKE_NOTE';

/**
 * Actions
 */
export const takeNote = ( dateValue, timeValue ) => ({
  type: TAKE_NOTE,
  date: dateValue,
  time: timeValue
});