import packageJson from './package.json';

/**
 * After changing, please reload the extension at `chrome://extensions`
 */
const manifest: chrome.runtime.ManifestV3 = {
  manifest_version: 3,
  name: 'Fresh Inbox',
  version: '1.0.0',
  description: 'Clean Inbox, Total Privacy: Fresh Inbox Delivers Both.',
  background: {
    service_worker: 'src/pages/background/index.js',
    type: 'module',
  },
  permissions: ['activeTab', 'identity', 'storage', 'activeTab'],
  action: {
    default_popup: 'src/pages/popup/index.html',
    default_icon: 'icon-128.png',
    default_title: 'Fresh Inbox',
  },
  icons: {
    '128': 'icon-128.png',
  },
  content_scripts: [
    {
      matches: ['https://mail.google.com/mail/*'],
      js: ['src/pages/content/index.js'],
      // KEY for cache invalidation
      css: ['assets/css/contentStyle<KEY>.chunk.css'],
    },
  ],
  web_accessible_resources: [
    {
      resources: ['assets/js/*.js', 'assets/css/*.css', 'icon-128.png', 'icon-34.png'],
      matches: ['*://*/*'],
    },
  ],

  key: `MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA7+z3sOjS66zHoBbLlR1nFrm0l1sXmedfBZqzGtzqp6OIlJPCF6DB3y+914cf/3TLf3LIf3LpgtSXTsk1E+isXCoIDEx881qtTsbK/uxG39mVDBlBI2rLxNSBqnZCFvaO4X9m2L6gRAZEv6vUnn7rgPLLslXGLvlXh+6l17kS1iSbAuTWZwKVBpTW0Lm26AT1avUzb+a4I7T4JkAt/6dysMk+MsDbMwKwWgw/KERI9j707wyuYUP9lXdN7SWtuooaLn9ZqhD3dSWrMIOqnTvfmq3onRWudThlFnblOFPBvmjnI64NAl9Mo/nKspJJPmY1SxhkobW74g7jlnElse4HGwIDAQAB`,
};

export default manifest;
