export default function Page() {
  async function mySecretAction() {
    'use server';
    console.log("Action Triggered!");
    return { success: true, message: "Action Secured" };
  }
import { publicAction } from "./actions";

export default async function Page() {
  const result = await publicAction();

  return (
    <main>
      <h1>Security Lab</h1>
      <p>{result.message}</p>
    </main>
  );
}

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Security Target: v16.1.6</h1>
      <form action={mySecretAction}>
        <button type="submit" style={{ padding: '10px 20px', cursor: 'pointer' }}>
          Trigger Server Action
        </button>
      </form>
    </main>
  );
}
