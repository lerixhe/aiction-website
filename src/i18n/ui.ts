export const languages = {
  en: 'English',
  zh: '中文',
} as const;

export const defaultLang = 'en';

export type Lang = keyof typeof languages;

export const ui = {
  en: {
    // Nav
    'nav.home': 'Home',
    'nav.docs': 'Docs',
    'nav.changelog': 'Changelog',
    'nav.download': 'Download',

    // Hero
    'hero.title': 'Select text → Trigger AI → Continue in chat',
    'hero.subtitle':
      'A lightweight Chrome extension for getting AI help on selected web content. Supports any OpenAI-compatible endpoint.',
    'hero.cta.install': 'Install from Chrome Web Store',
    'hero.cta.github': 'View on GitHub',

    // Features
    'features.title': 'Features',
    'features.inline.title': 'Inline AI Toolbar',
    'features.inline.desc':
      'Select text on any page, a toolbar appears with configurable actions. No need to switch tabs or copy-paste.',
    'features.chat.title': 'Floating Chat Panel',
    'features.chat.desc':
      'Continue the conversation in a draggable, resizable panel with streaming responses.',
    'features.actions.title': 'Custom Actions',
    'features.actions.desc':
      'Create your own prompt templates with {text} placeholders. Built-in actions for explanation and translation.',
    'features.providers.title': 'Multi-Provider Support',
    'features.providers.desc':
      'OpenAI, Anthropic Claude, Google Gemini, DeepSeek, OpenRouter, or any OpenAI-compatible API.',

    // More Features
    'more.title': 'More Features',
    'more.reasoning': 'Reasoning display — view model thinking process',
    'more.darkmode': 'Dark mode — auto / light / dark theme',
    'more.pdf': 'PDF viewer — built-in PDF viewer with AI assistance',
    'more.backup': 'Backup & restore — export/import settings as JSON',

    // Quick Start
    'quickstart.title': 'Quick Start',
    'quickstart.step1': 'Right-click the extension icon → Options',
    'quickstart.step2': 'Add a model service (API URL + Key + Model)',
    'quickstart.step3': 'Click "Test Connection"',
    'quickstart.step4': 'Select text on any page → click the toolbar → choose an action',

    // Footer
    'footer.github': 'GitHub',
    'footer.docs': 'Documentation',
    'footer.changelog': 'Changelog',
    'footer.license': 'GPL-3.0 License',
    'footer.made': 'Made with ❤️ for developers',

    // Common
    'common.learn_more': 'Learn more',
    'theme.light': 'Light',
    'theme.dark': 'Dark',
    'theme.system': 'System',

    // Privacy
    'privacy.title': 'Privacy Policy - AIction',
    'privacy.description': 'Privacy Policy for the AIction Chrome extension',
    'privacy.heading': 'Privacy Policy',
  },
  zh: {
    // Nav
    'nav.home': '首页',
    'nav.docs': '文档',
    'nav.changelog': '更新日志',
    'nav.download': '下载',

    // Hero
    'hero.title': '选中文本 → 触发 AI → 继续对话',
    'hero.subtitle':
      '轻量级 Chrome 扩展，为网页选中内容提供 AI 辅助。支持任意 OpenAI 兼容端点。',
    'hero.cta.install': '从 Chrome 应用商店安装',
    'hero.cta.github': '在 GitHub 上查看',

    // Features
    'features.title': '功能特性',
    'features.inline.title': '内联 AI 工具栏',
    'features.inline.desc':
      '在任意网页选中文本，工具栏随即出现，提供可配置的 AI 动作。无需切换标签页或复制粘贴。',
    'features.chat.title': '浮动聊天面板',
    'features.chat.desc':
      '在可拖拽、可调整大小的面板中继续对话，支持流式响应。',
    'features.actions.title': '自定义动作',
    'features.actions.desc':
      '创建自己的提示词模板，使用 {text} 占位符。内置解释和翻译动作。',
    'features.providers.title': '多模型支持',
    'features.providers.desc':
      'OpenAI、Anthropic Claude、Google Gemini、DeepSeek、OpenRouter，或任何 OpenAI 兼容 API。',

    // More Features
    'more.title': '更多功能',
    'more.reasoning': '思维链展示 — 查看模型推理过程',
    'more.darkmode': '深色模式 — 自动 / 浅色 / 深色主题',
    'more.pdf': 'PDF 查看器 — 内置 PDF 查看器，支持 AI 辅助',
    'more.backup': '备份恢复 — 以 JSON 格式导入/导出配置',

    // Quick Start
    'quickstart.title': '快速上手',
    'quickstart.step1': '右键扩展图标 → 选项',
    'quickstart.step2': '添加模型服务（API URL + Key + Model）',
    'quickstart.step3': '点击"测试连接"',
    'quickstart.step4': '在任意网页选中文本 → 点击工具栏 → 选择动作',

    // Footer
    'footer.github': 'GitHub',
    'footer.docs': '文档',
    'footer.changelog': '更新日志',
    'footer.license': 'GPL-3.0 许可证',
    'footer.made': '用 ❤️ 为开发者打造',

    // Common
    'common.learn_more': '了解更多',
    'theme.light': '浅色',
    'theme.dark': '深色',
    'theme.system': '跟随系统',

    // Privacy
    'privacy.title': '隐私政策 - AIction',
    'privacy.description': 'AIction Chrome 扩展的隐私政策',
    'privacy.heading': '隐私政策',
  },
} as const;

export type UiKey = keyof (typeof ui)[typeof defaultLang];
