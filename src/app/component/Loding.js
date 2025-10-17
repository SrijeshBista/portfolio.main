// components/Loader.js
export default function Loader() {
  return (
    <div className="loader-container">
      <div className="dots">
        <div></div>
        <div></div>
        <div></div>
      </div>

      <style jsx>{`
        .loader-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #0d0d0d; /* dark background for style */
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
        }

        .dots {
          display: flex;
          gap: 10px;
        }

        .dots div {
          width: 15px;
          height: 15px;
          background: #00bfff; /* your theme color */
          border-radius: 50%;
          animation: bounce 0.6s infinite alternate;
        }

        .dots div:nth-child(2) {
          animation-delay: 0.2s;
        }

        .dots div:nth-child(3) {
          animation-delay: 0.4s;
        }

        @keyframes bounce {
          0% { transform: translateY(0); opacity: 0.6; }
          100% { transform: translateY(-20px); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
