# Bài 2: Làm chương trình Python của riêng bạn

Trong Python, bạn chỉ cần viết code Python và nhập code bạn muốn chạy. Trình biên dịch Python sẽ chỉ chạy chúng, nhập các thư viện khác và tất cả những gì bạn cần ngay khi nó chạy. Còn C hoàn toàn là một con quái vật khác khi bạn phải biên dịch file gốc và trực tiếp kết hợp chúng với nhau thành một dãy nhị phân mà khi đó, nó có thể tự biên dịch. Trực tiếp kết hợp chúng lại, trong bài trước bạn đã dùng lệnh "make" để làm điều đó.

Trong bài tập này, bạn sẽ được học một chút về công cụ kiểm soát file của một chương trình, gọi là GNU Make, và bạn sẽ được học cách sử dụng nó song song với việc học C. Công cụ Make này sẽ đồng hành cùng bạn đến hết quyển sách. Nó sẽ biên dịch code của bạn, chạy các mẫu đầu vào, và làm tất cả mọi thứ mà Python hay làm.

Sự khác biệt ở đây là, tôi sẽ cho các bạn thấy, sự tân tiến của Makefile một cách phi thường, là khi mà bạn không còn phải xác định rõ mọi thứ nhỏ nhặt của chương trình C để nó có thể biên dịch. Tôi sẽ không làm thế trong bài tập này, nhưng sau khi bạn sử dụng cách làm "trẻ con", tôi sẽ cho các bạn xem cách làm "cao thủ".

# Sử dụng Make 

Đầu tiên trong việc sử dụng Make chỉ là dùng nó đối với các chương trình đã biết sẵn cách biên dịch. Make có lượng kiến thức vô cùng lớn trong việc xây dựng nhiều loại tệp từ các tệp tin khác. Ở bài trước, bạn đã sử dụng những dòng lệnh như thế này:

> ```
> $ make ex1
> # or this one too
> $ CFLAGS="-Wall" make ex1

Tại lệnh đầu tiên, bạn đã dùng lệnh make, "Tôi muốn tạo 1 tập tin có tên là ex1.". Khi đó, Make sẽ làm như sau:
* File tên ex1 đã tồn tại chưa ?
* Không. Ok, vậy đã có một file nào bắt đầu với ex1 chưa ?
* Có rồi, nó tên là ex1.c. Tôi đã biết cách biên dịch file đuôi .c chưa ?
* Có rồi, tôi sẽ chạy lệnh cc ex1.c -o ex1 để biên dịch chúng.
* Tôi sẽ làm cho bạn một tệp ex1 bằng cách sử dụng cc để biên dịch từ tệp ex1.c.

Lệnh thứ hai được nêu ở trên là một cách để vượt qua "bộ điều chỉnh" để có được một lệnh. Nếu bạn chưa quen với môi trường Unix, bạn có thể tạo những "biến môi trường", bạn sẽ học hỏi được thêm bằng những chương trình bạn chạy. Thi thoảng bạn làm như thế với các lệnh như export CFLAGS="-Wall" phụ thuộc vào những gì bạn thấy. Bạn cũng có thể dùng chúng trước các lệnh bạn muốn chạy, và biến môi trường đó sẽ chỉ được sử dụng khi lệnh chạy.

Trong ví dụ này, tôi đã dùng lệnh CFLAGS="-Wall" make ex1  nên nó sẽ thêm sự lựa chọn vào dòng lệnh -Wall vào lệnh cc để make có thể chạy một cách bình thường. Sự lựa chọn lệnh đó sẽ nói cho trình biên dịch cc hiểu để có thể phát hiện tất cả các lỗi (trong một số tình huống thì không phải tất cả các lỗi đều khả thi).

Bạn có thể có đi khá là xa chỉ với lệnh make, nhưng hãy bắt đầu làm một tệp Makefile để bạn có thể khiến chúng trở nên dễ dàng hơn. Để bắt đầu, chúng ta cùng tạo một tệp chỉ với vài dòng sau:

> CFLAGS=-Wall -g\
> clean:\
>    rm -f ex1

Lưu tệp này dưới tên Makefile trong máy của bạn. Make sẽ tự giả định rằng có 1 file tên là Makefile và chạy nó. LƯU Ý: Đảm bảo rằng bạn chỉ nhập vào các kí tự TAB, không phải là một mớ hỗn độn TAB và dấu cách.

Tệp Makefile này sẽ cho bạn thấy những điều mới với make. Đầu tiên chúng ta đã đặt CFLAGS trong tệp nên ta sẽ không bao giờ phải đặt nó lại, mà còn dán cờ được -g để có thể tìm lỗi. Sau đó ta có một phân đoạn có tên là clean, sẽ chỉ cho ta cách dọn sạch chương trình của chúng ta.

Cần chắc chắn rằng tệp đó đã ở cùng thư mục với file ex1.c, và gõ những lệnh sau: 
> $ make clean\
> $ make ex1

# Những gì bạn nên thấy 

Nếu chúng chạy, bạn sẽ thấy:
> $ make clean\
> rm -f ex1\
> $ make ex1\
> cc -Wall -g    ex1.c   -o ex1\
> ex1.c: In function 'main':\
> ex1.c:3: warning: implicit declaration of function 'puts'\
> $

Ở đây các bạn có thể thấy tôi đang chạy lệnh make clean mà nó đã khiến lệnh make chạy, để đạt mục tiêu cho lệnh clean. Cùng nhìn lại Makefile một lần nữa và bạn sẽ thấy ở dưới phần này, tôi đã căn dòng và đưa lệnh tôi muốn make chạy cho tôi. Bạn có thể đưa nhiều lệnh nhất bạn muốn vào, nó sẽ là một công cụ tự động tuyệt vời. 

Lưu ý 

Nếu bạn đã sửa file ex1.c với dòng #include <stdio.h> thi kết quả ra sẽ không có lỗi gì với hàm puts. Ở đây hiện ra lỗi khi biên dịch, đơn giản vì tôi không sửa nó.

Cùng với đó, mặc dù chúng ta không hề nhắc đến file ex1 trong Makefile, make vẫn biết đọc nó cùng với những cài đặt đặc biệt của ta.

# Làm thế nào để phá code

Từng này là vừa đủ để bạn bắt đầu, nhưng đầu tiên, chúng ta cùng phá file make này một cách cụ thể để có thể thấy điểu gì sẽ xảy ra. Hãy cùng chạy lại file make clean và bạn sẽ có được vài thứ như thế này:
> $ make clean\
> Makefile:4: *** missing separator.  Stop.

Luôn luôn nhớ là phải căn lề, và nếu bạn gặp những lỗi dị như thế này thì hãy kiểm tra liên tục bởi bạn chắc chắn đã dùng kí tự tab bởi các biến thể của chúng rất cầu kì.

# Bài tập thêm 

* Khởi tạo file all: ex1 mà nó sẽ đọc ex1 chỉ với lệnh make.
* Đọc man make để có thêm thông tin về cách chạy nó. 
* Đọc man cc để tìm hiểu thêm về cách cờ -Wall và -g hoạt động.
* Nghiên cứu Makefile trên mạng và thử xem nếu bạn có thể nâng trình độ của bạn lên nữa không.
* Tìm file Makefile trong một chương trình C khác và tìm hiểu xem nó đang làm gì.