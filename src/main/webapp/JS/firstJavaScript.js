/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var student = {studentAge: 23, studentName: "Johnnyboy", isFemale: false};
var student1 = {studentAge: 666, studentName: "Boerge", isFemale: false};
var student2 = {studentAge: 555, studentName: "YrsaletteJohnson", isFemale: true};
var student3 = {studentAge: 856, studentName: "johnine", isFemale: true};
var student4 = {studentAge: 46, studentName: "HetteMette", isFemale: true};

var studentList = [student, student1, student2, student3, student4];




function printWomen(studentList)
{
    for (var i = 0; i < studentList.length; i++)
    {
        if (studentList[i].isFemale===true) 
        {
            console.log("This is a woman: "+studentList[i].studentName + " " + studentList[i].studentAge);
            
        }
    }
}


function toString(studentList)
{
    
    for (var i = 0; i < studentList.length; i++) 
    {
        console.log("Just another student: "+studentList[i].studentName + " " + studentList[i].studentAge);
    }
}

function youngest(studentList)
{
    var minAge= studentList[0].studentAge;
    var studentName = studentList[0].studentName;
    if (studentList.length >1) 
    {
        
        for (var i = 1; i < studentList.length; i++) 
        {
            if (studentList[i].studentAge<minAge) 
            {
                minAge = studentList[i].studentAge;
                studentName = studentList[i].studentName;
            }
        }
        console.log("Yngste student: "+studentName + minAge);
        
        
    }
}
function removeStudent(studentList, student)
{
    for (var i = 0; i < studentList.length; i++) 
    {
        if (studentList[i]===student) 
        {
            studentList.splice(i,1);
        }
    }
    toString(studentList);
    
}
function aboveThirty(item, index)
{
    if (item.studentAge >= 30) 
    {
        console.log("Above thirty: "+ item.studentName);
    }
}
function max()
{
    var maxVal=arguments[0];
    for (var i = 0; i < arguments.length; i++) 
    {
        if (maxVal < arguments[i]) 
        {
            maxVal = arguments[i];
        }
        
    }
    return maxVal;
}

function weekDay() {
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Søndag";
    weekday[1] = "Mandag";
    weekday[2] = "Tirsdag";
    weekday[3] = "Onsdag";
    weekday[4] = "Torsdag";
    weekday[5] = "Fredag";
    weekday[6] = "Lørdag";

    var n = weekday[d.getDay()];
    return n;
}

toString(studentList);
printWomen(studentList);
youngest(studentList);
removeStudent(studentList, student2);
studentList.forEach(aboveThirty);
console.log("max Val is: "+max(1,2,3,123123,4,5,6,7,8,9));
console.log(weekDay());