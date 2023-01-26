/* EXERCISE 2
Update the values of the object you've created to represent
one of your class mates */


let personalInfo = {
    name: "Zhaklina",
    lastName: "Tefova",
    birhtYear: 1992,
    age: 30,
    married: true,
    freeTime: false,

    checkTimeAvailavility: function(){
        return this.freeTime;
    }
};

// update property by dot notation
personalInfo.name = "Ivana";
personalInfo.age = 28;
//  update property by square brackets
personalInfo["lastName"] = "Markova";
personalInfo["birhtYear"] = 1994;

console.log(personalInfo);