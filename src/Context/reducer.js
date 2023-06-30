import { SHOW_COMPONENT, SET_SEARCH_FORM } from './actionTypes';

function reducer(state, action) {
  switch (action.type) {
    case SHOW_COMPONENT: {
      return {
        ...state,
        showComponentHandler: {
          ...state.showComponentHandler,
          [action.payload.componentName]: action.payload.showing,
        },
      };
    }
    case SET_SEARCH_FORM: {
      return {
        ...state,
        searchForm: {
          ...state.searchForm,
          [action.payload.fieldName]: action.payload.newField,
        },
      };
    }
    default: {
      return state;
    }
  }
}

export default reducer;
