export class SvgObject {
    element: SVGElement;
    private x: number = 0;
    private y: number = 0;

    constructor(
        private canvas: SVGElement,
        private svgContent: string,
        initialX: number = 0,
        initialY: number = 0
    ) {
        const template = document.createElement('template');
        template.innerHTML = svgContent.trim();
        this.element = template.content.firstChild as SVGElement;
        this.setPosition(initialX, initialY);
        canvas.appendChild(this.element);
    }

    setPosition(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.element.style.transform = `translate(${x}px, ${y}px)`;
    }
} 