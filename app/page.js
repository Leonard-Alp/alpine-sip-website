"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const heroScale = Math.max(1, 1 + scrollY * 0.00015);
  const heroTranslate = Math.min(scrollY * 0.12, 60);
  const productOpacity = Math.min(Math.max((scrollY - 220) / 320, 0), 1);
  const productTranslate = Math.max(70 - scrollY * 0.08, 0);

  return (
    <main className="page">
      <section className="hero">
        <div
          className="heroImageWrap"
          style={{
            transform: `scale(${heroScale}) translateY(${heroTranslate}px)`,
          }}
        >
          <Image
            src="/images/alpine-chair-hero.jpg"
            alt="Alpine Sip Hero"
            fill
            priority
            className="heroImage"
          />
        </div>

        <div className="heroOverlay" />
        <div className="heroBottomFade" />
      </section>

      <section className="intro">
        <p className="eyebrow">ALPINE SIP</p>
        <h2>Same taste. Different places.</h2>
        <p className="introText">
          Premium Skiwasser mit Raspberry und Lemon — clean, kalt und gemacht
          für den perfekten Moment zwischen Berg, Sonne und Après-Ski.
        </p>
      </section>

      <section className="productSection">
        <div className="floating floatingOne" />
        <div className="floating floatingTwo" />
        <div className="floating floatingThree" />
        <div className="floating floatingFour" />

        <div
          className="productStage"
          style={{
            opacity: productOpacity,
            transform: `translateY(${productTranslate}px)`,
          }}
        >
          <div className="canCluster">
            <div className="can canBackLeft">
              <div className="mountain" />
              <div className="brand">ALPINE SIP</div>
              <div className="flavor">Skiwasser · Raspberry · Lemon</div>
            </div>

            <div className="can canBackRight">
              <div className="mountain" />
              <div className="brand">ALPINE SIP</div>
              <div className="flavor">Skiwasser · Raspberry · Lemon</div>
            </div>

            <div className="can canFrontLeft">
              <div className="mountain" />
              <div className="brand">ALPINE SIP</div>
              <div className="flavor">Skiwasser · Raspberry · Lemon</div>
            </div>

            <div className="can canFrontRight">
              <div className="mountain" />
              <div className="brand">ALPINE SIP</div>
              <div className="flavor">Skiwasser · Raspberry · Lemon</div>
            </div>

            <div className="can canMain">
              <div className="mountain" />
              <div className="brand">ALPINE SIP</div>
              <div className="flavor">Skiwasser · Raspberry · Lemon</div>
            </div>

            <div className="reflection" />
          </div>

          <div className="productCopy">
            <p className="eyebrow">COMING SOON</p>
            <h3>Cold. Clean. Alpine.</h3>
            <p>
              Der Geschmack vom letzten perfekten Skitag — überall derselbe.
            </p>

            <div className="ctaRow">
              <a href="#notify" className="primaryBtn">
                Launching Soon
              </a>
              <a href="#story" className="ghostBtn">
                Mehr erfahren
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="story" id="story">
        <div className="storyCard">
          <p className="eyebrow">THE IDEA</p>
          <h3>Was hat dein letzter Skitag eigentlich geschmeckt?</h3>
          <p>
            Alpine Sip bringt Skiwasser aus dem Zufall raus und macht daraus
            einen Signature Taste — klar, wiedererkennbar und ready für Berg,
            Stadt und Beach Club.
          </p>
        </div>

        <div className="storyGrid">
          <div className="infoTile">
            <span className="tileLabel">Taste</span>
            <strong>Raspberry · Lemon</strong>
          </div>
          <div className="infoTile">
            <span className="tileLabel">Mood</span>
            <strong>Après-Ski Lifestyle</strong>
          </div>
          <div className="infoTile">
            <span className="tileLabel">Style</span>
            <strong>Minimal · Premium · Clean</strong>
          </div>
        </div>
      </section>

      <section className="notify" id="notify">
        <div className="notifyBox">
          <p className="eyebrow">ALPINE SIP</p>
          <h3>Launching soon.</h3>
          <p>
            Die erste Edition kommt bald. Bis dahin bleibt’s exklusiv.
          </p>
        </div>
      </section>

      <style jsx>{`
        :global(html) {
          scroll-behavior: smooth;
        }

        :global(body) {
          margin: 0;
          background: #f6f7f8;
          color: #0f172a;
          font-family: Arial, Helvetica, sans-serif;
        }

        .page {
          overflow-x: hidden;
          background:
            radial-gradient(circle at top, rgba(255,255,255,0.95), rgba(246,247,248,1) 42%),
            linear-gradient(to bottom, #f8fafc, #eef2f7);
        }

        .hero {
          position: relative;
          height: 100svh;
          min-height: 720px;
          width: 100%;
          overflow: hidden;
          background: #dfe7ef;
        }

        .heroImageWrap {
          position: absolute;
          inset: 0;
          will-change: transform;
          transition: transform 0.12s linear;
        }

        .heroImage {
          object-fit: cover;
          object-position: center center;
        }

        .heroOverlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(to bottom, rgba(255,255,255,0.08), rgba(0,0,0,0.08)),
            linear-gradient(to top, rgba(8,15,28,0.14), rgba(8,15,28,0));
          pointer-events: none;
        }

        .heroBottomFade {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 180px;
          background: linear-gradient(to top, #f6f7f8 0%, rgba(246,247,248,0) 100%);
          pointer-events: none;
        }

        .intro {
          max-width: 880px;
          margin: 0 auto;
          padding: 72px 24px 48px;
          text-align: center;
        }

        .eyebrow {
          margin: 0 0 14px;
          font-size: 12px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #64748b;
        }

        .intro h2,
        .productCopy h3,
        .storyCard h3,
        .notifyBox h3 {
          margin: 0;
          line-height: 1.05;
          letter-spacing: -0.04em;
          color: #0b1324;
        }

        .intro h2 {
          font-size: clamp(2.1rem, 5vw, 4.6rem);
        }

        .introText {
          max-width: 700px;
          margin: 20px auto 0;
          font-size: 1.05rem;
          line-height: 1.7;
          color: #475569;
        }

        .productSection {
          position: relative;
          padding: 40px 24px 100px;
        }

        .productStage {
          max-width: 1240px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 40px;
          align-items: center;
          transition: opacity 0.3s ease, transform 0.3s ease;
        }

        .canCluster {
          position: relative;
          height: 620px;
          border-radius: 38px;
          background:
            radial-gradient(circle at top center, rgba(255,255,255,0.95), rgba(240,244,248,0.82) 48%, rgba(226,232,240,0.86) 100%);
          border: 1px solid rgba(148,163,184,0.18);
          box-shadow:
            0 28px 70px rgba(15,23,42,0.08),
            inset 0 1px 0 rgba(255,255,255,0.9);
          overflow: hidden;
          backdrop-filter: blur(14px);
        }

        .can {
          position: absolute;
          width: 190px;
          height: 420px;
          border-radius: 30px 30px 22px 22px;
          background:
            radial-gradient(circle at 22% 16%, rgba(255,255,255,0.96), rgba(245,247,250,0.98) 30%, rgba(231,236,242,0.95) 100%);
          border: 1px solid rgba(148,163,184,0.2);
          box-shadow:
            inset 0 0 0 1px rgba(255,255,255,0.75),
            inset -18px 0 36px rgba(148,163,184,0.08),
            0 18px 34px rgba(15,23,42,0.12);
          transform-origin: center bottom;
        }

        .can::before {
          content: "";
          position: absolute;
          top: 8px;
          left: 14px;
          right: 14px;
          height: 16px;
          border-radius: 999px;
          background: linear-gradient(to bottom, #cfd6df, #eef2f7);
          opacity: 0.9;
        }

        .can::after {
          content: "";
          position: absolute;
          inset: 0;
          background-image:
            radial-gradient(circle at 20% 18%, rgba(255,255,255,0.95) 0 1.2px, transparent 1.4px),
            radial-gradient(circle at 38% 32%, rgba(255,255,255,0.88) 0 1.8px, transparent 2px),
            radial-gradient(circle at 75% 24%, rgba(255,255,255,0.9) 0 1.5px, transparent 1.7px),
            radial-gradient(circle at 62% 58%, rgba(255,255,255,0.86) 0 2px, transparent 2.2px),
            radial-gradient(circle at 42% 76%, rgba(255,255,255,0.84) 0 2.4px, transparent 2.7px),
            radial-gradient(circle at 80% 72%, rgba(255,255,255,0.88) 0 1.5px, transparent 1.8px),
            radial-gradient(circle at 18% 64%, rgba(255,255,255,0.9) 0 1.6px, transparent 1.8px),
            radial-gradient(circle at 68% 40%, rgba(255,255,255,0.82) 0 2.6px, transparent 2.9px);
          opacity: 0.7;
          pointer-events: none;
        }

        .mountain {
          position: absolute;
          top: 86px;
          left: 50%;
          width: 112px;
          height: 44px;
          transform: translateX(-50%);
          background: #dc2626;
          clip-path: polygon(
            0% 100%,
            24% 44%,
            37% 58%,
            55% 0%,
            74% 46%,
            82% 24%,
            100% 100%,
            83% 72%,
            71% 84%,
            57% 34%,
            45% 70%,
            28% 60%
          );
          filter: drop-shadow(0 6px 10px rgba(220, 38, 38, 0.18));
        }

        .brand {
          position: absolute;
          top: 160px;
          left: 50%;
          transform: translateX(-50%);
          width: 88%;
          text-align: center;
          font-weight: 800;
          font-size: 0.95rem;
          letter-spacing: 0.08em;
          color: #0f2340;
          white-space: nowrap;
        }

        .flavor {
          position: absolute;
          left: 50%;
          bottom: 42px;
          transform: translateX(-50%);
          width: 82%;
          text-align: center;
          font-size: 0.64rem;
          letter-spacing: 0.05em;
          color: #334155;
          white-space: nowrap;
        }

        .canMain {
          left: 50%;
          top: 104px;
          transform: translateX(-50%) rotate(-1deg);
          z-index: 5;
        }

        .canFrontLeft {
          left: 16%;
          top: 142px;
          transform: rotate(-10deg);
          z-index: 4;
        }

        .canFrontRight {
          right: 14%;
          top: 146px;
          transform: rotate(9deg);
          z-index: 4;
        }

        .canBackLeft {
          left: 8%;
          top: 96px;
          transform: rotate(-18deg) scale(0.94);
          opacity: 0.95;
          z-index: 2;
        }

        .canBackRight {
          right: 9%;
          top: 92px;
          transform: rotate(16deg) scale(0.95);
          opacity: 0.95;
          z-index: 2;
        }

        .reflection {
          position: absolute;
          left: 7%;
          right: 7%;
          bottom: 16px;
          height: 80px;
          border-radius: 999px;
          background: radial-gradient(circle, rgba(148,163,184,0.18), rgba(148,163,184,0));
          filter: blur(16px);
        }

        .productCopy {
          padding-right: 20px;
        }

        .productCopy h3 {
          font-size: clamp(2rem, 4.2vw, 4rem);
        }

        .productCopy p {
          margin: 18px 0 0;
          max-width: 460px;
          font-size: 1.04rem;
          line-height: 1.7;
          color: #475569;
        }

        .ctaRow {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin-top: 28px;
        }

        .primaryBtn,
        .ghostBtn {
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
        }

        .primaryBtn {
          background: #0f2340;
          color: #ffffff;
          box-shadow: 0 16px 30px rgba(15,35,64,0.18);
        }

        .ghostBtn {
          background: rgba(255,255,255,0.65);
          color: #0f2340;
          border: 1px solid rgba(15,35,64,0.1);
        }

        .primaryBtn:hover,
        .ghostBtn:hover {
          transform: translateY(-2px);
        }

        .story {
          max-width: 1240px;
          margin: 0 auto;
          padding: 36px 24px 100px;
        }

        .storyCard {
          max-width: 900px;
          margin: 0 auto;
          padding: 40px 24px;
          text-align: center;
        }

        .storyCard h3 {
          font-size: clamp(1.8rem, 4vw, 3.4rem);
        }

        .storyCard p:last-child {
          margin: 18px auto 0;
          max-width: 720px;
          font-size: 1.02rem;
          line-height: 1.7;
          color: #475569;
        }

        .storyGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          margin-top: 16px;
        }

        .infoTile {
          padding: 26px;
          border-radius: 28px;
          background: rgba(255,255,255,0.7);
          border: 1px solid rgba(148,163,184,0.14);
          box-shadow: 0 18px 40px rgba(15,23,42,0.05);
          backdrop-filter: blur(10px);
        }

        .tileLabel {
          display: block;
          margin-bottom: 10px;
          font-size: 0.78rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #64748b;
        }

        .infoTile strong {
          font-size: 1.05rem;
          color: #0b1324;
        }

        .notify {
          padding: 0 24px 110px;
        }

        .notifyBox {
          max-width: 860px;
          margin: 0 auto;
          text-align: center;
          padding: 44px 24px;
          border-radius: 34px;
          background:
            linear-gradient(135deg, rgba(15,35,64,0.98), rgba(29,78,216,0.88));
          color: #ffffff;
          box-shadow: 0 30px 70px rgba(15,35,64,0.2);
        }

        .notifyBox .eyebrow,
        .notifyBox p {
          color: rgba(255,255,255,0.8);
        }

        .notifyBox h3 {
          color: #ffffff;
          font-size: clamp(1.9rem, 4vw, 3.2rem);
        }

        .notifyBox p {
          margin: 16px 0 0;
          font-size: 1rem;
          line-height: 1.7;
        }

        .floating {
          position: absolute;
          border-radius: 999px;
          filter: blur(2px);
          opacity: 0.9;
          pointer-events: none;
        }

        .floatingOne {
          top: 160px;
          left: 8%;
          width: 68px;
          height: 68px;
          background: radial-gradient(circle at 30% 30%, #ffb3c7, #e11d48 72%);
          animation: floatOne 10s ease-in-out infinite;
        }

        .floatingTwo {
          top: 250px;
          right: 10%;
          width: 94px;
          height: 94px;
          border-radius: 50%;
          background:
            radial-gradient(circle at center, rgba(255,240,170,0.22) 0 46%, transparent 48%),
            radial-gradient(circle at center, #fde68a 0 65%, #facc15 70%);
          box-shadow: inset 0 0 0 6px rgba(255,255,255,0.35);
          animation: floatTwo 13s ease-in-out infinite;
        }

        .floatingThree {
          bottom: 120px;
          left: 12%;
          width: 54px;
          height: 54px;
          background: radial-gradient(circle at 30% 30%, #ff9db6, #be123c 72%);
          animation: floatThree 11s ease-in-out infinite;
        }

        .floatingFour {
          bottom: 80px;
          right: 14%;
          width: 86px;
          height: 86px;
          border-radius: 50%;
          background:
            radial-gradient(circle at center, rgba(255,240,170,0.18) 0 46%, transparent 48%),
            radial-gradient(circle at center, #fde68a 0 65%, #f59e0b 70%);
          box-shadow: inset 0 0 0 5px rgba(255,255,255,0.35);
          animation: floatFour 12s ease-in-out infinite;
        }

        @keyframes floatOne {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          50% { transform: translateY(-22px) translateX(14px) rotate(10deg); }
        }

        @keyframes floatTwo {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          50% { transform: translateY(18px) translateX(-18px) rotate(-12deg); }
        }

        @keyframes floatThree {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          50% { transform: translateY(-16px) translateX(20px) rotate(14deg); }
        }

        @keyframes floatFour {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          50% { transform: translateY(16px) translateX(-12px) rotate(-10deg); }
        }

        @media (max-width: 1100px) {
          .productStage {
            grid-template-columns: 1fr;
            gap: 28px;
          }

          .productCopy {
            padding-right: 0;
            text-align: center;
          }

          .productCopy p {
            margin-left: auto;
            margin-right: auto;
          }

          .ctaRow {
            justify-content: center;
          }

          .storyGrid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .hero {
            min-height: 100svh;
          }

          .heroImage {
            object-position: 58% center;
          }

          .intro {
            padding: 56px 20px 30px;
          }

          .productSection {
            padding: 20px 16px 80px;
          }

          .canCluster {
            height: 480px;
            border-radius: 28px;
          }

          .can {
            width: 132px;
            height: 290px;
            border-radius: 22px 22px 16px 16px;
          }

          .mountain {
            top: 62px;
            width: 78px;
            height: 32px;
          }

          .brand {
            top: 114px;
            font-size: 0.7rem;
            letter-spacing: 0.06em;
          }

          .flavor {
            bottom: 30px;
            font-size: 0.46rem;
            width: 86%;
          }

          .canMain {
            top: 102px;
          }

          .canFrontLeft {
            left: 6%;
            top: 144px;
          }

          .canFrontRight {
            right: 7%;
            top: 146px;
          }

          .canBackLeft {
            left: -2%;
            top: 110px;
          }

          .canBackRight {
            right: -2%;
            top: 112px;
          }

          .reflection {
            height: 56px;
            bottom: 10px;
          }

          .story {
            padding: 20px 16px 80px;
          }

          .notify {
            padding: 0 16px 90px;
          }

          .notifyBox {
            border-radius: 26px;
            padding: 34px 20px;
          }

          .floatingOne,
          .floatingThree {
            width: 42px;
            height: 42px;
          }

          .floatingTwo,
          .floatingFour {
            width: 58px;
            height: 58px;
          }
        }
      `}</style>
    </main>
  );
}
