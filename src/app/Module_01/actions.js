
import { fetchData as fetchDataAPI } from './api';
import { TYPE_FETCH_DATA } from './types';

export const fetchData = () => async dispatch => {
  const data = await fetchDataAPI();
  dispatch({
    type: TYPE_FETCH_DATA,
    payload: data
  });
}