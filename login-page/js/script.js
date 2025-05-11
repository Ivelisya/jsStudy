document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const loginButton = document.getElementById('loginButton');

    // 表单验证
    window.validateForm = function(event) {
        event.preventDefault();
        
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();
        let isValid = true;

        // 重置错误样式
        document.getElementById('username').style.borderColor = '#ddd';
        document.getElementById('password').style.borderColor = '#ddd';

        // 用户名验证
        if (!username) {
            document.getElementById('username').style.borderColor = '#e63946';
            isValid = false;
        }

        // 密码验证
        if (!password || password.length < 6) {
            document.getElementById('password').style.borderColor = '#e63946';
            isValid = false;
        }

        if (isValid) {
            // 模拟登录请求
            loginButton.disabled = true;
            loginButton.textContent = '登录中...';
            
            setTimeout(() => {
                loginButton.disabled = false;
                loginButton.textContent = '登录';
                alert('登录成功！');
                loginForm.reset();
            }, 2000);
        }

        return false;
    };

    // 注册链接点击事件
    document.querySelector('.register-link').addEventListener('click', function(event) {
        event.preventDefault();
        alert('注册功能即将上线，敬请期待！');
    });
});