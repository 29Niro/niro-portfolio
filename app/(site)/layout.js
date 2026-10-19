import Header from '@/components/Header';
import PageTransition from '@/components/PageTransition';
import Footer from '@/components/Footer';

export default function SiteLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <PageTransition>
        <main className="flex-1">{children}</main>
      </PageTransition>
      <Footer />
    </div>
  );
}
