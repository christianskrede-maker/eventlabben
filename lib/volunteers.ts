import { supabase } from './supabase';
import type { Volunteer } from '../app/admin/volunteers/types';

export async function getAllVolunteers(): Promise<Volunteer[]> {
  const { data, error } = await supabase
    .from('festival_volunteers')
    .select('*');

  if (error) {
    console.error('Kunne ikke hente frivillige:', error);
    return [];
  }

  return (data ?? []) as Volunteer[];
}