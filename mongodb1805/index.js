require("dotenv").config();
// Importing express and mongodb
const express = require("express");
const mongodb = require("mongodb");

//Setting up server port number
const port = process.env.port || 3500;

// Mongo client
const mongoClient = mongodb.MongoClient;

// Mongodb database url
const dbName = "zen_class";
const dbURL = process.env.db_url || "mongodb://localhost:27017";

const objectid = mongodb.ObjectID;

// Importing express methods
const app = express();

// Using json body parser
app.use(express.json());

//Fetching entire database
app.get("/", async (req, res) => {
  try {
    const client = await mongoClient.connect(dbURL, {
      useUnifiedTopology: true,
    });
    const db = client.db(dbName);
    const mentor = await db.collection("mentor").find().toArray();
    const student = await db.collection("student").find().toArray();
    if (mentor) {
      res.status(200).json({
        message: "Mentor and Student list",
        mentor,
        student,
      });
    } else {
      res.status(404).json({
        message: "List not found",
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Internal server error",
    });
  }
});

// Fetching Mentor List only
app.get("/mentors", async (req, res) => {
  try {
    const client = await mongoClient.connect(dbURL, {
      useUnifiedTopology: true,
    });
    const db = client.db(dbName);
    const collection = await db.collection("mentor").find().toArray();

    if (collection) {
      res.status(200).json({
        message: "Mentor list only",
        collection,
      });
    } else {
      res.status(404).json({
        message: "List not found",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
});

// Fetching student list only
app.get("/students", async (req, res) => {
  try {
    const client = await mongoClient.connect(dbURL, {
      useUnifiedTopology: true,
    });
    const db = client.db(dbName);
    const collection = await db.collection("student").find().toArray();
    if (collection) {
      res.status(200).json({
        message: "Student list only",
        collection,
      });
    } else {
      res.status(404).json({
        message: "List not found",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
});

// Fetching student list enrolled with a mentor
app.get("/mentor/:id/students", async (req, res) => {
  try {
    const client = await mongoClient.connect(dbURL, {
      useUnifiedTopology: true,
    });
    const db = client.db(dbName);

    const mentor = await db
      .collection("mentor")
      .findOne({ _id: objectid(req.params.id) });

    const student = await db
      .collection("student")
      .find({ _id: { $in: mentor.students } })
      .toArray();

    if (mentor) {
      res.status(200).json({
        message: "Enrolled students",
        mentor: mentor.full_name,
        students: student,
      });
    } else {
      res.status(404).json({
        message: "Record not found",
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
});

// Assigning multiple students to a mentor
app.put("/mentor/:id", async (req, res) => {
  try {
    const isPresent = req.body.map((body) => objectid(body._id));

    const client = await mongoClient.connect(dbURL, {
      useUnifiedTopology: true,
    });
    const db = client.db(dbName);

    const mentorCollection = await db
      .collection("mentor")
      .findOne({ _id: objectid(req.params.id) });

    const studentCollection = await db
      .collection("student")
      .find({ _id: { $in: isPresent } })
      .toArray();

    const isAssigned = studentCollection.filter((student) => {
      if (student.mentor_id === "") return student;
    });

    if (mentorCollection && isAssigned.length > 0) {
      for (let i = 0; i < studentCollection.length; i++) {
        await db
          .collection("mentor")
          .updateMany(
            { _id: objectid(req.params.id) },
            { $push: { students: objectid(isAssigned[i]._id) } }
          );
        await db
          .collection("student")
          .findOneAndUpdate(
            { _id: objectid(isAssigned[i]._id) },
            { $set: { mentor_id: req.params.id } }
          );
      }
      res.status(200).json({
        message: "Record(s) inserted successfully",
        isAssigned,
      });
    } else {
      res.status(404).json({
        message:
          "Mentor does not exist or Student(s) already assigned to a mentor.",
      });
    }
  } catch (err) {
    console.log(err);
    res.status(501).json({
      message: "Internal Server Error",
    });
  }
});

// API to create a new mentor data
app.post("/create-mentor", async (req, res) => {
  try {
    const client = await mongoClient.connect(dbURL, {
      useUnifiedTopology: true,
    });
    const db = client.db(dbName);
    const collection = await db
      .collection("mentor")
      .find({ email: req.body.email })
      .toArray();
    if (collection.length === 0) {
      const mentorAdded = await db.collection("mentor").insertOne(req.body);
      res.status(200).json({
        message: "Mentor added to list",
        collection: mentorAdded,
      });
    } else {
      res.status(404).json({
        message: "Mentor already exist in the list",
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Internal server error",
    });
  }
});

// API to create a new student data
app.post("/create-student", async (req, res) => {
  try {
    const client = await mongoClient.connect(dbURL, {
      useUnifiedTopology: true,
    });

    const db = client.db(dbName);
    const student = await db
      .collection("student")
      .findOne({ email: req.body.email });

    const mentor = await db
      .collection("mentor")
      .findOne({ students: { $elemMatch: { email: req.body.email } } });

    if (
      (student === null || student === undefined) &&
      (mentor === null || mentor === undefined)
    ) {
      const inserted = await db.collection("student").insertOne(req.body);
      res.status(200).json({
        message: "Student added successfully",
        inserted,
      });
    } else {
      res.status(503).json({
        message: "Student already exits in the database.",
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Internal server error",
    });
  }
});

//Handling bad url request
app.get("*", (req, res) => {
  res.status(404).json({
    message: "Page not found",
  });
});

// server is listening to
app.listen(port, () => {
  console.log(`Server is listening to port ${port}`);
});
