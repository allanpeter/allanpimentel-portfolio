import { motion } from 'framer-motion'
import { Language, getTranslation } from '../i18n'
import { infrastructure } from '../data/portfolio'
import Section from '../components/Section'

interface ShowcaseProps {
  lang: Language
}

const Showcase = ({ lang }: ShowcaseProps) => {
  const t = getTranslation(lang)
  const infraData = infrastructure[lang]

  return (
    <Section
      id="showcase"
      title={t.showcase.title}
      eyebrow={t.showcase.eyebrow}
      subtitle={t.showcase.subtitle}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass rounded-3xl p-8 mb-8"
      >
        <p className="text-center text-lg text-white/80">
          <span className="font-semibold text-neon-green">100% Self-Hosted</span> — {infraData.description}
        </p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {infraData.categories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
            className="glass rounded-3xl p-6"
          >
            <h3 className="text-lg font-semibold text-white mb-4">{category.title}</h3>
            <ul className="space-y-2">
              {category.items.map((item) => (
                <li
                  key={item}
                  className="text-sm text-white/70 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-neon-blue" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

export default Showcase
