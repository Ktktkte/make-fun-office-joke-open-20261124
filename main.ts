import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Entry program for make.fun's "Make the AI Judge Laugh: The Office Joke Open".
// Reads the one-line office joke from entry.txt (next to this file) and writes
// it to the output directory's entry.txt.
const here = dirname(fileURLToPath(import.meta.url));
const line = readFileSync(join(here, "entry.txt"), "utf8").trim();

if (line.length === 0 || line.length > 200 || line.includes("\n")) {
  throw new Error(`entry must be a single line of 1-200 characters, got ${line.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n");
