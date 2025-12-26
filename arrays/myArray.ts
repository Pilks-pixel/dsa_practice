class MyArray {
	data: { [key: number]: any };
	length: number;

	constructor() {
		this.data = {};
		this.length = 0;
	}

	get(index: number) {
		return this.data[index];
	}

	push(item: any) {
		this.data[this.length] = item;
		this.length++;
		return this.length;
	}

	pop() {
		const lastItem = this.data[this.length - 1];
		delete this.data[this.length - 1];
		this.length--;
		return lastItem;
	}

	unshift() {
		const firstItem = this.data[0];
		delete this.data[0];
		this.shiftItems(0);
		return firstItem;
	}

	shift(item: any) {
        this.unshiftItems();
		this.data[0] = item;
		this.length++;
		return this.length;
	}

	delete(index: number) {
		const item = this.data[index];
		this.shiftItems(index);
		return item;
	}

	shiftItems(index: number) {
		for (let i = index; i < this.length - 1; i++) {
			this.data[i] = this.data[i + 1];
		}
		delete this.data[this.length - 1];
		this.length--;
	}

	unshiftItems() {
		for (let i = this.length; i > 0; i--) {
			this.data[i] = this.data[i - 1];
		}
	}
}

const myArray = new MyArray();
myArray.push("Hello");
myArray.push("World");
myArray.push("!");
// myArray.pop();
// console.log(myArray.delete(0));
// myArray.shift("First")
myArray.unshift();
console.log(myArray.get(0)); // Output: Hello
console.log(myArray.get(1)); // Output: World
console.log(myArray);
