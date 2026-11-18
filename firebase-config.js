// ─────────────────────────────────────────────────────────────
// Firebase 설정
// Firebase 콘솔 > 프로젝트 설정 > 내 앱(웹) 에 나오는 값을 그대로 붙여넣으세요.
// databaseURL 은 Realtime Database 화면 상단의 주소입니다.
//
// 비워두면 "로컬 모드"로 동작합니다 (이 브라우저 안에서만 저장·공유).
// ─────────────────────────────────────────────────────────────
window.FIREBASE_CONFIG = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  appId: ""
};

// 같이 쓰는 사람들 (이름을 바꾸거나 추가해도 됩니다)
window.PEOPLE = [
  { name: "예솔", color: "#e8553d" },
  { name: "지수", color: "#3caea3" },
  { name: "수연", color: "#6c5b9e" }
];
