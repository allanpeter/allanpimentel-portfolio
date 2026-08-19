import { motion } from 'framer-motion'
import Button from './Button'

type ProjectCardProps = {
  title: string
  image: string
  summary: string
  cta: string
  ctaUrl?: string
}

const ProjectCard = ({ title, image, summary, cta, ctaUrl }: ProjectCardProps) => {
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
          {ctaUrl && (
            <Button
              className="mt-6"
              variant="ghost"
              as="link"
              href={ctaUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {cta}
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard
