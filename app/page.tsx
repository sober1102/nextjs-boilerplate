export default function Home() {
  async function mySecretAction(formData: FormData) {
    'use server';
    // We access the server-side console here
    console.log("SERVER SIDE: Action triggered by user!");
    // In a real hack, we'd try to leak data here
  }

  return (
    <main style={{ padding: '2rem', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1>Bug Bounty Lab</h1>
      <p>The button below sends a request with a hidden <b>Next-Action</b> ID.</p>
      
      <form action={mySecretAction}>
        <button type="submit" style={{ padding: '10px 20px', cursor: 'pointer', borderRadius: '5px', border: '1px solid #000' }}>
          Trigger Secret Action
        </button>
      </form>
    </main>
  );
}
