import { publicAction } from "./actions";

export default function Page() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>Security Lab</h1>

      <form action={publicAction}>
        <button type="submit">
          Trigger Public Action
        </button>
      </form>
    </main>
  );
}

