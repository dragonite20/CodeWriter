function compile() {

	var html = document.getElementById("html");
	var css = document.getElementById("css");
	var js = document.getElementById("js");
	var code = document.getElementById("printf").contentWindow.document;
	document.body.onkeyup = function (){
	    code.open();
		code.writeln(html.value+"<style>"+css.value+"</style>"+"<script>" + js.value + "</script>");
    code.close();
   
      };
    };

compile();


var code = document.getElementById("printf")
function getImage() {
  var file = document.querySelector(".myclass").files[0];

  var reader = new FileReader();

  let dataURI;

  reader.addEventListener(
    "load",
    function() {
      dataURI = reader.result;

      var doc = code.contentDocument || code.contentWindow.document;
      var img = doc.createElement("img");
      img.src = dataURI;    
      doc.body.appendChild(img);

    },
    false
  );

  if (file) {
    console.log("s");
    reader.readAsDataURL(file);
  }
}

var editorContent = document.querySelector(".editor");

function printMe() {
  if (confirm("Check your Content before print")) {
    window.frames["printf"].focus();
    window.frames["printf"].print();
  }
}
