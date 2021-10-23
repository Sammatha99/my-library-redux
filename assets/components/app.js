import html from "../redux/core.js";
import { connect } from "../redux/store.js";

// return ra hàm bên trong, có đối số là component, mặc định dữ liệu là state hiện tại nếu ko truyền gì vào connect()
// hoặc chỉ truyền những gì cần sử dụng thôi, vd:
/**
 * const connector = connect(state => ({
 *      cars: state.cars;
 * }))
 */
// ~= (function(state))( <component> (props ,...args) )
const connector = connect();

// somehow đc chạy cái connector(App)
// nên từ bây giờ đã nhận đc state r
function App({ cars }) {
  return html`
    <ul>
      ${cars.map((car) => `<li>${car}</li>`)}
    </ul>

    <button onclick="dispatch('ADD', 'elegant')">add car</button>
  `;
}

export default connector(App);
