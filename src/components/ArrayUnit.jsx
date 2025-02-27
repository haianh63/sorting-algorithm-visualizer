import { motion } from "motion/react";
import {
  WIDTH,
  COLOR,
  MAX_HEIGHT,
  MIN_HEIGHT,
  MAX_VALUE,
} from "../utils/constant";
import classes from "./Array.module.css";

export default function ArrayUnit({ value, xCoordinate, yCoordinate, status }) {
  const HEIGHT = MIN_HEIGHT + Math.floor((value / MAX_VALUE) * MAX_HEIGHT);
  return (
    <>
      <motion.div
        className={classes.arrayUnit + " rounded-md"}
        style={{
          width: WIDTH,
          backgroundColor: COLOR[status],
        }}
        animate={{
          height: HEIGHT,
          left: xCoordinate,
          bottom: yCoordinate,
        }}
      >
        <p className={classes.arrayUnitValue}>{value}</p>
      </motion.div>
    </>
  );
}
