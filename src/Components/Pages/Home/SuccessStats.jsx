import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import bgImage from '/assets/ourSuccess.jpg';
import { useEffect, useState } from 'react';

const stats = [
    { label: 'Years of Excellence', value: 12 },
  { label: 'Satisfied Clients', value: 100000 },
  { label: 'Successful Projects Completed', value: 25000 },
  { label: 'Products Sold', value: 500000 },
  { label: 'Team of Experts', value: 25 },
];

export default function SuccessStats() {
  const [startCount, setStartCount] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      setStartCount(true);
    }
  }, [inView]);

  return (
    <div
      className="relative bg-fixed bg-cover bg-center text-white py-28 mb-28"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div ref={ref} className="relative z-10 text-center px-4 w-11/12 mx-auto">
        {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold">
         Our Success in Numbers
        </h2>
        <p className=" sm:text-lg  font-semibold mt-2">
          Building Trust Through Excellence, Quality, and Innovation
        </p>
        <hr
          className="h-1 w-3/12 md:w-1/12  mx-auto mt-3 rounded"
          style={{ height: "6px" }}
        />
      </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="text-4xl sm:text-5xl font-bold ">
                {startCount ? <CountUp end={stat.value} duration={2} /> : 0}+
              </div>
              <p className="mt-2 text-lg font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
