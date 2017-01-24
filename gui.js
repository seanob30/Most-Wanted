function initSearch(people) {
    initSearchByTraits(people)
}
function initSearchByName(people){
    var input = prompt("Please enter a first or last name");

    for (var i = 0; i < people.length; i++) {
        if (people[i]["firstName"] == input || people[i]["lastName"] == input) {
            displayResults(people, i);
        }
    }
}
function initSearchByTraits(people){
	var input = prompt("Please enter gender or height or weight or eye color or occupation");
	var filteredSearch = people.filter(filterByTraits)
	for (var i = 0; i < filteredSearch.length; i++){
		displayResults(filteredSearch, i);
	}
}
function filterByTraits(item){
	if(item.gender == input || item.height == input || item.weight == input || item.eyeColor == input || item.occupation == input){
		return true;
	}
	else{
		return false;
	}
}
function displayResults(people, i){
    alert(people[i].firstName + " " + people[i].lastName);;
}
function isNumeric() {
	;
}
function getAge(){
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
