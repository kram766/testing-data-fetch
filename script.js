document.getElementById('search').addEventListener('click', function(){
    var txt = document.getElementById('sometxt').value;
    var alltext = document.querySelectorAll(".a ul li");
     alltext.forEach(function(txtva){
        var p = querytext(txt).match(txtva.textContent);
        if(p){
            console.log("it's matching" );
        }
        else{
            console.log("it's not matching" );
        }
     })
})

var button = document.getElementById('cl');
button.addEventListener('click',function(){
    $.get('xfaults.json',function (data,stauts) {
        console.log(data);
    })
})