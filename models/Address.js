var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var AddressSchema = new Schema({
  // `title` is required and of type String
  city: {
    type: String,
    required: true
  },
  // `link` is required and of type String
  street: {
    type: String,
    required: true
  },
  // `note` is an object that stores a Note id
  // The ref property links the ObjectId to the Note model
  // This allows us to populate the Article with an associated Note
  housenumber: {
    type: String,
    required: true
  }
});

// This creates our model from the above schema, using mongoose's model method
var Address = mongoose.model("Address", AddressSchema);

// Export the Address model
module.exports = Address;