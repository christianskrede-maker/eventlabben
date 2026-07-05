export type StallStatus = 'ledig' | 'reservert' | 'opptatt';

export interface Stall {
  id: number;
  stall_number: number;
  seller_name: string | null;
  email: string | null;
  phone: string | null;
  description: string | null;
  status: StallStatus;
  created_at: string;
}