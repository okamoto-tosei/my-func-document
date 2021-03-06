// 正規表現

//郵便番号３桁ー４桁の正規表現（ハイフンは有り無しどちらでもいい）入力蘭が二つある時に使用
const zipNumTestFunc = (zip1, zip2) => {
  //  /^　開始
  // \d 前になんの文字もないことを示す
  // $/g 終わりの呪いgはオプション
  const zip_pattern = /^\d{3}-?\d{4}$/g;

  if(zip_pattern.test(String(zip1) + String(zip2))) {
    return "正しく入力されました。"
  } else  {
    return "正しい文字を入力してください"
  }
}

// 動作確認用
const zip = zipNumTestFunc(555,2330)
console.log(zip)


//郵便番号３桁ー４桁の正規表現（ハイフンは有り無しどちらでもいい）入力蘭が一つにまとまっている時に使用
const zipNumTestCheckFunc = (zipNum) => {
  //  /^　開始
  // \d 前になんの文字もないことを示す
  // $/g 終わりの呪いgはオプション
  const zip_pattern = /^\d{3}-?\d{4}$/g;

  if(zip_pattern.test(zipNum)) {
    return "正しく入力されました。"
  } else  {
    return "正しい文字を入力してください"
  }
}

// 動作確認用
const zip = zipNumTestCheckFunc(555,2330)
console.log(zip)
