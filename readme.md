# Tự code thư viện build ui

**Học cách tạo tay một thư viện quản lý cập nhật ui khi có thay đổi dữ liệu, hoạt động như redux trong reactjs**

<p  align="center">
<img src="https://blog.itnavi.com.vn/uploads/2021/04/Redux-l%C3%A0-g%C3%AC-2.jpg" width="70%"/>
</p>

### ghi chú

1. `core.js`: thư viện chính, lưu trữ 2 thành phần quan trọng
   - Template html engine: create html nhanh hơn, tái sử dụng được
   - CreateStore:
     a. Tạo ra store với state init ban đầu thông qua reducer()
     b. roots: kết nối các thành phần html(root) với component() render ra innerHTML trong nó (root.innerHTML = component())
     c. Các hàm: được giải thích kỹ trong file
2. `reducer.js`: tùy ứng dụng mà viết lại các actions, initstate, ...
3. `store.js`: này là store chính thức của ứng dụng
4. `app.js`: quản lý các component(), đã kết nối với store thông qua connect(<state truyền vào nếu cần>) => trả ra html
5. `script.js`: kết nối các component() với thành phần html (root) bên ngoài

### khả năng tái sử dụng

- như giải thích ở trên, `core.js` là thư viện chính
- các file còn lại `store.js, app.js, script.js, và reducer.js` sẽ được tạo ra tùy theo ứng dụng đang dùng, nhưng cấu trúc tạo vẫn như trên

### kham thảo thêm

https://itnavi.com.vn/blog/redux-la-gi/
