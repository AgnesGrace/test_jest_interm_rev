export type stringInfo = {
  lowerCase: string;
  upperCase: string;
  length: number;
  characters: string[];
  extraInfo: Object | undefined;
};

export class StringUtils {
  public toUpperCase(arg: string) {
    if (!arg) {
      throw new Error('Invalid argument!');
    }
    return arg.toUpperCase();
  }
}
export function stringToUpperCase(arg: string) {
  return arg.toUpperCase();
}
export function getStringInfo(arg: string): stringInfo {
  return {
    lowerCase: arg.toLowerCase(),
    upperCase: arg.toUpperCase(),
    length: arg.length,
    characters: Array.from(arg),
    extraInfo: {},
  };
}
