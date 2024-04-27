import { Link } from 'react-router-dom';
import './header.scss';

export default function Header() {
    return <header>
        <nav>
            <a href='/#about'>&Agrave; Propos</a>
            <a href='/#skills'>Compétences</a>
            <a href='/#projects'>Projets</a>
            <a href='/#contact'>Contact</a>
        </nav>
    </header>
}
