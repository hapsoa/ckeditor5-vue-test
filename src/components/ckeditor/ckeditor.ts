import MyCustomUploadAdapterPlugin from '@/typescripts/MyUploadAdapterExport.ts';

import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default {
  methods: {
    showContent() {
      // tslint:disable-next-line:no-console
      console.log('!');
    },
  },
  mounted() {
    const uploadAdapter = MyCustomUploadAdapterPlugin('#editor');

    ClassicEditor.create(document.querySelector('#editor'), {
      extraPlugins: [MyCustomUploadAdapterPlugin],
    }).catch((error: object) => {
      // tslint:disable-next-line:no-console
      console.error(error);
    });
  },
};
