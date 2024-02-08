const { contextBridge } = require('electron')

// Isso não funciona bem porque o codemirror tenta acessar um membro que só existe no navegador:
// const webkit = "webkitFontSmoothing" in doc.documentElement.style;
// Ainda que usemos o preload corretamente, essa parte aqui quebra.
const { EditorView, basicSetup } = require("codemirror");
const { javascript } = require("@codemirror/lang-javascript");
// require("@codemirror/view");

contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron
  // we can also expose variables, not just functions
})

contextBridge.exposeInMainWorld('codemirror', {
    editorview: () => EditorView,
    basicsetup: () => basicSetup,
    js: () => javascript
})