/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * DS205: Consider reworking code to avoid use of IIFEs
 * DS207: Consider shorter variations of null checks
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
 */
const fs = require('fs');
const documentTemplate = require('./templates/document');
const utils = require('./utils');
const _ = {merge: require('lodash.merge')};

let dirPath;

if (typeof __dirname !== 'undefined') {
  dirPath = __dirname;
} else if (typeof import.meta !== 'undefined' && typeof import.meta.url === 'string') {
  const scriptUrl = new URL(import.meta.url);
  dirPath = scriptUrl.pathname.split('/').slice(0, -1).join('/');
} else if (document.currentScript) {
  const scriptUrl = new URL(document.currentScript.src);
  dirPath = scriptUrl.pathname.split('/').slice(0, -1).join('/');
} else {
  throw new Error('Unable to determine directory path');
}

module.exports = {
  generateDocument(zip) {
    const buffer = zip.generate({type: 'arraybuffer'});
    if (global.Blob) {
      return new Blob([buffer],
        {type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'});
    } else if (global.Buffer) {
      return new Buffer(new Uint8Array(buffer));
    } else {
      throw new Error("Neither Blob nor Buffer are accessible in this environment. " +
        "Consider adding Blob.js shim"
      );
    }
  },

  renderDocumentFile(documentOptions) {
    if (documentOptions == null) { documentOptions = {}; }
    const templateData = _.merge({margins: {
      top: 1440,
      right: 1440,
      bottom: 1440,
      left: 1440,
      header: 720,
      footer: 720,
      gutter: 0
    }
  }
    ,
      (() => { switch (documentOptions.orientation) {
        case 'landscape': return {height: 12240, width: 15840, orient: 'landscape'};
        default: return {width: 12240, height: 15840, orient: 'portrait'};
      } })()
    ,
      {margins: documentOptions.margins});

    return documentTemplate(templateData);
  },

  addFiles(zip, htmlSource, documentOptions) {
    zip.file('[Content_Types].xml', fs.readFileSync(dirPath + '/assets/content_types.xml'));
    zip.folder('_rels').file('.rels', fs.readFileSync(dirPath + '/assets/rels.xml'));
    return zip.folder('word')
      .file('document.xml', this.renderDocumentFile(documentOptions))
      .file('afchunk.mht', utils.getMHTdocument(htmlSource))
      .folder('_rels')
        .file('document.xml.rels', fs.readFileSync(dirPath + '/assets/document.xml.rels'));
  }
};
