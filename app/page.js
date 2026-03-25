"use client";

import { useEffect, useState } from "react";

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const heroScale = 1 + Math.min(scrollY * 0.00012, 0.08);
  const heroTranslateY = Math.min(scrollY * 0.12, 40);
  const productOpacity = Math.min(Math.max((scrollY - 180) / 260, 0), 1);
  const productTranslateY = Math.max(70 - scrollY * 0.12, 0);
  const headerScrolled = scrollY > 30;

  return (
    <>
      <main className="page">
        <header className={`site-header ${headerScrolled ? "scrolled" : ""}`}>
          <div className="header-inner">
            <a href="#" className="brand-mark">
              ALPINE SIP
            </a>

            <nav className="nav">
              <a href="#story">Story</a>
              <a href="#taste">Taste</a>
              <a href="#lifestyle">Lifestyle</a>
              <a href="#notify">Launching Soon</a>
            </nav>
          </div>
        </header>

        <section className="hero">
          <div
            className="hero-image-wrap"
            style={{
              transform: `scale(${heroScale}) translateY(${heroTranslateY}px)`,
            }}
          >
            <img
              src="/images/alpine-chair-hero.jpg"
              alt="Alpine Sip Hero"
              className="hero-image"
            />
          </div>

          <div className="hero-overlay" />
          <div className="hero-fade" />
        </section>

        <section className="intro">
          <p className="eyebrow">ALPINE SIP</p>
          <h1>Same taste. Different places.</h1>
          <p className="intro-text">
            Premium ski water with raspberry and lemon — inspired by the perfect
            ski day and crafted for a clean, distinctive signature taste.
          </p>
        </section>

        <section className="brand-section">
          <div className="brand-card">
            <p className="eyebrow">SIGNATURE TASTE</p>
            <h2>Not just a drink. A feeling you remember.</h2>
            <p>
              Alpine Sip is built around a recognizable taste and a clear visual
              identity — inspired by alpine lifestyle, reduced to the essentials,
              and made to feel premium in every setting.
            </p>
          </div>

          <div className="brand-points">
            <div className="brand-point">
              <span>Inspired by ski culture</span>
            </div>
            <div className="brand-point">
              <span>Minimal premium aesthetic</span>
            </div>
            <div className="brand-point">
              <span>Crafted for strong recall</span>
            </div>
          </div>
        </section>

        <section className="product-section" id="taste">
          <div className="floating raspberry one" />
          <div className="floating raspberry two" />
          <div className="floating lemon one" />
          <div className="floating lemon two" />

          <div
            className="product-stage"
            style={{
              opacity: productOpacity,
              transform: `translateY(${productTranslateY}px)`,
            }}
          >
            <div className="product-image-card">
              <img
                src="/images/alpine-beach-can.jpg"
                alt="Alpine Sip cans in ice with raspberry and lemon"
                className="product-image"
              />
            </div>

            <div className="product-copy">
              <p className="eyebrow">COMING SOON</p>
              <h2>Cold. Clean. Alpine.</h2>
              <p>
                The taste of your last perfect ski day — consistent, clean and
                made for mountains, city and everything in between.
              </p>

              <div className="button-row">
                <a href="#notify" className="primary-button">
                  Launching soon
                </a>
                <a href="#story" className="secondary-button">
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="benefits-section">
          <div className="section-heading">
            <p className="eyebrow">WHY ALPINE SIP</p>
            <h2>Clear identity. Recognizable taste.</h2>
          </div>

          <div className="benefits-grid">
            <div className="benefit-card">
              <span className="tile-label">01</span>
              <h3>Signature taste</h3>
              <p>
                Raspberry and lemon combined into a clean, memorable profile
                designed to stand out without feeling loud.
              </p>
            </div>

            <div className="benefit-card">
              <span className="tile-label">02</span>
              <h3>Lifestyle-driven</h3>
              <p>
                Inspired by alpine moments and reimagined for beach clubs, city
                days and everywhere in between.
              </p>
            </div>

            <div className="benefit-card">
              <span className="tile-label">03</span>
              <h3>Minimal premium design</h3>
              <p>
                Reduced visuals, strong branding and a premium look built for
                instant recognition.
              </p>
            </div>
          </div>
        </section>

        <section className="story-section" id="story">
          <div className="story-card">
            <p className="eyebrow">THE IDEA</p>
            <h2>Remember the taste of your last ski day?</h2>
            <p>
              Alpine Sip transforms ski water into a signature taste — crafted,
              consistent, and made for a true lifestyle.
            </p>
          </div>

          <div className="info-grid">
            <div className="info-tile">
              <span className="tile-label">Taste</span>
              <strong>Raspberry · Lemon</strong>
            </div>
            <div className="info-tile">
              <span className="tile-label">Mood</span>
              <strong>Après-Ski Lifestyle</strong>
            </div>
            <div className="info-tile">
              <span className="tile-label">Style</span>
              <strong>Minimal · Premium · Clean</strong>
            </div>
          </div>
        </section>

        <section className="lifestyle-section" id="lifestyle">
          <div className="lifestyle-image-card">
            <img
              src="/images/alpine-chair-hero.jpg"
              alt="Alpine Sip lifestyle"
              className="lifestyle-image"
            />
            <div className="lifestyle-overlay" />
          </div>

          <div className="lifestyle-copy">
            <p className="eyebrow">LIFESTYLE</p>
            <h2>From the mountains to the city.</h2>
            <p>
              Alpine Sip is made around the feeling — fresh air, bright light,
              long afternoons and the memory of a perfect day that stays with
              you.
            </p>
          </div>
        </section>

        <section className="notify-section" id="notify">
          <div className="notify-box">
            <p className="eyebrow">FIRST EDITION</p>
            <h2>Launching soon.</h2>
            <p>
              The first edition drops soon. Until then, Alpine Sip stays
              exclusive.
            </p>
          </div>
        </section>

        <footer className="footer">
          <div className="footer-inner">
            <div>
              <p className="footer-brand">ALPINE SIP</p>
              <p className="footer-copy">
                Premium ski water with a signature taste.
              </p>
            </div>

            <div className="footer-links">
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                Instagram
              </a>
              <a href="mailto:hello@alpinesip.com">Contact</a>
            </div>
          </div>
        </footer>
      </main>

      <style jsx>{`
        html {
          scroll-behavior: smooth;
        }

        :global(body) {
          margin: 0;
          padding: 0;
          background: #f6f7f8;
          color: #0f172a;
          font-family: Arial, Helvetica, sans-serif;
        }

        :global(*) {
          box-sizing: border-box;
        }

        :global(a),
        :global(button),
        :global(input) {
          font-family: inherit;
        }

        .page {
          overflow-x: hidden;
          background:
            radial-gradient(circle at top, rgba(255, 255, 255, 0.95), rgba(246, 247, 248, 1) 42%),
            linear-gradient(to bottom, #f8fafc, #eef2f7);
        }

        .site-header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 50;
          padding: 18px 24px;
          transition: background 0.25s ease, backdrop-filter 0.25s ease,
            box-shadow 0.25s ease, border-color 0.25s ease;
        }

        .site-header.scrolled {
          background: rgba(255, 255, 255, 0.68);
          backdrop-filter: blur(16px);
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.06);
          border-bottom: 1px solid rgba(148, 163, 184, 0.12);
        }

        .header-inner {
          max-width: 1240px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .brand-mark {
          text-decoration: none;
          font-size: 0.86rem;
          font-weight: 700;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #ffffff;
          transition: color 0.25s ease, opacity 0.25s ease;
        }

        .site-header.scrolled .brand-mark {
          color: #0b1324;
        }

        .nav {
          display: flex;
          align-items: center;
          gap: 24px;
        }

        .nav a {
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.92);
          transition: color 0.25s ease, opacity 0.25s ease;
        }

        .site-header.scrolled .nav a {
          color: #334155;
        }

        .nav a:hover,
        .brand-mark:hover {
          opacity: 0.72;
        }

        .hero {
          position: relative;
          width: 100%;
          height: 100vh;
          min-height: 720px;
          overflow: hidden;
          background: #dfe7ef;
        }

        .hero-image-wrap {
          position: absolute;
          inset: 0;
          transition: transform 0.12s linear;
          will-change: transform;
        }

        .hero-image,
        .lifestyle-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center center;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(to bottom, rgba(255, 255, 255, 0.05), rgba(0, 0, 0, 0.08)),
            linear-gradient(to top, rgba(8, 15, 28, 0.14), rgba(8, 15, 28, 0));
          pointer-events: none;
        }

        .hero-fade {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 180px;
          background: linear-gradient(to top, #f6f7f8 0%, rgba(246, 247, 248, 0) 100%);
          pointer-events: none;
        }

        .intro,
        .brand-section,
        .benefits-section,
        .story-section,
        .lifestyle-section {
          max-width: 1240px;
          margin: 0 auto;
        }

        .intro {
          max-width: 900px;
          padding: 72px 24px 44px;
          text-align: center;
        }

        .eyebrow {
          margin: 0 0 14px;
          font-size: 12px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #64748b;
        }

        .intro h1,
        .brand-card h2,
        .section-heading h2,
        .product-copy h2,
        .story-card h2,
        .lifestyle-copy h2,
        .notify-box h2 {
          margin: 0;
          color: #0b1324;
          line-height: 1.05;
          letter-spacing: -0.04em;
        }

        .intro h1 {
          font-size: clamp(2.2rem, 5vw, 4.8rem);
        }

        .intro-text {
          max-width: 720px;
          margin: 20px auto 0;
          font-size: 1.05rem;
          line-height: 1.7;
          color: #475569;
        }

        .brand-section {
          padding: 18px 24px 70px;
        }

        .brand-card {
          max-width: 920px;
          margin: 0 auto;
          text-align: center;
          padding: 0 0 34px;
        }

        .brand-card h2 {
          font-size: clamp(1.9rem, 4vw, 3.4rem);
        }

        .brand-card p:last-child {
          max-width: 760px;
          margin: 18px auto 0;
          font-size: 1.02rem;
          line-height: 1.75;
          color: #475569;
        }

        .brand-points {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .brand-point {
          padding: 22px 20px;
          border-radius: 24px;
          background: rgba(255, 255, 255, 0.72);
          border: 1px solid rgba(148, 163, 184, 0.14);
          box-shadow: 0 18px 40px rgba(15, 23, 42, 0.05);
          text-align: center;
        }

        .brand-point span {
          font-size: 0.98rem;
          font-weight: 700;
          color: #0b1324;
        }

        .product-section {
          position: relative;
          padding: 30px 24px 110px;
        }

        .product-stage {
          max-width: 1240px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 42px;
          align-items: center;
          transition: opacity 0.3s ease, transform 0.3s ease;
        }

        .product-image-card,
        .lifestyle-image-card {
          position: relative;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.7);
          border: 1px solid rgba(148, 163, 184, 0.18);
          box-shadow:
            0 28px 70px rgba(15, 23, 42, 0.08),
            inset 0 1px 0 rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(14px);
        }

        .product-image-card {
          height: 620px;
          border-radius: 38px;
        }

        .product-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .product-copy {
          padding-right: 20px;
        }

        .product-copy h2 {
          font-size: clamp(2rem, 4.2vw, 4rem);
        }

        .product-copy p,
        .lifestyle-copy p,
        .benefit-card p,
        .story-card p:last-child,
        .notify-box p {
          margin: 18px 0 0;
          font-size: 1.04rem;
          line-height: 1.7;
          color: #475569;
        }

        .product-copy p {
          max-width: 460px;
        }

        .button-row {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 28px;
        }

        .primary-button,
        .secondary-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 52px;
          padding: 0 22px;
          border-radius: 999px;
          text-decoration: none;
          font-weight: 700;
          letter-spacing: 0.02em;
          transition: transform 0.18s ease, box-shadow 0.18s ease, background 0.18s ease;
          border: none;
          cursor: pointer;
        }

        .primary-button {
          background: #0f2340;
          color: #ffffff;
          box-shadow: 0 16px 30px rgba(15, 35, 64, 0.18);
        }

        .secondary-button {
          background: rgba(255, 255, 255, 0.7);
          color: #0f2340;
          border: 1px solid rgba(15, 35, 64, 0.1);
        }

        .primary-button:hover,
        .secondary-button:hover {
          transform: translateY(-2px);
        }

        .benefits-section {
          padding: 10px 24px 100px;
        }

        .section-heading {
          max-width: 780px;
          margin: 0 auto 30px;
          text-align: center;
        }

        .section-heading h2 {
          font-size: clamp(1.8rem, 4vw, 3.2rem);
        }

        .benefits-grid,
        .info-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .benefit-card,
        .info-tile {
          padding: 28px;
          border-radius: 28px;
          background: rgba(255, 255, 255, 0.72);
          border: 1px solid rgba(148, 163, 184, 0.14);
          box-shadow: 0 18px 40px rgba(15, 23, 42, 0.05);
          backdrop-filter: blur(10px);
        }

        .benefit-card h3 {
          margin: 0;
          font-size: 1.2rem;
          color: #0b1324;
          letter-spacing: -0.02em;
        }

        .tile-label {
          display: block;
          margin-bottom: 10px;
          font-size: 0.78rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #64748b;
        }

        .story-section {
          padding: 30px 24px 100px;
        }

        .story-card {
          max-width: 920px;
          margin: 0 auto;
          padding: 10px 24px 40px;
          text-align: center;
        }

        .story-card h2 {
          font-size: clamp(1.8rem, 4vw, 3.4rem);
        }

        .story-card p:last-child {
          max-width: 720px;
          margin-left: auto;
          margin-right: auto;
        }

        .info-tile strong {
          font-size: 1.05rem;
          color: #0b1324;
        }

        .lifestyle-section {
          padding: 0 24px 110px;
          display: grid;
          grid-template-columns: 1.08fr 0.92fr;
          gap: 38px;
          align-items: center;
        }

        .lifestyle-image-card {
          height: 520px;
          border-radius: 36px;
        }

        .lifestyle-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(15, 23, 42, 0.18),
            rgba(15, 23, 42, 0.02)
          );
          pointer-events: none;
        }

        .lifestyle-copy h2 {
          font-size: clamp(2rem, 4vw, 3.7rem);
        }

        .lifestyle-copy p {
          max-width: 500px;
        }

        .notify-section {
          padding: 0 24px 110px;
        }

        .notify-box {
          max-width: 920px;
          margin: 0 auto;
          text-align: center;
          padding: 50px 28px;
          border-radius: 34px;
          background: linear-gradient(
            135deg,
            rgba(15, 35, 64, 0.98),
            rgba(29, 78, 216, 0.88)
          );
          color: #ffffff;
          box-shadow: 0 30px 70px rgba(15, 35, 64, 0.2);
        }

        .notify-box .eyebrow,
        .notify-box p {
          color: rgba(255, 255, 255, 0.82);
        }

        .notify-box h2 {
          color: #ffffff;
          font-size: clamp(1.9rem, 4vw, 3.2rem);
        }

        .footer {
          padding: 0 24px 42px;
        }

        .footer-inner {
          max-width: 1240px;
          margin: 0 auto;
          padding-top: 26px;
          border-top: 1px solid rgba(148, 163, 184, 0.2);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .footer-brand {
          margin: 0;
          font-size: 0.88rem;
          letter-spacing: 0.26em;
          text-transform: uppercase;
          color: #0b1324;
          font-weight: 700;
        }

        .footer-copy {
          margin: 10px 0 0;
          color: #64748b;
          font-size: 0.95rem;
        }

        .footer-links {
          display: flex;
          flex-wrap: wrap;
          gap: 18px;
        }

        .footer-links a {
          color: #0f2340;
          text-decoration: none;
          font-weight: 700;
        }

        .footer-links a:hover {
          opacity: 0.72;
        }

        .floating {
          position: absolute;
          border-radius: 999px;
          pointer-events: none;
          opacity: 0.95;
        }

        .raspberry {
          background: radial-gradient(circle at 30% 30%, #ffb0c6, #e11d48 72%);
          filter: blur(1px);
        }

        .lemon {
          border-radius: 50%;
          background:
            radial-gradient(circle at center, rgba(255, 243, 170, 0.22) 0 46%, transparent 48%),
            radial-gradient(circle at center, #fde68a 0 65%, #facc15 70%);
          box-shadow: inset 0 0 0 6px rgba(255, 255, 255, 0.35);
        }

        .floating.one.raspberry {
          top: 150px;
          left: 8%;
          width: 68px;
          height: 68px;
          animation: floatOne 10s ease-in-out infinite;
        }

        .floating.two.raspberry {
          bottom: 100px;
          left: 12%;
          width: 52px;
          height: 52px;
          animation: floatThree 11s ease-in-out infinite;
        }

        .floating.one.lemon {
          top: 250px;
          right: 10%;
          width: 94px;
          height: 94px;
          animation: floatTwo 13s ease-in-out infinite;
        }

        .floating.two.lemon {
          bottom: 78px;
          right: 14%;
          width: 84px;
          height: 84px;
          animation: floatFour 12s ease-in-out infinite;
        }

        @keyframes floatOne {
          0%, 100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-22px) translateX(14px) rotate(10deg);
          }
        }

        @keyframes floatTwo {
          0%, 100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
          }
          50% {
            transform: translateY(18px) translateX(-18px) rotate(-12deg);
          }
        }

        @keyframes floatThree {
          0%, 100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-16px) translateX(20px) rotate(14deg);
          }
        }

        @keyframes floatFour {
          0%, 100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
          }
          50% {
            transform: translateY(16px) translateX(-12px) rotate(-10deg);
          }
        }

        @media (max-width: 1100px) {
          .product-stage,
          .lifestyle-section {
            grid-template-columns: 1fr;
            gap: 28px;
          }

          .product-copy,
          .lifestyle-copy {
            padding-right: 0;
            text-align: center;
          }

          .product-copy p,
          .lifestyle-copy p {
            margin-left: auto;
            margin-right: auto;
          }

          .button-row {
            justify-content: center;
          }

          .brand-points,
          .benefits-grid,
          .info-grid {
            grid-template-columns: 1fr;
          }

          .footer-inner {
            flex-direction: column;
            align-items: flex-start;
          }
        }

        @media (max-width: 768px) {
          .site-header {
            padding: 14px 16px;
          }

          .header-inner {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }

          .nav {
            gap: 14px;
            flex-wrap: wrap;
          }

          .nav a {
            font-size: 0.9rem;
          }

          .hero {
            min-height: 100vh;
          }

          .hero-image,
          .lifestyle-image {
            object-position: 58% center;
          }

          .intro {
            padding: 56px 20px 30px;
          }

          .brand-section,
          .benefits-section,
          .story-section,
          .lifestyle-section,
          .notify-section,
          .product-section {
            padding-left: 16px;
            padding-right: 16px;
          }

          .brand-section {
            padding-top: 10px;
            padding-bottom: 60px;
          }

          .product-section {
            padding-top: 20px;
            padding-bottom: 80px;
          }

          .story-section {
            padding-top: 20px;
            padding-bottom: 80px;
          }

          .lifestyle-section {
            padding-bottom: 80px;
          }

          .notify-section {
            padding-bottom: 90px;
          }

          .product-image-card {
            height: 460px;
            border-radius: 28px;
          }

          .lifestyle-image-card {
            height: 380px;
            border-radius: 28px;
          }

          .notify-box {
            border-radius: 26px;
            padding: 34px 20px;
          }

          .floating.one.raspberry,
          .floating.two.raspberry {
            width: 42px;
            height: 42px;
          }

          .floating.one.lemon,
          .floating.two.lemon {
            width: 58px;
            height: 58px;
          }
        }
      `}</style>
    </>
  );
}
