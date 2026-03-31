import { motion } from 'framer-motion'
import { Language, getTranslation } from '../i18n'
import Section from '../components/Section'

interface AboutProps {
  lang: Language
}

const About = ({ lang }: AboutProps) => {
  const t = getTranslation(lang)

  return (
    <Section
      id="about"
      title={t.about.title}
      eyebrow={t.about.eyebrow}
      subtitle={t.about.subtitle}
    >
      <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl p-6 text-white/70"
        >
          {t.about.body.map((paragraph, index) => (
            <p key={index} className={index > 0 ? 'mt-4' : ''}>
              {paragraph}
            </p>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass rounded-3xl p-6"
        >
          <h3 className="text-lg font-semibold text-white">{t.about.highlights.title}</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            {t.about.highlights.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </motion.div>
      </div>
    </Section>
  )
}

export default About
