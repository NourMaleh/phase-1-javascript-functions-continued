// code your solution here
function mondayWork( argument = "go to the office") {
    return "This Monday, I will " +  argument + "."}

mondayWork( argument);


function saturdayFun( argument = "roller-skate") {
    return "This Saturday, I want to " +  argument + "!"}

saturdayFun( argument);

function wrapAdjective(whatever = "*") {
    return function (special = "special") {
        return `You are ${whatever}${special}${whatever}!`}}
        
        console.log(wrapAdjective("%")("a dedicated programmer"));