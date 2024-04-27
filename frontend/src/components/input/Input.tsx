import { HTMLInputTypeAttribute } from 'react';
import './input.scss';

interface InputOptions {
    placeholder: string
    type?: HTMLInputTypeAttribute
    textArea?: boolean
}

export default function Input({placeholder, type, textArea} : InputOptions) {
    return <div className='input'>
        <label>{placeholder}</label>
        {textArea ?
            <textarea rows={5}></textarea>
            :
            <input type={type ?? 'text'}/>
        }
        
        
    </div>
}
