
// Class Counter
export class Counter {
    private count: number;
    constructor(count: number) {
        this.count = count;
    };

    increment = () => {
        this.count++;
    };

    decrement = () => {
        this.count--;
    };

    getCount = () => {
        return this.count;
    }
};

// Usage Counter
// const { increment, decrement } = new Counter(0);
// console.log(increment());
// console.log(increment());
// console.log(increment());
// console.log(decrement());


// function counter
export const funCounter = (initialVale: number): { getCount: () => number, decrement: () => void, increment: () => void } => {
    let count = initialVale;
    const increment = () => {
        count = count + 1;
    };
    const decrement = () => {
        count = count - 1;
    }
    const getCount = () => count;
    return { getCount, decrement, increment }
};



