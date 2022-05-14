---
title: 'Metabulk: A Shopify Metafields Bulk Edit Link Generator'
date: '2022-05-14'
excerpt: 'Trying to make my life easier by building my own tools.'
---

My day job revolves around Shopify, the ecommerce behemoth that [some people think](https://twitter.com/michaelbatnick/status/1524481965897957376?s=21&t=qz_kEQsbNRlIwjOhewM0_A) is the weather vane of the post-COVID economy.

But I am nor a mover, nor a shaker, so my concern is less with its macroeconomic effects and more with the platform itself. Sometimes this means tedious things like "how do I update every product's subtitle at once so I don't have to spend all day clicking around?".

If you have every managed or worked on a Shopify store, you are probably familiar with how cumbersome if can be to edit metafields in a bulk way without an app.

I prefer to not use an app for metafields, and instead go with Shopify's [increasingly robust native metafields](https://changelog.shopify.com/posts/metafield-improvements-metafield-lists). They are great, but Shopify currently makes it a hassle to edit these field values in bulk.

Enter [Metabulk](https://metabulk.karges.org), a simple little app that helps you create a link that you can plop into a browser and see multiple metafields as columns, and all your objects (read products or collections) as rows.

In addition to [trying to learn in public](/posts/hello-world), I'm also trying to adopt the mindset of building my own tools if I can't find a good alternative.

It's super basic, and I would love for Shopify to make this obsolete, but for now I have found it very useful. I built it with my favorite stack: [Tailwind CSS](/posts/not-another-tailwind-post) + Alpine JS. [LOB](https://htmx.org/essays/locality-of-behaviour?ref=karges) FTW.

Check it out and let me know if it helps you!

[View the project here.](https://metabulk.karges.org)