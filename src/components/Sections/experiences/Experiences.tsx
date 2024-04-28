import { SiCss3, SiFigma, SiGit, SiGithub, SiJavascript, SiMysql, SiNodedotjs, SiReact, SiRedux, SiSlack, SiSpring, SiSwagger, SiTypescript } from 'react-icons/si'
import styles from './Experiences.module.css'
import { Card } from '../../Card/Card'
import { MdRocketLaunch } from 'react-icons/md'
import { FaJava } from 'react-icons/fa'
import { PiStudentBold } from 'react-icons/pi'
interface Props {
    language: string,
    isToggled: boolean,
    setToggle: React.Dispatch<React.SetStateAction<boolean>>
}
export const Experiences = ({ isToggled, language }: Props) => {


    return (
        <section id="experiences" className={`${styles.experiences} ${isToggled ? '' : styles.light}`}>
            <div className={styles.content}>
                <span className={`${styles.sectionTitle} ${isToggled ? '' : styles.light}`}>
                    {language === "pt-BR" ? "Experiência Profissional" : " Relevant Professional Experience"}
                </span>
                <span className={styles.subtitle}>
                    {language === "pt-BR" ? "Um breve resumo das experiências profissionais que me ajudaram em minha vida como programador." : "A brief summary of the professional experiences that helped me in my                    life as a programmer."}

                </span>
            </div>
            <div className={styles.cardContainer}>
                <Card
                    icons={[
                        <SiSpring size={20} />,
                        <SiSwagger size={20} />,
                        <SiTypescript size={20} />,
                        <SiReact size={20} />,
                        <SiFigma size={20} />,
                        <SiGit size={20} />,
                        <SiGithub size={20} />,
                    ]}
                    content={
                        language === "pt-BR" ? <>
                            <h3>Competências Técnicas</h3>
                            <ul className={styles.list}>
                                <li>
                                    Desenvolvimento de um ERP Hospitalar com React e Typescript
                                </li>
                                <li>Integração a API’s com SWAGGER</li>
                                <li>
                                    Desenvolvimento de API’s RESTful com Java e Spring Boot
                                    utilizando arquitetura MVC
                                </li>
                                <li>Prototipação com Figma</li>
                                <li>
                                    Líder Técnico no design e estrutura do Front-end no Projeto
                                </li>
                                <li>Métodologias Ágeis (Scrum / KanBan)</li>
                            </ul>
                        </> : <>
                            <h3>Technical Skills</h3>
                            <ul className={styles.list}>
                                <li>
                                    Development of a Hospital ERP with React and Typescript
                                </li>
                                <li>Integration with APIs using SWAGGER</li>
                                <li>
                                    Development of RESTful APIs with Java and Spring Boot,
                                    using MVC architecture
                                </li>
                                <li>Prototyping with Figma</li>
                                <li>
                                    Technical Leadership in Front-end design and structure in the Project
                                </li>
                                <li>Agile Methodologies (Scrum / KanBan)</li>

                            </ul>
                        </>
                    }
                    title={language === "pt-BR" ? "Desenvolvedor Full Stack | Grupo CBCO - Emprego Atual" : "Full Stack Developer | CBCO Group  2023 -  Actual job"}
                />
                <Card
                    icons={[
                        <SiSwagger size={20} />,
                        <SiTypescript size={20} />,
                        <SiReact size={20} />,
                        <SiFigma size={20} />,
                        <SiGit size={20} />,
                        <SiGithub size={20} />,
                        <SiSlack size={20} />,
                    ]}
                    content={
                        language === "pt-BR" ? <>
                            <h3>Competências Técnicas</h3>
                            <ul className={styles.list}>
                                <li>Desenvolvimento de aplicações React com Typescript</li>
                                <li>Gerenciamento de Estados com Context Api</li>
                                <li>Contexto de requisições com React-Query</li>
                                <li>Integração a API’s com SWAGGER</li>
                                <li>Gerenciamento de Histórias do usuário com Jira</li>
                                <li>Métodologias Ágeis (Scrum / KanBan)</li>
                            </ul>
                        </> : <>
                            <h3>Technical Skills</h3>
                            <ul className={styles.list}>
                                <li>Development of React applications with Typescript</li>
                                <li>State Management with Context Api</li>
                                <li>Request Context with React-Query</li>
                                <li>Integration with APIs using SWAGGER</li>
                                <li>Management of User Stories with Jira</li>
                                <li>Agile Methodologies (Scrum / KanBan)</li>
                            </ul>
                        </>
                    }
                    title={language === "pt-BR" ? "Desenvolvedor React | Flowon Lab. - Emprego Remoto Atual" : "React Developer | Flowon Lab. - 2024 -  Actual job"}
                />
            </div>
            <div>
                <div className={styles.titleSkillsContainer}>
                    <MdRocketLaunch size={25} />   <h2>
                        {language === "pt-BR" ? "Linguagens e Hard Skills" : 'Programming Languages / Hard Skills'}</h2>
                </div>
                <div className={styles.cardContainer}>
                    <div className={`${styles.cardSkill} ${isToggled ? '' : styles.light}`}>
                        <p className={`${styles.info} ${isToggled ? '' : styles.light}`}>{language === "en-US" ? "3 years of experience" : '+3 anos de experiência'}</p>

                        <h4 className={styles.titleSkill}>
                            Proficiência Avançada com capacidade de ensinar:
                        </h4>
                        <div className={styles.chipsContainer}>
                            <div className={styles.cardChip}>
                                <SiJavascript size={20} color={"#F0DB4F"} />
                                <span className={styles.chipText}>Javascript</span>
                            </div>
                            <div className={styles.cardChip}>
                                <SiCss3 size={20} color={"#264DE4"} />
                                <span className={styles.chipText}>Css</span>
                            </div>
                            <div className={styles.cardChip}>
                                <SiReact size={20} color={"#61DBFB"} />
                                <span className={styles.chipText}>React</span>
                            </div>
                            <div className={styles.cardChip}>
                                <SiRedux size={20} color={"#764ABC"} />
                                <span className={styles.chipText}>Redux</span>
                            </div>

                            <div className={styles.cardChip}>
                                <SiTypescript size={20} color={"#2F74C0"} />
                                <span className={styles.chipText}>Typescript</span>
                            </div>
                            <div className={styles.cardChip}>
                                <SiGit size={20} color={"#F05032"} />
                                <span className={styles.chipText}>Git</span>
                            </div>
                            <div className={styles.cardChip}>
                                <SiGithub size={20} />
                                <span className={styles.chipText}>Github</span>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.cardSkill} ${isToggled ? '' : styles.light}`}>
                        <p className={`${styles.info} ${isToggled ? '' : styles.light}`}>{language === "en-US" ? "1 year of experience" : '1 ano de experiência'}</p>
                        <h4 className={styles.titleSkill}>
                            Proficiência Média e com interesse de aprendizado:
                        </h4>
                        <div className={styles.chipsContainer}>
                            <div className={styles.cardChip}>
                                <FaJava size={20} color={"#F0931C"} />
                                <span className={styles.chipText}>Java 11
                                </span>
                            </div>
                            <div className={styles.cardChip}>
                                <SiMysql size={20} color={"#4479A1"} />
                                <span className={styles.chipText}>Mysql</span>
                            </div>
                            <div className={styles.cardChip}>
                                <SiSpring size={20} color={"#6DB33F"} />
                                <span className={styles.chipText}>Spring</span>
                            </div>
                            <div className={styles.cardChip}>
                                <SiFigma size={20} color={"#F05032"} />
                                <span className={styles.chipText}>Figma</span>
                            </div>
                            <div className={styles.cardChip}>
                                <SiNodedotjs size={20} color={"#3C873A"} />
                                <span className={styles.chipText}>NodeJS</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div style={{ flexDirection: 'column', justifyContent: "flex-start", alignItems: 'flex-start', gap: '12px' }} className={styles.cardContainer}>
                <div className={styles.titleSkillsContainer}>
                    <PiStudentBold size={25} />   <h2>
                        {language === "en-US" ? 'Education' : 'Formação'}</h2>
                </div>
                <div className={`${styles.cardSkill} ${isToggled ? '' : styles.light}`}>
                    <h4 className={styles.titleSkill}>{language === "en-US" ? "Software Engineering - Instituto Infnet" : 'Engenharia de Sofware - Instituto Infnet'}</h4>
                    <span className={`${styles.info} ${isToggled ? '' : styles.light}`}>{language === "en-US" ? " Start: 2022 End: 2026" : 'Inicio: 2022 Término: 2026'}</span>
                    <p> <b>{language === "en-US" ? " Languages Learned: " : "Linguagens ensinadas até agora (2024):"}</b> {language === "pt-BR" ? "HTML, CSS, Javascript, SQL, Python, C# e asp.net com RazorPages, Java 11 com SpringBoot e SparkJava e Junit" : "HTML, CSS, Javascript, SQL, Python, C# and asp.net with RazorPages, Java 11 with SpringBoot and SparkJava and Junit"}</p>
                    <p> <b>{language === "en-US" ? " Engineering Contents:" : "Conteúdos de Engenharia: "}</b>{language === "pt-BR" ? "Modelagem Relacional, Processamento de Dados, Diagramas de sequência, Estudo de Casos de Uso e Levantamento de Requisitos. " : "Relational Modeling, Data Processing, Sequence Diagrams, Use Case Studies, and Requirements Gathering."}</p>
                </div>
            </div>

        </section>
    )
}
