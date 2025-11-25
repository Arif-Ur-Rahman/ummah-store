import { wixClientServer } from "@/lib/wixClientServer"
import type { products } from "@wix/stores"
import Image from "next/image"
import Link from "next/link"
import DOMPurify from "isomorphic-dompurify"

const PRODUCT_PER_PAGE = 20

const ProductList = async ({
  categoryId,
  limit,
}: {
  categoryId?: string
  limit?: number
}) => {
  const wixClient = await wixClientServer()

  // Filter by collection client-side if categoryId is provided
  const res = await wixClient.products
    .queryProducts()
    .limit(limit || PRODUCT_PER_PAGE)
    .find()

  const filteredItems = categoryId
    ? res.items?.filter((product: products.Product) => product.collectionIds?.includes(categoryId)) || []
    : res.items || []

  return (
    <div>
      <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
        {filteredItems.map((product: products.Product) => (
          <Link
            href={"/" + product.slug}
            className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
            key={product._id}
          >
            <div className="relative w-full h-80">
              <Image
                src={product.media?.mainMedia?.image?.url || "/placeholder.svg"}
                alt={product.name || "product"}
                fill
                sizes="25vw"
                className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity duration-500"
              />
              <Image
                src="/placeholder.svg"
                alt="product placeholder"
                fill
                sizes="25vw"
                className="absolute object-cover rounded-md"
              />
            </div>
            <div className="flex justify-between">
              <span className="font-medium">{product.name}</span>
              <span className="font-semibold">${product.priceData?.price}</span>
            </div>
            {product.additionalInfoSections && (
              <div
                className="text-sm text-gray-500"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(
                    product.additionalInfoSections.find(
                      (section: { title?: string; description?: string }) => section.title === "shortDesc",
                    )?.description || "",
                  ),
                }}
              />
            )}
            <button className="rounded-2xl w-max ring-1 ring-red-500 text-red-500 text-xs py-2 px-4 hover:bg-red-500 hover:text-white">
              Add to Cart
            </button>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ProductList
