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
        }
    })
}
function chooseRecipses(item) {
    const { name, quantity, unit, iconUrl } = item;
    var result = "";
    result += `
        <div class="col-2"></div>
        <div class="col-4">
            <h4 class="text-center mt-5">${name}</h4><br><br><br><br><br>
            <h5 class="text-center">ingredients</h5>
        </div>
        <div class="col-4">
        <img src="${iconUrl}" style="width:250px; height:170px">
        </div>
        <div class="col-2"></div>
    `;
    $("#result").html(result);
}
function getIngrediants(item) {
    var result = "";
    item.ingredients.forEach(element => {
        const { name, quantity, unit, iconUrl } = element;
        result += `
            <tr>
            <td><img src="${iconUrl}" style="width:50px"></td>
            <td>${quantity}</td>
            <td>${unit}</td>
            <td>${name}</td>
            </tr>
        `;
    });
    $("#ingredients").html(result);
}
