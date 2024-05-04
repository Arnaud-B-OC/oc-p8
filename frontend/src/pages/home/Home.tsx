import { API_Project, API_Skill } from '../../utils/interface';
import { request, requestPost } from '../../utils/request';
import ProjectArticle from '../../components/projectArticle.tsx/ProjectArticle';
import Skill from '../../components/skill/Skill';
import Input from '../../components/input/Input';
import { useEffect, useRef, useState } from 'react';
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

    const [contactFormResult, setContactFormResult] = useState<boolean | string>(false);

    const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const target = e.target as typeof e.target & {
            name: { value: string };
            mail: { value: string };
            message: { value: string };
        };

        console.log({
            name: target.name.value,
            mail: target.mail.value,
            message: target.message.value,
        })

        requestPost('/contact', {
            name: target.name.value,
            mail: target.mail.value,
            message: target.message.value,
        })
        .then((result) => setContactFormResult(true))
        .catch((err) => setContactFormResult(err.err));
    }
    
    const sectionAboutRef = useRef<HTMLHeadingElement | null>(null);
    const sectionProjectsRef = useRef<HTMLHeadingElement | null>(null);
    const sectionContactRef = useRef<HTMLHeadingElement | null>(null);

    const [showSection1, setShowSection1] = useState<boolean>(false);
    const [showSection2, setShowSection2] = useState<boolean>(false);
    const [showSection3, setShowSection3] = useState<boolean>(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {


            entries.map((entry) => {
                switch (parseInt(entry.target.getAttribute('data-index') ?? 'NaN')) {
                    case 1:
                        setShowSection1(entry.isIntersecting);
                        break;
                    case 2:
                        setShowSection2(entry.isIntersecting);
                        break;
                    case 3:
                        setShowSection3(entry.isIntersecting);
                        break;
                    default:
                        break;
                }

                return undefined;
            });
        }, { rootMargin: '-300px' });

        observer.observe(sectionAboutRef.current!);
        observer.observe(sectionProjectsRef.current!);
        observer.observe(sectionContactRef.current!);
        
        return () => observer.disconnect();
    }, []);
    
    return <main id='homepage'>
        <section id='home' className='show'>
            <img src='/ress/images/nature.webp' alt=''/>
            
            <h1>Arnaud B</h1>
            <h2>Développeur Web</h2>
        </section>
        
        <section id='about' className={showSection1 ? 'show' : undefined} data-index={1} ref={sectionAboutRef}>
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
        
        <section id='projects' className={showSection2 ? 'show' : undefined} data-index={2} ref={sectionProjectsRef}>
            <h3>Mes Projets</h3>
            
            <div>
                {apiData?.projects.map((project, index) => <ProjectArticle key={index} {...project}/>)}
            </div>
        </section>
        
        <section id='contact' className={showSection3 ? 'show' : undefined} data-index={3} ref={sectionContactRef}>
            <h3>Me contacter</h3>

            {typeof contactFormResult == 'string' && <p className='contactError'>{contactFormResult}</p>}
            {(contactFormResult === false || typeof contactFormResult == 'string') && <form onSubmit={sendMessage}>
                <Input name='name' placeholder='Nom :'/>
                <Input name='mail' placeholder='Email :' type='email'/>
                <Input name='message' placeholder='Message :' textArea/>
                
                <button>Envoyer</button>
            </form>}
            {contactFormResult === true && <p className='contactResult'>Message envoyé avec succès&nbsp;!</p>}
        </section>
    </main>
}
