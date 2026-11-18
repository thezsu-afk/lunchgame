# 🍱 점심메뉴 룰렛 (예솔 · 지수 · 수연)

셋이 같이 쓰는 2단계 점심 룰렛입니다.

1. **입장**: 예솔 / 지수 / 수연 중 본인을 고릅니다. 한 번 고르면 그 브라우저가 기억하고, 오른쪽 위 '바꾸기'로 바꿀 수 있어요.
2. **내 룰렛**: 각자 **1단계(카테고리)**와 **2단계(세부 메뉴)**를 돌립니다. 결과는 '오늘의 픽'에 저장되고 모두에게 실시간으로 보여요.
3. **최종 룰렛**: 메뉴를 뽑은 사람들의 이름으로 룰렛이 만들어지고, 걸린 사람이 뽑은 메뉴가 최종 메뉴가 됩니다. 누가 돌리든 **모든 사람 화면에서 같은 룰렛이 동시에 돌아가요.**
4. 날짜(한국 시간)가 바뀌면 자동으로 새 라운드가 시작되고, 최종 결과는 '지난 최종 메뉴'에 쌓입니다.

---

## 1. GitHub에 올리기 (GitHub Pages)

1. GitHub에서 새 저장소를 만듭니다 (예: `lunch-roulette`, Public).
2. 이 폴더의 파일을 모두 올립니다: `index.html`, `firebase-config.js`, `README.md`, `database.rules.json`
   - 웹에서 올릴 때는 저장소 화면의 **Add file → Upload files**에 파일을 끌어다 놓으면 됩니다.
3. 저장소 **Settings → Pages**로 갑니다.
   - Source: **Deploy from a branch**
   - Branch: **main** / **/(root)** → Save
4. 1~2분 뒤 `https://<내 아이디>.github.io/lunch-roulette/` 주소로 열립니다. 이 주소를 지수, 수연에게 공유하면 됩니다.

> Firebase 설정 전에는 **로컬 모드**로 동작해요 (내 브라우저 안에서만 저장). 셋이 같이 보려면 아래 2번을 해 주세요.

## 2. 같이 보기 설정 (Firebase Realtime Database, 무료)

GitHub Pages는 정적 호스팅이라 데이터를 저장할 곳이 따로 필요합니다. Firebase 무료(Spark) 요금제로 충분해요.

1. <https://console.firebase.google.com> → **프로젝트 추가** (Google 애널리틱스는 꺼도 됩니다)
2. 왼쪽 메뉴 **빌드 → Realtime Database → 데이터베이스 만들기**
   - 위치: `asia-southeast1 (싱가포르)` 추천
   - 보안 규칙: **잠금 모드**로 시작 → 아래 4번에서 규칙을 넣어요
3. **프로젝트 설정(⚙️) → 일반 → 내 앱 → 웹(</>)** 으로 앱을 등록하면 `firebaseConfig` 값이 나옵니다.
   그 값을 `firebase-config.js`에 붙여넣고, `databaseURL`에는 Realtime Database 화면 위쪽 주소(`https://…firebasedatabase.app`)를 넣으세요.
4. Realtime Database → **규칙** 탭에 `database.rules.json` 내용을 붙여넣고 **게시**합니다.
5. 수정한 `firebase-config.js`를 GitHub에 다시 올리면 끝! 화면 위의 노란 "로컬 모드" 안내가 사라지면 연결된 거예요.

> `apiKey`는 비밀번호가 아니라 프로젝트 식별용이라 공개 저장소에 올려도 괜찮습니다. 다만 이 앱은 로그인 없이 링크만 있으면 누구나 쓸 수 있어요. 링크는 셋끼리만 공유하세요.

## 커스터마이즈

- **사람 바꾸기/추가**: `firebase-config.js`의 `PEOPLE` 목록을 고치면 됩니다.
- **메뉴**: 화면 오른쪽 아래 **메뉴 편집**에서 카테고리와 세부 메뉴를 추가하거나 삭제할 수 있어요. 바꾼 내용은 모두에게 공유됩니다. 기본은 6개 카테고리 × 24개 메뉴입니다.
- **새 라운드 시작**: 오늘 뽑은 픽과 최종 결과를 지우고 처음부터 다시 합니다.

## 데이터 구조

```
menus/categories            [{name, items[]}]
rounds/{YYYY-MM-DD}/picks/{이름}   {cat, item, at}
rounds/{YYYY-MM-DD}/final          {spinId, wheel[], target, jitter, turns, dur, name, cat, item, by, at}
history/{pushId}            {date, name, cat, item, at}
```
