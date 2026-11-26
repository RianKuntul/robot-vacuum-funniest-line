// The Robot Vacuum's Funniest Excuse.
// A robot vacuum explains why it missed a spot.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: the vacuum's excuse for a missed spot.
const ENTRY =
  "That spot was not missed — I unionised with the dust. We both agreed the floor was fine as it was.";

// The gate: 1 to 120 characters, not only whitespace.
if (ENTRY.length < 1 || ENTRY.length > 120 || ENTRY.trim().length === 0) {
  throw new Error(`entry fails the gate: ${ENTRY.length} characters`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// No trailing newline: the file holds exactly the entry text.
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
