import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './header.scss';

export default function Header() {
    const location = useLocation();
    const [navBarSolid, setNavBarSolid] = useState(false);
    
    useEffect(() => {
        const scroll = () => {
            const currentScroll = window.scrollY;
            const currentHeight = window.innerHeight - 80;
            if (currentScroll > currentHeight && !navBarSolid) {
                document.removeEventListener('scroll', scroll);
                setNavBarSolid(true);
            }
            else if (window.scrollY < currentHeight && navBarSolid) {
                document.removeEventListener('scroll', scroll);
                setNavBarSolid(false);
            }
        }

        document.addEventListener('scroll', scroll);
    }, [navBarSolid]);

    return <header className={(location.pathname !== '/' || navBarSolid) ? 'color' : undefined}>        
        <nav>
            <HashLink className='h' to='/'>
                <p>Arnaud B<br/>Développeur Web</p>
            </HashLink>
            
            <HashLink to='/#about'>&Agrave; Propos</HashLink>
            <HashLink to='/#skills'>Compétences</HashLink>
            <HashLink to='/#projects'>Projets</HashLink>
            <HashLink to='/#contact'>Contact</HashLink>
        </nav>
    </header>
}
