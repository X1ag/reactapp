import styles from './Editor.module.scss'
import { Eraser, Bold, Italic, Underline } from 'lucide-react'
import { useState, useRef } from 'react'
import { applyFormat } from './email-format'
import parse from 'html-react-parser'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { emailService } from '../../services/email.service'
import {useEditor} from './useEditor'


export function Editor() {
	const {text,setText,updateSelection,getSelectedText, textRef} = useEditor()

	const queryClient = useQueryClient()

	const { mutate, isPending } = useMutation({
		mutationKey: ['create email'],
		mutationFn: () => emailService.sendEmail(text),
		onSuccess() {
			setText('') 
			queryClient.refetchQueries({queryKey:['email list'] })
		},
	})
	return (
		<div>
			<h1>Email Editor</h1>
			{text && <div>{parse(text)}</div>}
			<div className={styles.card}>
				<textarea
					ref={textRef}
					onSelect={updateSelection}
					className={styles.editor}
					spellCheck='false'
					value={text}
					onChange={e => setText(e.target.value)}
				/>
				<div className={styles.actions}>
					<div className={styles.tools}>
						<button onClick={() => setText('')}>
							<Eraser size={17} />
						</button>
						<button onClick={() => getSelectedText('bold')}>
							<Bold size={17} />
						</button>
						<button onClick={() => getSelectedText('italic')}>
							<Italic size={17} />
						</button>
						<button onClick={() => getSelectedText('underline')}>
							<Underline size={17} />
						</button>
					</div>
					<button disabled={isPending} onClick={() => mutate()}>
						Send now
					</button>
				</div>
			</div>
		</div>
	)
}
