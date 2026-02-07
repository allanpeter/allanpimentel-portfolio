import diggyImg from '../assets/projects/diggy.svg'
import mavenartImg from '../assets/projects/mavenart.svg'
import quietColorsImg from '../assets/projects/quiet-colors.svg'
import sigesImg from '../assets/projects/siges.svg'
import awsLambdaImg from '../assets/projects/aws-lambda.svg'
import infraIaImg from '../assets/projects/infra-ia.svg'

import optiplexImg from '../assets/gadgets/optiplex.svg'
import nasImg from '../assets/gadgets/nas.svg'
import clusterImg from '../assets/gadgets/cluster.svg'
import printerImg from '../assets/gadgets/3d-printer.svg'
import dronesImg from '../assets/gadgets/drones.svg'

export const skills = [
  {
    title: 'Arquitetura de sistemas',
    description: 'Design de plataformas resilientes, escalaveis e orientadas a automacao.'
  },
  {
    title: 'Desenvolvimento full stack',
    description: 'React, Node.js e integracoes robustas para produtos digitais.'
  },
  {
    title: 'Automacao e IA',
    description: 'n8n, agentes locais e fluxos inteligentes para reduzir esforco manual.'
  },
  {
    title: 'DevOps / Cloud / IaC',
    description: 'Terraform, AWS, CI/CD e observabilidade aplicada.'
  },
  {
    title: 'Homelab e infraestrutura',
    description: 'Proxmox, TrueNAS, ZFS e clusters prontos para IA.'
  },
  {
    title: 'Criacao de SaaS do zero',
    description: 'Pesquisa, MVP, lancamento e escala com foco em eficiencia.'
  },
  {
    title: 'Ferramentas e gadgets',
    description: 'Drones, impressao 3D e prototipagem rapida para produtos fisicos.'
  }
]

export const projects = [
  {
    title: 'DIGGY - Plataforma de Portfolio 3D',
    image: diggyImg,
    summary: 'Experiencias imersivas com modelos 3D, animacoes e narrativa visual.',
    tech: ['React', 'Three.js', 'Node.js'],
    cta: 'Ver mais'
  },
  {
    title: 'MavenArt - Marketplace de pecas 3D',
    image: mavenartImg,
    summary: 'Catalogo inteligente, pagamentos e logistica para criadores.',
    tech: ['Next.js', 'Stripe', 'PostgreSQL'],
    cta: 'Ver mais'
  },
  {
    title: 'Quiet Colors - automacao de livros para KDP',
    image: quietColorsImg,
    summary: 'Pipeline completo de criacao, diagramacao e publicacao automatica.',
    tech: ['Python', 'n8n', 'AWS S3'],
    cta: 'Ver mais'
  },
  {
    title: 'Sistema SIGES - Gestao de Equipamentos de Seguranca',
    image: sigesImg,
    summary: 'Controle de ativos, inspecoes e compliance em tempo real.',
    tech: ['Node.js', 'Oracle', 'React'],
    cta: 'Ver mais'
  },
  {
    title: 'Projetos AWS Lambda corporativos',
    image: awsLambdaImg,
    summary: 'Integracao Oracle + DynamoDB com workloads criticos e escalaveis.',
    tech: ['AWS Lambda', 'DynamoDB', 'Oracle'],
    cta: 'Ver mais'
  },
  {
    title: 'Infra local IA-ready (cluster Proxmox + TrueNAS)',
    image: infraIaImg,
    summary: 'Ambiente local para IA, storage e automacoes com alta disponibilidade.',
    tech: ['Proxmox', 'TrueNAS', 'K3s'],
    cta: 'Ver mais'
  }
]

export const gadgets = [
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
]
