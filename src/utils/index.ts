export const dragFigure = (el: HTMLElement) => {
    el.style.position = 'absolute';
    el.style.zIndex = '1000';

    const moveAt = (e: MouseEvent) => {
        el.style.left = e.pageX - el.offsetWidth / 2 + 'px';
        el.style.top = e.pageY - el.offsetHeight / 2 + 'px';
    }

    document.onmousemove = (e) => moveAt(e);

    el.onmouseup = () => {
        document.onmousemove = null;
        el.onmouseup = null;
    }

    el.ondragstart = () => false;
}