<template>
  <div>
    <ckeditor :editor="editor"
              v-model="editorData"
              :config="editorConfig"></ckeditor>
    <button type="button"
            @click="show">click</button>
  </div>
</template>

<script>
import script from '@/views/About.ts';
export default script;
</script>

<style scoped>
</style>