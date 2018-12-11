var componentMethods = {
    reScale() {
        let upInputHeight = 0;
        let downInputHeight = 0;

        let newHeight = this.component.baseSize.height
        let newWidth = this.component.baseSize.width

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
        this.component.innerBaseLine = downInputHeight + (this.component.baseSize.height) / 2

        this.$emit('modified');
    }
}

// var rootSizingMethods = {
//     reScale() {
//         let upInputHeight = 0;
//         let downInputHeight = 0;

//         let newHeight = this.component.baseSize.height
//         let newWidth = this.component.baseSize.width

//         if (this.component.upEqObject) {
//             upInputHeight = this.component.upEqObject.height;
//             newHeight += upInputHeight

//             if (this.component.upEqObject.width > newWidth)
//                 newWidth = this.component.upEqObject.width;
//         }

//         if (this.component.downEqObject) {
//             downInputHeight = this.component.downEqObject.height;
//             newHeight += downInputHeight;

//             if (this.component.downEqObject.width > newWidth)
//                 newWidth = this.component.downEqObject.width;
//         }

//         this.component.height = newHeight;
//         this.component.width = newWidth;
//         this.component.innerBaseLine = downInputHeight + (this.component.baseSize.height) / 2

//         this.$emit('modified');
//     }
// }

export default {
    componentSizingMixin: {
        methods: componentMethods
    },

    rootSizingMixin: {

    }
}