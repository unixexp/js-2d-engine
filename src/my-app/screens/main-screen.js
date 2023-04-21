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
        
        const border = {
            x: 0,
            y: 0,
            w: this.app.worldWidth,
            h: this.app.worldHeight,
            color: "red"
        }

        const rectangle = {
            x: this.app.worldMouseX,
            y: this.app.worldMouseY,
            w: 128,
            h: 128,
            color: "black"
        }

        const mouseLegend = {
            x: Math.round(this.app.worldMouseX),
            y: Math.round(this.app.worldMouseY),
            xPos: rectangle.x,
            yPos: rectangle.y - 10,
            color: "green"
        }

        this.context.strokeStyle = border.color;
        this.context.strokeRect(
            this.app.scaleByX(border.x),
            this.app.scaleByY(border.y),
            this.app.scaleByX(border.w),
            this.app.scaleByY(border.h),
        );

        this.context.fillStyle = rectangle.color;
        this.context.fillRect(
            this.app.scaleByX(rectangle.x),
            this.app.scaleByY(rectangle.y),
            this.app.scaleByX(rectangle.w),
            this.app.scaleByY(rectangle.h),
        );

        this.context.fillStyle = mouseLegend.color;
        this.context.font = `${this.app.scaleByMinAxis(48)}px NineteenNinetySeven`;
        this.context.fillText(
            `${mouseLegend.x}, ${mouseLegend.y}`,
            this.app.scaleByX(mouseLegend.xPos),
            this.app.scaleByY(mouseLegend.yPos)
        );

    }

}