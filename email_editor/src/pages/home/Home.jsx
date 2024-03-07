import { EmailList } from '../../components/Email-list/EmailList'
import { Editor } from '../../components/EmailEditor/Editor'
import styles from './Home.module.scss'
export function Home() {
	return (
		<div className={styles.container}>
			<Editor />
			<EmailList />
		</div>
	)
}
