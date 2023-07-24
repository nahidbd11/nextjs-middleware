"use client";

import { useSession } from "next-auth/react";

export default function Home() {
  // const { data: session } = useSession({ required: true });
  // if (!session) return;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h3 className="text-4xl text-blue">Hellow</h3>
    </main>
  );
}
