export default class Calc {
    public total: number = 0;
    public current: number = 0;
    
    constructor(total: number, current: number) {
        this.setTotal(total);
        this.setCurrent(current);
    }

    setTotal(n: number): void {
        if (typeof n === 'number') {
            this.total += n;
        } else {
            throw new Error('Only input a number')
        }
    }

    setCurrent(n: number): void {
        if (typeof n === 'number') {
            this.current = n;
        } else {
            throw new Error('Only input a number')
        }
    }

    getTotal() {
        return this.total
    }

    getCurrent() {
        return this.current
    }

    add(a: number, b: number): void{
        this.setCurrent(0)
        let res = a + b
        this.setCurrent(res)
        this.setTotal(res)
    }

    subs(a: number, b: number): void{
        let res = a - b
        this.setTotal(res)
    }

    mult(a: number, b: number): void{
        let res = a * b
        this.setTotal(res)
    }

    div(a: number, b: number): void{
        let res = a / b
        this.setTotal(res)
    }

    delete(): void{
        console.log("delete")
        this.setTotal(0)
        this.setCurrent(0)
    }
}
