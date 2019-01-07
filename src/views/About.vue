<template>
  <div>
    <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
    <button type="button" @click="show">click</button>
  </div>
</template>

<script>
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

// import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

// import EssentialsPlugin from "@ckeditor/ckeditor5-essentials/src/essentials";
// import BoldPlugin from "@ckeditor/ckeditor5-basic-styles/src/bold";
// import ItalicPlugin from "@ckeditor/ckeditor5-basic-styles/src/italic";
// import LinkPlugin from "@ckeditor/ckeditor5-link/src/link";
// import ParagraphPlugin from "@ckeditor/ckeditor5-paragraph/src/paragraph";
// import Image from '@ckeditor/ckeditor5-image/src/image';
import MyCustomUploadAdapterPlugin from '@/typescripts/MyUploadAdapterExport.ts';

import ClassicEditor from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";

import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials";
import UploadAdapter from "@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter";
import Autoformat from "@ckeditor/ckeditor5-autoformat/src/autoformat";
import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold";
import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic";
import BlockQuote from "@ckeditor/ckeditor5-block-quote/src/blockquote";
import EasyImage from "@ckeditor/ckeditor5-easy-image/src/easyimage";
import Heading from "@ckeditor/ckeditor5-heading/src/heading";
import Image from "@ckeditor/ckeditor5-image/src/image";
import ImageCaption from "@ckeditor/ckeditor5-image/src/imagecaption";
import ImageStyle from "@ckeditor/ckeditor5-image/src/imagestyle";
import ImageToolbar from "@ckeditor/ckeditor5-image/src/imagetoolbar";
import ImageUpload from "@ckeditor/ckeditor5-image/src/imageupload";
import Link from "@ckeditor/ckeditor5-link/src/link";
import List from "@ckeditor/ckeditor5-list/src/list";
import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph";

import Alignment from "@ckeditor/ckeditor5-alignment/src/alignment"; // <--- ADDED
import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight';

export default {
  data() {
    return {
      editor: ClassicEditor,
      editorData: "<p>Content of the editor.</p>",
      editorConfig: {
        // plugins: [
        //   EssentialsPlugin,
        //   BoldPlugin,
        //   ItalicPlugin,
        //   LinkPlugin,
        //   ParagraphPlugin,
        //   Image
        // ],

        // toolbar: {
        //   items: ["bold", "italic", "link", "undo", "redo", "imageUpload"]
        // }
        plugins: [
          Essentials,
          UploadAdapter,
          Autoformat,
          Bold,
          Italic,
          BlockQuote,
          EasyImage,
          Heading,
          Image,
          ImageCaption,
          ImageStyle,
          ImageToolbar,
          ImageUpload,
          Link,
          List,
          Paragraph,
          Alignment,
          Highlight
        ],
        toolbar: {
          items: [
            "heading",
            "|",
            "alignment", // <--- ADDED
            "bold",
            "italic",
            "link",
            "bulletedList",
            "numberedList",
            "imageUpload",
            "blockQuote",
            "undo",
            "redo",
            "highlight",
          ]
        },
        image: {
          toolbar: [
            "imageStyle:full",
            "imageStyle:side",
            "|",
            "imageTextAlternative"
          ]
        },
        extraPlugins: [ MyCustomUploadAdapterPlugin ],
      }
    };
  },
  methods: {
    show() {
      console.log(this.editorData);
    }
  }
};
</script>

<style scoped>
</style>