
'use client';

import { useEffect } from 'react';

export default function Services() {
  // On tablets and smaller, always show all service content (no hover reveal)
  useEffect(() => {
    const revealAll = () => {
      if (window.innerWidth <= 1024) {
        document.querySelectorAll('.service-number, .service-content').forEach(el => {
          el.classList.add('revealed');
        });
      }
    };
    revealAll();
    window.addEventListener('resize', revealAll);
    return () => window.removeEventListener('resize', revealAll);
  }, []);

  // Desktop hover effect for hero section
  useEffect(() => {
    const hero = document.querySelector('.services-hero');
    let def, hov;
    function onEnter() {
      if (def && hov) {
        def.style.opacity = 0;
        def.style.pointerEvents = 'none';
        hov.style.opacity = 1;
        hov.style.pointerEvents = 'auto';
      }
    }
    function onLeave() {
      if (def && hov) {
        def.style.opacity = 1;
        def.style.pointerEvents = 'auto';
        hov.style.opacity = 0;
        hov.style.pointerEvents = 'none';
      }
    }
    if (hero) {
      def = hero.querySelector('.services-hero-default-content');
      hov = hero.querySelector('.custom-portfolio-hero-hover-content');
      hero.addEventListener('mouseenter', onEnter);
      hero.addEventListener('mouseleave', onLeave);
    }
    return () => {
      if (hero) {
        hero.removeEventListener('mouseenter', onEnter);
        hero.removeEventListener('mouseleave', onLeave);
      }
    };
  }, []);

  return (
    <section className="hero-landing services-hero custom-portfolio-hero" style={{position: 'relative', overflow: 'hidden'}}>
      <div className="hero-background">
        <img src="/phone+laptop-scroll.gif" alt="Services Hero" className="hero-bg-media" loading="lazy" />
      </div>
      <div className="hero-landing-overlay" style={{position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 2, background: 'rgba(0,0,0,0.15)', padding: '4.5rem 0 3.5rem 0', boxSizing: 'border-box'}}>
        {/* Default state: centered title and description */}
        <div className="services-hero-default-content" style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 2, transition: 'opacity 0.4s', opacity: 1, pointerEvents: 'auto'}}>
          <h1 className="portfolio-title" style={{fontSize: 'clamp(2.2rem, 6vw, 4rem)', color: '#fff', marginBottom: '1.5rem', zIndex: 2}}>Services</h1>
          <div className="custom-portfolio-hero-description" style={{color: '#fff', fontSize: 'clamp(1.1rem, 2vw, 1.5rem)', fontWeight: 400, maxWidth: 700, lineHeight: 1.4, margin: 0, wordBreak: 'break-word', textShadow: '0 2px 8px rgba(0,0,0,0.25)'}}>
            From branding and UI/UX design to 3D animation and web development, we offer comprehensive creative services that bring your vision to life. Our multidisciplinary approach ensures every project receives expert attention across all creative domains.
          </div>
        </div>
        {/* Hover state: side-by-side layout with GIF */}
        <div className="custom-portfolio-hero-hover-content" style={{width: '100%', height: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', gap: '3.5rem', opacity: 0, pointerEvents: 'none', minHeight: '380px', flexWrap: 'nowrap', clear: 'both', position: 'absolute', top: 0, left: 0, zIndex: 3, transition: 'opacity 0.4s'}}>
          <div className="custom-portfolio-hero-content" style={{maxWidth: '60%', flex: '1 1 0%'}}>
            <h1 className="portfolio-title">Services</h1>
            <div className="custom-portfolio-hero-description">
              From branding and UI/UX design to 3D animation and web development, we offer comprehensive creative services that bring your vision to life. Our multidisciplinary approach ensures every project receives expert attention across all creative domains.
            </div>
          </div>
          <div className="portfolio-hero-video-wrap" style={{minWidth: '260px', maxWidth: '340px', marginLeft: '2.5rem', flexShrink: 0, flexBasis: '320px', display: 'flex', alignItems: 'center', height: '100%'}}>
            <img src="/video-editor.gif" alt="Video Editor Demo" className="portfolio-hero-demo-video" loading="lazy" style={{margin: '0 auto'}} />
          </div>
        </div>
      </div>
    </section>
  );
}
            pointerEvents: 'none'
          }}>
          <source src="/Graphics-Design.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div style={{position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none', background: 'linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.75) 65%, #000000 100%)'}}></div>
        <div className="container" style={{position: 'relative', zIndex: 2}}>
          <div style={{display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start', marginLeft: '-850px', marginTop: '50px'}}>
            <span className="service-number" style={{fontSize: '1.25rem', fontWeight: 300, letterSpacing: '-0.015em', color: '#E8E8E8'}}>02</span>
            <div className="grid grid-2" style={{alignItems: 'flex-start', gap: '4rem', marginBottom: '6rem'}}>
              <div className="service-content" style={{order: 1, maxWidth: '720px'}}>
                <h2>Graphics Design</h2>
                <p style={{fontSize: '1.125rem', margin: '20rem 0 1rem 0', lineHeight: 1.8}}>
                  Visual communication that tells your story. We design everything from marketing materials to digital assets that capture attention and drive engagement.
                </p>
                <a href="/contact" className="btn btn-primary" style={{marginTop: '2rem'}}>Book A Call</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VFX & Animation Section */}
      <section className="section vfx-bg-section" style={{position: 'relative', overflow: 'hidden', backgroundColor: 'var(--color-bg-secondary)'}}>
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
        <div style={{position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none', background: 'linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.75) 65%, #000000 100%)'}}></div>
        <div className="container" style={{position: 'relative', zIndex: 2}}>
          <div style={{display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start', marginLeft: '-850px', marginTop: '50px'}}>
            <span className="service-number" style={{fontSize: '1.25rem', fontWeight: 300, letterSpacing: '-0.015em', color: '#E8E8E8'}}>03</span>
            <div className="grid grid-2" style={{alignItems: 'flex-start', gap: '4rem'}}>
              <div className="service-content" style={{maxWidth: '720px'}}>
                <h2>VFX & <br />Animation</h2>
                <p style={{fontSize: '1.125rem', margin: '20rem 0 1rem 0', lineHeight: 1.8}}>
                  Bring your vision to life with cutting-edge visual effects and animations. We create immersive experiences that captivate and inspire your audience.
                </p>
                <a href="/contact" className="btn btn-primary" style={{marginTop: '2rem'}}>Book A Call</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3D Design & 3D Modeling Section */}
      <section className="section web-bg-section" style={{position: 'relative', overflow: 'hidden', backgroundColor: 'var(--color-bg-secondary)'}}>
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
        <div style={{position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none', background: 'linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.75) 65%, #000000 100%)'}}></div>
        <div className="container" style={{position: 'relative', zIndex: 2}}>
          <div style={{display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start', marginLeft: '-850px', marginTop: '50px'}}>
            <span className="service-number" style={{fontSize: '1.25rem', fontWeight: 300, letterSpacing: '-0.015em', color: '#E8E8E8'}}>04</span>
            <div className="grid grid-2" style={{alignItems: 'flex-start', gap: '4rem'}}>
              <div className="service-content" style={{order: 1, maxWidth: '720px'}}>
                <h2>3D Design & 3D Modeling</h2>
                <p style={{fontSize: '1.125rem', margin: '20rem 0 1rem 0', lineHeight: 1.8}}>
                  We turn concepts into precise, high-quality 3D assets ready for animation, visualization, or production. Each asset is designed with precision, realism, and pipeline compatibility in mind.
                </p>
                <a href="/contact" className="btn btn-primary" style={{marginTop: '2rem'}}>Book A Call</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Game Development Section */}
      <section className="section cta-bg-section" style={{position: 'relative', overflow: 'hidden', backgroundColor: 'var(--color-bg-secondary)'}}>
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
        <div style={{position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none', background: 'linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.75) 65%, #000000 100%)'}}></div>
        <div className="container" style={{position: 'relative', zIndex: 2}}>
          <div style={{display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start', marginLeft: '-850px', marginTop: '50px'}}>
            <span className="service-number" style={{fontSize: '1.25rem', fontWeight: 300, letterSpacing: '-0.015em', color: '#E8E8E8'}}>05</span>
            <div className="grid grid-2" style={{alignItems: 'flex-start', gap: '4rem'}}>
              <div className="service-content" style={{maxWidth: '720px'}}>
                <h2>Game Development</h2>
                <p style={{fontSize: '1.125rem', margin: '20rem 0 1rem 0', lineHeight: 1.8}}>
                  We develop immersive, well-balanced games with polished mechanics, environments, and player experiences. Worlds that invite exploration and systems that reward skill.
                </p>
                <a href="/contact" className="btn btn-primary" style={{marginTop: '2rem'}}>Book A Call</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Web Development Section */}
      <section className="section web-section" style={{position: 'relative', overflow: 'hidden', backgroundColor: 'var(--color-bg-secondary)'}}>
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
        <div style={{position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none', background: 'linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.75) 65%, #000000 100%)'}}></div>
        <div className="container" style={{position: 'relative', zIndex: 2}}>
          <div style={{display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start', marginLeft: '-850px', marginTop: '50px'}}>
            <span className="service-number" style={{fontSize: '1.25rem', fontWeight: 300, letterSpacing: '-0.015em', color: '#E8E8E8'}}>06</span>
            <div className="grid grid-2" style={{alignItems: 'flex-start', gap: '4rem'}}>
              <div className="service-content" style={{maxWidth: '720px'}}>
                <h2>Web Design & Development</h2>
                <p style={{fontSize: '1.125rem', margin: '20rem 0 1rem 0', lineHeight: 1.8}}>
                  From responsive interfaces to robust backend systems, every site is engineered for speed, usability, and brand impact.
                </p>
                <a href="/contact" className="btn btn-primary" style={{marginTop: '2rem'}}>Book A Call</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Showcase CTA Section */}
      <section className="section portfolio-cta-section" style={{position: 'relative', overflow: 'hidden', backgroundColor: '#000000', padding: '130px 80px 80px'}}>
        <div className="container" style={{position: 'relative', zIndex: 1, maxWidth: '1410px'}}>
          <div style={{textAlign: 'left', marginBottom: '4rem'}}>
            <h2 style={{fontFamily: "'Poppins', sans-serif", fontWeight: 500, fontSize: '48px', lineHeight: '53px', letterSpacing: '-0.15px', margin: 0, verticalAlign: 'middle'}}>
              <span style={{color: '#FFFFFF'}}>Every element is thoughtfully crafted to not only captivate </span><span style={{color: '#999999'}}>but also deliver seamless experiences ensuring your brand stands apart.</span>
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
          <div className="rolling-gallery" style={{marginBottom: '2rem'}}>
            <div className="rolling-track">
              {/* Set 1 - Using Portfolio Card Images */}
              <div className="portfolio-showcase-card">
                <div style={{display: 'flex', gap: '10px', marginBottom: '10px'}}>
                  <span style={{backgroundColor: '#000', padding: '9px', borderRadius: '5px', fontFamily: "'SF Pro', sans-serif", fontWeight: 590, fontSize: '14px', lineHeight: '14px', letterSpacing: '-0.14px', color: '#FFF', textTransform: 'uppercase'}}>UI/UX Design</span>
                  <span style={{backgroundColor: '#000', padding: '9px', borderRadius: '5px', fontFamily: "'SF Pro', sans-serif", fontWeight: 590, fontSize: '14px', lineHeight: '14px', letterSpacing: '-0.14px', color: '#FFF', textTransform: 'uppercase'}}>Mobile App</span>
                </div>
                <div style={{flex: 1, borderRadius: '14px', overflow: 'hidden', marginBottom: '10px'}}>
                  <img src="/UI1-3.png" alt="UI/UX Design" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                </div>
              </div>
              <div className="portfolio-showcase-card">
                <div style={{display: 'flex', gap: '10px', marginBottom: '10px'}}>
                  <span style={{backgroundColor: '#000', padding: '9px', borderRadius: '5px', fontFamily: "'SF Pro', sans-serif", fontWeight: 590, fontSize: '14px', lineHeight: '14px', letterSpacing: '-0.14px', color: '#FFF', textTransform: 'uppercase'}}>Interior Design</span>
                  <span style={{backgroundColor: '#000', padding: '9px', borderRadius: '5px', fontFamily: "'SF Pro', sans-serif", fontWeight: 590, fontSize: '14px', lineHeight: '14px', letterSpacing: '-0.14px', color: '#FFF', textTransform: 'uppercase'}}>Space Planning</span>
                </div>
                <div style={{flex: 1, borderRadius: '14px', overflow: 'hidden', marginBottom: '10px'}}>
                  <img src="/ID1-3.png" alt="Interior Design" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                </div>
              </div>
              <div className="portfolio-showcase-card">
                <div style={{display: 'flex', gap: '10px', marginBottom: '10px'}}>
                  <span style={{backgroundColor: '#000', padding: '9px', borderRadius: '5px', fontFamily: "'SF Pro', sans-serif", fontWeight: 590, fontSize: '14px', lineHeight: '14px', letterSpacing: '-0.14px', color: '#FFF', textTransform: 'uppercase'}}>Game Design</span>
                  <span style={{backgroundColor: '#000', padding: '9px', borderRadius: '5px', fontFamily: "'SF Pro', sans-serif", fontWeight: 590, fontSize: '14px', lineHeight: '14px', letterSpacing: '-0.14px', color: '#FFF', textTransform: 'uppercase'}}>Asset Development</span>
                </div>
                <div style={{flex: 1, borderRadius: '14px', overflow: 'hidden', marginBottom: '10px'}}>
                  <img src="/game1-5.png" alt="Game Design" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                </div>
              </div>
              <div className="portfolio-showcase-card">
                <div style={{display: 'flex', gap: '10px', marginBottom: '10px'}}>
                  <span style={{backgroundColor: '#000', padding: '9px', borderRadius: '5px', fontFamily: "'SF Pro', sans-serif", fontWeight: 590, fontSize: '14px', lineHeight: '14px', letterSpacing: '-0.14px', color: '#FFF', textTransform: 'uppercase'}}>Architecture</span>
                  <span style={{backgroundColor: '#000', padding: '9px', borderRadius: '5px', fontFamily: "'SF Pro', sans-serif", fontWeight: 590, fontSize: '14px', lineHeight: '14px', letterSpacing: '-0.14px', color: '#FFF', textTransform: 'uppercase'}}>3D Animation</span>
                </div>
                <div style={{flex: 1, borderRadius: '14px', overflow: 'hidden', marginBottom: '10px'}}>
                  <img src="/3d2-3.png" alt="3D Animation" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                </div>
              </div>
              <div className="portfolio-showcase-card">
                <div style={{display: 'flex', gap: '10px', marginBottom: '10px'}}>
                  <span style={{backgroundColor: '#000', padding: '9px', borderRadius: '5px', fontFamily: "'SF Pro', sans-serif", fontWeight: 590, fontSize: '14px', lineHeight: '14px', letterSpacing: '-0.14px', color: '#FFF', textTransform: 'uppercase'}}>Immersive UI</span>
                  <span style={{backgroundColor: '#000', padding: '9px', borderRadius: '5px', fontFamily: "'SF Pro', sans-serif", fontWeight: 590, fontSize: '14px', lineHeight: '14px', letterSpacing: '-0.14px', color: '#FFF', textTransform: 'uppercase'}}>VFX</span>
                </div>
                <div style={{flex: 1, borderRadius: '14px', overflow: 'hidden', marginBottom: '10px'}}>
                  <img src="/vfx3-2.jpg" alt="VFX" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                </div>
              </div>
              <div className="portfolio-showcase-card">
                <div style={{display: 'flex', gap: '10px', marginBottom: '10px'}}>
                  <span style={{backgroundColor: '#000', padding: '9px', borderRadius: '5px', fontFamily: "'SF Pro', sans-serif", fontWeight: 590, fontSize: '14px', lineHeight: '14px', letterSpacing: '-0.14px', color: '#FFF', textTransform: 'uppercase'}}>Web Design</span>
                  <span style={{backgroundColor: '#000', padding: '9px', borderRadius: '5px', fontFamily: "'SF Pro', sans-serif", fontWeight: 590, fontSize: '14px', lineHeight: '14px', letterSpacing: '-0.14px', color: '#FFF', textTransform: 'uppercase'}}>Development</span>
                </div>
                <div style={{flex: 1, borderRadius: '14px', overflow: 'hidden', marginBottom: '10px'}}>
                  <img src="/web1-3.png" alt="Web Development" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                </div>
              </div>
              {/* Set 2 (duplicate for seamless loop) */}
              <div className="portfolio-showcase-card">
                <div style={{display: 'flex', gap: '10px', marginBottom: '10px'}}>
                  <span style={{backgroundColor: '#000', padding: '9px', borderRadius: '5px', fontFamily: "'SF Pro', sans-serif", fontWeight: 590, fontSize: '14px', lineHeight: '14px', letterSpacing: '-0.14px', color: '#FFF', textTransform: 'uppercase'}}>UI/UX Design</span>
                  <span style={{backgroundColor: '#000', padding: '9px', borderRadius: '5px', fontFamily: "'SF Pro', sans-serif", fontWeight: 590, fontSize: '14px', lineHeight: '14px', letterSpacing: '-0.14px', color: '#FFF', textTransform: 'uppercase'}}>Mobile App</span>
                </div>
                <div style={{flex: 1, borderRadius: '14px', overflow: 'hidden', marginBottom: '10px'}}>
                  <img src="/UI1-3.png" alt="UI/UX Design" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                </div>
              </div>
              <div className="portfolio-showcase-card">
                <div style={{display: 'flex', gap: '10px', marginBottom: '10px'}}>
                  <span style={{backgroundColor: '#000', padding: '9px', borderRadius: '5px', fontFamily: "'SF Pro', sans-serif", fontWeight: 590, fontSize: '14px', lineHeight: '14px', letterSpacing: '-0.14px', color: '#FFF', textTransform: 'uppercase'}}>Interior Design</span>
                  <span style={{backgroundColor: '#000', padding: '9px', borderRadius: '5px', fontFamily: "'SF Pro', sans-serif", fontWeight: 590, fontSize: '14px', lineHeight: '14px', letterSpacing: '-0.14px', color: '#FFF', textTransform: 'uppercase'}}>Space Planning</span>
                </div>
                <div style={{flex: 1, borderRadius: '14px', overflow: 'hidden', marginBottom: '10px'}}>
                  <img src="/ID1-3.png" alt="Interior Design" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                </div>
              </div>
              <div className="portfolio-showcase-card">
                <div style={{display: 'flex', gap: '10px', marginBottom: '10px'}}>
                  <span style={{backgroundColor: '#000', padding: '9px', borderRadius: '5px', fontFamily: "'SF Pro', sans-serif", fontWeight: 590, fontSize: '14px', lineHeight: '14px', letterSpacing: '-0.14px', color: '#FFF', textTransform: 'uppercase'}}>Game Design</span>
                  <span style={{backgroundColor: '#000', padding: '9px', borderRadius: '5px', fontFamily: "'SF Pro', sans-serif", fontWeight: 590, fontSize: '14px', lineHeight: '14px', letterSpacing: '-0.14px', color: '#FFF', textTransform: 'uppercase'}}>Asset Development</span>
                </div>
                <div style={{flex: 1, borderRadius: '14px', overflow: 'hidden', marginBottom: '10px'}}>
                  <img src="/game1-5.png" alt="Game Design" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                </div>
              </div>
              <div className="portfolio-showcase-card">
                <div style={{display: 'flex', gap: '10px', marginBottom: '10px'}}>
                  <span style={{backgroundColor: '#000', padding: '9px', borderRadius: '5px', fontFamily: "'SF Pro', sans-serif", fontWeight: 590, fontSize: '14px', lineHeight: '14px', letterSpacing: '-0.14px', color: '#FFF', textTransform: 'uppercase'}}>Architecture</span>
                  <span style={{backgroundColor: '#000', padding: '9px', borderRadius: '5px', fontFamily: "'SF Pro', sans-serif", fontWeight: 590, fontSize: '14px', lineHeight: '14px', letterSpacing: '-0.14px', color: '#FFF', textTransform: 'uppercase'}}>3D Animation</span>
                </div>
                <div style={{flex: 1, borderRadius: '14px', overflow: 'hidden', marginBottom: '10px'}}>
                  <img src="/3d2-3.png" alt="3D Animation" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                </div>
              </div>
              <div className="portfolio-showcase-card">
                <div style={{display: 'flex', gap: '10px', marginBottom: '10px'}}>
                  <span style={{backgroundColor: '#000', padding: '9px', borderRadius: '5px', fontFamily: "'SF Pro', sans-serif", fontWeight: 590, fontSize: '14px', lineHeight: '14px', letterSpacing: '-0.14px', color: '#FFF', textTransform: 'uppercase'}}>Immersive UI</span>
                  <span style={{backgroundColor: '#000', padding: '9px', borderRadius: '5px', fontFamily: "'SF Pro', sans-serif", fontWeight: 590, fontSize: '14px', lineHeight: '14px', letterSpacing: '-0.14px', color: '#FFF', textTransform: 'uppercase'}}>VFX</span>
                </div>
                <div style={{flex: 1, borderRadius: '14px', overflow: 'hidden', marginBottom: '10px'}}>
                  <img src="/vfx3-2.jpg" alt="VFX" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                </div>
              </div>
              <div className="portfolio-showcase-card">
                <div style={{display: 'flex', gap: '10px', marginBottom: '10px'}}>
                  <span style={{backgroundColor: '#000', padding: '9px', borderRadius: '5px', fontFamily: "'SF Pro', sans-serif", fontWeight: 590, fontSize: '14px', lineHeight: '14px', letterSpacing: '-0.14px', color: '#FFF', textTransform: 'uppercase'}}>Web Design</span>
                  <span style={{backgroundColor: '#000', padding: '9px', borderRadius: '5px', fontFamily: "'SF Pro', sans-serif", fontWeight: 590, fontSize: '14px', lineHeight: '14px', letterSpacing: '-0.14px', color: '#FFF', textTransform: 'uppercase'}}>Development</span>
                </div>
                <div style={{flex: 1, borderRadius: '14px', overflow: 'hidden', marginBottom: '10px'}}>
                  <img src="/web1-3.png" alt="Web Development" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                </div>
              </div>
            </div>
          </div>
          <div style={{textAlign: 'center'}}>
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
      {/* End main Services component */}
