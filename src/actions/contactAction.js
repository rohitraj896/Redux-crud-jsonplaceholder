import {
  CLEAR_CONTACT,
  CREATE_CONTACT,
  DELETE_CONTACT,
  DELETE_SELECTED_CONTACTS,
  GET_CONTACT,
  SELECT_CONTACT,
  UPDATE_CONTACT,
} from "../constant/types";

export const addContact = contact => {
  return {
    type: CREATE_CONTACT,
    payload: contact,
  };
};

export const getContact = id => ({
  type: GET_CONTACT,
  payload: id,
});

export const updateContact = contact => ({
  type: UPDATE_CONTACT,
  payload: contact,
});

export const deleteContact = id => ({
  type: DELETE_CONTACT,
  payload: id,
});

export const selectAllContact = id => ({
  type: SELECT_CONTACT,
  payload: id,
});

export const clearAllContact = () => ({
  type: CLEAR_CONTACT,
});

export const deleteAllContact = () => ({
  type: DELETE_SELECTED_CONTACTS,
});
