/*filter method*/

var a=[9,8,7,6,5,4,3,2,1];
document.write("filter method"+"<br>"+"<br>"+"a=[9,8,7,6,5,4,3,2,1]"+"<br>"+"Even number"+"<br>");

var output=a.filter(function(e){
	return e%2==0;
})
document.write(output);

document.write("<br>")
/*map method*/

var b=["apple","banana","mango","orange",];
document.write("<br>"+"map method"+"<br>"+"<br>"+"b=apple,banana,mango,orange,"+"<br>"+"<br>");

var output=b.map (function(e){
	return e.toUpperCase();
})
document.write(output);