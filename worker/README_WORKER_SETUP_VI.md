# Cloudflare Worker gửi Placement Test qua Gmail giáo viên

Worker này không lưu database. Nó chỉ nhận dữ liệu từ React site và gửi email đến Gmail giáo viên qua Resend.

## Vì sao cần Worker?

Frontend React không nên tự gửi email trực tiếp. Nếu dùng Gmail SMTP/API trực tiếp trên frontend sẽ lộ thông tin hoặc rất khó bảo trì.

Flow đúng:

```txt
React website → Cloudflare Worker → Resend → Gmail giáo viên
```

## Chuẩn bị

Cần có:

- Cloudflare account
- Resend account
- Một sender email đã verify trong Resend, ví dụ: placement@yourdomain.com
- Gmail giáo viên nhận kết quả, ví dụ: teacher@gmail.com

## Cài Worker

Trong thư mục `worker`, tạo file thật từ file mẫu:

```bash
copy wrangler.toml.example wrangler.toml
```

Hoặc trên Mac/Linux:

```bash
cp wrangler.toml.example wrangler.toml
```

Sửa trong `wrangler.toml`:

```toml
TEACHER_EMAIL = "teacher@gmail.com"
FROM_EMAIL = "Placement Test <placement@yourdomain.com>"
ALLOWED_ORIGIN = "https://your-placement-site.pages.dev"
```

## Set secret Resend API key

```bash
npx wrangler secret put RESEND_API_KEY
```

Dán API key từ Resend.

## Deploy Worker

```bash
npx wrangler deploy
```

Sau khi deploy, Cloudflare sẽ trả về Worker URL.

Ví dụ:

```txt
https://brington-placement-email.yourname.workers.dev
```

Frontend đang gọi POST thẳng vào URL bạn đặt trong `.env`.

Nếu Worker URL là:

```txt
https://brington-placement-email.yourname.workers.dev
```

thì file `.env` ở frontend dùng:

```env
VITE_PLACEMENT_API_URL=https://brington-placement-email.yourname.workers.dev
```

## Test nhanh

Chạy frontend:

```bash
npm run dev
```

Làm thử placement test.

Nếu email gửi thành công, màn hình result sẽ hiện:

```txt
Your placement test has been submitted to the academic team.
```

## Nếu bị lỗi CORS

Kiểm tra `ALLOWED_ORIGIN` trong `wrangler.toml`.

Khi test local, có thể tạm set:

```toml
ALLOWED_ORIGIN = "http://localhost:5173"
```

Khi deploy thật, đổi lại domain thật.
