# Impletation library to help build UI

**Learning and practicing how to self-building a library to manage/update UI when data changes, works like redux in ReactJS**

<p  align="center">
<img src="https://blog.itnavi.com.vn/uploads/2021/04/Redux-l%C3%A0-g%C3%AC-2.jpg" width="70%"/>
</p>

### Notes:

1. `core.js`: main library, stores 2 important components
   - Template html engine: helps create html faster, can be reused
   - CreateStore:
      * creating store with initial state by using reducer()
      * roots: helps connect html(root) with component(), then render the innerHTML inside it (root.innerHTML = component())
       * methods/functions: were carefully explained in each file
2. `reducer.js`: depending on the application to rebuild actions, initstate, ... more suitable.
3. `store.js`: main store
4. `app.js`: manages component(), had connected with store through connect(<state truyền vào nếu cần>) => return html
5. `script.js`: helps connect component() with outside html (root)

### Reusability

- `core.js` is main library, just copy-paste and use it.
- You have to rebuild Remaining files base on your need, but the structure still the same.

### Reference

https://itnavi.com.vn/blog/redux-la-gi/
