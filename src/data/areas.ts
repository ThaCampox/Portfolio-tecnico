import type { Lang } from '../i18n/ui';

export type AreaId = 'support' | 'infrastructure' | 'security' | 'noc' | 'automation';

type L = Record<Lang, string>;
export interface Area {
  id: AreaId;
  prefix: string; // prefixo do ID do documento, ex.: DOC-SUP-001
  name: L;
  description: L;
  topics: Record<Lang, string[]>;
}

export const areas: Area[] = [
  {
    id: 'support', prefix: 'SUP',
    name: { pt: 'Suporte Técnico', en: 'IT Support' },
    description: { pt: 'Diagnóstico de estações, periféricos e atendimento com escalonamento.', en: 'Workstation and peripheral diagnostics, with escalation procedures.' },
    topics: {
      pt: ['Diagnóstico de computadores que não inicializam', 'Identificação de problemas de lentidão', 'Troubleshooting de dispositivos USB e HID', 'Diagnóstico de impressoras', 'Manutenção preventiva', 'Procedimentos de atendimento e escalonamento'],
      en: ['Diagnosing computers that fail to boot', 'Identifying performance problems', 'USB and HID device troubleshooting', 'Printer diagnostics', 'Preventive maintenance', 'Service and escalation procedures'],
    },
  },
  {
    id: 'infrastructure', prefix: 'INF',
    name: { pt: 'Infraestrutura', en: 'Infrastructure' },
    description: { pt: 'Redes, serviços Windows, monitoramento e documentação de ambiente.', en: 'Networking, Windows services, monitoring and environment documentation.' },
    topics: {
      pt: ['Diagnóstico de conectividade', 'DNS, DHCP, TCP/IP', 'Administração básica de Windows', 'Monitoramento de servidores', 'Análise de firewall', 'Documentação de infraestrutura e inventário'],
      en: ['Connectivity diagnostics', 'DNS, DHCP, TCP/IP', 'Basic Windows administration', 'Server monitoring', 'Firewall analysis', 'Infrastructure documentation and inventory'],
    },
  },
  {
    id: 'security', prefix: 'SOC',
    name: { pt: 'Cybersecurity / SOC', en: 'Cybersecurity / SOC' },
    description: { pt: 'Triagem de alertas, investigação de eventos e agentes XDR.', en: 'Alert triage, event investigation and XDR agents.' },
    topics: {
      pt: ['Análise e classificação de alertas', 'Investigação de eventos', 'Conceitos de SIEM, EDR e XDR', 'MITRE ATT&CK', 'Análise de logs', 'Regras e solicitações de firewall', 'Implantação e troubleshooting de agentes XDR'],
      en: ['Alert analysis and classification', 'Event investigation', 'SIEM, EDR and XDR concepts', 'MITRE ATT&CK', 'Log analysis', 'Firewall rules and requests', 'XDR agent deployment and troubleshooting'],
    },
  },
  {
    id: 'noc', prefix: 'NOC',
    name: { pt: 'NOC', en: 'NOC' },
    description: { pt: 'Disponibilidade, métricas, tratamento de alertas e escalonamento de incidentes.', en: 'Availability, metrics, alert handling and incident escalation.' },
    topics: {
      pt: ['Monitoramento de disponibilidade', 'Análise de indisponibilidade', 'Tratamento de alertas', 'Análise de métricas', 'Escalonamento de incidentes', 'Procedimentos de validação de servidores'],
      en: ['Availability monitoring', 'Outage analysis', 'Alert handling', 'Metrics analysis', 'Incident escalation', 'Server validation procedures'],
    },
  },
  {
    id: 'automation', prefix: 'AUT',
    name: { pt: 'Automação / PowerShell', en: 'Automation / PowerShell' },
    description: { pt: 'Scripts de inventário, diagnóstico e relatórios automatizados.', en: 'Inventory, diagnostics and automated reporting scripts.' },
    topics: {
      pt: ['Inventário de hardware e software', 'Coleta de informações do Windows', 'Diagnóstico automatizado de rede', 'Verificação de serviços', 'Scripts de manutenção', 'Relatórios automatizados'],
      en: ['Hardware and software inventory', 'Windows information gathering', 'Automated network diagnostics', 'Service checks', 'Maintenance scripts', 'Automated reports'],
    },
  },
];

export const getArea = (id: string) => areas.find((a) => a.id === id)!;
