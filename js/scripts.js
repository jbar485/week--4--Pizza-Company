function Pizza(size, toppings) {
  this.size = size,
  this.toppings = toppings,
  this.price = 0
}

Pizza.prototype.finalPrice = function() {
  this.toppings.forEach(function(topping){
    this.price += 1;
  });
  if (this.size === 1) {
    this.price += 5;
  }else if (this.size === 2) {
    this.price += 7;
  }else if (this.size === 3) {
    this.price += 9;
  }else {
    alert("Sorry, you need to select a size")
  }
  return this.price;
}


$(document).ready(function(){
  $("#order").click(function(event){
    console.log("hello");
    event.preventDefault();
    var toppingArray = [];
    var finalTopping = $("input:checkbox[name=addTopping]:checked").each(function(){
      var finalTopping1 = $(this).val();
      toppingArray.push(finalTopping1);
    });
    console.log(toppingArray);

    var finalSize = parseInt($("input:radio[name=pizzaSize]:checked").val());

    var newPizza = new Pizza(finalSize, toppingArray);
    var price = newPizza.finalPrice();

    $("#answer").text("Final Price $" + price + ".00");

    console.log(toppingArray);
  });

});
