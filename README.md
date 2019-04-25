### 5 steps to apply redux into React app
##### Redux là gì: 
Redux là thư viện được thiết kế dựa trên kiến trúc Flux giúp quản lí state của ứng dụng dễ dàng hơn. Ví dụ như project của chúng ta có nhiều component và việc truyền dữ liệu qua lại giữa các component sẽ rất phức tạp vì vậy Redux đưa ra một giải pháp là các state được lưu trữ tại một điểm duy nhất - gọi là Store. 
Redux có 3 nguyên tắc như sau:

1. Single source of truth: State của toàn bộ ứng dụng được lưu trong trong 1 store duy nhất là 1 Object mô hình tree.
2. State is read-only: Chỉ có 1 cách duy nhất để thay đổi state đó là tạo ra một action.
3. Changes are made with pure functions: Để chỉ rõ state tree được thay đổi bởi 1 action bạn phải viết pure reducers.

##### 1. Create store
* Store là nơi lưu trữ tập trung của toàn bộ dự án. Ngoài ra muốn thay đổi store phaỉ dispact action
-> Reducer -> Change Store nên cần phải khai báo cả Reducer và Action 