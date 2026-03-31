import { motion } from 'framer-motion'
import { Language, getTranslation } from '../i18n'
import Button from '../components/Button'
import Container from '../components/Container'
import profileImg from '../assets/profile/20260219_132402.jpg'

interface HeroProps {
  lang: Language
}

const Hero = ({ lang }: HeroProps) => {
  const t = getTranslation(lang)
  const currentYear = new Date().getFullYear()

  return (
    <section id="hero" className="relative overflow-hidden pb-20 pt-16 lg:pt-24">
      <div className="absolute inset-0 grid-overlay opacity-30" />
      <div className="absolute -top-32 right-0 h-72 w-72 rounded-full bg-neon-blue/20 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-neon-green/20 blur-3xl" />
      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm uppercase tracking-[0.3em] text-neon-green">Portfolio {currentYear}</p>
            <h1 className="mt-4 text-4xl font-semibold text-white lg:text-5xl">
              Allan Pimentel
            </h1>
            <p className="mt-4 text-lg text-white/70">
              {t.hero.subtitle}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button as="link" href="#projects" variant="primary">
                {t.hero.cta.projects}
              </Button>
              <Button as="link" href="#contact" variant="secondary">
                {t.hero.cta.contact}
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-white/60">
              {t.hero.stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-lg font-semibold text-white">{stat.value}</p>
                  <p>{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl overflow-hidden"
          >
            <img
              src={profileImg}
              alt="Allan Pimentel"
              className="w-full h-auto object-cover rounded-3xl"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

export default Hero
