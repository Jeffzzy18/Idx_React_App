import { supabase } from '../config/supabase.config';

export const ActivityInfoService = {
  async getActivities() {
    const { data, error } = await supabase.from('activity_info').select('*');
    if (error) {
      throw error;
    }
    return data;
  },
  async getActivityById(activity_Id) {
    const { data, error } = await supabase
      .from('activity_info')
      .select('*')
      .eq('id', activity_Id)
      .single();
    if (error) {
      throw error;
    }
    return data;
  },
};
