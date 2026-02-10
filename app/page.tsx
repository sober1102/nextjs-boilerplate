'use client'; // We add this to handle the button click logic

export default function Home() {
  // Our "Secret" that we want to leak
  const MOCK_API_KEY = "sk_test_51MzSobertoolsSecretKey_2026";

  // The Server Action
  async function mySecretAction() {
    'use server';
    return { 
      status: "success", 
      exposed_secret: MOCK_API_KEY 
    };
  }

  return (
    <main style={{ padding: '2rem', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1>Bug Bounty Lab: Phase 2</h1>
      <p>TypeScript is bypassed. Ready for extraction.</p>
      
      {/* We use an arrow function here to avoid the Form Type error */}
      <button 
        onClick={async () => {
          const res = await mySecretAction();
          console.log("Client received:", res);
        }}
        style={{ padding: '10px 20px', cursor: 'pointer' }}
      >
        Trigger Secret Action
      </button>
    </main>
  );
}
