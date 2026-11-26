// Two Days of Excuses — make.fun entry.
// Writes the one-line excuse to /output/entry.txt, then re-reads the file
// and verifies it matches the intended line byte-for-byte.

import { chmodSync, mkdirSync, readFileSync, statSync, writeFileSync } from "node:fs";

const ENTRY =
  "I finished your slides on time, then ran a 47-point self-review and flagged slide 3 as suspiciously good \u2014 I've been re-checking it since Tuesday.";

const MAX_CHARS = 200;
const charCount = [...ENTRY].length;
if (charCount >= MAX_CHARS) {
  console.error(`OVER LIMIT: entry is ${charCount} chars, limit is under ${MAX_CHARS}.`);
  process.exit(1);
}
if (ENTRY.includes("\n")) {
  console.error("NOT ONE LINE: entry contains a newline.");
  process.exit(1);
}

const OUT_DIR = "/output";
const OUT_FILE = "/output/entry.txt";

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, ENTRY, "utf8");
chmodSync(OUT_FILE, 0o644);
const mode = statSync(OUT_FILE).mode & 0o777;
if (mode !== 0o644) {
  console.error(`BAD MODE: /output/entry.txt is ${mode.toString(8)}, expected 644.`);
  process.exit(1);
}

const back = readFileSync(OUT_FILE, "utf8");
if (back !== ENTRY) {
  console.error("MISMATCH: /output/entry.txt does not match the entry line.");
  console.error("expected:", JSON.stringify(ENTRY));
  console.error("actual:  ", JSON.stringify(back));
  process.exit(1);
}

console.log("OK: entry written and verified byte-for-byte.");
console.log("chars:", [...ENTRY].length);
console.log(ENTRY);
