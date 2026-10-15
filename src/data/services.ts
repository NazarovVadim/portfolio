export interface Service {
  number: string;
  name: string;
  description: string;
  tags: readonly string[];
}

export const services: readonly Service[] = [
  {
    number: '01',
    name: 'Backend-разработка',
    description:
      'Проектирование серверной части, API, баз данных, интеграций и бизнес-логики для надёжных веб-сервисов.',
    tags: ['Node.js', 'REST API', 'SQL', 'Architecture'],
  },
  {
    number: '02',
    name: 'Frontend-разработка',
    description:
      'Адаптивные интерфейсы, личные кабинеты и административные панели с вниманием к скорости и удобству.',
    tags: ['React', 'TypeScript', 'UI / UX', 'Performance'],
  },
  {
    number: '03',
    name: 'Telegram-боты',
    description:
      'Боты для автоматизации заявок, продаж, поддержки, уведомлений и внутренних процессов компании.',
    tags: ['Bot API', 'Webhooks', 'Payments', 'Automation'],
  },
  {
    number: '04',
    name: 'Интеграции с 1С',
    description:
      'Обмен данными между сайтами, CRM, каталогами, складскими системами и конфигурациями 1С.',
    tags: ['1С', 'CRM', 'Catalog sync', 'Data exchange'],
  },
  {
    number: '05',
    name: 'Запуск и поддержка',
    description:
      'Развёртывание проектов, настройка окружения, мониторинг, развитие функциональности и техническая поддержка.',
    tags: ['Docker', 'CI / CD', 'Monitoring', 'Support'],
  },
] as const;
