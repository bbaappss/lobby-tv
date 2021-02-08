# Utilities

There are several utility mixins available within Mimogear for use in production. These were included based on their frequent use and value regardless of the project.

* `visually-hidden`: hide an element from sighted users
* `reset-visually-hidden`: un-hide an element previously hidden
* `clearfix`: clear a parent containing floats
* `compartment`: creates a centered column given a particular width
* `cover`: completely overlaps an element onto a container
* `font-face`: imports various font files
* `list-reset`: resets default browser styles of lists
* `media`: calls a min-width media query
* `enlarged-media`: calls a min-width and min-height media query

## Accessibility

There are two accessibility mixins both of which refer to visually hiding and unhiding elements from the page. By visually hiding an element, it will be rendered visible only to screen readers. An example of using both in tandem can be found on the skip link included by default into Mimogear. The following example visually hides the map-label and is then reset on focus.

**Sass**

```sass
.map-label {
  @include visually-hidden;

  &:focus {
    @include reset-visually-hidden;
  }
}
```

**CSS Output**

```css
.map-label {
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  height: 1px;
  width: 1px;
}

.map-label:focus {
  position: relative;
  clip: auto;
  height: auto;
  width: auto;
}
```

## Clearfix

The clearfix mixin prevents the collapse of any containers that have floated elements within them. The mimo grid uses the clearfix mixin as a fallback for floated columns. When using the clearfix mixin, make sure the mixin is declared within the after psuedo selector.

**Sass**

```sass
.profile {

  &:after {
    @include clearfix;
  }
}
```

**CSS Output**

```css
.profile:after {
  display: table;
  clear: both;
  content: '';
}
```

## Compartment

The compartment mixin ensures that a container will be horizontally centered and never exceed the maximum width specified. The compartment class, which makes use of the compartment mixin, is available within the sections partial. By default, the max-width parameter is the value of the site-boundary specified within configuration.js.

**Sass**

```sass
.testimonial-section {
  @include compartment(800);
}
```

**CSS Output**

```css
.testimonial-section {
  max-width: 50rem;
  margin-right: auto;
  margin-left: auto;
}
```

## Cover

The cover mixin is used to blanket an element on top of another element. Since position: relative is on every element by default, a cover will never flow outside its parent.

**Sass**

```sass
.mask {
  @include cover;
}
```

**CSS Output**

```css
.mask {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}
```

## Font Face

The font-face mixin helps include local font files into your project. To call a font file, make sure it is placed within dist/fonts/. There are 2 key parameters and 2 additional yet optional parameters.

1. Font name: _Required_, the name you'd like to use to reference the font in css
2. File name: _Required_, the file name of the font, make sure all formats have the same name
3. Font style: _Optional_, the style of the font, normal, italics, etc.
4. Font weight: _Optional_, the numbered weight of the font

**Sass**

```sass
@include font-face(Aktiv, Aktiv-Light, normal, 300);
```

**CSS Output**

```css
@font-face {
  font-family: 'Aktiv';
  font-style: normal;
  font-weight: 300;
  src:
    url('../fonts/Aktiv-Light.eot') format('eot'),
    url('../fonts/Aktiv-Light.woff') format('woff'),
    url('../fonts/Aktiv-Light.ttf') format('truetype'),
    url('../fonts/Aktiv-Light.svg#Aktiv-Light') format('svg');
}
```

## List Reset

The list-reset mixin is available to help reset the default browser styles of lists. The following example assumes the class of sorted-cards is either an ol or ul element.

**Sass**

```sass
.sorted-cards {
  @include list-reset;
}
```

**CSS Output**

```CSS
.sorted-cards {
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
  list-style: none;
}
```
