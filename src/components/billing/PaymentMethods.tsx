"use client";

import { Heart } from "lucide-react";

interface PaymentMethodsProps {
  selected: string;
  onChange: (method: string) => void;
}

const methods = [
  { id: "credit-card", title: "Credit Card" },
  { id: "paypal", title: "PayPal" },
  { id: "cash", title: "Cash" },
  { id: "other", title: "Other" },
];

export default function PaymentMethods({ selected, onChange }: PaymentMethodsProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {methods.map((method) => {
        const active = selected === method.id;

        return (
          <button
            key={method.id}
            onClick={() => onChange(method.id)}
            className="flex items-center justify-center gap-2 bg-white transition-all duration-150 hover:border-[#c27a4a]"
            style={{
              height: "58px",
              border: active ? "1px solid #c27a4a" : "1px solid #e0e0e0",
              borderRadius: 0,
            }}
          >
            <Heart
              size={20}
              strokeWidth={1.5}
              style={{ color: "#c27a4a" }}
            />
            <span
              style={{
                fontSize: "14px",
                fontWeight: 500,
                color: "#222",
              }}
            >
              {method.title}
            </span>
          </button>
        );
      })}
    </div>
  );
}