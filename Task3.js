const email=prompt("plz, enter your email \n{1F642} ");

if(email == /^[\w.-]+@[/w.-]+\.\w+$/)
{
    alert("Welcome to in your email");
}
else
{
    alert("Email Failed!");
}