# 🧯 소화기 (SoHwaGi)

> 메모하듯 적으면, AI가 알아서 캘린더에 등록해주는 일정 관리 서비스

[![Vercel](https://img.shields.io/badge/배포-Vercel-black?logo=vercel)](https://sohawgi-front.vercel.app)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9-blue?logo=typescript)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18-61dafb?logo=react)](https://reactjs.org/)

---

## 서비스 소개

"3시에 팀 미팅, 내일 오후 보고서 제출" — 이렇게 자연어로 메모하면 AI가 자동으로 일정을 파악해 캘린더에 등록해줍니다.

평소 메모하듯 적는 것만으로 일정 관리가 완성됩니다.


---

## 주요 기능

- **자연어 일정 등록** — 자유로운 텍스트 입력을 AI가 분석해 날짜·시간·제목을 자동 추출
- **캘린더 자동 등록** — 분석된 일정이 캘린더에 즉시 반영
- **반응형 지원** — 모바일·데스크톱 모두 최적화된 UI

---

## 기술 스택

| 분류 | 기술 |
|------|------|
| 언어 | TypeScript |
| 프레임워크 | React 18 |
| 빌드 도구 | Vite |
| 스타일링 | Tailwind CSS |
| 상태·데이터 페칭 | TanStack Query (React Query v5) |
| HTTP | Axios |
| 날짜 처리 | Day.js |
| 분석 | Amplitude |
| 테스트 | Vitest, Testing Library, MSW |
| 배포 | Vercel |

---

## 시작하기

### 사전 요구사항

- Node.js 18 이상
- npm 또는 yarn

### 설치 및 실행

```bash
# 저장소 클론
git clone https://github.com/scheduler-SoHwaGi/sohawgi_Front.git
cd sohawgi_Front

# 의존성 설치
npm install

# 개발 서버 실행 (http://localhost:5173)
npm run dev
```

### 환경변수 설정

`.env` 파일을 루트에 생성하고 필요한 환경변수를 설정하세요.

```env
VITE_API_BASE_URL=your_api_url
```

### 빌드

```bash
npm run build
```

---

## 스크립트

| 명령어 | 설명 |
|--------|------|
| `npm run dev` | 개발 서버 실행 |
| `npm run build` | 프로덕션 빌드 |
| `npm run preview` | 빌드 결과물 미리보기 |
| `npm run test` | 테스트 실행 |

---

## 프로젝트 구조

```
src/
├── components/     # 재사용 컴포넌트
├── pages/          # 페이지 컴포넌트
├── hooks/          # 커스텀 훅
├── api/            # API 요청 함수
├── types/          # TypeScript 타입 정의
└── utils/          # 유틸리티 함수
```

---

## 기여 방법

PR 전 `.github/pull_request_template.md`를 참고해 주세요.

1. 브랜치 생성 (`feat/기능명`)
2. 변경사항 커밋
3. PR 생성 및 리뷰 요청

---

## 팀

| 역할 | 담당 |
|------|------|
| Frontend | 김유림, 구나연 |
| Backend | 서예진 |
