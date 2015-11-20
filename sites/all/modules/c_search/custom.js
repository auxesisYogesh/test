
jQuery(document).ready(function() {
//jQuery(".myclass").click(function(){jQuery(".form-type-radios").toggle();});
jQuery(document).click(function (e)
{
    var container = jQuery(".form-item-custom-search-types");
    if (container.has(e.target).length === 0)
    {
        container.hide();
		jQuery(selector).removeClass('active');
    }
});

var divform = jQuery('.form-item-custom-search-types');
jQuery('.myclass').click(function(e) 
{
    if (divform.is(":visible"))
    {           
        divform.hide();
    }
    else 
    {      
        divform.show();
    }
    return false;
});

var selector = '.myclass span';

    jQuery(".myclass").click(function(){
        jQuery(selector).toggleClass("active");
    });
    
var selectorRadio = '.form-type-radio input';
	jQuery(selectorRadio).on('click',function(){
	jQuery(selectorRadio).removeClass('active');
	jQuery(this).addClass('active');
});
/*jQuery(".form-item.form-type-radio.form-item-custom-search-types input").click(function() {
    var cont = this.value;
    alert(cont); // value of clicked li by directly accessing DOMElement property
});*/
jQuery(".calendar-day .date-prev a").html("<< <strong>Previous</strong> Event");
jQuery(".calendar-day .date-next a").html("<strong>Next</strong> Event >>");
});


