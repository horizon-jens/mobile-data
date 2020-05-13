(function (doc, win) {
    let fn = () => {
        let designWidth = 375,
            rem2px = 37.5;
        let fz = Math.floor(window.innerWidth / designWidth * rem2px);
        document.documentElement.style.fontSize = fz + 'px';
    }
    if (!doc.addEventListener) return;
    win.addEventListener('resize', fn);
    doc.addEventListener('DOMContentLoaded', fn);
})(document, window);