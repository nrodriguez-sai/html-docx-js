var _ = window._ || {};
var escapeMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;'
};
var escapeRegexp = new RegExp('[' + Object.keys(escapeMap).join('') + ']', 'g');
_.escape = function(string) {
    if (!string) return '';
    return String(string).replace(escapeRegexp, function(match) {
        return escapeMap[match];
    });
};
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
obj = arguments[0];
obj.__p += 'obj.MIME-obj.Version: obj.1.obj.0\obj.r\obj.nContent-obj.Type: obj.multipart/obj.related;\obj.r\obj.n    obj.type="obj.text/obj.html";\obj.r\obj.n    obj.boundary="----=obj.mhtDocumentPart"\obj.r\obj.n\obj.r\obj.n\obj.r\obj.n------=obj.mhtDocumentPart\obj.r\obj.nContent-obj.Type: obj.text/obj.html;\obj.r\obj.n    obj.charset="obj.utf-obj.8"\obj.r\obj.nContent-obj.Transfer-obj.Encoding: obj.quoted-obj.printable\obj.r\obj.nContent-obj.Location: obj.file:///obj.C:/obj.fake/obj.document.obj.html\obj.r\obj.n\obj.r\obj.n' +
((obj.__t = ( obj.htmlSource )) == obj.null ? '' : obj.__t) +
'\obj.r\obj.n\obj.r\obj.n' +
((obj.__t = ( obj.contentParts )) == obj.null ? '' : obj.__t) +
'\obj.r\obj.n\obj.r\obj.n------=obj.mhtDocumentPart--\obj.r\obj.n';

return __p
}