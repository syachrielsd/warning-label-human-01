// Warning Label for Humans: One Line, Big Laugh
// Writes the winning single-line safety warning label to entry.txt.
// Node 22, stdlib only, no network. No path is ever resolved from
// process.cwd(): the output directory comes from MAKEFUN_OUTPUT_DIR
// (absolute when set) and otherwise defaults to /output/entry.txt.

// v2 line (132 chars): the revision sharpens the kicker — the ex-text is now
// "about closure", so the turn lands in the last two words and the line sits
// inside the 120-160 target band. Three beats: "I'm fine" 9x/day (setup),
// crying at dog commercials (complication), texting an ex at 1:12 a.m. about
// closure (kicker — the self-deluding reason reframes "I'm fine" as a lie).
const LINE =
  "WARNING: Says 'I'm fine' 9 times a day. Side effects include crying at dog commercials and texting an ex at 1:12 a.m. about closure.";

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
