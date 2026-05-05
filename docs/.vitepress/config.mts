import { execSync } from 'node:child_process'
import { defineConfig } from 'vitepress'

/** VitePress `lastUpdated` shells out to `git`; without Git on PATH, `npm run docs:build` fails with `spawn git ENOENT`. */
function isGitAvailable(): boolean {
  try {
    execSync('git --version', { stdio: 'ignore', timeout: 3000 })
    return true
  } catch {
    return false
  }
}

// GitHub Pages base URL:
// - User/org site (repo name: <username>.github.io): use base: '/'
// - Project site (repo name: anything else): use base: '/<repo-name>/'
//   Example: base: '/my-blog/', trailing slash recommended.
export default defineConfig({
  // Default dark; users can still switch with the theme toggle (when not force-dark).
  appearance: 'dark',
  title: 'Physical AI Engineering Notes',
  description:
    'Robotics Control, ROS 2, Humanoid Systems, and Long-Term Engineering Notes.',
  lang: 'en-US',
  // Project Pages: https://<user>.github.io/<repo>/ → base must be '/<repo>/'
  // User/org site (<user>.github.io repo): use base: '/'
  base: '/lifeops_blog/',
  srcDir: '.',
  lastUpdated: isGitAvailable(),
  themeConfig: {
    siteTitle: 'Physical AI Engineering Notes',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Physical AI Map', link: '/physical-ai-map' },
      { text: 'Tech Logs', link: '/tech-log/' },
      { text: 'Career', link: '/career/' },
      { text: 'Reading', link: '/reading/' },
    ],
    sidebar: {
      '/physical-ai-map': [
        {
          text: 'Physical AI',
          items: [{ text: 'Map & timeline', link: '/physical-ai-map' }],
        },
      ],
      '/tech-log/': [
        {
          text: 'Tech Logs',
          items: [
            { text: 'Overview', link: '/tech-log/' },
            {
              text: 'Network Basic',
              collapsed: true,
              items: [
                { text: 'Section overview', link: '/tech-log/network-basic/' },
                { text: 'Chapter 1', link: '/tech-log/network-basic/chapter-01' },
              ],
            },
            {
              text: 'Imitation Learning',
              collapsed: true,
              items: [
                { text: 'Section overview', link: '/tech-log/imitation-learning/' },
              ],
            },
            {
              text: 'Reinforcement Learning',
              collapsed: true,
              items: [
                { text: 'Section overview', link: '/tech-log/reinforcement-learning/' },
              ],
            },
          ],
        },
      ],
      '/career/': [
        {
          text: 'Career Notes',
          items: [{ text: '개요', link: '/career/' }],
        },
      ],
      '/reading/': [
        {
          text: 'Reading Notes',
          items: [
            { text: 'Overview', link: '/reading/' },
            { text: 'Papers', link: '/reading/papers' },
          ],
        },
      ],
    },
    outline: {
      level: [2, 3],
    },
    search: {
      provider: 'local',
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/harrison2699' }],
    footer: {
      message: 'Built as a long-term engineering archive.',
      copyright: 'Copyright © Physical AI Engineering Notes',
    },
    editLink: {
      pattern: 'https://github.com/harrison2699/lifeops_blog/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },
  },
})
