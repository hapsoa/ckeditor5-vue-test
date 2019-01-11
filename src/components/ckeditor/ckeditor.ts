import _ from 'lodash';
import firebase from '@/lib/initFirebase';

const storage = firebase.storage();
const storageRef = storage.ref();

import MyCustomUploadAdapterPlugin from '@/typescripts/MyUploadAdapterExport.ts';

// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';

import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment'; // <--- ADDED
import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight';
import Autosave from '@ckeditor/ckeditor5-autosave/src/autosave';

export default {
  data() {
    return {
      editor: null,
    };
  },
  methods: {
    showContent() {
      if (!_.isNil(this.editor)) {
        // tslint:disable-next-line:no-console
        console.log(this.editor.getData());
      }
    },
  },
  async mounted() {
    // Save the data to a fake HTTP server (emulated here with a setTimeout()).
    function saveData(data) {
      return new Promise((resolve) => {
        // setTimeout(() => {
        //   console.log('Saved', data);

        //   resolve();
        // }, HTTP_SERVER_LAG);
        const fileRef = storageRef.child(`jaejong/asdf`);
        fileRef.putString(data).then((snapshot) => {
          console.log('Uploaded a blob or file!');
          resolve();
        });
      });
    }

    // Update the "Status: Saving..." info.
    // function displayStatus(editor) {
    //   const pendingActions = editor.plugins.get('PendingActions');
    //   const statusIndicator = document.querySelector('#editor-status');

    //   pendingActions.on('change:hasAny', (evt, propertyName, newValue) => {
    //     if (newValue) {
    //       statusIndicator.classList.add('busy');
    //     } else {
    //       statusIndicator.classList.remove('busy');
    //     }
    //   });
    // }

    try {
      this.editor = await ClassicEditor.create(
        document.querySelector('#editor'),
        {
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
            Highlight,
            Autosave,
          ],
          toolbar: {
            items: [
              'heading',
              '|',
              'alignment', // <--- ADDED
              'bold',
              'italic',
              'link',
              'bulletedList',
              'numberedList',
              'imageUpload',
              'blockQuote',
              'undo',
              'redo',
              'highlight',
            ],
          },
          image: {
            // You need to configure the image toolbar, too, so it uses the new style buttons.
            toolbar: [
              'imageTextAlternative',
              '|',
              'imageStyle:alignLeft',
              'imageStyle:full',
              'imageStyle:alignRight',
            ],

            styles: [
              // This option is equal to a situation where no style is applied.
              'full',

              // This represents an image aligned to the left.
              'alignLeft',

              // This represents an image aligned to the right.
              'alignRight',
            ],
          },
          extraPlugins: [MyCustomUploadAdapterPlugin],
          autosave: {
            save(editor) {
              return saveData(editor.getData());
            },
          },
        },
      );
      // tslint:disable-next-line:no-console
      console.log('editor', this.editor);
      // displayStatus(this.editor);
    } catch (error) {
      // tslint:disable-next-line:no-console
      console.error(error);
    }
  },
};
