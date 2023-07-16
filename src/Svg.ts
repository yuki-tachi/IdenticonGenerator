interface IDrawableSvg {
    draw(): SVGElement;
    setSize(division:number): void;
    setPos(x:number, y:number): void;
}

class Rect implements IDrawableSvg {
    private size: number = 0;
    private x:number = 0;
    private y:number = 0;
    private fill:  string =  "#B30F3A";

    draw(): SVGElement {
        let rectElement = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        rectElement.setAttribute("x", `${this.x * this.size}`);
        rectElement.setAttribute("y", `${this.y * this.size}`);
        rectElement.setAttribute("width", `${this.size}`);
        rectElement.setAttribute("height", `${this.size}`);
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

function GetDrawSvg(pattern: boolean[][], shape:IDrawableSvg): SVGSVGElement {
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
    return svgElement;
}

export { GetDrawSvg, Rect };
export type { IDrawableSvg };