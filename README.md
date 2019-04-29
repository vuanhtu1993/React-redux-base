### 5 steps to apply redux into React app

#### 1. Install "redux" and "react-redux"

#### 2. CREATE STORE using "redux" (emphasize)
##### Redux là gì: 
Redux là thư viện được thiết kế dựa trên kiến trúc Flux giúp quản lí state của ứng dụng dễ dàng hơn. Ví dụ như project của chúng ta có nhiều component và việc truyền dữ liệu qua lại giữa các component sẽ rất phức tạp vì vậy Redux đưa ra một giải pháp là các state được lưu trữ tại một điểm duy nhất - gọi là Store. 
Redux có 3 nguyên tắc như sau:

1. Single source of truth: State của toàn bộ ứng dụng được lưu trong trong 1 store duy nhất là 1 Object mô hình tree.
2. State is read-only: Chỉ có 1 cách duy nhất để thay đổi state đó là tạo ra một action.
3. Changes are made with pure functions: Để chỉ rõ state tree được thay đổi bởi 1 action bạn phải viết pure reducers.

##### 2.1. Create action, reducer, store
* Store là nơi lưu trữ tập trung của toàn bộ dự án. Ngoài ra muốn thay đổi store phaỉ dispact action
-> Reducer -> Change Store nên cần phải khai báo cả Reducer và Action trước
Lưu trữ toàn bộ state tree do root reducer trả về 

* Action: là một object mang 2 trường thông tin gửi đến store là type, payload. 
trong đó type: mô tả action, payload: tham số truyền vào

* Reducer: là một pure function nhận 2 tham số đầu vào là state cũ và action => cập nhật state cũ thành state mới tương ứng với action

* Combination reducer: root reducer có chứa helper function combinationReducer() 
kết hợp output của nhiều reducer thành một single state tree

#### 3. APPLY STORE into app using "react-redux"
##### 3.1 HOC connect là gì ?
Nhiệm vụ là connect React component to Redux store. Connect ở đây là mapStateToProps, dispatch actions,

```javascript
function connect(mapStateToProps?, mapDispatchToProps?, mergeProps?, options?)
```

##### 3.2 method mapStateToProps
Phương thức mapStateToProps một khi được định nghĩa là nó đã subcribe Redux store nên mỗi khi 
store thay đổi thì phương thức này sẽ được gọi :)))

Nếu không muốn subcribe store thì truyền underfined hoăc null vào.
```javascript
const mapStateToProps = state => ({ todos: state.todos })
```

##### 3.3 method mapDispatchToProps
Mặc định tất cả các component bọc bới connect đều có props dispatch kể cả không truyền
thâm số vào vị trí mapDispatchToProps
Khi khai bào method này đầu ra định nghĩa một object chứa các action 
```javascript
const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    increment: () => dispatch({ type: 'INCREMENT' }),
    decrement: () => dispatch({ type: 'DECREMENT' }),
    reset: () => dispatch({ type: 'RESET' })
  }
}
```
* Cách short-hand, tái sử dụng code. Ngay tại file action đã định nghĩa luôn dispatch action đó thể nào
trong component chỉ cần gọi 
```javascript
// Action file

// Component
import { addTodo, deleteTodo, toggleTodo } from './actionCreators'

const mapDispatchToProps = {
  addTodo,
  deleteTodo,
  toggleTodo
}

export default connect(
  null,
  mapDispatchToProps
)(TodoApp)
```
