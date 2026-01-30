'use client';

import { useEffect } from 'react';

export default function Services() {
  useEffect(() => {
    // ...existing effect logic (if any, or leave empty)
  }, []);

  return (
    <>
      {/* Hero Section (replicated from portfolio, with hover transition) */}
      <section className="hero-landing services-hero custom-portfolio-hero">
        <div className="hero-background">
          <img src="/phone+laptop-scroll.gif" alt="Hero Background" className="hero-gif" loading="lazy" />
        </div>
        <div className="hero-landing-overlay">
          <div className="services-hero-content custom-portfolio-hero-content">
            <h1 className="services-title">Services</h1>
            <div className="services-hero-hover-content custom-portfolio-hero-hover-content">
              <p className="services-hero-description custom-portfolio-hero-description">
                From branding and UI/UX design to 3D animation and web development, we offer comprehensive creative services that bring your vision to life. Our multidisciplinary approach ensures every project receives expert attention across all creative domains.
              </p>
              <div className="portfolio-hero-video-wrap">
                <img src="/video-editor.gif" alt="Video Editor Demo" className="portfolio-hero-demo-video" style={{ borderRadius: '12px', width: '180px', height: 'auto', boxShadow: '0 4px 32px rgba(0,0,0,0.25)' }} loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Branding & Product Design Section */}
      <section className="section services-bg-section" style={{ position: 'relative', overflow: 'hidden' }}>
        <video className="services-bg-video" autoPlay loop muted playsInline
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0,
            opacity: 0.9,
            pointerEvents: 'none'
          }}>
          <source src="/Branding.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none', background: 'linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.75) 65%, #000000 100%)' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start', marginLeft: '-850px', marginTop: '50px' }}>
            <span className="service-number" style={{ fontSize: '1.25rem', fontWeight: 300, letterSpacing: '-0.015em', color: '#E8E8E8' }}>01</span>
            <div className="grid grid-2" style={{ alignItems: 'flex-start', gap: '4rem' }}>
              <div className="service-content" style={{ maxWidth: '720px' }}>
                <h2>Branding & Product Design</h2>
                <p style={{ fontSize: '1.125rem', margin: '20rem 0 1rem 0', lineHeight: 1.8 }}>
                  We craft brands and products that stand out in the market. From concept to launch, our team ensures every detail is pixel-perfect and strategically aligned.
                </p>
                <a href="/contact" className="btn btn-primary" style={{ marginTop: '2rem' }}>Book A Call</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Graphics Design Section */}
      <section className="section graphics-bg-section" style={{ position: 'relative', overflow: 'hidden', backgroundColor: 'var(--color-bg-secondary)' }}>
        <video className="graphics-bg-video" autoPlay loop muted playsInline
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0,
            opacity: 0.85,
            pointerEvents: 'none'
          }}>
          <source src="/Graphics-Design.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none', background: 'linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.75) 65%, #000000 100%)' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start', marginLeft: '-850px', marginTop: '50px' }}>
            <span className="service-number" style={{ fontSize: '1.25rem', fontWeight: 300, letterSpacing: '-0.015em', color: '#E8E8E8' }}>02</span>
            <div className="grid grid-2" style={{ alignItems: 'flex-start', gap: '4rem', marginBottom: '6rem' }}>
              <div className="service-content" style={{ order: 1, maxWidth: '720px' }}>
                <h2>Graphics Design</h2>
                <p style={{ fontSize: '1.125rem', margin: '20rem 0 1rem 0', lineHeight: 1.8 }}>
                  Visual communication that tells your story. We design everything from marketing materials to digital assets that capture attention and drive engagement.
                </p>
                <a href="/contact" className="btn btn-primary" style={{ marginTop: '2rem' }}>Book A Call</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VFX & Animation Section */}
      <section className="section vfx-bg-section" style={{ position: 'relative', overflow: 'hidden', backgroundColor: 'var(--color-bg-secondary)' }}>
        <video className="vfx-bg-video" autoPlay loop muted playsInline
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0,
            opacity: 0.85,
            pointerEvents: 'none'
          }}>
          <source src="/vfxanime.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none', background: 'linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.75) 65%, #000000 100%)' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start', marginLeft: '-850px', marginTop: '50px' }}>
            <span className="service-number" style={{ fontSize: '1.25rem', fontWeight: 300, letterSpacing: '-0.015em', color: '#E8E8E8' }}>03</span>
            <div className="grid grid-2" style={{ alignItems: 'flex-start', gap: '4rem' }}>
              <div className="service-content" style={{ maxWidth: '720px' }}>
                <h2>VFX & <br />Animation</h2>
                <p style={{ fontSize: '1.125rem', margin: '20rem 0 1rem 0', lineHeight: 1.8 }}>
                  Bring your vision to life with cutting-edge visual effects and animations. We create immersive experiences that captivate and inspire your audience.
                </p>
                <a href="/contact" className="btn btn-primary" style={{ marginTop: '2rem' }}>Book A Call</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3D Design & 3D Modeling Section */}
      <section className="section web-bg-section" style={{ position: 'relative', overflow: 'hidden', backgroundColor: 'var(--color-bg-secondary)' }}>
        <video className="web-bg-video" autoPlay loop muted playsInline
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0,
            opacity: 0.85,
            pointerEvents: 'none'
          }}>
          <source src="/Animation.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none', background: 'linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.75) 65%, #000000 100%)' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start', marginLeft: '-850px', marginTop: '50px' }}>
            <span className="service-number" style={{ fontSize: '1.25rem', fontWeight: 300, letterSpacing: '-0.015em', color: '#E8E8E8' }}>04</span>
            <div className="grid grid-2" style={{ alignItems: 'flex-start', gap: '4rem' }}>
              <div className="service-content" style={{ order: 1, maxWidth: '720px' }}>
                <h2>3D Design & 3D Modeling</h2>
                <p style={{ fontSize: '1.125rem', margin: '20rem 0 1rem 0', lineHeight: 1.8 }}>
                  We turn concepts into precise, high-quality 3D assets ready for animation, visualization, or production. Each asset is designed with precision, realism, and pipeline compatibility in mind.
                </p>
                <a href="/contact" className="btn btn-primary" style={{ marginTop: '2rem' }}>Book A Call</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Game Development Section */}
      <section className="section cta-bg-section" style={{ position: 'relative', overflow: 'hidden', backgroundColor: 'var(--color-bg-secondary)' }}>
        <video className="cta-bg-video" autoPlay loop muted playsInline
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0,
            opacity: 0.85,
            pointerEvents: 'none'
          }}>
          <source src="/developers-designers.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none', background: 'linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.75) 65%, #000000 100%)' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start', marginLeft: '-850px', marginTop: '50px' }}>
            <span className="service-number" style={{ fontSize: '1.25rem', fontWeight: 300, letterSpacing: '-0.015em', color: '#E8E8E8' }}>05</span>
            <div className="grid grid-2" style={{ alignItems: 'flex-start', gap: '4rem' }}>
              <div className="service-content" style={{ maxWidth: '720px' }}>
                <h2>Game Development</h2>
                <p style={{ fontSize: '1.125rem', margin: '20rem 0 1rem 0', lineHeight: 1.8 }}>
                  We develop immersive, well-balanced games with polished mechanics, environments, and player experiences. Worlds that invite exploration and systems that reward skill.
                </p>
                <a href="/contact" className="btn btn-primary" style={{ marginTop: '2rem' }}>Book A Call</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Web Development Section */}
      <section className="section web-section" style={{ position: 'relative', overflow: 'hidden', backgroundColor: 'var(--color-bg-secondary)' }}>
        <video className="web-section-video" autoPlay loop muted playsInline
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0,
            opacity: 0.85,
            pointerEvents: 'none'
          }}>
          <source src="/Web.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none', background: 'linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.75) 65%, #000000 100%)' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start', marginLeft: '-850px', marginTop: '50px' }}>
            <span className="service-number" style={{ fontSize: '1.25rem', fontWeight: 300, letterSpacing: '-0.015em', color: '#E8E8E8' }}>06</span>
            <div className="grid grid-2" style={{ alignItems: 'flex-start', gap: '4rem' }}>
              <div className="service-content" style={{ maxWidth: '720px' }}>
                <h2>Web Design & Development</h2>
                <p style={{ fontSize: '1.125rem', margin: '20rem 0 1rem 0', lineHeight: 1.8 }}>
                  From responsive interfaces to robust backend systems, every site is engineered for speed, usability, and brand impact.
                </p>
                <a href="/contact" className="btn btn-primary" style={{ marginTop: '2rem' }}>Book A Call</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Showcase CTA Section */}
      <section className="section portfolio-cta-section" style={{ position: 'relative', overflow: 'hidden', backgroundColor: '#000000', padding: '130px 80px 80px' }}>
        <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1410px' }}>
          <div style={{ textAlign: 'left', marginBottom: '4rem' }}>
            <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500, fontSize: '48px', lineHeight: '53px', letterSpacing: '-0.15px', margin: 0, verticalAlign: 'middle' }}>
              <span style={{ color: '#FFFFFF' }}>Every element is thoughtfully crafted to not only captivate </span><span style={{ color: '#999999' }}>but also deliver seamless experiences ensuring your brand stands apart.</span>
            </h2>
          </div>
          <style jsx>{`
            .portfolio-showcase-card {
              flex: 0 0 380px;
              height: 425px;
              background-color: #EF01020D;
              border-radius: 14.2px;
              padding: 10px;
              display: flex;
              flex-direction: column;
              margin-right: 12px;
              transition: transform 0.3s ease, box-shadow 0.3s ease;
            }
            .portfolio-showcase-card:hover {
              transform: translateY(-8px);
              box-shadow: 0 20px 40px rgba(239, 1, 2, 0.5);
            }
            .rolling-gallery {
              overflow: hidden;
              width: 100%;
              mask-image: linear-gradient(90deg, transparent 0%, #000 8%, #000 92%, transparent 100%);
              -webkit-mask-image: linear-gradient(90deg, transparent 0%, #000 8%, #000 92%, transparent 100%);
            }
            .rolling-track {
              display: flex;
              gap: 0;
              width: calc(380px * 12 + 12px * 12);
              animation: roll-left 3s linear infinite;
              will-change: transform;
            }
            @keyframes roll-left {
              0% { transform: translateX(0); }
              100% { transform: translateX(calc(-(380px * 6 + 12px * 6))); }
            }
            @media screen and (max-width: 768px) {
              .rolling-track {
                width: calc(280px * 12 + 12px * 12);
                animation: roll-left 3s linear infinite;
              }
              .portfolio-showcase-card {
                flex: 0 0 280px;
                height: 320px;
              }
            }
            @media screen and (max-width: 480px) {
              .rolling-track {
                width: calc(240px * 12 + 12px * 12);
                animation: roll-left 3s linear infinite;
              }
              .portfolio-showcase-card {
                flex: 0 0 240px;
                height: 280px;
                margin-right: 8px;
              }
            }
            .btn-primary {
              transition: background-color 0.3s ease, color 0.3s ease;
            }
            .btn-primary:hover {
              background-color: #EF0102 !important;
            }
          `}</style>
          <div className="rolling-gallery" style={{ marginBottom: '2rem' }}>
            <div className="rolling-track">
              {/* Set 1 - Using Portfolio Card Images */}
              <div className="portfolio-showcase-card">
                <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                  <span style={{ backgroundColor: '#000', padding: '9px', borderRadius: '5px', fontFamily: "'SF Pro', sans-serif", fontWeight: 590, fontSize: '14px', lineHeight: '14px', letterSpacing: '-0.14px', color: '#FFF', textTransform: 'uppercase' }}>UI/UX Design</span>
                  <span style={{ backgroundColor: '#000', padding: '9px', borderRadius: '5px', fontFamily: "'SF Pro', sans-serif", fontWeight: 590, fontSize: '14px', lineHeight: '14px', letterSpacing: '-0.14px', color: '#FFF', textTransform: 'uppercase' }}>Mobile App</span>
                </div>
                <div style={{ flex: 1, borderRadius: '14px', overflow: 'hidden', marginBottom: '10px' }}>
                  <img src="/UI1-3.png" alt="UI/UX Design" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </div>
              <div className="portfolio-showcase-card">
                <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                  <span style={{ backgroundColor: '#000', padding: '9px', borderRadius: '5px', fontFamily: "'SF Pro', sans-serif", fontWeight: 590, fontSize: '14px', lineHeight: '14px', letterSpacing: '-0.14px', color: '#FFF', textTransform: 'uppercase' }}>Interior Design</span>
                  <span style={{ backgroundColor: '#000', padding: '9px', borderRadius: '5px', fontFamily: "'SF Pro', sans-serif", fontWeight: 590, fontSize: '14px', lineHeight: '14px', letterSpacing: '-0.14px', color: '#FFF', textTransform: 'uppercase' }}>Space Planning</span>
                </div>
                <div style={{ flex: 1, borderRadius: '14px', overflow: 'hidden', marginBottom: '10px' }}>
                  <img src="/ID1-3.png" alt="Interior Design" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </div>
              <div className="portfolio-showcase-card">
                <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                  <span style={{ backgroundColor: '#000', padding: '9px', borderRadius: '5px', fontFamily: "'SF Pro', sans-serif", fontWeight: 590, fontSize: '14px', lineHeight: '14px', letterSpacing: '-0.14px', color: '#FFF', textTransform: 'uppercase' }}>Game Design</span>
                  <span style={{ backgroundColor: '#000', padding: '9px', borderRadius: '5px', fontFamily: "'SF Pro', sans-serif", fontWeight: 590, fontSize: '14px', lineHeight: '14px', letterSpacing: '-0.14px', color: '#FFF', textTransform: 'uppercase' }}>Asset Development</span>
                </div>
                <div style={{ flex: 1, borderRadius: '14px', overflow: 'hidden', marginBottom: '10px' }}>
                  <img src="/game1-5.png" alt="Game Design" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </div>
              <div className="portfolio-showcase-card">
                <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                  <span style={{ backgroundColor: '#000', padding: '9px', borderRadius: '5px', fontFamily: "'SF Pro', sans-serif", fontWeight: 590, fontSize: '14px', lineHeight: '14px', letterSpacing: '-0.14px', color: '#FFF', textTransform: 'uppercase' }}>Architecture</span>
                  <span style={{ backgroundColor: '#000', padding: '9px', borderRadius: '5px', fontFamily: "'SF Pro', sans-serif", fontWeight: 590, fontSize: '14px', lineHeight: '14px', letterSpacing: '-0.14px', color: '#FFF', textTransform: 'uppercase' }}>3D Animation</span>
                </div>
                <div style={{ flex: 1, borderRadius: '14px', overflow: 'hidden', marginBottom: '10px' }}>
                  <img src="/3d2-3.png" alt="3D Animation" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </div>
              <div className="portfolio-showcase-card">
                <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                  <span style={{ backgroundColor: '#000', padding: '9px', borderRadius: '5px', fontFamily: "'SF Pro', sans-serif", fontWeight: 590, fontSize: '14px', lineHeight: '14px', letterSpacing: '-0.14px', color: '#FFF', textTransform: 'uppercase' }}>Immersive UI</span>
                  <span style={{ backgroundColor: '#000', padding: '9px', borderRadius: '5px', fontFamily: "'SF Pro', sans-serif", fontWeight: 590, fontSize: '14px', lineHeight: '14px', letterSpacing: '-0.14px', color: '#FFF', textTransform: 'uppercase' }}>VFX</span>
                </div>
                <div style={{ flex: 1, borderRadius: '14px', overflow: 'hidden', marginBottom: '10px' }}>
                  <img src="/vfx3-2.jpg" alt="VFX" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </div>
              <div className="portfolio-showcase-card">
                <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                  <span style={{ backgroundColor: '#000', padding: '9px', borderRadius: '5px', fontFamily: "'SF Pro', sans-serif", fontWeight: 590, fontSize: '14px', lineHeight: '14px', letterSpacing: '-0.14px', color: '#FFF', textTransform: 'uppercase' }}>Web Design</span>
                  <span style={{ backgroundColor: '#000', padding: '9px', borderRadius: '5px', fontFamily: "'SF Pro', sans-serif", fontWeight: 590, fontSize: '14px', lineHeight: '14px', letterSpacing: '-0.14px', color: '#FFF', textTransform: 'uppercase' }}>Development</span>
                </div>
                <div style={{ flex: 1, borderRadius: '14px', overflow: 'hidden', marginBottom: '10px' }}>
                  <img src="/web1-3.png" alt="Web Development" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </div>
              {/* Set 2 (duplicate for seamless loop) */}
              <div className="portfolio-showcase-card">
                <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                  <span style={{ backgroundColor: '#000', padding: '9px', borderRadius: '5px', fontFamily: "'SF Pro', sans-serif", fontWeight: 590, fontSize: '14px', lineHeight: '14px', letterSpacing: '-0.14px', color: '#FFF', textTransform: 'uppercase' }}>UI/UX Design</span>
                  <span style={{ backgroundColor: '#000', padding: '9px', borderRadius: '5px', fontFamily: "'SF Pro', sans-serif", fontWeight: 590, fontSize: '14px', lineHeight: '14px', letterSpacing: '-0.14px', color: '#FFF', textTransform: 'uppercase' }}>Mobile App</span>
                </div>
                <div style={{ flex: 1, borderRadius: '14px', overflow: 'hidden', marginBottom: '10px' }}>
                  <img src="/UI1-3.png" alt="UI/UX Design" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </div>
              <div className="portfolio-showcase-card">
                <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                  <span style={{ backgroundColor: '#000', padding: '9px', borderRadius: '5px', fontFamily: "'SF Pro', sans-serif", fontWeight: 590, fontSize: '14px', lineHeight: '14px', letterSpacing: '-0.14px', color: '#FFF', textTransform: 'uppercase' }}>Interior Design</span>
                  <span style={{ backgroundColor: '#000', padding: '9px', borderRadius: '5px', fontFamily: "'SF Pro', sans-serif", fontWeight: 590, fontSize: '14px', lineHeight: '14px', letterSpacing: '-0.14px', color: '#FFF', textTransform: 'uppercase' }}>Space Planning</span>
                </div>
                <div style={{ flex: 1, borderRadius: '14px', overflow: 'hidden', marginBottom: '10px' }}>
                  <img src="/ID1-3.png" alt="Interior Design" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </div>
              <div className="portfolio-showcase-card">
                <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                  <span style={{ backgroundColor: '#000', padding: '9px', borderRadius: '5px', fontFamily: "'SF Pro', sans-serif", fontWeight: 590, fontSize: '14px', lineHeight: '14px', letterSpacing: '-0.14px', color: '#FFF', textTransform: 'uppercase' }}>Game Design</span>
                  <span style={{ backgroundColor: '#000', padding: '9px', borderRadius: '5px', fontFamily: "'SF Pro', sans-serif", fontWeight: 590, fontSize: '14px', lineHeight: '14px', letterSpacing: '-0.14px', color: '#FFF', textTransform: 'uppercase' }}>Asset Development</span>
                </div>
                <div style={{ flex: 1, borderRadius: '14px', overflow: 'hidden', marginBottom: '10px' }}>
                  <img src="/game1-5.png" alt="Game Design" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </div>
              <div className="portfolio-showcase-card">
                <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                  <span style={{ backgroundColor: '#000', padding: '9px', borderRadius: '5px', fontFamily: "'SF Pro', sans-serif", fontWeight: 590, fontSize: '14px', lineHeight: '14px', letterSpacing: '-0.14px', color: '#FFF', textTransform: 'uppercase' }}>Architecture</span>
                  <span style={{ backgroundColor: '#000', padding: '9px', borderRadius: '5px', fontFamily: "'SF Pro', sans-serif", fontWeight: 590, fontSize: '14px', lineHeight: '14px', letterSpacing: '-0.14px', color: '#FFF', textTransform: 'uppercase' }}>3D Animation</span>
                </div>
                <div style={{ flex: 1, borderRadius: '14px', overflow: 'hidden', marginBottom: '10px' }}>
                  <img src="/3d2-3.png" alt="3D Animation" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </div>
              <div className="portfolio-showcase-card">
                <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                  <span style={{ backgroundColor: '#000', padding: '9px', borderRadius: '5px', fontFamily: "'SF Pro', sans-serif", fontWeight: 590, fontSize: '14px', lineHeight: '14px', letterSpacing: '-0.14px', color: '#FFF', textTransform: 'uppercase' }}>Immersive UI</span>
                  <span style={{ backgroundColor: '#000', padding: '9px', borderRadius: '5px', fontFamily: "'SF Pro', sans-serif", fontWeight: 590, fontSize: '14px', lineHeight: '14px', letterSpacing: '-0.14px', color: '#FFF', textTransform: 'uppercase' }}>VFX</span>
                </div>
                <div style={{ flex: 1, borderRadius: '14px', overflow: 'hidden', marginBottom: '10px' }}>
                  <img src="/vfx3-2.jpg" alt="VFX" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </div>
              <div className="portfolio-showcase-card">
                <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                  <span style={{ backgroundColor: '#000', padding: '9px', borderRadius: '5px', fontFamily: "'SF Pro', sans-serif", fontWeight: 590, fontSize: '14px', lineHeight: '14px', letterSpacing: '-0.14px', color: '#FFF', textTransform: 'uppercase' }}>Web Design</span>
                  <span style={{ backgroundColor: '#000', padding: '9px', borderRadius: '5px', fontFamily: "'SF Pro', sans-serif", fontWeight: 590, fontSize: '14px', lineHeight: '14px', letterSpacing: '-0.14px', color: '#FFF', textTransform: 'uppercase' }}>Development</span>
                </div>
                <div style={{ flex: 1, borderRadius: '14px', overflow: 'hidden', marginBottom: '10px' }}>
                  <img src="/web1-3.png" alt="Web Development" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </div>
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <a href="/portfolio" className="btn btn-primary">Explore More</a>
          </div>
        </div>
      </section>

      {/* CTA + Footer Merged Section */}
      <section className="cta-footer-merged">
        <div className="cta-footer-content">
          <div className="cta-footer-main">
            <h2 className="cta-footer-title"><span className="cta-footer-bold">Lets talk.</span> We’d love <br />to hear from you</h2>
            <a href="/contact" className="cta-footer-btn">Book A Call</a>
          </div>
          <div className="cta-footer-bottom">
            <span className="cta-footer-copyright">Copyright © 2025 Funnkar Design House. All rights reserved</span>
            <span className="cta-footer-privacy"><a href="/privacy">Privacy & Terms</a></span>
            <div className="cta-footer-socials">
              <a href="https://www.linkedin.com/company/funnkar-design-house/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <img src="/linkedin-icon.svg" alt="LinkedIn" className="social-icon" />
              </a>
              <a href="https://www.instagram.com/funnkar_design_house?igsh=YnRvNjY5YmtuNHl5" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <img src="/instagram-icon.svg" alt="Instagram" className="social-icon" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
