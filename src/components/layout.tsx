import Navbar from "./Navbar";
import Footer from "./Footer";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
