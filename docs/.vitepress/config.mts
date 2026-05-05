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
  title: 'Physical AI Engineering Notes',
  description:
    'Robotics Control, ROS 2, Humanoid Systems, and Long-Term Engineering Notes — Harrison Woo',
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
      { text: 'About', link: '/about' },
      { text: 'Tech Logs', link: '/tech-log/' },
      { text: 'Articles', link: '/articles/' },
      { text: 'Projects', link: '/projects/' },
      { text: 'Career', link: '/career/' },
      { text: 'Reading', link: '/reading/' },
    ],
    sidebar: {
      '/tech-log/': [
        {
          text: 'Tech Logs',
          items: [
            { text: 'Overview', link: '/tech-log/' },
            { text: '2026-W18', link: '/tech-log/2026/2026-w18' },
          ],
        },
      ],
      '/articles/': [
        {
          text: 'Articles',
          items: [
            { text: 'Overview', link: '/articles/' },
            { text: 'Robotics Control', link: '/articles/robotics-control/' },
            { text: 'ROS 2', link: '/articles/ros2/' },
            { text: 'Physical AI', link: '/articles/physical-ai/' },
            { text: 'System Engineering', link: '/articles/system-engineering/' },
          ],
        },
      ],
      '/projects/': [
        {
          text: 'Projects',
          items: [
            { text: 'Overview', link: '/projects/' },
            { text: 'AI Worker', link: '/projects/ai-worker' },
            { text: 'Cyclo Framework', link: '/projects/cyclo-framework' },
            { text: 'Robot Control', link: '/projects/robot-control' },
            { text: 'Data Pipeline', link: '/projects/data-pipeline' },
          ],
        },
      ],
      '/career/': [
        {
          text: 'Career Notes',
          items: [
            { text: 'Overview', link: '/career/' },
            { text: 'Long-Term Roadmap', link: '/career/long-term-roadmap' },
          ],
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
    socialLinks: [
      { icon: 'github', link: 'https://github.com/harrison2699' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/harrison-woo' },
    ],
    footer: {
      message: 'Built as a long-term engineering archive.',
      copyright: 'Copyright © Harrison Woo',
    },
    editLink: {
      pattern: 'https://github.com/harrison2699/lifeops_blog/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },
  },
})
