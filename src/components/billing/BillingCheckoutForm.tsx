"use client";

import { useActionState, useEffect } from "react";
import { checkoutAction } from "@lib/data/cart";
import toast from "react-hot-toast";

interface BillingCheckoutFormProps {
  children: React.ReactNode;
}

export default function BillingCheckoutForm({ children }: BillingCheckoutFormProps) {
  const [errorMessage, action] = useActionState(checkoutAction, null);

  useEffect(() => {
    if (typeof errorMessage === "string") {
      toast.error(errorMessage);
    }
  }, [errorMessage]);

  return (
    <form
      action={action}
      className="grid gap-8"
      style={{ gridTemplateColumns: "1fr 320px" }}
    >
      {/* We pass isPending to children via context or clones if needed, 
          but better to just use a SubmitButton component inside children. */}
      {children}
    </form>
  );
}
