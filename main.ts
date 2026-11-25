import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One scarier sentence, under 200 characters, cut down to a single breath.
const ENTRY = "At 3:14 the baby monitor showed my childhood bedroom, and the child in it was already older than me.";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, "entry.txt"), ENTRY, "utf8");
