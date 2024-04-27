import { API_Project } from '../../utils/interface';
import { Link } from 'react-router-dom';
import './projectArticle.scss';

export default function ProjectArticle({preview, title, id} : API_Project) {
    return <Link to={`/project/${id}`}>
        <article>
            <img src={preview} alt={title}/>
            <p>{title}</p>
        </article>
    </Link>
}
