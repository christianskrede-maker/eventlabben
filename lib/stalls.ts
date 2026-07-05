import { supabase } from './supabase';
import type { Stall } from '../app/admin/stalls/types';

export async function getAllStalls(): Promise<Stall[]> {
  const { data, error } = await supabase
    .from('festival_stalls')
    .select('*');

  if (error) {
    console.error('Kunne ikke hente salgsboder:', error);
    return [];
  }

  return (data ?? []) as Stall[];
}

export async function getStall(id: number | string): Promise<Stall | null> {
  const { data, error } = await supabase
    .from('festival_stalls')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error('Kunne ikke hente bod:', error);
    return null;
  }

  return data as Stall;
}

export async function updateStall(
  id: number | string,
  values: Partial<Stall>
): Promise<Stall | null> {
  const { data, error } = await supabase
    .from('festival_stalls')
    .update(values)
    .eq('id', id)
    .select()
    .single();

  if (error) {
    console.error('Kunne ikke oppdatere bod:', error);
    return null;
  }

  return data as Stall;
}