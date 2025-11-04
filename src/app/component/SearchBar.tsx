"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

function SearchBar() {
  const router = useRouter();

  const handleSearch = (e:any) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    if (name) router.push(`/list?name=${name}`);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-full w-full max-w-xs border focus-within:border-gray-400"
    >
      <Image src="/search.png" alt="Search" width={18} height={18} />
      <input
        type="text"
        name="name"
        placeholder="Search products..."
        className="w-full bg-transparent text-sm outline-none"
      />
    </form>
  );
}

export default SearchBar;
