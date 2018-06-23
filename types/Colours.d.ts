export interface IColourStyle {
    open: string;
    close: string;
    Wrap(text: string): string;
}
export declare class ColourStyle implements IColourStyle {
    protected openColour: number;
    protected closeColour: number;
    open: string;
    close: string;
    constructor(openColour: number, closeColour: number);
    static Create(colour: number): string;
    Wrap(text: string): string;
}
export declare type LegalColour = "reset" | "bold" | "dim" | "italic" | "underline" | "inverse" | "hidden" | "strikethrough" | "black" | "red" | "green" | "yellow" | "blue" | "magenta" | "cyan" | "white" | "gray" | "grey" | "bgBlack" | "bgRed" | "bgGreen" | "bgYellow" | "bgBlue" | "bgMagenta" | "bgCyan" | "bgWhite";
export interface ColourStyles {
    reset?: ColourStyle;
    bold?: ColourStyle;
    dim?: ColourStyle;
    italic?: ColourStyle;
    underline?: ColourStyle;
    inverse?: ColourStyle;
    hidden?: ColourStyle;
    strikethrough?: ColourStyle;
    black?: ColourStyle;
    red?: ColourStyle;
    green?: ColourStyle;
    yellow?: ColourStyle;
    blue?: ColourStyle;
    magenta?: ColourStyle;
    cyan?: ColourStyle;
    white?: ColourStyle;
    gray?: ColourStyle;
    grey?: ColourStyle;
    bgBlack?: ColourStyle;
    bgRed?: ColourStyle;
    bgGreen?: ColourStyle;
    bgYellow?: ColourStyle;
    bgBlue?: ColourStyle;
    bgMagenta?: ColourStyle;
    bgCyan?: ColourStyle;
    bgWhite?: ColourStyle;
    [key: string]: IColourStyle;
}
declare const wrapperFn: (text: string, colour: LegalColour) => string;
export { wrapperFn as Colours };
