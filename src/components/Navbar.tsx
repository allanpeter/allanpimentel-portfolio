import { Link } from 'react-router-dom'
import { Language, getTranslation } from '../i18n'
import Container from './Container'
import Button from './Button'

interface NavbarProps {
  lang: Language
}

const Navbar = ({ lang }: NavbarProps) => {
  const t = getTranslation(lang)
  const otherLang = lang === 'pt' ? 'en' : 'pt'
  const otherPath = lang === 'pt' ? '/en' : '/'

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-base-950/80 backdrop-blur">
      <Container className="flex items-center justify-between py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-neon-blue/20 text-sm font-bold text-neon-blue">
            AP
          </div>
          <div>
            <p className="text-sm font-semibold">Allan Pimentel</p>
            <p className="text-xs text-white/60">{t.navbar.tagline}</p>
          </div>
        </div>
        <nav className="hidden items-center gap-6 text-sm text-white/70 lg:flex">
          <a href="#hero" className="hover:text-white">{t.navbar.nav.home}</a>
          <a href="#about" className="hover:text-white">{t.navbar.nav.about}</a>
          <a href="#skills" className="hover:text-white">{t.navbar.nav.skills}</a>
          <a href="#projects" className="hover:text-white">{t.navbar.nav.projects}</a>
          <a href="#showcase" className="hover:text-white">{t.navbar.nav.showcase}</a>
          <a href="#contact" className="hover:text-white">{t.navbar.nav.contact}</a>
        </nav>
        <div className="hidden lg:flex gap-3">
          <Link
            to={otherPath}
            className="rounded-full px-3 py-2 text-sm font-semibold text-white/70 hover:text-white transition-colors"
          >
            {otherLang.toUpperCase()}
          </Link>
          <Button as="link" href="#contact" variant="secondary">
            {t.navbar.cta}
          </Button>
        </div>
      </Container>
    </header>
  )
}

export default Navbar
