'use client';

export default function ImageGuide() {
  const imageSections = [
    {
      title: 'Landing Page (index.html)',
      images: [
        {
          name: 'hero-laptop-glow.png',
          specs: '1920x1080px • Hero section laptop with blue glow',
          url: 'https://via.placeholder.com/1920x1080/1A1A1A/5B9EFF?text=Hero+Laptop'
        },
        {
          name: 'laptop-mockup.png',
          specs: '800x600px • About section mockup',
          url: 'https://via.placeholder.com/800x600/1A1A1A/5B9EFF?text=Laptop+Mockup'
        },
        {
          name: 'phone-mockup.png',
          specs: '800x600px • Branding section phone',
          url: 'https://via.placeholder.com/800x600/1A1A1A/5B9EFF?text=Phone+Mockup'
        },
        {
          name: 'portfolio-1.jpg, portfolio-2.jpg, portfolio-3.jpg',
          specs: '600x400px each • Portfolio preview cards',
          url: 'https://via.placeholder.com/600x400/1A1A1A/5B9EFF?text=Portfolio+Item'
        }
      ]
    },
    {
      title: 'Services Page (services.html)',
      images: [
        {
          name: 'service-branding.png',
          specs: '800x600px • Branding service illustration',
          url: 'https://via.placeholder.com/800x600/1A1A1A/5B9EFF?text=Branding+Service'
        },
        {
          name: 'service-graphics.jpg',
          specs: '800x600px • Graphics service image',
          url: 'https://via.placeholder.com/800x600/1A1A1A/5B9EFF?text=Graphics+Service'
        },
        {
          name: 'service-vfx.jpg',
          specs: '800x600px • VFX service image',
          url: 'https://via.placeholder.com/800x600/1A1A1A/5B9EFF?text=VFX+Service'
        }
      ]
    },
    {
      title: 'Portfolio Page (portfolio.html)',
      images: [
        {
          name: 'portfolio-4.jpg to portfolio-9.jpg',
          specs: '600x400px each • Portfolio project thumbnails',
          url: 'https://via.placeholder.com/600x400/1A1A1A/5B9EFF?text=Portfolio+Project'
        }
      ]
    },
    {
      title: 'Project Detail Page (project.html)',
      images: [
        {
          name: 'project-hero.jpg',
          specs: '1200x800px • Project main hero image',
          url: 'https://via.placeholder.com/1200x800/1A1A1A/5B9EFF?text=Project+Hero'
        },
        {
          name: 'project-1.jpg to project-4.jpg',
          specs: '1200x800px each • Project detail images',
          url: 'https://via.placeholder.com/1200x800/1A1A1A/5B9EFF?text=Project+Detail'
        }
      ]
    }
  ];

  return (
    <div style={{
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif',
      backgroundColor: '#0A0A0A',
      color: '#FFFFFF',
      padding: '2rem',
      minHeight: '100vh'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h1 style={{
          textAlign: 'center',
          marginBottom: '1rem',
          color: '#5B9EFF'
        }}>
          📸 Image Placeholder Guide
        </h1>
        <p style={{
          textAlign: 'center',
          color: '#B0B0B0',
          marginBottom: '3rem',
          maxWidth: '800px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          Use this guide to generate placeholder images for your Funnkar Design House website.
          Visit <a href="https://placeholder.com" style={{color: '#5B9EFF'}} target="_blank" rel="noopener noreferrer">placeholder.com</a> or
          <a href="https://via.placeholder.com" style={{color: '#5B9EFF'}} target="_blank" rel="noopener noreferrer">via.placeholder.com</a>
          to quickly generate placeholder images with the exact dimensions needed.
        </p>

        {imageSections.map((section, sectionIndex) => (
          <div key={sectionIndex} style={{
            backgroundColor: '#1A1A1A',
            padding: '2rem',
            borderRadius: '12px',
            marginBottom: '2rem'
          }}>
            <h2 style={{
              color: '#5B9EFF',
              marginBottom: '1rem',
              fontSize: '1.5rem'
            }}>
              {section.title}
            </h2>
            <div style={{
              display: 'grid',
              gap: '1rem'
            }}>
              {section.images.map((image, imageIndex) => (
                <div key={imageIndex} style={{
                  backgroundColor: '#0A0A0A',
                  padding: '1rem',
                  borderRadius: '8px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  border: '1px solid rgba(91, 158, 255, 0.2)'
                }}>
                  <div style={{flex: 1}}>
                    <div style={{
                      fontWeight: 600,
                      color: '#FFFFFF',
                      marginBottom: '0.25rem'
                    }}>
                      {image.name}
                    </div>
                    <div style={{
                      fontSize: '0.875rem',
                      color: '#B0B0B0'
                    }}>
                      {image.specs}
                    </div>
                  </div>
                  <a
                    href={image.url}
                    className="btn"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      padding: '0.5rem 1rem',
                      backgroundColor: '#5B9EFF',
                      color: 'white',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      textDecoration: 'none',
                      display: 'inline-block',
                      fontSize: '0.875rem'
                    }}
                    onMouseOver={(e) => e.target.style.backgroundColor = '#4A8ED9'}
                    onMouseOut={(e) => e.target.style.backgroundColor = '#5B9EFF'}
                  >
                    Generate
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Note */}
        <div style={{
          backgroundColor: 'rgba(91, 158, 255, 0.1)',
          border: '1px solid rgba(91, 158, 255, 0.3)',
          padding: '1rem',
          borderRadius: '8px',
          marginTop: '2rem',
          color: '#B0B0B0'
        }}>
          <strong>📝 Note:</strong> These are placeholder dimensions. For production:
          <ul style={{marginTop: '0.5rem', marginLeft: '1.5rem'}}>
            <li>Use high-quality images from your Figma designs</li>
            <li>Source from <a href="https://unsplash.com" style={{color: '#5B9EFF'}} target="_blank" rel="noopener noreferrer">Unsplash</a> or <a href="https://pexels.com" style={{color: '#5B9EFF'}} target="_blank" rel="noopener noreferrer">Pexels</a> for stock photos</li>
            <li>Optimize all images using <a href="https://tinypng.com" style={{color: '#5B9EFF'}} target="_blank" rel="noopener noreferrer">TinyPNG</a> or <a href="https://squoosh.app" style={{color: '#5B9EFF'}} target="_blank" rel="noopener noreferrer">Squoosh</a></li>
            <li>Save images in <code style={{backgroundColor: '#0A0A0A', padding: '0.25rem 0.5rem', borderRadius: '4px', color: '#5B9EFF'}}>assets/images/</code> directory with exact filenames shown above</li>
          </ul>
        </div>
      </div>
    </div>
  );
}