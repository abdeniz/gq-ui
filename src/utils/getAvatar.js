import {supabase} from "./supabaseClient";

export default async function getAvatar(user) {
  const {data} = await supabase
    .from("profiles")
    .select(`avatar_url`)
    .eq("id", user?.id)
    .single();

  return data.avatar_url;
}
