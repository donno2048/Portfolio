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
  ScrollReveal().reveal('#about>.container>.section-title',
    assignProps(
      {
        delay: 1250
      }, defaultProps)
  );
  ScrollReveal().reveal('.about-wrapper__image',
    assignProps(
      {
        delay: 1500
      }, defaultProps)
  );
  ScrollReveal().reveal('.about-wrapper__info',
    assignProps(
      {
        delay: 1500,
        origin: 'left'
      }, defaultProps)
  );
  ScrollReveal().reveal('.project-wrapper>.section-title',
    assignProps(
      {
        delay: 2000
      }, defaultProps)
  );
  ScrollReveal().reveal('.project-wrapper__text',
    assignProps(
      {
        delay: 2250
      }, defaultProps)
  );
  ScrollReveal().reveal('#games>.container>.section-title',
    assignProps(
      {
        delay: 3750
      }, defaultProps)
  );
  ScrollReveal().reveal('#games>.container>.col',
    assignProps(
      {
        delay: 4000,
        origin: 'left'
      }, defaultProps)
  );
  ScrollReveal().reveal('#contact>.container>.section-title',
    assignProps(
      {
        delay: 4500
      }, defaultProps)
  );
  ScrollReveal().reveal('.contact-wrapper',
    assignProps(
      {
        delay: 4750
      }, defaultProps)
  );
}
