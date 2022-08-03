import mongoose from "mongoose";

// Declare Test Schema.
const TestSchema = new mongoose.Schema({
    uuid: {
        type: Number,
        required: true,
        unique: true,
    },
    text: {
        type: String,
        required: true,
    }
})

// Declare Test Model.
/**
 * mongoose.models.Test is used to verify whether there is already an existing Model of Test.
 * If already exist, do not recreate the Test Model.
 * if none, then create the Test Model.
 */
const Test = mongoose.models.Test || mongoose.model("Test", TestSchema);

export default TestSchema;