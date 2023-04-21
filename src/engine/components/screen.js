export default class Screen {

    constructor(app) {
        this.id = Math.floor(Math.random() * 1000);
        this.app = app;
        this.canvas = app.canvas;
        this.context = this.canvas.getContext("2d");
    }

    async init() {
        // Implement this method in extended custom screens
        // Do not forget call super.update(params); first

        this.context.fillStyle = "black";
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.context.font = "18px NineteenNinetySeven";
        this.context.fillStyle = "lightGreen";
        const text = "Loading...";
        const textMetrics = this.context.measureText(text);
        const textWidth = textMetrics.width;
        const x = this.canvas.width / 2 - textWidth / 2;
        const y = this.canvas.height / 2;
        this.context.fillText(text, x, y);

        return true;
    }

    clear() {
        this.context.clearRect(
            0,
            0,
            this.canvas.width,
            this.canvas.height
        );
    }

    update(params) {
        params.scaleX = this.app.viewPortWidth / this.canvas.width;
        params.scaleY = this.app.viewPortHeight / this.canvas.height;
        // Implement this method in extended custom screens
        // Do not forget call super.update(params); first
    }

    render(params) {
        // Implement this method in extended custom screens
        // Do not forget call super.render(params); first
    }

}