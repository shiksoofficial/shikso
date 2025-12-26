"use client";

import Image from "next/image";
import Link from "next/link";

const Advertisement = ({
  ads = [],               // ✅ array of ads
  topOffset = "top-24",   // sticky offset
}) => {
  if (!ads.length) return null;

  return (
    <div className={`sticky ${topOffset} space-y-6 self-start`}>
      {ads.map((ad, index) => (
        <div
          key={index}
          className="border rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow"
        >
          <p className="text-xs text-center border-b py-1 bg-gray-50 font-semibold text-gray-600">
            ADVERTISEMENT
          </p>

          <div className="p-2 flex justify-center">
            {ad.href ? (
              <Link href={ad.href} target="_blank" rel="noopener noreferrer">
                <Image
                  src={ad.image}
                  width={ad.width || 300}
                  height={ad.height || 250}
                  alt={ad.alt || "Advertisement"}
                />
              </Link>
            ) : (
              <Image
                src={ad.image}
                width={ad.width || 300}
                height={ad.height || 250}
                alt={ad.alt || "Advertisement"}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Advertisement;
