import Koa from "koa";
import { dev } from "./middlewares/parcel/dev.js";

(async () => {
    const app = new Koa();

    await dev(app);

    app.listen(8964, () => {
        console.log("Server is Running at 8964");
    });
})();