import {
    EventBus
} from "../event-bus.js";

export default {
    methods: {
        calculateInnerBaseLine() {
            let upInputHeight = this.$refs.upInput.$el.clientHeight;
            let downInputHeight = this.$refs.downInput.$el.clientHeight;

            this.component.innerBaseLine = (this.component.height - upInputHeight - downInputHeight) / 2
            // console.log("inner base line: " + this.component.innerBaseLine)
        }
    },

    created() {
        EventBus.$on("componentInserted", this.calculateInnerBaseLine);
    },
    beforeDestroy() {
        EventBus.$off("componentInserted", this.calculateInnerBaseLine);
    }
}