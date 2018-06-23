/* 
Colours.ts

This code was Adapted from Marak Squires colors.js library <https://github.com/Marak/colors.js>
used under the conditions of the MIT license reproduced below, 
*/

/* 
MIT License

Original Library
  - Copyright (c) Marak Squires

Additional Functionality
 - Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)

Colours-TS Port and Modifications
 - Copyright (c) Liam Whan (github.com/hammus/colours-ts.git)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

export interface IColourStyle {
    open: string;
    close: string;
    Wrap(text: string): string;
}

export class ColourStyle implements IColourStyle {
    public open: string;
    public close: string;

    constructor(protected openColour: number, protected closeColour: number) {
        this.open = ColourStyle.Create(openColour);
        this.close = ColourStyle.Create(closeColour);
    }

    static Create(colour: number): string {
        return `\u001b[${colour}m`;
    }

    public Wrap(text: string): string {
        return `${this.open}${text}${this.close}`;
    }
}

export type LegalColour = "reset"|"bold"|"dim"|"italic"|"underline"|"inverse"|"hidden"|"strikethrough"|"black"|"red"|"green"|"yellow"|"blue"|"magenta"|"cyan"|"white"|"gray"|"grey"|"bgBlack"|"bgRed"|"bgGreen"|"bgYellow"|"bgBlue"|"bgMagenta"|"bgCyan"|"bgWhite";

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
interface ColourCodes {
    reset?: number[];
    bold?: number[];
    dim?: number[];
    italic?: number[];
    underline?: number[];
    inverse?: number[];
    hidden?: number[];
    strikethrough?: number[];
    black?: number[];
    red?: number[];
    green?: number[];
    yellow?: number[];
    blue?: number[];
    magenta?: number[];
    cyan?: number[];
    white?: number[];
    gray?: number[];
    grey?: number[];
    bgBlack?: number[];
    bgRed?: number[];
    bgGreen?: number[];
    bgYellow?: number[];
    bgBlue?: number[];
    bgMagenta?: number[];
    bgCyan?: number[];
    bgWhite?: number[];
    [key: string]: number[];
}
const codes: ColourCodes  = {
  reset: [0, 0],

  bold: [1, 22],
  dim: [2, 22],
  italic: [3, 23],
  underline: [4, 24],
  inverse: [7, 27],
  hidden: [8, 28],
  strikethrough: [9, 29],

  black: [30, 39],
  red: [31, 39],
  green: [32, 39],
  yellow: [33, 39],
  blue: [34, 39],
  magenta: [35, 39],
  cyan: [36, 39],
  white: [37, 39],
  gray: [90, 39],
  grey: [90, 39],

  bgBlack: [40, 49],
  bgRed: [41, 49],
  bgGreen: [42, 49],
  bgYellow: [43, 49],
  bgBlue: [44, 49],
  bgMagenta: [45, 49],
  bgCyan: [46, 49],
  bgWhite: [47, 49],

};
const styles: ColourStyles = {};

Object.keys(codes).forEach(function(key) {
  const val = codes[key];
  styles[key] = new ColourStyle(val[0], val[1]);
});

const wrapperFn = (text: string, colour: LegalColour): string => {
    return styles[colour].Wrap(text);
}

export {wrapperFn as Colours};