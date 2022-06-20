import {supabase} from "./supabaseClient";

export default async function getProfile() {
  try {
    const user = supabase.auth.user();

    let {data, error, status} = await supabase
      .from("profiles")
      .select(`username, avatar_url, website`)
      .eq("id", user.id)
      .single();

    if (error && status !== 406) {
      throw error;
    }

    return data;
  } catch (error) {
    alert(error.message);
  }
}
