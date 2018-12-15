const CHAR_WIDTH = 32;
const CHAR_HEIGHT = 64;
const FONT = "68px Consolas";

export default {
    textToImageMixin: {
        methods: {
            displayAsImg() {
                let tCtx = this.$refs.textCanvas.getContext("2d");
                let imageElem = this.$refs.textImage;

                tCtx.font = FONT;
                tCtx.canvas.width = CHAR_WIDTH
                tCtx.canvas.height = CHAR_HEIGHT;
                tCtx.font = FONT
                tCtx.textBaseline = "middle"
                tCtx.fillText(this.component.symbol.text, -2, 25, 50);

                imageElem.src = tCtx.canvas.toDataURL();
            }
        },

        mounted() {
            this.displayAsImg();
        },
    }
}