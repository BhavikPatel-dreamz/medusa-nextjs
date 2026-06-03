"use client";

import { CreditCard, HelpCircle } from "lucide-react";

interface CreditCardPanelProps {
  paymentMethod: string;
}

export default function CreditCardPanel({ paymentMethod }: CreditCardPanelProps) {
  return (
    <div
      className="p-7"
      style={{ backgroundColor: "#f5f5f5" }}
    >
      <h2
        className="text-[#1a1a1a] font-bold mb-6"
        style={{ fontSize: "22px" }}
      >
        Credit Card Info
      </h2>

      <div className="space-y-5">
        {/* Name On Card */}
        <PanelField label="Name On Card" />

        {/* Card Number */}
        <div>
          <label
            className="block text-[#222] mb-2"
            style={{ fontSize: "13px", fontWeight: 400 }}
          >
            Card Number
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="____-____-____-____"
              className="w-full border border-[#d8d8d8] bg-white px-3 pr-10 outline-none focus:border-[#c27a4a] transition"
              style={{ height: "44px", fontSize: "13px", color: "#444" }}
            />
            <CreditCard
              size={18}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#888]"
              strokeWidth={1.5}
            />
          </div>
        </div>

        {/* Exp Month + Exp Year */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label
              className="block text-[#222] mb-2"
              style={{ fontSize: "13px", fontWeight: 400 }}
            >
              Exp.Month
            </label>
            <select
              className="w-full border border-[#d8d8d8] bg-white px-3 outline-none focus:border-[#c27a4a] transition"
              style={{ height: "44px", fontSize: "13px", color: "#444" }}
            >
              {Array.from({ length: 12 }).map((_, i) => (
                <option key={i}>
                  {(i + 1).toString().padStart(2, "0")}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label
              className="block text-[#222] mb-2"
              style={{ fontSize: "13px", fontWeight: 400 }}
            >
              Exp. Year
            </label>
            <select
              className="w-full border border-[#d8d8d8] bg-white px-3 outline-none focus:border-[#c27a4a] transition"
              style={{ height: "44px", fontSize: "13px", color: "#444" }}
            >
              {Array.from({ length: 15 }).map((_, i) => (
                <option key={i}>{2015 + i}</option>
              ))}
            </select>
          </div>
        </div>

        {/* CVV + Set as default */}
        <div className="flex items-end gap-4">
          <div className="flex-none" style={{ width: "130px" }}>
            <label
              className="block text-[#222] mb-2"
              style={{ fontSize: "13px", fontWeight: 400 }}
            >
              CVV
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="123"
                className="w-full border border-[#d8d8d8] bg-white px-3 pr-9 outline-none focus:border-[#c27a4a] transition"
                style={{ height: "44px", fontSize: "13px", color: "#444" }}
              />
              <HelpCircle
                size={16}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#aaa]"
                strokeWidth={1.5}
              />
            </div>
          </div>

          {/* Set as default */}
          <div className="flex items-start gap-2 pb-1">
            <input
              type="checkbox"
              id="default-payment"
              className="mt-1 accent-[#c27a4a]"
              style={{ width: "14px", height: "14px" }}
            />
            <label
              htmlFor="default-payment"
              className="text-[#555] leading-snug"
              style={{ fontSize: "12px" }}
            >
              Set as default
              <br />
              payment method
            </label>
          </div>
        </div>

        {/* Place Order */}
        <button
          className="w-full bg-[#c27a4a] text-white uppercase font-semibold tracking-widest hover:bg-[#b36f42] transition"
          style={{
            height: "54px",
            fontSize: "13px",
            letterSpacing: "0.15em",
            borderRadius: 0,
            marginTop: "8px",
          }}
        >
          Place Order
        </button>
      </div>
    </div>
  );
}

function PanelField({ label }: { label: string }) {
  return (
    <div>
      <label
        className="block text-[#222] mb-2"
        style={{ fontSize: "13px", fontWeight: 400 }}
      >
        {label}
      </label>
      <input
        type="text"
        className="w-full border border-[#d8d8d8] bg-white px-3 outline-none focus:border-[#c27a4a] transition"
        style={{ height: "44px", fontSize: "13px" }}
      />
    </div>
  );
}