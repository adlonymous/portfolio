import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer>
      <div className="flex flex-col justify-center items-center p-4 bg-transparent">
        <p className="text-black dark:text-white text-m bg-slate-100 dark:bg-slate-900 p-4 rounded-xl">
          Made with 💙 by Aadil © 2024
        </p>
      </div>
    </footer>
  );
};

export default Footer;
