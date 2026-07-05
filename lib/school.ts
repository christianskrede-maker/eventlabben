import { supabase } from './supabase';
import type { Student } from '../app/admin/school/types';

export async function getAllStudents(): Promise<Student[]> {
  const { data, error } = await supabase
    .from('festival_school')
    .select('*');

  if (error) {
    console.error('Kunne ikke hente skoleelever:', error);
    return [];
  }

  return (data ?? []) as Student[];
}