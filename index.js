module.exports = function(glob = 't') {
	let lang = 'en_EN'
	const translations = {}

	const translateFunction = (arr, ...args) => {
		const str = arr.map((part, index) => part + (index < args.length ? args[index] : '')).join('')
		if (!translations[lang]) return str
		return translations[lang][str] || str
	}

	global[glob] = (key) => key

	return {
		loadTranslations : (lang, trans) => {
			translations[lang] = translations[lang] ? [...trans] : trans
			global[glob] = translateFunction
		},
		setLanguage      : (l) => {
			lang = l
		}
	}
}
