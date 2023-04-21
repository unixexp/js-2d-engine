export default class Entity {

    constructor(screen, params) {
        this.id = Math.floor(Math.random() * 1000);
        this.screen = screen;
        this.params = params;
        this.scale = typeof(params.scale) !== "undefined" ? params.scale : 1;
    }

    async init() {
        this.screen.context.font = "48px serif";
        const text = "Loading...";
        const textMetrics = this.screen.context.measureText(text);
        const textWidth = textMetrics.width;
        const x = this.screen.canvas.width / 2 - textWidth / 2;
        const y = this.screen.canvas.height / 2;
        
        this.clear();
        this.screen.context.fillText(text, x, y);

        return true;
    }

    clear() {
        this.screen.context.clearRect(
            0,
            0,
            this.screen.canvas.width,
            this.screen.canvas.height
        );
    }

    update(params) {
        this.seconds += params.secondPart;
        // Implement this method in extended custom screens
        // Do not forget call super.update(params); first
    }

    render(params) {
        // Implement this method in extended custom screens
        // Do not forget call super.render(params); first
    }

}