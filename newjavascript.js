/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
window.addEventListener("load", init);

function init()
{
    
    
    Callback(123, NestedFunction);
}

function NestedFunction()
{
    function InsideFunction()
    {
        
    }
}


!function()
{
    alert("Anonymous");
}();

function Callback(p1, p2, callback)
{
    alert("Parameters "+ p1 + " " + p2);
    callback();
}

