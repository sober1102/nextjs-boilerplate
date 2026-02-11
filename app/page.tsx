export default function Home() {
  async function mySecretAction() {
    'use server';
    // We return a simple string. No objects, no complexity.
    // This is how a real leak usually looks in a text stream.
    return "SECRET_LEAK:sk_test_51MzSobertoolsSecretKey_2026";
  }

  return (
    <main style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Bug Bounty Lab: Final Phase</h1>
      <form action={mySecretAction as any}>
        <button type="submit">Extract Secret</button>
      </form>
    </main>
  );
}
