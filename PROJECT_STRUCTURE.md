# Project Structure

```txt
src/
  App.tsx                         # Chỉ gọi PlacementCenterApp
  app/
    PlacementCenterApp.tsx         # State + workflow controller chung
  components/
    BackgroundDecor.tsx
    StepIndicator.tsx
    TopBar.tsx
    result/
      ResultShell.tsx              # Hero, admissions, submit status, teacher pending
      ReportBlocks.tsx             # Breakdown, insight, recommendation, study estimate
  pages/
    IntroPage.tsx
    SelectTestPage.tsx
    ContactPage.tsx
    TestPage.tsx
    ReviewPage.tsx
    ResultPage.tsx                 # Render result theo module
  modules/
    registry.ts                    # Danh sách 6 placement modules
    types.ts                       # Contract chuẩn cho mọi module
    shared/
      diagnostics.ts               # Label, priority, confidence chung
      studyTime.ts                 # Công thức giờ học chung
    esl/
      module.tsx                   # ESL module config + result view
    ielts/
      module.tsx                   # IELTS module config + result view
      report.ts                    # IELTS diagnostic + study estimate logic
    intake/
      moduleFactory.tsx            # SAT/K12/Chinese/AI intake-only modules
  data/
    eslPlacementData.ts            # ESL questions, levels, prompts, cards
    ieltsPlacementData.ts          # IELTS questions, levels, prompts
  services/
    submitPlacement.ts             # API submit + email draft text
  utils/
    scoring.ts                     # Auto-grade chung
    eslReport.ts                   # ESL diagnostic + study estimate logic
    navigation.ts                  # URL test/version override + random version
    readingPrompt.ts               # Reading passage parser
```

## Nguyên tắc

- Mỗi test/certificate có module riêng.
- App controller chỉ xử lý flow chung.
- Test module quyết định: questions, sections, levels, teacher prompts, report logic, result UI.
- Backend API không cần đổi khi thêm module mới, miễn payload vẫn đi qua `moduleReport`.
