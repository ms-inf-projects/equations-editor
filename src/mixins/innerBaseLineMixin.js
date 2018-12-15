import {
    EventBus
} from "../event-bus.js";

export default {
    methods: {
        calculateInnerBaseLine() {
            let downInputHeight = 0;

            if (this.component.downEqObject) {
                downInputHeight = this.component.downEqObject.height;
            }

            this.component.innerBaseLine = this.component.baseSize.height / 2 + downInputHeight
            // console.log("inner base line: " + this.component.innerBaseLine)
        }
    }
}