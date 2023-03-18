import { TicketType, PaymentMethod } from "./enums";

export interface EventRegistrationForm {
  personalInformation: {
    firstName: string;
    lastName: string;
    email: string;
    age: number;
  };
  eventPreferences: {
    ticketType: TicketType;
    dietaryRestrictions: string;
    eventDate: number;
  };
  paymentInformation: {
    paymentMethod: PaymentMethod;
    numberOfTicket: number;
  };
  profilePicture: string;
}
