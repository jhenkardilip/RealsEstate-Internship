import React from "react";

const plans = [
  {
    title: "Basic",
    price: "₹1,500",
    frequency: "One-time",
    features: [
      "Registration Charges Included",
      "2% Brokerage Fee",
      "No Maintenance Charges",
      "GST: 5%",
      "2 Site Visits"
    ],
    button: "Select Plan",
  },
  {
    title: "Standard",
    price: "₹5,000",
    frequency: "One-time",
    features: [
      "All Basic Features",
      "5 Site Visits",
      "Loan Assistance",
      "Maintenance Charges for 1 Year",
      "Brokerage Fee Waived"
    ],
    button: "Select Plan",
  },
  {
    title: "Premium",
    price: "₹15,000",
    frequency: "One-time",
    features: [
      "All Standard Features",
      "Legal Verification Support",
      "Priority Site Visits",
      "Dedicated Relationship Manager",
      "Interior Consultation Discount"
    ],
    button: "Select Plan",
  }
];

export default function Prices() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 px-6 py-12 text-white">
      <h1 className="text-4xl font-bold text-center mb-4 text-white font-manrope">
        Choose Your Real Estate Package
      </h1>
      <p className="text-center mb-10 text-gray-400 font-manrope">
        Transparent pricing with all essential services
      </p>
      <div className="grid gap-8 grid-cols-3 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-700 text-gray-200"
          >
            <h2 className="text-xl font-semibold text-center mb-2 text-white font-manrope">
              {plan.title}
            </h2>
            <div className="text-center text-3xl font-bold mb-1 text-white font-manrope">
              {plan.price}
            </div>
            <p className="text-center text-sm text-gray-400 mb-6 font-manrope">
              {plan.frequency}
            </p>
            <ul className="space-y-3 mb-8">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center text-sm text-gray-300 font-manrope">
                  <span className="mr-2 text-green-400">☑</span> {feature}
                </li>
              ))}
            </ul>
            <button className="w-full bg-deep_orange-400 hover:bg-deep_orange-300 text-white font-semibold py-2 rounded-xl font-manrope">
              {plan.button}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}