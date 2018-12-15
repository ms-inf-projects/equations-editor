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

var indexMethods = {
    reScale() {
        let downInputHeight = 0;

        this.component.baseSize = this.component.baseSize

        let extraHeight = 0;
        let extraWidth = 0;

        if (this.component.mainEqObject) {
            this.component.baseSize = {
                height: this.component.mainEqObject.height,
                width: this.component.mainEqObject.width,
            }
        }

        if (this.component.upEqObject) {
            extraHeight += this.component.upEqObject.height / 2;
            extraWidth = this.component.upEqObject.width;
        }

        if (this.component.downEqObject) {
            extraHeight += this.component.downEqObject.height / 2;

            if (this.component.downEqObject.width > extraWidth)
                extraWidth = this.component.downEqObject.width;
        }

        this.component.height = this.component.baseSize.height + extraHeight;
        this.component.width = this.component.baseSize.width + extraWidth;
        this.component.innerBaseLine = downInputHeight / 2 + (this.component.baseSize.height) / 2

        this.$emit('modified');
    }
}

export default {
    componentSizingMixin: {
        methods: componentMethods
    },

    indexSizingMixin: {
        methods: indexMethods
    },

    rootSizingMixin: {

    }
}