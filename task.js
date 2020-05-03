// Создать объект, который описывает ширину и высоту прямоугольника, а также может посчитать площадь фигуры const rectangle = {width:..., height:..., getSquare:...};

const rectangle = {
    width: 10, 
    height: 5, 
    getSquare() {
       return this.height * this.width;
    }
};

console.log(rectangle.getSquare());

// Создать объект, у которого будет цена товара и его скидка, а также два метода: для получения цены и для расчета цены с учетом скидки

const price = {
    price: 10,
    discount: '15%',
    getPrice() { return this.price },
    getPriceWithDiscount() {
        let priceDiscount = this.price - (this.price * parseInt(this.discount) / 100);

        return priceDiscount;
    }
};

console.log(price.getPrice());
console.log(price.getPriceWithDiscount());

// Создать объект, у которого будет поле высота и метод “увеличить высоту на один”. Метод должен возвращать новую высоту

const object = {
    height: 10,
    increaseHeight() {
        return this.height = this.height + 1;
    }
};

object.increaseHeight();
console.log(object.height);

// Создать объект “вычислитель”, у которого есть числовое свойство “значение” и методы “удвоить”, “прибавить один”, “отнять один”. Методы можно вызывать через точку, образуя цепочку методов

const numerator = {
    value: 1,
    double: function () {
        this.value *= 2;
        return this;
    },
    plusOne: function () {
        this.value += 1;
        return this;
    },
    minusOne: function () {
        this.value -= 1;
        return this;
    },
};

numerator.double().plusOne().plusOne().minusOne();
console.log(numerator.value);

// Создать объект с розничной ценой и количеством продуктов. Этот объект должен содержать метод для получения общей стоимости всех товаров (цена * количество продуктов)

const products = {
    price: 10,
    quantity: 5,
    totalPrice() { return this.price * this.quantity;}
};

console.log(products.totalPrice());

//Создать объект из предыдущей задачи. Создать второй объект, который описывает количество деталей и цену за одну деталь. Для второго объекта нужно узнать общую стоимость всех деталей, но нельзя создавать новые функции и методы. Для этого “позаимствуйте” метод из предыдущего объекта.

const details = {
    price: 20,
    quantity: 5,
    totalPrice: products.totalPrice
};

console.log(details.totalPrice());

// Даны объект и функция. Не изменяя функцию или объект, получить результат функции getSquare для объекта sizes

let sizes = {width: 5, height: 10},
getSquare = function () {return this.width * this.height};

sizes.square = getSquare;

console.log(sizes.square());

// Измените функцию getElementHeight таким образом, чтобы можно было вызвать getElementHeight() и получить 25.

let element = {
    height: 25,
    getHeight: function () {return this.height;}
};

let getElementHeight = element.getHeight.bind(element);
console.log(getElementHeight());