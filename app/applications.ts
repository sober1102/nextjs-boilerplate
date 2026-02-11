// app/actions.ts
'use server'

export async function myServerAction(formData: FormData) {
  // Your server-side logic here (e.g., database updates)
  const data = formData.get('someInput');
  console.log("Saving to database:", data);
}
