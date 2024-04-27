import styles from './Header.module.css'
export const Header = (props: { language: string }) => {
    return (
        <div className={styles.header}>
            <nav>
                <ul>
                    <li>
                        <a href="#projects">{props.language === "pt-BR" ? "PROJETOS" : "PROJECTS"}</a>
                    </li>
                    <li>
                        <a href="#home"><img src='/minimalLogoWhite.svg' className={styles.logo}></img></a>
                    </li>
                    <li>
                        <a href="#experiences">{props.language === "pt-BR" ? "EXPERIÊNCIAS" : "EXPERIENCES"}</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
