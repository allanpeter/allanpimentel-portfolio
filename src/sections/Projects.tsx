import Section from '../components/Section'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/portfolio'

const Projects = () => {
  return (
    <Section
      id="projects"
      title="Meus Projetos e SaaS"
      eyebrow="SaaS"
      subtitle="Plataformas, automacoes e infra que resolvem problemas reais."
    >
      <div className="grid gap-8 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </Section>
  )
}

export default Projects
