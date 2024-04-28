import { useEffect, useState } from 'react';
import ProjectArticle from '../../components/projectArticle.tsx/ProjectArticle';
import Skill from '../../components/skill/Skill';
import Input from '../../components/input/Input';
import './home.scss';
import { Link } from 'react-router-dom';
import { request } from '../../utils/request';
import { API_Project } from '../../utils/interface';

const SKILLS = [
    {
        url: '/ress/icons/html5.svg',
        alt: 'html',
    },
    {
        url: '/ress/icons/css3.svg',
        alt: 'css',
    },
    {
        url: '/ress/icons/javascript.svg',
        alt: 'javascript',
    },
    {
        url: '/ress/icons/react.svg',
        alt: 'react',
    },
    {
        url: '/ress/icons/sass.svg',
        alt: 'sass',
    },
    {
        url: '/ress/icons/nodejs.svg',
        alt: 'nodejs',
    },
    {
        url: '/ress/icons/typescript.svg',
        alt: 'typescript',
    },
    {
        url: '/ress/icons/git.svg',
        alt: 'git',
    },
    {
        url: '/ress/icons/mongodb.svg',
        alt: 'mongodb',
    },
    {
        url: '/ress/icons/mariadb.svg',
        alt: 'mariadb',
    },
    {
        url: '/ress/icons/docker.svg',
        alt: 'docker',
    },
];


export default function Home() {
    const [projects, setProjects] = useState<API_Project[]>([]);

    useEffect(() => {
        request('/projects')
        .then((projects : API_Project[]) => setProjects(projects))
        .catch(() => {});
    }, []);

    const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return <>
        <main>

            <section id='home'>
                <img src='/ress/images/nature.jpg' alt=''/>

                <h1>Arnaud B</h1>
                <h2>Développeur Web</h2>
                {/* <h2>Développeur Web</h2> */}
            </section>

            <section id='about'>
                <h3>&Agrave; Propos</h3>
                
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin leo justo, facilisis in diam sed, blandit pharetra massa. Morbi tempor tortor non risus rhoncus efficitur. Morbi eget ipsum sit amet magna molestie elementum at pellentesque lectus. Suspendisse aliquam, dolor vehicula fringilla dictum, tellus mi posuere est, nec maximus tellus nisl.
                </p>

                <div className='links'>
                    <Link to='https://github.com/Arnaud-B-OC/' target='_blank'><img src='/ress/icons/github.svg' alt='github'/></Link>
                    <Link to='https://linkedin.com/in//' target='_blank'><img src='/ress/icons/linkedin.svg' alt='linkedin'/></Link>
                </div>

                {/* TODO : Request */}

                <article id='skills'>
                    <h4>Compétences</h4>

                    {SKILLS.map((skill, index) => <Skill key={index} {...skill}/>)}
                </article>
            </section>

            <section id='projects'>
                <h3>Mes Projets</h3>

                {/* TODO : Request */}
                <div>
                    {projects.map((project, index) => <ProjectArticle key={index} {...project}/>)}
                </div>
            </section>

            <section id='contact'>
                <h3>Me contacter</h3>

                <form onSubmit={sendMessage}>
                    <Input placeholder='Nom :'/>
                    <Input placeholder='Email :' type='mail'/>
                    <Input placeholder='Message :' textArea/>

                    <button>Envoyer</button>
                </form>
            </section>
        </main>
    </>
}
