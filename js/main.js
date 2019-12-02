var url = "https://raw.githubusercontent.com/radytrainer/test-api/master/test.json";
$(document).ready(function() {
    $("#selection").on('change', function() {
        var selection = $("#selection").val();
        selectionFuntion(selection);
    })
    var API = (api) => {
        $.ajax({
            dataType : 'json',
            url:url,
            success:(data) => getRecipse(data),
            error: () => console.error("Cannot request data"),
        })
    }
    function getRecipse(datas) {
        datas.recipes.forEach(element => {
            getIngrediant(element);
        });
    }
    function getIngrediant(element) {
        element.ingredients.forEach(element => {
            // showData(element);
        });
    }
    var selectionFuntion = (selection) => {
        var number = parseInt(selection);
        switch (number) {
            case 0:
                
                break;
        
            default:
                break;
        }
    }
})