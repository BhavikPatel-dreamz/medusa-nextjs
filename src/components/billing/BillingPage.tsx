"use client";

import { useState } from "react";
import PaymentMethods from "./PaymentMethods";
import BillingForm from "./BillingForm";
import CreditCardPanel from "./CreditCardPanel";

export default function BillingPage() {
  const [paymentMethod, setPaymentMethod] = useState("credit-card");

  return (
    <main className="bg-white min-h-screen">
      <div className="max-w-[1100px] mx-auto px-6 py-8">

        {/* Returning Customer banner */}
        <div
          className="flex items-center justify-center mb-8"
          style={{ backgroundColor: "#f5f5f5", height: "56px" }}
        >
          <p style={{ fontSize: "14px", color: "#888" }}>
            Returning customer?{" "}
            <span
              className="cursor-pointer hover:underline"
              style={{ color: "#c27a4a" }}
            >
              Click here to Login
            </span>
          </p>
        </div>

        {/* Heading */}
        <div className="mb-6">
          <h1
            className="text-[#1a1a1a] font-bold mb-1"
            style={{ fontSize: "28px" }}
          >
            Billing Info
          </h1>
          <p style={{ fontSize: "13px", color: "#888" }}>
            Choose a payment option below and fill out the appropriate information
          </p>
        </div>

        {/* Payment Methods */}
        <div className="mb-8">
          <PaymentMethods
            selected={paymentMethod}
            onChange={setPaymentMethod}
          />
        </div>

        {/* Forms */}
        <div
          className="grid gap-8"
          style={{ gridTemplateColumns: "1fr 320px" }}
        >
          <BillingForm />
          <CreditCardPanel paymentMethod={paymentMethod} />
        </div>

      </div>
    </main>
  );
}