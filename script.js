// http://jsfiddle.net/LM9zZ/439/
$(document).on('keyup change','input.calc_number', function(e){
    if($(this).val().length == 0) return;
    var n = parseInt($(this).val().replace(/\D/g,''), 10) * 1;
    if(typeof n !== 'number') return;
    if(n < this.min || n > this.max){}
    var n_val = n.toLocaleString("ru");
    $(e.target).val(n_val);
});