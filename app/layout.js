import "./globals.css";
import BottomNav from "../components/BottomNav/BottomNav";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <BottomNav />
      </body>
    </html>
  );
}
