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
            var Select = document.getElementById("Person").selectedIndex;
            var Person = document.getElementById("Person").value;
            document.getElementById("Person").value = "";
            var ChooseText = document.getElementById("ChooseText").value;
            document.getElementById("ChooseText").value = "";
            var node = document.createElement("h3");
            var node1 = document.createElement("p");
            var Emote = document.getElementById("Emote").value;
            var btn = document.createTextNode(Person);
            var btn1 = document.createTextNode(ChooseText);
            var elem = document.getElementById('AutoScroll');
            document.getElementById('Person').getElementsByTagName('option')[Select].selected = 'selected';
            node.appendChild(btn);
            node1.appendChild(btn1);
            document.getElementById("Dialog").appendChild(node);
            document.getElementById("Dialog").appendChild(node1);
            if (Emote == "Animado") {
                document.getElementById("Dialog").lastChild.style.color = "orange";
            } else if (Emote == "Neutro") {
                document.getElementById("Dialog").lastChild.style.color = "black";
            } else if (Emote == "Feliz") {
                document.getElementById("Dialog").lastChild.style.color = "Gold";
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
                document.getElementById("Dialog").lastChild.style.color = "Orange";
            } else if (Emote == "Enojado") {
                document.getElementById("Dialog").lastChild.style.color = "Green";
            }
            if (Select % 2 == 1) {
                node.style.textAlign = "left";
                document.getElementById("Dialog").lastChild.style.marginLeft = "10px";
                document.getElementById("Dialog").lastChild.style.paddingLeft = "10px";
                node.style.marginLeft = "10px";
                document.getElementById("Dialog").lastChild.style.border = "1px solid white";
                document.getElementById("Dialog").lastChild.style.width = "50%";
                document.getElementById("Dialog").lastChild.style.backgroundColor = "white";
                document.getElementById("Dialog").lastChild.style.borderRadius = "10px 10px 10px 0px";
                document.getElementById("Dialog").lastChild.style.boxShadow = "rgba(0, 0, 0, 0.35) 0px 5px 15px";
            } else {
                document.getElementById("Dialog").lastChild.style.textAlign = "right";
                document.getElementById("Dialog").lastChild.style.marginRight = "10px";
                document.getElementById("Dialog").lastChild.style.marginLeft = "auto";
                document.getElementById("Dialog").lastChild.style.paddingRight = "10px";
                node.style.textAlign = "right";
                node.style.marginRight = "10px";
                node.style.marginLeft = "auto";
                document.getElementById("Dialog").lastChild.style.border = "1px solid white";
                document.getElementById("Dialog").lastChild.style.backgroundColor = "white";
                document.getElementById("Dialog").lastChild.style.borderRadius = "10px 10px 0px 10px";
                document.getElementById("Dialog").lastChild.style.width = "50%";
                document.getElementById("Dialog").lastChild.style.boxShadow = "rgba(0, 0, 0, 0.35) 0px 5px 15px";
            }
            elem.scrollTop = elem.scrollHeight;
            break;
        case "Narrar":
            var ChooseText = document.getElementById("ChooseText").value;
            document.getElementById("ChooseText").value = "";
            var node = document.createElement("p");
            var btn = document.createTextNode(ChooseText);
            var elem = document.getElementById('AutoScroll');
            node.appendChild(btn);
            document.getElementById("Dialog").appendChild(node);
            document.getElementById("Dialog").lastChild.style.textAlign = "center";
            document.getElementById("Dialog").lastChild.style.border = "1px solid white";
            document.getElementById("Dialog").lastChild.style.backgroundColor = "white";
            document.getElementById("Dialog").lastChild.style.borderRadius = "10px";
            document.getElementById("Dialog").lastChild.style.marginLeft = "10px";
            document.getElementById("Dialog").lastChild.style.marginRight = "10px";
            document.getElementById("Dialog").lastChild.style.boxShadow = "rgba(0, 0, 0, 0.35) 0px 5px 15px";
            elem.scrollTop = elem.scrollHeight;
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
    var elem = document.getElementById('AutoScroll');
    node1.appendChild(btn);
    document.getElementById("Dialog").appendChild(node1);
    document.getElementById("Dialog").lastChild.style.color = "black";
    document.getElementById("Dialog").lastChild.style.textAlign = "center";
    document.getElementById("Dialog").lastChild.style.border = "1px solid white";
    document.getElementById("Dialog").lastChild.style.backgroundColor = "white";
    document.getElementById("Dialog").lastChild.style.borderRadius = "10px";
    document.getElementById("Dialog").lastChild.style.marginLeft = "10px";
    document.getElementById("Dialog").lastChild.style.marginRight = "10px";
    document.getElementById("Dialog").lastChild.style.boxShadow = "rgba(0, 0, 0, 0.35) 0px 5px 15px";
    elem.scrollTop = elem.scrollHeight;
}

function AddPerson() {
    var Person = document.getElementById("NewPerson").value;
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