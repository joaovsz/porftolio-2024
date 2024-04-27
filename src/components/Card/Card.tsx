import { BsFillBuildingsFill } from 'react-icons/bs'
import styles from './Card.module.css'
interface Props {
    content: string | JSX.Element
    title: string
}
export const Card = ({ content, title }: Props) => {
    return (
        <div className={styles.card}>
            <span className={styles.title}> <BsFillBuildingsFill size={20} />
                {title}

            </span>
            <p className={styles.description}>
                {content}


            </p>
        </div>
    )
}
