// リアルタイムで動くyyyy/nn/ddの時間を出す関数

const timer = () => {
  const now = new Date();
  document.getElementById('timer').innerHTML = (`${now.getHours()}/${now.getMinutes()}/${now.getSeconds()}`)
}

const timerText = setInterval(timer,500)  
