import React from "react";

export const Button = ({ heading, leftIcon, rightIcon, style }) => {
  return (
    <div>
      <p className="mb-3"> {heading} </p>
      <button
        type="button"
        className={`py-2 px-5 rounded-lg font-medium drop-shadow-md ${style}`}
      >
        {leftIcon} Default {rightIcon}
      </button>
    </div>
  );
};

export const NoShadowButton = ({ heading, style, disabled }) => {
  return (
    <div>
      <p className="mb-3">{heading}</p>
      <button
        type="button"
        disabled={disabled}
        className={`py-2 px-5 border-2 rounded-lg font-medium ${style} `}
      >
        Default
      </button>
    </div>
  );
};
