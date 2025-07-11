import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Energie Flow - Sophrologie",
  description: "Retrouvez équilibre et sérénité avec nos séances de sophrologie personnalisées",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/images/green-heart.svg" />
      </head>
      <body className="font-sans antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}