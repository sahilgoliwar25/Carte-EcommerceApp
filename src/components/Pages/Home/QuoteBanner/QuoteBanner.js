import React from "react";
import "../Home.css";
import { FcShipped, FcMoneyTransfer, FcOnlineSupport } from "react-icons/fc";

const QuoteBanner = () => {
  return (
    <div>
      <div className="quoteBanner"></div>
      <div className="companyPolicyInfo">
        <div className="companyInfo">
          <div className="companyInfoIcon">
            <FcShipped />
          </div>
          <div className="companyInfoHead">Free Shipping</div>
          <div className="companyInfoText">
            We Provide Free Shipping Worldwide. No extra charges!!!
          </div>
        </div>
        <div className="companyInfo">
          <div className="companyInfoIcon">
            <FcMoneyTransfer />
          </div>
          <div className="companyInfoHead">100% Refund</div>
          <div className="companyInfoText">
            If the customer is not satisfied with the product we provide Full
            Refund.
          </div>
        </div>
        <div className="companyInfo">
          <div className="companyInfoIcon">
            <FcOnlineSupport />
          </div>
          <div className="companyInfoHead">Support 24/7</div>
          <div className="companyInfoText">
            Our Support team is available Day and Night just for you.
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteBanner;
