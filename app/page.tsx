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
