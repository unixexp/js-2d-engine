export default class App {

    constructor(canvasElementId, viewPortWidth, viewPortHeight, onLoad) {
        this.keys = [];
        this.screenInitialized = false;
        this.paused = false;
        this.canvas = null;
        this.viewPortWidth = viewPortWidth;
        this.viewPortHeight = viewPortHeight;

        window.addEventListener("keydown", e => {
            if (this.keys.findIndex(k => k === e.key) === -1)
                this.keys.push(e.key);
        });

        window.addEventListener("keyup", e => {
            this.keys.splice(this.keys.indexOf(e.key));
        });

        window.addEventListener("resize", e => {
            this.canvasStyle = window.getComputedStyle(this.canvas);
            const canvasStyle = window.getComputedStyle(this.canvas);
            this.canvas.width = parseInt(canvasStyle.width);
            this.canvas.height = parseInt(canvasStyle.height);
        });

        window.addEventListener("load", () => {
            this.canvas = document.getElementById(canvasElementId);
            const canvasStyle = window.getComputedStyle(this.canvas);
            this.canvas.width = parseInt(canvasStyle.width);
            this.canvas.height = parseInt(canvasStyle.height);
            onLoad(this);
        });

    }

    async setScreen(screen) {
        this.screenInitialized = false;
        this.screenInitialized = await screen.init();
        this.screen = screen;
    }

    pause() {
        this.paused = !this.paused;
    }

    run() {
        let lastTime = 0;

        requestAnimationFrame(tick.bind(this));

        function tick(timestamp) {
            requestAnimationFrame(tick.bind(this));
    
            const deltaTime = timestamp - lastTime;
            const fps = 1000 / deltaTime;
            const secondPart = deltaTime / 1000;

            const params = {
                timestamp,
                lastTime,
                deltaTime,
                fps,
                secondPart,
                keys: this.keys
            };

            lastTime = timestamp;

            if (this.screen && this.screenInitialized && !this.paused) {
                this.screen.update(params);
                this.screen.clear();
                this.screen.render(params);
            }
        }
    }

}