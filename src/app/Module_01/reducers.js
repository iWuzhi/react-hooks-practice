
import { TYPE_FETCH_DATA } from './types';

/* store 定义 */
export const initData = {
  data: Date.now()
};

/* reducer 定义 */
export default (state, action) => {
  let updateData = {};
  switch(action.type) {
    case TYPE_FETCH_DATA:
      updateData.data = action.payload;
      break;
  }
  return {
    ...state,
    ...updateData
  }
}