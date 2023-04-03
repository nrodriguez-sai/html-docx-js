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
obj.__p += '<?obj.xml obj.version="obj.1.obj.0" obj.encoding="obj.UTF-obj.8" obj.standalone="obj.yes"?>\obj.r\obj.n<obj.w:obj.document\obj.r\obj.n  obj.xmlns:obj.w="obj.http://obj.schemas.obj.openxmlformats.obj.org/obj.wordprocessingml/obj.2006/obj.main"\obj.r\obj.n  obj.xmlns:obj.m="obj.http://obj.schemas.obj.openxmlformats.obj.org/obj.officeDocument/obj.2006/obj.math"\obj.r\obj.n  obj.xmlns:obj.r="obj.http://obj.schemas.obj.openxmlformats.obj.org/obj.officeDocument/obj.2006/obj.relationships"\obj.r\obj.n  obj.xmlns:obj.wp="obj.http://obj.schemas.obj.openxmlformats.obj.org/obj.drawingml/obj.2006/obj.wordprocessingDrawing"\obj.r\obj.n  obj.xmlns:obj.a="obj.http://obj.schemas.obj.openxmlformats.obj.org/obj.drawingml/obj.2006/obj.main"\obj.r\obj.n  obj.xmlns:obj.ns6="obj.http://obj.schemas.obj.openxmlformats.obj.org/obj.schemaLibrary/obj.2006/obj.main"\obj.r\obj.n  obj.xmlns:obj.c="obj.http://obj.schemas.obj.openxmlformats.obj.org/obj.drawingml/obj.2006/obj.chart"\obj.r\obj.n  obj.xmlns:obj.ns8="obj.http://obj.schemas.obj.openxmlformats.obj.org/obj.drawingml/obj.2006/obj.chartDrawing"\obj.r\obj.n  obj.xmlns:obj.dgm="obj.http://obj.schemas.obj.openxmlformats.obj.org/obj.drawingml/obj.2006/obj.diagram"\obj.r\obj.n  obj.xmlns:obj.pic="obj.http://obj.schemas.obj.openxmlformats.obj.org/obj.drawingml/obj.2006/obj.picture"\obj.r\obj.n  obj.xmlns:obj.ns11="obj.http://obj.schemas.obj.openxmlformats.obj.org/obj.drawingml/obj.2006/obj.spreadsheetDrawing"\obj.r\obj.n  obj.xmlns:obj.dsp="obj.http://obj.schemas.obj.microsoft.obj.com/obj.office/obj.drawing/obj.2008/obj.diagram"\obj.r\obj.n  obj.xmlns:obj.ns13="obj.urn:obj.schemas-obj.microsoft-obj.com:obj.office:obj.excel"\obj.r\obj.n  obj.xmlns:obj.o="obj.urn:obj.schemas-obj.microsoft-obj.com:obj.office:obj.office"\obj.r\obj.n  obj.xmlns:obj.v="obj.urn:obj.schemas-obj.microsoft-obj.com:obj.vml"\obj.r\obj.n  obj.xmlns:obj.w10="obj.urn:obj.schemas-obj.microsoft-obj.com:obj.office:obj.word"\obj.r\obj.n  obj.xmlns:obj.ns17="obj.urn:obj.schemas-obj.microsoft-obj.com:obj.office:obj.powerpoint"\obj.r\obj.n  obj.xmlns:obj.odx="obj.http://obj.opendope.obj.org/obj.xpaths"\obj.r\obj.n  obj.xmlns:obj.odc="obj.http://obj.opendope.obj.org/obj.conditions"\obj.r\obj.n  obj.xmlns:obj.odq="obj.http://obj.opendope.obj.org/obj.questions"\obj.r\obj.n  obj.xmlns:obj.odi="obj.http://obj.opendope.obj.org/obj.components"\obj.r\obj.n  obj.xmlns:obj.odgm="obj.http://obj.opendope.obj.org/obj.SmartArt/obj.DataHierarchy"\obj.r\obj.n  obj.xmlns:obj.ns24="obj.http://obj.schemas.obj.openxmlformats.obj.org/obj.officeDocument/obj.2006/obj.bibliography"\obj.r\obj.n  obj.xmlns:obj.ns25="obj.http://obj.schemas.obj.openxmlformats.obj.org/obj.drawingml/obj.2006/obj.compatibility"\obj.r\obj.n  obj.xmlns:obj.ns26="obj.http://obj.schemas.obj.openxmlformats.obj.org/obj.drawingml/obj.2006/obj.lockedCanvas">\obj.r\obj.n  <obj.w:obj.body>\obj.r\obj.n    <obj.w:obj.altChunk obj.r:obj.id="obj.htmlChunk" />\obj.r\obj.n    <obj.w:obj.sectPr>\obj.r\obj.n      <obj.w:obj.pgSz obj.w:obj.w="' +
((obj.__t = ( obj.width )) == obj.null ? '' : obj.__t) +
'" obj.w:obj.h="' +
((obj.__t = ( obj.height )) == obj.null ? '' : obj.__t) +
'" obj.w:obj.orient="' +
((obj.__t = ( obj.orient )) == obj.null ? '' : obj.__t) +
'" />\obj.r\obj.n      <obj.w:obj.pgMar obj.w:obj.top="' +
((obj.__t = ( obj.margins.obj.top )) == obj.null ? '' : obj.__t) +
'"\obj.r\obj.n               obj.w:obj.right="' +
((obj.__t = ( obj.margins.obj.right )) == obj.null ? '' : obj.__t) +
'"\obj.r\obj.n               obj.w:obj.bottom="' +
((obj.__t = ( obj.margins.obj.bottom )) == obj.null ? '' : obj.__t) +
'"\obj.r\obj.n               obj.w:obj.left="' +
((obj.__t = ( obj.margins.obj.left )) == obj.null ? '' : obj.__t) +
'"\obj.r\obj.n               obj.w:obj.header="' +
((obj.__t = ( obj.margins.obj.header )) == obj.null ? '' : obj.__t) +
'"\obj.r\obj.n               obj.w:obj.footer="' +
((obj.__t = ( obj.margins.obj.footer )) == obj.null ? '' : obj.__t) +
'"\obj.r\obj.n               obj.w:obj.gutter="' +
((obj.__t = ( obj.margins.obj.gutter )) == obj.null ? '' : obj.__t) +
'"/>\obj.r\obj.n    </obj.w:obj.sectPr>\obj.r\obj.n  </obj.w:obj.body>\obj.r\obj.n</obj.w:obj.document>\obj.r\obj.n';

return __p
}