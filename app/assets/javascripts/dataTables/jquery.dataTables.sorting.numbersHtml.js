/**
 * This sorting plug-in allows for HTML tags with numeric data. With the 'html'
 * type it will strip the HTML and then sorts by strings, with this type it
 * strips the HTML and then sorts by numbers. Note also that this sorting
 * plug-in has an equivalent type detection plug-in which can make integration
 * easier.
 *
 * DataTables 1.10+ has HTML numeric data type detection and sorting abilities
 * built-in. As such this plug-in is marked as deprecated, but might be useful
 * when working with old versions of DataTables.
 *
 *  @name Numbers with HTML
 *  @summary Sort data which is a mix of HTML and numeric data.
 *  @deprecated
 *  @author [Allan Jardine](http://sprymedia.co.uk)
 *
 *  @example
 *    $('#example').dataTable( {
 *       columnDefs: [
 *         { type: 'num-html', targets: 0 }
 *       ]
 *    } );
 */

jQuery.extend( jQuery.fn.dataTableExt.oSort, {
	"num-html-pre": function ( a ) {
		var x = String(a).replace( /<[\s\S]*?>/g, "" );
		return parseFloat( x );
	},

	"num-html-asc": function ( a, b ) {
		return ((a < b) ? -1 : ((a > b) ? 1 : 0));
	},

	"num-html-desc": function ( a, b ) {
		return ((a < b) ? 1 : ((a > b) ? -1 : 0));
	}
} );

jQuery.extend( jQuery.fn.dataTableExt.oSort, {
	"date-uk-pre": function ( a ) {
			if (a == null || a == "") {
					return 0;
			}
			var ukDatea = a.split('/');
			return (ukDatea[2] + ukDatea[1] + ukDatea[0]) * 1;
	},

	"date-uk-asc": function ( a, b ) {
			return ((a < b) ? -1 : ((a > b) ? 1 : 0));
	},

	"date-uk-desc": function ( a, b ) {
			return ((a < b) ? 1 : ((a > b) ? -1 : 0));
	}
} );
