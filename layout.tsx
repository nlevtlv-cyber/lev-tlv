export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: "#0E0E0E", color: "#F5F5F2", fontFamily: "Arial" }}>
        {children}
      </body>
    </html>
  );
}