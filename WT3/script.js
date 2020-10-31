var list = [];

$(document).ready(function () {
  $.get("https://davids-restaurant.herokuapp.com/menu_items.json", function (data) {
    list = data.menu_items;
    list.forEach((item, index) => {
      $("#dropdown").append(`<option value=${index}>${item.name}</option>`);
    })
  });

  $("#dropdown").change((e) => {
    const item = list[e.target.value];
    $('#showdetails').html(
        `<p><b><i> Item's Short Name </b></i>:- ${item.short_name} </p>
        <p><b><i> Name </b></i>:- ${item.name} </p>
        <p><b><i> Item's Description </b></i>:- ${item.description} </p>
        <p><b><i> Item's Price small (in $) </b></i>:- ${item.price_small} </p>
        <p><b><i> Item's Price Large (in $) </b></i>:- ${item.price_large} </p>
        `
    )
  })
}); 