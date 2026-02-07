import Container from './Container'
import Button from './Button'

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-base-950/80 backdrop-blur">
      <Container className="flex items-center justify-between py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-neon-blue/20 text-sm font-bold text-neon-blue">
            AP
          </div>
          <div>
            <p className="text-sm font-semibold">Allan Pimentel</p>
            <p className="text-xs text-white/60">Infra - Automacao - IA</p>
          </div>
        </div>
        <nav className="hidden items-center gap-6 text-sm text-white/70 lg:flex">
          <a href="#hero" className="hover:text-white">Inicio</a>
          <a href="#about" className="hover:text-white">Sobre</a>
          <a href="#skills" className="hover:text-white">Skills</a>
          <a href="#projects" className="hover:text-white">Projetos</a>
          <a href="#showcase" className="hover:text-white">Homelab</a>
          <a href="#contact" className="hover:text-white">Contato</a>
        </nav>
        <div className="hidden lg:flex">
          <Button as="link" href="#contact" variant="secondary">
            Me Contratar
          </Button>
        </div>
      </Container>
    </header>
  )
}

export default Navbar
