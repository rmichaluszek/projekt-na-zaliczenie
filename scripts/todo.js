function addItem(){
    var text = document.getElementById("new").value;


    if(text!=""){
        document.getElementById("new").value = "";
        document.getElementById("new").placeholder = "Podaj nowe zadanie";

        var items = document.getElementById("items");

        var newItem = document.createElement("div");
        newItem.className = "item";

        var deleteButton = document.createElement("button");
        deleteButton.className = "delete";
        deleteButton.innerHTML = "Usuń";

        var checkButton = document.createElement("button");
        checkButton.className = "check";
        checkButton.innerHTML = "Zatwierdź"

        var buttonsContainer = document.createElement("div");
        buttonsContainer.className = "buttons";

        var span = document.createElement("span");
        span.innerHTML = text;

        deleteButton.addEventListener("click",function() {
            newItem.remove();
        });


        checkButton.addEventListener("click",function() {
            if(span.className=="checked") {
                span.className="";
                checkButton.innerHTML = "Zatwierdź";
            }else{
                span.className="checked";
                checkButton.innerHTML = "Odznacz";
            }
        });

        buttonsContainer.appendChild(checkButton);
        buttonsContainer.appendChild(deleteButton);

        newItem.appendChild(span);
        newItem.appendChild(buttonsContainer);

        items.appendChild(newItem);

        newItem.getElementsByClassName("delete").innerHTML="XD";
    } else {
        document.getElementById("new").placeholder = "Musisz coś wpisać";
    }
}