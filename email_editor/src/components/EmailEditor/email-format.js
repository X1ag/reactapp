export const applyFormat = (type, selectedText) => {
	let formattedText = selectedText
	switch (type) {
		case 'bold':
			formattedText = '<strong>' + selectedText + '</strong>'
			break
		case 'italic':
			formattedText = '<i>' + selectedText + '</i>'
			break
		case 'underline':
			formattedText = '<u>' + selectedText + '</u>'
			break
		default:
			formattedText = selectedText
	}
	return formattedText
}
