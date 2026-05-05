---
date: 2026-05-05
---

# Papers

Use the template below for new entries. Keep each section tight; link the canonical PDF or DOI when stable.

---

## Template (copy for each paper)

```markdown
# Paper Title

**Venue / year:** …  
**Links:** …

## Problem

What limitation or gap motivates the work?

## Key Idea

One or two sentences that carry the contribution.

## Method

How the authors operationalize the idea (datasets, architecture, control law, proofs).

## Results

What improved, on what benchmarks or hardware, and what remains brittle?

## My Takeaways

What I believe after reading, including skepticism or open questions.

## How It Connects to My Work

Specific systems, code paths, or experiments this informs—written so “future me” knows where to apply it.
```

---

## Example note: Diffusion Policies for Visuomotor Control

**Venue / year:** RSS 2023 (example placeholder)  
**Links:** project page and arXiv as listed by the authors

## Problem

Imitation from high-dimensional observations needs **multi-modal** action distributions; single Gaussian policies average out valid alternatives and fail at forks in behavior.

## Key Idea

Represent the action distribution with a **conditional diffusion model** so sampling captures diverse correct futures without hand-engineered mixture models.

## Method

Train a denoising score network conditioned on image observations and proprioception; roll out actions through iterative denoising at deployment with horizon and rate tuned for latency budgets.

## Results

Strong kitchen-scale manipulation demos with improved fork handling versus deterministic baselines; compute and latency tradeoffs are non-trivial for real-time loops.

## My Takeaways

Diffusion is attractive where multi-modality matters, but **closed-loop latency** and **stability under noise** must be validated on the target robot stack, not only in benchmark kitchens.

## How It Connects to My Work

Informs how I design **outer-loop** behaviors when perception is ambiguous—especially choosing when to commit to a mode vs keep options open until the last responsible moment.
