import { HTMLInputTypeAttribute } from 'react';
import './input.scss';

interface InputOptions {
    name: string
    placeholder: string
    type?: HTMLInputTypeAttribute
    textArea?: boolean
    require?: boolean
}

export default function Input({name, placeholder, type, textArea, require} : InputOptions) {
    return <div className='input'>
        <label htmlFor={name}>{placeholder}</label>
        {textArea ?
            <textarea id={name} name={name} rows={5}></textarea>
            :
            <input id={name} name={name} type={type ?? 'text'} required={require}/>
        }
    </div>
}
