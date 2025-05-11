import React from 'react'
import { useState, useEffect } from 'react'
import { language, uz, ru } from '../lang/lang.js'
import selectTheme from '../theme/themeStore.js'
import { useForm } from 'react-hook-form'
import axios from 'axios'

const Component = () => {
	const [time, setTime] = useState(new Date())
	const [hour, setHour] = useState(time.getHours().toString().padStart(2, '0'))
	const [minute, setMinute] = useState(
		time.getMinutes().toString().padStart(2, '0')
	)
	const day = time.getDate()
	const dayIndex = time.getDay()
	const month = time.getMonth()
	const year = time.getFullYear()
	useEffect(() => {
		const timer = setInterval(() => {
			setTime(new Date())
			setHour(time.getHours().toString().padStart(2, '0'))
			setMinute(time.getMinutes().toString().padStart(2, '0'))
		}, 60000)
		return () => {
			clearInterval(timer)
		}
	}, [time])

	const { theme, handleTheme } = selectTheme()
	const { lang, handleLang } = language()
	const { register, handleSubmit } = useForm()
	const [hiddenSearch, setHiddenSearch] = useState(true)
	const [object, setObject] = useState(undefined)
	const objLang = lang === 'uz' ? uz : ru
	const onSubmit = data => {
		axios
			.get(
				`https://api.openweathermap.org/data/2.5/weather?q=${data.city}&appid=be13e54fdbc2b8ebded41bf031fd8860&units=metric&lang=ru`
			)
			.then(resolve => {
				console.log(resolve.data.name) //"Ташкент"
				console.log(resolve.data.weather[0].main) //"Clouds"
				console.log(resolve.data.timezone) //18000
				console.log(resolve.data.main.temp) //18.79
				console.log(resolve.data.wind.speed) //5.55
				setObject(resolve)
			})
			.catch(error => console.log(error))
	}

	return (
		<section className={`component ${theme}-img ${hiddenSearch ? 'pure' : ''}`}>
			<div className='container'>
				<div className='choose'>
					<img onClick={handleLang} src={`src/assets/${lang}.png`} />
					<img onClick={handleTheme} src={`src/assets/${theme}.svg`} />
				</div>
				<div className='bottom'>
					<div className={`info `}>
						<p className={`${theme}`}>{hour}</p>
						<div className='city'>
							<p className={`${theme}`}>{objLang.tashkent}</p>
							<div className='time'>
								<p className={`${theme}`}>
									:{minute}_{objLang.days[dayIndex]}_{day}-
									{objLang.months[month]}_{year}
								</p>
							</div>
						</div>
						<img
							src={`src/assets/${hour > 6 && hour < 18 ? 'sun' : 'moon'}.svg`}
						/>
					</div>
					<button
						className={`openSearch ${theme} ${hiddenSearch ? '' : 'hidden'}`}
						onClick={() => setHiddenSearch(prev => !prev)}
					>
						{objLang.startSearch}
					</button>
				</div>
			</div>
			<div className={`data ${hiddenSearch ? 'hidden' : ''}`}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<input
						className={`${theme}`}
						type='text'
						placeholder={`${objLang.search}`}
						{...register('city')}
					/>
					<button type='submit'>
						<img src='src/assets/search.svg' />
					</button>
				</form>
				<h3 className={`${theme}`}>
					{objLang.city}: {object == undefined ? '' : `${object.data.name}`}
				</h3>
				<ul>
					<li className={`${theme}`}>
						{objLang.weather}:
						{object == undefined ? '' : ` ${object.data.weather[0].main}`}
					</li>
					<li className={`${theme}`}>
						{objLang.timezone}:
						{object == undefined ? '' : ` ${object.data.timezone / 3600}`}
					</li>
					<li className={`${theme}`}>
						{objLang.temp}:
						{object == undefined ? '' : ` ${object.data.main.temp}  *C`}
					</li>
					<li className={`${theme}`}>
						{objLang.speed}:
						{object == undefined ? '' : ` ${object.data.wind.speed} m/s`}
					</li>
				</ul>
				<button onClick={() => setHiddenSearch(true)}>{objLang.close}</button>
			</div>
		</section>
	)
}

export default Component
