export default function Home() {
  return (
    <main style={{ background: "#000", color: "#fff", fontFamily: "Arial", padding: "40px" }}>
      
      <h1>ALPINE SIP</h1>
      <p>Alpine lifestyle • launching soon</p>

      <h2>The taste of your last ski day</h2>
      <p>A new take on Skiwasser — crisp, cinematic and designed to feel at home from the Alps to everywhere else.</p>

      {/* HERO IMAGE */}
      <img src="/images/alpine-hero-ski.jpg" style={{ width: "100%", marginTop: "20px" }} />

      <h2>Made for everywhere</h2>
      <p>From mountains to beach.</p>

      {/* BEACH IMAGE */}
      <img src="/images/alpine-beach-can.jpg" style={{ width: "100%", marginTop: "20px" }} />

      <h2>Same taste. Different places.</h2>

      {/* PRODUCT IMAGE */}
      <img src="/images/alpine-product-mountains.jpg" style={{ width: "100%", marginTop: "20px" }} />

      <h2>Memory, bottled</h2>

      {/* MEMORY IMAGE */}
      <img src="/images/alpine-memory-ski.jpg" style={{ width: "100%", marginTop: "20px" }} />

      <h2>Not just a drink. A moment.</h2>

      {/* LUXURY IMAGE */}
      <img src="/images/alpine-luxury-red.jpg" style={{ width: "100%", marginTop: "20px" }} />

    </main>
  );
}
