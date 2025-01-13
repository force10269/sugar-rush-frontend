import dayjs from "dayjs";

export interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  expectedGuests: string;
  date: dayjs.Dayjs | null;
  location: string;
  additionalDetails: string;
}

export interface BookingFormDataOutput {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  expectedGuests: string;
  date: string;
  location: string;
  additionalDetails: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
