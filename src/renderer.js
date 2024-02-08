const editorDiv = document.getElementById('editor');
const codemirrorEditorView = window.codemirror.editorview();
const codemirrorBasicSetup = window.codemirror.basicsetup();
const codemirrorJavaScript = window.codemirror.js();
let view = new codemirrorEditorView({
    extensions: [codemirrorBasicSetup, codemirrorJavaScript()],
    parent: document.body,
});
