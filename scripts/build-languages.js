import hljs from "highlight.js";
import { writeTo } from "./utils/write-to.js";
import { toCamelCase } from "./utils/to-pascal-case.js";
import { createMarkdown } from "./utils/create-markdown.js";
import { mkdir } from "./utils/fs.js";

export async function buildLanguages() {
  mkdir("src/languages");

  let languages = hljs.listLanguages();
  let markdown = createMarkdown("Languages", languages.length);
  let types = `interface HljsLanguage {
    register: (hljs: any) => Record<string, any>;
  }\n\n`;
  let base = "";

  /** @type {import("./build-styles").ModuleNames} */
  let lang = [];

  languages.forEach(async (name) => {
    let moduleName = name;

    if (/^[0-9]/.test(name)) moduleName = `_${name}`;
    if (/-/.test(name)) moduleName = toCamelCase(name);

    types += `export const ${moduleName}: HljsLanguage & { name: "${name}"; };\n\n`;
    base += `export { default as ${moduleName} } from './${name}';\n`;
    lang.push({ name, moduleName });
    markdown += `## ${name} (\`${moduleName}\`)

\`\`\`html
<script>
  // direct import (recommended)
  import ${moduleName} from "svelte-highlight/languages/${name}";

  // base import
  import { ${moduleName} } from "svelte-highlight/languages";
<\/script>
\`\`\`\n\n`;
    await writeTo(
      `src/languages/${name}.js`,
      `import register from "highlight.js/lib/languages/${name}";\n
export const ${moduleName} = { name: "${name}", register };
export default ${moduleName};\n`
    );
  });

  await writeTo("src/languages/index.js", base);
  await writeTo("SUPPORTED_LANGUAGES.md", markdown);
  await writeTo("demo/lib/languages.json", lang);
}
