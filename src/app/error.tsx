"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    const isChunkError =
      /ChunkLoadError/i.test(error.name) ||
      /Loading chunk [\d]+ failed/i.test(error.message);

    if (isChunkError) {
      const key = "chunk-reload-attempted";
      if (!sessionStorage.getItem(key)) {
        sessionStorage.setItem(key, "1");
        window.location.reload();
      }
    }
  }, [error]);

  return (
    <html>
      <body>
        <h2>Something went wrong.</h2>
        <button onClick={() => window.location.reload()}>Try again</button>
      </body>
    </html>
  );
}
