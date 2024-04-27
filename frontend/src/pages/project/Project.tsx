import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './project.scss';

export default function Project() {
    const params = useParams();

    console.log(params)

    useEffect(() => {
        // TODO : request data
    }, [])

    return <main>
        <section id='project'>
            <h2>Project Title - {JSON.stringify(params)}</h2>
            
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin leo justo, facilisis in diam sed, blandit pharetra massa. Morbi tempor tortor non risus rhoncus efficitur. Morbi eget ipsum sit amet magna molestie elementum at pellentesque lectus. Suspendisse aliquam, dolor vehicula fringilla dictum, tellus mi posuere est, nec maximus tellus nisl.</p>
            
            <p>
                Liens...github + site
                Images...
            </p>
        </section>
    </main>
}
