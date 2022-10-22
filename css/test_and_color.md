
## Test and Color

From CSS Version 3, there are five main ways to reference a color.

* By RGB value,
* By RGBA value,
* By HSL value,
* By hex value and
* By predefined color names.


## RGB

```css
p {
    color: rgb(255, 0, 0);
}
```

## RGBA value

RGBA is an extension of RGB that add an alpha (A) channel. The alpha channel represents the opacity, or transparency, of the color.

```css
p {
    color: rgba(255, 0, 0, 128);
}
```

## HSL value

HSL is a newer color model defined as Hue (H), Saturation (S) and Lightness (L). The aim of the model is to simplify mental visualization of the color that the value represents.

```css
p {
    color: hsl(0, 100%, 50%);
}
```

## Hex value

Decimal is what you use every day. Digits range from 0 to 9 before tens and hundreds are used.

Hexadecimal is similar, except it has 16 digits. This is counted as 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F.

In fact, you can convert between decimal and hexadecimal. Decimal 10 is equal to hexadecimal A. Hexadecimal F is equal to decimal 15.

Hexadecimal can also go to tens and hundreds. For example, decimal 16 is equal to hexadecimal 10, with 10 being the next number after F.

It can be a little confusing at first but don't worry, there are plenty of converters available if you get stuck.

Colors specified using hexadecimal are prefixed with a # symbol followed by the RGB value in hexadecimal format.

For example, the color red which is RGB 255,0,0 would be written as hexadecimal `#FF0000`.


## Predefined color names

```
black
silver
gray
white
maroon
red
purple
fuchsia
green
lime
olive
yellow
navy
blue
teal
aqua
```

# Text

With CSS there are many ways to change how text is displayed. In this section, you'll learn the most common text manipulation CSS properties.

## Text Color

The color property sets the color of text. The following CSS sets the text color for all paragraph elements to red.

```css
p {
    color: red;
    font-size: medium;
}
```

## Text Font and Size

```css
p {
  font-family: "Courier New", monospace;
  font-size: 20px;
}​
```

## Text Transform

```css
p {
    text-transform: uppercase;
}
```

## Text Decoration

The text-decoration property is useful to apply additional decoration to text such as underlining and line-through (strikethrough).

```css
p {
    text-decoration: underline green solid 3px;
}
```

If this is confusing, don't worry. These properties can be individually set using the text-decoration-line, text-decoration-color, text-decoration-style and text-decoration-thickness properties. Let's use the same example again and define it using the individual properties:

```css
p { 
  text-decoration-line: underline;
  text-decoration-color: red;
  text-decoration-style: solid;
  text-decoration-thickness: 5px;
}​
```

The most common text-decoration-line values used are: `underline, overline, line-through and none`. None is the default value to use no text decoration.

