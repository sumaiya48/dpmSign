import React from "react";

export default function ExchangePolicy() {
  return (
    <div className="my-20 px-4 md:px-0">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold">Exchange Policy</h2>
        <p className="text-gray-600 mt-2 text-sm sm:text-base w-full md:w-7/12 mx-auto">
          At Dhaka Plastic & Metal, we are committed to delivering high-quality products that meet your expectations. 
          While we do not offer returns or refunds, we provide exchanges under specific conditions to resolve your satisfaction. 
          Please review the following terms carefully to understand the eligibility process and timelines for product exchanges.
        </p>
        <hr
          className="h-1 w-3/12 md:w-1/12 bg-[#45B6E7] mx-auto mt-3 rounded"
          style={{ height: "6px" }}
        />
      </div>

      {/* Policy Box */}
      <div className="bg-[#f9fbfd] w-11/12 mx-auto p-6 md:p-8 rounded border border-gray-300 text-sm sm:text-base text-gray-800 space-y-6">
        {/* Eligibility */}
        <div>
          <h3 className="text-lg font-semibold text-black mb-2">Eligibility for Exchange</h3>
          <p>You may request an exchange under the following conditions:</p>
          <p><strong>A. Major Defects in Materials or Craftsmanship:</strong></p>
          <ul className="list-disc list-inside ml-4">
            <li>Exchanges are accepted if the product has significant defects that impact its quality, durability, or functionality.</li>
            <li>Examples: include broken materials, misaligned signage parts, or damaged edges that render the product unusable.</li>
            <li><strong>Note:</strong> Minor imperfections that do not affect product quality (e.g., small surface marks or slight color variations) do not qualify for an exchange.</li>
          </ul>
          <p><strong>B. Design Mismatch:</strong></p>
          <ul className="list-disc list-inside ml-4">
            <li>If the final delivered product does not match the approved design specifications (e.g., incorrect size, design, or spelling errors), it is eligible for exchange.</li>
            <li>Approved designs include the digital proof/mockup shared before production.</li>
          </ul>
        </div>

        {/* Non-Exchangeable Items */}
        <div>
          <h3 className="text-lg font-semibold text-black mb-2">Non-Exchangeable Items</h3>
          <ul className="list-disc list-inside ml-4">
            <li>Products with minor imperfections that do not affect overall functionality or appearance.</li>
            <li>Products that match the approved design but fail to meet subjective preferences.</li>
            <li>Damage caused after delivery due to improper handling or external factors.</li>
            <li>Customized products where design errors occurred due to incorrect information provided by the customer.</li>
          </ul>
        </div>

        {/* Exchange Request Process */}
        <div>
          <h3 className="text-lg font-semibold text-black mb-2">Exchange Request Process</h3>
          <p>Follow these simple steps to request an exchange:</p>
          <ol className="list-decimal list-inside ml-4 space-y-2">
            <li>
              <strong>Notify Us:</strong> Contact us within 24 hours of receiving the product via:
              <ul className="list-disc list-inside ml-6">
                <li><strong>Email:</strong> customer.support@dpmsign.com</li>
                <li><strong>Phone/WhatsApp:</strong> +880 1958253962</li>
              </ul>
            </li>
            <li>
              <strong>Provide Supporting Evidence:</strong> Share the following details:
              <ul className="list-disc list-inside ml-6">
                <li>Order ID or Invoice Number.</li>
                <li>Photos or videos clearly showing the defect or mismatch.</li>
              </ul>
            </li>
            <li>
              <strong>Assessment and Approval:</strong>
              <ul className="list-disc list-inside ml-6">
                <li>Our quality control team will review the request within 3 business days.</li>
                <li>If the issue is confirmed, we will approve the exchange and provide next steps.</li>
              </ul>
            </li>
            <li>
              <strong>Product Collection/Return:</strong>
              <p className="ml-4">You may need to send back the product to our workshop at: Vojjo Teler Goli, Near Bata Signal More, Elephant Road, Dhaka-1205.</p>
              <p className="ml-4">Dhaka Plastic & Metal does not cover return shipping costs. These must be borne by the customer.</p>
            </li>
            <li>
              <strong>Replacement Process:</strong>
              <p className="ml-4">Once the returned product is received and reviewed, we will produce the replacement product and deliver it within the agreed timeline.</p>
              <p className="ml-4">No additional charges will apply for eligible exchanges.</p>
            </li>
          </ol>
        </div>

        {/* Exchange Timeline */}
        <div>
          <h3 className="text-lg font-semibold text-black mb-2">Exchange Timeline</h3>
          <ul className="list-disc list-inside ml-4">
            <li>Exchange requests are reviewed within 3 business days.</li>
            <li>Replacements are typically produced and delivered within 7-15 business days (subject to production complexity and order volume).</li>
          </ul>
        </div>

        {/* Design Approval Disclaimer */}
        <div>
          <h3 className="text-lg font-semibold text-black mb-2">Design Approval Disclaimer</h3>
          <ul className="list-disc list-inside ml-4">
            <li>All customized products are produced based on the final approved design shared by the customer.</li>
            <li>We recommend carefully reviewing the design, dimensions, text, and specifications before approval.</li>
            <li>Dhaka Plastic & Metal is not liable for errors overlooked during the approval process.</li>
          </ul>
        </div>
      </div>

      {/* Contact */}
      <div className="w-11/12 mx-auto mt-8">
        <h3 className="text-xl font-bold mb-2">Still Have Questions?</h3>
        <p className="mb-3 text-sm md:text-base">
          Our support team is here to help with any concerns regarding your order, returns, or refunds.
        </p>
        <h4 className="text-lg font-bold mb-1">Contact Information:</h4>
        <p><span className="font-bold">Email:</span> customer.support@dpmsign.com</p>
        <p><span className="font-bold">Phone / WhatsApp:</span> +880 1958253962</p>
        <p><span className="font-bold">Head Office:</span> Shop-94, Dhaka University Market, Katabon Road, Dhaka-1000</p>
      </div>
    </div>
  );
}
