import Container from './Container'

const Footer = () => {
  return (
    <footer className="border-t border-white/5 py-10">
      <Container className="flex flex-col items-start justify-between gap-6 text-sm text-white/60 md:flex-row md:items-center">
        <div>
          <p className="font-semibold text-white">Allan Pimentel</p>
          <p>Construindo sistemas, automacoes e infraestrutura de alto impacto.</p>
        </div>
        <div className="flex gap-6">
          <a href="https://github.com" className="hover:text-white">GitHub</a>
          <a href="https://linkedin.com" className="hover:text-white">LinkedIn</a>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
