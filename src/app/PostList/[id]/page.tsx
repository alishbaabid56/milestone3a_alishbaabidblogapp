import Link from "next/link";
import Image from "next/image";
import CommentsSection from "../../../components/CommentSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


const posts: Record<string, { title: string; content: string; image: string }> = {
  1: { 
    title: "Tropical Beach Paradise",
    content: "Traveling opens the door to unforgettable experiences and breathtaking landscapes. Whether you explore the bustling streets of Tokyo or hike through the serene trails of the Swiss Alps or soak up the sun on Balis pristine beaches. Each journey offers a story waiting to be told. Dive into our travel blog for inspiration tips and firsthand accounts that will ignite your wanderlust and guide you to your next adventure.",
    image: "/post1b.png" 
  },
  2: { 
    title: "Emerald Valley", 
    content: "Traveling opens the door to unforgettable experiences and breathtaking landscapes. Whether you explore the bustling streets of Tokyo or hike through the serene trails of the Swiss Alps or soak up the sun on Balis pristine beaches. Each journey offers a story waiting to be told. Dive into our travel blog for inspiration tips and firsthand accounts that will ignite your wanderlust and guide you to your next adventure.",
    image: "/post2.png"
  },
  3: { 
    title: "The Golden Desert",
    content: "Traveling opens the door to unforgettable experiences and breathtaking landscapes. Whether you explore the bustling streets of Tokyo or hike through the serene trails of the Swiss Alps or soak up the sun on Balis pristine beaches. Each journey offers a story waiting to be told. Dive into our travel blog for inspiration tips and firsthand accounts that will ignite your wanderlust and guide you to your next adventure.",
    image: "/post3.png"
  },

  4: { 
    title: "MyStic Mountain",
    content: "Traveling opens the door to unforgettable experiences and breathtaking landscapes. Whether you explore the bustling streets of Tokyo or hike through the serene trails of the Swiss Alps or soak up the sun on Balis pristine beaches. Each journey offers a story waiting to be told. Dive into our travel blog for inspiration tips and firsthand accounts that will ignite your wanderlust and guide you to your next adventure.",
    image: "/post4.png"
  },
  5: { 
    title: "The Crystal Clear Lake",
    content: "Traveling opens the door to unforgettable experiences and breathtaking landscapes. Whether you explore the bustling streets of Tokyo or hike through the serene trails of the Swiss Alps or soak up the sun on Balis pristine beaches. Each journey offers a story waiting to be told. Dive into our travel blog for inspiration tips and firsthand accounts that will ignite your wanderlust and guide you to your next adventure.",
    image: "/post5.png"
  },
  6: { 
    title: "Island Of Dream",
    content: "Traveling opens the door to unforgettable experiences and breathtaking landscapes. Whether you explore the bustling streets of Tokyo or hike through the serene trails of the Swiss Alps or soak up the sun on Balis pristine beaches. Each journey offers a story waiting to be told. Dive into our travel blog for inspiration tips and firsthand accounts that will ignite your wanderlust and guide you to your next adventure.",
    image: "/post6b.png"
  },
  7: { 
    title: "Lost Lagoon",
    content: "Traveling opens the door to unforgettable experiences and breathtaking landscapes. Whether you explore the bustling streets of Tokyo or hike through the serene trails of the Swiss Alps or soak up the sun on Balis pristine beaches. Each journey offers a story waiting to be told. Dive into our travel blog for inspiration tips and firsthand accounts that will ignite your wanderlust and guide you to your next adventure.",
    image: "/post7.png"
  },
  8: { 
    title: "Frozen Paradise",
    content: "Traveling opens the door to unforgettable experiences and breathtaking landscapes. Whether you explore the bustling streets of Tokyo or hike through the serene trails of the Swiss Alps or soak up the sun on Balis pristine beaches. Each journey offers a story waiting to be told. Dive into our travel blog for inspiration tips and firsthand accounts that will ignite your wanderlust and guide you to your next adventure.",
    image: "/post8.png"
  },
  9: { 
    title: "Whispering Woods",
    content: "Traveling opens the door to unforgettable experiences and breathtaking landscapes. Whether you explore the bustling streets of Tokyo or hike through the serene trails of the Swiss Alps or soak up the sun on Balis pristine beaches. Each journey offers a story waiting to be told. Dive into our travel blog for inspiration tips and firsthand accounts that will ignite your wanderlust and guide you to your next adventure.",
    image: "/post9.png"
  }
};

type PostProps = {
  params: { id: string };
};

export async function generateStaticParams() {
  return Object.keys(posts).map((id) => ({ id }));
}

export default function Post({ params }: PostProps) {
  const post = posts[params.id as string];

  if (!post) return <div>Post not found</div>;

  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto p-4 sm:p-6">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-center">{post.title}</h1>

        <div className="flex justify-center">
          <Image
            src={post.image}
            alt={post.title}
            className="mt-2 w-full max-w-[800px] h-60 object-cover rounded"
          />
        </div>

        <p className="text-base sm:text-lg lg:text-xl text-gray-800 mt-4 leading-relaxed">
          {post.content}
        </p>

        <div >
          <Link href="/" passHref>
            <button className="mt-6 bg-blue-600 text-white  px-4 py-2 sm:px-6 sm:py-3 rounded hover:bg-blue-400 transition duration-200">
              Back to Home
            </button>
          </Link>
        </div>
      

        <CommentsSection />
      </div>
      <Footer />
    </div>
    
  );
}