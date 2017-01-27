function initSearch(people){
    var input = prompt("Welcome to the Most Wanted Search Tool!\n\nDo you know the characteristics you would like to search by? (yes/no)\n");
    var yesOptions = ["yes", "Yes", "YES", "y", "Y"];
    var noOptions = ["no", "No", "NO", "n", "N"];

    if(yesOptions.includes(input)){
        initSearchBySpecificCharacteristics(people);
    }
    else if(noOptions.includes(input)){
        promptForSearchByName(people);
    }
    else{
        alert("Please enter a valid response..\n");
        initSearch(people);
    }
}
function initSearchBySpecificCharacteristics(people){
    var input = prompt("Enter the characteristics you would wish to search by, each in one word and separated by a comma! (THE OPTIONS ARE: age, range (of ages), height, weight, eyecolor & occupation.\n");
    var lowercaseInput = input.toLowerCase();
    var searchCriteria = lowercaseInput.replace(" ", "");

    var filteredSearch = tailorSearchPrompts(people, searchCriteria);
    if(filteredSearch.length === 1){
        displaySoloResults(filteredSearch[0]);
        promptForDescendantsSearch(filteredSearch[0],data);
        promptForImmediateFamilySearch(filteredSearch[0],data);
        promptForNextOfKinSearch(filteredSearch[0],data);
    }
    else {
            displayResults(filteredSearch);
            promptAnotherSearch(filteredSearch);
        }
}
function tailorSearchPrompts(people, search){
    var filteredSearch = [];

    if(search.includes("age")){
        var ageResults = initSearchByAgeSpecifics(people);
        filteredSearch.push(...ageResults);
    }
    if(search.includes("range")){
        var ageRangeResults = initSearchByAgeRangeSpecifics(people);
        filteredSearch.push(...ageRangeResults);
    }
    if(search.includes("height")){
        var heightResults = initSearchByHeightSpecifics(people);
        filteredSearch.push(...heightResults);
    }
    if(search.includes("weight")){
        var weightResults = initSearchByWeightSpecifics(people);
        filteredSearch.push(...weightResults);
    }
    if(search.includes("eyecolor")){
        var eyeColorResults = initSearchByEyeColorSpecifics(people);
        filteredSearch.push(...eyeColorResults);
    }
    if(search.includes("occupation")){
        var occupationResults = initSearchByOccupationSpecifics(people);
        filteredSearch.push(...occupationResults);
    }
    return filteredSearch;
}
function initSearchByAgeSpecifics(people){
    var input = prompt("Please enter a specific age to search by (in this format: ##)\n");

    if(isNaN(input) === false) {
        var filteredSearch = people.filter(function (el) {
            if (getAge(el.dob) == input) {
                return true
            }
            else {
                return false
            }
        });
        return filteredSearch;
    }
    else{
        alert("Please enter a valid age..\n");
        initSearchByAgeSpecifics(people);
    }
}
function initSearchByAgeRangeSpecifics(people){
    var input = prompt("Please enter the start of the age range (in this format: ##)\n");
    var input2 = prompt("Please enter the end of the age range (in this format: ##)\n");

    if(isNaN(input) === false && isNaN(input2) === false) {
        var filteredSearch = people.filter(function (el) {
            if (getAge(el.dob) >= input && getAge(el.dob) <= input2) {
                return true
            }
            else {
                return false
            }
        });
        return filteredSearch;
    }
    else{
        alert("Please enter a valid age range..\n");
        initSearchByAgeRangeSpecifics(people);
    }
}
function initSearchByHeightSpecifics(people){
    var input = prompt("Please enter a height to search by (in this format: #'#'')\n");

    if(isNaN(input) === true) {
        var filteredSearch = people.filter(function (el) {
            if (convertInchesToFootInches(el.height) == input) {
                return true
            }
            else {
                return false
            }
        });
        return filteredSearch;
    }
    else{
        alert("Please enter a valid height..\n");
        initSearchByHeightSpecifics(people);
    }
}
function initSearchByWeightSpecifics(people){
    var input = prompt("Please enter a weight to search by (in this format: 150lbs)\n");
    var inputLowered = input.toLowerCase();
    var inputTrimmed = inputLowered.split(/[l]/)[0];
    var finalInput = parseInt(inputTrimmed);

    if(isNaN(finalInput) === false) {
        var filteredSearch = people.filter(function (el) {
            if (el.weight == finalInput) {
                return true
            }
            else {
                return false
            }
        });
        return filteredSearch;
    }
    else{
        alert("Please enter a valid weight in the correct format..\n");
        initSearchByWeightSpecifics(people);
    }
}
function initSearchByOccupationSpecifics(people){
    var input = prompt("Please enter an occupation to search by.\n");

    if(isNaN(input) === true) {
        var filteredSearch = people.filter(function (el) {
            if (el.occupation == input.toLowerCase()) {
                return true
            }
            else {
                return false
            }
        });
        return filteredSearch;
    }
    else{
        alert("Please enter a valid occupation..\n");
        initSearchByOccupationSpecifics(people);
    }
}
function initSearchByEyeColorSpecifics(people){
    var input = prompt("Please enter an eye color to search by.\n");

    if(isNaN(input) === true) {
        var filteredSearch = people.filter(function (el) {
            if (el.eyeColor == input.toLowerCase()) {
                return true
            }
            else {
                return false
            }
        });
        return filteredSearch;
    }
    else{
        alert("Please enter a valid eye color..\n");
        initSearchByEyeColorSpecifics(people);
    }
}
function promptForSearchByName(people) {
    var input = prompt("Do you know the name of the person you are searching for? (yes/no)\n");
    var yesOptions = ["yes", "Yes", "YES", "y", "Y"];
    var noOptions = ["no", "No", "NO", "n", "N"];

    if(yesOptions.includes(input)){
    	initSearchByName(people);
	}
	else if(noOptions.includes(input)){
    	initChooseAlternateSearchOptions(people)
	}
	else{
		alert("Please enter a valid response..\n");
		promptForSearchByName(people);
	}
}
function initSearchByName(people){
    var input = prompt("Please enter a first and/or last name.\n");
    if(isNaN(input) === true) {
        var filteredSearch = people.filter(function (el) {
            if (el.firstName.toLowerCase() == input.toLowerCase() || el.lastName.toLowerCase() == input.toLowerCase()) {
                return true
            }
            else {
                return false
            }
        });
		if(filteredSearch.length === 1){
            displaySoloResults(filteredSearch[0]);
		    promptForDescendantsSearch(filteredSearch[0],data);
		    promptForImmediateFamilySearch(filteredSearch[0],data);
		    promptForNextOfKinSearch(filteredSearch[0],data);
        }
        else {
            displayResults(filteredSearch);
            promptAnotherSearch(filteredSearch);
        }
    }
    else{
    	alert("Please enter a valid name..\n");
    	initSearchByName(people)
	}
}
function initChooseAlternateSearchOptions(people){
	var input = prompt("Do you know the height, weight, or eye color of the person you are searching for? (yes/no)\n");
    var yesOptions = ["yes", "Yes", "YES", "y", "Y"];
    var noOptions = ["no", "No", "NO", "n", "N"];

    if(yesOptions.includes(input)){
    	initSearchByPhysicalTraits(people)
	}
	else if(noOptions.includes(input)){
    	initSearchByAge(people);
	}
	else{
		alert("Please enter a valid response..\n");
		initChooseAlternateSearchOptions(people);
	}
}
function initSearchByPhysicalTraits(people){
	var input = prompt("Which trait would you like to search by: height, weight or eye color?\n");

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
		alert("Please enter a valid response..\n");
		initSearchByPhysicalTraits(people);
	}
}
function initSearchByHeight(people){
    var input = prompt("Please enter a height to search by (in this format: #'##'')\n");

    if(isNaN(input) === true) {
        var filteredSearch = people.filter(function (el) {
            if (convertInchesToFootInches(el.height) == input) {
                return true
            }
            else {
                return false
            }
        });
        if(filteredSearch.length === 1){
            displaySoloResults(filteredSearch[0]);
            promptForDescendantsSearch(filteredSearch[0],data);
            promptForImmediateFamilySearch(filteredSearch[0],data);
            promptForNextOfKinSearch(filteredSearch[0],data);
        }
        else {
            displayResults(filteredSearch);
            promptAnotherSearch(filteredSearch);
        }
    }
    else{
    	alert("Please enter a valid height..\n");
    	initSearchByHeight(people);
	}
}
function initSearchByWeight(people){
    var input = prompt("Please enter a weight to search by (in this format: 150lbs)\n");
    var inputLowered = input.toLowerCase();
    var inputTrimmed = inputLowered.split(/[l]/)[0];
    var finalInput = parseInt(inputTrimmed);

    if(isNaN(finalInput) === false) {
        var filteredSearch = people.filter(function (el) {
            if (el.weight == finalInput) {
                return true
            }
            else {
                return false
            }
        });
        if(filteredSearch.length === 1){
            displaySoloResults(filteredSearch[0]);
            promptForDescendantsSearch(filteredSearch[0],data);
            promptForImmediateFamilySearch(filteredSearch[0],data);
            promptForNextOfKinSearch(filteredSearch[0],data);
        }
        else {
            displayResults(filteredSearch);
            promptAnotherSearch(filteredSearch);
        }
    }
    else{
    	alert("Please enter a valid weight..\n");
    	initSearchByWeight(people);
	}
}
function initSearchByEyeColor(people){
    var input = prompt("Please enter an eye color to search by.\n");

    if(isNaN(input) === true) {
        var filteredSearch = people.filter(function (el) {
            if (el.eyeColor == input) {
                return true
            }
            else {
                return false
            }
        });
        if(filteredSearch.length === 1){
            displaySoloResults(filteredSearch[0]);
            promptForDescendantsSearch(filteredSearch[0],data);
            promptForImmediateFamilySearch(filteredSearch[0],data);
            promptForNextOfKinSearch(filteredSearch[0],data);
        }
        else {
            displayResults(filteredSearch);
            promptAnotherSearch(filteredSearch);
        }
    }
    else{
    	alert("Please enter a valid eye color..\n");
    	initSearchByEyeColor(people);
	}
}
function initSearchByAge(people){
	var input = prompt("Do you know the age of the person you are searching for? (yes/no)\n");
    var yesOptions = ["yes", "Yes", "YES", "y", "Y"];
    var noOptions = ["no", "No", "NO", "n", "N"];

    if(yesOptions.includes(input)){
        var input = prompt("Please enter an age to search by (in this format: ##)\n");

        if(isNaN(input) === false) {
            var filteredSearch = people.filter(function (el) {
                if (getAge(el.dob) == input) {
                    return true
                }
                else {
                    return false
                }
            });
            if(filteredSearch.length === 1){
                displaySoloResults(filteredSearch[0]);
                promptForDescendantsSearch(filteredSearch[0],data);
                promptForImmediateFamilySearch(filteredSearch[0],data);
                promptForNextOfKinSearch(filteredSearch[0],data);
            }
            else {
                displayResults(filteredSearch);
                promptAnotherSearch(filteredSearch);
            }
        }
        else{
        	alert("Please enter a valid age..\n");
        	initSearchByAge(people);
		}
	}
	else if(noOptions.includes(input)){
    	initSearchByOccupation(people);
	}
	else{
		alert("Please enter a valid response..\n");
		initSearchByAge(people);
	}
}
function initSearchByOccupation(people){
    var input = prompt("Do you know the occupation of the person you are searching for? (yes/no)\n");
    var yesOptions = ["yes", "Yes", "YES", "y", "Y"];
    var noOptions = ["no", "No", "NO", "n", "N"];

    if(yesOptions.includes(input)){
        var input = prompt("Please enter an occupation to search by.\n");

        if(isNaN(input) === true) {
            var filteredSearch = people.filter(function (el) {
                if (el.occupation == input) {
                    return true
                }
                else {
                    return false
                }
            });
            if(filteredSearch.length === 1){
                displaySoloResults(filteredSearch[0]);
                promptForDescendantsSearch(filteredSearch[0],data);
                promptForImmediateFamilySearch(filteredSearch[0],data);
                promptForNextOfKinSearch(filteredSearch[0],data);
            }
            else {
                displayResults(filteredSearch);
                promptAnotherSearch(filteredSearch);
            }
        }
        else{
        	alert("Please enter a valid occupation.\n");
        	initSearchByOccupation(people);
		}
    }
    else if(noOptions.includes(input)){
        initSearchByGender(people);
    }
    else{
        alert("Please enter a valid response..\n");
        initSearchByOccupation(people);
    }
}
function initSearchByGender(people){
    var input = prompt("Do you at least know the gender of the person you are searching for?!?! (yes/no)\n");
    var yesOptions = ["yes", "Yes", "YES", "y", "Y"];
    var noOptions = ["no", "No", "NO", "n", "N"];

    if(yesOptions.includes(input)){
        var input = prompt("Please enter a gender to search by.\n");

        if(isNaN(input) === true) {
            var filteredSearch = people.filter(function (el) {
                if (el.gender == input) {
                    return true
                }
                else {
                    return false
                }
            });
            if(filteredSearch.length === 1){
                displaySoloResults(filteredSearch[0]);
                promptForDescendantsSearch(filteredSearch[0],data);
                promptForImmediateFamilySearch(filteredSearch[0],data);
                promptForNextOfKinSearch(filteredSearch[0],data);
            }
            else {
                displayResults(filteredSearch);
                promptAnotherSearch(filteredSearch);
            }
        }
        else{
        	alert("Please enter a valid gender..\n");
        	initSearchByGender(people);
		}
    }
    else if(noOptions.includes(input)){
        alert("Well I guess you are SOL..\n");
    }
    else{
        alert("Please enter a valid response..\n");
        initSearchByGender(people);
    }
}
function displayResults(people){
	var nameOnly = [];
	for(var i = 0; i < people.length; i++){
		var fullName = people[i].firstName + " " + people[i].lastName;
		nameOnly.push(fullName);
	}
	var joinedNames = nameOnly.join("\n");
    alert(joinedNames);
}
function displaySoloResults(person){

    alert(person.firstName + " " + person.lastName + "\n\n" + "GENDER: " + person.gender + "\n" + "AGE: " + getAge(person.dob) + "\n" + "HEIGHT: " + convertInchesToFootInches(person.height) + "\n" + "WEIGHT: " + person.weight + "lbs\n" + "EYE COLOR: " + person.eyeColor + "\n" + "OCCUPATION: " + person.occupation + "\n");
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
function convertInchesToFootInches(height){
    var convertedHeight = ((height/12).toString().split(/[.]/)[0]) + "'" + (height % 12) + "''";
    return convertedHeight;
}
function promptAnotherSearch(people){
    var input = prompt("Would you like to narrow your results even more?! (yes/no)\n");
    var yesOptions = ["yes", "Yes", "YES", "y", "Y"];
    var noOptions = ["no", "No", "NO", "n", "N"];

    if(yesOptions.includes(input)){
        initSearch(people);
    }
    else if(noOptions.includes(input)){
        alert("Okay have a nice day!\n");
    }
    else{
        alert("Please enter a valid response..\n");
        promptAnotherSearch(people);
    }
}
function promptForDescendantsSearch(person, people){
    var input = prompt("Would you like to find the descendants of this person? (yes/no)\n");
    var yesOptions = ["yes", "Yes", "YES", "y", "Y"];
    var noOptions = ["no", "No", "NO", "n", "N"];

    if(yesOptions.includes(input)){
        var descendants = getDescendants(person, people);
        displayResults(descendants);
    }
    else if(noOptions.includes(input)){
    }
    else{
        alert("Please enter a valid response..\n");
        promptForDescendantsSearch(person,people);
    }
}
function getDescendants(person, people,counter=-1, descList=[]){
    if(person != undefined) {
        var descendants = people.filter(function (el) {
            return el.parents.includes(person.id);
        });
        descList.push(...descendants);

        counter++;
        getDescendants(descList[counter],people,counter,descList);
    }
    return descList;
}
function promptForImmediateFamilySearch(person, people){
    var input = prompt("Would you like to find the immediate family of this person? (yes/no)\n");
    var yesOptions = ["yes", "Yes", "YES", "y", "Y"];
    var noOptions = ["no", "No", "NO", "n", "N"];

    if(yesOptions.includes(input)){
        var family = getImmediateFamily(person, people);
        displayResults(family);
    }
    else if(noOptions.includes(input)){
    }
    else{
        alert("Please enter a valid response..\n");
        promptForImmediateFamilySearch(person,people);
    }
}
function getImmediateFamily(person, people){
    var parents = getParents(person, people);
    var siblings = getSiblings(person, people);
    var spouse = getSpouse(person, people);
    var children = getChildren(person, people);
    var allImmediateFamily = [];

    allImmediateFamily.push(...parents);
    allImmediateFamily.push(...siblings);
    allImmediateFamily.push(...spouse);
    allImmediateFamily.push(...children);

    return allImmediateFamily;
}
function promptForNextOfKinSearch(person, people){
    var input = prompt("Would you like to find the next of kin for this person? (yes/no)\n");
    var yesOptions = ["yes", "Yes", "YES", "y", "Y"];
    var noOptions = ["no", "No", "NO", "n", "N"];

    if(yesOptions.includes(input)){
        var nextOfKin = getNextOfKinSearch(person, people);
        if(nextOfKin.length != undefined) {
            displaySoloResults(nextOfKin[0]);
        }
        else{
            alert("Sorry, this person does not have a next of kin..\n");
        }
    }
    else if(noOptions.includes(input)){
        alert("Okay, have a nice day!\n");
    }
    else{
        alert("Please enter a valid response..\n");
        promptForNextOfKinSearch(person,people);
    }
}
function getNextOfKinSearch(person,people){
    var nextOfKinList = [];

    nextOfKinList.push(getSpouse(person, people)[0]);

    if(nextOfKinList[0] == undefined) {
        nextOfKinList.splice(0, 1);
        nextOfKinList.push(getChildren(person, people)[0]);
    }
    if(nextOfKinList[0] == undefined) {
        nextOfKinList.splice(0, 1);
        nextOfKinList.push(getParents(person, people)[0]);
    }
    if(nextOfKinList[0] == undefined) {
        nextOfKinList.splice(0, 1);
        nextOfKinList.push(getSiblings(person, people)[0]);
    }
    if(nextOfKinList[0] == undefined) {
        nextOfKinList.splice(0, 1);
        nextOfKinList.push(getGrandChildren(person, people)[0]);
    }
    if(nextOfKinList[0] == undefined) {
        nextOfKinList.splice(0, 1);
        nextOfKinList.push(getGrandParents(person, people)[0]);
    }
    if(nextOfKinList[0] == undefined) {
        nextOfKinList.splice(0, 1);
        nextOfKinList.push(getNiecesAndNephews(person, people)[0]);
    }
    if(nextOfKinList[0] == undefined) {
        nextOfKinList.splice(0, 1);
        nextOfKinList.push(getAuntsAndUncles(person, people)[0]);
    }
    if(nextOfKinList[0] == undefined) {
        nextOfKinList.splice(0, 1);
        nextOfKinList.push(getGreatGrandChildren(person, people)[0]);
    }
    if(nextOfKinList[0] == undefined) {
        nextOfKinList.splice(0, 1);
        nextOfKinList.push(getGreatGrandParents(person, people)[0]);
    }

    return nextOfKinList;
}
function getParents(person, people){
    var parentList = people.filter(function (el) {
        return person.parents.includes(el.id);
    });
    parentList.sort(function (a, b){
        return b.value - a.value;
    });
    return parentList;
}
function getSiblings(person, people){
    var siblingList = people.filter(function (el) {
        return el.parents.includes(person.parents);
    });
    siblingList.sort(function (a, b){
        return b.value - a.value;
    });
    return siblingList;
}
function getSpouse(person, people){
    var spouse = people.filter(function (el) {
        return el.currentSpouse == person.id;
    });
    return spouse;
}
function getChildren(person, people){
    var childrenList = people.filter(function (el) {
        return el.parents.includes(person.id);
    });
    childrenList.sort(function (a, b){
        return b.value - a.value;
    });
    return childrenList;
}
function getGrandChildren(person, people){
    var children = getChildren(person, people);
    var grandChildrenList = [];

    for(var child in children){
        var grandChild = getChildren(child, people);
        grandChildrenList.push(...grandChild);
    }
    grandChildrenList.sort(function (a, b){
        return b.value - a.value;
    });
    return grandChildrenList;

}
function getGrandParents(person, people){
    var parents = getParents(person, people);
    var grandParentsList = [];

    for(var parent in parents){
        var grandParent = getParents(parent, people);
        grandParentsList.push(...grandParent);
    }
    grandParentsList.sort(function (a, b){
        return b.value - a.value;
    });
    return grandParentsList;
}
function getNiecesAndNephews(person, people){
    var siblings = getSiblings(person, people);
    var niecesAndNephewsList = [];

    for(var sibling in siblings){
        var nieceAndNephew = getChildren(sibling, people);
        niecesAndNephewsList.push(...nieceAndNephew);
    }
    niecesAndNephewsList.sort(function (a, b){
        return b.value - a.value;
    });
    return niecesAndNephewsList;
}
function getAuntsAndUncles(person, people){
    var parents = getParents(person, people);
    var auntsAndUnclesList = [];

    for(var parent in parents){
        var auntAndUncle = getSiblings(parent, people);
        auntsAndUnclesList.push(...auntAndUncle);
    }
    auntsAndUnclesList.sort(function (a, b){
        return b.value - a.value;
    });
    return auntsAndUnclesList;
}
function getGreatGrandChildren(person, people){
    var grandChildren = getGrandChildren(person, people);
    var greatGrandChildrenList = [];

    for(var grandChild in grandChildren){
        var greatGrandChild = getChildren(grandChild, people);
        greatGrandChildrenList.push(...greatGrandChild);
    }
    greatGrandChildrenList.sort(function (a, b){
        return b.value - a.value;
    });
    return greatGrandChildrenList;
}
function getGreatGrandParents(person, people){
    var grandParents = getGrandParents(person, people);
    var greatGrandParentsList = [];

    for(var grandParent in grandParents){
        var greatGrandParent = getParents(grandParent, people);
        greatGrandParentsList.push(...greatGrandParent);
    }
    greatGrandParentsList.sort(function (a, b){
        return b.value - a.value;
    });
    return greatGrandParentsList;
}
