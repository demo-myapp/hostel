$(document).on("change", ".price-sorting", function() {

    var sortingMethod = $(this).val();

    if(sortingMethod == 'l2h')
    {
        sortProductsPriceAscending();
    }
    else if(sortingMethod == 'h2l')
    {
        sortProductsPriceDescending();
    }

});
function sortProductsPriceAscending()
{
    var products = $('.product');
    products.sort(function(a, b){ return $(a).data("price")-$(b).data("price")});
    $(".products-grid").html(products);

}

function sortProductsPriceDescending()
{
    var products = $('.product');
    products.sort(function(a, b){ return $(b).data("price") - $(a).data("price")});
    $(".products-grid").html(products);

}