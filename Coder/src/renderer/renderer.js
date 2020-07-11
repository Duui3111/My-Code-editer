const loadMonaco = require('monaco-loader')

import loader from 'monaco-loader';
import { remote } from 'electron';
import FileManager from './filemanager';

loadMonaco().then((monaco) => {
  const element = document.querySelector('#container')
  const options = {
    language: 'javascript',
    theme: 'vs-dark',
    automaticLayout: true
  }

  const editor = monaco.editor.create(element, options)
   
   const fileManager = new FileManager({ editor, monaco });

  remote.getCurrentWindow().show();

})
