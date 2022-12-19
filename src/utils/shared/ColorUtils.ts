enum Colors {
  UNDEFINED,
  BLUE_GRAY,
  COOL_GRAY,
  GRAY,
  TRUE_GRAY,
  WARM_GRAY,
  RED,
  ORANGE,
  AMBER,
  YELLOW,
  LIME,
  GREEN,
  EMERALD,
  TEAL,
  CYAN,
  LIGHT_BLUE,
  BLUE,
  INDIGO,
  VIOLET,
  PURPLE,
  FUCHSIA,
  PINK,
  ROSE,
}

export function getTailwindColor(
  itemColor: Colors,
  textWeight = 50,
  backgroundWeight = 300,
  borderWeight = 500
): string {
  let color = "gray";
  switch (itemColor) {
    case 0:
      color = "gray";
      break;
    case 1:
      color = "slate";
      break;
    case 2:
      color = "gray";
      break;
    case 3:
      color = "gray";
      break;
    case 4:
      color = "neutral";
      break;
    case 5:
      color = "stone";
      break;
    case 6:
      color = "red";
      break;
    case 7:
      color = "orange";
      break;
    case 8:
      color = "amber";
      break;
    case 9:
      color = "yellow";
      break;
    case 10:
      color = "lime";
      break;
    case 11:
      color = "green";
      break;
    case 12:
      color = "emerald";
      break;
    case 13:
      color = "teal";
      break;
    case 14:
      color = "cyan";
      break;
    case 15:
      color = "sky";
      break;
    case 16:
      color = "blue";
      break;
    case 17:
      color = "indigo";
      break;
    case 18:
      color = "violet";
      break;
    case 19:
      color = "purple";
      break;
    case 20:
      color = "pink";
      break;
    case 21:
      color = "rose";
      break;
  }
  const textColor =
    textWeight === 0 ? "text-white" : `text-${color}-${textWeight}`;
  return `${textColor} bg-${color}-${backgroundWeight} border border-${color}-${borderWeight}`;
}
