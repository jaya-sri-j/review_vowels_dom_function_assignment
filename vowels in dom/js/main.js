var inputElement=document.createElement("input");
document.body.appendChild(inputElement);
inputElement.setAttribute("id","character");
inputElement.style.margin="30px";
inputElement.style.height="30px";
inputElement.style.width="300px";
inputElement.style.textAlign="center";
inputElement.style.fontsize="40px";
inputElement.style.textDecoration="underline";
inputElement.style.backgroundColor="azure";
inputElement.style.border="3px solid black";
document.write("<br/>");


var buttonElement=document.createElement("button");
document.body.appendChild(buttonElement);
buttonElement.innerHTML="DELETE VOWELS LETTER";
buttonElement.style.margin="30px";
buttonElement.style.textAlign="center";
buttonElement.style.height="50px";
buttonElement.style.border="2px solid black";
buttonElement.style.borderRadius="50px";
buttonElement.style.backgroundColor="pink";
document.write("<br/>");
buttonElement.onclick=function()
{
var string=document.getElementById('character').value;
var string1="";
for(i=0;i<string.length;i++)
{
if(string[i]!="a"&&string[i]!="e"&&string[i]!="i"&&string[i]!="o"&&string[i]!="u")
{
string1+=string[i];
}
}
console.log(string1);
}