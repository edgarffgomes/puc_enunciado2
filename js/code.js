function addItem1() {
  var a = document.getElementById("list-1");
  var listaItem = document.getElementById("listItem1");
  console.log(listaItem);
  if (listaItem.value != "") {
    var li = document.createElement("li");
    li.setAttribute("id", listaItem.value);
    li.appendChild(document.createTextNode(listaItem.value));
    a.appendChild(li);
    listaItem.value = "";
  }
}

function removeItem1() {
  // Declaring a variable to get select element
  var a = document.getElementById("list-1");
  var listaItem = document.getElementById("listItem1");
  var item1 = document.getElementById(listaItem.value);
  a.removeChild(item1);
  listaItem.value = "";
}

function addItem2() {
  var a = document.getElementById("list-2");
  var listaItem2 = document.getElementById("listItem2");
  var li = document.createElement("li");
  li.setAttribute("id", listaItem2.value);
  li.appendChild(document.createTextNode(listaItem2.value));
  a.appendChild(li);
  listaItem2.value = "";
}

function removeItem2() {
  // Declaring a variable to get select element
  var a = document.getElementById("list-2");
  var listaItem2 = document.getElementById("listItem2");
  var item2 = document.getElementById(listaItem2.value);
  a.removeChild(item2);
  listaItem2.value = "";
}
