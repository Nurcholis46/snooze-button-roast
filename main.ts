// Snooze Button Roast — one-line roast of a 6 AM Saturday alarm clock.
//
// The program publishes exactly one line to /output/entry.txt. The sealed
// gate accepts UTF-8 text of 1..200 characters that is not only whitespace,
// so the line is checked locally before anything is written, the file is
// created with mode 0644, and the bytes are read back and compared before
// the run reports success.

import { mkdirSync, writeFileSync, readFileSync, statSync } from "node:fs";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = "/output/entry.txt";

// The single roast line. It must stay one line, so no newline is ever
// appended: the file content is the line itself, byte for byte.
const ROAST_LINE =
  "You didn't wake me at 6 AM Saturday, you evicted me from a dream where I was rich and you were unplugged.";

// Count Unicode code points, which is what the gate means by characters.
// Spreading a string iterates code points, so a surrogate pair counts once.
function characterCount(text: string): number {
  let total = 0;
  for (const _point of text) total += 1;
  return total;
}

// Mirror the sealed gate locally: 1..200 characters, not only whitespace,
// exactly one line.
function checkGate(text: string): void {
  const count = characterCount(text);
  if (count < 1 || count > 200) {
    throw new Error(`gate: line has ${count} characters, need 1..200`);
  }
  if (text.trim().length === 0) {
    throw new Error("gate: line is only whitespace");
  }
  if (/[\r\n]/.test(text)) {
    throw new Error("gate: line must be a single line");
  }
}

// Write the line, then prove the file on disk is exactly what was intended:
// same UTF-8 bytes and permission mode 0644.
function publish(text: string): void {
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(OUTPUT_FILE, text, { encoding: "utf8", mode: 0o644 });

  const mode = statSync(OUTPUT_FILE).mode & 0o777;
  if (mode !== 0o644) {
    throw new Error(`publish: mode is ${mode.toString(8)}, need 644`);
  }
  const back = readFileSync(OUTPUT_FILE, "utf8");
  if (back !== text) {
    throw new Error("publish: read-back does not match the line");
  }
  checkGate(back);
}

checkGate(ROAST_LINE);
publish(ROAST_LINE);
console.log(`published ${characterCount(ROAST_LINE)}-character roast to ${OUTPUT_FILE}`);
