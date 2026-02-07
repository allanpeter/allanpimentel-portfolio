import { motion } from 'framer-motion'
import Section from '../components/Section'

const About = () => {
  return (
    <Section
      id="about"
      title="Sobre Mim"
      eyebrow="Contexto"
      subtitle="Foco total em sistemas de alta performance, automacoes e infraestrutura inteligente."
    >
      <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl p-6 text-white/70"
        >
          <p>
            Sou Full Stack Developer com foco em criar sistemas complexos, automacoes robustas e
            infraestrutura preparada para IA. Trabalho com AWS, Terraform, Proxmox e Node.js para
            entregar plataformas confiaveis, escalaveis e com alto nivel de observabilidade.
          </p>
          <p className="mt-4">
            Minha rotina combina desenvolvimento de SaaS, automacoes com n8n, produtos digitais e
            operacoes de homelab. Tambem atuo com impressao 3D, drones e prototipagem rapida para
            acelerar novos produtos.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass rounded-3xl p-6"
        >
          <h3 className="text-lg font-semibold text-white">Destaques tecnicos</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li>Full Stack Developer com foco em SaaS e sistemas corporativos.</li>
            <li>AWS, Terraform/Terragrunt e arquiteturas serverless.</li>
            <li>Proxmox, TrueNAS, K3s e clusters IA-ready.</li>
            <li>Automacoes com n8n e pipelines inteligentes.</li>
            <li>Produtos digitais, KDP e experiencia com 3D printing.</li>
          </ul>
        </motion.div>
      </div>
    </Section>
  )
}

export default About
