import {supabase} from "./supabaseClient";

export default async function getAvatar(user) {
  const {data} = await supabase
    .from("profiles")
    .select(`avatar_url`)
    .eq("id", user?.id)
    .single();

  if (!data || !data.avatar_url) {
    return user.user_metadata.avatar_url;
  }

  return data.avatar_url;
}
