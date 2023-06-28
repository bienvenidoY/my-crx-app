import { defineManifest } from '@crxjs/vite-plugin'

export default defineManifest({
  name: 'create-chrome-ext',
  description: '',
  version: '0.0.1',
  manifest_version: 3,
  icons: {
    '16': 'img/logo-16.png',
    '32': 'img/logo-34.png',
    '48': 'img/logo-48.png',
    '128': 'img/logo-128.png',
  },
  background: {
    service_worker: 'src/background/index.ts',
    type: 'module',
  },
  action: {
    "default_title": "Open ChatGPT"
  },
  permissions: [
    "activeTab"
  ],
  content_scripts: [
    {
      js: ['public/aiprm/content_script.js'],
      "matches": [
        "https://chat.openai.com/*"
      ],
    },
  ],
  web_accessible_resources: [
    {
      resources: [
        'img/logo-16.png',
        'img/logo-34.png',
        'img/logo-48.png',
        'img/logo-128.png',
        "aiprm/config.js",
        "aiprm/inject.js",
        "aiprm/client.js",
        "aiprm/utils.js",
        "aiprm/feedback.js",
        "aiprm/enums.js",
        "aiprm/messages.js",
        "aiprm/rxn.js",
        "aiprm/list.js",
        "aiprm/quota.js",
        "aiprm/readability.js",
        "aiprm/multiselect-dropdown.js"
      ],
      "matches": [
        "https://chat.openai.com/*"
      ],
    },
  ],
})
