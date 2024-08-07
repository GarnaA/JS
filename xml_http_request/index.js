//The code below loads /article/xmlhttprequest/example/load 
//from the server and reports progress:

let xhr = new XMLHttpRequest();

xhr.open('GET', '/article/xmlhttprequest/example/load');

xhr.send();

xhr.onload = function() {
  if (xhr.status != 200) {
    console.log(`Error ${xhr.status}: ${xhr.statusText}`);
  } else {
    console.log(`Done, received ${xhr.response.length} bites`);
  }
};

xhr.onprogress = function(event) {
  if (event.lengthComputable) {
    console.log(`Received ${event.loaded} from ${event.total} bites`);
  } else {
    console.log(`Received ${event.loaded} bites`);
  }
};

xhr.onerror = function() {
  console.log("Request failed");
};