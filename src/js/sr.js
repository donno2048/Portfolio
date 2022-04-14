import assignProps from './assignProps';
import ScrollReveal from 'scrollreveal';
export default function() {
  const defaultProps = {
    distance: '100px',
    duration: 1000
  };
  ScrollReveal().reveal('.hero-title',
    assignProps(
      {
        origin: 'left', // scale: .5,
        delay: 500
      }, defaultProps)
  );
  ScrollReveal().reveal('#about>.container>.section-title', defaultProps);
  ScrollReveal().reveal('.about-wrapper__image', defaultProps);
  ScrollReveal().reveal('.about-wrapper__info',
    assignProps(
      {
        origin: 'left'
      }, defaultProps)
  );
  ScrollReveal().reveal('.project-wrapper>.section-title', defaultProps);
  ScrollReveal().reveal('.project-wrapper__text', defaultProps);
  ScrollReveal().reveal('#games>.container>.section-title', defaultProps);
  ScrollReveal().reveal('#games>.container>.col',
    assignProps(
      {
        origin: 'left'
      }, defaultProps)
  );
  ScrollReveal().reveal('#contact>.container>.section-title', defaultProps);
  ScrollReveal().reveal('.contact-wrapper', defaultProps);
}
