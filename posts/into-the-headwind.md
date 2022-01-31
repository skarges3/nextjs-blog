---
title: 'Into the Headwind'
date: '2022-02-01'
excerpt: "How to stay sane with Tailwind Class Soup, especially if you're working on a team."
---

As [mentioned before,](/posts/not-another-tailwind-post), I really like Tailwind CSS.

One of the downsides that I have encountered is the class soup that can occur. For example:

`<div class="relative after:absolute after:left-0 after:bottom-0 after:w-full after:content-[''] after:bg-black after:h-px after:scale-x-0 hover:after:scale-x-50 after:transition-transform"></div>`

There really is no way around this type of thing if you want to use Tailwind. Again, I think it's still worth it but one small way to mitigate this is to enforce some rules for the order of the class names.

The tool for this job is a VS Code Extension called [Headwind](https://github.com/heybourn/headwind).

It works by re-ordering your classes on save according to a preset order (which is configurable).

It will also remove duplicates!

Thanks to the Headwind team for this little tool. <3