'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'

const projectData = {
  1: {
    title: 'Language Learning App',
    date: 'Created: March 15, 2024',
    images: [
      '/UI1-1.png',
      '/UI1-2.png',
      '/UI1-3.png',
      '/UI1-4.png',
      '/UI1-5.png'
    ],
    intro: 'With the growing demand for digital health solutions, fitness apps have become essential tools for individuals seeking to maintain active lifestyles. However, many existing apps suffer from cluttered interfaces, lack of personalization, and poor user engagement, leading to low retention rates and abandoned fitness goals.',
    context: 'African languages like Shona possess deep cultural heritage and are spoken by millions, yet they receive minimal representation in mainstream digital learning platforms. Existing apps often overlook them in favor of more widely studied languages, leaving both heritage learners and international enthusiasts with limited high-quality, modern resources.',
    problem: 'The scarcity of polished, mobile-first educational tools for African languages creates significant obstacles for learners worldwide. Many available materials suffer from outdated content, poor user experience, lack of cultural depth, or unreliable peer interaction, making consistent progress and authentic practice difficult for those eager to master languages such as Shona.'
  },
  2: {
    title: 'Residential Interior Design',
    date: 'Created: February 20, 2024',
    images: [
      '/ID1-1.png',
      '/ID1-2.png',
      '/ID1-3.png',
      '/ID1-4.png',
      '/ID1-5.png'
    ],
    intro: 'Modern residential spaces require thoughtful design that balances functionality, aesthetics, and personal expression. Our approach focuses on creating environments that reflect the unique lifestyle and personality of each client.',
    context: 'The residential design market demands innovative solutions that address contemporary living needs while maintaining timeless appeal. From compact urban apartments to spacious family homes, each project presents unique challenges and opportunities.',
    problem: 'Many residential spaces lack cohesive design direction, resulting in environments that feel disconnected and impersonal. Without professional guidance, homeowners often struggle to create spaces that truly reflect their lifestyle and meet their functional needs.'
  },
  3: {
    title: 'Mobile Game Development',
    date: 'Created: January 10, 2024',
    images: [
      '/game1-1.png',
      '/game1-2.png',
      '/game1-3.png',
      '/game1-4.png',
      '/game1-5.png'
    ],
    intro: 'Mobile gaming represents one of the most dynamic and profitable sectors in the entertainment industry. Creating engaging, addictive games requires a deep understanding of player psychology, technical constraints, and market trends.',
    context: 'The mobile gaming landscape is highly competitive, with millions of games vying for user attention. Success requires innovative gameplay mechanics, stunning visuals, and seamless user experiences that keep players engaged for extended periods.',
    problem: 'Many mobile games fail to achieve commercial success due to poor game design, technical issues, or failure to connect with target audiences. Creating a game that stands out in a crowded market requires expertise in multiple disciplines.'
  },
  4: {
    title: 'Architectural Visualization',
    date: 'Created: December 5, 2023',
    images: [
      '/3d1-1.png',
      '/3d1-2.png',
      '/3d1-3.png',
      '/3d1-4.png',
      '/3d1-5.png'
    ],
    intro: 'Architectural visualization brings building designs to life through photorealistic 3D renderings. This technology enables architects, developers, and clients to experience spaces before construction begins.',
    context: 'The construction industry increasingly relies on digital visualization to communicate design intent and secure project approvals. High-quality renderings help stakeholders make informed decisions and reduce costly design changes.',
    problem: 'Traditional architectural drawings often fail to convey the true character and atmosphere of proposed buildings. Without effective visualization tools, it becomes challenging to communicate design vision and gain stakeholder buy-in.'
  },
  5: {
    title: 'Immersive VFX Experience',
    date: 'Created: November 15, 2023',
    images: [
      '/vfx1-1.png',
      '/vfx1-2.png',
      '/vfx1-3.png',
      '/vfx1-4.png',
      '/vfx1-5.png'
    ],
    intro: 'Visual effects technology pushes the boundaries of storytelling, creating immersive experiences that transport audiences to new worlds. From blockbuster films to interactive media, VFX enhances narrative impact.',
    context: 'The entertainment industry demands increasingly sophisticated visual effects that seamlessly blend practical elements with digital enhancements. This requires technical expertise and artistic vision working in harmony.',
    problem: 'Creating convincing visual effects requires overcoming significant technical challenges while maintaining artistic integrity. Poorly executed VFX can break immersion and detract from the overall viewing experience.'
  },
  6: {
    title: 'E-commerce Platform',
    date: 'Created: October 20, 2023',
    images: [
      '/web1-1.png',
      '/web1-2.png',
      '/web1-3.png',
      '/web1-4.png',
      '/web1-5.png'
    ],
    intro: 'Modern e-commerce platforms must deliver seamless shopping experiences across all devices. Success depends on intuitive navigation, fast performance, and conversion-optimized design.',
    context: 'The digital marketplace is intensely competitive, with consumers having countless options at their fingertips. Standing out requires exceptional user experience and technical performance.',
    problem: 'Many e-commerce sites suffer from poor usability, slow loading times, and high abandonment rates. Creating a platform that converts visitors into customers requires careful attention to every aspect of the user journey.'
  },
  7: {
    title: 'UI/UX Mobile Application',
    date: 'Created: September 8, 2023',
    images: [
      '/UI2-1.png',
      '/UI2-2.png',
      '/UI2-3.png',
      '/UI2-4.png',
      '/UI2-5.png'
    ],
    intro: 'Mobile applications must balance beautiful design with functional excellence. Every interaction should feel intuitive and delightful, creating lasting connections with users.',
    context: 'The mobile app market demands constant innovation to meet evolving user expectations. Success requires understanding user behavior, technical constraints, and market dynamics.',
    problem: 'Poorly designed mobile apps frustrate users and damage brand reputation. Creating applications that users love requires deep expertise in both design and technology.'
  },
  8: {
    title: 'Commercial Interior Design',
    date: 'Created: August 12, 2023',
    images: [
      '/ID2-1.png',
      '/ID2-2.png',
      '/ID2-3.png',
      '/ID2-4.png',
      '/ID2-5.png'
    ],
    intro: 'Commercial spaces must communicate brand values while optimizing functionality. Our designs create environments that enhance productivity and leave lasting impressions on clients and employees.',
    context: 'Commercial real estate represents significant investment, requiring designs that maximize return on investment. Every design decision impacts business performance and brand perception.',
    problem: 'Generic commercial spaces fail to differentiate businesses and engage customers. Effective commercial design requires understanding business objectives and user psychology.'
  },
  9: {
    title: 'Game Level Design',
    date: 'Created: July 15, 2023',
    images: [
      '/game2-1.png',
      '/game2-2.png',
      '/game2-3.png',
      '/game2-4.png',
      '/game2-5.png'
    ],
    intro: 'Game level design creates the foundation for player experiences. Each level must balance challenge, pacing, and narrative progression to maintain engagement.',
    context: 'Video games represent complex interactive experiences where every design element contributes to the overall player journey. Level design bridges gameplay mechanics and storytelling.',
    problem: 'Poor level design leads to frustrating player experiences and game abandonment. Creating levels that are both challenging and enjoyable requires careful balance and iteration.'
  },
  10: {
    title: '3D Architectural Rendering',
    date: 'Created: June 20, 2023',
    images: [
      '/3d2-1.png',
      '/3d2-2.png',
      '/3d2-3.png',
      '/3d2-4.png',
      '/3d2-5.png'
    ],
    intro: 'Architectural rendering transforms technical drawings into compelling visual narratives. Our 3D visualizations help clients envision their future spaces with stunning realism.',
    context: 'The architecture industry increasingly relies on digital tools to communicate design intent. High-quality renderings accelerate project approval and reduce misunderstandings.',
    problem: 'Traditional presentation methods often fail to convey the full impact of architectural designs. Digital rendering provides the clarity and impact needed for successful project communication.'
  },
  11: {
    title: 'Simulation VFX Project',
    date: 'Created: May 10, 2023',
    images: [
      '/vfx2-1.png',
      '/vfx2-2.png',
      '/vfx2-3.png',
      '/vfx2-4.png',
      '/vfx2-5.png'
    ],
    intro: 'Simulation effects create realistic physical phenomena that enhance visual storytelling. From fluid dynamics to particle systems, these effects add depth and realism to digital content.',
    context: 'Modern visual effects demand increasingly complex simulations that accurately represent real-world physics. This requires both technical expertise and artistic sensibility.',
    problem: 'Inaccurate or poorly executed simulations break immersion and reduce production value. Creating convincing effects requires understanding both physics and visual aesthetics.'
  },
  12: {
    title: 'Web Development Platform',
    date: 'Created: April 5, 2023',
    images: [
      '/web2-1.png',
      '/web2-2.png',
      '/web2-3.png',
      '/web2-4.png',
      '/web2-5.png'
    ],
    intro: 'Modern web platforms must deliver exceptional performance and user experience. Our development approach combines cutting-edge technology with user-centered design principles.',
    context: 'The web development landscape evolves rapidly, requiring constant adaptation to new technologies and user expectations. Success demands both technical excellence and design sensibility.',
    problem: 'Outdated web platforms fail to meet modern performance and usability standards. Creating web experiences that engage users requires comprehensive technical and design expertise.'
  },
  13: {
    title: 'Graphics Design Collection',
    date: 'Created: March 15, 2023',
    images: [
      '/UI3-1.png',
      '/UI3-2.png',
      '/UI3-3.png',
      '/UI3-4.png',
      '/UI3-5.png'
    ],
    intro: 'Graphic design communicates complex ideas through visual language. Our work transforms concepts into compelling visual narratives that resonate with target audiences.',
    context: 'Effective graphic design requires understanding both visual principles and communication theory. Every design decision impacts how audiences perceive and interact with content.',
    problem: 'Poor graphic design fails to communicate effectively and diminishes brand credibility. Creating designs that truly connect with audiences requires both technical skill and creative vision.'
  },
  14: {
    title: 'Office Interior Design',
    date: 'Created: February 20, 2023',
    images: [
      '/ID3-1.png',
      '/ID3-2.png',
      '/ID3-3.png',
      '/ID3-4.png',
      '/ID3-5.png'
    ],
    intro: 'Office design impacts employee productivity, well-being, and company culture. Our designs create workspaces that inspire creativity and foster collaboration.',
    context: 'The modern workplace requires flexible, technology-enabled spaces that support diverse work styles. Office design must balance functionality with employee satisfaction.',
    problem: 'Traditional office layouts fail to meet contemporary work needs and reduce employee engagement. Effective office design requires understanding modern work dynamics.'
  },
  15: {
    title: 'Mobile Game UI/UX',
    date: 'Created: January 10, 2023',
    images: [
      '/game3-1.png',
      '/game3-2.png',
      '/game3-3.png',
      '/game3-4.png',
      '/game3-5.png'
    ],
    intro: 'Game interface design creates the bridge between players and gameplay. Intuitive, engaging interfaces enhance immersion and player satisfaction.',
    context: 'Mobile game design must accommodate small screens and touch interactions while delivering rich, engaging experiences. Every pixel contributes to player enjoyment.',
    problem: 'Poor game UI/UX leads to player frustration and game abandonment. Creating interfaces that enhance rather than hinder gameplay requires specialized expertise.'
  },
  16: {
    title: 'Motion Design Animation',
    date: 'Created: December 5, 2022',
    images: [
      '/3d3-1.png',
      '/3d3-2.png',
      '/3d3-3.png',
      '/3d3-4.png',
      '/3d3-5.png'
    ],
    intro: 'Motion design brings static content to life through purposeful animation. Our work creates dynamic visual experiences that captivate and inform audiences.',
    context: 'Digital content increasingly incorporates motion to enhance communication. Effective motion design requires understanding timing, pacing, and visual hierarchy.',
    problem: 'Poorly executed motion design distracts rather than enhances content. Creating animations that support communication requires both technical skill and design sensibility.'
  },
  17: {
    title: 'World-Building VFX',
    date: 'Created: November 15, 2022',
    images: [
      '/vfx3-1.png',
      '/vfx3-2.png',
      '/vfx3-3.png',
      '/vfx3-4.png',
      '/vfx3-5.png'
    ],
    intro: 'World-building VFX creates immersive environments that transport audiences. Our work builds believable worlds that enhance storytelling and viewer engagement.',
    context: 'Visual effects for world-building require creating environments that feel lived-in and authentic. This demands attention to detail and environmental storytelling.',
    problem: 'Generic or poorly constructed virtual worlds break immersion and reduce production quality. Effective world-building requires both technical and narrative expertise.'
  },
  18: {
    title: 'iOS App Development',
    date: 'Created: October 20, 2022',
    images: [
      '/web3-1.png',
      '/web3-2.png',
      '/web3-3.png',
      '/web3-4.png',
      '/web3-5.png'
    ],
    intro: 'iOS app development combines technical excellence with intuitive design. Our applications deliver native experiences that users love and developers can maintain.',
    context: 'The iOS ecosystem demands adherence to platform conventions while allowing for innovative experiences. Success requires understanding both Apple\'s design language and user expectations.',
    problem: 'Poorly developed iOS apps frustrate users and damage developer reputation. Creating applications that meet Apple\'s standards while delighting users requires specialized expertise.'
  }
}

export default function ProjectDetail() {
  const params = useParams()
  const router = useRouter()
  const projectId = parseInt(params.id)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [imageOpacity, setImageOpacity] = useState(1)

  const project = projectData[projectId]

  if (!project) {
    return <div>Project not found</div>
  }

  const switchMainImage = (newIndex) => {
    if (newIndex === currentImageIndex) return
    
    setImageOpacity(0)
    setTimeout(() => {
      setCurrentImageIndex(newIndex)
      setImageOpacity(1)
    }, 150)
  }

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % project.images.length
    switchMainImage(nextIndex)
  }

  const prevImage = () => {
    const prevIndex = (currentImageIndex - 1 + project.images.length) % project.images.length
    switchMainImage(prevIndex)
  }

  const switchToImage = (index) => {
    switchMainImage(index)
  }

  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case 'ArrowLeft':
          prevImage()
          break
        case 'ArrowRight':
          nextImage()
          break
        case 'Escape':
          goBack()
          break
        default:
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentImageIndex])

  const goBack = () => {
    // Restore scroll position and page from sessionStorage
    const savedScrollY = sessionStorage.getItem('portfolioScrollY')
    const savedPage = sessionStorage.getItem('portfolioPage')

    if (savedPage) {
      router.push(`/portfolio?page=${savedPage}`)
    } else {
      router.push('/portfolio')
    }

    // Restore scroll position after navigation
    setTimeout(() => {
      if (savedScrollY) {
        window.scrollTo(0, parseInt(savedScrollY))
      }
    }, 100)
  }

  return (
    <>
      {/* Project Detail Section */}
      <section className="project-detail-section">
        <div className="project-detail-container">
          {/* Left Sidebar with Thumbnail Grid */}
          <div className="project-thumbnails">
            <div className="thumbnail-list">
              {project.images.map((image, index) => (
                <div
                  key={index}
                  className={`thumbnail-item ${index === currentImageIndex ? 'active' : ''}`}
                  onClick={() => switchToImage(index)}
                >
                  <img src={image} alt={`Project thumbnail ${index + 1}`} loading="lazy" />
                </div>
              ))}
            </div>
          </div>

          {/* Main Content Area */}
          <div className="project-detail-main">
            {/* Large Main Image */}
            <div className="project-main-image-wrapper">
              <button className="close-button" onClick={goBack} aria-label="Close project details">
                <img src="/x.svg" alt="Close" loading="lazy" />
              </button>
              <button className="nav-button nav-left" onClick={prevImage} aria-label="Previous image">
                <img src="/navigate-left.png" alt="Previous" loading="lazy" />
              </button>
              <img
                src={project.images[currentImageIndex]}
                alt="Project main image"
                className="project-main-image"
                style={{ opacity: imageOpacity, transition: 'opacity 0.15s ease-in-out' }}
                loading="lazy"
              />
              <div className="project-image-badge">{currentImageIndex + 1}/{project.images.length}</div>
              <button className="nav-button nav-right" onClick={nextImage} aria-label="Next image">
                <img src="/navigate-right.png" alt="Next" loading="lazy" />
              </button>
            </div>
          </div>

          {/* Divider Line */}
          <div className="project-detail-divider"></div>

          {/* Right Content Area */}
          <div className="project-info-panel">
            <div className="project-info-content">
              <div className="project-header">
                <h1 className="project-title">{project.title}</h1>
                <p className="project-date">{project.date}</p>
              </div>

              {/* Introduction */}
              <div className="project-section">
                <h2 className="project-section-title">Introduction</h2>
                <p className="project-section-text">{project.intro}</p>
              </div>

              {/* Context */}
              <div className="project-section">
                <h2 className="project-section-title">Context</h2>
                <p className="project-section-text">{project.context}</p>
              </div>

              {/* Problem */}
              <div className="project-section">
                <h2 className="project-section-title">Problem</h2>
                <p className="project-section-text">{project.problem}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}