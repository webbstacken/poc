const version = "2023.4.2.1"

const addContent = (document) => {
  var text = document.getElementById("centerId").innerHTML;  
  text += '<div class="jumbotron jumbotron-fluid">';        
  text += '  <div class="container">';
  text += '    <h1 class="display-4">About...</h1>';
  text += '      <p class="lead">Version (year.month.date.build#): ' + version +'</p>'
  text += '      <hr class="my-4">';
  text += '      <p class="lead">text text</p>'
  text += '    </div>';
  text += '  </div>';
  text += '</div>';  
  document.getElementById("centerId").innerHTML = text;
}

const setupView = (document) => {
  addContent(document);      
}

const setupEventListener = (document) => {
  // TODO 
}

export function initAbout(document) {  
  setupView(document);
  setupEventListener(document);  
}