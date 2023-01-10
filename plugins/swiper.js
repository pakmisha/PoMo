import Swiper, {
  FreeMode,
  Navigation,
  Pagination,
  Mousewheel,
  Thumbs,
} from "swiper";
import "swiper/swiper-bundle.css";

export default ({ app }, inject) => {
  inject("swiper", (el, options) => {
    Swiper.use([Navigation, Pagination, Mousewheel, Thumbs]);
    return new Swiper(el, options);
  });
};
