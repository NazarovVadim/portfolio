import { assetPath } from '../lib/assets';

export interface MarqueeImage {
  id: string;
  src: string;
  alt: string;
}

const image = (id: string, filename: string, alt: string): MarqueeImage => ({
  id,
  src: assetPath(`assets/images/marquee/${filename}`),
  alt,
});

export const marqueeRowOne: readonly MarqueeImage[] = [
  image('fullstack', 'fullstack.svg', 'Полный цикл разработки продукта'),
  image('backend-api', 'backend-api.svg', 'Backend и API разработка'),
  image('frontend-ui', 'frontend-ui.svg', 'Frontend и интерфейсы'),
  image('ecommerce', 'ecommerce.svg', 'Разработка интернет-магазинов'),
  image('telegram-bots', 'telegram-bots.svg', 'Разработка Telegram-ботов'),
  image('onec-integration', 'onec-integration.svg', 'Интеграции с 1С'),
  image('admin-panel', 'admin-panel.svg', 'Административные панели'),
  image('database', 'database.svg', 'Проектирование баз данных'),
  image('payments', 'payments.svg', 'Интеграции онлайн-оплаты'),
  image('devops', 'devops.svg', 'DevOps и доставка приложений'),
  image('crm', 'crm.svg', 'Разработка и интеграция CRM'),
] as const;

export const marqueeRowTwo: readonly MarqueeImage[] = [
  image('automation', 'automation.svg', 'Автоматизация бизнес-процессов'),
  image('webhooks', 'webhooks.svg', 'Webhook-интеграции сервисов'),
  image('performance', 'performance.svg', 'Оптимизация производительности'),
  image('responsive', 'responsive.svg', 'Адаптивные интерфейсы'),
  image('testing', 'testing.svg', 'Автоматизированное тестирование'),
  image('cloud', 'cloud.svg', 'Облачная инфраструктура'),
  image('analytics', 'analytics.svg', 'Продуктовая аналитика'),
  image('integrations', 'integrations.svg', 'Интеграции бизнес-систем'),
  image('architecture', 'architecture.svg', 'Архитектура приложений'),
  image('security', 'security.svg', 'Безопасность и надёжность'),
] as const;
