import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer>
      <div className="flex flex-col justify-center items-center p-4 bg-transparent">
        <p className="text-black dark:text-white text-m">
          Made with 💙 by adlonymous © 2024
        </p>
      </div>
    </footer>
  );
};

export default Footer;
