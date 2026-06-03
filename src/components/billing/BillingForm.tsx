"use client";

export default function BillingForm() {
  return (
    <div>
      <h2
        className="text-[#1a1a1a] font-bold mb-8"
        style={{ fontSize: "22px" }}
      >
        Billing Address
      </h2>

      <div className="space-y-5">
        {/* First Name — full width */}
        <Field label="First Name*" />

        {/* Country + City */}
        <div className="grid grid-cols-2 gap-4">
          <SelectField
            label="Country*"
            options={["Afghanistan", "United States", "United Kingdom", "India"]}
            defaultValue="Afghanistan"
          />
          <Field label="City*" />
        </div>

        {/* Street + Apt/Suite */}
        <div className="grid grid-cols-2 gap-4">
          <Field label="Street" />
          <Field label="Apt / Suite / Other" />
        </div>

        {/* Postcode + Phone + ZIP */}
        <div className="grid grid-cols-3 gap-4">
          <Field label="Postcode" />
          <Field label="Phone" placeholder="+ 375 (29)" />
          <Field label="ZIP Code" />
        </div>

        {/* Email — full width */}
        <Field label="Email*" type="email" />
      </div>
    </div>
  );
}

function Field({
  label,
  type = "text",
  placeholder = "",
}: {
  label: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label
        className="block text-[#222] mb-1"
        style={{ fontSize: "13px", fontWeight: 400 }}
      >
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full border border-[#e0e0e0] bg-white px-3 outline-none focus:border-[#c27a4a] transition"
        style={{ height: "44px", fontSize: "14px" }}
      />
    </div>
  );
}

function SelectField({
  label,
  options,
  defaultValue,
}: {
  label: string;
  options: string[];
  defaultValue?: string;
}) {
  return (
    <div>
      <label
        className="block text-[#222] mb-1"
        style={{ fontSize: "13px", fontWeight: 400 }}
      >
        {label}
      </label>
      <select
        defaultValue={defaultValue}
        className="w-full border border-[#e0e0e0] bg-white px-3 outline-none focus:border-[#c27a4a] transition appearance-auto"
        style={{ height: "44px", fontSize: "14px", color: "#444" }}
      >
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}