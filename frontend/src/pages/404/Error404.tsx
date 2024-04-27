import { Link } from 'react-router-dom';
import './error404.scss';

export default function Error404() {
    return <section id='error'>
        <h1>Erreur 404</h1>
        <h2>Page introuvable</h2>

        <Link to='/'>Retour à l'accueil</Link>
    </section>
}