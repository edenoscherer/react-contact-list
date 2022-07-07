export type Contact = {
  id?: number;
  idPerson?: number;
  type: "email" | "phone" | "whatsapp";
  value: string;
};

export type Person = {
  id?: number;
  name: string;
  contacts: Contact[];
};
