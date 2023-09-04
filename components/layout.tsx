import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useInView } from "react-intersection-observer";
import { BLOG_TITLE, BLOG_SUBTITLE } from "../lib/constants";
const profilePic = "/images/Profile-Illustration.JPG";
const sassyPic = "/images/me-gameboy.jpg";
const previewImage = "/images/preview_image.jpg";

function ProfilePicture() {
  return (
    <div className="group p-1 relative">
      <Image
        priority
        className="rounded-full mx-auto w-32 h-32 object-cover group-hover:hidden"
        src={profilePic}
        height={144}
        width={144}
        alt="Profile Pic, Illustration of me, my partner Sarah, and our cat Theo."
      />
      <Image
        priority
        className="rounded-full mx-auto w-32 h-32 object-cover hidden group-hover:block"
        src={sassyPic}
        height={144}
        width={144}
        alt="Profile Pic, Me looking up from playing gameboy, Age 8?"
      />
      <span className="invisible group-hover:visible absolute bottom-1/2 right-1/2">
        it me
      </span>
    </div>
  );
}

const StickyNav = (home) => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
    rootMargin: "-100px",
  });

  const revealClasses =
    "text-3xl md:text-5xl font-bold fixed -top-3 transition-opacity duration-500";

  return (
    <div ref={ref}>
      <header className="overflow-hidden flex align-center justify-center">
        {/* Screen Reader ignore this one: */}
        {home ? (
          <span
            className={`-left-1 md:-left-2 ${revealClasses} ${
              inView ? "opacity-100" : "opacity-20"
            }`}
            aria-hidden="true"
          >
            Spencer
            <br />
            Karges
          </span>
        ) : (
          <h1
            className={`-left-1 md:-left-2 ${revealClasses} ${
              inView ? "opacity-100" : "opacity-20"
            }`}
          >
            Spencer
            <br />
            Karges
          </h1>
        )}
        <p
          className={`-right-1 md:-right-2 ${revealClasses} ${
            inView ? "opacity-100" : "opacity-20"
          }`}
          arua-hidden={home ? "true" : "false"}
        >
          Developer
          <br />
          &amp;Designer
        </p>
        <div className="p-4">
          <Link href="/" aria-label="Back to Home" className="hover:text-white">
            <ProfilePicture />
          </Link>
        </div>
      </header>
    </div>
  );
};

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <div>
      <div className="overflow-hidden absolute -top-3 -left-2"></div>
      <a
        className="focus:not-sr-only focus:absolute focus:p-4 font-bold text-black no-underline bg-white sr-only z-10"
        href="#content"
      >
        Skip to content
      </a>
      <Head>
        <link rel="icon" type="image/svg+xml" href="https://fav.farm/🔰" />
        <link rel="mask-icon" href="https://fav.farm/🔰" color="#ff0000" />
        <title>{BLOG_TITLE}</title>
        <meta name="description" content={BLOG_SUBTITLE} />
        <meta
          property="og:image"
          content={`https://www.karges.org/${previewImage}`}
        />
        <meta name="og:title" content={BLOG_TITLE} />
        <meta name="twitter:card" content="summary_large_image" />
        <script
          defer
          data-domain="karges.org"
          src="https://plausible.io/js/plausible.js"
        ></script>
      </Head>
      <StickyNav home={home} />
      <main
        id="content"
        className="max-w-prose px-4 mx-auto my-12 font-sans text-lg"
      >
        {children}
        {!home && (
          <div className="py-4 my-4">
            <Link href="/">← Back to home</Link>
          </div>
        )}
      </main>
      <footer className="max-w-prose px-4 mx-auto my-12 font-sans text-lg">
        <nav>
          <ul className="flex gap-4 text-sm">
            <li>
              <Link href="/rss.xml">RSS</Link>
            </li>
            <li>
              <a
                href="https://eskargeaux.co"
                target="_blank"
                rel="noopener noreferrer"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="https://github.com/skarges3"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  );
}
