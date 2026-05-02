// app/components/FeaturedBooks.jsx
import Image from 'next/image';
import Link from 'next/link';

export default function FeaturedBooks({ books }) {
  const getCategoryColor = (category) => {
    switch (category.toLowerCase()) {
      case 'tech':
        return 'bg-emerald-100 text-emerald-700';
      case 'science':
        return 'bg-amber-100 text-amber-700';
      case 'story':
        return 'bg-blue-100 text-blue-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="py-20">
      <div className="w-[85%] mx-auto">
        <h2 className="text-gray-800 text-4xl font-bold mb-12 text-center tracking-wide">
          FEATURED BOOKS
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {books.map((book) => (
            <div
              key={book.id}
              className="bg-white rounded-2xl overflow-hidden group 
              shadow-md hover:shadow-2xl 
              transition-all duration-300 hover:-translate-y-2"
            >
              {/* Book Cover */}
              <div className="h-64 flex overflow-hidden items-center justify-center p-6 bg-gray-100">
                <Image
                  src={book.image_url}
                  alt={book.title}
                  width={150}
                  height={220}
                  className="object-contain drop-shadow-lg 
                  group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-gray-900 font-semibold text-lg line-clamp-2 mb-1">
                  {book.title}
                </h3>

                <p className="text-gray-500 text-sm mb-4">
                  {book.author}
                </p>

                <div
                  className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${getCategoryColor(
                    book.category
                  )}`}
                >
                  {book.category}
                </div>

                <Link
                  href={`/books/${book.id}`}
                  className="block w-full text-center 
                  bg-indigo-500 hover:bg-indigo-600 
                  text-white py-3 rounded-xl font-medium 
                  transition-colors"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}