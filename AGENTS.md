# AGENTS.md

## Context Compaction Recovery

When this thread resumes after context compaction, summary replacement, context transition, or interrupted work, immediately load `$caveman` from `C:\Users\asher\.codex\skills\caveman\SKILL.md`, invoke `$caveman ultra`, load `$ponytail:ponytail` from `C:\Users\asher\.codex\plugins\cache\ponytail\ponytail\4.8.4\skills\ponytail\SKILL.md`, and invoke `$ponytail ultra` before progress updates, planning, file reads, edits, validation, or final response.

Do not treat a summary saying these modes were active as enough. Reload and re-apply both skills after every compression or resume. Do not fall back to plain `$caveman` or plain `$ponytail`; use `$caveman ultra` and `$ponytail ultra`.

Until the user says `stop caveman` or `normal mode`, every progress update and final response must stay in ultra mode: short fragments, no filler, no long rationale. Use normal clear prose when compression could cause ambiguity, especially for security warnings, irreversible operations, multi-step instructions, code, commands, generated files, validation errors, and user interview questions.

Until the user says `stop ponytail` or `normal mode`, keep `$ponytail ultra` active: shortest safe path, deletion over addition, stdlib/native/existing code before new code or dependencies, and no speculative features.

After invoking `$caveman ultra` and `$ponytail ultra`, read the newest user request, the available summary, `checklist.md`, and `context-notes.md`. Continue the active task from the latest verified state instead of restarting from scratch.

For non-trivial work, keep `plan.md`, `checklist.md`, and `context-notes.md` current. Update `checklist.md` as work advances. Record decisions, assumptions, verification results, and resume-critical details in `context-notes.md`.

## Language Policy

Use English as the internal working language for analysis, scratch planning, search terms, command reasoning, and implementation notes unless the user explicitly asks otherwise.

Do not expose private chain-of-thought. If reasoning must be summarized for the user, summarize briefly in Korean.

Final user-facing result must be Korean only. Paths, code, commands, package names, error strings, and quoted file content may remain in their original language.

After context compaction, summary replacement, context transition, or interrupted work, re-read and re-apply this language policy together with `$caveman ultra` and `$ponytail ultra` before continuing work.
