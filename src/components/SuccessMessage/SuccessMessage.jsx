import React from "react";

export default function SuccessMessage({ status }) {
  return (
    <section className="successMessgaeContainer">
      <div className="successMessage">
        <div class="success-message">
          <svg viewBox="0 0 76 76" class="success-message__icon icon-checkmark">
            <circle cx="38" cy="38" r="36" />
            <path
              fill="none"
              stroke="#FFFFFF"
              stroke-width="5"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              d="M17.7,40.9l10.9,10.9l28.7-28.7"
            />
          </svg>
          <h1 class="success-message__title">Registration Success</h1>
          <div class="success-message__content">
            <p>We will respond in approximately 24 to 48 hours</p>
          </div>
        </div>
        <div className="success-close-btn">
            <span onClick={()=>status(false)}><i class="fa-solid fa-xmark"></i></span>
        </div>
      </div>
    </section>
  );
}
