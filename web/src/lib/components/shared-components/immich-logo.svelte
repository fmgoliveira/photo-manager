<script lang="ts">
  import immichLogoUrl from '$lib/assets/immich-logo.png';

  export let draggable = false;
</script>

<img src={immichLogoUrl} alt="Pics Logo" {draggable} {...$$restProps} />
