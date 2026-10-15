import { assetPath } from '../lib/assets';

export interface MarqueeImage {
  id: string;
  src: string;
  alt: string;
}

const image = (id: string, path: string, alt: string): MarqueeImage => ({
  id,
  src: assetPath(`assets/images/${path}`),
  alt,
});

export const marqueeRowOne: readonly MarqueeImage[] = [
  image(
    'sootechestvenniki-hero',
    'projects/sootechestvenniki-rf-01.png',
    'Проект Соотечественники РФ',
  ),
  image('backend-api', 'marquee/backend-api.svg', 'Backend и API разработка'),
  image('prometey-main', 'projects/crism-prometey-01.png', 'Проект ЦНИИ КМ Прометей'),
  image('frontend-ui', 'marquee/frontend-ui.svg', 'Frontend и интерфейсы'),
  image('komandor-main', 'projects/komandor-auto-01.png', 'Проект Командор Авто'),
  image('telegram-bots', 'marquee/telegram-bots.svg', 'Разработка Telegram-ботов'),
  image('marki-main', 'projects/marki-sng-01.png', 'Проект Марки СНГ'),
  image('onec-integration', 'marquee/onec-integration.svg', 'Интеграции с 1С'),
  image(
    'sootechestvenniki-content',
    'projects/sootechestvenniki-rf-02.png',
    'Интерфейс проекта Соотечественники РФ',
  ),
  image('database', 'marquee/database.svg', 'Проектирование баз данных'),
  image('prometey-content', 'projects/crism-prometey-02.png', 'Интерфейс проекта Прометей'),
] as const;

export const marqueeRowTwo: readonly MarqueeImage[] = [
  image('komandor-catalog', 'projects/komandor-auto-02.png', 'Каталог проекта Командор Авто'),
  image('devops', 'marquee/devops.svg', 'DevOps и доставка приложений'),
  image('marki-catalog', 'projects/marki-sng-02.png', 'Каталог проекта Марки СНГ'),
  image('automation', 'marquee/automation.svg', 'Автоматизация бизнес-процессов'),
  image(
    'sootechestvenniki-details',
    'projects/sootechestvenniki-rf-03.png',
    'Раздел проекта Соотечественники РФ',
  ),
  image('security', 'marquee/security.svg', 'Безопасность и надёжность'),
  image('prometey-details', 'projects/crism-prometey-03.png', 'Раздел проекта Прометей'),
  image('fullstack', 'marquee/fullstack.svg', 'Полный цикл разработки продукта'),
  image('komandor-details', 'projects/komandor-auto-03.png', 'Раздел проекта Командор Авто'),
  image('marki-details', 'projects/marki-sng-03.png', 'Раздел проекта Марки СНГ'),
] as const;
