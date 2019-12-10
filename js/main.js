// getURL function for control url
function getURL() {
    var url = "https://raw.githubusercontent.com/radytrainer/test-api/master/test.json";
    return url;
}
$(document).ready(function () {
    requestdata();
    $("#selection").on('change', function () {
        var chooseRecipse = $("#selection").val();
        recipesId(chooseRecipse);
    })
});

function requestdata() {
    $.ajax({
        dataType: 'json',
        url: getURL(),
        success: (data) => getRecipse(data.recipes),
        error: () => console.error("Cannot request data"),
        error: () => console.log("Cannot get data")
    })
}
var allData = [];
function getRecipse(data) {
    var option = "";
    allData = data;
    data.forEach(element => {
        option += `<option value="${element.id}">${element.name}</option>`;
    });
    $("#selection").append(option);
}
function recipesId(chooseRecipse) {
    allData.forEach(item => {
        if (item.id == chooseRecipse) {
            chooseRecipses(item);
            getIngrediants(item);
            numberOfPerson(item);
            getInstruction(item);
        }
    })
}

function chooseRecipses(item) {
    const { name, iconUrl } = item;
    var result = "";
    result += `
        <div class="col-2"></div>
        <div class="col-4">
            <h4 class="text-center mt-5">${name}</h4><br><br><br><br><br>
        </div>
        <div class="col-4">
        <img src="${iconUrl}" style="width:250px; height:170px">
        </div>
        <div class="col-2"></div>
    `;
    $("#result").html(result);
}

function numberOfPerson(Guests) {
    const{nbGuests} = Guests;
    var person = "";
    person += `
    <div class="col-2 mb-3"></div>
    <div class="col-4">
        <h4>Number of Person</h4>
    </div>
    <div class="col-4">
        <div class="input-group">
            <div class="input-group-prepend">
                <button id="minus" type="button"
                    class="btn btn-primary">&nbsp&nbsp&nbsp&nbsp-&nbsp&nbsp&nbsp&nbsp</button>
            </div>
            <input type="text" id="input" style="width:115px" class="text-center" value="${nbGuests}" disabled>
            <div class="input-group-prepend">
                <button type="button" id="sum"
                    class="btn btn-success">&nbsp&nbsp&nbsp&nbsp+&nbsp&nbsp&nbsp&nbsp</button>
            </div>
        </div>
    </div>
    <div class="col-2"></div><br><br><br>
`;
$("#people").html(person);
$("#sum").on('click', function () {
    var number = parseInt($("#input").val());
    sum(number);
})
$("#minus").on('click', function () {
    var number = parseInt($("#input").val());
    minus(number);
})
}
function getIngrediants(item) {
    var result = "";
    item.ingredients.forEach(element => {
        const { name, quantity, unit, iconUrl } = element;
        result += `
            <tr>
            <td><img src="${iconUrl}" style="width:50px"></td>
            <td id='quantity'>${quantity}</td>
            <td>${unit[0]}</td>
            <td>${name}</td>
            </tr>
        `;
    });
    $("#ingredients").html(result);
}
function  getInstruction(item){

}
function sum(number) {
    var add = parseInt(number) +1;
    if(add <= 15) {
        $("#input").val(add);
    }
}
function minus(number) {
    var minus = parseInt(number)-1;
    if(minus >= 1) {
        $("#input").val(minus);
    }
}