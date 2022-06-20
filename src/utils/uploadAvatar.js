import {supabase} from "./supabaseClient";

export default async function uploadAvatar(event) {
  try {
    if (!event.target.files || event.target.files.length === 0) {
      throw new Error("You must select an image to upload.");
    }

    const file = event.target.files[0];
    const fileExt = file.name.split(".").pop();
    const fileName = `${Math.random()}.${fileExt}`;
    const filePath = `${fileName}`;

    const {error: uploadError} = await supabase.storage
      .from("avatars")
      .upload(filePath, file);

    const {data, error: fetchUrlError} = await supabase.storage
      .from("avatars")
      .getPublicUrl(filePath);

    const user = supabase.auth.user();

    const updates = {
      id: user.id,
      avatar_url: data.publicURL,
      updated_at: new Date(),
    };

    const {error} = await supabase.from("profiles").upsert(updates, {
      returning: "minimal",
    });

    if (uploadError) {
      throw uploadError;
    }

    if (fetchUrlError) {
      throw fetchUrlError;
    }

    if (error) {
      throw error;
    }
  } catch (error) {
    console.error(error.message);
  }
}
