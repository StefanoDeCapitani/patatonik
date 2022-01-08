export default class SliderController {
  constructor(el) {
    this.element = el.parentElement;
    this.center = this.calcCenter();
    this.childDimensions = this.getDimensions(el);
    this.parentDimensions = this.getDimensions(this.element);
  }

  calcCenter() {
    let offsetTop = this.element.getBoundingClientRect().top;
    let offsetLeft = this.element.getBoundingClientRect().left;
    let height = this.element.offsetHeight;
    let width = this.element.offsetWidth;
    return { X: offsetLeft + width / 2, Y: offsetTop + height / 2 };
  }

  getDimensions(el) {
    return {
      height: el.offsetHeight,
      width: el.offsetWidth,
    };
  }

  getYPositionChange(touchEvent) {
    let relativePosition = this.getYDistanceFromCenter(touchEvent) / 2;
    return this.getYTranslation(relativePosition);
  }

  getYDistanceFromCenter(touchEvent) {
    return touchEvent.clientY - this.center.Y;
  }

  getYTranslation(relativePosition) {
    let Ytranslation;
    let limit;

    if (relativePosition < 0) {
      limit = -(this.parentDimensions.height / 2) + this.childDimensions.height;
      Ytranslation = relativePosition > limit ? relativePosition : limit;
    }
    if (relativePosition > 0) {
      limit = this.parentDimensions.height / 2 - this.childDimensions.height;
      Ytranslation = relativePosition < limit ? relativePosition : limit;
    }

    return Ytranslation;
  }
}
