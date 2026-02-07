import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import Container from './Container'

type SectionProps = {
  id: string
  title: string
  eyebrow?: string
  subtitle?: string
  children: ReactNode
}

const Section = ({ id, title, eyebrow, subtitle, children }: SectionProps) => {
  return (
    <section id={id} className="py-16 lg:py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-neon-blue">{eyebrow ?? id}</p>
          <h2 className="mt-3 text-3xl font-semibold text-white lg:text-4xl">{title}</h2>
          {subtitle ? (
            <p className="mt-3 max-w-2xl text-base text-white/70">{subtitle}</p>
          ) : null}
        </motion.div>
        {children}
      </Container>
    </section>
  )
}

export default Section
