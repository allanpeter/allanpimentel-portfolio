import { motion } from 'framer-motion'
import Button from '../components/Button'
import Container from '../components/Container'

const Hero = () => {
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
            <p className="text-sm uppercase tracking-[0.3em] text-neon-green">Portfolio 2026</p>
            <h1 className="mt-4 text-4xl font-semibold text-white lg:text-5xl">
              Allan Pimentel
            </h1>
            <p className="mt-4 text-lg text-white/70">
              Desenvolvedor, Criador de Sistemas e Entusiasta de IA, Automacao e Homelab.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button as="link" href="#projects" variant="primary">
                Ver Projetos
              </Button>
              <Button as="link" href="#contact" variant="secondary">
                Me Contratar
              </Button>
              <Button as="link" href="#contact" variant="ghost">
                Contato
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-white/60">
              <div>
                <p className="text-lg font-semibold text-white">12+ anos</p>
                <p>Produtos e sistemas</p>
              </div>
              <div>
                <p className="text-lg font-semibold text-white">40+ automacoes</p>
                <p>Fluxos e integracoes</p>
              </div>
              <div>
                <p className="text-lg font-semibold text-white">Infra IA-ready</p>
                <p>Homelab e cloud</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="glass card-3d rounded-3xl p-6"
          >
            <div className="card-3d-inner">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-neon-blue/20 text-xl font-semibold text-neon-blue">
                  AP
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-white/50">Avatar</p>
                  <p className="text-sm text-white/80">Substitua por foto ou render 3D</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.2em] text-white/50">Status</p>
                <span className="rounded-full bg-neon-green/20 px-3 py-1 text-xs text-neon-green">Online</span>
              </div>
              <div className="mt-6 space-y-4">
                {[
                  { label: 'Infra', value: 'Proxmox + TrueNAS + K3s' },
                  { label: 'Automacao', value: 'n8n + Lambdas + IaC' },
                  { label: 'SaaS', value: 'B2B, B2C e produtos digitais' }
                ].map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-white/50">{item.label}</p>
                    <p className="mt-2 text-sm text-white">{item.value}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl border border-neon-blue/30 bg-neon-blue/10 p-4 text-sm text-white/80">
                Infraestrutura pronta para workloads de IA local e projetos corporativos.
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

export default Hero
