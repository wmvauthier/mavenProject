function createPendingCall(id, title, date, description) {
    var div = document.createElement('div');
    div.innerHTML = '<div id="' + id + '" class="col-md-6 col-xs-12 col-sm-12 col-md-4 col-lg-4">' +
            '<div class = "panel panel-danger">' +
            '<div class = "panel-heading"><b>' + title + ' >> ' + date + '</b></div>' +
            '<div class = "panel-body">' + description + '</div>' +
            '<div class = "panel-footer"><button id="' + id + '" data-toggle="modal" onclick="sendServletReturnCall(this);"data-target="#fixCall-modal">Resolver</button></div>' +
            '</div>' +
            '</div>';
    document.getElementById("pendingCalls").appendChild(div);
}

function createReadyFoundCall(id, title, date, description, tec) {
    var div = document.createElement('div');
    div.innerHTML = '<div id="' + id + '" class="col-md-12">' +
            '<div class = "panel panel-success">' +
            '<div class = "panel-heading"><b>' + title + ' >> ' + date + '</b></div>' +
            '<div class = "panel-body">' + description + '</div>' +
            '<div class = "panel-footer"><span class="dot"></span>' + tec + '</div>' +
            '</div>' +
            '</div>';
    document.getElementById("findCall-formResult").appendChild(div);
}

function createUnReadyFoundCall(id, title, date, description) {
    var div = document.createElement('div');
    div.innerHTML = '<div id="' + id + '" class="col-md-12">' +
            '<div class = "panel panel-danger">' +
            '<div class = "panel-heading"><b>' + title + ' >> ' + date + '</b></div>' +
            '<div class = "panel-body">' + description + '</div>' +
            '<div class = "panel-footer"><button>Resolver</button></div>' +
            '</div>' +
            '</div>';
    document.getElementById("findCall-formResult").appendChild(div);
}

function createPendingProgram(title, date, description) {
    var div = document.createElement('div');
    div.innerHTML = '<div class="col-md-6 col-xs-12 col-sm-12 col-md-4 col-lg-4">' +
            '<div class = "panel panel-primary">' +
            '<div class = "panel-heading"><b>' + title + '</b></div>' +
            '<div class = "panel-body">' + description + '</div>' +
            '<div class = "panel-footer"><button>Resolver</button></div>' +
            '</div>' +
            '</div>';
    document.getElementById("pendingProgram").appendChild(div);
}

function createLastCall(title, date, description) {
    var div = document.createElement('div');
    div.innerHTML = '<div class="col-md-6 col-xs-12 col-sm-12 col-md-4 col-lg-4">' +
            '<div class = "panel panel-warning">' +
            '<div class = "panel-heading"><b>' + title + '</b></div>' +
            '<div class = "panel-body">' + description + '</div>' +
            '<div class = "panel-footer"><button>Resolver</button></div>' +
            '</div>' +
            '</div>';
    document.getElementById("lastCalls").appendChild(div);
}

function createLastStock(title, date, description) {
    var div = document.createElement('div');
    div.innerHTML = '<div class="col-md-6 col-xs-12 col-sm-12 col-md-4 col-lg-4">' +
            '<div class = "panel panel-success">' +
            '<div class = "panel-heading"><b>' + title + '</b></div>' +
            '<div class = "panel-body">' + description + '</div>' +
            '<div class = "panel-footer"><button>Resolver</button></div>' +
            '</div>' +
            '</div>';
    document.getElementById("lastStock").appendChild(div);
}

function createLastPiece(title, date, description) {
    var div = document.createElement('div');
    div.innerHTML = '<div class="col-md-6 col-xs-12 col-sm-12 col-md-4 col-lg-4">' +
            '<div class = "panel panel-info">' +
            '<div class = "panel-heading"><b>' + title + '</b></div>' +
            '<div class = "panel-body">' + description + '</div>' +
            '<div class = "panel-footer"><button>Resolver</button></div>' +
            '</div>' +
            '</div>';
    document.getElementById("lastPiece").appendChild(div);
}

function sendServletAddCall(client, dat, description) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById('addCall-formCloseBtn').click();
            var call = JSON.parse(xhr.responseText);
            createPendingCall(call.cliente, call.data, call.descricao);
        }
    };
    xhr.open("post", "registerCall", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(`client=${client.value}&date=${dat.value}&description=${description.value}`);
}

function sendServletRefreshCall() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = xhr.responseText;
            var jsonData = JSON.parse(response);
            for (var i = 0; i < jsonData.calls.length; i++) {
                var call = jsonData.calls[i];
                if (call.status == 'false')
                    createPendingCall(call.id, call.cliente, call.data, call.descricao);
            }
        }
    };
    xhr.open("post", "refreshCall", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send();
}

function sendServletFindCall() {

    var clientToFind = document.getElementById('findCall-formClient').value;
    var dateToFind = document.getElementById('findCall-formDat').value;
    var results = document.getElementById('findCall-formResult');
    results.innerHTML = '';

    if (clientToFind === '' && dateToFind === '') {
        return false;
    }

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = xhr.responseText;
            var jsonData = JSON.parse(response);
            for (var i = 0; i < jsonData.calls.length; i++) {
                var call = jsonData.calls[i];
                if (call.cliente == clientToFind || call.data == dateToFind) {
                    if (call.status == 'false') {
                        createUnReadyFoundCall(call.id, call.cliente, call.data, call.descricao);
                    } else if (call.status == 'true') {
                        createReadyFoundCall(call.id, call.cliente, call.data, call.descricao, call.tecnico);
                    }
                }
            }
        }
    };
    xhr.open("post", "refreshCall", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send();
}

function sendServletReturnCall(choosenCall) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = xhr.responseText;
            var jsonData = JSON.parse(response);
            for (var i = 0; i < jsonData.calls.length; i++) {
                var call = jsonData.calls[i];
                if (call.id == choosenCall.id) {
                    document.getElementById('fixCall-formClient').value = '';
                    document.getElementById('fixCall-formDat').value = '';
                    document.getElementById('fixCall-formDescription').value = '';
                    document.getElementById('fixCall-formClient').value = call.cliente;
                    document.getElementById('fixCall-formDat').value = call.data;
                    document.getElementById('fixCall-formDescription').value = call.descricao;
                }
            }
        }
    };
    xhr.open("post", "refreshCall", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send();
}

function preSendServletReturnCall(choosenCall) {
    console.log("ESTA INDO AO BANCO: " + choosenCall.id);
    var a = sendServletReturnCall(choosenCall);
    console.log(a);
    //var call = "a";
//    console.log(call);
//    console.log("ESTA VOLTANDO DO BANCO: " + call);
}

function sendServletFixCall(call) {

    var callToFind = call.value;
    console.log(callToFind);

//    var xhr = new XMLHttpRequest();
//    xhr.onreadystatechange = function () {
//        if (xhr.readyState === 4 && xhr.status === 200) {
//            var element = document.getElementById(callToFind);
//            element.parentNode.removeChild(element);
//        }
//    };
//    xhr.open("post", "fixCall", true);
//    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
//    xhr.send(`id=${callToFind}`);
}

function codeAddress() {
    sendServletRefreshCall();
}
window.onload = codeAddress;