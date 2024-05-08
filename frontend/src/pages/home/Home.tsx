import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { API_Project, API_Skill } from '../../utils/interface';
import { request } from '../../utils/request';
import ProjectArticle from '../../components/projectArticle/ProjectArticle';
import ContactForm from '../../components/contactForm/ContactForm';
import Skill from '../../components/skill/Skill';
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
        }, { rootMargin: '0px 0px -300px 0px', });

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

            <p className='pre'>
                Je m'appelle Arnaud et je suis développeur web<br/><br/>
                
                J'aime travailler sur la création de nouveaux projets du début à la fin ainsi que les maintenir<br/><br/>

                Je suis passionné d'informatique depuis toujours<br/>
                Grâce à OpenClassroom j'ai perfectionné et renforcé mes compétences dans ce domaine
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

            <ContactForm/>
        </section>
    </main>
}
