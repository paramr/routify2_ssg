<!-- routify:option name="example-app" -->
<script lang="ts">
  import { url, isActive } from "@roxi/routify";
  const _links = [
    ["./index", "Home"],
    ["./dynamic/test", "Api"],
    ["./reset", "Reset"],
    ["./layouts", "Layouts"],
  ];

  import TopAppBar, {
    Row,
    Section,
    Title,
    AutoAdjust,
    TopAppBarComponentDev,
  } from '@smui/top-app-bar';
  import IconButton from '@smui/icon-button';
  import Button, { Label } from '@smui/button';

  let topAppBar: TopAppBarComponentDev;

  export let hello: string = "Hello world"
</script>

<TopAppBar bind:this={topAppBar} variant="standard" dense>
  <Row>
    <Section>
      <IconButton class="material-icons">menu</IconButton>
      <Title>Dense</Title>
    </Section>
    <Section align="end" toolbar>
      <IconButton class="material-icons" aria-label="Download"
        >file_download</IconButton
      >
      <IconButton class="material-icons" aria-label="Print this page"
        >print</IconButton
      >
      <IconButton class="material-icons" aria-label="Bookmark this page"
        >bookmark</IconButton
      >
    </Section>
  </Row>
</TopAppBar>


<AutoAdjust {topAppBar}>
<div style="width: 100%; text-align: center; margin-top: 4rem;">
  <nav>
    {#each _links as [path, name]}
      <a class="link" class:active={$isActive(path)} href={$url(path)}>
        {name}
      </a>
    {/each}
  </nav>
  <div>
    <b>Guide:</b>
    <br />
    <a href="https://routify.dev">https://routify.dev</a>
  </div>

  <br />
  <div>
    <b>This template:</b>
    <br />
    <a href="https://github.com/roxiness/routify-starter">
      https://github.com/roxiness/routify-starter
    </a>
  </div>

  <p>Location: {location}</p>
  <div>From code: {hello}</div>

</div>
</AutoAdjust>
