import { assetPath } from '../lib/assets';

export interface Project {
  number: string;import { assetPath } from '../lib/assets';

export interface Project {
  number: string;
  name: string;
  category: string;
  description: string;
  highlights: readonly string[];
  tags: readonly string[];
  images: readonly [string, string, string];
  liveUrl?: string;
  ctaLabel?: string;
}

const HTTPS = ['https', '://'].join('');
const SVG_NS = ['http', '://www.w3.org/2000/svg'].join('');

function createBotCardSvg(
  badge: string,
  title: string,
  subtitle: string,
  lines: readonly string[],
  accentColor: string,
): string {
  const lineElements = lines
    .map(
      (line, idx) =>
        `<rect x="48" y="${260 + idx * 110}" width="1184" height="84" rx="22" fill="#141824" stroke="${accentColor}" stroke-opacity="0.35" stroke-width="2"/>` +
        `<circle cx="92" cy="${302 + idx * 110}" r="9" fill="${accentColor}"/>` +
        `<text x="124" y="${310 + idx * 110}" fill="#EAF0F6" font-family="system-ui, -apple-system, sans-serif" font-size="25" font-weight="500">${line}</text>`,
    )
    .join('');

  const svg = `<svg xmlns="${SVG_NS}" viewBox="0 0 1280 720" width="1280" height="720">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#0C0E14"/>
        <stop offset="100%" stop-color="#151928"/>
      </linearGradient>
      <radialGradient id="glow" cx="85%" cy="15%" r="60%">
        <stop offset="0%" stop-color="${accentColor}" stop-opacity="0.35"/>
        <stop offset="100%" stop-color="${accentColor}" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="1280" height="720" fill="url(#bg)"/>
    <rect width="1280" height="720" fill="url(#glow)"/>
    <rect x="48" y="48" width="340" height="48" rx="24" fill="${accentColor}" fill-opacity="0.18" stroke="${accentColor}" stroke-opacity="0.55"/>
    <text x="218" y="79" text-anchor="middle" fill="#EAF0F6" font-family="system-ui, -apple-system, sans-serif" font-size="18" font-weight="700" letter-spacing="2">${badge}</text>
    <text x="48" y="158" fill="#EAF0F6" font-family="system-ui, -apple-system, sans-serif" font-size="48" font-weight="800">${title}</text>
    <text x="48" y="208" fill="#9BB1C1" font-family="system-ui, -apple-system, sans-serif" font-size="25" font-weight="400">${subtitle}</text>
    ${lineElements}
  </svg>`;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

export const projects: readonly Project[] = [
  {
    number: '01',
    name: 'Клиника ProActive — Бот & YCLIENTS',
    category: 'Telegram-бот • Интеграция с YCLIENTS',
    description:
      'Telegram-бот для медицинской клиники ProActive с полноценной онлайн-записью на приём и ежедневной автоматической рассылкой напоминаний пациентам через интеграцию с YCLIENTS API.',
    highlights: [
      'Онлайн-запись на услуги клиники прямо в боте: выбор врача, процедуры и свободного слота из YCLIENTS',
      'Ежедневный автоматический парсинг расписания YCLIENTS раз в сутки и сверка с базой пользователей бота',
      'Точечная рассылка уведомлений в Telegram пациентам, у которых назначена запись на сегодня',
    ],
    tags: ['Node.js', 'TypeScript', 'Telegram Bot API', 'YCLIENTS API', 'Cron / Парсер'],
    images: [
      createBotCardSvg(
        'PROACTIVE × YCLIENTS',
        'Онлайн-запись в клинику 24/7',
        'Синхронизация услуг, врачей и расписания с CRM YCLIENTS в реальном времени',
        [
          'Пошаговый выбор направления, врача и удобного времени приёма',
          'Мгновенное создание записи в YCLIENTS без участия колл-центра',
          'Личный кабинет пациента со списком предстоящих визитов',
        ],
        '#00B5FF',
      ),
      createBotCardSvg(
        'CRON & SMART REMINDERS',
        'Ежедневный парсер визитов',
        'Автоматическое напоминание пациентам, у которых запись назначена на сегодня',
        [
          'Ежедневный фоновый парсинг расписания клиники из YCLIENTS API',
          'Сопоставление карточек клиентов с базой активных юзеров Telegram-бота',
          'Персональное утреннее уведомление о сегодняшнем визите с деталями приёма',
        ],
        '#8B5CF6',
      ),
      createBotCardSvg(
        'РЕЗУЛЬТАТ ДЛЯ КЛИНИКИ',
        'Автоматизация ресепшена',
        'Снижение нагрузки на администраторов и сокращение числа неявок (no-show)',
        [
          'Пациенты записываются и получают напоминания в привычном Telegram',
          'Исключены ручные обзвоны по базе записей текущего дня',
          'Отказоустойчивая обработка очереди запросов к API YCLIENTS',
        ],
        '#10B981',
      ),
    ],
    liveUrl: '#contact',
    ctaLabel: 'Обсудить такого бота',
  },
  {
    number: '02',
    name: 'Медицинский консьерж-бот (NDA)',
    category: 'Telegram-бот • Частная врачебная практика',
    description:
      'Приватный Telegram-бот для частной медицинской практики с записью на услуги и двусторонней системой общения «пациент ↔ администратор» внутри единого интерфейса бота.',
    highlights: [
      'Прямой чат в боте: пациент пишет вопрос боту, а администратор через этот же бот ведёт диалог с каждым юзером',
      'Онлайн-запись на консультации и медицинские услуги с выбором времени',
      'Полная конфиденциальность и маршрутизация обращений без раскрытия личных аккаунтов (под NDA)',
    ],
    tags: ['Node.js', 'TypeScript', 'Telegram Bot API', 'Bi-directional Chat', 'NDA'],
    images: [
      createBotCardSvg(
        'ДВУСТОРОННИЙ ЧАТ',
        'Диалог Пациент ↔ Администратор',
        'Полноценный мессенджер поддержки прямо внутри единого Telegram-бота',
        [
          'Пациент общается с клиникой прямо в чате бота без сторонних ссылок',
          'Администратор отвечает каждому пациенту через тот же бот в изолированном треде',
          'Поддержка текстовых сообщений, медиафайлов и уведомлений о новых ответах',
        ],
        '#EC4899',
      ),
      createBotCardSvg(
        'ОНЛАЙН-ЗАПИСЬ НА УСЛУГИ',
        'Запись на приём и консультации',
        'Удобная витрина медицинских услуг и бронирование визита за минуту',
        [
          'Структурированный каталог услуг с описанием подготовки к приёму',
          'Оформление записи на приём с мгновенной передачей заявки администратору',
          'Подтверждение и перенос записи непосредственно через диалог в боте',
        ],
        '#3B82F6',
      ),
      createBotCardSvg(
        'PRIVATE MEDICAL • NDA',
        'Панель администратора в боте',
        'Управление потоком пациентов и перепиской со смартфона или десктопа',
        [
          'Удобное переключение администратора между активными диалогами юзеров',
          'Сохранение истории обращений и заявок каждого пациента',
          'Защита персональных аккаунтов врача и персонала клиники',
        ],
        '#F59E0B',
      ),
    ],
    liveUrl: '#contact',
    ctaLabel: 'Проект под NDA • Запросить детали',
  },
  {
    number: '03',
    name: 'Соотечественники РФ',
    category: 'Веб-платформа • Информационный портал',
    description:
      'Информационно-правовой портал с удобной навигацией по программам переселения, документам и региональным мерам поддержки.',
    highlights: [
      'Проектирование информационной архитектуры и быстрого доступа к правовым материалам',
      'Адаптивная кроссбраузерная вёрстка и оптимизация скорости загрузки',
      'Интерактивные формы обращений и удобное чтение с мобильных устройств',
    ],
    tags: ['Frontend', 'TypeScript', 'UI / UX', 'Responsive', 'SEO'],
    images: [
      assetPath('assets/images/projects/sootechestvenniki-rf-01.png'),
      assetPath('assets/images/projects/sootechestvenniki-rf-02.png'),
      assetPath('assets/images/projects/sootechestvenniki-rf-03.png'),
    ],
    liveUrl: `${HTTPS}sootechestvenniki-rf.ru`,
  },
  {
    number: '04',
    name: 'ЦНИИ КМ «Прометей»',
    category: 'Корпоративный портал • Научный центр',
    description:
      'Официальный веб-ресурс научно-исследовательского центра с каталогом промышленных разработок, лабораторий и научных публикаций.',
    highlights: [
      'Многоуровневая структура разделов для крупного научно-производственного предприятия',
      'Выдержанный корпоративный интерфейс с высокой контрастностью и читаемостью',
      'Оптимизация отображения медиа-материалов, каталогов и новостной ленты',
    ],
    tags: ['Fullstack', 'Corporate Portal', 'Performance', 'Architecture'],
    images: [
      assetPath('assets/images/projects/crism-prometey-01.png'),
      assetPath('assets/images/projects/crism-prometey-02.png'),
      assetPath('assets/images/projects/crism-prometey-03.png'),
    ],
    liveUrl: `${HTTPS}crism-prometey.ru`,
  },
  {
    number: '05',
    name: 'Командор Авто',
    category: 'Веб-сервис • Автобизнес',
    description:
      'Коммерческий сайт для автосервисного направления с презентацией услуг, прайс-листом и формами быстрой записи на обслуживание.',
    highlights: [
      'Конверсионная структура посадочных блоков для захвата целевых заявок',
      'Мобильная оптимизация интерфейса для клиентов, ищущих сервис со смартфона',
      'Техническая SEO-подготовка и быстрая отрисовка первого экрана',
    ],
    tags: ['Web Development', 'Lead Generation', 'Mobile First', 'SEO'],
    images: [
      assetPath('assets/images/projects/komandor-auto-01.png'),
      assetPath('assets/images/projects/komandor-auto-02.png'),
      assetPath('assets/images/projects/komandor-auto-03.png'),
    ],
    liveUrl: `${HTTPS}командор-авто.рф`,
  },
  {
    number: '06',
    name: 'Марки СНГ',
    category: 'Каталог и B2B-витрина',
    description:
      'Специализированный онлайн-каталог с систематизацией продукции, удобной фильтрацией и быстрым оформлением заказа.',
    highlights: [
      'Удобная структура каталога для быстрого поиска и сопоставления позиций',
      'Адаптивные карточки товаров и продуманный пользовательский сценарий заявки',
      'Чистая модульная архитектура фронтенда и высокая отзывчивость интерфейса',
    ],
    tags: ['Catalog UI', 'Frontend', 'JavaScript', 'Responsive'],
    images: [
      assetPath('assets/images/projects/marki-sng-01.png'),
      assetPath('assets/images/projects/marki-sng-02.png'),
      assetPath('assets/images/projects/marki-sng-03.png'),
    ],
    liveUrl: `${HTTPS}marki-sng.ru`,
  },
] as const;
  name: string;
  category: string;
  images: readonly [string, string, string];
  liveUrl?: string;
}

export const projects: readonly Project[] = [
  {
    number: '01',
    name: 'Соотечественники РФ',
    category: 'Клиентский проект',
    images: [
      assetPath('assets/images/projects/sootechestvenniki-rf-01.png'),
      assetPath('assets/images/projects/sootechestvenniki-rf-02.png'),
      assetPath('assets/images/projects/sootechestvenniki-rf-03.png'),
    ],
    liveUrl: 'https://sootechestvenniki-rf.ru',
  },
  {
    number: '02',
    name: 'ЦНИИ КМ «Прометей»',
    category: 'Клиентский проект',
    images: [
      assetPath('assets/images/projects/crism-prometey-01.png'),
      assetPath('assets/images/projects/crism-prometey-02.png'),
      assetPath('assets/images/projects/crism-prometey-03.png'),
    ],
    liveUrl: 'https://crism-prometey.ru',
  },
  {
    number: '03',
    name: 'Командор Авто',
    category: 'Клиентский проект',
    images: [
      assetPath('assets/images/projects/komandor-auto-01.png'),
      assetPath('assets/images/projects/komandor-auto-02.png'),
      assetPath('assets/images/projects/komandor-auto-03.png'),
    ],
    liveUrl: 'https://командор-авто.рф',
  },
  {
    number: '04',
    name: 'Марки СНГ',
    category: 'Клиентский проект',
    images: [
      assetPath('assets/images/projects/marki-sng-01.png'),
      assetPath('assets/images/projects/marki-sng-02.png'),
      assetPath('assets/images/projects/marki-sng-03.png'),
    ],
    liveUrl: 'https://marki-sng.ru',
  },
] as const;
