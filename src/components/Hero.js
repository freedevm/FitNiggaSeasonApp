import Image from "next/image";

export default function Hero({ playChaching, bgVideoRef, bgVideoMobileRef }) {
  return (
    <header className="hero">
      <div className="video-container">
        <video
          ref={bgVideoRef}
          loop
          playsInline
          muted
          className="desktop-video"
        >
          <source src="https://github.com/fatfellas/fellawebsite/raw/refs/heads/main/FNS_WEB_BG.mp4" type="video/mp4" media="(min-width: 769px)" />
        </video>
        <video
          ref={bgVideoMobileRef}
          loop
          playsInline
          muted
          className="mobile-video"
        >
          <source src="https://github.com/fatfellas/fellawebsite/raw/refs/heads/main/FNS_WEB_BG_MOBILE.mp4" type="video/mp4" media="(max-width: 768px)" />
        </video>
        <div className="overlay"></div>
      </div>
      <div className="content">
        <Image
          src="https://raw.githubusercontent.com/fatfellas/fellawebsite/refs/heads/main/FNS%20logo%20v1.png"
          alt="Fat Nigga Season Logo"
          width={800}
          height={400}
          className="logo"
          onClick={playChaching}
          unoptimized
        />
      </div>
    </header>
  );
}