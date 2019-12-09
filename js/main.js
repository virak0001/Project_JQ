// getURL function for control url
function getURL() {
    var url = "https://raw.githubusercontent.com/radytrainer/test-api/master/test.json";
    return url;
}
$(document).ready(function () {
    requestdata();
});

function requestdata() {
    $.ajax({
        dataType: 'json',
        url: getURL(),
        success: (data) => getRecipse(data),
        error: () => console.error("Cannot request data"),
        error: () => console.log("Cannot get data")
    })
}
function getRecipse(data) {
    var option = "";
    selectionRecipse(data);
    data.recipes.forEach(element => {
        option += `<option value="${element.id}">${element.name}</option>`;
    });
    $("#selection").append(option);
}
function selectionRecipse(datas) {
    datas.recipes.forEach(element => {
        $("#selection").on('change', function() {
            var chooseRecipse = $("#selection").val();
            if(element.id == chooseRecipse) {
                chooseRecipses(element);
                element.ingredients.forEach(element => {
                    getIngrediants(element);
                });
            }
        })
    });
}
function chooseRecipses(item) {
    console.log(item.name);
}
function getIngrediants(element){
    console.log(element.name);
}