import * as types from '../constants/ActionTypes';

export const addNote = () => ({
  type: types.ADD_NOTE,
});

export const selectNote = () => ({
  type: types.SELECT_NOTE,
});

export const removeNote = () => ({
  type: types.REMOVE_NOTE,
});