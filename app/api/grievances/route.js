import { NextResponse } from "next/server";
import mongoose from "mongoose";

// Define the MongoDB connection string (Replace with your actual MongoDB URI)
const MONGODB_URI = process.env.MONGODB_URI;

// Connect to MongoDB (ensure it's connected only once)
if (!mongoose.connections[0].readyState) {
  mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

// Define the grievance schema
const grievanceSchema = new mongoose.Schema(
  {
    name: { type: String, default: "Anonymous" },
    county: { type: String, required: true },
    subCounty: { type: String, default: "" },
    story: { type: String, required: true },
  },
  { timestamps: true }
);

// Create the model (if not already created)
const Grievance =
  mongoose.models.Grievance || mongoose.model("Grievance", grievanceSchema);

// Handle POST request (Submits a grievance)
export async function POST(req) {
  try {
    const body = await req.json();
    const newGrievance = new Grievance(body);
    await newGrievance.save();
    return NextResponse.json(
      { message: "Grievance submitted successfully!" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to submit grievance" },
      { status: 500 }
    );
  }
}
