declare module "tailwindcss/lib/util/flattenColorPalette" {
  export function flattenColorPalette(colors: object): {
    [key: string]: string;
  };
}
