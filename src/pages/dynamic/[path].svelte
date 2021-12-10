<script>
  import { url, params } from "@roxi/routify";
  let path = $params.path;
</script>

<div style="text-align: center; max-width: 540px; margin: auto">
  <h4>
    <a href={$url('./')}>Go back</a>
  </h4>

  <h2>Path was: {path}</h2>

</div>
