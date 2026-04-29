import { removeFalsyValuesFromArray } from "@/array";

const splitStringAndRemoveEmptySegments = (
  sourceString: string,
  separator: string,
): string[] => removeFalsyValuesFromArray(sourceString.split(separator));

export { splitStringAndRemoveEmptySegments };
