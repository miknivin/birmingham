import { NextResponse } from "next/server";
import connectMongo from "@/app/lib/mongodb";
import { ContactModel } from "@/app/models/Contact";

type ContactPayload = {
  fullName?: string;
  phone?: string;
  email?: string;
  city?: string;
  educationLevel?: string;
  programInterest?: string;
};

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as ContactPayload;

    const missingFields = [
      "fullName",
      "phone",
      "email",
      "city",
      "educationLevel",
      "programInterest",
    ].filter((field) => !payload[field as keyof ContactPayload]);

    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: "Missing required fields.", fields: missingFields },
        { status: 400 }
      );
    }

    await connectMongo();
    const entry = await ContactModel.create({
      fullName: payload.fullName,
      phone: payload.phone,
      email: payload.email,
      city: payload.city,
      educationLevel: payload.educationLevel,
      programInterest: payload.programInterest,
    });

    return NextResponse.json({ id: entry._id }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Unable to submit request." },
      { status: 500 }
    );
  }
}
