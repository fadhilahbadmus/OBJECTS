// instagram post constructor solution
function InstagramPost(authorHandle, content, imageLink, numViews, numLikes) {
  this.authorHandle = authorHandle;
  this.content = content;
  this.imageLink = imageLink;
  this.numViews = numViews;
  this.numLikes = numLikes;
}

// 2. to create two object from the constructor
var gadgetPost = new InstagramPost('@dailygadget', 'we provide all the accesories needed for your daily gadget', 'https://example.com/image1.png', 200, 40);

var foodiePost = new InstagramPost('@foodie', 'we offers daily food nutrient to neigbourhood', 'https://example.com/foodieimg.png', 500, 200);

// 3. i. to create Person factory function that takes name, age, and location as argument

function createPerson(name, age, location){
 return{
  name, age, location,
 };

}

function createJambScore(eng, govt, lit, crk){
 return{
  ENG: eng,
  GOVT: govt,
  LIT: lit,
  CRK: crk
 };
}
// create an object representing musa
var Musa = createPerson("Musa Dawodu", 19, "Lekki, Lagos State");

// create musa jamb score object from musa Person object

Musa.jamb_score = createJambScore(70, 85, 82, 94);

// 4.
// using Object.assign() method
const obj = {a: 1, b: 2};
const cloneObj = Object.assign({}, obj);
console.log(cloneObj); // Output: {a: 1, b: 2}

// using the spread Operator
const obj2 = {a: 1, b: 2};
const cloneObj2 = {...obj2};
console.log(cloneObj2); // Output: {a: 1, b: 2}

// using JSON.parse() and JSON.stringify() methods
const obj3 = {a: 1, b: {c: 2}};
const cloneObj3 = JSON.parse(JSON.stringify(obj3));
console.log(cloneObj3); // Output: {a: 1, b: {c: 2}}

//5. Using forin method to loop through an object
const presidentCandidates = {
 AAC: 'Omoyele Sowore',
 ACCORD: 'Christopher Inumolen',
 APC: "Bola Ahmed Tinubu",
 LP: "Peter Obi",
 NNPP: "Rabiu Kwankwaso",
 PDP: "Atiku Abubakar",
}

for(let candidate in presidentCandidates){
 var candidatInfo = presidentCandidates[candidate]+' is the presidential candidate of ' + candidate;
 console.log(candidatInfo); 
}