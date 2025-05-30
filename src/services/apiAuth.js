import supabase from "./supabase";

export async function signup({ fullName, email, password }) {
  let { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: { data: { fullName, avatar: "" } },
  });
  if (error) throw new Error(error.message);
  return data;
}

//psw:123456
export async function login({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw new Error(error.message);

  return data;
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  return data?.user;
}

export async function logout() {
  let { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}

export async function updateCurrentUser({ password, fullName, avatar }) {
  //1.Update password OR fullName
  let updateDate;
  if (password) updateDate = { password };
  if (fullName) updateDate = { data: { fullName } };
  const { data, error } = await supabase.auth.updateUser(updateDate);

  if (error) throw new Error(error.message);

  if (!avatar) return data;

  //2. Upload the avatar image

  const fileName = `avatar-${data.user.id}-${Math.random()}`;

  const { error: storageError } = await supabase.storage
    .from("avatars")
    .upload(fileName, avatar);

  if (storageError) throw new Error(storageError.message);

  //3.Update Avatar

  const { data: updatedUser, error: error2 } = await supabase.auth.updateUser({
    data: {
      avatar: `https://meaplrfqojmlmpikpous.supabase.co/storage/v1/object/public/avatars//${fileName}`,
    },
  });
  if (error2) throw new Error(error2.message);
  return updatedUser;
}
