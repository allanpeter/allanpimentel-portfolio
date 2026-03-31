import { Language, getTranslation } from '../i18n'
import { skills } from '../data/portfolio'
import Section from '../components/Section'
import SkillCard from '../components/SkillCard'

interface SkillsProps {
  lang: Language
}

const Skills = ({ lang }: SkillsProps) => {
  const t = getTranslation(lang)
  const skillsData = skills[lang]

  return (
    <Section
      id="skills"
      title={t.skills.title}
      eyebrow={t.skills.eyebrow}
      subtitle={t.skills.subtitle}
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillsData.map((skill) => (
          <SkillCard key={skill.title} title={skill.title} description={skill.description} />
        ))}
      </div>
    </Section>
  )
}

export default Skills
