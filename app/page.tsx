"use client";

import { z } from "zod";

export default function Home() {
  const testValue = z.string().parse(process.env.NEXT_PUBLIC_TEST_VALUE);

  return <div>Hello {testValue}</div>;
}
