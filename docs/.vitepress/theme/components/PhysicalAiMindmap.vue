<script setup lang="ts">
import { onMounted, ref } from 'vue'

/** Mermaid mindmap — tree layout; pair with Connected Papers for citation graphs. */
const definition = `mindmap
  root((Physical AI))
    Mobile bimanual hub
      Whole-body teleoperation
      Low-cost replicated hardware
      Base plus dual arms coordination
    Learning from demonstrations
      Behavior cloning on robot traces
      Action chunking style policies
      Bridging to VLA style models
    Data and evaluation
      Long horizon household style tasks
      Real teleop and logged states
      Sim checks before field runs
    Systems and deployment
      ROS 2 integration and safety stops
      Latency aware control loops
    Neighbor themes
      Fixed-base dexterity precedents
      Navigation plus manipulation overlap
    Open directions
      Sim to real under hardware drift
      Robust multi-hour autonomy
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
  <div class="physical-ai-mindmap">
    <p v-if="loading" class="physical-ai-mindmap__loading">Rendering mind map…</p>
    <p v-if="err" class="physical-ai-mindmap__error">{{ err }}</p>
    <div
      ref="anchor"
      class="physical-ai-mindmap__canvas"
      role="img"
      aria-label="Physical AI and mobile bimanual manipulation theme mind map"
    />
  </div>
</template>

<style scoped>
.physical-ai-mindmap {
  margin: 1rem 0 2rem;
  padding: 1rem;
  border-radius: 12px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
  overflow-x: auto;
}

.physical-ai-mindmap__loading,
.physical-ai-mindmap__error {
  margin: 0 0 0.75rem;
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
}

.physical-ai-mindmap__error {
  color: var(--vp-c-brand-1);
}

.physical-ai-mindmap__canvas :deep(svg) {
  display: block;
  max-width: 100%;
  height: auto;
  margin: 0 auto;
}
</style>
