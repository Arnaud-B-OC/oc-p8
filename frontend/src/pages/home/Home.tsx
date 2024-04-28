import { API_Project, API_Skill } from '../../utils/interface';
import { request } from '../../utils/request';
import ProjectArticle from '../../components/projectArticle.tsx/ProjectArticle';
import Skill from '../../components/skill/Skill';
import Input from '../../components/input/Input';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './home.scss';

interface API_Data {
    projects: API_Project[]
    skills: API_Skill[]
}

export default function Home() {
    const [apiData, setApiData] = useState<API_Data | undefined>(undefined);

    useEffect(() => {
        Promise.all([ request('/projects'), request('/skills') ])
        .then(([projects, skills] : [API_Project[], API_Skill[]]) => setApiData({ projects, skills }))
        .catch(() => {});
    }, []);

    const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // TODO : Send Message To API
    }

    return <>
        <main>
            <section id='home'>
                <img src='/ress/images/nature.jpg' alt=''/>

                <h1>Arnaud B</h1>
                <h2>Développeur Web</h2>
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
                
                <article id='skills'>
                    <h4>Compétences</h4>

                    {apiData?.skills.map((skill, index) => <Skill key={index} {...skill}/>)}
                </article>
            </section>

            <section id='projects'>
                <h3>Mes Projets</h3>

                <div>
                    {apiData?.projects.map((project, index) => <ProjectArticle key={index} {...project}/>)}
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
