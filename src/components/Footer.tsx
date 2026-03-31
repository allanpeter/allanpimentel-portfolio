import { Language, getTranslation } from '../i18n'
import Container from './Container'

interface FooterProps {
  lang: Language
}

const Footer = ({ lang }: FooterProps) => {
  const t = getTranslation(lang)

  return (
    <footer className="border-t border-white/5 py-10">
      <Container className="flex flex-col items-start justify-between gap-6 text-sm text-white/60 md:flex-row md:items-center">
        <div>
          <p className="font-semibold text-white">Allan Pimentel</p>
          <p>{t.footer.copyright}</p>
        </div>
        <div className="flex gap-6">
          <a href="https://github.com/allanpeter" target="_blank" rel="noopener noreferrer" className="hover:text-white">GitHub</a>
          <a href="https://www.linkedin.com/in/allan-pimentel-24ab17145/" target="_blank" rel="noopener noreferrer" className="hover:text-white">LinkedIn</a>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
