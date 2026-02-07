import Section from '../components/Section'
import SkillCard from '../components/SkillCard'
import { skills } from '../data/portfolio'

const Skills = () => {
  return (
    <Section
      id="skills"
      title="Expertises"
      eyebrow="Skills"
      subtitle="Pilares tecnicos que sustentam produtos e infraestruturas modernas."
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => (
          <SkillCard key={skill.title} title={skill.title} description={skill.description} />
        ))}
      </div>
    </Section>
  )
}

export default Skills
