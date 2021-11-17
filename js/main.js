function parallax(e) {
    this.querySelectorAll('.item').forEach(item => {
        let speed = item.getAttribute('data-speed');
        item.style.transform = `translateX(${e.clientX*speed/1000}px)`;
    });
}

document.addEventListener('mousemove', parallax);