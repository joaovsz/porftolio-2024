import { BsFillBuildingsFill } from 'react-icons/bs'
import styles from './Card.module.css'
interface Props {
    content: string | JSX.Element
    title: string
    icons?: JSX.Element[]
}
export const Card = ({ content, title, icons }: Props) => {
    return (
        <div className={styles.card}>
            <span className={styles.title}> <BsFillBuildingsFill size={20} />
                {title}

            </span>
            <p className={styles.description}>
                {content}
            </p>
            <span className={styles.icons}>{icons}</span>
        </div>
    )
}
