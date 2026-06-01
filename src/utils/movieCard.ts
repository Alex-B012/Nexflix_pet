const TITLE_POSITION_CLASSES: Record<number, string> = {
  0: "pb-73",
  1: "pb-65",
  2: "pb-45",
  3: "pb-25",
  4: "pt-25",
  5: "pt-40",
  6: "pt-50",
  7: "pt-60",
};

const getTitlePositionClass = (imagePos: number): string => {
  return TITLE_POSITION_CLASSES[imagePos] || "";
};

export { getTitlePositionClass };
