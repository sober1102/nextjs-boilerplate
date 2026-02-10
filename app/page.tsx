export default function Home() {
  async function mySecretAction() {
    'use server';
    console.log("SERVER SIDE: This action was triggered!");
    return { message: "Access Granted: You found the hidden action!" };
  }

  return (
    <main style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Bug Bounty Lab</h1>
      <p>This button triggers a hidden server-side function.</p>
      <form action={mySecretAction}>
        <button type="submit" style={{ padding: '10px 20px', cursor: 'pointer' }}>
          Trigger Secret Action
        </button>
      </form>
    </main>
  );
}
