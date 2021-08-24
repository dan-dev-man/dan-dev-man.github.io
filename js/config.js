var statesList = [
    {
        "name":"New South Wales",
        "abbreviation":"NSW"
    },
    {
        "name":"Victoria",
        "abbreviation":"VIC"
    },
    {
        "name":"Queensland",
        "abbreviation":"QLD"
    },
    {
        "name":"Tasmania",
        "abbreviation":"TAS"
    },
    {
        "name":"South Australia",
        "abbreviation":"SA"
    },
    {
        "name":"Western Australia",
        "abbreviation":"WA"
    },
    {
        "name":"Northern Territory",
        "abbreviation":"NT"
    },
    {
        "name":"Australian Capital Territory",
        "abbreviation":"ACT"
    }
];

function fillStates(statesList) {
    var stateSelect = '';
    statesList.forEach(item => {
        stateSelect += "<option value=" + item.abbreviation + ">" + item.name + "</option>";
    });
    document.getElementById("ausState").innerHTML = stateSelect;
}

function submitRequest() {
    var form = document.getElementById('requestForm');
    var aMap = document.getElementById('map');
    var aInfo = document.getElementById('info-pane');
    form.style.display = 'none';
    aMap.style.display = 'none';
    aInfo.style.display = 'none';
    var processing = document.createElement('span');
    processing.appendChild(document.createTextNode('Your request has been submitted.  You will be contacted within 5 business days.  Press F5 to refresh this page.'));
    form.parentNode.insertBefore(processing, form);
}