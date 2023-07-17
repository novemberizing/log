import fs from 'fs';

export default class Log {
    static #name = null;
    static #path = null;
    static #lastdate = null;

    static #error = true;
    static #warning = true;
    static #information = true;
    static #debug = true;
    static #verbose = true;

    static #numberToStr(n) {
        return n < 10 ? `0${n}` : n;
    }

    static #millisecondToStr(n) {
        return n < 10 ? `00${n}` :(n < 100 ? `0${n}` : n);
    }

    static #generateDateStr(date) {
        const year = date.getFullYear();
        const month = Log.#numberToStr(date.getMonth() + 1);
        const day = Log.#numberToStr(date.getDate());
        const hour = Log.#numberToStr(date.getHours());
        const minute = Log.#numberToStr(date.getMinutes());
        const second = Log.#numberToStr(date.getSeconds());
        const millisecond = Log.#millisecondToStr(date.getMilliseconds());

        return `${year}/${month}/${day} ${hour}:${minute}:${second}.${millisecond}`;
    }

    static #generateFilepathStr(date) {
        if(Log.#path && Log.#name) {
            if(date) {
                const year = date.getFullYear();
                const month = Log.#numberToStr(date.getMonth() + 1);
                const day = Log.#numberToStr(date.getDate());
    
                return `${Log.#path}/${Log.#name}.${year}${month}${day}.log`; 
            }
    
            return `${Log.#path}/${Log.#name}.log`;
        }

        return null;
    }

    static #initializeLastdate() {
        if(!Log.#lastdate) {
            try {
                const stat = fs.statSync(Log.#path);
                Log.#lastdate = stat.mtime;
            } catch(e) {
                console.log(e);
            }
        }
    }

    static #needToRename(date) {
        if(Log.#lastdate) {
            if(Log.#lastdate.getFullYear()===date.getFullYear()) {
                if(Log.#lastdate.getMonth()===date.getMonth()) {
                    if(Log.#lastdate.getDate()===date.getDate()) {
                        return false;
                    }
                }
            }

            return true;
        }

        return false;
    }

    static #renameLog(date) {
        if(Log.#needToRename(date)) {
            const oldPath = Log.#generateFilepathStr();
            const newPath = Log.#generateFilepathStr(Log.#lastdate);
    
            try {
                fs.renameSync(oldPath, newPath);
            } catch(e) {
                console.log(e);
            }
        }
    }

    static #appendFileSync(date, sentence) {
        if(Log.#path && Log.#name) {
            try {
                Log.#initializeLastdate();
                Log.#renameLog(date);
                
                fs.appendFileSync(Log.#generateFilepathStr(), `${sentence}\r\n`, "utf-8");

                Log.#lastdate = date;
            } catch(e) {
                // TODO: 파일을 저장하지 못하면 ALERT 을 보낸다.
                console.log(e);
            }
        }
    }

    static #messageToStr(message) {
        if(typeof message === "object") {
            return JSON.stringify(message);
        }
        return message;
    }

    static set config(o) {
        o = Object.assign({
            error: Log.#error,
            warning: Log.#warning,
            information: Log.#information,
            debug: Log.#debug,
            verbose: Log.#verbose
        }, o);

        Log.#name = o.name;
        Log.#path = o.path;

        Log.#error = o.error;
        Log.#warning = o.warning;
        Log.#information = o.information;
        Log.#debug = o.debug;
        Log.#verbose = o.verbose;
    }

    static e(tag, message) {
        if(Log.#error) {
            const date = new Date();

            const sentence = `${Log.#generateDateStr(date)} ${Log.#name}/e ${tag}: ${Log.#messageToStr(message)}`;
    
            console.log(sentence);
    
            Log.#appendFileSync(date, sentence);
        }
    }

    static w(tag, message) {
        if(Log.#warning) {
            const date = new Date();

            const sentence = `${Log.#generateDateStr(date)} ${Log.#name}/w ${tag}: ${Log.#messageToStr(message)}`;
    
            console.log(sentence);
    
            Log.#appendFileSync(date, sentence);
        }
    }

    static i(tag, message) {
        if(Log.#information) {
            const date = new Date();

            const sentence = `${Log.#generateDateStr(date)} ${Log.#name}/i ${tag}: ${Log.#messageToStr(message)}`;
    
            console.log(sentence);
    
            Log.#appendFileSync(date, sentence);
        }
    }

    static d(tag, message) {
        if(Log.#debug) {
            const date = new Date();

            const sentence = `${Log.#generateDateStr(date)} ${Log.#name}/d ${tag}: ${Log.#messageToStr(message)}`;
    
            console.log(sentence);
    
            Log.#appendFileSync(date, sentence);
        }
    }

    static v(tag, message) {
        if(Log.#verbose) {
            const date = new Date();

            const sentence = `${Log.#generateDateStr(date)} ${Log.#name}/v ${tag}: ${Log.#messageToStr(message)}`;
    
            console.log(sentence);
    
            Log.#appendFileSync(date, sentence);
        }

    }
}

// TODO: HOW TO TEST
async function TestLog() {
    Log.config = { name: "novemberizing", path: "." };

    Log.e("novemberizing", "error");
    Log.w("novemberizing", "warning");
    Log.i("novemberizing", "information");
    Log.d("novemberizing", "debug");
    Log.v("novemberizing", "verbose");

    Log.e("novemberizing", {hello: "world"});
    Log.w("novemberizing", {hello: "world"});
    Log.i("novemberizing", {hello: "world"});
    Log.d("novemberizing", {hello: "world"});
    Log.v("novemberizing", {hello: "world"});
}

// TestLog();
