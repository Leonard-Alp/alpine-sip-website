export const metadata = {
  title: "Alpine Sip",
  description: "Signature Skiwater Lifestyle",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif", background: "#0a0a0a", color: "white" }}>
        {children}
      </body>
    </html>
  );
}
