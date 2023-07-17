interface IDrawableSvg {
    fill:string;
    draw(): SVGElement;
    setSize(division:number): void;
    setPos(x:number, y:number): void;
}

class Rect implements IDrawableSvg {
    private size: number = 0;
    private x: number = 0;
    private y: number = 0;
    fill: string =  "#B30F3A";

    draw(): SVGElement {
        const rectElement = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        rectElement.setAttribute("x", `${Math.floor((this.x * this.size) * 100) / 100}`);
        rectElement.setAttribute("y", `${Math.floor((this.y * this.size) * 100) / 100}`);
        rectElement.setAttribute("width", `${this.size + 0.2}`);
        rectElement.setAttribute("height", `${this.size + 0.2}`);
        rectElement.setAttribute("fill", `${this.fill}`);

        return rectElement;
    }

    setSize(division: number): void {
        this.size = Math.floor((128 / division) * 100) / 100;
    }

    setPos(x: number, y: number): void {
        this.x = x;
        this.y = y;
    }
}

class Circle implements IDrawableSvg {
    private size: number = 0;
    private x: number = 0;
    private y: number = 0;
    fill: string =  "#B30F3A";

    draw(): SVGElement {
        const circleElement = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circleElement.setAttribute("cx", `${Math.floor((this.x * this.size + this.size / 2) * 100) / 100}`);
        circleElement.setAttribute("cy", `${Math.floor((this.y * this.size + this.size / 2) * 100) / 100}`);
        circleElement.setAttribute("r", `${this.size / 2 - 1}`);
        circleElement.setAttribute("fill", `${this.fill}`);

        return circleElement;
    }

    setSize(division: number): void {
        this.size = Math.floor((128 / division) * 100) / 100;
    }

    setPos(x: number, y: number): void {
        this.x = x;
        this.y = y;
    }
}

function GetDrawSvg(pattern: boolean[][], shape:IDrawableSvg): string {
    // SVG要素を作成
    let svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgElement.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svgElement.setAttribute('viewBox', '0 0 128 128');

    for(let row in pattern) {
        for(let col in pattern[row]){
            if(pattern[row][col]){
                shape.setPos(Number(col), Number(row));
                svgElement.appendChild(shape.draw());
            }
        }
    }
    return svgElement.outerHTML;
}

export { GetDrawSvg, Rect, Circle };
export type { IDrawableSvg };