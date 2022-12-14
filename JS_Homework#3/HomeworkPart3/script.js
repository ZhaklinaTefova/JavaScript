// 1. Declare a function bank account
// 2. Give a parametar cash
// 3. Create variable money balace
// 4. If staitments for 3 options
// 5. Return and Invoke
// 6. Print in the console and with alert

function bankAccount(cash) {
  let moneyBalance = 5000;

  let userOption = prompt(
    "To withdrawn money press 1\nTo input money press 2\nFor balace press 3"
  );

  if (userOption === null || userOption === "") {
    console.log(userOption);
  } else if (userOption != 1 && userOption != 2 && userOption != 3) {
    console.log("ERROR");
  }
  let input = parseInt(userOption);

  if (input === 1) {
    cash = parseInt(
      prompt("Please insert how much money you like to withdrawn.")
    );
    //  nested if
    if (cash <= moneyBalance) {
      let withdrawnMoney = moneyBalance - cash;
      console.log(
        `You have withdrawn ${cash}£, and your curent balance is ${withdrawnMoney}£`
      );
      alert(
        `You have withdrawn ${cash}£, and your curent balance is ${withdrawnMoney}£`
      );
      return withdrawnMoney;
    } else if (cash >= moneyBalance) {
      console.log(
        `You don't have ${cash}£ on your bank account, your curent balance is ${moneyBalance}£`
      );
      alert(
        `You don't have ${cash}£ on your bank account, your curent balance is ${moneyBalance}£`
      );
    } else if (cash !== Number) {
      alert("Error!");
    }
  }

  if (input === 2) {
    cash = parseInt(
      prompt(
        "Please insert how much money you like to insert on your bank account."
      )
    );

    moneyBalance += cash;
    console.log(
      `You have insert ${cash}£ and your balance is ${moneyBalance}£`
    );
    alert(`You have insert ${cash}£ and your balance is ${moneyBalance}£`);
    return moneyBalance;
  }

  if (input === 3) {
    alert(`Your balance is: ${moneyBalance}£`);
    console.log(`Your balance is: ${moneyBalance}£`);
    return moneyBalance;
  }
}

bankAccount();
