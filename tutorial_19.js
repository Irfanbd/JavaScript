var m =parseInt( prompt("Enter Starting Point"));
var n =parseInt( prompt("Enter Ending Point"));
var sum = 0;
for (var i = m; i <= n; i = i + 1){
    sum = sum + i;
    // document.write(" Total : " + sum+"</br>");
   
}
document.write(" Total : " + sum);