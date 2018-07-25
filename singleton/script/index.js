let createLoginLayer = (function () {
  let div = null;
  return function () {
    if (!div) {
      div = document.createElement('div');
      div.classList.add("loginLayer");
      div.innerHTML =
        ` <div class="login-wrapper">
      <div class="login-title">
        <div class="title-text">登录框</div>
        <div id="close-btn">×</div>
      </div>
      <div class="username-input user-input">
        <span class="login-text">用户名:</span>
        <input type="text">
      </div>
      <div class="pwd-input user-input">
        <span class="login-text">密码:</span>
        <input type="password">
      </div>
      <div class="btn-wrapper">
        <button class="confrim-btn">确定</button>
        <button class="clear-btn">重置</button>
      </div>
    </div>`;
      div.style.display = 'none';
      document.body.appendChild(div);
      closeLoginLayer();
    }
    return div;
  }
})()

document.getElementById('loginBtn').addEventListener('click', () => { 
  let loginLayer = createLoginLayer();
  loginLayer.style.display = 'block';
})

function closeLoginLayer() { 
  document.getElementById('close-btn').addEventListener('click', () => { 
    document.getElementsByClassName('loginLayer')[0].style.display = 'none';
  })
}

