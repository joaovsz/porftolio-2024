
import { IoPerson } from 'react-icons/io5'
import styles from './App.module.css'
import { Header } from './components/Header/Header'
import { Card } from './components/Card/Card'

function App() {

  return (
    <>
      <section id='home' className={styles.first}>
        <Header />
        <span className={styles.title}>
          WELCOME, MY NAME IS
          JOÃO VITOR AND I’M A FULL
          STACK DEVELOPER
        </span>
        <span className={styles.info}>
          <IoPerson size={20} />
          <p className={styles.infocontent}>
            Here you will see a little more about my
            <b >      professional</b> and <b>academic</b> life in the
            world of technology!
          </p>
        </span>
      </section>
      <section id="experiences" className={styles.experiences}>
        <div className={styles.experiencesContent}>
          <span className={styles.experiencesTitle}>Relevant Professional Experiences</span>
          <span className={styles.experiencesSubtitle}>A brief summary of the professional experiences
            that helped me in my life as a programmer.</span>
        </div>
        <div className={styles.cardContainer}>
          <Card content={<ul className={styles.list}>
            <li>Desenvolvimento de um ERP Hospitalar com React e Typescript</li>
            <li>Integração a API’s com SWAGGER</li>
            <li>Desenvolvimento de API’s RESTful com Java e Spring Boot utilizando arquitetura MVC</li>
            <li>Prototipação com Figma</li>
            <li>Líder Técnico no design e estrutura do Front-end no Projeto</li>
            <li>Métodologias Ágeis (Scrum / KanBan)</li>
          </ul>} title={'Full Stack Developer | CBCO Group  2023 -  Actual job'} />
          <Card content={'Encarregado de elaborar e transpor os protótipos do Figma para o frontend das aplicações propostas utilizando React.js, além de integrá-los com APIs REST desenvolvidas em Spring Boot.'}
            title={'Flowon Lab. de Gamificação'} /></div>
      </section>
    </>
  )
}

export default App
