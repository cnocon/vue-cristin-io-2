---
title: What is Destructuring in JavaScript?
summary: There are several ways to think about what destructuring is. One is in terms of assignment, the other in terms of parameters. Both perform the basic function of getting rid of repetitive code. First we'll talk about assignment, then parameters.
date: 2020-06-21T13:28:00Z
img: destructuring.png
alt: JS
categories: [{name: JavaScript, slug: 'javascript'}, {name: ES6, slug: 'es6'}]
---


<p class="drop-cap">In a work meeting the other day, one of my colleagues asked a great question, "What is destructuring?"</p>

At the time I couldn't think of an eloquent answer, so I just stayed quiet and let someone else field the question. Their explanation was good, but probably too succinct for a real beginner.

## Assignment

Wes Bos lays out a great explanation of how destructuring is used and how it is advantageous in terms of assignment.<sup>1</sup> The below examples are variants of his original examples, edited to be a little more clear.

```js
const person = {
  first: 'Wes',
  last: 'Bos'
};

const first = person.first;
const last = person.last;
```

It's dirtily repetitive to have to reference the person object each time you want to use one of its properties. With destructuring assignment, you can instead do something like this:

```js
const person = {
  first: 'Wes',
  last: 'Bos'
};

const { first, last } = person;

console.log(first); // Wes
console.log(last); // Bos
```

Isn't that cool? What is a little confusing is that you're probably used to curly braces representing an object literal. Just remember, when they're on the left side of the equals sign, it's destructuring assignment, not an object literal.

Note that you don't have to destructure every property in the object, just the ones you need. Say we only wanted to use <code>person.first</code>:

```js
const person = {
  first: 'Wes',
  last: 'Bos'
}
const { first } = person;

console.log(first) // Wes
```

You can also do this with arrays. The syntax is identical, except you sub the curly braces for brackets, and you can use whatever variable names you want for the destructured items.<sup>2</sup>

```js
[a, b] = [10, 20];

console.log(a); // 10
console.log(b); // 20
```

## Destructuring Parameters

Destructuring parameters, in my opinion, is one of the best uses of destructuring. Just like you wrapped the items to the left of the equals sign in brackets or braces, you can wrap parameters that are arrays and objects respectively and access the destructured items.

The below example deals with an object

```js
const people = {
  sister: {
    name: "Cristin O'Connor",
    age: 32
  },
  brother: {
    name: "James O'Connor",
    age: 29
  }
};

// Destructure the sister object
const printName = ({ name }) => {
  console.log(name);
}

// Destructure the age object
const printAge = ({ age }) => {
  console.log(age);
}

printName(people.sister); // "Cristin O'Connor
printAge(people.brother); // 29
```

You can do the same with arrays:

```js
const cities = ["Portland", "Los Angeles", "Detroit"];

const printFirstCity = ([first]) => {
  document.querySelector('h1').innerHTML = first;
}

printFirstCity(cities); // Portland
```

If you work at all in React, you'll probably see a ton of destructured parameters, so hopefully this post helps shed light on what's going on. Thanks for reading!

#### Sources

1. Wes Bos. "A Dead Simple Intro to Destructuring JavaScript Objects." Wes Bos.  https://wesbos.com/destructuring-objects. 06/21/2020.
2. Actually, you can always use whatever variable names you want.
3. Wes Bos. "Destructure and Rename Variables." Wes Bos. https://wesbos.com/destructuring-renaming/. 06/21/2020.

