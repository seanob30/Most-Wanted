function initSearch(people) {
    var input = prompt("Do you know the name of the person you are searching for?");
    var yesOptions = ["yes", "Yes", "YES", "y", "Y"];
    var noOptions = ["no", "No", "NO", "n", "N"];

    if(yesOptions.includes(input)){
    	initSearchByName(people);
	}
	else if(noOptions.includes(input)){
    	initChooseAlternateSearchOptions(people)
	}
	else{
		alert("Please enter a valid response..");
		initSearch(people);
	}
}
function initSearchByName(people){
    var input = prompt("Please enter a first or last name");
    if(isNaN(input) === true) {
        var filteredSearch = people.filter(function (el) {
            if (el.firstName.toLowerCase() == input.toLowerCase() || el.lastName.toLowerCase() == input.toLowerCase()) {
                return true
            }
            else {
                return false
            }
        });
		displayResults(filteredSearch);
		promptAnotherSearch(filteredSearch);
    }
    else{
    	alert("Please enter a valid name..");
    	initSearchByName(people)
	}
}
function initChooseAlternateSearchOptions(people){
	var input = prompt("Do you know the height, weight, or eye color of the person you are searching for?");
    var yesOptions = ["yes", "Yes", "YES", "y", "Y"];
    var noOptions = ["no", "No", "NO", "n", "N"];

    if(yesOptions.includes(input)){
    	initSearchByPhysicalTraits(people)
	}
	else if(noOptions.includes(input)){
    	initSearchByAge(people);
	}
	else{
		alert("Please enter a valid response..");
		initChooseAlternateSearchOptions(people);
	}
}
function initSearchByPhysicalTraits(people){
	var input = prompt("Which trait would you like to search by: height, weight or eye color?")

	if(input.toLowerCase() == "height"){
		initSearchByHeight(people);
	}
	else if(input.toLowerCase() == "weight"){
		initSearchByWeight(people);
	}
	else if(input.toLowerCase() == "eye color" || input.toLowerCase() == "eyecolor"){
		initSearchByEyeColor(people);
	}
	else{
		alert("Please enter a valid response..");
		initSearchByPhysicalTraits(people);
	}
}
function initSearchByHeight(people){
    var input = prompt("Please enter a height to search by");

    if(isNaN(input) === false) {
        var filteredSearch = people.filter(function (el) {
            if (el.height == input) {
                return true
            }
            else {
                return false
            }
        });
        displayResults(filteredSearch);
        promptAnotherSearch(filteredSearch);
    }
    else{
    	alert("Please enter a valid height..");
    	initSearchByHeight(people);
	}
}
function initSearchByWeight(people){
    var input = prompt("Please enter a weight to search by");

    if(isNan(input) === false) {
        var filteredSearch = people.filter(function (el) {
            if (el.weight == input) {
                return true
            }
            else {
                return false
            }
        });
        displayResults(filteredSearch);
        promptAnotherSearch(filteredSearch);
    }
    else{
    	alert("Please enter a valid weight..");
    	initSearchByWeight(people);
	}
}
function initSearchByEyeColor(people){
    var input = prompt("Please enter an eye color to search by");

    if(isNaN(input) === true) {
        var filteredSearch = people.filter(function (el) {
            if (el.eyeColor == input) {
                return true
            }
            else {
                return false
            }
        });
        displayResults(filteredSearch);
        promptAnotherSearch(filteredSearch);
    }
    else{
    	alert("Please enter a valid eye color..");
    	initSearchByEyeColor(people);
	}
}
function initSearchByAge(people){
	var input = prompt("Do you know the age of the person you are searching for?");
    var yesOptions = ["yes", "Yes", "YES", "y", "Y"];
    var noOptions = ["no", "No", "NO", "n", "N"];

    if(yesOptions.includes(input)){
        var input = prompt("Please enter an age to search by");

        if(isNaN(input) === false) {
            var filteredSearch = people.filter(function (el) {
                if (getAge(el.dob) == input) {
                    return true
                }
                else {
                    return false
                }
            });
            displayResults(filteredSearch);
            promptAnotherSearch(filteredSearch);
        }
        else{
        	alert("Please enter a valid age..");
        	initSearchByAge(people);
		}
	}
	else if(noOptions.includes(input)){
    	initSearchByOccupation(people);
	}
	else{
		alert("Please enter a valid response..");
		initSearchByAge(people);
	}
}
function initSearchByOccupation(people){
    var input = prompt("Do you know the occupation of the person you are searching for?");
    var yesOptions = ["yes", "Yes", "YES", "y", "Y"];
    var noOptions = ["no", "No", "NO", "n", "N"];

    if(yesOptions.includes(input)){
        var input = prompt("Please enter an occupation to search by");

        if(isNaN(input) === true) {
            var filteredSearch = people.filter(function (el) {
                if (el.occupation == input) {
                    return true
                }
                else {
                    return false
                }
            });
            displayResults(filteredSearch);
            promptAnotherSearch(filteredSearch);
        }
        else{
        	alert("Please enter a valid occupation");
        	initSearchByOccupation(people);
		}
    }
    else if(noOptions.includes(input)){
        initSearchByGender(people);
    }
    else{
        alert("Please enter a valid response..");
        initSearchByOccupation(people);
    }
}
function initSearchByGender(people){
    var input = prompt("Do you at least know the gender of the person you are searching for?!?!");
    var yesOptions = ["yes", "Yes", "YES", "y", "Y"];
    var noOptions = ["no", "No", "NO", "n", "N"];

    if(yesOptions.includes(input)){
        var input = prompt("Please enter a gender to search by");

        if(isNaN(input) === true) {
            var filteredSearch = people.filter(function (el) {
                if (el.gender == input) {
                    return true
                }
                else {
                    return false
                }
            });
            displayResults(filteredSearch);
            promptAnotherSearch(filteredSearch);
        }
        else{
        	alert("Please enter a valid gender..");
        	initSearchByGender(people);
		}
    }
    else if(noOptions.includes(input)){
        alert("Well I guess you are SOL..");
    }
    else{
        alert("Please enter a valid response..");
        initSearchByGender(people);
    }
}
function displayResults(people){
	var nameOnly = [];
	for(var i = 0; i < people.length; i++){
		var fullName = people[i].firstName + " " + people[i].lastName;
		nameOnly.push(fullName);
	}
	var joinedNames = nameOnly.join(", ");
    alert(joinedNames);
}
function getAge(dateString){
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate()))
    {
        age--;
    }
    return age;
}
function promptAnotherSearch(people){
    var input = prompt("Would you like to narrow your results even more?!");
    var yesOptions = ["yes", "Yes", "YES", "y", "Y"];
    var noOptions = ["no", "No", "NO", "n", "N"];

    if(yesOptions.includes(input)){
        initSearch(people);
    }
    else if(noOptions.includes(input)){
        alert("Okay have a nice day!");
    }
    else{
        alert("Please enter a valid response..");
        promptAnotherSearch(people);
    }
}
function isNumeric() {
	;
}
function getHeight(){
	;
}
function getWeight(){
	;
}
function getEye(){
	;
}
function getOccupation(){
	;
}
//function getDescendants(person, people, descList=[]){
	//;
//}
