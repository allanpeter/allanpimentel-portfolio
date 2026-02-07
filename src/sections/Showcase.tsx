import Section from '../components/Section'
import GadgetCard from '../components/GadgetCard'
import { gadgets } from '../data/portfolio'

const Showcase = () => {
  return (
    <Section
      id="showcase"
      title="Showcase de Gadgets e Infra"
      eyebrow="Homelab"
      subtitle="Infraestrutura local e equipamentos que sustentam o ecossistema." 
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {gadgets.map((gadget) => (
          <GadgetCard key={gadget.title} {...gadget} />
        ))}
      </div>
    </Section>
  )
}

export default Showcase
