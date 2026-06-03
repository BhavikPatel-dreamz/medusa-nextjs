"use client";

import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full bg-[#c27a4a] text-white uppercase font-semibold tracking-widest hover:bg-[#b36f42] transition disabled:opacity-50"
      style={{
        height: "54px",
        fontSize: "13px",
        letterSpacing: "0.15em",
        borderRadius: 0,
        marginTop: "8px",
      }}
    >
      {pending ? "Placing Order..." : "Place Order"}
    </button>
  );
}
