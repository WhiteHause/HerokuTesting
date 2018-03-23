
var object = {
    "firstName":"Test",
    "lastName":"Test",
    "email":"email@email.com"
}

$.post("https://shielded-cove-12273.herokuapp.com/contacts", object, function( response ) {
    console.log(data);
  }, "json");