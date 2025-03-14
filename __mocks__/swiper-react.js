module.exports = {
    Swiper: jest.fn().mockImplementation(({ children }) => children),
    SwiperSlide: jest.fn().mockImplementation(({ children }) => children),
  };
  