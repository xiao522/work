let currentSlideIndex = 0; // 当前幻灯片索引

// 自动切换幻灯片
function showSlides() {
    const slides = document.querySelectorAll('.slide'); // 获取所有幻灯片
    const indicators = document.querySelectorAll('.indicator'); // 获取所有索引点

    // 隐藏所有幻灯片和索引点
    slides.forEach((slide, index) => {
        slide.classList.remove('active');
        indicators[index].classList.remove('active');
    });

    // 更新当前幻灯片索引
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;

    // 显示当前幻灯片和对应索引点
    slides[currentSlideIndex].classList.add('active');
    indicators[currentSlideIndex].classList.add('active');
}

// 点击索引点切换幻灯片
function currentSlide(index) {
    currentSlideIndex = index; // 更新当前索引
    const slides = document.querySelectorAll('.slide'); // 获取所有幻灯片
    const indicators = document.querySelectorAll('.indicator'); // 获取所有索引点

    // 隐藏所有幻灯片和索引点
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));

    // 显示当前幻灯片和对应索引点
    slides[currentSlideIndex].classList.add('active');
    indicators[currentSlideIndex].classList.add('active');
}

// 切换模块内容
function showModule(module) {
    const modules = ['studentInfo', 'academicSystem', 'courseSchedule'];
    modules.forEach(mod => {
        document.getElementById(mod).style.display = 'none'; // 隐藏所有模块
    });
    document.getElementById(module).style.display = 'block'; // 显示选中的模块
}

// 每3秒自动切换幻灯片
setInterval(showSlides, 3000);
