import Link from "next/link";
import Image from "next/image";

const posts = [
  {
    id: 1,
    title: "Tropical Beach Paradise",
    description: "A Slice of Heaven on Earth",
    image: "/post1b.png",
  },
  {
    id: 2,
    title: "Emerald Valley",
    description: "A Trekker Dream Destination",
    image: "/post2.png",
  },
  {
    id: 3,
    title: "The Golden Desert",
    description: "A Night Under The Stars",
    image: "/post3.png",
  },
  {
    id: 4,
    title: "Mystic Mountain",
    description: "Where Clouds Meet Peaks",
    image: "/post4.png",
  },
  {
    id: 5,
    title: "The Crystal Clear Lake",
    description: "A Canoe Adventure",
    image: "/post5.png",
  },
  {
    id: 6,
    title: "Island Of Dream",
    description: "The Ultimate Beach Gateway",
    image: "/post6b.png",
  },
  {
    id: 7,
    title: "Lost Lagoon",
    description: "A Hidden Natural  Wonder",
    image: "/post7.png",
  },
  {
    id: 8,
    title: "Frozen Paradise",
    description: "Exploring The Ice Kingdom",
    image: "/post8.png",
  },
  {
    id: 9,
    title: "Whispering Woods",
    description: "A walk Through Thee Enchanted Forest",
    image: "/post9.png",
  },
];


export default function PostList() {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      {/* Header Section */}
      <div className="text-center my-8">
        <h1 className="text-4xl sm:text-4xl md:text-5xl font-bold">Latest Blog</h1>
        <p className="mt-6 sm:mt-10 max-w-[740px] mx-auto text-sm sm:text-base md:text-lg leading-relaxed">
          Our Travel Blog App offers a seamless journey through stunning destinations, travel tips, and unforgettable experiences.
        </p>

        {/* Subscription Form */}
        <form className="flex flex-col sm:flex-row justify-between max-w-[500px] mx-auto mt-10 mb-10 border border-black rounded-lg shadow-[7px_7px_0px_#000000]">
          <input
            type="email"
            placeholder="Enter your email address"
            className="pl-4 outline-none py-4 px-4 sm:px-6 border-none w-full rounded-t-lg sm:rounded-l-lg sm:w-[70%]"
          />
          <button
            type="submit"
            className="font-bold py-4 px-6 sm:px-8 active:bg-gray-600 active:text-white sm:rounded-r-lg rounded-b-lg sm:w-[30%] mt-4 sm:mt-0 border-t sm:border-t-0 sm:border-l border-black flex items-center justify-center shadow-[7px_7px_0px_#000000] text-sm sm:text-base"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Blog Posts */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {posts.map((post) => (
          <div
            key={post.id}
            className="border-2 border-black rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-[7px_7px_0px_#000000]"
          >
            <Link href={`/PostList/${post.id}`}>
              <div className="cursor-pointer">
                <Image
                  src={post.image}
                  alt={post.title}
                  className="h-48 sm:h-56 w-full object-cover border-b-2 border-gray-300 text-3xl"
                />
                <div className="p-4">
                  <h2 className="text-gray-950 hover:underline text-xl sm:text-2xl font-bold mb-2">{post.title}</h2>
                  <p className="text-gray-600 text-sm sm:text-base">{post.description.slice(0, 100)}...</p>
                  <div className="mt-4">
                    <Link href={`/PostList/${post.id}`}>
                      <button className="text-black hover:underline font-semibold flex items-center gap-2">
                        Read More
                        <Image src="/arrow.png" alt="arrow" width={20} height={20} />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}