require("dotenv").config();
const mongoose = require("mongoose");
const Person = require("./models/Person");

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("Connection error", err));

const person = new Person({
  name: "Alice",
  age: 28,
  favoriteFoods: ["pizza", "sushi"],
});

person.save((err, data) => {
  if (err) return console.error(err);
  console.log("Saved person:", data);
});

const arrayOfPeople = [
  { name: "John", age: 25, favoriteFoods: ["tacos"] },
  { name: "Mary", age: 30, favoriteFoods: ["salad", "burritos"] },
  { name: "Paul", age: 24, favoriteFoods: ["steak", "pizza"] },
];

Person.create(arrayOfPeople, (err, people) => {
  if (err) return console.error(err);
  console.log("People created:", people);
});

Person.find({ name: "John" }, (err, people) => {
  if (err) return console.error(err);
  console.log("Found:", people);
});

const food = "burritos";
Person.findOne({ favoriteFoods: food }, (err, person) => {
  if (err) return console.error(err);
  console.log("Found one by favorite food:", person);
});

const personId = "your_person_id_here";
Person.findById(personId, (err, person) => {
  if (err) return console.error(err);
  console.log("Found by ID:", person);
});

Person.findById(personId, (err, person) => {
  if (err) return console.error(err);
  person.favoriteFoods.push("hamburger");
  person.save((err, updatedPerson) => {
    if (err) return console.error(err);
    console.log("Updated person:", updatedPerson);
  });
});

const personName = "John";
Person.findOneAndUpdate(
  { name: personName },
  { age: 20 },
  { new: true },
  (err, updatedPerson) => {
    if (err) return console.error(err);
    console.log("Updated:", updatedPerson);
  }
);

Person.findByIdAndRemove(personId, (err, removedPerson) => {
  if (err) return console.error(err);
  console.log("Removed:", removedPerson);
});

Person.deleteMany({ name: "Mary" }, (err, result) => {
  if (err) return console.error(err);
  console.log("Deleted Marys:", result);
});

Person.find({ favoriteFoods: "burritos" })
  .sort("name")
  .limit(2)
  .select("-age")
  .exec((err, data) => {
    if (err) return console.error(err);
    console.log("Chained query result:", data);
  });
