export default class TouchEventController {
  oldDegrees = 0;
  degrees = 0;

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

  setInitialOffsetAngle(touchEvent) {
    this.oldDegrees = this.getDegrees(touchEvent);
  }

  getDegreeChange(touchEvent) {
    this.degrees = this.getDegrees(touchEvent);

    let deltaDegrees = this.getDeltaDegrees();

    this.oldDegrees = this.degrees;
    return deltaDegrees;
  }

  getYPositionCange(touchEvent) {
    let relativePosition = this.getYDistanceFromCenter(touchEvent) / 2;
    return this.getYTranslation(relativePosition);
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

  getYDistanceFromCenter(touchEvent) {
    return touchEvent.changedTouches[0].clientY - this.center.Y;
  }

  getDegrees(touchEvent) {
    let deltaY = this.center.Y - touchEvent.changedTouches[0].clientY;
    let deltaX = this.center.X - touchEvent.changedTouches[0].clientX;
    return Math.atan2(deltaY, deltaX) * (180 / Math.PI) + 180;
  }

  getDeltaDegrees() {
    if (this.degrees - this.oldDegrees > -200) {
      if (this.degrees - this.oldDegrees < 200) {
        return this.degrees - this.oldDegrees;
      } else {
        return this.degrees - (this.oldDegrees + 360);
      }
    } else {
      return this.degrees + 360 - this.oldDegrees;
    }
  }
}
