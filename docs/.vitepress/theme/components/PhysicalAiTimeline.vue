<script setup lang="ts">
import { onMounted, ref } from 'vue'

/** Mermaid timeline — edit sections as quarters evolve. */
const definition = `timeline
    title Physical AI / embodied systems (curated, illustrative)
    section 2022 to 2023
        Simulation and datasets at scale : GPU sims, domain randomization debates
        Imitation stacks mature on fixed arms : BC, diffusion pilots in labs
    section 2024
        VLMs meet planners and policies : language-conditioned control gains traction
        Humanoid hardware race heats up : platforms and teleop rigs proliferate
    section 2025
        VLA style policies on real hardware : latency and safety become first-class
        Mobile bimanual plus whole-body teleop : replication-friendly kits spread
    section 2026 Q1
        Long horizon reliability and OOD : evaluation and ops matter as much as models
`

const anchor = ref<HTMLElement | null>(null)
const loading = ref(true)
const err = ref('')

onMounted(async () => {
  const el = anchor.value
  if (!el) return
  try {
    const mermaid = (await import('mermaid')).default
    mermaid.initialize({
      startOnLoad: false,
      theme: 'dark',
      securityLevel: 'loose',
      fontFamily: 'var(--vp-font-family-base)',
    })
    const node = document.createElement('pre')
    node.className = 'mermaid'
    node.textContent = definition
    el.appendChild(node)
    await mermaid.run({ nodes: [node] })
  } catch (e: unknown) {
    err.value = e instanceof Error ? e.message : String(e)
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div class="physical-ai-timeline">
    <p v-if="loading" class="physical-ai-timeline__loading">Rendering timeline…</p>
    <p v-if="err" class="physical-ai-timeline__error">{{ err }}</p>
    <div
      ref="anchor"
      class="physical-ai-timeline__canvas"
      role="img"
      aria-label="Physical AI curated timeline"
    />
  </div>
</template>

<style scoped>
.physical-ai-timeline {
  margin: 1rem 0 2rem;
  padding: 1rem;
  border-radius: 12px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
  overflow-x: auto;
}

.physical-ai-timeline__loading,
.physical-ai-timeline__error {
  margin: 0 0 0.75rem;
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
}

.physical-ai-timeline__error {
  color: var(--vp-c-brand-1);
}

.physical-ai-timeline__canvas :deep(svg) {
  display: block;
  max-width: 100%;
  height: auto;
  margin: 0 auto;
}
</style>
