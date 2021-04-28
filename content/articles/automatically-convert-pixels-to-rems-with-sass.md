---
title: Automatically Convert Pixels to Rems with SASS
summary: SASS essentially turns CSS into a programmatic language. Suddenly we can dynamically generate everything from comprehensive utility class names and styles to entire grid layouts.  In this post we'll take advantage of SASS functions to convert pixels to rems without all the ugly math.
date: 2020-06-10T00:48:00Z
img: sass.png
alt: SASS Logo
categories: [{name: Accessibility, slug: accessibility}, {name: SCSS, slug: scss}]
---


<p class="drop-cap">According to <a href="https://insights.stackoverflow.com/survey/2020#technology-most-loved-dreaded-and-wanted-languages-loved" target="_blank" rel="noopener noreferrer">Stack Overflow's 2020 Developer Survey</a>, developers have a tendency to dread CSS. I couldn't disagree more! SASS is amazing; It basically turns CSS into a programmatic language. Suddenly we can dynamically generate everything from comprehensive utility class names and styles to entire grid layouts. We can take advantage of some of Sass's features like functions and mixins for creating entire grid layouts and comprehensive utility classes.  But today we'll focus on the smaller example of converting pixels into rems to help ease into SASS.</p>

According to the <a href="http://www.w3.org/TR/2013/CR-css3-values-20130730/#font-relative-lengths" target="_blank" rel="noopener noreferrer">W3C spec</a> the definition for one rem unit is:

<quote>
  <template #quote>One rem is equal to the computed value of the font-size on the root element. When specified on the font-size property of the root element, the rem units refer to the property’s initial value.</template>
</quote>

This means that `1rem` equals the font size of the `html` element (which for most browsers has a default value of 16px). If you wanted to convert subsequent sizes to rems, you'd have to divide the pixel value by the base size of 16, which isn't easy to do in your head, if you're like me.

Enter SASS! We can create a function to generate the rem value for us.

```scss
$base-font-size: 16px;

@function calculate-rem($size) {
  $rem-size: $size / $base-font-size;

  @return #{$rem-size}rem;
}

h3 {
  font-size: calculate-rem(120px);
}
```

In the above code snippet, we set our base font size in a variable for clarity. We also defined a function that takes whatever pixel size we pass it and returns that value in rems.

You can see how to use a function by looking at the `h3` style declaration. We call the function where we'd normally declare a static value.

When this compiles, the value will be in rems!


