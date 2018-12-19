const CHAR_WIDTH = 32;
const CHAR_HEIGHT = 64;
const FONT = "68px Consolas";

export default {
    textToImageMixin: {
        methods: {
            displayAsImg() {
                let tCtx = this.$refs.textCanvas.getContext("2d");
                let imageElem = this.$refs.textImage;
                tCtx = fillContext(tCtx, this.component.symbol.text)
                imageElem.src = tCtx.canvas.toDataURL();
            }
        },

        mounted() {
            this.displayAsImg();
        },
    },

    bracketsToImageMixin: {
        methods: {
            displayBracketsAsImg() {
                let tCtx = this.$refs.textCanvas.getContext("2d");

                tCtx = fillContext(tCtx, this.component.symbol.text.substring(0, 1))
                let leftImageElem = this.$refs.leftBracketImage;
                leftImageElem.src = tCtx.canvas.toDataURL();

                tCtx = fillContext(tCtx, this.component.symbol.text.substring(1, 2))
                let rightImageElem = this.$refs.rightBracketImage;
                rightImageElem.src = tCtx.canvas.toDataURL();
            }
        },

        mounted() {
            this.displayBracketsAsImg();
        },
    }
}

function fillContext(tCtx, text) {
    tCtx.font = FONT;
    tCtx.canvas.width = CHAR_WIDTH
    tCtx.canvas.height = CHAR_HEIGHT;
    tCtx.font = FONT
    tCtx.textBaseline = "middle"
    tCtx.fillText(text, -2, 25, 50);

    return tCtx
}