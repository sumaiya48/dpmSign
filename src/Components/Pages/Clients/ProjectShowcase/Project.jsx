import React from "react";

export default function Project({ project }) {
  const { name, description, tags = [] } = project;
  const imageUrl = project?.images?.[0]?.optimizeUrl || "/fallback.jpg";

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border relative">
      {/* Image section with tags */}
      <div className="">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-64 object-cover"
        />

        {/* Tags over image */}
        
      </div>

      {/* Text section */}
      <div className="p-4 space-y-2">
        <h3 className="text-base text-center font-bold">{name}</h3>
        <p className="text-sm text-gray-600 line-clamp-4">{description}</p>
      </div>
      <div className=" bottom-2 left-2 flex flex-wrap gap-2 mb-6 mx-2">
          {tags.map((item, index) => (
            <button className="btn btn-outline btn-info btn-xs bg-[#F9FBFD]" key={index}>{item.tag}</button>
          ))}
        </div>
    </div>
  );
}
