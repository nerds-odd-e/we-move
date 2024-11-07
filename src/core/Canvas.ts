export class Canvas {
    private svg: SVGElement;

    constructor(width: number, height: number) {
        this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        this.svg.setAttribute('width', width.toString());
        this.svg.setAttribute('height', height.toString());
        this.svg.style.border = '1px solid black';
    }

    mount(container: HTMLElement) {
        container.appendChild(this.svg);
    }

    getSvgElement(): SVGElement {
        return this.svg;
    }
} 