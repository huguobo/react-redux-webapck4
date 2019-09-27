import { reducerCreator } from '../utils/reducerHelper'

// 存放系统级别公用 状态 ，如 loading，dialog等
const initialState = {
  alert: {},
  dialog: {},
  loading: {}
}

const handles = {
  "UPDATE_FRAME": (state, payload) => {
    return { ...state, ...payload }
  }
}

export default reducerCreator(initialState, handles);