import { motion } from 'framer-motion'
import Section from '../components/Section'
import Button from '../components/Button'

const Contact = () => {
  return (
    <Section
      id="contact"
      title="Contato"
      eyebrow="Contato"
      subtitle="Vamos conversar sobre seu produto, infra ou automacao."
    >
      <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl p-6"
        >
          <div className="grid gap-4">
            <label className="text-sm text-white/70">
              Nome
              <input
                type="text"
                placeholder="Seu nome"
                className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-neon-blue/50 focus:outline-none"
              />
            </label>
            <label className="text-sm text-white/70">
              Email
              <input
                type="email"
                placeholder="voce@exemplo.com"
                className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-neon-blue/50 focus:outline-none"
              />
            </label>
            <label className="text-sm text-white/70">
              Mensagem
              <textarea
                rows={4}
                placeholder="Descreva sua necessidade"
                className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-neon-blue/50 focus:outline-none"
              />
            </label>
            <Button variant="secondary" type="button">
              Enviar mensagem
            </Button>
          </div>
        </motion.form>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass rounded-3xl p-6"
        >
          <h3 className="text-lg font-semibold text-white">Redes e canais</h3>
          <p className="mt-3 text-sm text-white/70">
            Respondo rapido para projetos de automacao, consultoria em infraestrutura e
            desenvolvimento de SaaS.
          </p>
          <div className="mt-6 space-y-3 text-sm">
            <a href="https://github.com" className="block rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white/80 hover:border-white/30">
              GitHub
            </a>
            <a href="https://linkedin.com" className="block rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white/80 hover:border-white/30">
              LinkedIn
            </a>
            <a href="mailto:contato@allanpimentel.com" className="block rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white/80 hover:border-white/30">
              contato@allanpimentel.com
            </a>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}

export default Contact
