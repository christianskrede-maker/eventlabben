export type FormType =
  | 'sales'
  | 'volunteer'
  | 'contact'
  | 'school';

export type Field = {
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'textarea' | 'select';
  required?: boolean;
  options?: string[];
};

export type FormConfig = {
  title: string;
  subject: string;
  recipients: string[];
  fields: Field[];
  checkboxText: string;
  successMessage: string;
};

export const formConfig: Record<FormType, FormConfig> = {
  sales: {
    title: 'Meld interesse for salgsplass',

    subject: 'Ny interesse for salgsplass',

    recipients: [
      'ninaogdennis@hotmail.com',
    ],

    checkboxText:
      'Jeg bekrefter at opplysningene er riktige og at jeg har lest reglene for salgsplass.',

    successMessage:
      'Takk! Vi har mottatt din interesse for salgsplass.',

    fields: [
      {
        name: 'name',
        label: 'Navn',
        type: 'text',
        required: true,
      },
      {
        name: 'phone',
        label: 'Telefon',
        type: 'tel',
        required: true,
      },
      {
        name: 'email',
        label: 'E-post',
        type: 'email',
        required: true,
      },
      {
        name: 'items',
        label: 'Hva ønsker du å selge?',
        type: 'textarea',
        required: true,
      },
      {
        name: 'tables',
        label: 'Antall bord',
        type: 'select',
        options: [
          '1 bord',
          '2 bord',
        ],
      },
    ],
  },

  volunteer: {
    title: 'Bli frivillig',

    subject: 'Ny frivillig',

    recipients: [
      'ida.oiesvold@gmail.com',
      'christianskrede@gmail.com',
      'knutzen64@hotmail.com',
      'karihelsing@hotmail.com',
    ],

    checkboxText:
      'Jeg bekrefter at opplysningene er riktige.',

    successMessage:
      'Tusen takk for at du ønsker å bidra!',

    fields: [
      {
        name: 'name',
        label: 'Navn',
        type: 'text',
        required: true,
      },
      {
        name: 'phone',
        label: 'Telefon',
        type: 'tel',
        required: true,
      },
      {
        name: 'email',
        label: 'E-post',
        type: 'email',
        required: true,
      },
      {
        name: 'message',
        label: 'Hvordan ønsker du å bidra?',
        type: 'textarea',
        required: true,
      },
    ],
  },

  contact: {
    title: 'Kontakt oss',

    subject: 'Nytt spørsmål fra nettsiden',

    recipients: [
      'ida.oiesvold@gmail.com',
      'christianskrede@gmail.com',
      'knutzen64@hotmail.com',
      'karihelsing@hotmail.com',
    ],

    checkboxText:
      'Jeg bekrefter at opplysningene er riktige.',

    successMessage:
      'Takk for meldingen. Vi svarer så raskt vi kan.',

    fields: [
      {
        name: 'name',
        label: 'Navn',
        type: 'text',
        required: true,
      },
      {
        name: 'phone',
        label: 'Telefon',
        type: 'tel',
        required: true,
      },
      {
        name: 'email',
        label: 'E-post',
        type: 'email',
        required: true,
      },
      {
        name: 'message',
        label: 'Melding',
        type: 'textarea',
        required: true,
      },
    ],
  },

  school: {
    title: 'Påmelding skolestartpakke',

    subject: 'Ny påmelding skolestartpakke',

    recipients: [
      'ida.oiesvold@gmail.com',
      'christianskrede@gmail.com',
      'knutzen64@hotmail.com',
      'karihelsing@hotmail.com',
    ],

    checkboxText:
      'Jeg bekrefter at opplysningene er riktige.',

    successMessage:
      'Barnet er registrert. Velkommen til festivalen!',

    fields: [
      {
        name: 'child',
        label: 'Barnets navn',
        type: 'text',
        required: true,
      },
      {
        name: 'school',
        label: 'Hvilken skole skal barnet begynne på?',
        type: 'text',
        required: true,
      },
      {
        name: 'guardian',
        label: 'Foresattes navn',
        type: 'text',
        required: true,
      },
      {
        name: 'phone',
        label: 'Telefon',
        type: 'tel',
        required: true,
      },
      {
        name: 'email',
        label: 'E-post',
        type: 'email',
        required: true,
      },
    ],
  },
};