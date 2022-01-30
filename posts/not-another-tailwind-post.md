---
title: 'Not Another "Why I Like Tailwind" Post'
date: '2022-01-30'
---

As previously advised, don't listen to me because [I do not know what I think or what I am doing](/posts/hello-world). So for my first foray into this type of webdev writing, I'm gonna cover a modern classic: the Tailwind take.

There are already [too](https://ishadeed.com/article/on-tailwindcss/) [many](https://macarthur.me/posts/why-i-like-tailwind-css) [of](https://dev.to/jaredcwhite/why-tailwind-isn-t-for-me-5c90) [these](https://www.viget.com/articles/what-i-love-hate-about-tailwind-css/) [posts](https://highlandsolutions.com/blog/how-i-quit-worrying-and-learned-to-love-tailwindcss) (and rebuttals, and rebuttals to the rebuttals) to the point that they have become the "Anyway, here's Wonderwall" of dev articles. I'm not sure if there's a lot left to say, but this is a crowded venue and you've stopped reading already so, anyway, here's Wonderwall.

## One "framework" to rule them all?

Tailwind is fast becoming the dominant CSS "framework" (see chart below), though I think "framework" is a bit of a misnomer. I think it's really more of a *utility library*. 

Library: "Here are some tiny building blocks." *vs.* Framework: "Here are some components that you can reskin."

![A chart showing Tailwind adoption on the rise.](/posts/tailwind-chart.png)](/posts/tailwind-chart.png)

Source: https://2021.stateofcss.com/en-US/technologies/css-frameworks

The Tailwind team (or maybe just whoever wrote the copy for their new site) calls it a ["utility-first CSS framework"](https://tailwindcss.com/), but I think that's just a word-of-least-resistance.

In my mind, a "framework" is opinionated to the extent that you stop having to think about composing an interface and skip right to thinking about content and style. As an example, I would expect a framework to have a `.btn` class built in, while a utility library would force you to compose a `.btn` class or component using utility styles.

One could argue that the preselected colors, spacing units, and shadows that Tailwind creates are constrained enough to warrant using the term "framework", but with `tailwind.config.js` and the new [arbitrary values](https://tailwindcss.com/docs/adding-custom-styles#using-arbitrary-values) feature, we are sort of outside the realm of a framework and really just doing "inline styles on steroids (i.e. media queries and pseudo elements allowed) + some constraints".

## Enough about semantics

JK [semantics are really fun and important actually](https://hiddedevries.nl/en/blog/2022-01-23-more-to-give-than-just-the-div-semantics-and-how-to-get-them-right). But let's get to what I like I about Tailwind:

In short:
1. [Reducing complexity when debugging](#reducing-complexity-when-debugging)
2. [Speed of composition](#speed-of-composition)
3. [Performance](#performance)

Let's dive a little deeper:

### Reducing complexity when debugging
Let's say you've got a modal component and you can't figure out why the hell your "Close Modal" button is being obscured by some other piece of content on the page. It's probably a `z-index` thing, but you're not sure so you go hunting in some css files.

With Tailwind, there are two reasons why you might find the issue more quickly:

1. You probably don't have to open another file.

All of your classes are right there in the HTML. Sure, you may have to open another component or template, but that's the case no matter what. You are at least removing one place for the bug to hide.

2. You have a limited set of `z-` classes that could be in play.

There are only 5 (unless you use arbitrary values) `z-` classes, all with fairly low values so it should be pretty easy to search your codebase for those classes and find the conflict. No `z-index: 9999` here.

### Speed of composition
Maybe it's just me, but being able to compose my HTML and start styling in the same file means I can create layouts fluently. The feedback is more immediate and there is no file-switching to slow me down.

### Performance
This comes up in almost every article on Tailwind but it bears repeating: Tailwind when used properly will reduce the size of the CSS you ship. The main reason for this is that in a non-Tailwind project you will almost certainly write `display: flex` close to a bajillion times. That is unnecessary bloat in the size of the css (though I am sure this could be solved by some CSS-in-JS strategies or code splitting).

## Cons

Really just two here that bug me but ultimately don't deter me.

### Con #1: Ugly, long class lists
It's just simply objectively uglier to look at:

```
<section class="md:p-8 dark:bg-blue-100 dark:text-blue-100 p-4 text-blue-100 bg-blue-900"></section>
```
than:

```
<section class="section section--blue"></section>
```

And all of those classes can start to look like alphabet soup. I have recently started using the Headwind VS Code extension that helps auto sort the classes to at least make it more legible across your code.

### Con #2: The inevitable ["bailwind"](https://twitter.com/ryanflorence/status/1251589516617379840)
Behind every good Tailwind project is a sad "bailwind" file. A.k.a. a junk drawer with all the random styles that just don't fit, or classes that regenerated by a CMS (e.g. `.shopify-policy__title` to target the legal pages in a Shopify theme or a `.wp-block` class in a Wordpress theme).

The "con" here is just that this is one more place to look to debug your CSS. Let me suggest that if this file gets sufficiently big you might want to rethink using Tailwind on that project.


## Acknowledgements
I've linked to a few of these already but I want to give them credit in full:
- [A Look at Tailwind CSS]("https://ishadeed.com/article/on-tailwindcss/")