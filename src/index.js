'use strict';

import "./assets/scss/index.scss";
import App from "./engine/components/app"
import MainScreen from "./my-app/screens/main-screen";

const app = new App("main-canvas", 1000, 1000, (app) => {
    app.setScreen(new MainScreen(app));
    app.run();
});
