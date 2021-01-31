const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
	title: String,
	item1: String,
	item2: String,
	item3: String,
	item4: String,
	item5: String,
	item6: String,
	item7: String,
	item8: String,
	item9: String,
	item10: String
});

module.exports = mongoose.model("Category", categorySchema);