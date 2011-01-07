MOO=document.createElement('script');MOO.src="https://ajax.googleapis.com/ajax/libs/mootools/1.3/mootools.js";document.documentElement.appendChild(MOO);
Element.prototype.valueOf = Element.prototype.toString = Element.prototype.toJSON = function(){return (''+this.textContent).replace(/\s+/g,' ')};

void alert(JSON.stringify($$('.element [title|=attr]').map(function(attr) {
	var tag = attr.getElement('! .element !~h4 * code');
	return {
		tag: tag,
		display: tag + "   " + attr,
		match: attr,
		insert: '="${0:}"',
		tool_tip: $$('[id$=' + attr + '] !p')[0]
	}
})).replace(/\},\{/g,'}\n  , {').replace(/^\[/g,'  , ').replace(/\]$/g,''))
