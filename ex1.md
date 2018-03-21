# Bài 1: Thử trình biên dịch

Đây là chương trình đơn giản đầu tiên bạn có thể làm với ngôn ngữ C:
> ```c
> int main(int argc, char *argv[])
> {  
>   puts("Hello world.");  
>   return 0;
> }

* Để cài trình biên dịch cho chương trình C của bạn trên Linux, bạn hãy gõ lệnh:
> $ sudo apt-get install build-essential

* Để sửa chương trình, bạn dùng lệnh: 
> $ nano <tên_chương_trình>

 
Bạn có thể cho chương trình trên vào một file ex1.c rồi gõ lệnh:

> $ make ex1   
> cc ex1.c -o ex1

Máy tính của bạn có thể dùng lệnh khác, nhưng kết quả cuối cùng sẽ giống như trên.

# Những gì bạn nên thấy 
Giờ bạn có thể chạy chương trình trên và xem kết quả.

> $ ./ex1\
> Hello world.

Nếu bạn không ra được kết quả như trên, hãy kiểm tra lại code của bạn và sửa nó.

# Làm thế nào để "phá" code
Trong cuốn sách này, tôi sẽ bỏ ra một phần nhỏ ở mỗi chương trình nói về cách để "phá" chúng. Tôi sẽ khiến bạn phải làm những điều khá kì cục cho chương trình của bạn, biên dịch chúng theo cách kì cục, hoặc thay đổi code để code của bạn có thể không chạy hoặc gặp lỗi khi biên dịch.

Đối với chương trình này, khi ta đọc với mọi trình biên dịch sẽ đều cho ra các cảnh báo:
> $ rm ex1  
> $ CFLAGS="-Wall" make ex1  
> cc -Wall    ex1.c   -o ex1  
> ex1.c: In function 'main':  
> ex1.c:3: warning: implicit declaration of function 'puts'  
> $ ./ex1  
> Hello world.  
> $ 

Bây giờ bạn gặp một cảnh báo khiến code bạn không chạy được. Nó nói rằng hàm "puts" bị khai báo ẩn. Trình biên dịch C đủ thông minh để hiểu được bạn muốn gì, nhưng bạn nên tránh khỏi tất cả các cảnh báo của trình biên dịch khi còn có thể. Cách làm hiện tại là thêm dòng sau lên đầu của file ex1.c và biên dịch lại:
>```c
> #include<stdio.h>

Giờ hãy làm lại như những bước trên và bạn sẽ thấy các cảnh báo biến mất.

# Bài tập thêm 

* Mở file ex1 bằng trình chỉnh sửa văn bản và thay đổi hoặc xoá một vài phần ngẫu nhiên. Thử chạy nó và xem điều gì sẽ xảy ra.
* In thêm 5  chữ hoặc dòng chữ phức tạp hơn "Hello world".
* Chạy thử "man 3 puts" và tìm hiểu thêm về các hàm tương tự.