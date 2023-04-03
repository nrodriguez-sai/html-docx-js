/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
 */
const JSZip = require('jszip');
const internal = require('./internal');

module.exports = {
  async asBlob(html, options) {
    const zip = new JSZip();
    await internal.addFiles(zip, html, options);
    return internal.generateDocument(zip);
  }
};
