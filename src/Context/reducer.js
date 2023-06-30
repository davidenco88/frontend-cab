import { SHOW_PICK_UP_DATE, SET_SEARCH_FORM } from "./actionTypes";

export function reducer(state, action) {
  switch (action.type) {
    case SHOW_PICK_UP_DATE: {
      return {...state, showPickUpDate: action.payload}
    }
    case SET_SEARCH_FORM: {
      return {
        ...state,
        searchForm: {
          ...state.searchForm,
          [action.payload.fieldName]: action.payload.newField
        }
      };
    }
  }
}
