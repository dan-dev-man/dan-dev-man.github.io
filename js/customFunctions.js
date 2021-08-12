function fillStates(statesList) {
    var stateSelect = "";
    statesList.forEach(item => {
        stateSelect += "<option value=" + item.abbreviation + ">" + item.name + "</option>";
    });
    document.getElementById("ausState").innerHTML = stateSelect;
}