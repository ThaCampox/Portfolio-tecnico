import type { Lang } from '../i18n/ui';

type L = Record<Lang, string>;
export interface Entry { title: L; place?: string; period?: string; description?: L }

// Preencha com suas informações reais. Nada aqui é inventado.
export const profile = {
  name: 'Thaina Campos',
  role: { pt: 'Suporte de TI · Infraestrutura · Cybersecurity', en: 'IT Support · Infrastructure · Cybersecurity' } as L,
  summary: {
    pt: 'Profissional de TI com foco em operações, infraestrutura e segurança. Este portfólio reúne procedimentos e laboratórios documentados passo a passo.',
    en: 'IT professional focused on operations, infrastructure and security. This portfolio gathers procedures and labs documented step by step.',
  } as L,
  links: {
    github: 'https://github.com/ThaCampox',
    linkedin: 'https://www.linkedin.com/in/SEU-PERFIL',
    whatsapp: 'https://wa.me/11933367309',
  },
  skills: ['Windows', 'PowerShell', 'TCP/IP', 'DNS / DHCP', 'SIEM / EDR / XDR', 'MITRE ATT&CK', 'Firewall', 'Monitoramento'],
  experience: [] as Entry[],
  education: [] as Entry[],
  certifications: [] as Entry[],
};
