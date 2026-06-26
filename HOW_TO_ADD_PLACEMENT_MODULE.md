# How to Add a New Placement Module

Ví dụ muốn active SAT sau này.

## 1. Tạo data file

Tạo file:

```txt
src/data/satPlacementData.ts
```

Cần export ít nhất:

```ts
export const satSections = [...];
export const satPlacementLevels = [...];
export const satPlacementVersions = { A: [...], B: [...] };
export const satTeacherReviewPrompts = { A: {...}, B: {...} };
```

Format câu hỏi dùng `PlacementQuestion` trong `src/types.ts`.

## 2. Tạo report logic

Tạo:

```txt
src/modules/sat/report.ts
```

Nên export:

```ts
export function buildSatPlacementReport(score, contact) {
  return {
    sectionDiagnostics,
    skillProfile,
    priorityFocus,
    placementConfidence,
    studyEstimate,
  };
}
```

Có thể dùng helper chung:

```ts
import { buildSectionDiagnostics, buildPriorityFocus, buildPlacementConfidence } from "../shared/diagnostics";
import { buildStudyEstimate } from "../shared/studyTime";
```

## 3. Tạo module file

Tạo:

```txt
src/modules/sat/module.tsx
```

Copy cấu trúc từ:

```txt
src/modules/ielts/module.tsx
```

Thay data, report, ResultView theo SAT.

## 4. Đăng ký module

Mở:

```txt
src/modules/registry.ts
```

Thay dòng SAT intake:

```ts
createIntakeModule("sat", "SAT Core")
```

bằng:

```ts
satModule
```

và thêm import:

```ts
import { satModule } from "./sat/module";
```

## 5. Test

```bash
npm run build
npm run dev
```

Test URL:

```txt
http://localhost:5173/?test=sat&version=A
```

## Không cần sửa

Thông thường không cần sửa:

- `App.tsx`
- `PlacementCenterApp.tsx`
- backend route `/placement/submit`
- common pages

Chỉ cần thêm module + data + report.
