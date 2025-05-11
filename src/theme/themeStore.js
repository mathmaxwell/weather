import { create } from 'zustand'
const selectTheme = create(set => ({
	theme: 'sun',
	handleTheme: () =>
		set(state => ({
			theme:
				state.theme === 'sun'
					? 'moon'
					: state.theme === 'moon'
					? 'rain'
					: 'sun',
		})),
}))
export default selectTheme
