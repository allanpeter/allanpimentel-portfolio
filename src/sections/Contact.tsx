import { motion } from 'framer-motion'
import { useState } from 'react'
import { Language, getTranslation } from '../i18n'
import Section from '../components/Section'
import Button from '../components/Button'

interface ContactProps {
  lang: Language
}

const Contact = ({ lang }: ContactProps) => {
  const t = getTranslation(lang)
  const [formData, setFormData] = useState({ nome: '', email: '', mensagem: '' })
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.nome || !formData.email || !formData.mensagem) {
      setStatus('error')
      setErrorMsg(t.contact.form.errors.empty)
      return
    }

    setLoading(true)
    setStatus('idle')

    try {
      const response = await fetch('https://n8n.apps.allanpimentel.com/webhook-test/fea595fe-a96c-444e-a218-43c92e34ca4b', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Basic YWxsYW46cGV0ZXI='
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ nome: '', email: '', mensagem: '' })
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        throw new Error('Erro ao enviar mensagem')
      }
    } catch (error) {
      setStatus('error')
      setErrorMsg(t.contact.form.errors.send)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Section
      id="contact"
      title={t.contact.title}
      eyebrow={t.contact.eyebrow}
      subtitle={t.contact.subtitle}
    >
      <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="glass rounded-3xl p-6"
        >
          <div className="grid gap-4">
            <label className="text-sm text-white/70">
              {t.contact.form.name}
              <input
                type="text"
                name="nome"
                placeholder={t.contact.form.namePlaceholder}
                value={formData.nome}
                onChange={handleChange}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-neon-blue/50 focus:outline-none"
              />
            </label>
            <label className="text-sm text-white/70">
              {t.contact.form.email}
              <input
                type="email"
                name="email"
                placeholder={t.contact.form.emailPlaceholder}
                value={formData.email}
                onChange={handleChange}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-neon-blue/50 focus:outline-none"
              />
            </label>
            <label className="text-sm text-white/70">
              {t.contact.form.message}
              <textarea
                name="mensagem"
                rows={4}
                placeholder={t.contact.form.messagePlaceholder}
                value={formData.mensagem}
                onChange={handleChange}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-neon-blue/50 focus:outline-none"
              />
            </label>

            {status === 'error' && (
              <div className="rounded-2xl border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-400">
                {errorMsg}
              </div>
            )}

            {status === 'success' && (
              <div className="rounded-2xl border border-green-500/30 bg-green-500/10 p-3 text-sm text-green-400">
                {t.contact.form.success}
              </div>
            )}

            <Button
              variant="secondary"
              type="submit"
              disabled={loading}
              className={loading ? 'opacity-60 cursor-not-allowed' : ''}
            >
              {loading ? t.contact.form.submitting : t.contact.form.submit}
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
          <h3 className="text-lg font-semibold text-white">{t.contact.sidebar.title}</h3>
          <p className="mt-3 text-sm text-white/70">
            {t.contact.sidebar.description}
          </p>
          <div className="mt-6 space-y-3 text-sm">
            <Button
              as="link"
              href="https://wa.me/5531983159183?text=Oi%20Allan%2C%20gostaria%20de%20conversar%20sobre%20um%20projeto"
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              className="w-full justify-center"
            >
              {t.contact.sidebar.buttons.whatsapp}
            </Button>
            <Button
              as="link"
              href="https://github.com/allanpeter"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full justify-center bg-orange-500/20 text-orange-400 shadow-lg border border-orange-500/40 hover:bg-orange-500/30"
            >
              {t.contact.sidebar.buttons.github}
            </Button>
            <Button
              as="link"
              href="https://www.linkedin.com/in/allan-pimentel-24ab17145/"
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              className="w-full justify-center"
            >
              {t.contact.sidebar.buttons.linkedin}
            </Button>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}

export default Contact
