var onRun = function(context) {

  //reference the api
  var sketch = context.api();

  //reference the document
  var doc = sketch.selectedDocument;

  //clear out the existing document colors
  doc.sketchObject.documentData().assets().setColors([]);

  //show a message when done
  alert("Sketch Plugin", "Document Colors deleted!")

}

// the popup code
function alert(title, message){
	var app = [NSApplication sharedApplication];
	[app displayDialog:message withTitle:title];
}
