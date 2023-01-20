import { MASKS } from "./masks";

const getMask = (key) => {
  const maskIndex = Math.floor(Math.random() * MASKS.length);
  const maskSvg = (
    <svg width="0" height="0">
      <clipPath id={key} clipPathUnits="objectBoundingBox">
        {MASKS[maskIndex]}
      </clipPath>
    </svg>
  );

  return maskSvg;
};

export default getMask;
