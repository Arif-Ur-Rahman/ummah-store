import { wixClientServer } from "@/lib/wixClientServer";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoryList = async () => {
  try {
    const wixClient = await wixClientServer();
    
    // Fetch collections (categories) directly from Wix
    const collectionsRes = await wixClient.collections
      .queryCollections()
      .limit(10)
      .find();

    console.log("📁 COLLECTIONS DEBUG:");
    console.log("Total collections:", collectionsRes.items.length);
    console.log("Collections:", collectionsRes.items.map(c => ({
      id: c._id,
      name: c.name,
      slug: c.slug,
      description: c.description,
      media: c.media
    })));

    // If no collections found, show placeholder
    if (collectionsRes.items.length === 0) {
      return (
        <div className="px-4 overflow-x-scroll scrollbar-hide">
          <div className="flex gap-4 md:gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
                key={item}
              >
                <div className="relative bg-slate-100 w-full h-96">
                  <Image
                    src="/placeholder.svg"
                    alt={`Placeholder Category ${item}`}
                    fill
                    sizes="20vw"
                    className="object-cover"
                  />
                </div>
                <h1 className="mt-8 font-light text-xl tracking-wide">
                  Category {item}
                </h1>
              </div>
            ))}
          </div>
        </div>
      );
    }

    return (
      <div className="px-4 overflow-x-scroll scrollbar-hide">
        <div className="flex gap-4 md:gap-8">
          {collectionsRes.items.map((collection) => (
            <Link
              href={`/list?cat=${collection._id}`}
              className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6 group"
              key={collection._id}
            >
              <div className="relative bg-slate-100 w-full h-96 overflow-hidden rounded-lg">
                <Image
                  src={collection.media?.mainMedia?.image?.url || "/placeholder.svg"}
                  alt={collection.name || "Category image"}
                  fill
                  sizes="20vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300" />
              </div>
              <h1 className="mt-4 font-light text-xl tracking-wide text-center">
                {collection.name || "Unnamed Category"}
              </h1>
              {collection.description && (
                <p className="mt-2 text-sm text-gray-500 text-center line-clamp-2">
                  {collection.description}
                </p>
              )}
            </Link>
          ))}
        </div>

        {/* Debug info in development */}
        {process.env.NODE_ENV === 'development' && (
          <div className="mt-8 p-4 bg-gray-100 rounded-lg text-xs">
            <h4 className="font-semibold mb-2">Categories Debug Info:</h4>
            <p>Total Categories: {collectionsRes.items.length}</p>
            <p>Category IDs: {collectionsRes.items.map(c => c._id).join(', ')}</p>
          </div>
        )}
      </div>
    );
  } catch (error) {
    console.error("❌ Error loading categories:", error);
    return (
      <div className="px-4">
        <div className="text-red-500 text-center py-8">
          Failed to load categories. Please try again later.
        </div>
        {/* Fallback placeholder categories */}
        <div className="flex gap-4 md:gap-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
              key={item}
            >
              <div className="relative bg-slate-100 w-full h-96">
                <Image
                  src="/placeholder.svg"
                  alt={`Placeholder Category ${item}`}
                  fill
                  sizes="20vw"
                  className="object-cover"
                />
              </div>
              <h1 className="mt-8 font-light text-xl tracking-wide text-center">
                Category {item}
              </h1>
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default CategoryList;