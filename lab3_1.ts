interface PaymentMethod{
    pay(amount:number): void;
}
class Cash implements PaymentMethod{
    pay(amount:number): void{
        console.log('Cash  ขำระเงิน 50 บาท');
    }
}

class CreditCard implements PaymentMethod{
    pay(amount:number):void{
        console.log('Credit Card ชำระเงิน 500 บาท หมายเลขบัตรเครดิต 86546851');
    }
}

const cash = new Cash();
const card = new CreditCard();

cash.pay(50);
card.pay(500);