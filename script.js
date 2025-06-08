document.addEventListener('DOMContentLoaded', function () {
    // 搜索框聚焦效果
    const searchInput = document.getElementById('kw');
    const inputWrapper = document.querySelector('.s_ipt_wr');
    const quickDelete = document.getElementById('quickdelete');

    searchInput.addEventListener('focus', function () {
        inputWrapper.classList.add('focus');
    });

    searchInput.addEventListener('blur', function () {
        inputWrapper.classList.remove('focus');
    });

    // 显示/隐藏清除按钮
    searchInput.addEventListener('input', function () {
        if (this.value.length > 0) {
            quickDelete.style.display = 'block';
        } else {
            quickDelete.style.display = 'none';
        }
    });

    
    // 清除按钮功能
    quickDelete.addEventListener('click', function () {
        searchInput.value = '';
        this.style.display = 'none';
        searchInput.focus();
    });

    // 更新热搜内容和数字（模拟实时数据）
    function updateHotSearchCount() {
        const aiCounter = document.querySelector('.promo-banner-link');
        if (aiCounter) {
            const currentCount = parseInt(aiCounter.innerText.match(/\d+/)[0]);
            const newCount = currentCount + Math.floor(Math.random() * 10);
            aiCounter.innerHTML = aiCounter.innerHTML.replace(/\d+/, newCount);
        }
    }

    // 每10秒更新一次数字
    setInterval(updateHotSearchCount, 10000);

    // 表单提交前检查
    document.getElementById('form').addEventListener('submit', function (e) {
        const query = searchInput.value.trim();
        if (!query) {
            e.preventDefault();
            searchInput.focus();
        }
    });
});
