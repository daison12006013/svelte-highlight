<script lang="ts">
  import Highlight, { HighlightAuto, HighlightSvelte } from "../src";
  import Highlight2 from "../src/Highlight.svelte";
  import { typescript } from "../src/languages";
  import javascript from "../src/languages/javascript";
  import { github, purebasic, _3024 } from "../src/styles/index";
  import "../src/styles/3024.css";

  let toggled = true;
  let highlighted = "";

  $: code = "const add = (a: number, b: number) => a + b;";
  $: codeSvelte = "<button on:click>Click me</button>";
</script>

<svelte:head>
  {@html github}
  {@html purebasic}
  {@html _3024}
</svelte:head>

<button on:click={() => (toggled = !toggled)}>Toggle</button>

<HighlightAuto
  id="highlight-auto"
  code={toggled ? code : codeSvelte}
  langtag={true}
/>

<HighlightAuto
  id="highlight-auto-css"
  code={`body {\n  padding: 0;\n  color: red;\n}`}
  langtag={true}
/>

<Highlight
  language={toggled ? javascript : typescript}
  {code}
  langtag={true}
  on:highlight={(e) => {
    highlighted = e.detail.highlighted;
  }}
  let:highlighted
>
  {@html highlighted}
</Highlight>

<HighlightSvelte id="langtag" code={codeSvelte} langtag={true} on:highlight />

<Highlight2 code="123" />

<div id="highlighted">{highlighted}</div>
