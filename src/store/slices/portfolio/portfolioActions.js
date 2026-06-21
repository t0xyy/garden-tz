import { apiRequest } from '../../../api/http.js'
import { endpoints } from '../../../api/endpoints.js'
import { PORTFOLIO_FAILURE, PORTFOLIO_REQUEST, PORTFOLIO_SET_FILTER, PORTFOLIO_SUCCESS } from './portfolioTypes.js'

export const setPortfolioFilter = (filter) => ({ type: PORTFOLIO_SET_FILTER, payload: filter })

export const fetchPortfolio = () => async (dispatch) => {
  dispatch({ type: PORTFOLIO_REQUEST })
  try {
    const data = await apiRequest(endpoints.portfolio)
    dispatch({ type: PORTFOLIO_SUCCESS, payload: Array.isArray(data) ? data : (data?.items || []) })
  } catch (err) {
    const demo = [
      { id: 1, title: 'Косметика', type: 'products', before: '/images/before1.svg', after: '/images/after1.svg', thumb: '/images/thumb1.svg' },
      { id: 2, title: 'Одежда', type: 'clothes', before: '/images/before2.svg', after: '/images/after2.svg', thumb: '/images/thumb2.svg' },
      { id: 3, title: 'Предметка', type: 'still', before: '/images/before3.svg', after: '/images/after3.svg', thumb: '/images/thumb3.svg' },
      { id: 4, title: '360°', type: '360', before: '/images/before4.svg', after: '/images/after4.svg', thumb: '/images/thumb4.svg' },
      { id: 5, title: 'Видео-клип', type: 'video', before: '/images/before5.svg', after: '/images/after5.svg', thumb: '/images/thumb5.svg' },
    ]
    dispatch({ type: PORTFOLIO_FAILURE, payload: err.message || 'Ошибка загрузки портфолио' })
    dispatch({ type: PORTFOLIO_SUCCESS, payload: demo })
  }
}
