import { createReducer } from '../../utils/reducers.utils';
import { SET_LOADING, SET_ALBUM } from './types';

const INIT_STATE = {
  data: {
    tracks: [],
    images: [
      {
        width: 'auto',
        height: 'auto',
        url: '',
      },
    ],
  },
  loading: false,
};

const albumHandler = {
  [SET_ALBUM](state, payload) {
    return {
      ...state,
      data: payload,
    };
  },
  [SET_LOADING](state, payload) {
    return {
      ...state,
      loading: payload,
    };
  },
  default(state) {
    return state;
  },
};

export default createReducer(INIT_STATE, albumHandler);