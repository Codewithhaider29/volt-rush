
        tailwind.config = {
            theme: {
                extend: {
                    animation: {
                        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                        'shake': 'shake 0.82s cubic-bezier(.36,.07,.19,.97) both',
                        'float': 'float 6s ease-in-out infinite',
                        'lightning': 'lightning 4s linear infinite',
                        'neon-pulse': 'neonPulse 2s ease-in-out infinite alternate',
                    },
                    keyframes: {
                        shake: {
                            '10%, 90%': { transform: 'translate3d(-1px, 0, 0)' },
                            '20%, 80%': { transform: 'translate3d(2px, 0, 0)' },
                            '30%, 50%, 70%': { transform: 'translate3d(-4px, 0, 0)' },
                            '40%, 60%': { transform: 'translate3d(4px, 0, 0)' },
                        },
                        float: {
                            '0%, 100%': { transform: 'translateY(0)' },
                            '50%': { transform: 'translateY(-20px)' },
                        },
                        lightning: {
                            '0%': { opacity: 0.2 },
                            '2%': { opacity: 1 },
                            '4%': { opacity: 0.2 },
                            '8%': { opacity: 0.6 },
                            '70%': { opacity: 0.2 },
                            '100%': { opacity: 0.2 },
                        },
                        neonPulse: {
                            'from': { 
                                'text-shadow': '0 0 5px #fff, 0 0 10px #fff, 0 0 15px #FFEE00, 0 0 20px #FFEE00',
                            },
                            'to': { 
                                'text-shadow': '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #FFEE00, 0 0 40px #FFEE00',
                            }
                        }
                    },
                    colors: {
                        'volt-yellow': '#FFEE00',
                        'volt-blue': '#00A8FF',
                        'volt-red': '#FF2D2D',
                        'volt-black': '#121212',
                        'volt-purple': '#8A2BE2',
                    }
                }
            }
        }

        
        // Mobile menu toggle
        const menuBtn = document.getElementById('menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            menuBtn.innerHTML = mobileMenu.classList.contains('hidden') ? 
                '<i class="fas fa-bars text-2xl"></i>' : 
                '<i class="fas fa-times text-2xl"></i>';
        });

        // Shake can on hover
        const heroCan = document.getElementById('hero-can');
        heroCan.addEventListener('mouseenter', () => {
            heroCan.classList.add('animate-shake');
        });
        
        heroCan.addEventListener('animationend', () => {
            heroCan.classList.remove('animate-shake');
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                mobileMenu.classList.add('hidden');
                menuBtn.innerHTML = '<i class="fas fa-bars text-2xl"></i>';
            });
        });

        // Animate elements when they come into view
        const animateOnScroll = () => {
            const elements = document.querySelectorAll('.flavor-card, .ingredient-icon');
            
            elements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.2;
                
                if(elementPosition < screenPosition) {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }
            });
        };

        // Set initial state
        document.querySelectorAll('.flavor-card, .ingredient-icon').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)';
        });

        // Run on load and scroll
        window.addEventListener('load', animateOnScroll);
        window.addEventListener('scroll', animateOnScroll);

        // Fake countdown timer for urgency
        const countdownElement = document.createElement('div');
        countdownElement.className = 'countdown text-volt-yellow text-xl font-bold mb-2';
        document.querySelector('#hero-section .relative').appendChild(countdownElement);
        
        let seconds = 10;
        const countdown = setInterval(() => {
            countdownElement.textContent = `HURRY! ${seconds}s LEFT FOR EXPRESS SHIPPING`;
            seconds--;
            
            if(seconds < 0) {
                clearInterval(countdown);
                countdownElement.textContent = 'EXPRESS SHIPPING EXPIRED - REGULAR SHIPPING ONLY';
            }
        }, 1000);
