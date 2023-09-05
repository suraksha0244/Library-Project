const LibraryUserModel = require("../models/libraryUser.model");

exports.authenticateUser = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const response = await LibraryUserModel.findOne({
      email: email,
      password: password,
    });

    if (response) {
      res.status(200).send({ data: response });
    } else {
      const userData = {
        email: email,
        password: password,
        username: "Anonymous",
        user_id: "1",
      };
      const addedModel = new LibraryUserModel(userData); // Serialize
      const registeredUser = await addedModel.save();
      res
        .status(401)
        .send({ data: "Unauthenticated", addedModel: registeredUser });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await LibraryUserModel.findOne({ _id: id });
    if (response) {
      res.status(200).send({ data: response });
    } else {
      res.status(404).send({ data: "No User Found" });
    }
  } catch (error) {
    res.status(500).send({ error: error });
  }
};
