module.exports = mongoose => {
    const Category = mongoose.model(
      "categories",
      mongoose.Schema(
        {
          type: String,
          age: Number,
        },
        { timestamps: true }
      )
    );
  
    return Category;
  };