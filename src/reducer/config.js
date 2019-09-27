import { reducerCreator } from '../utils/reducerHelper'

const initialState = {
  siteName: 'demo',
  siteKey: '',
}

const handles = {
  "UPDATE_CONFIG": (state, payload) => {
    return { ...state, ...payload }
  }
}

export default reducerCreator(initialState, handles);