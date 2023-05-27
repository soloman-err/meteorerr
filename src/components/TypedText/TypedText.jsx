import React from "react";
import Typed from "typed.js";

const TypedText = () => {
  const elm = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(elm.current, {
      loop: true,
      strings: ["Beyond", "Boundaries", "Beings"],
      typeSpeed: 90,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="text-center flex items-center">
      <div className="flex h-1 w-full bg-black"></div>
      <span
        className="text-xl md:text-5xl lg:text-9xl font-bold"
        ref={elm}
      ></span>
      <div className="flex h-1 w-full bg-black"></div>
    </div>
  );
};

export default TypedText;
