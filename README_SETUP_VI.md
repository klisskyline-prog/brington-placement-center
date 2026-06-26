# Brington / Skyline Placement Center — Modular v4.0

Bản này đã được refactor lại theo kiến trúc module, không còn nhồi logic vào `App.tsx`.

## Chạy local

```bash
npm install
npm run dev
```

Mở:

```txt
http://localhost:5173
```

Test nhanh module:

```txt
http://localhost:5173/?test=esl&version=A
http://localhost:5173/?test=esl&version=B
http://localhost:5173/?test=ielts&version=A
http://localhost:5173/?test=ielts&version=B
```

## Build

```bash
npm run build
```

Đã build kiểm tra thành công trước khi đóng gói.

## Gửi email qua Brington API

Tạo file `.env` ở root project:

```env
VITE_PLACEMENT_API_URL=https://brington-portal-api.pages.dev/placement/submit
```

Nếu không có `.env`, web vẫn chạy và có nút backup JSON/email draft.

## Module active hiện tại

- ESL Placement: active, A/B random, 70 câu auto-grade, writing/speaking teacher review, diagnostic report, study time estimate.
- IELTS Placement: active, A/B random, 60 câu auto-grade, writing/speaking teacher review, diagnostic report, study time estimate.
- SAT, American Diploma/K–12, Chinese, AI: intake-only modules, sẵn cấu trúc để active sau.

## Dev test tools

Khi chạy `npm run dev`, trong màn hình test có nút:

- Auto-fill correct
- Auto-fill random

Nút này chỉ hiện local dev để test nhanh, không hiện trong bản build public.
