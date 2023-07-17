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

> "Novemberizing log" is a log library implemented in JavaScript.

"Novemberizing log" aims to be a simple to use library.

![Class Diagram Log](https://novemberizing.github.io/log/assets/images/ClassDiagramLog.jpg)

## Install

The log library can be installed using "npm".

```
npm install --save @novemberizing/log
```

## Usage

You can use the log library to print errors, warnings, info, debug, and other logs to the console or to a file.

```js
Log.e("tag", "message");    // Error log
Log.w("tag", "message");    // Warning log
Log.i("tag", "message");    // Information log
Log.d("tag", "message");    // Debug log
Log.v("tag", "message");    // Other log
```

### How to write log to file

The log library does not write logs to files by default. To write the log to a file, you must set the log name and the folder where the log file will be saved.

```js
Log.config = {
    name: "novemberizing"
    path: "."
};
```

### How to print only specific logs

"Novemberizing log" outputs all logs by default. To enable or disable specific logs, you must enable or disable logs for each category.

```js
Log.config = {
    error: true,
    warning: true,
    information: true,
    debug: false,
    verbose: false
}
```
