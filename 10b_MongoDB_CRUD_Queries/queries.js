db.students.insert({
  name: "katyayani",
  age: 20,
  course: "CSE"
});

db.students.find();

db.students.update(
  { name: "katyayani" },
  { $set: { age: 19 } }
);

db.students.remove({
  name: "katyayani"
});
