import WheelController from "./WheelController";
import SliderController from "./SliderController";

export default class TouchEventRouter {
  constructor(app, slider, wheel) {
    this.app = app;
    this.sliderElement = slider;
    this.wheelElement = wheel;
    this.wheelController = new WheelController(
      this.wheelElement.querySelector(".rotatable")
    );
    this.sliderController = new SliderController(
      this.sliderElement.querySelector(".slider__knob")
    );
  }

  onTouchStart(touchEvent) {
    if (touchEvent.path.includes(this.wheelElement)) {
      for (let i = 0; i < touchEvent.changedTouches.length; i++) {
        if (touchEvent.touches[i].clientX > this.app.offsetWidth / 2) {
          this.wheelController.setInitialOffsetAngle(
            touchEvent.changedTouches[i]
          );
        }
      }
    }
  }

  onTouchMoving(touchEvent) {
    if (touchEvent.path.includes(this.wheelElement)) {
      for (let i = 0; i < touchEvent.changedTouches.length; i++) {
        if (touchEvent.touches[i].clientX > this.app.offsetWidth / 2) {
          return {
            wheelChangeDegrees: this.wheelController.getDegreeChange(
              touchEvent.changedTouches[i]
            ),
          };
        }
      }
    }
    if (touchEvent.path.includes(this.sliderElement)) {
      for (let i = 0; i < touchEvent.changedTouches.length; i++) {
        if (touchEvent.touches[i].clientX < this.app.offsetWidth / 2) {
          return {
            sliderTranslation: this.sliderController.getYPositionChange(
              touchEvent.changedTouches[i]
            ),
          };
        }
      }
    }
  }

  onTouchEnd(touchEvent) {
    if (touchEvent.path.includes(this.sliderElement)) {
      for (let i = 0; i < touchEvent.changedTouches.length; i++) {
        if (touchEvent.changedTouches[i].clientX < this.app.offsetWidth / 2) {
          return { sliderTranslation: 0 };
        }
      }
    }
  }
}
