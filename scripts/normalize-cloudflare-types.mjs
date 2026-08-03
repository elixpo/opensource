import { readFile, writeFile } from 'node:fs/promises';

const file = new URL('../cloudflare-env.d.ts', import.meta.url);
const source = await readFile(file, 'utf8');
const withoutBuildOutputReference = source.replace(
  /\tinterface GlobalProps \{\n\t\tmainModule: typeof import\("\.\/\.open-next\/worker"\);\n\t\}\n/,
  '',
);
const workersReference = '/// <reference types="@cloudflare/workers-types" />\n\n';
const normalized = withoutBuildOutputReference.startsWith(workersReference)
  ? withoutBuildOutputReference
  : workersReference + withoutBuildOutputReference;

await writeFile(file, normalized);
