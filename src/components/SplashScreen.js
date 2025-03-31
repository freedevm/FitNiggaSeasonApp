import Image from "next/image";

export default function SplashScreen({ isVisible, onConfirm }) {
  return (
    <div className={`splash-screen ${isVisible ? "" : "hidden"}`}>
      <div className="splash-background"></div>
      <div className="overlay"></div>
      <div className="splash-content">
        <Image
          src="https://raw.githubusercontent.com/fatfellas/fellawebsite/main/ACCESS%20RESTRICTED@0.75x.png"
          alt="Access Restricted"
          width={800}
          height={200}
          className="access-restricted"
          unoptimized
        />
        <Image
          src="https://raw.githubusercontent.com/fatfellas/fellawebsite/main/CONFIRM%20BUTTON@0.75x.png"
          alt="Confirm Button"
          width={300}
          height={100}
          className="confirm-button"
          onClick={onConfirm}
          unoptimized
        />
      </div>
    </div>
  );
}