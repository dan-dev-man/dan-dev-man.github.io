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

var providerServices = [
    {"id":"Service1", "name":"Service 1"},
    {"id":"Service2", "name":"Service 2"},
    {"id":"Service3", "name":"Service 3"},
    {"id":"Service4", "name":"Service 4"},
    {"id":"Service5", "name":"Service 5"},
    {"id":"Service6", "name":"Service 6"}
];

function fillStates(statesList) {
    var stateSelect = '';
    statesList.forEach(item => {
        stateSelect += "<option value=" + item.abbreviation + ">" + item.name + "</option>";
    });
    document.getElementById("ausState").innerHTML = stateSelect;
}

/*
function fillServices(providerServices) {
    var providerSelect = "";
    providerServices.forEach(item => {
        providerSelect += '<label><input type="checkbox" id=' + item.id + "name=" + item.id + ">" + item.name + "</label>";
    });
    document.getElementById("providerService").innerHTML = providerSelect;
}
*/

function submitRequest() {
    var form = document.getElementById('requestForm');
    form.style.display = 'none';
    var processing = document.createElement('span');
    processing.appendChild(document.createTextNode('Your request has been submitted.  You will be contacted within 5 business days.'));
    form.parentNode.insertBefore(processing, form);
}