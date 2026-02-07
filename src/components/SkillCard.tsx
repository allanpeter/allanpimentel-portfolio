import { motion } from 'framer-motion'

type SkillCardProps = {
  title: string
  description: string
}

const SkillCard = ({ title, description }: SkillCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="glass card-3d rounded-2xl p-6"
    >
      <div className="card-3d-inner">
        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-neon-green/10 font-mono text-sm text-neon-green">
          /{title.slice(0, 2).toUpperCase()}
        </div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="mt-2 text-sm text-white/70">{description}</p>
      </div>
    </motion.div>
  )
}

export default SkillCard
