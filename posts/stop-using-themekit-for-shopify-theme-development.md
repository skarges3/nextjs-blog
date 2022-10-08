---
title: 'Stop Using Themekit for Shopify Theme Development'
---

# Stop Using Themekit for Shopify Theme Development

Having worked with Shopify for the past 5 or 6 years, I can confidently say that things are changing at a faster pace than ever.

The sheer number of releases and updates from the Shopify team have been hard to keep up with, even for someone who subscribes to their changelog via RSS.

So I say the following with no judgment: you should really try and keep up. Yes, there is a cost to changing your ways, but there is also a cost to sticking with them. 

A glaring example of this is Shopify Themekit vs Shopify CLI. Both tools are ostensibly for developers to be able to work with hosted themes from their local machine via Command Line, but the newer tool solves many problems that developers might not even know they have.

## Why Themekit Persists

Since the release of Shopify CLI 2.0 (which allows for theme development) in June 2021, there has been a slow adoption of it in place of Themekit. Partially, I think this slow adoption is just inertia and things will eventually change in time. But one headwind against change is the sheer amount of shovel-blog writing on "How to use Themekit to build Shopify Themes" style posts and YouTube tutorials. They are everywhere, and when people Google for advice they are more likely — even today — to come across a Themekit-based solution.

Oddly enough, Shopify themselves are a little reluctant to just give people direct advice on making the switch. Their current Themekit documentation does not mark the tool as deprecated, nor does it even attempt to dissuade developers from using it:

> Choosing between Shopify CLI and Theme Kit: Shopify CLI replaces Theme Kit for most Shopify theme development tasks. You should use Shopify CLI if you're working on Online Store 2.0 themes. You should use Theme Kit instead of Shopify CLI only if you're working on older themes.
Source: https://shopify.dev/themes/tools/theme-kit

I think this is bad advice, and I will lay out my reasons for it below.

## The issues with Themekit

Themekit has been around for a long time, and was the original way I learned to build and manage themes. The `theme watch` command felt like magic the first time I ran it. I'm afraid the fun stops there though.

### 1. Themekit often uses private apps for authentication

Private apps are now deprecated but many still exist because they were grandfathered in on stores that had access to them previously.

Private apps allow for simple HTTPS authentication via app name and password. This is generally just a bad idea because it could give someone with the credentials access to your entire store. I've defeinitely never had to speak to a lawyer because a hacker found the keys and had all order history from all customers ever... Definitely not me...

I have seen many, many stores where the only reason private apps have stuck around is because of developers' need for Themekit access.

There is an alternative for this called [Themekit Access](https://apps.shopify.com/theme-kit-access) which is an app on the Shopify App Store. This definitely alleviates the security concern, but there are still a lot more reasons to leave Themekit behind.

## 2. Themekit encourages partial syncing

This one is my pet peeve. The `theme watch` command is probably the most popular command by a factor of 10. It's the easiest way, as a developer, to just start making changes and getting visual feedback. 

The problem is that once you are in `watch` mode, only the files you change and save are watched and synced. This means that if you are starting from a code base that is not 100% synced to the theme you are working with in Shopify, you will be `watch`-ing  for changes to your local files, but other files in your codebase are not in sync with the hosted theme and you are not developing against your real environment.

This causes much confusion and often results in a developer looking at their codebase and wondering why the theme they are previewing on Shopify isn't working as expected.

## Enter CLI

The Shopify CLI on the other hand, uses the `shopify theme serve` command which brings similar benefits as `theme watch`. The main difference here is that as soon as you `serve` you are immediate syncing the **entire** local theme directory with the hosted dev theme. Nothing is out of sync.

### Other benefits

#### 1. Local development

All Shopify themes are hosted, so there is no real local environment, but Shopify CLI gets as close as possible by proxying the dev theme via your local IP (e.g. 127.0.0.1).

This means live reloading typically works really well.

#### 2. Syncing with the Theme Editor

The Theme Editor is even more crucial in Shopify 2.0 themes. Testing it's settings and playing with configurations is a daily task for most theme developers. The `--theme-editor-sync` flag on the `shopify theme serve` command allows for a really seamless workflow where you can make editor changes via the Customizer and have those changes automatically synced to your local code base.

#### 3. Better auth

Shopify CLI does away with Private apps and Themekit Access and instead just allows for logging in via web OAuth. It's a lot safer and lot easier.

#### 4. Pushing and Pulling

Here's a common workflow for me:

1. Create a new theme via the Shopify admin, and name it something appropriate like `Sticky Add-to-Cart Button`
2. Create a new branch in my local off of `master` called `feature/sticky-atc` for example
3. Immediately run `shopify theme pull` from the **Live Theme** and check for any changes in git. There should be **zero**, and that gives me confidence that I am in sync with the published theme before adding new changes. Or it tells me something has gone wrong and I should get in sync before moving forward.
4. Run `shopify theme push`, and push to the new theme I made.
5. Run `shopify theme serve --theme-editor-sync` and do my work.
6. Once I am done, or am ready for testing I will commit to my repo and `push` to my named theme again.

Now I have a fully-in-sync unpublished theme that contains only the changes related to my new feature. 

The `pull` and `push` commands are the bread and butter and really easy to use.

## Conclusion

The Shopify CLI might not seem like a big departure from Themekit if you haven't tried it yet, but I would encourage you to take advantage of the new tools and workflows. It has made my life a lot easier and — maybe most importantly — made it a lot smoother to work with other developers when we're all using the same modern tools.

Happy theming <3 