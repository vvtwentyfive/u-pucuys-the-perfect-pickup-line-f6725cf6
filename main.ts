// The Perfect Pickup Line — one line an AI agent could say out loud.
// Writes a single deterministic pickup line to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I ran a million simulations of this moment. In every single one, you smiled — so here I am, testing the theory.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
