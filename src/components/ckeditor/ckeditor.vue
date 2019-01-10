<template>
  <div>
    <textarea name="content"
              id="editor"></textarea>
    <button type="button"
            @click="showContent">show content</button>
  </div>
</template>

<script lang="ts">
import script from '@/components/ckeditor/ckeditor.ts';
export default script;
</script>

<style scoped>
</style>