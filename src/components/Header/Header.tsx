import styles from './Header.module.css'
export const Header = () => {
    return (
        <div className={styles.header}>
            <nav>
                <ul>
                    <li>
                        <a href="#home">PROJECTS</a>
                    </li>
                    <li>
                        <a href="#about"><img src='/minimalLogoWhite.svg' className={styles.logo}></img></a>
                    </li>
                    <li>
                        <a href="#projects">CONTACTS</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
