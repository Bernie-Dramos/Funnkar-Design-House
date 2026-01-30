export const metadata = {
  title: 'Funnkar Design House',
  description: 'Creative digital agency specializing in branding, product design, graphics, VFX, animation, and web development. Modern, dark, and responsive.'
};
export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-landing">
        <div className="hero-background">
          <img src="/hero-vid.gif" alt="Hero Background" className="hero-gif" loading="lazy" />
        </div>
        <div className="hero-landing-overlay">
          <div className="hero-landing-bottom">
            <div className="hero-tagline-container">
              <h2 className="hero-tagline">Creative Digital Agency</h2>
            </div>
            <div className="scroll-indicator">
              <img src="/scroll-icon.png" alt="Scroll" className="scroll-icon" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section (Figma style) */}
      <section className="welcome-hero">
        <div className="welcome-container">
          <h1 className="welcome-title">We are Funnkar Design House.</h1>
          <p className="welcome-subtitle">Powered by a close-knit collective of creative designers and developers.</p>
        </div>

        {/* Welcome Image Slot */}
        <div className="welcome-image-slot">
          <img src="/laptop-roll.gif" alt="Laptop" className="welcome-laptop-img" style={{width: '1750px', height: '850px', borderRadius: '20px', opacity: 1, display: 'block'}} loading="lazy" />
        </div>
      </section>

      {/* About Section */}
      <section className="section" style={{backgroundColor: 'var(--color-bg-primary)'}}>
        <div className="container">
          <div className="grid" style={{display: 'grid', gridTemplateColumns: '2.5fr 1fr', alignItems: 'flex-start', gap: '2rem', marginLeft: '-150px'}}>
            <div>
              <p style={{fontFamily: "'Poppins', sans-serif", fontWeight: 500, fontSize: '48px', lineHeight: '58px', letterSpacing: '-0.15px', margin: 0}}>
                <span style={{color: '#FFFFFF'}}>As technology radically changes our <br />world, we help our clients adapt and <br />accelerate</span><span style={{color: '#999999'}}>–bringing their ideas to life, transforming their platforms and process lead.</span>
              </p>
            </div>
            <div style={{position: 'relative'}}>
              <div className="glow-effect">
                <img src="/video-editor.gif" alt="Design mockup" style={{width: '150%', borderRadius: '12px'}} loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Branding & Product Design Section */}
      <section className="section services-bg-section" style={{position: 'relative', overflow: 'hidden'}}>
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
        <div style={{position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none', background: 'linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.75) 65%, #000000 100%)'}}></div>
        <div className="container" style={{position: 'relative', zIndex: 2}}>
          <div style={{display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start', marginLeft: '-850px', marginTop: '50px'}}>
            <span className="service-number" style={{fontSize: '1.25rem', fontWeight: 300, letterSpacing: '-0.015em', color: '#E8E8E8'}}>01</span>
            <div className="grid grid-2" style={{alignItems: 'flex-start', gap: '4rem', marginBottom: '6rem'}}>
              <div className="service-content" style={{maxWidth: '500px'}}>
                <h2>Branding <br />& Product Design</h2>
                <p style={{fontSize: '1.125rem', lineHeight: 1.8, margin: '20rem 0 1rem'}}>
                  From concept to experience, we create products that ignite curiosity and empower engagement.
                </p>
                <a href="/contact" className="btn btn-primary" style={{marginTop: '2rem'}}>Book A Call</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Graphics Design Section */}
      <section className="section graphics-bg-section" style={{position: 'relative', overflow: 'hidden', backgroundColor: 'var(--color-bg-secondary)'}}>
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
                <h2>VFX &<br />Animation</h2>
                <p style={{fontSize: '1.125rem', margin: '20rem 0 1rem 0', lineHeight: 1.8}}>
                  Bring your vision to life with cutting-edge visual effects and animations. We create immersive experiences that captivate and inspire your audience.
                </p>
                <a href="/contact" className="btn btn-primary" style={{marginTop: '2rem'}}>Book A Call</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section story-section-with-bg" style={{position: 'relative', overflow: 'hidden'}}>
        <div className="story-bg" style={{position: 'absolute', inset: 0}}>
          <img src="/04.gif" alt="Story Background" className="story-bg-gif" loading="lazy"
            style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0}} />
          <div style={{position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none', background: 'linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.75) 65%, #000000 100%)'}}></div>
        </div>
        <div className="container" style={{position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', minHeight: '700px', height: '54vw', maxHeight: '950px', paddingTop: '30rem'}}>
          <p className="story-section-desc">
            For a decade, we have empowered brands to bring their ideas to life. Driven by our unique fusion of architect, animations &amp; creative designs.
          </p>
        </div>
      </section>

      {/* Portfolio Preview Section */}
      <section className="section portfolio-preview-section">
        <div className="portfolio-checker-container">
          <div className="portfolio-checker-grid">
            <div className="portfolio-item portfolio-item-1" style={{height: '100px'}}>
              <img src="/phone+laptop-scroll.gif" alt="Project 1" className="portfolio-gif" loading="lazy" />
            </div>
            <div className="portfolio-item portfolio-item-2" style={{height: '200px', width: '150px'}}>
              <video src="/Mob.mp4" alt="Project 2" className="portfolio-gif" loop autoPlay muted></video>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Partner Section */}
      <section className="section trusted-partner-section">
        <div className="trusted-partner-content">
          <h2 className="trusted-partner-title">A trusted creative partner for industry leaders<br />shaping the future and delivering it today.</h2>
        </div>
        <div className="trusted-partner-bg-below">
          <img src="/ship-vid.gif" alt="Ship Video" className="trusted-partner-gif" loading="lazy" />
          <div className="trusted-partner-overlay"></div>
        </div>
      </section>

      {/* CTA + Footer Section */}
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
  )
}