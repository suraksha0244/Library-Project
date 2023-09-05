const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://subramanyarao4:U8xuzx2PnphtkDMI@recipecluster.e4goe7u.mongodb.net/library_database", // Update the database name to match your library database
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

module.exports = mongoose.connection;
