import {
  SUBMITTED,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  SELECT_OPEN,
  SELECT_CLOSE,
  MRP_NAME_UPDATE,
  MRP_DATE_UPDATE,
  IVL_KEY_UPDATE,
  IVL_YEAR_UPDATE,
  STAR_NAME_UPDATE,
  FINAL_QUERY,
  SHOW_RESULT,
  ERROR
} from "../actions/formActions/action_types";

const initialState = {
  default: false,
  isLoading: false,
  isSuccess: false,
  isFailure: false,
  dialog_open: false,
  showResult: false,
  receivedInfo: {},
  finalQuery: "",
  sdss: "",
  error: false,
  mrpForm: {
    name: "",
    date: ""
  },
  ivlForm: {
    keyword: "",
    year: ""
  },
  starForm: {
    starName: ""
  }
};

function FormReducer(state = initialState, action) {
  switch (action.type) {
    case SUBMITTED:
      return Object.assign({}, state, {
        isSubmitted: action.payload
      });
    case FETCH_SUCCESS:
      return Object.assign({}, state, {
        isSuccess: action.payload
      });
    case FETCH_FAILURE:
      return Object.assign({}, state, {
        isFailure: action.payload
      });
    case SELECT_OPEN: {
      const newState = Object.assign({}, state);
      newState.dialog_open = action.payload;
      return newState;
    }
    case SELECT_CLOSE: {
      const newState = Object.assign({}, state);
      newState.dialog_open = action.payload;
      return newState;
    }
    case MRP_NAME_UPDATE: {
      const newState = Object.assign({}, state);
      newState.mrpForm.name = action.payload;
      return newState;
    }
    case MRP_DATE_UPDATE: {
      const newState = Object.assign({}, state);
      newState.mrpForm.date = action.payload;
      return newState;
    }
    case IVL_KEY_UPDATE: {
      const newState = Object.assign({}, state);
      newState.ivlForm.keyword = action.payload;
      return newState;
    }
    case IVL_YEAR_UPDATE: {
      const newState = Object.assign({}, state);
      newState.ivlForm.year = action.payload;
      return newState;
    }
    case STAR_NAME_UPDATE: {
      const newState = Object.assign({}, state);
      newState.starForm.starName = action.payload;
      return newState;
    }
    case FINAL_QUERY:
      return Object.assign({}, state, {
        showResult: action.payload,
        finalQuery: action.finalUrl
      });
    case SHOW_RESULT:
      return Object.assign({}, state, {
        showResult: action.payload,
        receivedInfo: action.receivedInfo
      });
    case ERROR:
      return Object.assign({}, state, {
        error: action.payload
      });
    default:
      return state;
  }
}

export default FormReducer;
