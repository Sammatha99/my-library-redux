import { attach } from "../redux/store.js";
import App from "../components/app.js";

// kết nối root với component( đc kết nối với store/state => render html hoàn chỉnh)
attach(App, document.getElementById("root"));
