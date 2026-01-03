function bankAccount(balance){
    return {
        deposit(amount){
            balance=balance+amount
            console.log(balance);
            
        },
        withdraw(amount){
            balance=balance-amount
            console.log(balance);
            
        }
    };
   }
   const account=bankAccount(1000)
   account.deposit(5000);
   account.withdraw(2000);
