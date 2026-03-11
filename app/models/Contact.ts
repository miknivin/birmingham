import mongoose, { Schema } from "mongoose";

export type ContactSubmission = {
  fullName: string;
  phone: string;
  email: string;
  city: string;
  educationLevel: string;
  programInterest: string;
  createdAt: Date;
};

const ContactSchema = new Schema<ContactSubmission>(
  {
    fullName: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    city: { type: String, required: true, trim: true },
    educationLevel: { type: String, required: true, trim: true },
    programInterest: { type: String, required: true, trim: true },
    createdAt: { type: Date, default: Date.now },
  },
  { collection: "contact_submissions" }
);

export const ContactModel =
  mongoose.models.ContactSubmission ||
  mongoose.model<ContactSubmission>("ContactSubmission", ContactSchema);
