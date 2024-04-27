import { IoPerson } from "react-icons/io5";
import styles from "./App.module.css";
import { Header } from "./components/Header/Header";
import { Swiper, SwiperSlide } from 'swiper/react';
import quizNext from "/home/joaovsz/Documentos/porftolio-2024/src/assets/projects/quizNext.png";
import cartApp from "/home/joaovsz/Documentos/porftolio-2024/src/assets/projects/cartApp.png";
import counterCalls from "/home/joaovsz/Documentos/porftolio-2024/src/assets/projects/counterCalls.png";
import devFinance from "/home/joaovsz/Documentos/porftolio-2024/src/assets/projects/devFinance.png";
import geraFilmes from "/home/joaovsz/Documentos/porftolio-2024/src/assets/projects/geraFilmes.png";
import simuladorDeRenda from "/home/joaovsz/Documentos/porftolio-2024/src/assets/projects/simuladorDeRenda.png";
import github from "/home/joaovsz/Documentos/porftolio-2024/src/assets/projects/github.png";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import { Autoplay, EffectCards } from "swiper/modules";
import { useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import { Experiences } from "./components/Sections/experiences/Experiences";
import { MdTranslate } from "react-icons/md";
interface Project {
  index: number;
  path: string;
  title: string;
  description: string;
  link: string
}
function App() {
  const [activatedIndex, setActiveIndex] = useState(0)
  const [language, setLanguage] = useState("pt-BR")
  const projects: Project[] = [{
    index: 0,
    path: quizNext,
    title: "Jogo de Perguntas e Respostas",
    description: "Aplicação desenvolvida com NextJs e Typescript com intuito de prover uma experiência simples de Quiz de perguntas e respostas no estilo 'Show do Milhão'.",
    link: "https://quiz-next-lac.vercel.app/"
  },
  {
    index: 1,
    path: cartApp,
    title: "Carrinho de Compras E-commerce",
    description: "O Cart-App é uma aplicação desenvolvida com React com intuito de fazer uma pequena demonstração de como seria a interação de um usuário dentro de um site de compras ao adicionar os produtos escolhidos em um carrinho.",
    link: "https://cartapp-shoes.netlify.app/"
  },
  {
    index: 2,
    path: counterCalls,
    title: "Contador de Chamadas | Tahto / Oi Tv Atendimento",
    description: "O callRegister é uma ferramenta de trabalho (pública) para auxiliar no controle diário de ligações recebidas pelos agentes de atendimento da equipe de Retenção do serviço de Oi Tv prestado pela empresa especializada em atendimento Tahto - Site Goiânia. ",
    link: "https://callregister.netlify.app/"
  },
  {
    index: 3,
    path: devFinance,
    title: "Controle de Finanças",
    description: "O devFinances tem o objetivo de fazer cálculos monetários de uma forma intuitiva para ajudar o usuário a ter um controle de entradas e saídas em um período de tempo em que ele define. Desenvolvido com React + Typescript e o gerenciador de estado Redux",
    link: "https://devfinances-jvsz.netlify.app/"
  },
  {
    index: 4,
    path: geraFilmes,
    title: "Gerador de Filmes",
    description: "O movieFinder foi desenvolvido com intuito de ajudar o usuário que tem dificuldade em escolher um filme por conta própria, sendo assim, o movieFinder resolve este problema com um simples click! Ao clicar em 'Encontrar Filme', o aplicativo faz uma busca no banco de dados 'MovieDB' por meio de uma API pública para selecionar os melhores filmes para você.",
    link: "https://finder-movi.netlify.app/"
  },
  {
    index: 5,
    path: simuladorDeRenda,
    title: "Simulador de Renda - Tahto / Oi Tv Atendimento",
    description: "O Simulador de renda é uma plataforma para facilitar o cálculo da quantia de comissão ganha dos agentes da equipe de Retenção do serviço de Oi Tv, com base nos indicadores  de resultado de cada colaborador. Projeto independente e público para a empresa especializada em atendimento Tahto - Site Goiânia.",
    link: "https://simuladorrv.netlify.app/"
  },
  {
    index: 6,
    path: github,
    title: "Github - Busca usuários",
    description: "O gitFinder é uma aplicação com objetivo de encontrar usuários da plataforma GitHub por meio do consumo da API disponibilizada pela plataforma de repositórios, mostrando as informações básicas do perfil pesquisado.",
    link: "https://joaovsz.github.io/gitFinder/"
  }

  ]


  return (
    <>
      <section id="home" className={styles.first}>
        <MdTranslate size={40} style={{ position: "absolute", right: "2rem", top: "2rem", cursor: "pointer" }} />

        <Header />
        <span className={styles.title}>
          WELCOME, MY NAME IS JOÃO VITOR AND I’M A FULL STACK DEVELOPER
        </span>
        <span className={styles.info}>
          <IoPerson size={20} />
          <p className={styles.infocontent}>
            Here you will see a little more about my
            <b> professional</b> and <b>academic</b> life in the world of
            technology!
          </p>
        </span>
      </section>
      <Experiences />
      <section id="projects" className={styles.projects}>
        <div className={styles.content}>
          <span className={styles.flexRow}>
            <span className={styles.sectionTitle}>
              PROJECTS
            </span>
            <span className={styles.subtitle}>
              Explore my featured projects in this section.
            </span>
          </span>

          <div className={styles.container}>

            <div className={styles.projectInfo}>
              <span className={styles.projectTitle}>
                {projects[activatedIndex].title}
              </span>
              <span className={styles.projectDescription}>
                {projects[activatedIndex].description}
              </span>
              <span className={styles.link}>
                <a target="_blank" href={projects[activatedIndex].link}>Acessar Projeto <FiExternalLink size={20} /></a>
              </span>
            </div>
            <Swiper
              effect={'cards'}
              autoplay={{
                delay: 3000,
                disableOnInteraction: true,
              }}
              modules={[EffectCards, Autoplay]}
              onTransitionEnd={(e) => {
                setActiveIndex(e.activeIndex);
              }}
              grabCursor={false}
              className={styles.swiper}
            >
              {projects.map((project) => (
                <SwiperSlide itemID={project.title} key={project.index}>
                  <img src={project.path} width={800} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
