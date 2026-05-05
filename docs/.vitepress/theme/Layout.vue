<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
import { computed } from 'vue'

const { Layout } = DefaultTheme
const { frontmatter } = useData()

const publishRaw = computed(() => {
  const fm = frontmatter.value as Record<string, unknown>
  const v = fm.date ?? fm.publishDate
  if (v == null || v === '') return null
  return String(v)
})

/** ISO date (YYYY-MM-DD) for <time datetime> */
const publishDatetime = computed(() => {
  const raw = publishRaw.value
  if (!raw) return null
  const d = new Date(raw)
  if (Number.isNaN(d.getTime())) return raw
  return d.toISOString().slice(0, 10)
})

const publishDisplay = computed(() => {
  const raw = publishRaw.value
  if (!raw) return null
  const d = new Date(raw)
  if (Number.isNaN(d.getTime())) return raw
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  })
})

const layout = computed(() => frontmatter.value.layout)

const showInDoc = computed(
  () =>
    !!publishDisplay.value &&
    layout.value !== 'home' &&
    layout.value !== 'page'
)

const showInPage = computed(
  () => !!publishDisplay.value && layout.value === 'page'
)

const showInHome = computed(
  () => !!publishDisplay.value && layout.value === 'home'
)
</script>

<template>
  <Layout>
    <template #doc-before>
      <div v-if="showInDoc" class="vp-publish-date">
        <time :datetime="publishDatetime ?? undefined">Published {{ publishDisplay }}</time>
      </div>
    </template>

    <template #page-top>
      <div v-if="showInPage" class="vp-publish-date vp-publish-date--page">
        <time :datetime="publishDatetime ?? undefined">Published {{ publishDisplay }}</time>
      </div>
    </template>

    <template #home-hero-info-after>
      <p v-if="showInHome" class="vp-publish-date vp-publish-date--home">
        <time :datetime="publishDatetime ?? undefined">Published {{ publishDisplay }}</time>
      </p>
    </template>
  </Layout>
</template>
