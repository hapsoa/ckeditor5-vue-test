import firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyBg5_ZISebZkorGZA3NT2ZO7LuTHDNNUWQ',
  authDomain: 'gaesory-ec24c.firebaseapp.com',
  databaseURL: 'https://gaesory-ec24c.firebaseio.com',
  projectId: 'gaesory-ec24c',
  storageBucket: 'gaesory-ec24c.appspot.com',
  messagingSenderId: '752962651932',
};
firebase.initializeApp(config);

const storage = firebase.storage();

// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

class MyUploadAdapter {
  private loader;
  private url: string;
  private xhr;
  private fileArray: object[];

  constructor(loader, url) {
    // The FileLoader instance to use during the upload. It sounds scary but do not
    // worry — the loader will be passed into the adapter later on in this guide.
    this.loader = loader;

    // The upload URL in your server back-end. This is the address the XMLHttpRequest
    // will send the image data to.
    this.url = url;

    this.fileArray = [];
  }

  // Starts the upload process.
  public async upload() {
    // return await storage.ref().child('asllldf').put(this.loader.file);

    // if () { // 이미지 에디터에 넣었을 때

    // } else { // save버튼 눌렀을 때

    // }
    return new Promise((resolve, reject) => {
      //   this._initRequest();
      //   this._initListeners(resolve, reject);
      //   this._sendRequest();
      resolve({
        default: 'http://ww2.sjkoreancatholic.org/files/testing_image.jpg',
      });
    });
  }

  // Aborts the upload process.
  public abort() {
    if (this.xhr) {
      this.xhr.abort();
    }
  }

  // Initializes the XMLHttpRequest object using the URL passed to the constructor.
  public _initRequest() {
    const xhr = (this.xhr = new XMLHttpRequest());

    // Note that your request may look different. It is up to you and your editor
    // integration to choose the right communication channel. This example uses
    // the POST request with JSON as a data structure but your configuration
    // could be different.
    xhr.open('POST', this.url, true);
    xhr.responseType = 'json';
  }

  // Initializes XMLHttpRequest listeners.
  public _initListeners(resolve, reject) {
    const xhr = this.xhr;
    const loader = this.loader;
    const genericErrorText = 'Couldn\'t upload file:' + ` ${loader.file.name}.`;

    xhr.addEventListener('error', () => reject(genericErrorText));
    xhr.addEventListener('abort', () => reject());
    xhr.addEventListener('load', () => {
      const response = xhr.response;

      // This example assumes the XHR server's "response" object will come with
      // an "error" which has its own "message" that can be passed to reject()
      // in the upload promise.
      //
      // Your integration may handle upload errors in a different way so make sure
      // it is done properly. The reject() function must be called when the upload fails.
      if (!response || response.error) {
        return reject(
          response && response.error ? response.error.message : genericErrorText,
        );
      }

      // If the upload is successful, resolve the upload promise with an object containing
      // at least the "default" URL, pointing to the image on the server.
      // This URL will be used to display the image in the content. Learn more in the
      // UploadAdapter#upload documentation.
      resolve({
        default: response.url,
      });
    });

    // Upload progress when it is supported. The FileLoader has the #uploadTotal and #uploaded
    // properties which are used e.g. to display the upload progress bar in the editor
    // user interface.
    if (xhr.upload) {
      xhr.upload.addEventListener('progress', (evt) => {
        if (evt.lengthComputable) {
          loader.uploadTotal = evt.total;
          loader.uploaded = evt.loaded;
        }
      });
    }
  }

  // Prepares the data and sends the request.
  public async _sendRequest() {
    // Prepare the form data.
    const data = new FormData();
    data.append('upload', this.loader.file);

    this.fileArray.push(this.loader.file);

    // await storage
    //   .ref()
    //   .child('ssasdf')
    //   .put(this.loader.file);

    // Send the request.
    // this.xhr.send( data );
  }
}

function MyCustomUploadAdapterPlugin(editor) {
  editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
    // Configure the URL to the upload script in your back-end here!
    return new MyUploadAdapter(
      loader,
      'gs://gaesory-ec24c.appspot.com/jaejong',
    );
  };
}

export default MyCustomUploadAdapterPlugin;

// ClassicEditor
//     .create( document.querySelector( '#editor' ), {
//         extraPlugins: [ MyCustomUploadAdapterPlugin ],

//         // ...
//     } )
//     .catch( error => {
//         console.log( error );
//     } );
