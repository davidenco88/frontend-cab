import {
  SHOW_COMPONENT, SET_SEARCH_FORM, SET_TRIP, SET_CONTEXT_OBJECT, SET_LOADING,
} from './actionTypes';

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
    case SET_TRIP: {
      return {
        ...state,
        trip: {
          ...state.trip,
          ...action.payload,
        },
      };
    }
    case SET_CONTEXT_OBJECT: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case SET_LOADING: {
      return {
        ...state,
        showComponentHandler: {
          ...state.showComponentHandler,
          ...action.payload,
        },
      };
    }
    default: {
      return state;
    }
  }
}

export default reducer;
