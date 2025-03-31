import Image from "next/image";

export default function Footer({ playChaching, openModal }) {
  const socialLinks = [
    { href: "https://www.instagram.com/fatfellas/", src: "https://raw.githubusercontent.com/fatfellas/fellawebsite/main/web_icon_IG.png", alt: "Instagram" },
    { href: "https://x.com/fatfellaseason", src: "https://raw.githubusercontent.com/fatfellas/fellawebsite/main/web_icon_X.png", alt: "X" },
    { href: "https://t.me/FatNigga_Season", src: "https://raw.githubusercontent.com/fatfellas/fellawebsite/main/web_icon_TG.png", alt: "Telegram" },
    { href: "https://dexscreener.com/solana/3bjtn2up6q28uvbse2fvwqu6h2qfsejuqhyu1xmhstqv", src: "https://raw.githubusercontent.com/fatfellas/fellawebsite/main/web_icon_DEX.png", alt: "Dex" },
    { href: "https://pump.fun/coin/5LJMJyR8MtAkbtpf8kFUV7S9oFG3xaGDdcnFxYt9pump", src: "https://raw.githubusercontent.com/fatfellas/fellawebsite/main/web_icon_PUMP.png", alt: "Pump" },
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <Image
          src="https://raw.githubusercontent.com/fatfellas/fellawebsite/refs/heads/main/launchingsoon.png"
          alt="Launching Soon"
          width={160}
          height={40}
          className="launching-soon"
          onClick={() => {
            playChaching();
            openModal();
          }}
          unoptimized
        />
        <div className="social-links">
          {socialLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              onClick={playChaching}
            >
              <Image
                src={link.src}
                alt={link.alt}
                width={48}
                height={48}
                className="social-icon"
                unoptimized
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}