console.log("Starting javascript...");

/*JavaScriptBasics*/

/*Exercise 1*/

var myName= "Yael";
var string= "My name is";

console.log(string + " " + myName);

/*Exercise 2*/

var age= 19;
console.log(age);

/*Exercise 3*/

var ignasiAge=25;
var ageDiff= ignasiAge-age;
console.log(ageDiff);

/*Exercise 4*/

if(age>21){
    console.log("You are older than 21");
} else {
    console.log("You are not older than 21");
}

/*Exercise 5*/

if(age==ignasiAge) {
    console.log("You have the same age as Ignasi");
} else if (age>ignasiAge) {
    console.log("Ignasi is younger than you");
} else {
    console.log("Ignasi is older than you");
}

/*JavaScript Array Functions */

/*Exercise 1: Create an array with all the names of your class (including mentors).  Sort the array alphabetically.  Print the first element of the array in the console.  Print the last element of the array in the console.  Print all the elements of the array in the console.  Use a "for" loop.  */

var names = ["Carla", "Rodrigo", "Branko", "Aylén", "Carolina", "Vero", "Gabriela", "Florencia V", "Yael", "Andrea","Azucena","Belén","Camila","Catalina","Flor M","Janneth","Jhoelda","Luana","Maca","Malena","Melissa","Nadine","Nicole","Rocio","Victoria","Yennyfer","Belen F","Flor R","Katy","Luz","Magali","Micaela","Reyna"];
names.sort();
console.log(names[0]);
console.log(names[32]);

for (i = 0; i < names.length; i++) {
    console.log(names[i]);   
}

/*Exercise 2: Create an array with all the ages of the students in your class.  Iterate the array using a while loop, and then print every age in the console.  Add a conditional inside the while loop to only print even numbers.  Change the loop to use a "for" loop instead of a "while" loop. */

var ages = [19, 20, 21, 22, 23, 24, 25];

for (i=0; i<ages[i]; i++) {
         console.log(ages[i]);
         if (ages[i] % 2 === 0) {
             console.log(ages[i] + " is even");   
     }

}

var i = 0;
while (i < ages[i]) {
     console.log(ages[i]);
     i++;
     if (ages[i] % 2 === 0) {
         console.log(ages[i] + " is even");   
     }
} 

/*Exercise 3: Write a function which receives an array as a parameter and prints the lowest number in the array to the console. */

var conjunto = [56, 78, 382, 89, 438, 2, 45, 89, 230, 64, 23, 2784, 328];

conjunto.min = function( conjunto ){
    return Math.min.apply( Math, conjunto );
};

var minimum = conjunto.min(conjunto);
console.log("The lowest number is " + minimum);   

/*Exercise 4: Write a function which receives an array as a parameter and prints the biggest number in the array to the console. */

conjunto.max = function( conjunto ){
    return Math.max.apply( Math, conjunto );
};

var minimum = conjunto.max(conjunto);
console.log("The biggest number is " + minimum); 

/*Exercise 5: Write a function which receives two parameters, an array and an index.  The function will print the value of the element at the given position (one-based) to the console. */

var array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];
var index = 1;

function position(array, index) {
    console.log(array[index]);
}

position(array, index);

/*Exercise 6: Write a function which receives an array and only prints the values that repeat.  */


/*Write a simple JavaScript function to join all elements of the following array into a string.  */

myColor = ["Red", "Green", "White", "Black"];






