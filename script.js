var a;
function pass()
{
    if(a==1){
    document.getElementById('password').type='password';
    document.getElementById('icon').src='hide.png';
    a=0;
}
else
{
    document.getElementById('password').type='text';
    document.getElementById('icon').src='eye.png'; 
    a=1;  
}
}