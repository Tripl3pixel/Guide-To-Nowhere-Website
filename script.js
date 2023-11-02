<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
 $("body").click(function(event){
   if (!$(event.target).closest('.button').length) {
     var x = document.bodyX - document.body.offsetLeft;
     var y = document.bodyY - document.body.offsetTop;
     event.target.style.background = "radial-gradient(circle at " + x + "px " + y + "px, transparent 0, transparent 50px, #D74A4C 50px)";
     setTimeout(function(){
       event.target.style.background = '';
     }, 1000);
   }
 });
});
</script>