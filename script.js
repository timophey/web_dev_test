// http://jsfiddle.net/LM9zZ/439/
$(document).on('keyup change','input.calc_number', function(e){
    if($(this).val().length == 0) return;
    var n = parseInt($(this).val().replace(/\D/g,''), 10) * 1;
    if(typeof n !== 'number') return;
    if(n < this.min || n > this.max){}
    var n_val = n.toLocaleString("ru");
    $(e.target).data('value',n).val(n_val);
});
//
$(function(){
    $('input.calc_number').trigger('change');
    $('.ui_range').each(function(i,el){
        var $this = $(this);
        var $input = $('#'+$this.data('id'));
        $this.data('input',$input);
        $this.slider({
            value: $input.data('value'),
            min: $input.attr('min') *1,
            max: $input.attr('max') *1,
            orientation: "horizontal",
            range: "min",
            step: 1000,
            slide: function(e,ui){
                var $input = $(this).data('input');
                $input.val(ui.value).trigger('change');
            }
        });
    });

    $('.ui_date').datepicker({
        dateFormat: "dd.mm.yy"
    });

});