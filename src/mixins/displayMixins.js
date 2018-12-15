export default {
    textToImageMixin: {
        methods: {
            displayAsImg() {
                let tCtx = this.$refs.textCanvas.getContext("2d");
                let imageElem = this.$refs.textImage;

                tCtx.font = "48px Consolas";
                tCtx.canvas.width = tCtx.measureText(this.component.symbol.text).width;
                tCtx.canvas.height = tCtx.canvas.width;
                tCtx.font = "28px Consolas";
                tCtx.fillText(this.component.symbol.text, 0, 20, 50);

                imageElem.src = tCtx.canvas.toDataURL();
            }
        },

        mounted() {
            this.displayAsImg();
        },
    }
}