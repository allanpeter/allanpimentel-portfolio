import mockflowImg from '../assets/projects/mockflow.svg'
import n8nImg from '../assets/projects/n8n.svg'

import optiplexImg from '../assets/gadgets/optiplex.svg'
import nasImg from '../assets/gadgets/nas.svg'
import clusterImg from '../assets/gadgets/cluster.svg'
import printerImg from '../assets/gadgets/3d-printer.svg'
import dronesImg from '../assets/gadgets/drones.svg'

export const skills = {
  pt: [
    {
      title: 'Arquitetura de sistemas',
      description: 'Design de sistemas escalaveis, resilientes e orientados a automacao e eficiencia operacional.'
    },
    {
      title: 'Desenvolvimento Full Stack',
      description: 'Construcao de SaaS e sistemas com Node.js, React e integracoes robustas.'
    },
    {
      title: 'Automacao de processos',
      description: 'n8n, workflows e integracoes para eliminar tarefas manuais e aumentar produtividade.'
    },
    {
      title: 'Infraestrutura & Cloud',
      description: 'AWS, Proxmox e gestao de ambientes com foco em performance, custo e controle.'
    },
    {
      title: 'DevOps & Entrega',
      description: 'CI/CD, observabilidade e deploy rapido com foco em confiabilidade e entrega continua.'
    },
    {
      title: 'Homelab & servicos locais',
      description: 'Execucao de servicos locais, clusters e experimentacao de arquiteturas em ambiente proprio.'
    },
    {
      title: 'Construcao de SaaS',
      description: 'Do MVP a escala, com foco em entrega rapida de valor e evolucao continua.'
    },
    {
      title: 'Tecnologia aplicada',
      description: 'Impressao 3D, drones, Arduino e automacao residencial com abordagem pratica.'
    }
  ],
  en: [
    {
      title: 'Systems Architecture',
      description: 'Design of scalable, resilient systems oriented to automation and operational efficiency.'
    },
    {
      title: 'Full Stack Development',
      description: 'Building SaaS and systems with Node.js, React, and robust integrations.'
    },
    {
      title: 'Process Automation',
      description: 'n8n, workflows, and integrations to eliminate manual tasks and boost productivity.'
    },
    {
      title: 'Infrastructure & Cloud',
      description: 'AWS, Proxmox, and environment management focused on performance, cost, and control.'
    },
    {
      title: 'DevOps & Delivery',
      description: 'CI/CD, observability, and fast deployment with focus on reliability and continuous delivery.'
    },
    {
      title: 'Homelab & Local services',
      description: 'Running local services, clusters, and architecture experimentation in own environment.'
    },
    {
      title: 'SaaS Development',
      description: 'From MVP to scale, focused on rapid value delivery and continuous evolution.'
    },
    {
      title: 'Applied Technology',
      description: '3D printing, drones, Arduino, and home automation with practical approach.'
    }
  ]
}

export const projects = {
  pt: [
    {
      title: 'Mockflow - Mentoria para Desenvolvedores',
      image: mockflowImg,
      summary: 'Plataforma conectando juniors com seniors para experiencia e preparacao para entrevistas.',
      tech: ['Next.js', 'shadcn/ui', 'Node.js'],
      cta: 'Visitar',
      ctaUrl: 'https://mockflow.com.br'
    },
    {
      title: 'n8n - Automacao e Integracao',
      image: n8nImg,
      summary: 'Plataforma de automacao robusta com workflows, integracao de APIs e automacao de processos.',
      tech: ['n8n', 'Workflows', 'Integracao'],
      cta: 'Explorar',
      ctaUrl: 'https://n8n.apps.allanpimentel.com'
    }
  ],
  en: [
    {
      title: 'Mockflow - Developer Mentorship',
      image: mockflowImg,
      summary: 'Platform connecting juniors with seniors for experience and interview preparation.',
      tech: ['Next.js', 'shadcn/ui', 'Node.js'],
      cta: 'Visit',
      ctaUrl: 'https://mockflow.com.br'
    },
    {
      title: 'n8n - Automation & Integration',
      image: n8nImg,
      summary: 'Robust automation platform with workflows, API integration, and process automation.',
      tech: ['n8n', 'Workflows', 'Integration'],
      cta: 'Explore',
      ctaUrl: 'https://n8n.apps.allanpimentel.com'
    }
  ]
}

export const infrastructure = {
  pt: {
    description: 'Ambiente com foco em automacao, observabilidade e controle total da infraestrutura.',
    categories: [
      {
        title: 'Virtualizacao & Orquestracao',
        items: ['Proxmox', 'K3S']
      },
      {
        title: 'Plataforma & Deploy',
        items: ['Coolify', 'NGINX']
      },
      {
        title: 'Observabilidade',
        items: ['Prometheus', 'Grafana', 'Uptime Kuma']
      },
      {
        title: 'Armazenamento',
        items: ['TrueNAS', 'ZFS']
      },
      {
        title: 'Rede & Seguranca',
        items: ['AdGuard Home', 'Vaultwarden']
      },
      {
        title: 'Servicos & Automacao',
        items: ['Home Assistant', 'Jellyfin']
      }
    ]
  },
  en: {
    description: 'Environment focused on automation, observability, and complete infrastructure control.',
    categories: [
      {
        title: 'Virtualization & Orchestration',
        items: ['Proxmox', 'K3S']
      },
      {
        title: 'Platform & Deploy',
        items: ['Coolify', 'NGINX']
      },
      {
        title: 'Observability',
        items: ['Prometheus', 'Grafana', 'Uptime Kuma']
      },
      {
        title: 'Storage',
        items: ['TrueNAS', 'ZFS']
      },
      {
        title: 'Network & Security',
        items: ['AdGuard Home', 'Vaultwarden']
      },
      {
        title: 'Services & Automation',
        items: ['Home Assistant', 'Jellyfin']
      }
    ]
  }
}

export const gadgets = {
  pt: [
    {
      title: 'Servidores Optiplex / Proxmox',
      image: optiplexImg
    },
    {
      title: 'NAS com ZFS',
      image: nasImg
    },
    {
      title: 'Cluster homelab',
      image: clusterImg
    },
    {
      title: 'Impressoras 3D',
      image: printerImg
    },
    {
      title: 'Drones e equipamentos',
      image: dronesImg
    }
  ],
  en: [
    {
      title: 'Optiplex Servers / Proxmox',
      image: optiplexImg
    },
    {
      title: 'ZFS NAS',
      image: nasImg
    },
    {
      title: 'Homelab Cluster',
      image: clusterImg
    },
    {
      title: '3D Printers',
      image: printerImg
    },
    {
      title: 'Drones & Equipment',
      image: dronesImg
    }
  ]
}
