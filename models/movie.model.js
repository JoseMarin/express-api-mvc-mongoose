module.exports = mongoose => {
    const Movie = mongoose.model(
      "movies",
      mongoose.Schema(
        {
          title: String,
          categoryId: Number,
          available: Boolean
        },
        { timestamps: true }
      )
    );
  
    return Movie;
  };