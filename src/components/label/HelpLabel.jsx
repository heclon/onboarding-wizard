import React from "react";

export const HelpLabel = () => (
  <div className="text-blue-500">
    <a
      className="font-bold"
      href="https://connexian.zendesk.com/hc/en-us"
      target="_blank"
    >
      Need help <i className="pi pi-question-circle" />
    </a>
    <div className="font-light">
      Check out the{` `}
      <a
        className="font-semibold underline"
        href="https://connexian.zendesk.com/hc/en-us"
        target="_blank"
      >
        help centre
      </a>
      {` `}for more information.
    </div>
  </div>
);
