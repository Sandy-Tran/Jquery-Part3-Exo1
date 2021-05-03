var counter = 0;

$(document).ready(function(){
    $(".btn").click(function(){
        counter++
        $("input").val(counter);
    })
})