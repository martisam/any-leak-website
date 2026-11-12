// Fails if any image exceeds the per-file budget or the folder exceeds the total budget.
import { readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const DIR = 'images';
const MAX_FILE_KB = 400;
const MAX_TOTAL_KB = 2048;

let total = 0;
const over = [];
for (const name of readdirSync(DIR)) {
  const kb = statSync(join(DIR, name)).size / 1024;
  total += kb;
  if (kb > MAX_FILE_KB) over.push(`${name}: ${kb.toFixed(0)} KB (max ${MAX_FILE_KB})`);
}

console.log(`images/ total: ${total.toFixed(0)} KB (max ${MAX_TOTAL_KB})`);
if (total > MAX_TOTAL_KB) over.push(`total ${total.toFixed(0)} KB exceeds ${MAX_TOTAL_KB}`);
if (over.length) {
  console.error('Image budget exceeded:\n  ' + over.join('\n  '));
  process.exit(1);
}
