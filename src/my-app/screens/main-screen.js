import Screen from "../../engine/components/screen";
import { loadImage } from "../../engine/utils/files";

export default class MainScreen extends Screen {

    constructor(app) {
        super(app);
        this.image = null;
    }

    async init() {
        super.init();

        try {
            this.image = await loadImage(`assets/img/background.jpg`);
        } catch (err) {
            return false;
        }

        return true;
    }

    update(params) {
        super.update(params);
    }

    render(params) {
        super.render(params);
        const { scaleX, scaleY } = params;

        const w = 500;
        const h = 500;
        const x = this.viewPortWidth - w;
        const y = this.viewPortHeight - h;

        const scaledW = w / scaleX;
        const scaledH = h * scaledW / w;
        const scaledX = this.app.viewPortWidth / scaleX - scaledW;
        const scaledY = this.app.viewPortHeight / scaleY - scaledH;

        console.log(scaledW);
        console.log(scaledH);

        this.context.fillStyle = "red";
        this.context.fillRect(scaledX, scaledY, scaledW, scaledH);
    }

}