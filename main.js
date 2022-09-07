var signupBtn = document.querySelector(".signup-btn")
var LoginBtn = document.querySelector(".login-btn")
var Modal = document.querySelector(".modal")
var backLog = document.querySelector(".auth-form__control-back-log")
var backSign = document.querySelector(".auth-form__control-back-sign")
var ModalOverlay = document.querySelector(".modal__overlay")
var isLogin = false;
function render(){
    signupBtn.onclick = function renderSign(){
        // var loginModal =  document.querySelector(".auth-form")
        Modal.style.display = 'flex';
        document.querySelector(".modal__body").innerHTML = `<div class="auth-form">
        <div class="auth-form__container">
        <div class="auth-form__header">
            <h3 class="auth-form__heading">Đăng ký</h3>
            <span class="auth-form__switch--btn">Đăng Nhập</span>
        </div>
        <div class="auth-form__form">
            <div class="auth-form__group">
                <input type="text" class="auth-form__input" placeholder="Nhập Email của bạn">
            </div>
            <div class="auth-form__group">
                <input type="password" class="auth-form__input" placeholder="Nhập mật khẩu của bạn">
            </div>
            <div class="auth-form__group">
                <input type="password" class="auth-form__input" placeholder="Xác nhận mật khẩu">
            </div>
        </div>
        <div class="auth-form__aside">
            <p class="auth-form__policy-text">Bằng việc đky bạn đã đồng ý với Shopee về
                <a href="" class="auth-form__text-link">Điều khoản dịch vụ</a> &
                <a href="" class="auth-form__text-link">Chính sách bảo mật</a>
            </p>
        </div>
        <div class="auth-form__controls">
            <button class="btn btn--normal auth-form__control-back">Trở lại</button>
            <button class="btn  btn--primary">Đăng ký</button>
    
        </div>
    </div>
        <div class="auth-form__socials">
            <a href="" class="auth-form__social-icon-fb btn btn--size-s btn--with-icon">
                <i class="auth-form__social-icon fab fa-facebook-square"></i>
                <span class="auth-form__social-title">
                    Kết nối với Facebook
                </span>
                </a>
            <a href="" class="auth-form__social-icon-gg btn btn--size-s btn--with-icon">
                <i class="auth-form__social-icon fab fa-google"></i>
                <span class="auth-form__social-title">
                    Kết nối với Google
                </span>
            </a>
        </div>
    </div>`
        
    }
    LoginBtn.onclick = function renderLogin(){
        Modal.style.display = 'flex';
        isLogin = true;
        document.querySelector(".modal__body").innerHTML = ` <div class="auth-form">
        <div class="auth-form__container">
        <div class="auth-form__header">
            <h3 class="auth-form__heading">Đăng Nhập</h3>
            <span class="auth-form__switch--btn">Đăng Ký</span>
        </div>
        <div class="auth-form__form">
            <div class="auth-form__group">
                <input type="text" class="auth-form__input" placeholder="Email/Số điện thoại/Tên đăng nhập">
            </div>
            <div class="auth-form__group">
                <input type="password" class="auth-form__input" placeholder="Mật khẩu">
            </div>
        </div>
        <div class="auth-form__support">
            <a href="" class="auth-form__control-forgetpass">Quên mật khẩu</a>
            <span class="auth-form__support-separate"></span>
            <a href="" class="auth-form__control-help">Cần trợ giúp?</a>
        </div>
        <div class="auth-form__controls">
            <button class="btn btn--normal auth-form__control-back">Trở lại</button>
            <button class="btn  btn--primary">Đăng ký</button>
    
        </div>
    </div>
        <div class="auth-form__socials-login">
            <a href="" class="auth-form__social-icon-sms btn btn--size-s btn--with-icon">
                <i class="auth-form__social-icon fas fa-comment-dots"></i>
                <span class="auth-form__social-title">
                    SMS
                </span>
                </a>
            <a href="" class="auth-form__social-icon-fb btn btn--size-s btn--with-icon">
                <i class="auth-form__social-icon fab fa-facebook-square"></i>
                <span class="auth-form__social-title">
                    Facebook
                </span>
                </a>
            <a href="" class="auth-form__social-icon-gg btn btn--size-s btn--with-icon">
                <i class="auth-form__social-icon fab fa-google"></i>
                <span class="auth-form__social-title">
                    Google
                </span>
            </a>
        </div>
    </div>`
        
    }

}
render()
ModalOverlay.onclick = function(){
    Modal.style.display = 'none';
}
document.querySelector(".modal__body").onclick = function(e){
   if(e.target.closest(".auth-form__control-back")){
    Modal.style.display = 'none';
   }
   if(e.target.closest(".auth-form__switch--btn")){
    if(isLogin)
    renderSign()
   }
}



