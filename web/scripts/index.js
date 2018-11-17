// ----- ANOTAÇÕES -----
//$("#showHome").delay(500).animate({"opacity": "1"}, 500); e opacity:0 no CSS

// ----- FUNÇÕES QUE CRIAM ELEMENTOS HTML -----

function createTicket(id, title, description) {
    var div = document.createElement('div');
    var cp1 = "\#collapseOne";
    var cp2 = "\#collapseTwo";
    var cp3 = "\#collapseThree";
    title = delimiteLength(title, 9);
    div.id = id;
    div.className = 'col-xs-6 col-sm-6 col-md-6 col-lg-3';
    div.innerHTML = '' +
            '<div class = "panel panel-default demo-chart mdl-shadow--2dp mdl-color-white">' +
            '<div class = "panel-heading panel-heading-danger-fd panelTicketBtnArea"><b class="panel-title-fd">' + title + '</b>' +
            '<div class="btn-group pull-right panelTicketBtn">' +
            '<button onclick= "sendServletReturnCall(this); openCollapsePanels(\'' + cp2 + '\');" id="' + id + '" class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon">' +
            '<i class="material-icons md-light hvGre">check_circle</i>' +
            '</button>' +
            '<button onclick= "sendServletReturnCall(this); openCollapsePanels(\'' + cp2 + '\');" id="' + id + '" class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon">' +
            '<i class="material-icons md-light hvYel">info</i>' +
            '</button>' +
            '<button onclick= "sendServletReturnCall(this); openCollapsePanels(\'' + cp2 + '\');" id="' + id + '" class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon">' +
            '<i class="material-icons md-light hvRed">cancel</i>' +
            '</button>' +
            '</div>' +
            '</div>' +
            '<div class = "panel-body">' + description + '</div>' +
            '</div>';
    document.getElementById("pendingCalls").appendChild(div);
}

function createCategory(id, qtd, description) {
    var div = document.createElement('div');
    div.className = 'col-xs-6 col-sm-4 col-md-3 col-lg-2 container mdl-grid demo-content';
    div.innerHTML = '' +
            '<div class="col mdl-shadow--2dp randomColor">' +
            '<div class="row">' +
            '<div class="col col-sm-6 panelTicketBtnInverter">' +
            '<a onclick="formCategoriesUp()"><i id="catEdit' + id + '" class="material-icons">create</i></a>' +
            '</div>' +
            '<div class="col col-sm-6 panelTicketBtnInverter">' +
            '<a onclick="alert()"><i id="catDelete' + id + '" class="material-icons">clear</i></a>' +
            '</div>' +
            '</div>' +
            '<div onclick="alert(a)" class="row">' +
            '<div class="col col-sm-12">' +
            '<h1><b>' + qtd + '</b></h1><br>' +
            '<p><b>' + description + '</b></p><br>' +
            '</div>' +
            '</div>' +
            '</div>';
    document.getElementById("categories").appendChild(div);
    var collection = $(".randomColor");
    collection.each(function () {
        colorCategory(this);
    });
}

function createNavCategory(id, qtd, description) {
    var div = document.createElement('div');
    div.innerHTML = '' +
            '<a id="nav' + id + '" class="mdl-navigation__link" href="">' +
            '<i class="material-icons" role="presentation">' +
            'navigate_next' +
            '</i>' + description + '</a>';
    document.getElementById("navCategories").appendChild(div);
}

function createCategoryButton() {
    var div = document.createElement('div');
    div.className = 'col-xs-6 col-sm-4 col-md-3 col-lg-2 container mdl-grid demo-content';
    div.style = 'cursor:pointer; ';
    div.innerHTML = '' +
            '<div class="col mdl-shadow--2dp bWhite">' +
            '<div class="row">' +
            '<div class="col col-sm-12">' +
            '<h1><b><i class="material-icons" style="font-size: 72px;">add_circle</i></b></h1><br>' +
            '<p><b>ADICIONAR CATEGORIA</b></p><br>' +
            '</div>' +
            '</div>' +
            '</div>';
    document.getElementById("categoriesBtn").appendChild(div);
}

function createClient(id, nome, cpf, contato, email) {

    var table = document.getElementById('clientTableBody');
    var tr = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');
    var td5 = document.createElement('td');
    $(tr).attr("id", id);
    $(td1).attr("data-title", "NOME");
    $(td2).attr("data-title", "CPF");
    $(td3).attr("data-title", "CONTATO");
    $(td4).attr("data-title", "EMAIL");
    $(td5).attr("data-title", "AÇÕES");
    td1.innerHTML = nome;
    td2.innerHTML = cpf;
    td3.innerHTML = contato;
    td4.innerHTML = email;
    td5.innerHTML = '<button id="' + id + '" class="btn btn-sm btn-warning" onclick="sendServletReturnClient(this); formClientsUp(); localStorage.setItem(\'selectedClient\', this.id); $(\'#cAreaForm\').attr(\'action\', \'JavaScript:sendServletAlterClient();\');"><i class="material-icons">create</i></button>&nbsp' +
            '<button id="' + id + '" class="btn btn-sm btn-danger" onclick="sendServletDropClient(this);"><i class="material-icons">delete</i></button>';
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    table.appendChild(tr);
}

function createEmployee(id, nome, cpf, attr) {

    var table = document.getElementById('employeeTableBody');
    var tr = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');
    $(tr).attr("id", id);
    $(td1).attr("data-title", "NOME");
    $(td2).attr("data-title", "CPF");
    $(td3).attr("data-title", "ATRIBUIÇÕES");
    $(td4).attr("data-title", "AÇÕES");
    td1.innerHTML = nome;
    td2.innerHTML = cpf;
    td3.innerHTML = attr;
    td4.innerHTML = '<button id="' + id + '" class="btn btn-sm btn-warning" onclick="sendServletReturnEmployee(this); formEmployeesUp(); localStorage.setItem(\'selectedEmployee\', this.id); $(\'#eAreaForm\').attr(\'action\', \'JavaScript:sendServletAlterEmployee();\');"><i class="material-icons">create</i></button>&nbsp' +
            '<button id="' + id + '" class="btn btn-sm btn-danger" onclick="sendServletDropEmployee(this);"><i class="material-icons">delete</i></button>';
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    table.appendChild(tr);
}

// ----- FUNÇÕES TABELA -----

$(document).ready(function () {
    var activeSystemClass = $('.list-group-item.active');
    //something is entered in search form
    $('#system-search').keyup(function () {
        var that = this;
        // affect all table rows on in systems table
        var tableBody = $('.table-list-search tbody');
        var tableRowsClass = $('.table-list-search tbody tr');
        $('.search-sf').remove();
        tableRowsClass.each(function (i, val) {

            //Lower text for case insensitive
            var rowText = $(val).text().toLowerCase();
            var inputText = $(that).val().toLowerCase();
            if (inputText != '')
            {
                $('.search-query-sf').remove();
                tableBody.prepend('<tr class="search-query-sf"><td colspan="6"><strong>Resultados: "'
                        + $(that).val()
                        + '"</strong></td></tr>');
            } else
            {
                $('.search-query-sf').remove();
            }

            if (rowText.indexOf(inputText) == -1)
            {
                //hide rows
                tableRowsClass.eq(i).hide();
            } else
            {
                $('.search-sf').remove();
                tableRowsClass.eq(i).show();
            }
        });
        //all tr elements are hidden
        if (tableRowsClass.children(':visible').length == 0)
        {
            tableBody.append('<tr class="search-sf"><td class="text-muted" colspan="6">Nenhum Cliente foi encontrado.</td></tr>');
        }
    });
    $('#system-searchTec').keyup(function () {
        var that = this;
        // affect all table rows on in systems table
        var tableBody = $('.table-list-search tbody');
        var tableRowsClass = $('.table-list-search tbody tr');
        $('.search-sf').remove();
        tableRowsClass.each(function (i, val) {

            //Lower text for case insensitive
            var rowText = $(val).text().toLowerCase();
            var inputText = $(that).val().toLowerCase();
            if (inputText != '')
            {
                $('.search-query-sf').remove();
                tableBody.prepend('<tr class="search-query-sf"><td colspan="4"><strong>Resultados: "'
                        + $(that).val()
                        + '"</strong></td></tr>');
            } else
            {
                $('.search-query-sf').remove();
            }

            if (rowText.indexOf(inputText) == -1)
            {
                //hide rows
                tableRowsClass.eq(i).hide();
            } else
            {
                $('.search-sf').remove();
                tableRowsClass.eq(i).show();
            }
        });
        //all tr elements are hidden
        if (tableRowsClass.children(':visible').length == 0)
        {
            tableBody.append('<tr class="search-sf"><td class="text-muted" colspan="6">Nenhum Técnico foi encontrado.</td></tr>');
        }
    });
});

// ----- FUNÇÕES SWITCH -----

$('#home').click(function () {
    $('#showContent').animate({"opacity": "0"}, 500);
    $('#showContent').hide();
    $('#showClients').animate({"opacity": "0"}, 500);
    $('#showClients').hide();
    $('#showEmployees').animate({"opacity": "0"}, 500);
    $('#showEmployees').hide();
    $('#formCategories').animate({"opacity": "0"}, 500);
    $('#formCategories').hide();
    $("#mainContent").removeClass("bkImgTec");
    $("#mainContent").removeClass("bkImgCli");
    $("#mainContent").removeClass("bkImgTic");
    $("#mainContent").addClass("bkImgCat");
    $('#showHome').animate({"opacity": "1"}, 500);
    $('#showHome').show();
    $('#categories').animate({"opacity": "1"}, 500);
    $('#categories').show();
    $('#categoriesBtn').animate({"opacity": "1"}, 500);
    $('#categoriesBtn').show();
    $('#titlePage').html('HOME');
    sendServletRefreshCategories();
});

$('#navCalls').click(function () {
    $('#showClients').animate({"opacity": "0"}, 500);
    $('#showClients').hide();
    $('#showHome').animate({"opacity": "0"}, 500);
    $('#showHome').hide();
    $('#showEmployees').animate({"opacity": "0"}, 500);
    $('#showEmployees').hide();
    $("#mainContent").removeClass("bkImgTec");
    $("#mainContent").removeClass("bkImgCli");
    $("#mainContent").removeClass("bkImgCat");
    $("#mainContent").addClass("bkImgTic");
    $('#showContent').animate({"opacity": "1"}, 500);
    $('#showContent').show();
    $('#titlePage').html('CHAMADOS');
    $('.contentX').attr('id', 'pendingCalls');
    $('#addPanelTitle').html('ADICIONAR');
    $('#changePanelTitle').html('ALTERAR');
    $('#fixPanelTitle').html('RESOLVER');
    $('#reportPanelTitle').html('RELATÓRIO');
    $('#addPanelBody').html(addTicketForm);
    $('#fixPanelBody').html(fixTicketForm);
    $('#reportPanelBody').html(reportTicketForm);
    $('#changePanelBody').html(changeTicketForm);
    sendServletRefreshCall();
    sendServletRefreshClients();
    sendServletRefreshEmployees();
    openCollapsePanels($('#collapseOne'));
});

$('#navClients').click(function () {
    sendServletRefreshClients();
    $('#showHome').animate({"opacity": "0"}, 500);
    $('#showHome').hide();
    $('#showContent').animate({"opacity": "0"}, 500);
    $('#showContent').hide();
    $('#formClients').animate({"opacity": "0"}, 500);
    $('#formClients').hide();
    $('#showEmployees').animate({"opacity": "0"}, 500);
    $('#showEmployees').hide();
    $("#mainContent").removeClass("bkImgTec");
    $("#mainContent").removeClass("bkImgCat");
    $("#mainContent").removeClass("bkImgTic");
    $("#mainContent").addClass("bkImgCli");
    $('#showClients').animate({"opacity": "1"}, 500);
    $('#showClients').show();
    $('#tableClients').animate({"opacity": "1"}, 500);
    $('#tableClients').show();
    $('#titlePage').html('CLIENTES');
});

$('#navEmployees').click(function () {
    $('#showHome').animate({"opacity": "0"}, 500);
    $('#showHome').hide();
    $('#showContent').animate({"opacity": "0"}, 500);
    $('#showContent').hide();
    $('#showClients').animate({"opacity": "0"}, 500);
    $('#showClients').hide();
    $('#formEmployees').animate({"opacity": "0"}, 500);
    $('#formEmployees').hide();
    $("#mainContent").removeClass("bkImgCli");
    $("#mainContent").removeClass("bkImgCat");
    $("#mainContent").removeClass("bkImgTic");
    $("#mainContent").addClass("bkImgTec");
    $('#showEmployees').animate({"opacity": "1"}, 500);
    $('#showEmployees').show();
    $('#tableEmployees').animate({"opacity": "1"}, 500);
    $('#tableEmployees').show();
    $('#titlePage').html('TÉCNICOS');
});

$('#formClientsBack').click(function () {
    sendServletRefreshClients();
    $('#formClients').animate({"opacity": "0"}, 500);
    $('#formClients').hide();
    $('#tableClients').animate({"opacity": "1"}, 500);
    $('#tableClients').show();
});

$('.formClientsUp').click(function () {
    $('#tableClients').animate({"opacity": "0"}, 500);
    $('#tableClients').hide();
    $('#formClients').animate({"opacity": "1"}, 500);
    $('#formClients').show();
});

function formClientsUp() {
    $('#tableClients').animate({"opacity": "0"}, 500);
    $('#tableClients').hide();
    $('#formClients').animate({"opacity": "1"}, 500);
    $('#formClients').show();
}

$('#formEmployeesBack').click(function () {
    $('#formEmployees').animate({"opacity": "0"}, 500);
    $('#formEmployees').hide();
    $('#tableEmployees').animate({"opacity": "1"}, 500);
    $('#tableEmployees').show();
});

$('.formEmployeesUp').click(function () {
    $('#tableEmployees').animate({"opacity": "0"}, 500);
    $('#tableEmployees').hide();
    $('#formEmployees').animate({"opacity": "1"}, 500);
    $('#formEmployees').show();
});

function formEmployeesUp() {
    $('#tableEmployees').animate({"opacity": "0"}, 500);
    $('#tableEmployees').hide();
    $('#formEmployees').animate({"opacity": "1"}, 500);
    $('#formEmployees').show();
}

$('#formCategoriesBack').click(function () {
    $('#formCategories').animate({"opacity": "0"}, 500);
    $('#formCategories').hide();
    $('#categories').animate({"opacity": "1"}, 500);
    $('#categories').show();
    $('#categoriesBtn').animate({"opacity": "1"}, 500);
    $('#categoriesBtn').show();
});

$('.formCategoriesUp').click(function () {
    $('#categories').animate({"opacity": "0"}, 500);
    $('#categories').hide();
    $('#categoriesBtn').animate({"opacity": "0"}, 500);
    $('#categoriesBtn').hide();
    $('#formCategories').animate({"opacity": "1"}, 500);
    $('#formCategories').show();
});

function formCategoriesUp() {
    $('#categories').animate({"opacity": "0"}, 500);
    $('#categories').hide();
    $('#categoriesBtn').animate({"opacity": "0"}, 500);
    $('#categoriesBtn').hide();
    $('#formCategories').animate({"opacity": "1"}, 500);
    $('#formCategories').show();
}

// ----- CHAMADAS PARA GRÁFICOS -----

function drawSVGCalls(qtdCalls, qtdReadyCalls, dateNow) {

    var realDateNow = new Object();
    equalDat(dateNow, realDateNow);
    var data = google.visualization.arrayToDataTable([
        ['Dia', 'Concluídos', 'Pendentes'],
        [`${minusEqualDat(realDateNow, dateNow, 7, 'day')} / ${minusEqualDat(realDateNow, dateNow, 7, 'month')}`, qtdReadyCalls[7], qtdCalls[7]],
        [`${minusEqualDat(realDateNow, dateNow, 6, 'day')} / ${minusEqualDat(realDateNow, dateNow, 6, 'month')}`, qtdReadyCalls[6], qtdCalls[6]],
        [`${minusEqualDat(realDateNow, dateNow, 5, 'day')} / ${minusEqualDat(realDateNow, dateNow, 5, 'month')}`, qtdReadyCalls[5], qtdCalls[5]],
        [`${minusEqualDat(realDateNow, dateNow, 4, 'day')} / ${minusEqualDat(realDateNow, dateNow, 4, 'month')}`, qtdReadyCalls[4], qtdCalls[4]],
        [`${minusEqualDat(realDateNow, dateNow, 3, 'day')} / ${minusEqualDat(realDateNow, dateNow, 3, 'month')}`, qtdReadyCalls[3], qtdCalls[3]],
        [`${minusEqualDat(realDateNow, dateNow, 2, 'day')} / ${minusEqualDat(realDateNow, dateNow, 2, 'month')}`, qtdReadyCalls[2], qtdCalls[2]],
        [`${minusEqualDat(realDateNow, dateNow, 1, 'day')} / ${minusEqualDat(realDateNow, dateNow, 1, 'month')}`, qtdReadyCalls[1], qtdCalls[1]],
        [`Hoje`, qtdReadyCalls[0], qtdCalls[0]]
    ]);
    var options = {
        title: 'Chamados dos Últimos 7 Dias',
        hAxis: {title: 'Data', titleTextStyle: {color: '#333'}},
        vAxis: {minValue: 0},
        animation: {
            duration: 1000,
            easing: 'out',
        },
    };
    var chart = new google.visualization.AreaChart(document.getElementById('graphs'));
    chart.draw(data, options);
}

// ----- CHAMADAS PARA SERVLETS -----

function sendServletAddCall(client, dat, description, priority, category) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var call = JSON.parse(xhr.responseText);
            createTicket(call.id, call.cliente, call.descricao);
            document.getElementById('addCall-form').reset();
            sendServletRefreshCall();
        }
    };
    xhr.open("post", "registerCall", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send("client=" + client.value + "&date=" + dat.value + "&description=" + description.value + "&priority=" + priority.value + "&category=" + category.value);
}

//AINDA NÃO CHAMA NADA
function sendServletChangeCall(client, dat, description) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var call = JSON.parse(xhr.responseText);
            //createTicket(call.id, call.cliente, call.descricao);
            document.getElementById('changeCall-form').reset();
            sendServletRefreshCall();
        }
    };
    xhr.open("post", "changeCall", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send("client=" + client.value + "&date=" + dat.value + "&description=" + description.value + "");
}

function sendServletFixCall() {

    var callToFind = $('#fixCall-formselectedCall')[0];
    var description = document.getElementById('fixCall-formDescription').value;
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var element = document.getElementById(callToFind.innerHTML);
            element.parentNode.removeChild(element);
            document.getElementById('fixCall-form').reset();
            closeCollapsePanels($('#collapseTwo'));
            sendServletRefreshCall();
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
            $('#reportCall-formResult').val();
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
                $("#reportCall-formResult").css("visibility", "visible");
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

function sendServletRefreshCall() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = xhr.responseText;
            //VERIFICAÇÃO PARA JSON NULO
            try {
                var jsonData = JSON.parse(response);
            } catch (err) {
                $("#pendingCalls").html("<p class='fullCenter'>Não existem Tickets Pendentes!</p>");
                $("#graphs").html("<div class='fullCenter'>Não existem Gráficos para estes Tickets!</div>");
                return false;
            }

            $("#pendingCalls").html("");
            var dateNow = myDat(new Date);
            var count = 0;
            //DESENHA OS CHAMADOS ABERTOS
            for (var i = 0; i < jsonData.calls.length; i++) {
                var call = jsonData.calls[i];
                if (call.status === 'false') {
                    createTicket(call.id, call.cliente, call.descricao);
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
                        if (convertedCall.month === dateNow.month) {
                            if (convertedCall.year === dateNow.year) {
                                if (call.status === 'false') {
                                    countCalls++;
                                }
                                if (call.status !== 'false') {
                                    countReadyCalls++;
                                }
                            }
                        }
                    }
                }

                minusDat(dateNow, 1);
                valuesSVG[o] = countCalls;
                valuesSVGReady[o] = countReadyCalls;
            }

            drawSVGCalls(valuesSVG, valuesSVGReady, realDateNow);
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
                if (call.id === choosenCall.id) {
                    document.getElementById('fixCall-form').reset();
                    document.getElementById('fixCall-formClient').value = call.cliente;
                    document.getElementById('fixCall-formDat').value = call.data;
                    document.getElementById('fixCall-formDescription').value = call.descricao;
                    document.getElementById('fixCall-formselectedCall').innerHTML = call.id;
                    openCollapsePanels($('#collapseTwo'));
                }
            }
        }
    };
    xhr.open("post", "refreshCall", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send();
}

// ----- CHAMADAS PARA SERVLETS DE CLIENTES -----

function sendServletAddClient() {

    var name = $('#cAreaFormClient').val();
    var login = $('#cAreaFormLogin').val();
    var password = $('#cAreaFormPassword').val();
    var checkPassword = $('#cAreaFormCheckPassword').val();
    var cpf = $('#cAreaFormCPF').val();
    var address = $('#cAreaFormAddress').val();
    var number = $('#cAreaFormNumber').val();
    var city = $('#cAreaFormCity').val();
    var neigh = $('#cAreaFormNeigh').val();
    var state = $('#cAreaFormState').val();
    var cep = $('#cAreaFormCEP').val();
    var contact = $('#cAreaFormContact').val();
    var email = $('#cAreaFormEmail').val();
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var call = JSON.parse(xhr.responseText);
            createClient(call.id, call.name, call.cpf, call.contact, call.email);
            $('#cAreaForm')[0].reset();
            $('#formClientsBack').click();
            //sendServletRefreshCall();
        }
    };
    xhr.open("post", "clientRegister", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send("name=" + name + "&login=" + login + "&password=" + password + "&cpf=" + cpf + "&address=" + address + "&number=" + number + "&city=" + city + "&state=" + state + "&neigh=" + neigh + "&cep=" + cep + "&contact=" + contact + "&email=" + email);
}

function sendServletAlterClient() {

    var id = localStorage.getItem("selectedClient");
    var name = $('#cAreaFormClient').val();
    var login = $('#cAreaFormLogin').val();
    var password = $('#cAreaFormPassword').val();
    var checkPassword = $('#cAreaFormCheckPassword').val();
    var cpf = $('#cAreaFormCPF').val();
    var address = $('#cAreaFormAddress').val();
    var number = $('#cAreaFormNumber').val();
    var city = $('#cAreaFormCity').val();
    var neigh = $('#cAreaFormNeigh').val();
    var state = $('#cAreaFormState').val();
    var cep = $('#cAreaFormCEP').val();
    var contact = $('#cAreaFormContact').val();
    var email = $('#cAreaFormEmail').val();
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            sendServletRefreshClients();
            $('#formClientsBack').click();
        }
    };
    xhr.open("post", "clientAlter", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send("name=" + name + "&login=" + login + "&password=" + password + "&cpf=" + cpf + "&address=" + address + "&number=" + number + "&city=" + city + "&state=" + state + "&neigh=" + neigh + "&cep=" + cep + "&contact=" + contact + "&email=" + email + "&id=" + id);
}

function sendServletReturnClient(choosenClient) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = xhr.responseText;
            var jsonData = JSON.parse(response);
            for (var i = 0; i < jsonData.clients.length; i++) {
                var client = jsonData.clients[i];
                if (choosenClient.id === client.id) {
                    $('#cAreaFormClient').val(client.name);
                    $('#cAreaFormLogin').val(client.login);
                    $('#cAreaFormPassword').val(client.password);
                    $('#cAreaFormCheckPassword').val(client.password);
                    $('#cAreaFormCPF').val(client.cpf);
                    $('#cAreaFormAddress').val(client.log);
                    $('#cAreaFormNumber').val(client.number);
                    $('#cAreaFormCity').val(client.city);
                    $('#cAreaFormNeigh').val(client.neigh);
                    $('#cAreaFormState').val(client.state);
                    $('#cAreaFormCEP').val(client.zip);
                    $('#cAreaFormContact').val(client.contact);
                    $('#cAreaFormEmail').val(client.email);
                }
            }
        }
    };
    xhr.open("post", "clientRefresh", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send();
}

function sendServletDropClient(choosenClient) {

    var r = confirm("Deseja mesmo excluir este Cliente?");
    if (r === true) {

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                $('#' + choosenClient.id).remove();
            }
        };

        xhr.open("post", "clientDrop", true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send("id=" + choosenClient.id);

    } else {

    }

}

function sendServletRefreshClients() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {

            var response = xhr.responseText;
            try {
                var jsonData = JSON.parse(response);
            } catch (err) {
                $("#clientTableBody").html("");
                $("#clientTableBody").html("Não existem Clientes cadastrados.");
                return false;
            }

            var jsonData = JSON.parse(response);
            $("#clientTableBody").html("");
            //DESENHA OS CLIENTES
            for (var i = 0; i < jsonData.clients.length; i++) {
                var client = jsonData.clients[i];
                createClient(client.id, client.name, client.cpf, client.contact, client.email);
                $("#addCall-formClient").append("<option value='" + client.name + "'>" + client.name + "</option>");
                $("#changeCall-formClient").append("<option value='" + client.name + "'>" + client.name + "</option>");
                $("#fixCall-formClient").append("<option value='" + client.name + "'>" + client.name + "</option>");
                $("#reportCall-formClient").append("<option value='" + client.name + "'>" + client.name + "</option>");
            }

        }
    };
    xhr.open("post", "clientRefresh", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send();
}

// ----- CHAMADAS PARA SERVLETS DE TÉCNICOS -----

function sendServletAddEmployee() {

    var name = $('#eAreaFormClient').val();
    var login = $('#eAreaFormLogin').val();
    var password = $('#eAreaFormPassword').val();
    var checkPassword = $('#eAreaFormCheckPassword').val();
    var cpf = $('#eAreaFormCPF').val();
    var address = $('#eAreaFormAddress').val();
    var number = $('#eAreaFormNumber').val();
    var city = $('#eAreaFormCity').val();
    var neigh = $('#eAreaFormNeigh').val();
    var state = $('#eAreaFormState').val();
    var cep = $('#eAreaFormCEP').val();
    var contact = $('#eAreaFormContact').val();
    var email = $('#eAreaFormEmail').val();
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log(xhr.responseText);
            var call = JSON.parse(xhr.responseText);
            createEmployee(call.id, call.name, call.cpf, call.contact, call.email);
            $('#eAreaForm')[0].reset();
            $('#formEmployeesBack').click();
            sendServletRefreshCall();
        }
    };
    xhr.open("post", "employeeRegister", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send("name=" + name + "&login=" + login + "&password=" + password + "&cpf=" + cpf + "&address=" + address + "&number=" + number + "&city=" + city + "&state=" + state + "&neigh=" + neigh + "&cep=" + cep + "&contact=" + contact + "&email=" + email);
}

function sendServletAlterEmployee() {

    var id = localStorage.getItem("selectedEmployee");
    var name = $('#eAreaFormClient').val();
    var login = $('#eAreaFormLogin').val();
    var password = $('#eAreaFormPassword').val();
    var checkPassword = $('#eAreaFormCheckPassword').val();
    var cpf = $('#eAreaFormCPF').val();
    var address = $('#eAreaFormAddress').val();
    var number = $('#eAreaFormNumber').val();
    var city = $('#eAreaFormCity').val();
    var neigh = $('#eAreaFormNeigh').val();
    var state = $('#eAreaFormState').val();
    var cep = $('#eAreaFormCEP').val();
    var contact = $('#eAreaFormContact').val();
    var email = $('#eAreaFormEmail').val();
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            sendServletRefreshEmployees();
            $('#formEmployeesBack').click();
        }
    };
    xhr.open("post", "employeeAlter", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send("name=" + name + "&login=" + login + "&password=" + password + "&cpf=" + cpf + "&address=" + address + "&number=" + number + "&city=" + city + "&state=" + state + "&neigh=" + neigh + "&cep=" + cep + "&contact=" + contact + "&email=" + email + "&id=" + id);
}

function sendServletReturnEmployee(choosenEmployee) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = xhr.responseText;
            var jsonData = JSON.parse(response);
            for (var i = 0; i < jsonData.employees.length; i++) {
                var employee = jsonData.employees[i];
                if (choosenEmployee.id === employee.id) {
                    $('#eAreaFormClient').val(employee.name);
                    $('#eAreaFormLogin').val(employee.login);
                    $('#eAreaFormPassword').val(employee.password);
                    $('#eAreaFormCheckPassword').val(employee.password);
                    $('#eAreaFormCPF').val(employee.cpf);
                    $('#eAreaFormAddress').val(employee.log);
                    $('#eAreaFormNumber').val(employee.number);
                    $('#eAreaFormCity').val(employee.city);
                    $('#eAreaFormNeigh').val(employee.neigh);
                    $('#eAreaFormState').val(employee.state);
                    $('#eAreaFormCEP').val(employee.zip);
                    $('#eAreaFormContact').val(employee.contact);
                    $('#eAreaFormEmail').val(employee.email);
                }
            }
        }
    };
    xhr.open("post", "employeeRefresh", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send();
}

function sendServletDropEmployee(choosenEmployee) {

    var r = confirm("Deseja mesmo excluir este Técnico?");
    if (r === true) {

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                $('#' + choosenEmployee.id).remove();
            }
        };

        xhr.open("post", "employeeDrop", true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send("id=" + choosenEmployee.id);

    } else {

    }

}

function sendServletRefreshEmployees() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {

            var response = xhr.responseText;
            try {
                var jsonData = JSON.parse(response);
            } catch (err) {
                $("#employeeTableBody").html("");
                $("#employeeTableBody").html("Não existem Técnicos cadastrados.");
                return false;
            }

            var jsonData = JSON.parse(response);
            $("#employeeTableBody").html("");
            //DESENHA OS TÉCNICOS
            for (var i = 0; i < jsonData.employees.length; i++) {
                var employee = jsonData.employees[i];
                createEmployee(employee.id, employee.name, employee.cpf, employee.attr);
                $("#addCall-formTec").append("<option value='" + employee.name + "'>" + employee.name + "</option>");
                $("#changeCall-formTec").append("<option value='" + employee.name + "'>" + employee.name + "</option>");
                $("#fixCall-formTec").append("<option value='" + employee.name + "'>" + employee.name + "</option>");
                $("#reportCall-formTec").append("<option value='" + employee.name + "'>" + employee.name + "</option>");
            }

        }
    };
    xhr.open("post", "employeeRefresh", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send();
}

// ----- CHAMADAS PARA SERVLETS DE CATEGORIAS -----

//AINDA NÃO CHAMA NADA
function sendServletRefreshCategories() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = xhr.responseText;
            try {
                var jsonData = JSON.parse(response);
            } catch (err) {
                $("#showClients").html("");
                createCategoryBtn();
                return false;
            }

            var jsonData = JSON.parse(response);
            $("#navCategories").html("");
            $("#categories").html("");
            //DESENHA AS CATEGORIAS
            for (var i = 0; i < jsonData.categories.length; i++) {
                var category = jsonData.categories[i];
                createCategory(category.id, category.qtd, category.descripion);
                createNavCategory(category.id, category.qtd, category.descripion);
            }

        }
    };
    xhr.open("post", "refreshCategories", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send();
}

// ----- FUNÇÕES AUXILIARES -----

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
        var a = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
        return a[dateNow.month - 1];
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
function minusEqualDat(real, copy, times, back) {
    equalDat(real, copy);
    return minusDat(copy, times, back);
}

//COR ALEATÓRIA NA CATEGORIA
function colorCategory(category) {
    var colors = ['#ee3b78', '#34d387', '#94f03c', '#ff703f', '#4c4cd4', '#7f41d1', '#ffee3f', '#ffcf3f'];
    var textColors = ['#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#000000', '#000000'];
    var choosed = Math.floor(Math.random() * 7) + 0;
    $(category).css('background-color', colors[choosed]);
    $(category).css('color', textColors[choosed]);
    $(category).css('cursor', 'pointer');
}

//DELIMITA O TAMANHO DAS STRINGS
function delimiteLength(str, num) {
    var newstr = "";
    for (var i = 0; i < num; i++) {
        var c = str.charAt(i);
        newstr += c;
    }
    return newstr;
}

//ABRE O PANEL SELECIONADO, SE JÁ NÃO ESTIVER ABERTO
function openCollapsePanels(button) {
    var check = $(button).hasClass('in');
    if (check === false) {
        if ($(button).attr('id') === 'collapseOne') {
            $('#addPanelTitleBtn').click();
            closeCollapsePanels($('#collapseTwo'));
            closeCollapsePanels($('#collapseThree'));
            return;
        } else if ($(button).attr('id') === 'collapseTwo') {
            $('#fixPanelTitleBtn').click();
            closeCollapsePanels($('#collapseOne'));
            closeCollapsePanels($('#collapseThree'));
            return;
        } else if ($(button).attr('id') === 'collapseThree') {
            $('#reportPanelTitleBtn').click();
            closeCollapsePanels($('#collapseOne'));
            closeCollapsePanels($('#collapseTwo'));
            return;
        }
    } else if (check === true) {
        if ($(button).attr('id') === 'collapseOne') {
            closeCollapsePanels($('#collapseTwo'));
            closeCollapsePanels($('#collapseThree'));
            return;
        } else if ($(button).attr('id') === 'collapseTwo') {
            closeCollapsePanels($('#collapseOne'));
            closeCollapsePanels($('#collapseThree'));
            return;
        } else if ($(button).attr('id') === 'collapseThree') {
            closeCollapsePanels($('#collapseOne'));
            closeCollapsePanels($('#collapseTwo'));
            return;
        }
    }
    return;
}

//FECHA O PANEL SELECIONADO, SE JÁ NÃO ESTIVER FECHADO
function closeCollapsePanels(button) {
    var check = $(button).hasClass('in');
    if (check === false) {
        return;
    } else if (check === true) {
        if ($(button).attr('id') === 'collapseOne') {
            $('#addPanelTitleBtn').click();
            return;
        } else if ($(button).attr('id') === 'collapseTwo') {
            $('#fixPanelTitleBtn').click();
            return;
        } else if ($(button).attr('id') === 'collapseThree') {
            $('#reportPanelTitleBtn').click();
            return;
        } else if ($(button).attr('id') === 'collapseFour') {
            $('#changePanelTitleBtn').click();
            return;
        }
        console.log($(button).attr('id'));
    }
    return;
}

//EXECUTA AO INICIAR
function codeAddress() {

    $('#navCalls').click();
    createCategoryButton();
    createCategory();
    createNavCategory();
    $("#reportCall-formResult").css("visibility", "hidden");
}

window.onload = codeAddress;
// ----- VARIÁVEIS GLOBAIS -----

var addTicketForm = '<form id="addCall-form" action="JavaScript:sendServletAddCall($(\'#addCall-formClient\')[0],$(\'#addCall-formDat\')[0],$(\'#addCall-formDescription\')[0]);">' +
        '<div class="modal-body">' +
        '<select id="addCall-formClient" name="client" class="form-control inputClient" required>' +
        '<option value="" disabled selected>Nome do Cliente</option>' +
        '</select>' +
        '<input id="addCall-formDat" name="date" type="date" class="form-control inputCalendar" placeholder="Data do Chamado" required />' +
        '<select id="addCall-formTec" name="tec" class="form-control inputTec" required>' +
        '<option value="" disabled selected>Nome do Técnico</option>' +
        '</select>' +
        '<input id="addCall-formDescription" name="description" class="form-control inputComment" type="text" placeholder="Descrição da Solicitação" maxlength="250" required>' +
        '</div><div class="modal-footer"><div>' +
        '<button type="submit"  class="btn btn-danger">Adicionar</button>' +
        '</div></div></form>';
var changeTicketForm = '<form id="changeCall-form" action="JavaScript:sendServletChangeCall($(\'#changeCall-formClient\')[0],$(\'#changeCall-formDat\')[0],$(\'#changeCall-formDescription\')[0]);">' +
        '<div class="modal-body">' +
        '<select id="changeCall-formClient" name="client" class="form-control inputClient" required>' +
        '<option value="" disabled selected>Nome do Cliente</option>' +
        '</select>' +
        '<input id="changeCall-formDat" name="date" type="date" class="form-control inputCalendar" placeholder="Data do Chamado" required />' +
        '<select id="changeCall-formTec" name="tec" class="form-control inputTec" required>' +
        '<option value="" disabled selected>Nome do Técnico</option>' +
        '</select>' +
        '<input id="changeCall-formDescription" name="description" class="form-control inputComment" type="text" placeholder="Descrição da Solicitação" maxlength="250" required>' +
        '</div><div class="modal-footer"><div>' +
        '<button type="submit"  class="btn btn-danger">Adicionar</button>' +
        '</div></div></form>';
var fixTicketForm = '<form id="fixCall-form" action="JavaScript:sendServletFixCall($(\'#fix_Call-formClient\')[0]);">' +
        '<div id="fixCall-formselectedCall" class="hidden"></div>' +
        '<div class="modal-body">' +
        '<select id="fixCall-formClient" name="client" class="form-control inputClient" required>' +
        '<option value="" disabled selected>Nome do Cliente</option>' +
        '</select>' +
        '<input id="fixCall-formDat" name="date" type="date" class="form-control inputCalendar" placeholder="Data do Chamado"/>' +
        '<select id="fixCall-formTec" name="tec" class="form-control inputTec" required>' +
        '<option value="" disabled selected>Nome do Técnico</option>' +
        '</select>' +
        '<textarea id="fixCall-formDescription" name="description" class="form-control inputBigComment" placeholder="Insira aqui os procedimentos realizados" rows="4" cols="50" name="comment" form="usrform"></textarea>' +
        '<br>' +
        '<div id="fixCall-formResult" class="text-center"></div>' +
        '</div>' +
        '<div class="modal-footer">' +
        '<div>' +
        '<button type="submit" class="btn btn-danger">Resolver</button>' +
        '</div>' +
        '</div>' +
        '</form>';
var reportTicketForm = '<form id="reportCall-form" action="JavaScript:sendServletReportCall();">' +
        '<div id="reportCall-formselectedCall" class="hidden"></div>' +
        '<div class="modal-body">' +
        '<select id="reportCall-formClient" name="client" class="form-control inputClient" required>' +
        '<option value="" disabled selected>Nome do Cliente</option>' +
        '</select>' +
        '<select id="reportCall-formTec" name="tec" class="form-control inputTec" required>' +
        '<option value="" disabled selected>Nome do Técnico</option>' +
        '</select>' +
        '<input id="reportCall-formDatIni" name="dateini" class="form-control inputCalendar" type="date"/>' +
        '<input id="reportCall-formDatFin" name="datefin" class="form-control inputCalendar2" type="date"/>' +
        '<br>' +
        '</div>' +
        '<div class="modal-footer">' +
        '<div>' +
        '<button type="submit"  class="btn btn-danger">Gerar Relatório</button>' +
        '</div>' +
        '</div>' +
        '</form>';
