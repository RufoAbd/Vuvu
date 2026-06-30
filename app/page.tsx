"use client";

import { useState } from "react";
import { Nav } from "@/components/layout/Nav";
import { SocialSidebar } from "@/components/layout/SocialSidebar";
import { EmailSidebar } from "@/components/layout/EmailSidebar";
import { Footer } from "@/components/layout/Footer";
import { Loader } from "@/components/layout/Loader";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Work } from "@/components/sections/Work";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <div id="root">
      {loading && <Loader onComplete={() => setLoading(false)} />}

      <div style={{
        opacity: loading ? 0 : 1,
        transition: "opacity 500ms ease",
      }}>
        <Nav />
        <SocialSidebar />
        <EmailSidebar />

        <main
          id="content"
          style={{
            margin: "0 auto",
            width: "100%",
            maxWidth: 1600,
            minHeight: "100vh",
            padding: "0 150px",
          }}
          className="main-content"
        >
          <Hero />
          <About />
          <Experience />
          <Work />
          <Contact />
        </main>

        <Footer />
      </div>

      <style jsx global>{`
        @media (max-width: 1080px) {
          .main-content {
            padding: 0 100px !important;
          }
        }
        @media (max-width: 768px) {
          .main-content {
            padding: 0 50px !important;
          }
        }
        @media (max-width: 480px) {
          .main-content {
            padding: 0 25px !important;
          }
        }
      `}</style>
    </div>
  );
}
