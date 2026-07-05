export type StudentStatus =
  | 'ny'
  | 'kontaktet'
  | 'ferdig';

export type Student = {
  id: number;

  created_at: string;

  child_name: string | null;
  guardian_name: string | null;

  school: string | null;

  email: string | null;
  phone: string | null;

  status: StudentStatus | null;

  delivered: boolean | null;

  notes: string | null;
};