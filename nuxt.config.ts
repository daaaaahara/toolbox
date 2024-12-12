// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  app: {
    // デフォルトだとドメインルートから読み込もうとするが
    // GithubPagesの場合は `*.github.io/リポジトリ名` となるため、リポジトリ名をbaseURLにする
    baseURL: '/toolbox/',
    head: {
      title: 'daaaaahara dev toolbox',
      meta: [{ name: 'description', content: 'daaaaahara dev toolbox' }],
      link: [{ rel: 'icon', href: '/icon.png' }],
    },
  },
  components: {
    global: true,
    dirs: ['~/components']
  },
  modules: ['@nuxt/ui']
})
