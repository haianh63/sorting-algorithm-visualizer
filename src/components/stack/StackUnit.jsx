import { motion } from "motion/react";
const WIDE = 80;
const COLOR = "#F9C0AB";
const BORDER_COLOR = "white";
const MAX_SIZE = 7;
export default function StackUnit({
  value,
  xCoordinate,
  yCoordinate,
  isAnimate,
}) {
  return (
    <motion.div
      initial={
        isAnimate
          ? {
              bottom: WIDE * MAX_SIZE,
            }
          : false
      }
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: "bold",
        fontSize: "20px",
        width: WIDE,
        height: WIDE,
        backgroundColor: COLOR,
        position: "absolute",
        borderTop: `solid 2px ${BORDER_COLOR}`,
        boxSizing: "border-box",
      }}
      animate={{
        bottom: yCoordinate,
        left: xCoordinate,
        transition: { duration: 0.5 },
      }}
    >
      {value}
    </motion.div>
  );
}
