import { useState } from 'react';
import Input from '../input/Input';
import { request } from '../../utils/request';
import './contactForm.scss';

export default function ContactForm() {
    const [contactFormResult, setContactFormResult] = useState<boolean | string>(false);

    const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const target = e.target as typeof e.target & {
            name: { value: string };
            mail: { value: string };
            message: { value: string };
        };

        request('/contact', {
            name: target.name.value,
            mail: target.mail.value,
            message: target.message.value,
        })
        .then(() => setContactFormResult(true))
        .catch((err) => setContactFormResult(err.err));
    }

    return <>
        {typeof contactFormResult == 'string' && <p className='contactError'>{contactFormResult}</p>}
        {(contactFormResult === false || typeof contactFormResult == 'string') && <form onSubmit={sendMessage}>
            <Input name='name' placeholder='Nom :' />
            <Input name='mail' placeholder='Email :' type='email' />
            <Input name='message' placeholder='Message :' textArea />

            <button>Envoyer</button>
        </form>}
        {contactFormResult === true && <p className='contactResult'>Message envoyé avec succès&nbsp;!</p>}
    </>
}
