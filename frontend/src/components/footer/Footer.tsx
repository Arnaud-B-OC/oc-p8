import { Link } from 'react-router-dom';
import './footer.scss';

export default function Footer() {
    return <footer>
        <Link to='/legals'>Mentions Legales</Link>
        <p>&copy;2024 Arnaud.B </p>
    </footer>
}
