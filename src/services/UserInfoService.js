import { supabase } from '../config/supabase.config';

export const UserInfoService = {
  async getUsers() {
    const { data, error } = await supabase.from('user_info').select('*');
    if (error) {
      throw error;
    }
    return data;
  },
  async getUserById(user_Id) {
    const { data, error } = await supabase.from('user_info').select('*').eq('id', user_Id).single();
    if (error) {
      throw error;
    }
    return data;
  },
};
