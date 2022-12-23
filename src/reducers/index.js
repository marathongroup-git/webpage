import { combineReducers } from 'redux'
import reducersHome from '../pages/Home/reducers'
import reducerJobs from '../pages/JobPool/reducers'
import reducerPromotions from '../pages/Promotions/reducers'
import reducerTests from '../pages/Tests/reducers'
import reducerWiki from '../pages/Wiki/reducers'
import reducerShop from '../pages/Shop/reducers'
import reducersApp from './reducers'

const reducer = combineReducers({
  reducersHome,
  reducersApp,
  reducerJobs,
  reducerPromotions,
  reducerTests,
  reducerWiki,
  reducerShop
})

export default reducer
