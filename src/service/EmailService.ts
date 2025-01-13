import emailjs from "@emailjs/browser";
import { BookingFormDataOutput, ContactFormData } from "../store/types";

const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || "";
const BOOKING_TEMPLATE_ID =
  process.env.REACT_APP_EMAILJS_BOOKING_TEMPLATE_ID || "";
const CONTACT_TEMPLATE_ID =
  process.env.REACT_APP_EMAILJS_CONTACT_TEMPLATE_ID || "";
const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "";

if (
  !SERVICE_ID ||
  !BOOKING_TEMPLATE_ID ||
  !CONTACT_TEMPLATE_ID ||
  !PUBLIC_KEY
) {
  console.error("EmailJS environment variables are missing!");
  throw new Error("EmailJS environment variables are not set correctly.");
}

export const sendBookingEmail = async (data: BookingFormDataOutput) => {
  try {
    const response = await emailjs.send(
      SERVICE_ID,
      BOOKING_TEMPLATE_ID,
      data as Record<string, any>,
      PUBLIC_KEY,
    );
    return response.status === 200;
  } catch (error) {
    console.error("Failed to send email:", error);
    throw new Error("Email service failed");
  }
};

export const sendContactEmail = async (data: ContactFormData) => {
  try {
    const response = await emailjs.send(
      SERVICE_ID,
      CONTACT_TEMPLATE_ID,
      data as Record<string, any>,
      PUBLIC_KEY,
    );
    return response.status === 200;
  } catch (error) {
    console.error("Failed to send email:", error);
    throw new Error("Email service failed");
  }
};
