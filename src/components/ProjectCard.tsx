import { motion } from 'framer-motion'
import Tag from './Tag'
import Button from './Button'

type ProjectCardProps = {
  title: string
  image: string
  summary: string
  tech: string[]
  cta: string
  ctaUrl?: string
}

const ProjectCard = ({ title, image, summary, tech, cta, ctaUrl }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="glass card-3d overflow-hidden rounded-3xl"
    >
      <div className="card-3d-inner">
        <img src={image} alt={title} className="h-48 w-full object-cover" />
        <div className="p-6">
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <p className="mt-2 text-sm text-white/70">{summary}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {tech.map((item) => (
              <Tag key={item} label={item} />
            ))}
          </div>
          <Button
            className="mt-6"
            variant="ghost"
            as={ctaUrl ? "link" : "button"}
            href={ctaUrl}
            target={ctaUrl ? "_blank" : undefined}
            rel={ctaUrl ? "noopener noreferrer" : undefined}
          >
            {cta}
          </Button>
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard
