// app/page.tsx
'use client' // This is your Client Component

import { myServerAction } from './actions';

export default function Page() {
  return (
    <form action={myServerAction}>
      <input type="text" name="someInput" />
      <button type="submit">Submit</button>
    </form>
  );
}
