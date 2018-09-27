//FUNÇÕES QUE CRIAM ELEMENTOS HTML

function createPendingCall(id, title, date, description) {
    var div = document.createElement('div');
    div.id = id;
    div.className = 'col-xs-12 col-sm-12 col-md-6 col-lg-4';
    div.innerHTML = '' +
            '<div class = "panel panel-default demo-chart mdl-shadow--2dp mdl-color-white">' +
            '<div class = "panel-heading panel-heading-danger-fd"><b class="panel-title-fd">' + title + '</b></div>' +
            '<div class = "panel-body">' + description + '</div>' +
            '<button class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon">' +
            '<i id="'+id+'" class="material-icons">check_box</i>' +
            '</button>' +
            '</div>';
    document.getElementById("pendingCalls").appendChild(div);
}

function createReadyFoundCall(id, title, date, description, tec) {
    var div = document.createElement('div');
    div.innerHTML = '<div id="' + id + '" class="col-md-12">' +
            '<div class = "panel panel-success">' +
            '<div class = "panel-heading"><b>' + title + ' >> ' + date + '</b></div>' +
            '<div class = "panel-body">' + description + '</div>' +
            '<div class = "panel-footer"><span>' + tec + '</span></div>' +
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

//FUNÇÕES QUE DÃO SWITCH NAS PÁGINAS

$('#navCalls').click(function () {
    $('#titlePage').html('CHAMADOS');
    $('.contentX').attr('id', 'pendingCalls');
    $('#addPanelTitle').html('ADICIONAR CHAMADO');
    $('#findPanelTitle').html('PESQUISAR CHAMADO');
    $('#reportPanelTitle').html('RELATÓRIO DE CHAMADOS');
    $('#addPanelBody').html(addCallForm);
    sendServletRefreshCall();
    document.getElementById('addPanelTitleBtn').click();

});

//FUNÇÕES QUE DESENHAM GRÁFICOS

function drawSVGCalls(qtdCalls, qtdReadyCalls, dateNow) {

    var realDateNow = new Object();
    equalDat(dateNow, realDateNow);

    var data = google.visualization.arrayToDataTable([
        ['Dia', 'Concluídos', 'Pendentes'],
        [`${minusEqualDat(realDateNow,dateNow,7,'day')}/${minusEqualDat(realDateNow,dateNow,7,'month')}`, qtdReadyCalls[7], qtdCalls[7]],
        [`${minusEqualDat(realDateNow,dateNow,6,'day')}/${minusEqualDat(realDateNow,dateNow,6,'month')}`, qtdReadyCalls[6], qtdCalls[6]],
        [`${minusEqualDat(realDateNow,dateNow,5,'day')}/${minusEqualDat(realDateNow,dateNow,5,'month')}`, qtdReadyCalls[5], qtdCalls[5]],
        [`${minusEqualDat(realDateNow,dateNow,4,'day')}/${minusEqualDat(realDateNow,dateNow,4,'month')}`, qtdReadyCalls[4], qtdCalls[4]],
        [`${minusEqualDat(realDateNow,dateNow,3,'day')}/${minusEqualDat(realDateNow,dateNow,3,'month')}`, qtdReadyCalls[3], qtdCalls[3]],
        [`${minusEqualDat(realDateNow,dateNow,2,'day')}/${minusEqualDat(realDateNow,dateNow,2,'month')}`, qtdReadyCalls[2], qtdCalls[2]],
        [`${minusEqualDat(realDateNow,dateNow,1,'day')}/${minusEqualDat(realDateNow,dateNow,1,'month')}`, qtdReadyCalls[1], qtdCalls[1]],
        [`${realDateNow.day}/${realDateNow.month}`, qtdReadyCalls[0], qtdCalls[0]]
    ]);

    var options = {
        title: 'Chamados dos Últimos 7 Dias',
        hAxis: {title: 'Year', titleTextStyle: {color: '#333'}},
        vAxis: {minValue: 0},
    };

    var chart = new google.visualization.AreaChart(document.getElementById('graphs'));
    chart.draw(data, options);
}

//FUNÇÕES QUE CHAMAM SERVLETS

function sendServletAddCall(client, dat, description) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById('addCall-formCloseBtn').click();
            var call = JSON.parse(xhr.responseText);
            createPendingCall(call.id, call.cliente, call.data, call.descricao);
            document.getElementById('addCall-formClient').value = '';
            document.getElementById('addCall-formDat').value = '';
            document.getElementById('addCall-formDescription').value = '';
        }
    };
    xhr.open("post", "registerCall", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send("client=" + client.value + "&date=" + dat.value + "&description=" + description.value + "");
}

function sendServletRefreshCall() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = xhr.responseText;
            var jsonData = JSON.parse(response);
            document.getElementById("pendingCalls").innerHTML = '';
            var dateNow = myDat(new Date);
            var count = 0;

            //DESENHA OS CHAMADOS ABERTOS
            for (var i = 0; i < jsonData.calls.length; i++) {
                var call = jsonData.calls[i];
                if (call.status === 'false') {
                    createPendingCall(call.id, call.cliente, call.data, call.descricao);
                    count++;
                }
            }

            //MANTENDO A MESMA DATA ATUAL
            var realDateNow = new Object();
            equalDat(dateNow, realDateNow);

            //DESENHA O  GRÁFICO DE CHAMADOS ABERTOS

            //VETORES QUE RECEBEM OS CHAMADOS
            var valuesSVG = [];
            var valuesSVGReady = [];

            for (var o = 0; o < 21; o++) {

                var countCalls = 0;
                var countReadyCalls = 0;

                for (var s = 0; s < jsonData.calls.length; s++) {
                    var call = jsonData.calls[s];
                    var convertedCall = toMyDat(call.data);
                    if (convertedCall.day === dateNow.day) {
                        if (call.status === 'false') {
                            countCalls++;
                        }
                        if (call.status !== 'false') {
                            countReadyCalls++;
                        }
                    }
                }

                minusDat(dateNow, 1);
                valuesSVG[o] = countCalls;
                valuesSVGReady[o] = countReadyCalls;

            }

            drawSVGCalls(valuesSVG, valuesSVGReady, realDateNow);

            //document.getElementById("ntfCalls").innerHTML = '';
            //document.getElementById("ntfCalls").innerHTML = count;
            //$('#ntfCalls').show(400);
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
            clientToFind = '';
            dateToFind = '';
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
                    document.getElementById('fixCall-formselectedCall').innerHTML = '';
                    document.getElementById('fixCall-formClient').value = call.cliente;
                    document.getElementById('fixCall-formDat').value = call.data;
                    document.getElementById('fixCall-formDescription').value = call.descricao;
                    document.getElementById('fixCall-formselectedCall').innerHTML = call.id;
                }
            }
        }
    };
    xhr.open("post", "refreshCall", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send();
}

function sendServletFixCall() {

    var callToFind = document.getElementById('fixCall-formselectedCall');
    var description = document.getElementById('fixCall-formDescription').value;
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var element = document.getElementById(callToFind.innerHTML);
            element.parentNode.removeChild(element);
            document.getElementById('fixCall-formCloseBtn').click();
        }
    };
    xhr.open("post", "fixCall", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send("id=" + callToFind.innerHTML + "&description=" + description + "");
}

function sendServletReportCall() {

    var xhr = new XMLHttpRequest();
    var client = document.getElementById('reportCall-formClient').value;
    var datIni = document.getElementById('reportCall-formDatIni').value;
    var datFin = document.getElementById('reportCall-formDatFin').value;
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = xhr.responseText;
            var jsonData = JSON.parse(response);
            document.getElementById("reportCall-formResult").innerHTML = '';
            //Criação da Tabela
            var divTitle = document.createElement('div');
            var title = document.createElement('p');
            title.innerHTML = '<center><b>Relatorio de Chamados do Cliente</b></center>';
            divTitle.appendChild(title);
            var table = document.createElement('table');
            var tr1 = document.createElement('tr');
            var tdData1 = document.createElement('td');
            var tdCliente1 = document.createElement('td');
            var tdTecnico1 = document.createElement('td');
            var tdDescricao1 = document.createElement('td');
            tdData1.innerHTML = '<b>DATA</b>';
            tdCliente1.innerHTML = '<b>CLIENTE</b>';
            tdDescricao1.innerHTML = '<b>DESCRICAO</b>';
            tdTecnico1.innerHTML = '<b>TECNICO</b>';
            tr1.appendChild(tdData1);
            tr1.appendChild(tdCliente1);
            tr1.appendChild(tdTecnico1);
            tr1.appendChild(tdDescricao1);
            table.appendChild(tr1);
            for (var i = 0; i < jsonData.calls.length; i++) {
                var call = jsonData.calls[i];
                if ((call.data >= datIni && call.data <= datFin) || (call.cliente == client)) {
                    var tr = document.createElement('tr');
                    var tdData = document.createElement('td');
                    var tdCliente = document.createElement('td');
                    var tdTecnico = document.createElement('td');
                    var tdDescricao = document.createElement('td');
                    tdData.innerHTML = call.data;
                    tdCliente.innerHTML = call.cliente;
                    tdDescricao.innerHTML = call.descricao;
                    tdTecnico.innerHTML = call.tecnico;
                    tr.appendChild(tdData);
                    tr.appendChild(tdCliente);
                    tr.appendChild(tdTecnico);
                    tr.appendChild(tdDescricao);
                    table.appendChild(tr);
                }
            }

            var formResults = document.getElementById('reportCall-formResult');
            formResults.appendChild(divTitle);
            formResults.appendChild(table);
            if (confirm('Relatório Completo! Deseja salvá-lo em um arquivo?')) {
                sendServletSaveReportCall(table, divTitle);
                document.getElementById('reportCall-formCloseBtn').click();
            } else {

            }

            client = '';
            datIni = '';
            datFin = '';
        }
    };
    xhr.open("post", "refreshCall", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send();
}

function sendServletSaveReportCall(table, divTitle) {

    var hiddenResults = document.getElementById('hiddenResults');
    var formResults = document.getElementById('reportCall-formResult');
    formResults.innerHTML = '';
    hiddenResults.innerHTML = '';
    hiddenResults.appendChild(divTitle);
    hiddenResults.appendChild(table);
    console.log(hiddenResults);
    html2canvas(document.getElementById('hiddenResults'), {
        onrendered: function (canvas) {
            var imgData = canvas.toDataURL("image/jpeg", 1.0);
            var pdf = new jsPDF();
            pdf.addImage(imgData, 'JPEG', 0, 0);
            pdf.save("download.pdf");
        }
    });
    hiddenResults.innerHTML = '';
}

//FUNÇÕES AUXILIARES

//DATA ATUAL NO MYDAT
function myDat(dateNow) {

    var n = dateNow.getMonth();
    var okMonth = parseInt(n, 10);
    okMonth++;
    var myDat = new Object();
    myDat.year = dateNow.getFullYear();
    myDat.month = okMonth;
    myDat.day = dateNow.getDate();

    return myDat;

}

//CONVERTE PARA MYDAT O QUE VEM DO SERVLET
function toMyDat(dateNow) {
    var times = 0;
    var myDat = new Object();
    var concat = '';

    for (i = 0; i < dateNow.length; i++) {
        if (dateNow[i] === '-') {
            if (times === 0 && concat !== '') {
                var n = parseInt(concat, 10);
                myDat.year = n;
                concat = '';
                times++;
            }
            if (times === 1 && concat !== '') {
                var n = parseInt(concat, 10);
                myDat.month = n;
                concat = '';
                times++;
            }
        } else {
            concat = concat + dateNow[i];
        }
    }
    var n = parseInt(concat, 10);
    myDat.day = n;
    return myDat;
}

//REDUZ UM DIA EM MYDAT
function minusDat(dateNow, times, back) {

    for (var i = 0; i < times; i++) {
        //VERIFICA VIRADAS DE MÊS E DE ANO
        if ((dateNow.day === 1) && (dateNow.month === 1)) {
            dateNow.day = 31;
            dateNow.month = 12;
            dateNow.year = dateNow.year - 1;
        }
        if (dateNow.day === 1) {
            dateNow.day = 31;
            dateNow.month = dateNow.month - 1;
        } else {
            dateNow.day = dateNow.day - 1;
        }
    }

    if (back == 'day') {
        return dateNow.day;
    } else if (back == 'month') {
        return dateNow.month;
    } else if (back == 'year') {
        return dateNow.year;
    } else if (back == null) {
        return dateNow;
    }

    return dateNow;

}

//IGUALA DOIS DIAS EM MYDAT
function equalDat(real, copy) {
    copy.year = real.year;
    copy.month = real.month;
    copy.day = real.day;
}

//IGUALA DOIS DIAS EM MYDAT E REDUZ (PARA SVG'S)
function minusEqualDat(real,copy,times,back){
    equalDat(real,copy);
    return minusDat(copy,times,back);
}

//EXECUTA AO INICIAR
function codeAddress() {
    $('#navCalls').click();
}
window.onload = codeAddress;

//VARIÁVEIS GLOBAIS
var addCallForm = '<form id="addCall-form" action="JavaScript:sendServletAddCall($(\'#addCall-formClient\')[0],$(\'#addCall-formDat\')[0],$(\'#addCall-formDescription\')[0]);">' +
        '<div class="modal-body">' +
        '<div class="input-group">' +
        '<span class="input-group-addon"><i class="material-icons">supervised_user_circle</i></span>' +
        '<input id="addCall-formClient" name="client" class="form-control" type="text" placeholder="Nome do Cliente" required>' +
        '</div>' +
        '<div class="input-group">' +
        '<span class="input-group-addon"><i class="material-icons">calendar_today</i></span>' +
        '<input id="addCall-formDat" name="date" type="date" class="form-control" placeholder="Data do Chamado" required />' +
        '</div>' +
        '<div class="input-group">' +
        '<span class="input-group-addon"><i class="material-icons">contacts</i></span>' +
        '<input id="addCall-formDat" name="tec" type="text" class="form-control" placeholder="Técnico designado" required />' +
        '</div>' +
        '<div class="input-group">' +
        '<span class="input-group-addon"><i class="material-icons">mode_comment</i></span>' +
        '<input id="addCall-formDescription" name="description" class="form-control" type="text" placeholder="Descrição da Solicitação" maxlength="250" required>' +
        '</div>' +
        '</div>' +
        '<div class="modal-footer">' +
        '<div>' +
        '<button type="submit"  class="btn btn-primary">Abrir Chamado</button>' +
        '</div>' +
        '</div>' +
        '</form>';

        