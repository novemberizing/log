NOVEMBERIZING LOG
=================

[ENGLISH](https://novemberizing.github.io/log/README.en.html) |
[한국어](https://novemberizing.github.io/log/README.ko.html)

![Node js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=Node.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

![Github issues](https://img.shields.io/github/issues/novemberizing/log)
![GitHub license](https://img.shields.io/github/license/novemberizing/log)
![GitHub release](https://img.shields.io/github/v/release/novemberizing/log)
![Npm version](https://img.shields.io/npm/v/@novemberizing/log)

----

> "Novemberizing log" 는 자바스크립트로 구현된 로그 라이브러리입니다.

"Novemberizing log"는 간단하게 사용할 수 있는 라이브러리를 목표로 합니다.

![Class Diagram Log](https://novemberizing.github.io/log/assets/images/ClassDiagramLog.jpg)

## 설치

로그 라이브러리는 "npm"을 이용하여 설치할 수 있습니다.

```
npm install --save @novemberizing/log
```

## 사용

로그 라이브러리를 사용하여 에러, 경고, 정보, 디버그와 기타 로그를 콘솔이나 파일에 출력할 수 있습니다.

```js
Log.e("tag", "message");    // 에러 로그
Log.w("tag", "message");    // 경고 로그
Log.i("tag", "message");    // 정보 로그
Log.d("tag", "message");    // 디버그 로그
Log.v("tag", "message");    // 기타 로그
```

### 파일에 로그를 작성하는 방법

로그 라이브러리는 기본적으로 로그를 파일에 기록하지 않습니다. 로그를 파일에 기록하기 위해서는 로그의 이름과 로그 파일이 저장될 폴더를 설정해야 합니다.

```js
Log.config = {
    name: "novemberizing"
    path: "."
};
```

### 특정 로그만 출력하는 방법

"Novemberizing log"는 기본적으로 모든 로그를 출력합니다. 특정 로그를 사용하거나 사용하지 않으려면, 각 범주의 로그의 사용 여부를 설정해주어야 합니다.

```js
Log.config = {
    error: true,
    warning: true,
    information: true,
    debug: false,
    verbose: false
}
```

### 문서

[Novemberizing log api](https://novemberizing.github.io/log/api)
