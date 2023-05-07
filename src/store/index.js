import { createStore } from 'vuex'

export default createStore({
  state: {
    lang : {
      ko: {
        cc_h1:'쓸만한 녀석 하나 나왔다.',
        cc_span: "새로움과 잠재력.",
        im_teamplay: '팀플레이에 최적화.',
        im_name1: '이름',
        im_name2: '이시훈',
        im_address1: '주소지',
        im_address2: '서울특별시 강북구',
        im_birth1: '생년월일',
        im_birth2: '1997년 4월 26일 (만 ',
        im_birth2_sub: '세)',
        im_email1: '이메일',
        im_education1: '학력',
        im_education2: '상명대학교(경제금융학부)',
        im_github1: '깃허브로 이동하기',
        im_communication: '명확한 의사소통',
        im_endurance: '강한 체력',
        im_adaptation: '빠른 적응',
        im_english: '영어',
        im_communication_exp: '"신속정확한 보고와 간단명료한 지시." 장교로서의 군복무 경험은 더욱 명확한 의사소통을 가능케 했습니다.',
        im_endurance_exp: '어려움 앞에서 포기하지 않고 끊임없이 도전할 수 있는 건 강한 체력 덕분이죠.',
        im_adaptation_exp: '어디서든, 누구와든 함께 할 수 있습니다.',
        im_english_exp: '인터넷 상의 정보들 중 약 56%가 영어로 작성된 것을 알고 계신가요? 이제 영어는 필수입니다.',
        ts_techstack: '기술 스택.',
        ts_development: '지금 이 순간에도 발전하는 중.',
        tp_knowing:'아는 것만으로는 부족해요.',
        tp_apply: '직접 해봐야죠.',
        tp_check: '저의 토이 프로젝트들을 확인해보세요.',
        tp_pythonprj1: '재무제표 스크래퍼', 
        tp_pythonprj2: '주식 보조지표', 
        tp_javaprj1: '블랙잭',
        tp_javaprj2: '지뢰찾기',
        tp_javaprj3: '투자 포트폴리오 구성 자동화',
        tp1_first: '처음 해본 팀 프로젝트,',
        tp1_project: '코드그린.',
        tp1_definition: '식품 쇼핑몰 제작',
        tp1_explanation1: '* 회원가입 과정은 ',
        tp1_explanation2: '로 제작됐습니다.',
        tp2_second: '두 번째 팀 프로젝트,',
        tp2_project: '입고살자.',
        tp2_definition: '의류 쇼핑몰 제작',
        tp2_explanation1: "* '입고살자'는 ",
        tp2_explanation2: '를 \n레퍼런스로 진행했습니다.',
        download: '안내 자료(PDF) 다운로드',
        learnMore: '더 알아보기'
      },
      en: {
        cc_h1:'Prospect.',
        cc_span: "The New & Potential.",
        im_teamplay: 'Optimized For Team.',
        im_name1: 'Name',
        im_name2: 'Si-Hoon Lee',
        im_address1: 'Address',
        im_address2: 'Gangbuk-gu, Seoul',
        im_birth1: 'Birth',
        im_birth2: 'Apr. 26, 1997 (',
        im_birth2_sub: ' years)',
        im_email1: 'E-mail ',
        im_education1: 'Edu.',
        im_education2: 'Sangmyung Univ.\n(Economics & Finance, BA.)',
        im_github1: 'Move on to GitHub',
        im_communication: 'Communication',
        im_endurance: 'Endurance',
        im_adaptation: 'Adaptation',
        im_english: 'English',
        im_communication_exp: '"Report quickly and accurately. Order briefly and clearly." Communication skills became clear serving the Army.',
        im_endurance_exp: "Able to continue to challenge myself without giving up in the face of difficulties thanks to strong endurance.",
        im_adaptation_exp: 'Can work together with whomever.',
        im_english_exp: 'About 56% of websites on the internet are using English, which means the English is necessary.',
        ts_techstack: 'Tech Stack.',
        ts_development: 'Even for now, On Developing.',
        tp_knowing:'Knowing is not enough.',
        tp_apply: 'Must Apply.',
        tp_check: 'Check out toy-projects of mine.',
        tp_pythonprj1: 'Financial Statements Scraper', 
        tp_pythonprj2: 'Stock Indicator', 
        tp_javaprj1: 'Blackjack',
        tp_javaprj2: 'Minesweeper',
        tp_javaprj3: 'Portfolio Auto-builder',
        tp1_first: 'First-ever Team Project,',
        tp1_project: 'Code Green.',
        tp1_definition: 'Food Shopping Mall',
        tp1_explanation1: '* Sign-up had been created in ',
        tp1_explanation2: '.',
        tp2_second: 'Second Team Project,',
        tp2_project: 'IPGOSALJA.',
        tp2_definition: 'Apparel Shopping Mall',
        tp2_explanation1: '* IPGOSALJA had been referred to ',
        tp2_explanation2: '.',
        download: 'Download Document(PDF)',
        learnMore: 'Learn more'
      },
      jp: {
        cc_h1:'登場した。',
        cc_span: "新たと潜在力",
        im_teamplay: 'チームプレーに最適。',
        im_name1: '名前',
        im_name2: '李時熏',
        im_address1: '住所地',
        im_address2: 'ソウル特別市江北区',
        im_birth1: '生年月日',
        im_birth2: '1997年 4月 26日 (',
        im_birth2_sub: '歳)',
        im_email1: 'E-mail',
        im_education1: '学歴',
        im_education2: '祥明大學(経済金融学部)',
        im_github1: 'ギットハブに移動',
        im_communication: '明確な意思疎通',
        im_endurance: '強い体力',
        im_adaptation: '早い適応',
        im_english: '英語',
        im_communication_exp: '"\n迅速正確な報告と簡単明瞭な指示。" 将校としての軍服務経験は、より明確なコミュニケーションを可能にしました。',
        im_endurance_exp: '困難の前で諦めずに絶えず挑戦できるのは、強い体力のおかげです。',
        im_adaptation_exp: '誰とでも一緒に働くことができます。',
        im_english_exp: 'インターネット上の情報のうち、約56%が英語で作成されていることをご存知ですか？ もう英語は必須です。',
        ts_techstack: '技術スタック。',
        ts_development: '今この瞬間も発展中。',
        tp_knowing:'知っているだけでは不十分。',
        tp_apply: '実践すべきだ。',
        tp_check: '私のトイプロジェクトをみてください。',
        tp_pythonprj1: '財務諸表スクラップ', 
        tp_pythonprj2: '罫線表分析法', 
        tp_javaprj1: 'ブラックジャック',
        tp_javaprj2: 'マインスイーパ',
        tp_javaprj3: 'ポートフォリオ 自動 構成',
        tp1_first: '初チームプロジェクト、',
        tp1_project: 'コードグリーン。',
        tp1_definition: '食品ネットショップ',
        tp1_explanation1: '* 会員登録は',
        tp1_explanation2: 'で\n制作されました。',
        tp2_second: '二番チームプロジェクト、',
        tp2_project: 'IGSJ',
        tp2_definition: '衣類ネットショップ',
        tp2_explanation1: '* IGSJ(イーブゴサールザ)は',
        tp2_explanation2: 'を参考にして製作しました。',
        download: '資料(PDF)ダウンロード',
        learnMore: 'さらに詳しく'
      }
    }
  },
  getters: {
  },
  mutations: {
    contentDownload(state, payload){
      this.$axios.get('/lang', payload)
      .then((res) => { state.lang.push( res.data ) })
      .catch((err) => { if (err.message.indexOf('Network Error') > -1) {alert('Error')} })
    }
  },
  actions: {
  },
  modules: {
  }
})
