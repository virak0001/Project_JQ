
var url = "https://raw.githubusercontent.com/radytrainer/test-api/master/test.json";
$(document).ready(function () {
    API(url);
    $("#sum").on('click', function () {
        var number = parseInt($("#input").val());
        sum(number);
    })
    $("#minus").on('click', function () {
        var number = parseInt($("#input").val());
        minus(number);
    })
});
var API = (api) => {
    $.ajax({
        dataType: 'json',
        url: url,
        success: (data) => getRecipse(data),
        error: () => console.error("Cannot request data"),
    })
}
function getRecipse(datas) {
    datas.recipes.forEach(element => {
        getAllData(element);
    });
}
var getAllData = (element) => {
    selectionFuntion(element);
}
function selectionFuntion(element) {
    $("#selection").on('change', function () {
        selection = $("#selection").val();
        if (element.id == selection) {
            getIdJsonData(element);
            element.ingredients.forEach(item => {
                getAllElementInRecipse(item);
            });
        }
    })
}
function getIdJsonData(recipse) {
    const { name, iconUrl, nbGuests, instructions } = recipse;
    var display = "";
    display += `
        <div class="row text-center">
            <div class="col-2"></div>
            <div class="col-4">
                <h3 class="text-center" id="result">${name}</h3>
            </div>
            <div class="col-4">
                <class="card">
                <img src="${iconUrl}" class="img-fluid">
                </div>
            </div>
            <div class="col-2"></div>
        </div>
        <div class="container mt-5">
        <div class="row" id="increase">
            <div class="col-2"></div>
            <div class="col-4">
                <h5>Number of persons </h5>
            </div>
            <div class="col-4">
            <form>
            <div class="input-group">
                <div class="input-group-prepend">
                    <button id="minus" type="button"
                        class="btn btn-primary">&nbsp&nbsp&nbsp&nbsp-&nbsp&nbsp&nbsp&nbsp</button>
                </div>
                <input type="text" id="input" class="form-control text-center" value="1" disabled>
                <div class="input-group-prepend">
                    <button type="button" id="sum"
                        class="btn btn-success">&nbsp&nbsp&nbsp&nbsp+&nbsp&nbsp&nbsp&nbsp</button>
                </div>
            </div>
        </form>
            </div>
            <div class="col-2"></div>
        </div>
    </div>
        <div class="container mt-5">
        <div class="row">
            <div class="col-2"></div>
            <div class="col-4">
                <h5 class="text-center"> Ingredients</h5></div>
            <div class="col-4"><h5>Instruction</h5></div>
            <div class="col-2"></div>
        </div>
    </div>
        `;
    display_result(display);
}
function getAllElementInRecipse(item) {
    var displayIngradiants = "";
    displayIngradiants = `
                <div class="span mt-5">
                    <span><img src="${item.iconUrl}" width="30px"></span>&nbsp&nbsp&nbsp
                    <span>${parseInt(item.quantity)}</span>&nbsp&nbsp&nbsp&nbsp
                    <span>${item.unit.charAt(0)}</span>&nbsp&nbsp
                    <span>${item.name}</span>
                </div>
        `;
    $("#ingradiants").append(displayIngradiants);
}
function display_result(out) {
    $("#result").html(out);
}
function sum(number) {
    var add = parseInt(number) + 1;
    if (add <= 15) {
        $("#input").val(add);
        compute(add)
        console.log(add);
    }
}
function minus(number) {
    var minus = parseInt(number) - 1;
    if (minus >= 1) {
        $("#input").val(minus);
        compute(minus);
    }
}

function compute(number) {
    var num = number * 5;
    $("#result").html(num);
}







