// import { BASE_URL } from "./base";
import envData from './env_data.json';

// 환경 정보 로딩
const ENVIRONMENTS = {};
const LOGIN_CREDENTIALS = {};
for (const env of envData) {
    ENVIRONMENTS[env.name] = {
        BASE_URL: env.base_url,
        NAME: env.name
    };
    LOGIN_CREDENTIALS[env.name] = {
        EMAIL: env.email,
        PASSWORD: env.password
    };
}

const ENV_NAME = __ENV.NAME || "PRODUCTION"
export const CURRENT_ENV = ENVIRONMENTS[ENV_NAME];

// 현재 환경의 로그인 정보를 가져오는 함수
export function getCurrentLoginCredentials() {
    if (LOGIN_CREDENTIALS[ENV_NAME]) {
        return LOGIN_CREDENTIALS[ENV_NAME];
    }
    return LOGIN_CREDENTIALS.prod;
}

// 셀렉터 정보
export const SELECTORS = {
    LOGIN: {
        EMAIL_INPUT: 'input[type="email"]',
        PASSWORD_INPUT: 'input[type="password"]',
        SUBMIT_BUTTON: 'button[type="submit"]',
        LOGOUT: 'img[alt="이동"]'
    },
    DASHBOARD: {
        SETTING: 'img[alt="setting"]', //대시보드 화면 설정 모달 호출
        CLOSE: 'img[alt="close"]', //대시보드 설정 모달 닫기 버튼
        GNB: 'img[alt="네비게이션 열기/접기 버튼"]' // GNB 닫기/펼치기 
    },
    GNB: {
        DASHBOARD: 'img[alt="대시보드"]',
        MY: 'img[alt="My 계약서"]',
        SEARCH: 'img[alt="통합검색"]',
        // 계약서 생성 영역 
        AUTO: 'img[alt="자동작성"]',
        BULK: 'img[alt="대량생성"]',
        GLD: 'img[alt="ChatGLD"]',
        TEAM: 'img[alt="기업 표준 계약서"]', 
        // 계약 검토 영역 
        CLM_DRAFT: 'img[alt="계약 검토 요청"]',
        CLM_REVIEW: 'img[alt="검토 요청 조회"]',
        CLM_COMPLETE: 'img[alt="체결 계약서 조회"]',
        CLM_UPLOAD: 'img[alt="채결계약서 별도 등록"]',
        CLM_COMPARE: 'img[alt="AI 계약 내용 비교"]', 
        PAUSE: 'img[alt="일시 중단 중 요청 조회"]', 
        // 인감 관리 영역
        SEAL_DRAFT: 'img[alt="인감 사용 신청"]',
        SEAL_REVIEW: 'img[alt="인감 사용 신청 조회"]',
        SEAL_LEDGER: 'img[alt="인감 관리 대장"]', 
        // 법률 자문 영역
        ADVICE_DRAFT: 'img[alt="법률 자문 요청"]',
        ADVICE_REVIEW: 'img[alt="법률 자문 조회"]',
        // 송무 영역
        LITIGATION_DRAFT: 'img[alt="송무 등록"]',
        LITIGATION_REVIEW: 'img[alt="송무 조회"]',
        LITIGATION_SCHEDULE: 'img[alt="송무 전체 일정"]',
        // 법령 정보 영역
        LAW: 'img[alt="법령 캘린더"]', 
        // 프로젝트 영역
        PROJECT: 'img[alt="프로젝트 조회"]',
        // 계약 정보 관리 영역
        CONTRACT: 'img[alt="계약처 관리"]',
        TEMPLATE: 'img[alt="로고/도장 관리"]',
        // 시스템 설정 영역
        SETTING_TEAM: 'img[alt="구성원 관리"]', 
        PROFILE: 'img[alt="회원 정보"]', 
        SETUP: 'img[alt="설정"]'
    }
}; 