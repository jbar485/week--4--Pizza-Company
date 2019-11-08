function Pizza(size, toppings) {
  this.size = size,
  this.toppings = toppings,
  this.price = 0
}

Pizza.prototype.finalPrice = function() {
  var pizzaTop = [];
  for (i = 0; i < this.toppings.length; i++) {
    if (this.toppings[i] === 7) {
      this.price += 20
      var gold = " 100% Gold Sprinkles";
      pizzaTop.push(gold);
    }else if (this.toppings[i] === 6) {
      this.price += 1;
      var sausage = " Sausage";
      pizzaTop.push(sausage);
    }else if (this.toppings[i] === 5) {
      this.price += 1;
      var pineapple = " Pineapple";
      pizzaTop.push(pineapple);
    }else if (this.toppings[i] === 4) {
      this.price += 1;
      var olives = " Black Olives";
      pizzaTop.push(olives);
    }else if (this.toppings[i] === 3) {
      this.price += 1;
      var bacon = " Bacon";
      pizzaTop.push(bacon);
    }else if (this.toppings[i] === 2) {
      this.price += 1;
      var onions = " Onions";
      pizzaTop.push(onions);
    }else if (this.toppings[i] === 1) {
      this.price += 1;
      var pepperoni = " Pepperoni";
      pizzaTop.push(pepperoni);
    }else {
      var cheese = " Cheese Pizza";
      pizzaTop.push(cheese);
    }
  }
  if (this.size === 1) {
    this.price += 5;
  }else if (this.size === 2) {
    this.price += 7;
  }else if (this.size === 3) {
    this.price += 9;
  }else {
    alert("Sorry, you need to select a size")
  }
  $("#pizzaDescription").text(pizzaTop);
  return this.price;
}


$(document).ready(function(){
  $("#order").click(function(event){
    console.log("hello");
    event.preventDefault();
    var toppingArray = [];
    var finalTopping = $("input:checkbox[name=addTopping]:checked").each(function(){
      var finalTopping1 = $(this).val();
      var number = parseInt(finalTopping1);
      toppingArray.push(number);
    });
    console.log(toppingArray);

    var finalSize = parseInt($("input:radio[name=pizzaSize]:checked").val());

    var newPizza = new Pizza(finalSize, toppingArray);
    var price = newPizza.finalPrice();
    console.log(newPizza);
    console.log(price);
    $("#answer").text("Final Price $" + price + ".00");
    $("#orderPage").hide();
    $("#finalCard").show();
  });
  $("button#reset").click(function(event){
      location.reload();
    });

});
