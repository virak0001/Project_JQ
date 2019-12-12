// getURL function for control url
function getURL() {
    var url = "https://raw.githubusercontent.com/radytrainer/test-api/master/test.json";
    return url;
}

// jQuery
$(document).ready(function () {
    // call function for request API
    requestdata();
    // Select recipes with id
    $("#selection").on('change', function () {
        var chooseRecipse = $("#selection").val();
        recipesId(chooseRecipse);
    })
});

// function for query API
function requestdata() {
    $.ajax({
        dataType: 'json',
        url: getURL(),
        success: (data) => getRecipse(data.recipes),
        error: () => console.error("Cannot request data"),
        error: () => console.log("Cannot get data")
    })
}

//variable for store data in arrays that get from API
var allData = [];
// function for display the name of food on the selection option
function getRecipse(data) {
    var option = "";
    allData = data;
    data.forEach(element => {
        option += `<option value="${element.id}">${element.name}</option>`;
    });
    $("#selection").append(option);
}

// function for loop data from array variable
function recipesId(chooseRecipse) {
    allData.forEach(item => {
        if (item.id == chooseRecipse) {
            // choose recipses 
            chooseRecipses(item);
            // get ingredients in recipse name
            getIngrediants(item);
            // get number of person 
            numberOfPerson(item);
            // get instruction
            getInstruction(item);
        }
    })
}

// choose recipses 
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

 // get number of person 
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
// diplay number of person in value input
$("#people").html(person);

// function click on icon sum
$("#sum").on('click', function () {
    var number = parseInt($("#input").val());
    sum(number);
})
// function click on icon minus
$("#minus").on('click', function () {
    var number = parseInt($("#input").val());
    minus(number);
})
}

 // get ingredients in recipse name
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
// increase value when click on icon sum
function sum(number) {
    var add = parseInt(number) +1;
    if(add <= 15) {
        $("#input").val(add);
        getPerson($("#input").val());
    }
}
// decrease value when click on icon minus
function minus(number) {
    var minus = parseInt(number)-1;
    if(minus >= 1) {
        $("#input").val(minus);
        getPerson($("#input").val());
    }
}


// get instruction
function getInstruction(item) {
    const{instructions} = item;
    var instruction = "";
    var step = instructions.split("<step>");
    for (let i = 1; i < step.length; i++) {
        instruction += `
      <h5 class="text-primary">step ${i}:</h5>
             ${step[i]}
        `;
    }
    // diplay instruction
    $('#step').html(instruction);
}

function getPerson(person) {
   
}
