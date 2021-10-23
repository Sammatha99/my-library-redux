import { createStore } from "./core.js";

import reducer from "./reducer.js";

// gọi createStore(reducer) trả ra các phương thức {...}
const { attach, connect, dispatch } = createStore(reducer);

// đặt biến dispatch thành global
// để có thể dùng nhìu nơi đc (cả view và store)
window.dispatch = dispatch;

export { attach, connect };
