export const selectPortfolioState = (state) => state.portfolio
export const selectPortfolioFilter = (state) => state.portfolio.filter

export const selectFilteredPortfolio = (state) => {
  const { items, filter } = state.portfolio
  if (filter === 'all') return items
  return items.filter((x) => x.type === filter)
}
