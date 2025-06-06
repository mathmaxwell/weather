import { create } from 'zustand'
export const language = create(set => ({
	lang: 'uz',
	handleLang: () => set(state => ({ lang: state.lang === 'uz' ? 'ru' : 'uz' })),
}))
export const ru = {
	tashkent: 'Ташкент',
	city: 'город',
	sunday: 'воскресенье',
	monday: 'понедельник',
	tuesday: 'вторник',
	wednesday: 'среда',
	thursday: 'четверг',
	friday: 'пятница',
	saturday: 'суббота',

	morning: 'утро',
	afternoon: 'день',
	evening: 'вечер',
	night: 'ночь',

	search: 'искать',
	close: 'закрыть',
	weatherDetails: 'подробности',
	name: 'Город',
	weather: 'Погода',
	timezone: 'Часовой пояс',
	temp: 'Температура',
	speed: 'скорость ветер',
	startSearch: 'начать поиск',
	days: [
		'воскресенье',
		'понедельник',
		'вторник',
		'среда',
		'четверг',
		'пятница',
		'суббота',
	],
	months: [
		'январь',
		'февраль',
		'март',
		'апрель',
		'май',
		'июнь',
		'июль',
		'август',
		'сентябрь',
		'октябрь',
		'ноябрь',
		'декабрь',
	],
}
export const uz = {
	tashkent: 'Toshkent',
	city: 'shaxar',
	sunday: 'yakshanba',
	monday: 'dushanba',
	tuesday: 'seshanba',
	wednesday: 'chorshanba',
	thursday: 'payshanba',
	friday: 'juma',
	saturday: 'shanba',

	morning: 'ertalab',
	afternoon: 'kunduzgi',
	evening: 'kechqurun',
	night: 'tun',

	search: 'qidirish',
	close: 'yopish',
	name: 'Shahar',
	weather: 'Ob-havo',
	timezone: 'Vaqt zonasi',
	temp: 'Harorat',
	speed: 'shamol tezligi',
	weatherDetails: 'malumotlar',
	startSearch: 'qidirishni boshlash',
	days: [
		'yakshanba',
		'dushanba',
		'seshanba',
		'chorshanba',
		'payshanba',
		'juma',
		'shanba',
	],
	months: [
		'yanvar',
		'fevral',
		'mart',
		'aprel',
		'may',
		'iyun',
		'iyul',
		'avgust',
		'sentyabr',
		'oktyabr',
		'noyabr',
		'dekabr',
	],
}
