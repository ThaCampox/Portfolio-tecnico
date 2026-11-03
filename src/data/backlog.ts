import type { Lang } from '../i18n/ui';
import type { AreaId } from './areas';

export interface BacklogItem {
  order: number;
  title: Record<Lang, string>;
  area: AreaId;
  priority: 'high' | 'medium';
  status: 'planned' | 'in-progress';
  /** slug do documento correspondente em src/content/docs/<lang>/ (opcional) */
  doc?: string;
}

export const backlog: BacklogItem[] = [
  { order: 1, title: { pt: 'Diagnóstico de dispositivos USB com PowerShell', en: 'USB device diagnostics with PowerShell' }, area: 'support', priority: 'high', status: 'in-progress', doc: 'doc-sup-001-usb-hid' },
  { order: 2, title: { pt: 'Diagnóstico de computadores lentos', en: 'Diagnosing slow computers' }, area: 'support', priority: 'high', status: 'planned' },
  { order: 3, title: { pt: 'Diagnóstico de conectividade de rede', en: 'Network connectivity diagnostics' }, area: 'infrastructure', priority: 'high', status: 'planned' },
  { order: 4, title: { pt: 'Inventário de hardware via PowerShell', en: 'Hardware inventory via PowerShell' }, area: 'automation', priority: 'high', status: 'planned' },
  { order: 5, title: { pt: 'Implantação e troubleshooting de agente XDR', en: 'XDR agent deployment and troubleshooting' }, area: 'security', priority: 'high', status: 'planned' },
  { order: 6, title: { pt: 'Análise de alertas e investigação SOC', en: 'Alert analysis and SOC investigation' }, area: 'security', priority: 'high', status: 'planned' },
  { order: 7, title: { pt: 'Monitoramento de disponibilidade de servidores', en: 'Server availability monitoring' }, area: 'noc', priority: 'medium', status: 'planned' },
  { order: 8, title: { pt: 'Análise técnica de regras de firewall', en: 'Technical analysis of firewall rules' }, area: 'infrastructure', priority: 'medium', status: 'planned' },
  { order: 9, title: { pt: 'Script de diagnóstico automatizado do Windows', en: 'Automated Windows diagnostics script' }, area: 'automation', priority: 'medium', status: 'planned' },
  { order: 10, title: { pt: 'Laboratório de monitoramento de infraestrutura', en: 'Infrastructure monitoring lab' }, area: 'noc', priority: 'medium', status: 'planned' },
];
