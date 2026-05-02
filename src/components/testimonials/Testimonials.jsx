'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

export default function Testimonials({ reviews }) {
  return (
    <div >
        <hr className='border-gray-300 border w-[90%] mx-auto my-4'></hr>
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">What Our Readers Say</h2>
          <p className="text-gray-600">Real feedback from our community</p>
        </div>

        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          navigation={true}
          loop={true}
          className="mySwiper"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="bg-white rounded-3xl p-10 shadow-xl max-w-2xl mx-auto text-center">
                <Image
                  src={review.avatar}
                  alt={review.name}
                  width={500}
                height={500}
                  className="w-24 h-24 rounded-full mx-auto mb-6 border-4 border-white shadow-md"
                />

                <div className="flex justify-center gap-1 text-4xl text-amber-400 mb-6">
                  {'★'.repeat(review.rating)}
                </div>

                <p className="text-lg text-gray-700 italic mb-8 leading-relaxed">
                    `{review.review}`
                </p>

                <div>
                  <p className="font-semibold text-xl text-gray-900">{review.name}</p>
                  <p className="text-gray-500">{review.role}</p>
                  <p className="text-sm text-gray-400 mt-1">Recently read: {review.book}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}