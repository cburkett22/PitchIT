const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const createTripSchema = new Schema(
  {
    title: {
      type: String,
      required: "Enter a title of your trip"
    },
    date: {
      type: String,
      required: "Enter the dates for your trip"
    },
    location: {
        type: String,
        required: "Choose a location"
    },
    campers: {
        type: String,
        required: "Invite your friends!"
    },
    items: {
        type: String,
        required: "List the items you want to bring on your trip"
    },
    completed: {
        type: Boolean,
        default: false
    },
    review: {
        type: String
    },
    stars: {
      type: String,
      default: null
    },
    image: {
      type: String,
      default: null
    },
    url: {
      type: String,
      default: null
    }
  }
);

const CreateTripModel = mongoose.model("trips", createTripSchema);

module.exports = CreateTripModel;