"use client";

import { Suspense } from "react";
import ResultsClient from "./ResultsClient";

export default function ResultsPage() {
  return (
    <Suspense fallback={<div className="text-white p-8">Loading...</div>}>
      <ResultsClient />
    </Suspense>
  );
}
