import { supabase } from '../config/supabase.config';

export const UserService = {
    async getUsers() {
        const { data, error } = await supabase
            .from("user_info")
            .select("*");

        if (error) {
            throw error;
        }
        return data;
    }
};
