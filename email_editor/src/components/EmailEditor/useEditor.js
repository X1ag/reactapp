import {useState, useRef} from 'react'
import { applyFormat } from './email-format'
export function useEditor(){
	const [text, setText] = useState(`Enter the text...`)
	const [selectionStart, getSelectedStart] = useState(0)
	const [selectionEnd, getSelectedEnd] = useState(0)
	const textRef = useRef(null)

	const updateSelection = () => {
		if (!textRef.current) return
		getSelectedStart(textRef.current?.selectionStart)
		getSelectedEnd(textRef.current?.selectionEnd)
	}

	const getSelectedText = type => {
		const selectedText = text.substring(selectionStart, selectionEnd)
		if (!selectedText) return

		const before = text.substring(0, selectionStart)
		const after = text.substring(selectionEnd)
		setText(before + applyFormat(type, selectedText) + after)
	}

	return {text,setText,updateSelection,getSelectedText,textRef}
}