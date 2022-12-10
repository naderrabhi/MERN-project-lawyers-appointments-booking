import React from "react";

const WebsiteExplainCard = ({card}) => {
  return (
    <div className="websiteexplain--content_card">
      <div className="websiteexplain--card_header"><img src={card.image} alt="" /></div>
      <div className="websiteexplain--card_body">
      <p className="websiteexplain--card_d">{card.description}</p>
      <p className="websiteexplain--card_i">{card._id}.{card.icon}</p>
      </div>
    </div>
  );
};

export default WebsiteExplainCard;
