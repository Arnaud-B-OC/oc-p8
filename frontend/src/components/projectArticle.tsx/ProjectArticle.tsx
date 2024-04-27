import { Link } from 'react-router-dom';
import './projectArticle.scss';

interface ProjectArticleOptions {
    link: string
    preview: string
    title: string
}

export default function ProjectArticle({link, preview, title, } : ProjectArticleOptions) {
    return <Link to={link}>
        <article>
            <img src={preview} alt={title}/>
            <p>{title}</p>
        </article>
    </Link>
}
