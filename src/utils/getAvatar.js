import {supabase} from "./supabaseClient";

export default async function getAvatar(user) {
  const {data, error} = await supabase
    .from("profiles")
    .select(`avatar_url`)
    .eq("id", user?.id)
    .single();

  if (error || !data?.avatar_url) {
    return user.user_metadata.avatar_url;
  }

  return data.avatar_url;
}
