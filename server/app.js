const express = require('express');
const app = express();
const session = require('express-session');
const fs = require('fs');
const cors = require('cors');

let corsOption = {
  origin: 'http://localhost:8080',
  credentials: true
};

app.use(cors(corsOption));

app.use(session({
  secret: 'secret code',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false,
    maxAge: 1000 * 60 * 60 //쿠기 유효시간 1시간
  }
}));

app.use(express.json({
  limit: '50mb'
}));

const server = app.listen(3000, () => {
  console.log('Server started. port 3000.');
});

let sql = require('./sql.js');

fs.watchFile(__dirname + '/sql.js', (curr, prev) => {
  console.log('sql 변경시 재시작 없이 반영되도록 함.');
  delete require.cache[require.resolve('./sql.js')];
  sql = require('./sql.js');
});

const db = {
  database: "introduce_myself",
  connectionLimit: 10,
  host: "127.0.0.1", // 일단은 로컬로, 나중에 AWS 연동
  user: "sihoonchris",
  password: "dltlgns^0426"
};

const dbPool = require('mysql').createPool(db);

const req = {
  async db(alias, param = [], where = '') {
    return new Promise((resolve, reject) => dbPool.query(sql[alias].query + where, param, (error, rows) => {
      if (error) {
        if (error.code != 'ER_DUP_ENTRY')
          console.log(error);
        resolve({
          error
        });
      } else resolve(rows);
    }));
  }
};


// numOfViewers : 누적 조회수 출력
app.get('/api/num', async (request, res) => {
  try {
    return (await req.db('numOfViewers', {}));
  } catch {
    console.error('numOfviewers Error');
  }
});


// countViewers : 웹사이트 접속 시 조회수 1씩 증가
app.post('/api/count', async (request, res) => {
  try {
    await req.db('countViewers', {});
  } catch (err) {
    console.error("countViewers Error");
  }
});
