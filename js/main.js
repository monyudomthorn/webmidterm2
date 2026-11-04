// Coffee House App: Welcome Screen Transition & Login Verification
document.addEventListener('DOMContentLoaded', () => {
    // Screen Elements
    const welcomeScreen = document.getElementById('welcome-screen');
    const loginScreen = document.getElementById('login-screen');
    const getStartedBtn = document.getElementById('btn-get-started');
    const backToWelcomeBtn = document.getElementById('btn-back-to-welcome');

    // Login Form Elements
    const loginForm = document.querySelector('.login-form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const togglePasswordBtn = document.getElementById('toggle-password');

    // =========================================================================
    // 1. Navigation: Welcome Screen -> Login Screen
    // =========================================================================
    if (getStartedBtn && welcomeScreen && loginScreen) {
        getStartedBtn.addEventListener('click', () => {
            welcomeScreen.classList.remove('active');
            loginScreen.classList.add('active');

            // Focus on email input when entering login screen
            setTimeout(() => {
                if (emailInput) emailInput.focus();
            }, 450);
        });
    }

    // Navigation: Login Screen -> Welcome Screen (Back Button)
    if (backToWelcomeBtn && welcomeScreen && loginScreen) {
        backToWelcomeBtn.addEventListener('click', () => {
            loginScreen.classList.remove('active');
            welcomeScreen.classList.add('active');
        });
    }

    // =========================================================================
    // 2. Toggle Show / Hide Password with Font Awesome
    // =========================================================================
    if (togglePasswordBtn && passwordInput) {
        togglePasswordBtn.addEventListener('click', () => {
            const isPassword = passwordInput.getAttribute('type') === 'password';
            passwordInput.setAttribute('type', isPassword ? 'text' : 'password');
            
            if (isPassword) {
                togglePasswordBtn.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
                togglePasswordBtn.setAttribute('title', 'Hide Password');
            } else {
                togglePasswordBtn.innerHTML = '<i class="fa-solid fa-eye"></i>';
                togglePasswordBtn.setAttribute('title', 'Show Password');
            }
        });
    }

    // =========================================================================
    // 3. Login Verification with SweetAlert2
    // =========================================================================
    if (!loginForm) return;

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = emailInput.value.trim();
        const password = passwordInput.value;

        const validEmail = 'Dunkin@gmail.com';
        const validPassword = 'Dunkin1111';

        // SweetAlert2 Loading Dialog
        Swal.fire({
            title: 'Logging In...',
            text: 'Verifying your credentials, please wait.',
            allowOutsideClick: false,
            allowEscapeKey: false,
            showConfirmButton: false,
            didOpen: () => {
                Swal.showLoading();
            }
        });

        // Simulate server response delay (1.2 seconds)
        setTimeout(() => {
            if (email.toLowerCase() === validEmail.toLowerCase() && password === validPassword) {
                // Success Popup (Coffee Vibe)
                Swal.fire({
                    icon: 'success',
                    title: 'Welcome Back!',
                    text: 'Your table is ready. Fresh coffee awaits!',
                    confirmButtonText: 'Enjoy Coffee',
                    confirmButtonColor: '#6f4e37',
                    timer: 2500,
                    timerProgressBar: true
                });
            } else {
                // Error Popup (Coffee Vibe)
                Swal.fire({
                    icon: 'error',
                    title: 'Login Failed',
                    text: 'Incorrect email or password. Please try again!',
                    confirmButtonText: 'Try Again',
                    confirmButtonColor: '#8a3c2b'
                });

                passwordInput.value = '';
                passwordInput.focus();
            }
        }, 1200);
    });
});
