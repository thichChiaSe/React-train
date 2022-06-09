import React from "react";

const ytbItems = (props) => {
  return (
    <div className="youtube-item">
      <div className="youtube-image">
        <img src="{props.imgage}" alt="" />
      </div>{" "}
      <div className="youtube-footer">
        <img src="" alt="" className="youtube-avatar" />
        <div className="youtube-info">
          <h3 className="youtube-title"> Learn react </h3>{" "}
          <h4 className="youtube-author"> Noob </h4>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};
export default ytbItems;
