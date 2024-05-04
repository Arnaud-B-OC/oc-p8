import { API_Project } from '../../utils/interface';
import { Link } from 'react-router-dom';
import './projectArticle.scss';

export default function ProjectArticle({preview, title, id} : API_Project) {
    return <Link to={`/project/${id}`} className='projectArticle'>
        <div className='project'>
            <img src={preview} alt=''/>
            <p>{title}</p>
        </div>
    </Link>
}
