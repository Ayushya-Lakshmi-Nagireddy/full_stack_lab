db.students.insertMany([
  { name: "katyayani", age: 20, marks: 85 },
  { name: "Parimala",  age: 21, marks: 75 },
  { name: "Hemanth",   age: 20, marks: 90 }
]);

db.students.find();

db.students.find().limit(2);

db.students.find().sort({ marks: 1 });

db.students.createIndex({ name: 1 });

db.students.aggregate([
  {
    $group: {
      _id: null,
      averageMarks: { $avg: "$marks" }
    }
  }
]);
