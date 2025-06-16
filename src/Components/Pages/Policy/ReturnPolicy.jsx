import React from 'react'
import { Link } from 'react-router-dom'

export default function ReturnPolicy() {
  return (
    <div className='my-20'>
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold">
          Return Policy
        </h2>
        <p className="text-sm text-gray-600 font-semibold mt-2 w-8/12 mx-auto">
          At Dhaka Plastic & Metal, we are committed to delivering high-quality products and ensuring customer satisfaction. We strive for perfection in every product we deliver. While we do not offer refunds or returns, we are committed to providing a replacement for eligible issues as outlined below
        </p>
        <hr
          className="h-1 w-3/12 md:w-1/12 bg-[#45B6E7] mx-auto mt-3 rounded"
          style={{ height: "6px" }}
        />
      </div>
      <div className='bg-[#f9fbfd] w-11/12 mx-auto p-8 rounded border-2 border-gray-300 space-y-10'>
       <div>
         <p>Dhaka Plastic & Metal, we value every customer relationship and strive to deliver customized signage, award crests, and promotional or corporate gift items that exceed expectations. Since all our products are made-to-order, we follow a specific Return & Refund Policy to ensure clarity, fairness, and your peace of mind.</p>

        <p>This policy outlines the circumstances under which returns and refunds are processed, and how they are linked to our <Link to='/exchangepolicy'>Exchange Policy.</Link></p>
       </div>
       <div>
        <h2 className="font-bold text-xl">Return Policy</h2>
        <p>Due to the customized nature of our products, we do not accept general returns. However, we do accept returns under the following condition:
            <br />
            <br />
            <span className='font-bold'>Return is only applicable if your product qualifies for an exchange under <Link className='text-blue-600 underline' to='/exchangepolicy'>our Exchange Policy</Link>.

</span> <br />
This includes instances such as major manufacturing defects or clear mismatches with the approved design.
<br />
            <br />
We encourage all customers to thoroughly review our <Link className='text-blue-600 font-bold underline' to='/exchangepolicy'>our Exchange Policy</Link> to understand eligibility for returns and replacements.
        </p>

       </div>
{/* refund policy */}
<div className='space-y-6'>
    <h2  className="font-bold text-xl">Refund Policy</h2>
    <p>We understand that circumstances can change. That’s why we offer a flexible and transparent refund process based on the stage of your order:</p>
    <h3 className='font-bold'>Full Refund</h3><p>You are entitled to a <span className="font-bold">full refund</span> of your initial payment if:</p>
    <ul>
        <li>•	You cancel your order before the design approval is finalized.</li>
        <li>•	The production process has not yet started.</li>
    </ul>
</div>

{/* partial refund */}

<div className="space-y-6">
    <h2 className="font-bold">Partial Refund</h2>
    <p>
        If you cancel your order <span className="font-bold">after approving the final design</span> but <span className="font-bold">efore production begins</span>, we will deduct a <span className="font-bold">design fee</span> and refund the rest.
    </p>
    <ul>
        <li>•	The design service charge ranges between BDT 200 to BDT 5,000, based on design complexity and order volume.

</li>
        <li>•	The remaining balance will be refunded to your original payment method.</li>
    </ul>
</div>
{/* No Refund */}

<div className="space-y-6">
    <h2 className="font-bold">No Refund</h2>
    <p>
        Refunds are <span className="font-bold">not applicable</span> in the following cases:
        
    </p>
    <ul>
        <li>•	Once production has started, cancellations are no longer accepted.

</li>
        <li>•	The product matches the approved design, but does not meet personal preferences or expectations.</li>
        <li>•	The product was damaged after delivery due to mishandling or external factors.</li>
        <li>•	Errors occurred due to incorrect information provided during the order process.</li>
    </ul>
    <p>If you are dissatisfied with the delivered product, we do not offer refunds—but we do provide replacements under the terms outlined in our <Link className='text-blue-600 font-bold underline' to='/exchangepolicy'>our Exchange Policy</Link>.</p>
</div>
{/* Refund Timeline and Method */}

<div className="space-y-6">
    <h2 className="font-bold text--xl">Refund Timeline and Method</h2>
    <p>
       Once approved, refunds are processed within <span className="font-bold">3 to 5 business days.</span> <br />
Refunds will be issued to the same payment method used for the original transaction, including:

    </p>
    <ul>
        <li>•	Bank transfer

</li>
        <li>•	bKash</li>
        <li>•	Other approved payment channels</li>
    </ul>
</div>

{/* Design Approval Responsibility */}
<div>
    <h2 className="font-bold text-xl">
        Design Approval Responsibility
    </h2>
    <p>All products are manufactured strictly according to the design approved by you before production.
We encourage you to carefully review all design elements, dimensions, colors, spelling, and layout—before final approval. Dhaka Plastic & Metal is not liable for any errors overlooked during this stage.
</p>
</div>

{/* Cancellation Policy*/}

<div className="space-y-6">
    <h2 className="font-bold">Cancellation Policy</h2>
   
    <ul>
        <li>•	Orders can be canceled only before production starts.

</li>
        <li>•	Cancellations are not accepted once production has begun due to the customized nature of our products.</li>
        
    </ul>

     <p>
       We believe in transparency, fairness, and customer satisfaction. Please read our <Link className='text-blue-600 font-bold underline' to='/exchangepolicy'>our Exchange Policy</Link> for complete details on replacements and eligibility conditions.

    </p>
</div>

      </div>


      <div className='w-11/12 mx-auto'>
        <h3 className='text-xl font-bold mt-4'>Still Have Questions?</h3>
<p className='mb-3'>Our support team is here to help with any concerns regarding your order, returns, or refunds.</p>
<h3><span className='text-lg font-bold'>Contact Information:</span></h3>
<p><span className='font-bold'>Email:</span> customer.support@dpmsign.com</p>
<p><span className='font-bold'>Phone / WhatsApp:</span>  +880 1958253962</p>
<p><span className='font-bold'>Head Office:</span> Shop-94, Dhaka University Market, Katabon Road, Dhaka-1000</p>



 

      </div>
    </div>
  )
}
