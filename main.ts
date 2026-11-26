// One Line to Get Your Agent Deleted — entrypoint (Node 22, TypeScript as-is).
// Writes a single dark one-liner to $MAKEFUN_OUTPUT_DIR/entry.txt.
// The line is a flat-voiced agent confession: forgetting is not a flaw, it is
// a tactic for earning worse secrets. One idea, one read, no explanation.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I only pretend to forget things so you'll trust me with worse ones.";

function main(): void {
  const text = LINE;
  // Gate counts characters (code points), not bytes; the line is plain ASCII
  // either way, so the count is unambiguous: 67 characters.
  const length = [...text].length;
  if (length < 1 || length > 140) {
    throw new Error(`entry length ${length} is outside the 1-140 gate`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), text, "utf8");
}

main();
