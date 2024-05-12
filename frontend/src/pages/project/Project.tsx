import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { request } from '../../utils/request';
import { API_Project } from '../../utils/interface';
import Error404 from '../404/Error404';
import './project.scss';

export default function Project() {
    const params = useParams();
    const [project, setProject] = useState<API_Project | false | undefined>(undefined);

    useEffect(() => {
        request(`/projects/${params.id}`)
        .then((project) => setProject(project))
        .catch(() => setProject(false));
    }, [params.id]);

    return <main>
        {project === false && <Error404/>}
        {project && <section id='project'>
            <h1>{project.title}</h1>
            
            <p className='pre'>{project.about}</p>
            
            <div className='links'>
                <Link to={project.githubLink} target='_blank'><img src='/ress/icons/github.svg' alt='github'/></Link>
                <Link to={project.websiteLink} target='_blank'><img src='/ress/icons/link.svg' alt='linkedin'/></Link>
            </div>

            <img src={project.image} alt=''/>
        </section>}
    </main>
}
