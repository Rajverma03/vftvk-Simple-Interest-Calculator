function compute()
{
    var p = document.getElementById("principal").value;
    var r = document.getElementById("rate").value;
    var y = document.getElementById("years").value;
    var interest = (p*r*y)/100;
    var year = new Date().getFullYear()+parseInt(y);
    if(p<=0){
        alert("Enter a postive number");
        document.getElementById("principal").focus();
        return false;
        }
    var result = document.getElementById("result");
    result.innerHTML = "If you deposit :- <mark>" + p + "</mark>,<br/> at an interest rate of :- <mark>" +r + "%</mark>,<br/>You will receive an amount of :- <mark>" + interest + "</mark>,<br/>in the year :- <mark>" + year+ "</mark>"; 
}
    function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

   