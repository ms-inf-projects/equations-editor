import {
    EventBus
} from "../event-bus.js";

var componentMethods = {
    reScale() {
        // // this.component.height = this.$refs.rootRef.clientHeight;
        // this.component.height = this.$el.clientHeight;
        // // this.component.width = this.$refs.rootRef.clientWidth;
        // this.component.width = this.$el.clientWidth;
        // // console.log("height: " + this.component.height + "    width: " + this.component.width)
        let upInputHeight = 0;
        let downInputHeight = 0;

        let newHeight = this.component.symbol.baseSize.height * this.component.sizePercentage
        let newWidth = this.component.symbol.baseSize.width * this.component.sizePercentage

        if (this.component.upEqObject) {
            upInputHeight = this.component.upEqObject.height;
            newHeight += upInputHeight

            if (this.component.upEqObject.width > newWidth)
                newWidth = this.component.upEqObject.width;
        }

        if (this.component.downEqObject) {
            downInputHeight = this.component.downEqObject.height;
            newHeight += downInputHeight;

            if (this.component.downEqObject.width > newWidth)
                newWidth = this.component.downEqObject.width;
        }

        this.component.height = newHeight;
        this.component.width = newWidth;
        this.component.innerBaseLine = downInputHeight + (this.component.symbol.baseSize.height) / 2

        this.$emit('modified');
        console.log("height: " + this.component.height + "    width: " + this.component.width + "   innerbaseline: " + this.component.innerBaseLine)
    }
}

var eqInputMethods = {
    reScale() {
        console.log(this.$el)
        if (this.equationObject.components && this.equationObject.components.length > 0) {
            // this.equationObject.width = this.equationObject.components.reduce((a, b) => a + b.width, 0)
            // debugger
            let maxHeightTop = Math.max.apply(Math, this.equationObject.components.map(c => c.height - c.innerBaseLine));
            let maxHeightDown = Math.max.apply(Math, this.equationObject.components.map(c => c.innerBaseLine));
            this.equationObject.height = maxHeightTop + maxHeightDown;
        } else {
            this.equationObject.height = this.$refs.inputDefault.clientHeight;
            // this.equationObject.width = this.$refs.inputDefault.clientWidth;
        }

        console.log("height: " + this.equationObject.height + "    width: " + this.equationObject.width)
    }
}

export default {
    componentSizeMixin: sizeMixinWithMethods(componentMethods),
    equationInputSizeMixin: sizeMixinWithMethods(eqInputMethods)
}

function sizeMixinWithMethods(methods) {
    return {
        methods: methods,
        created() {
            EventBus.$on("componentInserted", this.reScale);
        },
        beforeDestroy() {
            EventBus.$off("componentInserted", this.reScale);
        }
    }
}



// focus: {
//     // directive definition
//     inserted: function(el) {
//       console.log(el);
//       console.log(el.style);
//     }
//   },