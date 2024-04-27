import { useEffect, useState } from 'react';
import ProjectArticle from '../../components/projectArticle.tsx/ProjectArticle';
import Skill from '../../components/skill/Skill';
import Input from '../../components/input/Input';
import './home.scss';
import { Link } from 'react-router-dom';

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
        url: '/ress/icons/docker.svg',
        alt: 'docker',
    },
];

const PROJECTS = [
    {
        title: 'Booki',
        link: '/project/booki',
        preview: '/ress/images/projects/booki.jpg',
    },
    {
        title: 'Sophie Bluel',
        link: '/project/bluel',
        preview: '/ress/images/projects/bluel.jpg',
    },
    {
        title: 'Nina Carducci',
        link: '/project/nina-carducci',
        preview: '/ress/images/projects/nina.jpg',
    },
    {
        title: 'Kasa',
        link: '/project/kasa',
        preview: '/ress/images/projects/kasa.jpg',
    },
    {
        title: 'Mon Vieux Grimoire',
        link: '/project/mon-vieux-grimoire',
        preview: '/ress/images/projects/mvg.jpg',
    },
]

export default function Home() {

    const [skills, setSkills] = useState<{url:string, alt: string}[]>([]);

    useEffect(() => {
        setSkills(SKILLS)
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
                <a href='#about' className='btn'>&Agrave; propos</a>
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

                    {skills.map((skill, index) => <Skill key={index} {...skill}/>)}
                </article>
            </section>

            <section id='projects'>
                <h3>Mes Projets</h3>

                {/* TODO : Request */}
                <div>
                    {PROJECTS.map((project, index) => <ProjectArticle key={index} {...project}/>)}
                </div>

                <svg fill="#000000" height="50px" width="100%" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  
                    viewBox="0 0 32.055 32.055" >
                <g>
                    <path d="M3.968,12.061C1.775,12.061,0,13.835,0,16.027c0,2.192,1.773,3.967,3.968,3.967c2.189,0,3.966-1.772,3.966-3.967
                        C7.934,13.835,6.157,12.061,3.968,12.061z M16.233,12.061c-2.188,0-3.968,1.773-3.968,3.965c0,2.192,1.778,3.967,3.968,3.967
                        s3.97-1.772,3.97-3.967C20.201,13.835,18.423,12.061,16.233,12.061z M28.09,12.061c-2.192,0-3.969,1.774-3.969,3.967
                        c0,2.19,1.774,3.965,3.969,3.965c2.188,0,3.965-1.772,3.965-3.965S30.278,12.061,28.09,12.061z"/>
                </g>
                </svg>
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
