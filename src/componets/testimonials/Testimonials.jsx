import React from 'react'
import { useTranslation } from 'react-i18next'
import './testimonials.css'
import { FaQuoteLeft } from 'react-icons/fa'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'

const Testimonials = () => {
  const { t } = useTranslation();

  const testimonials = t('testimonials.reviews', { returnObjects: true });

  return (
    <section id="testimonials">
      <h5>{t('testimonials.subtitle')}</h5>
      <h2>{t('testimonials.title')}</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true, el: '.swiper-pagination' }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial">
              <div className="client__avatar">
                <img src={`https://randomuser.me/api/portraits/${index % 2 === 0 ? 'men' : 'women'}/${32 + index * 12}.jpg`} alt={testimonial.name} />
              </div>
              <div className="testimonial__content">
                <FaQuoteLeft className="testimonial__icon" />
                <p className="client__review">{testimonial.review}</p>
              </div>
              <div className="client__info">
                <h5 className="client__name">{testimonial.name}</h5>
                <small className="client__role">{testimonial.role}</small>
              </div>
              {/* Swiper pagination inside the testimonial box */}
              <div className="swiper-pagination"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Testimonials
