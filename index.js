document.getElementById("ChooseText").onkeydown = function(a) {
    if (a.keyCode == 13) {
        SendDialog();
    }
}
document.getElementById("Time").onkeydown = function(a) {
    if (a.keyCode == 13) {
        ChangeCenary();
    }
}
document.getElementById("NewPerson").onkeydown = function(a) {
    if (a.keyCode == 13) {
        AddPerson();
    }
}

function SendDialog() {
    switch (document.getElementById("Choose").value) {
        case "Falar":
            var Person = document.getElementById("Person").value;
            document.getElementById("Person").value = "";
            var ChooseText = document.getElementById("ChooseText").value;
            document.getElementById("ChooseText").value = "";
            var node = document.createElement("h3");
            var node1 = document.createElement("p");
            var Emote = document.getElementById("Emote").value;
            var btn = document.createTextNode(Person);
            var btn1 = document.createTextNode(ChooseText);
            node.appendChild(btn);
            node1.appendChild(btn1);
            document.getElementById("Dialog").appendChild(node);
            document.getElementById("Dialog").appendChild(node1);
            if (Emote == "Animado") {
                document.getElementById("Dialog").lastChild.style.color = "orange";
            } else if (Emote == "Neutro") {
                document.getElementById("Dialog").lastChild.style.color = "black";
            } else if (Emote == "Feliz") {
                document.getElementById("Dialog").lastChild.style.color = "yellow";
            } else if (Emote == "Triste") {
                document.getElementById("Dialog").lastChild.style.color = "blue";
            } else if (Emote == "Irado") {
                document.getElementById("Dialog").lastChild.style.color = "red";
            } else if (Emote == "Surpreso") {
                document.getElementById("Dialog").lastChild.style.color = "MediumSlateBlue";
            } else if (Emote == "Inspirado") {
                document.getElementById("Dialog").lastChild.style.color = "cyan";
            } else if (Emote == "Constrangido") {
                document.getElementById("Dialog").lastChild.style.color = "DeepPink";
            } else if (Emote == "Entediado") {
                document.getElementById("Dialog").lastChild.style.color = "gray";
            } else if (Emote == "Decepcionado") {
                document.getElementById("Dialog").lastChild.style.color = "purple";
            } else if (Emote == "Assustado") {
                document.getElementById("Dialog").lastChild.style.color = "MidnightBlue";
            } else if (Emote == "Orgulhoso") {
                document.getElementById("Dialog").lastChild.style.color = "OrangeRed";
            } else if (Emote == "Repulsa") {
                document.getElementById("Dialog").lastChild.style.color = "Green";
            }
            break;
        case "Narrar":
            var ChooseText = document.getElementById("ChooseText").value;
            document.getElementById("ChooseText").value = "";
            var node = document.createElement("p");
            var btn = document.createTextNode(ChooseText);
            node.appendChild(btn);
            document.getElementById("Dialog").appendChild(node);
            document.getElementById("Dialog").lastChild.style.color = "black";
            break;
    }
}

function ChangeCenary() {
    var Cenary = document.getElementById("Cenary").value;
    document.getElementById("Cenary").value = "";
    var Time = document.getElementById("Time").value;
    document.getElementById("Time").value = "";
    var node = document.createElement("p");
    var node1 = document.createElement("h3");
    var btn = document.createTextNode(Cenary + ", " + Time);
    node.appendChild(node1);
    node1.appendChild(btn);
    document.getElementById("Dialog").appendChild(node);
    document.getElementById("Dialog").lastChild.style.color = "black";
}
window.setInterval(function() {
    var elem = document.getElementById('AutoScroll');
    elem.scrollTop = elem.scrollHeight;
}, 100);

function AddPerson() {
    var Person = document.getElementById("NewPerson").value;
    document.getElementById("NewPerson").value = "";
    var node = document.createElement("option");
    var node1 = document.getElementById("Person");
    var btn = document.createTextNode(Person);
    node1.appendChild(node);
    node.appendChild(btn);
}

function RemPerson() {
    var Person = document.getElementById('Person');
    Person.remove(Person.selectedIndex);
}

function UnsetChild() {
    var Dialog = document.getElementById("Dialog");
    Dialog.removeChild(Dialog.lastChild);
}