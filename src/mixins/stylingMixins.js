export default {
    positioningMixin: {
        props: {
            positionX: 0,
            inputBaseLine: 0
        },

        methods: {
            position() {
                // return `left: ${this.positionX}px; width: ${this.component.width}px`

                return {
                    left: this.positionX + 'px',
                    width: this.component.width + 'px',
                    height: this.component.height + 'px',
                    bottom: this.basePosition + 'px'
                }
            }
        }
    }
}