var bookname1 = prompt("Enter your first bookname")
var Author1 = prompt("Enter your first Author")
var bookname2 = prompt("Enter your second bookname")
var Author2 = prompt("Enter your second Author ")
const data = {

}

data[bookname1]=Author1
data[bookname2]=Author2

document.getElementById('demo').innerHTML= bookname1;
document.getElementById('auth1').innerHTML= data[bookname1];
document.getElementById('book2').innerHTML= bookname2;
document.getElementById('auth2').innerHTML= data[bookname2];


console.log(data)