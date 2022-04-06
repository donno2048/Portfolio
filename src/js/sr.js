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
        delay: 2000
      }, defaultProps)
  );
  ScrollReveal().reveal('.about-wrapper__image',
    assignProps(
      {
        delay: 2500
      }, defaultProps)
  );
  ScrollReveal().reveal('.about-wrapper__info',
    assignProps(
      {
        delay: 2500,
        origin: 'left'
      }, defaultProps)
  );
  ScrollReveal().reveal('.project-wrapper>.section-title',
    assignProps(
      {
        delay: 3500
      }, defaultProps)
  );
  ScrollReveal().reveal('.project-wrapper__text',
    assignProps(
      {
        delay: 4000
      }, defaultProps)
  );
  ScrollReveal().reveal('#games>.container>.section-title',
    assignProps(
      {
        delay: 7000
      }, defaultProps)
  );
  ScrollReveal().reveal('#games>.container>.col',
    assignProps(
      {
        delay: 7500,
        origin: 'left'
      }, defaultProps)
  );
  ScrollReveal().reveal('#contact>.container>.section-title',
    assignProps(
      {
        delay: 8500
      }, defaultProps)
  );
  ScrollReveal().reveal('.contact-wrapper',
    assignProps(
      {
        delay: 9000
      }, defaultProps)
  );
}
