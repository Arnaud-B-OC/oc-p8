import './skill.scss';

interface SkillOptions {
    url: string
    alt: string
}

export default function Skill({url, alt} : SkillOptions) {
    return <div className='skill'>
        <span>{alt}</span>
        <img src={url} alt={alt}/>
    </div>
}
