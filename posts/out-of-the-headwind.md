---
title: 'Out of the Headwind'
date: '2022-02-12'
excerpt: "The Tailwind team was on it, and I just didn't notice."
---

Following up on [a recent post about Headwind](/posts/into-the-headwind): some new developments in this space.

God bless RSS is all I have to say. If it weren't for that reliable feed, I would not have noticed that the Tailwind team posted this great update on [Automatic Class Sorting with Prettier](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier). Their post predates my post on Headwind :)

## The Good
The advantages over Headwind are pretty obvious, I think:
- Integration with a larger ecosystem
- Support from the official Tailwind team
- Most importantly: a uniform class order across the web

The first two there are pretty obvious, but I think this last one has the potential to help the Tailwind ecosystem really mature. For example, when I use Tailwind on a project and invite another developer into it, I can definitely add a `.vscode` folder to the repo with Headwind as a recommendation in `extensions.json`:

```json
// .vscode/extensions.json
{
  "recommendations": [
    "heybourn.headwind"
  ]
}
```

And then in `settings.json`:

```json
// .vscode/settings.json
{
  // ...other stuff...
  // These settings help standardize Headwind.
  "headwind.prependCustomClasses": true,
  "headwind.runOnSave": true
}
```

Whereas the set-up requires VSCode and some non-standard settings, the Prettier version, as Adam and Jonathan put it:

> ...works seamlessly with custom Tailwind configurations, and because it’s just a Prettier plugin, it works anywhere Prettier works — including every popular editor and IDE, and of course on the command line.

🎉 Thanks Tailwind team!

## The Not-as-Good-Yet

This is new, so there are plenty of kinks to work out. The main issue I'm experiencing at the moment is [incompatibility with other Prettier plugins](https://github.com/tailwindlabs/prettier-plugin-tailwindcss/issues/31), specifically the `prettier-plugin-twig-melody` plugin since I'm working on a Twig-based project. I'm sure that'll be patched up soon, but just something to keep in mind before you make the switch.

Really excited about making this part of using Tailwind smoother and more consistent.