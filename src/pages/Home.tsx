import { Language } from '../i18n'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Skills from '../sections/Skills'
import Projects from '../sections/Projects'
import Showcase from '../sections/Showcase'
import Contact from '../sections/Contact'

interface HomeProps {
  lang: Language
}

const Home = ({ lang }: HomeProps) => {
  return (
    <div className="min-h-screen bg-base-950 text-white">
      <Navbar lang={lang} />
      <main>
        <Hero lang={lang} />
        <About lang={lang} />
        <Skills lang={lang} />
        <Projects lang={lang} />
        <Showcase lang={lang} />
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  )
}

export default Home
