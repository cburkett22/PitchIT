const router = require("express").Router();
const CreateTripModel = require("../../models/CreateTrip");

// router.post("/create", ({body}, res) => {
//     console.log("fin", body);
//     CreateTripModel.create(body)
//     .then(dbCreateTrip => {
//       res.json(dbCreateTrip);
//     })
//     .catch(err => {
//       res.status(404).json(err);
//     });
// });

router.post("https://localhost:5000/create", ({body}, res) => {
  console.log("body : ", body);
    var tripData = {
      "title": body.title,
      "date": body.date,
      "location": body.location,
      "campers": body.campers,
      "items": body.items,
      "review": body.review
  }
  console.log("tripdata", tripData);
  new CreateTripModel(tripData)
  .save()
  .then(() => res.json("Trip Added2."))
  .catch((err) => res.status(400).json("ERROR: " + err));
});

router.post("/api/transaction/bulk", ({body}, res) => {
  Transaction.insertMany(body)
    .then(dbCreateTrip => {
      res.json(dbCreateTrip);
    })
    .catch(err => {
      res.status(404).json(err);
    });
});

router.get("/api/create", (req, res) => {
    CreateTripModel.find({}).sort({date: -1})
    .then(dbCreateTrip => {
      res.json(dbCreateTrip);
    })
    .catch(err => {
      res.status(404).json(err);
    });
});

module.exports = router;