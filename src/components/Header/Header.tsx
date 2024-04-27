import styles from './Header.module.css'
export const Header = () => {
    return (
        <div className={styles.header}>
            <nav>
                <ul>
                    <li>
                        <a href="#projects">PROJECTS</a>
                    </li>
                    <li>
                        <a href="#home"><img src='/minimalLogoWhite.svg' className={styles.logo}></img></a>
                    </li>
                    <li>
                        <a href="#contacts">CONTACTS</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
