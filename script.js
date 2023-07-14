var a=Math.floor(Math.random()*100+1);
var c=1;
function oc() {
    var v=document.getElementById('nn').value;
    console.log(v);
    if (v==a) {
        if(c==1)document.getElementById('res').textContent="Wow!, You Find It with Your First Attempt";
        else document.getElementById('res').textContent="You Took "+c+' Try Find The Number';
        setTimeout(function () {
            document.getElementById('res').textContent="Lets Start Again";
        },3000);
        c=0;
        a=Math.floor(Math.random()*100+1);
    }
    else if(v>a){ 
        document.getElementById('res').textContent='Try Some Smaller number';
        c++;
    }
    else {
        document.getElementById('res').textContent='Try Some Greater number';
        c++;
    }
}