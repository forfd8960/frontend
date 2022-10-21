
## Different types of selector

* select HTML elements based on their element type.

```html
<p>Once upon a time...</p>
<p>In a hidden land...</p>
```

```css
p {
    color: blue;
}
```

* ID Selector, The ID selector uses the id attribute of an HTML element

```html
​<span id="latest">New!</span>
```

```css
#latest {
    background-color: purple;
}
```

* Class Selector; Elements can also be selected based on the class attribute applied to them

```html
<p class="navigation"> Go Forward </p>
```

```css
.navigation {
    margin: 2px;
}
```

* Element with Class Selector

```html
<p class="introduction"></p>
```

```css
p.introduction {
    color: green;
}
```


* Descendant Selectors

```html
<div id="blog">
  <h1>Latest News</h1>
  <div>
    <h1>Today's Weather</h1>
    <p>The weather will be sunny</p>
  </div>
  <p>Subscribe for more news</p>
</div>
<div>
  <h1>Archives</h1>
</div>
```

```css
#blog h1 {
    color: blue;
}
```

* Child Selectors: They only select elements that are immediate descendants (children) of a selector (the parent).

```html
<div id="blog">
  <h1>Latest News</h1>
  <div>
    <h1>Today's Weather</h1>
    <p>The weather will be sunny</p>
  </div>
  <p>Subscribe for more news</p>
</div>
```

```css
#blog > h1 {
    color: blue;
}
```