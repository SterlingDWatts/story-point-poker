type UnknownObj = { [s: string]: unknown };

export function createOptionalAttributes(optionalAttributes: UnknownObj): UnknownObj {
  for (const [key, value] of Object.entries(optionalAttributes)) {
    if (key === "handleClick") {
      delete optionalAttributes[key];
      optionalAttributes["onClick"] = value;
    } else if (key.match(/[A-Z]/g)) {
      delete optionalAttributes[key];
      const newKey = key.replace(/[A-Z]/g, "-$&").toLowerCase();
      optionalAttributes[newKey] = value;
    }
  }
  return optionalAttributes;
}
