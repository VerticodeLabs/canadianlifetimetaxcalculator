// components/BackButton.tsx
"use client";

import { useRouter } from "next/navigation";

interface BackButtonProps {
  children: React.ReactNode;
  className?: string;
}

export default function BackButton({
  children,
  className = "",
}: BackButtonProps) {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className={`btn btn-primary ${className}`}
      aria-label="Go back to previous page"
    >
      {children}
    </button>
  );
}
