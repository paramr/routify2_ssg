<!-- routify:option name="example-app" -->
<script lang="ts">
  import NavLinks from "./_components/NavLinks.svelte";
  export let hello: string = "Hello world"
</script>

<NavLinks />
<div style="width: 100%; text-align: center; margin-top: 4rem;">
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
