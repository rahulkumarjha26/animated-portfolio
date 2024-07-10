import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Cursor.scss";

export default function Cursor() {
  const [position, setPOsition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMoveHandle = (e) => {
      setPOsition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMoveHandle);

    return () => {
      window.removeEventListener("mousemove", mouseMoveHandle);
    };
  }, []);

  return (
    <motion.div
      className="cursor"
      animate={{ x: position.x + 10, y: position.y + 10 }}
    ></motion.div>
  );
}
