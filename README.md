# BookFlow - 지식과 이야기가 흐르는 곳

![로고](src/views/public/bookflow.png)

## 팀 소개
- 엘리스 Cloud 트랙 3기, 2차 프로젝트, 10팀
- 개발기간: 2024.05.27 ~ 2024.06.21
- 노션주소: https://www.notion.so/elice-track/10-197e4fe6eb8e4bf59898e73639f75cc3?pvs=4


## 프로젝트 소개
- 주제: 도서 쇼핑몰 'BookFlow' 제작
- 목적: 사용자들이 쉽게 원하는 책을 찾고, 구입하여 읽을 수 있도록 하는 것
- 목표: 책을 통해 배움을 얻고, 다양한 가치를 발견할 수 있는 공간을 제공하는 것
- 배포주소: http://34.64.32.227/


## 주요 기능
- 사용자
    - 회원가입 ・ 로그인 ・ 로그아웃 ・ 탈퇴  ・ 정보 조회/수정
    - (+) 사용자용 마이페이지: 정보 조회/수정 ・ 주문 조회 ・ 탈퇴
    - (+) 관리자용 메뉴바: 주문관리 ・ 회원관리 ・ 카테고리 ・ 책관리
- 카테고리 
    - 사용자: 조회 (카테고리 목록, 카테고리에 속한 책)
    - 관리자: 조회 ・ 추가 ・ 수정 ・ 삭제
- 도서
    - 사용자: 조회
    - 관리자: 조회 ・ 추가 ・ 수정 ・ 삭제
    - (+) 제목 검색
- 장바구니
    - 사용자, 관리자: 조회 ・ 추가 ・ 수정 ・ 삭제(전체, 일부)
    - (+) 책 선택, 헤더 장바구니 아이콘 수량 표시
- 주문
    - 사용자: 주문 ・ 조회 ・ 수정 ・ 삭제
    - 관리자: 조회 ・ 수정 ・ 삭제 
    - (+) 주문 처리 단계 수정: 결제 완료, 배송 준비, 배송 중, 배송 완료


## 파일 구조
```bash
📚 BookFlow
├─ src
│  ├─ main (BE)
│  │  ├─ java/io/elice/shoppingmall
│  │  │  ├─ audit
│  │  │  ├─ book
│  │  │  ├─ cart
│  │  │  ├─ category
│  │  │  ├─ order
│  │  │  ├─ user
│  │  │  ├─ ShoppingMallApplication.java
│  │  │  └─ WebController.java
│  │  └─ resources
│  │     └─ application.properties
│  └─ views (FE)
│     ├─ src
│     │  ├─ components
│     │  ├─ resources
│     │  ├─ routes
│     │  ├─ App.js
│     │  └─ index.js
│     ├─ .evn.development
│     ├─ .env.production
│     └─ package.json
├─ build.gradle
├─ package.json
└─ README.md
```


## 사용 스택
<div>
    <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white">
    <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">  
    <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white">  
    <img src="https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=white">    
    <img src="https://img.shields.io/badge/chakraui-319795?style=for-the-badge&logo=chakraui&logoColor=white">    
</div>
<div>
    <img src="https://img.shields.io/badge/springboot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white">
    <img src="https://img.shields.io/badge/openjdk-000000?style=for-the-badge&logo=openjdk&logoColor=white">
    <img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white">
    <img src="https://img.shields.io/badge/gradle-02303A?style=for-the-badge&logo=gradle&logoColor=white">
    <img src="https://img.shields.io/badge/gitlab-FC6D26?style=for-the-badge&logo=gitlab&logoColor=white">
</div>

