
var url = "https://raw.githubusercontent.com/radytrainer/test-api/master/test.json";
$(document).ready(function () {
    API(url);
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
            getAllElementInRecipse(element);
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
        `;
    display_result(display);
}
function getAllElementInRecipse(num) {
    var displayIngradiants = "";
    num.ingredients.forEach(element => {
        const{name,quantity,unit,iconUrl} = element;
    });
        displayIngradiants += `
        <div class="container mt-5">
        <div class="row" id="increase">
            <div class="col-3"></div>
            <div class="col-3">
                <h5>Number of persons </h5>
            </div>
            <div class="col-3">
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
            <div class="col-3"></div>
        </div>
    </div>
    <div class="container mt-5">
        <div class="row">
            <div class="col-2"></div>
            <div class="col-4">
                <h5 class="text-center"> Ingredients</h5>
                <div class="span">
                    <span id="img"></span>
                    <span id="number"></span>
                    <span id="unit"></span>
                    <span id="name_ingradiants">d</span>
                </div>
            </div>
            <div class="col-4">
                <h5>Instruction</h5>
                <p></p>
                <p></p>
                <p></p>
            </div>
            <div class="col-2"></div>
        </div>
    </div>
        `
        $("#result1").html(displayIngradiants);
    
}

function display_result(out) {
    $("#result").html(out);
}

