# SERVICE ORIENTED ARCHITECTURE

Đồ án môn học: **Kiến trúc hướng dịch vụ**
Giảng viên hướng dẫn: [**Dương Hữu Phúc**][dhp]

Thành viên tham gia:

-   Phạm Nguyễn Hoàng Quân - 51900419
-   Trần Hữu Nhất - 519H0210
-   Nguyễn Minh Phước - 51900770

## Giới thiệu đề tài

-   Tên đề tài: **TÌM HIỂU VÀ PHÂN TÍCH HỆ THỐNG THÔNG TIN SINH VIÊN**
-   Hệ thống quản lý thông tin sinh viên của sinh viên đóng vai trò hết sức quan trọng
    đối với hoạt động của các trường đại học, cao đẳng, ... Hệ thống thông tin sinh viên
    là một hệ thống cung cấp các dịch vụ, công cụ và tài nguyên để quản lý thông tin
    liên quan đến sinh viên trong một trường đại học hoặc các tổ chức giáo dục khác.
    Việc triển khai hệ thống thông tin sinh viên giúp trường đại học quản lý dữ liệu sinh
    viên một cách chính xác và hiệu quả, từ đó giảm thiểu tình trạng nhầm lẫn và tránh
    việc bị mất thông tin quan trọng. Hệ thống quản lý sinh viên giúp giảng viên và nhân
    viên quản lý trường có thể dễ dàng truy cập và cập nhật thông tin sinh viên một
    cách chính xác và nhanh chóng. Bên cạnh đó cũng giúp sinh viên quản lý thông tin
    cá nhân, đăng ký học phần, xem thời khóa biểu và kiểm tra điểm số để dễ dàng quản
    lý việc học tập. Hệ thống cung cấp các chức năng cơ bản như quản lý thông tin sinh
    viên, quản lý lớp, quản lý điểm, quản lý môn học và các chức năng phục vụ việc học
    tập như xem thời khóa biểu, đăng ký kế hoạch học tập, đăng ký môn học, ...

## Những tính năng chính

-   Quản lý thông tin sinh viên: Cho phép quản lý các thông tin cá nhân của sinh viên
    như tên, mã số sinh viên, ngày sinh, địa chỉ, số điện thoại, . . .
-   Quản lý môn học: Cho phép quản lý các môn học mà sinh viên đã đăng ký, thêm
    môn học
-   Xem thông tin cá nhân: Cho phép sinh viên xem thông tin của bản thân và chỉnh
    sửa các thông tin được cho phép
-   Đăng ký kế hoạch học tập: Sinh viên thực hiện đăng ký kế hoạch học tập để thống
    kê số lượng và mở lớp
-   Đăng ký môn học: Sinh viên thực hiện đăng ký môn học
-   Xem thời khóa biểu: Cho phép sinh viên xem thời khóa biểu theo tuần hoặc tổng
    quát
-   Thống kế số lượng sinh viên đăng ký: Thống kê số lượng sinh viên đăng ký kế
    hoạch học tập để mở lớp
-   Quản lý lớp môn học: Cho phép Phòng đại học mở lớp môn học và xem lại danh
    sách các lớp môn họ

## Công nghê sử dụng

Công nghệ sử dụng cho việc xây dụng hệ thống API BACK-END:

-   [Node.js] - evented I/O for the backend
-   [Express] - fast node.js network app framework

Công nghệ sử dụng xây dựng giao diện người dùng:

-   [VueJS] - HTML enhanced for web apps!

Hệ cơ sở dũ liệu : [MongoDB] [MySQL]

## Cài đặt

Yêu cầu tối thiểu [Node.js](https://nodejs.org/) v10+

Tiến hành cài đặt các gói thư viện cần thiết cho Back-end:

```sh
cd backend
npm install --force
```

Tiến hành cài đặt các gói thư viện cần thiết cho Front-end:

```sh
cd frontend
npm install
```

Cấu hình các biến môi trường cho Front-end:

-   **SERVER_BASE_URL**: địa chỉ mặc định của server.
-   **VUE_APP_BASE_URL**: địa chỉ mặc định của VueJS font-end chạy ở môi trường DEV.
-   **VUE_APP_API_URL**: chỉ định địa chỉ API cho việc call API ở phía font-end.

Cài đặt MongoDB, xem thêm cách cài đặt tại đây [MongoDB - Document]

## Khởi chạy hệ thống

Dưới đây là các bước chi tiết khởi chạy hệ thông sau khi hoàn thành các yêu cầu tối thiểu phía trên.

##### 1. Chạy ứng dụng :

APi sẽ được khởi chạy mặc định tại [localhost:3300](http://localhost:3300/)
Để xem document của api [localhost:3300/api/docs](http://localhost:3300/api/docs)

-   Khởi chạy api:

```
cd backend
npm run dev
```

Ứng dụng Vue sẽ được khởi chạy mặc định tại [localhost:8080](http://localhost:8080)

-   Khởi chạy Vue app:

```
cd frontend
npm run serve
```

##### 2. Build ứng dụng Vue:

Để build ứng dụng VUE bằng cách chạy dòng lệnh sau:

```
cd frontend
npm run build
```

Sau khi hoàn tất quá trình build ứng dụng, các tài nguyên được tạo trong thư mục **/frontend/dist**

## License

MIT

**Thanks!**

[//]: # "These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax"
[dhp]: https://github.com/duonghuuphuc
[git]: https://git-scm.com/
[node.js]: http://nodejs.org
[express]: http://expressjs.com
[vuejs]: http://vuejs.org
[mongodb]: https://www.mongodb.com
[mongodb - document]: https://www.mongodb.com/docs/
[MySQL]: https://www.mysql.com/
