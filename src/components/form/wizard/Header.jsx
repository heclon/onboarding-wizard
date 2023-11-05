import React from "react";

export const Header = ({ title, subTitle }) => {
  return (
    <>
      {/*PAGE HEADER*/}
      <div className="col-12 grid grid-flow-col md:grid-flow-row">
        <div className="col-12 md:col-9">
          <div className="text:xl font-bold text-blue-500 md:text-3xl">
            {title}
          </div>
          <div className="text-sm text-gray-600 md:text-lg">{subTitle}</div>
        </div>
      </div>
    </>
  );
};
