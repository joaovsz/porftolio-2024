import { SiCss3, SiFigma, SiGit, SiGithub, SiJavascript, SiMysql, SiNodedotjs, SiReact, SiRedux, SiSlack, SiSpring, SiSwagger, SiTypescript } from 'react-icons/si'
import styles from './Experiences.module.css'
import { Card } from '../../Card/Card'
import { MdRocketLaunch } from 'react-icons/md'
import { FaJava } from 'react-icons/fa'
import { PiStudentBold } from 'react-icons/pi'
export const Experiences = () => {
    return (
        <section id="experiences" className={styles.experiences}>
            <div className={styles.content}>
                <span className={styles.sectionTitle}>
                    Relevant Professional Experiences
                </span>
                <span className={styles.subtitle}>
                    A brief summary of the professional experiences that helped me in my
                    life as a programmer.
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
                        <>
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
                        </>
                    }
                    title={"Full Stack Developer | CBCO Group  2023 -  Actual job"}
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
                        <>
                            <h3>Competências Técnicas</h3>
                            <ul className={styles.list}>
                                <li>Desenvolvimento de aplicações React com Typescript</li>
                                <li>Gerenciamento de Estados com Context Api</li>
                                <li>Contexto de requisições com React-Query</li>
                                <li>Integração a API’s com SWAGGER</li>
                                <li>Gerenciamento de Histórias do usuário com Jira</li>
                                <li>Métodologias Ágeis (Scrum / KanBan)</li>
                            </ul>
                        </>
                    }
                    title={"React Developer | Flowon Lab. - 2024 -  Actual job"}
                />
            </div>
            <div>
                <div className={styles.titleSkillsContainer}>
                    <MdRocketLaunch size={25} />   <h2>
                        Programming Languages / Hard Skills</h2>
                </div>
                <div className={styles.cardContainer}>
                    <div className={styles.cardSkill}>
                        <p className={styles.info}>+3 anos de experiência</p>

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
                    <div className={styles.cardSkill}>
                        <p className={styles.info}>+1 ano de experiência</p>
                        <h4 className={styles.titleSkill}>
                            Proficiência Média e com interesse de aprendizado:
                        </h4>
                        <div className={styles.chipsContainer}>
                            <div className={styles.cardChip}>
                                <FaJava size={20} color={"#F0931C"} />
                                <span className={styles.chipText}>Java 11</span>
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
                        Education</h2>
                </div>
                <div className={styles.cardSkill}>
                    <h4 className={styles.titleSkill}>Engenharia de Sofware - Instituto Infnet</h4>
                    <span className={styles.info}>Inicio: 2022 Término: 2026</span>
                    <p> <b>Linguagens ensinadas até agora (2024):</b> HTML, CSS, Javascript, SQL, Python, C# e asp.net com RazorPages, Java 11 com SpringBoot e SparkJava e Junit </p>
                    <p> <b>Conteúdos de Engenharia: </b>Modelagem Relacional, Processamento de Dados, Diagramas de sequência, Estudo de Casos de Uso e Levantamento de Requisitos. </p>
                </div>
            </div>

        </section>
    )
}
