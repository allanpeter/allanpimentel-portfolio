import { motion } from 'framer-motion'

type GadgetCardProps = {
  title: string
  image: string
}

const GadgetCard = ({ title, image }: GadgetCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="glass overflow-hidden rounded-2xl"
    >
      <img src={image} alt={title} className="h-36 w-full object-cover" />
      <div className="p-4">
        <p className="text-sm font-semibold text-white">{title}</p>
      </div>
    </motion.div>
  )
}

export default GadgetCard
