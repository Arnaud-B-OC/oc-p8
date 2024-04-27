import './skill.scss';

interface SkillOptions {
    url: string
    alt: string
}

export default function Skill({url, alt} : SkillOptions) {
    return <>
        <img className='skill' src={url} alt={alt}/>
    </>
}
