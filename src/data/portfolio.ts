import mockflowImg from '../assets/projects/mockflow.svg'
import n8nImg from '../assets/projects/n8n.svg'
import sistemasolarImg from '../assets/projects/sistemasolar.svg'
import trocaiImg from '../assets/projects/trocai.svg'
import financeiroImg from '../assets/projects/financeiro.svg'

import optiplexImg from '../assets/gadgets/optiplex.svg'
import nasImg from '../assets/gadgets/nas.svg'
import clusterImg from '../assets/gadgets/cluster.svg'
import printerImg from '../assets/gadgets/3d-printer.svg'
import dronesImg from '../assets/gadgets/drones.svg'

export const skills = {
  pt: [
    {
      title: 'Arquitetura de sistemas',
      description: 'Design de sistemas escaláveis, resilientes e orientados à automação e à eficiência operacional.'
    },
    {
      title: 'Desenvolvimento Full Stack',
      description: 'Construção de SaaS e sistemas com Node.js, React e integrações robustas.'
    },
    {
      title: 'Automação de processos',
      description: 'n8n, workflows e integrações para eliminar tarefas manuais e aumentar produtividade.'
    },
    {
      title: 'Infraestrutura & Cloud',
      description: 'AWS, Proxmox e gestão de ambientes com foco em performance, custo e controle.'
    },
    {
      title: 'DevOps & Entrega',
      description: 'CI/CD, observabilidade e deploy rápido com foco em confiabilidade e entrega contínua.'
    },
    {
      title: 'Homelab & serviços locais',
      description: 'Execução de serviços locais, clusters e experimentação de arquiteturas em ambiente próprio.'
    },
    {
      title: 'Construção de SaaS',
      description: 'Do MVP à escala, com foco em entrega rápida de valor e evolução contínua.'
    },
    {
      title: 'Tecnologia aplicada',
      description: 'Impressão 3D, drones, Arduino e automação residencial com abordagem prática.'
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
      title: 'Mockflow — preparação para entrevistas técnicas',
      image: mockflowImg,
      summary: 'Plataforma que conecta desenvolvedores em início de carreira a mentores para praticar entrevistas e ganhar confiança no processo seletivo.',
      cta: 'Visitar',
      ctaUrl: 'https://mockflow.com.br'
    },
    {
      title: 'Case interno: captura de contatos',
      image: n8nImg,
      summary: 'O formulário deste portfólio envia cada contato para um webhook no n8n, criando uma entrada única para novos leads.',
      cta: 'Case próprio'
    },
    {
      title: 'Sistema Solar - Visualizador 3D',
      image: sistemasolarImg,
      summary: 'Experiência interativa que transforma conteúdo científico em uma forma mais visual, explorável e fácil de entender.',
      cta: 'Explorar',
      ctaUrl: 'https://sistemasolar.apps.allanpimentel.com'
    },
    {
      title: 'Trocai - Plataforma de Trocas',
      image: trocaiImg,
      summary: 'Marketplace que permite a troca de itens entre pessoas sem depender de transações em dinheiro.',
      cta: 'Visitar',
      ctaUrl: 'https://trocai.app'
    },
    {
      title: 'Financeiro - Controle de Capital',
      image: financeiroImg,
      summary: 'Ferramenta para organizar entradas e saídas, acompanhar o saldo e distribuir aportes por regras percentuais.',
      cta: 'Acessar',
      ctaUrl: 'https://financeiro.apps.allanpimentel.com'
    }
  ],
  en: [
    {
      title: 'Mockflow — technical interview preparation',
      image: mockflowImg,
      summary: 'A platform that connects early-career developers with mentors to practice interviews and build confidence in the hiring process.',
      cta: 'Visit',
      ctaUrl: 'https://mockflow.com.br'
    },
    {
      title: 'Internal case: contact capture',
      image: n8nImg,
      summary: 'This portfolio\'s form sends every contact to an n8n webhook, creating a single entry point for incoming leads.',
      cta: 'Own case'
    },
    {
      title: 'Solar System - 3D Visualizer',
      image: sistemasolarImg,
      summary: 'An interactive experience that turns science content into something more visual, explorable, and easier to understand.',
      cta: 'Explore',
      ctaUrl: 'https://sistemasolar.apps.allanpimentel.com'
    },
    {
      title: 'Trocai - Item Swap Platform',
      image: trocaiImg,
      summary: 'A marketplace that lets people exchange items without relying on cash transactions.',
      cta: 'Visit',
      ctaUrl: 'https://trocai.app'
    },
    {
      title: 'Financeiro - Capital Tracker',
      image: financeiroImg,
      summary: 'A tool to organize income and expenses, monitor balance, and allocate investments by percentage rules.',
      cta: 'Access',
      ctaUrl: 'https://financeiro.apps.allanpimentel.com'
    }
  ]
}

export const infrastructure = {
  pt: {
    description: 'Ambiente com foco em automação, observabilidade e controle total da infraestrutura.',
    categories: [
      {
        title: 'Virtualização & Orquestração',
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
        title: 'Rede & Segurança',
        items: ['AdGuard Home', 'Vaultwarden']
      },
      {
        title: 'Serviços & Automação',
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
