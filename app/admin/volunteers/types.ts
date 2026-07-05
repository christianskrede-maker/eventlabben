export type VolunteerStatus =
  | 'ikke_tildelt'
  | 'aktiv'
  | 'ferdig';

export interface Volunteer {
  id: number;
  created_at: string;
  name: string | null;
  email: string | null;
  phone: string | null;
  shift: string | null;
  notes: string | null;
  task: string | null;
  status: VolunteerStatus | null;
}