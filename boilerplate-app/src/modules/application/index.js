// Action Types
export const types = {
  DATA_LOAD: "DATA_LOAD",
  DATA_LOAD_SUCCESS: "DATA_LOAD_SUCCESS",
};

// Action creators
const loadData = () => ({
  type: types.DATA_LOAD,
});

const loadDataSuccess = (payload) => ({
  type: types.DATA_LOAD_SUCCESS,
  payload,
});

export const actions = {
  loadData,
  loadDataSuccess,
};

export const initialState = {
  loaded: false,
  data: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.DATA_LOAD_SUCCESS:
      return {
        ...state,
        loaded: true,
        data: {
          ...action.payload,
        },
      };
    default:
      return state;
  }
};

export default reducer;
