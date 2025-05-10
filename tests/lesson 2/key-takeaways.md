# GIT
- git add .
- git commit -m ""
- git push

1. Ba vùng trạng thái của git
- Working Directory
- Staging Area [git add .] toàn  bộ, [git add tên file]
- Respository (git commit -m)

2. Khởi tạo thư mục mới -> câu lệnh: git init 
3. Cấu hình git:
- Cho 1 repo: git config user.name "", git config user.email ""
- Cho toàn bộ máy tính: git config --global user.name "", git config --global user.email ""

4. Câu lệnh kiểm tra status file: git status
+ file màu xanh: Staging Area
+ file màu dỏ: Working Directory

5. Câu lệnh kiểm tra lịch sử: git log

## Git convention (quy tắc chung)
type: short_description

với type: loại commit
- chore: sửa nhỏ lẻ, chính tả, xóa file không dungf tới,..
- feat: thêm tính năng mới, test case mới
- fix: sửa lỗi 1 test trc do

6. Workflow

init  config  add  commit  push

init config: khi tạo mới 1 folder và làm việc tren folder do.


# JAVASCRIPT
- là NNLT phổ biến
- JVS giúp cho browser chạy dc, có các engine de sp JVS chạy dc
- Đối với máy cá nhân, muốn code chạy dc JVS thì cài NodeJs -> biên dịch code JVS để chạy

Chạy file js, câu lệnh: node <tên file>

1. Biến: variable. đặt tên biến thì trc có dấu _ hoặc $. vd: Var _myName, không dc đặt keyword như var let. 
Khai báo biến let hoặc var
- var khai báo lại dc, còn let thì không
- var phạm vi toàn cục
- let phạm vi trog cặp ngoặc{}

2. Hằng số: const, không gán lại biến cho nó dc
3.  Data type: có 8 loại kiểu dl: string, number, Boolean, bigint, undefined, null, symbol, object
4. Comparison operator: toán tử so sánh: <,>, ==, ===, !=, !==, >=, <=
5. Unary operator: toán tử một ngôi
i++ bang voi i = i+1	++i
i-- bang voi i=i-1	--i
6. Arithmetic operator: toán tử số học + - * /
7. Conditional: điều kiện if (đk) {/code}
8. Loop: vòng lặp for( khởi tạo; đk dừng; đk tăng) {/code}

Format code: Alt + Shift + F
