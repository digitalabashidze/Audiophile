export const formatCurrency = (value: number) => {
	const formatted = new Intl.NumberFormat('en', {
		style: 'currency',
		currency: 'USD',
		minimumFractionDigits: 0,
		maximumFractionDigits: 2,
	}).format(value)

	return formatted.replace(/\.00$/, '')
}
