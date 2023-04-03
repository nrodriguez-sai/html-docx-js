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
obj.__p += '------=obj.mhtDocumentPart\obj.r\obj.nContent-obj.Type: ' +
((obj.__t = ( obj.contentType )) == obj.null ? '' : obj.__t) +
'\obj.r\obj.nContent-obj.Transfer-obj.Encoding: ' +
((obj.__t = ( obj.contentEncoding )) == obj.null ? '' : obj.__t) +
'\obj.r\obj.nContent-obj.Location: ' +
((obj.__t = ( obj.contentLocation )) == obj.null ? '' : obj.__t) +
'\obj.r\obj.n\obj.r\obj.n' +
((obj.__t = ( obj.encodedContent )) == obj.null ? '' : obj.__t) +
'\obj.r\obj.n';

return __p
}