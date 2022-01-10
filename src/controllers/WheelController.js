export default class WheelController {
  oldDegrees = 0;
  degrees = 0;

  constructor(el) {
    this.element = el;
    this.center = this.calcCenter();
  }

  calcCenter() {
    let offsetTop = this.element.getBoundingClientRect().top;
    let offsetLeft = this.element.getBoundingClientRect().left;
    let height = this.element.offsetHeight;
    let width = this.element.offsetWidth;
    return { X: offsetLeft + width / 2, Y: offsetTop + height / 2 };
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

  getDegrees(touchEvent) {
    let deltaY = this.center.Y - touchEvent.clientY;
    let deltaX = this.center.X - touchEvent.clientX;
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
