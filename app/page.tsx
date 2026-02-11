// app/page.tsx

async function mySecretAction() {
  'use server';
  
  const secretKey = process.env.STRIPE_SECRET_KEY; 
  
  // Use the key for internal logic (like a fetch to Stripe)
  // console.log("Using key internally..."); 

  // NEVER return the key itself
  return { success: true, message: "Action completed securely" };
}
