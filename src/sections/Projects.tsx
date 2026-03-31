import { Language, getTranslation } from '../i18n'
import { projects } from '../data/portfolio'
import Section from '../components/Section'
import ProjectCard from '../components/ProjectCard'

interface ProjectsProps {
  lang: Language
}

const Projects = ({ lang }: ProjectsProps) => {
  const t = getTranslation(lang)
  const projectsData = projects[lang]

  return (
    <Section
      id="projects"
      title={t.projects.title}
      eyebrow={t.projects.eyebrow}
      subtitle={t.projects.subtitle}
    >
      <div className="grid gap-8 lg:grid-cols-2">
        {projectsData.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </Section>
  )
}

export default Projects
