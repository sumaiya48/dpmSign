import { useEffect, useRef } from 'react'
import img1 from '/assets/brand1.png'
import img2 from '/assets/brand2.png'
import img3 from '/assets/brand3.png'
import img4 from '/assets/brand4.png'
import img5 from '/assets/brand5.png'
import img6 from '/assets/brand6.png'

const brands = [img1, img2, img3, img4, img5, img6];

export default function BrandCarousel() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    // Clone the brands list to give infinite feel
    if (container) {
      container.innerHTML += container.innerHTML;
    }

    let scrollAmount = 0;
    const scrollStep = 1; // pixels per tick
    const scrollInterval = 20; // ms

    const interval = setInterval(() => {
      if (container) {
        scrollAmount += scrollStep;
        container.scrollLeft += scrollStep;

        if (scrollAmount >= container.scrollWidth / 2) {
          // Reset scroll
          container.scrollLeft = 0;
          scrollAmount = 0;
        }
      }
    }, scrollInterval);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-9/12 mx-auto overflow-hidden py-28">
      <div
        ref={containerRef}
        className="flex gap-1 lg:gap-6"
        style={{ width: '100%', whiteSpace: 'nowrap', overflow: 'hidden' }}
      >
        {brands.map((img, index) => (
          <div
            key={index}
            className="min-w-[150px] flex justify-center items-center"
          >
            <img
              src={img}
              alt={`Brand ${index}`}
              className="h-16 w-auto grayscale hover:grayscale-0 transition duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
