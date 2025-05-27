// フラッシュメッセージを自動的に消す
document.addEventListener('DOMContentLoaded', function() {
    const flashMessages = document.querySelectorAll('.flash-message');
    flashMessages.forEach(message => {
        setTimeout(() => {
            message.style.opacity = '0';
            setTimeout(() => {
                message.remove();
            }, 300);
        }, 3000);
    });
});

// フォームのバリデーション
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function(e) {
        const requiredFields = form.querySelectorAll('[required]');
        let isValid = true;

        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                isValid = false;
                field.classList.add('error');
                
                // エラーメッセージを表示
                const errorMessage = document.createElement('div');
                errorMessage.className = 'error-message';
                errorMessage.textContent = 'このフィールドは必須です';
                
                // 既存のエラーメッセージを削除
                const existingError = field.parentNode.querySelector('.error-message');
                if (existingError) {
                    existingError.remove();
                }
                
                field.parentNode.appendChild(errorMessage);
            }
        });

        if (!isValid) {
            e.preventDefault();
        }
    });
});

// フィールドの入力時にエラー表示を消す
document.querySelectorAll('input, textarea').forEach(field => {
    field.addEventListener('input', function() {
        this.classList.remove('error');
        const errorMessage = this.parentNode.querySelector('.error-message');
        if (errorMessage) {
            errorMessage.remove();
        }
    });
}); 