document.getElementById('logout-btn').addEventListener('click', () => {
  window.location.href = '../index.html';
});

// Success message
function successMessageFunc(bank = '', work = '', money = '') {
  let successMessage = document.getElementById('success-message');
  successMessage.removeAttribute('style', true);

  let successMessageText = document.getElementById('success-message-text');
  successMessageText.innerText = `${bank} ${work} ${money} Tk`;

  document
    .getElementById('success-message-close')
    .addEventListener('click', () => {
      let successMessageClose = document.getElementById('success-message');
      successMessageClose.style.display = 'none';
    });

  let errorMessageClose = document.getElementById('error-message');
  errorMessageClose.style.display = 'none';
}

// Error message
function errorMessageFunc(errorMsg) {
  let errorMessage = document.getElementById('error-message');
  errorMessage.removeAttribute('style', true);

  let errorMessageText = document.getElementById('error-message-text');
  errorMessageText.innerText = `${errorMsg}`;

  document
    .getElementById('error-message-close')
    .addEventListener('click', () => {
      let errorMessageClose = document.getElementById('error-message');
      errorMessageClose.style.display = 'none';
    });

  let successMessageClose = document.getElementById('success-message');
  successMessageClose.style.display = 'none';
}

function transactionList(cardImg, cardText, dates) {
  let transactionListContainer = document.getElementById(
    'transaction-list-container'
  );

  let transactionBox = document.createElement('div');
  transactionBox.classList.add(
    'transaction-box',
    'flex',
    'justify-between',
    'items-center',
    'py-3',
    'px-4',
    'bg-white',
    'border',
    'border-[#0808081a]',
    'rounded-xl'
  );
  transactionBox.innerHTML = `
      <div class="flex gap-2">
        <div class="p-3 bg-[#0808080d] w-[45px] h-[45px] rounded-full">
            <img class="w-full h-full" src="${cardImg}" alt="">
        </div>
        <div>
            <h3 class="text-[#080808b3] font-semibold text-base">${cardText}</h3>
            <p class="text-[#080808b3] font-normal text-[12px]">${dates}</p>
        </div>
      </div>
      <div class="w-6 h-6 cursor-pointer">
        <i class="fa-solid fa-ellipsis-vertical text-[#080808b3] font-semibold text-base"></i>
      </div>
  `;

  transactionListContainer.appendChild(transactionBox);
}

// get Cards
let addMoneyCard = document.getElementById('add-money-card');
let addMoneyText = document.getElementById('add-money-text');

let cashoutCard = document.getElementById('cashout-card');
let cashoutText = document.getElementById('cashout-text');

let transferCard = document.getElementById('transfer-card');
let transferText = document.getElementById('transfer-text');

let bonusCard = document.getElementById('bonus-card');
let bonusText = document.getElementById('bonus-text');

let paybillCard = document.getElementById('paybill-card');
let paybillText = document.getElementById('paybill-text');

let transactionCard = document.getElementById('transaction-card');
let transactionText = document.getElementById('transaction-card');

// Card style Toggle
function makeStyles(card, text) {
  addMoneyCard.classList.remove('active-card');
  addMoneyText.classList.remove('active-card-text');

  cashoutCard.classList.remove('active-card');
  cashoutText.classList.remove('active-card-text');

  transferCard.classList.remove('active-card');
  transferText.classList.remove('active-card-text');

  bonusCard.classList.remove('active-card');
  bonusText.classList.remove('active-card-text');

  paybillCard.classList.remove('active-card');
  paybillText.classList.remove('active-card-text');

  transactionCard.classList.remove('active-card');
  transactionText.classList.remove('active-card-text');

  card.classList.add('active-card');
  text.classList.add('active-card-text');
}

// Cards click
addMoneyCard.addEventListener('click', () => {
  makeStyles(addMoneyCard, addMoneyText);
});

cashoutCard.addEventListener('click', () => {
  makeStyles(cashoutCard, cashoutText);
});

bonusCard.addEventListener('click', () => {
  makeStyles(bonusCard, bonusText);
});

transferCard.addEventListener('click', () => {
  makeStyles(transferCard, transferText);
});

paybillCard.addEventListener('click', () => {
  makeStyles(paybillCard, paybillText);
});

transactionCard.addEventListener('click', () => {
  makeStyles(transactionCard, transactionText);
});

// Toogle data
let addMoneyForm = document.getElementById('add-money-form');
let cashoutForm = document.getElementById('cash-out-form');
let transferForm = document.getElementById('transfer-form');
let bonusForm = document.getElementById('bonus-form');
let paybillForm = document.getElementById('pay-bill-form');
let transactionForm = document.getElementById('transaction-form');

// Toggle Form hide unhide
function hiddenForm(form) {
  addMoneyForm.classList.add('hidden-form');
  cashoutForm.classList.add('hidden-form');
  transferForm.classList.add('hidden-form');
  bonusForm.classList.add('hidden-form');
  paybillForm.classList.add('hidden-form');
  transactionForm.classList.add('hidden-form');

  form.classList.remove('hidden-form');
}

// Click to Hide unhide form
addMoneyCard.addEventListener('click', () => {
  hiddenForm(addMoneyForm);
});

cashoutCard.addEventListener('click', () => {
  hiddenForm(cashoutForm);
});

transferCard.addEventListener('click', () => {
  hiddenForm(transferForm);
});

bonusCard.addEventListener('click', () => {
  hiddenForm(bonusForm);
});

paybillCard.addEventListener('click', () => {
  hiddenForm(paybillForm);
});

transactionCard.addEventListener('click', () => {
  hiddenForm(transactionForm);

  let transactionBox = document.getElementsByClassName('transaction-box');
  console.log();

  if (transactionBox.length > 0) {
    let transactionHistory = document.getElementById('transaction-history');
    transactionHistory.removeAttribute('style', true);
    let transactionNoHistory = document.getElementById(
      'transaction-no-history'
    );
    transactionNoHistory.style.display = 'none';
  }
});

// Money add
document.getElementById('addMoney-btn').addEventListener('click', e => {
  e.preventDefault();
  let addUsername = document.getElementById('add-user-input');
  let addPassInput = document.getElementById('add-pass-input');
  let pass = '609012';

  if (addUsername.value !== 'im.com' || pass !== addPassInput.value) {
    if (addUsername.value.length !== 6) {
      errorMessageFunc('Please Enter 6 char username ');
      return;
    }
    errorMessageFunc('Please Enter valid username or pin number');
    return;
  }

  let mainAmmount = document.getElementById('main-ammount');
  let mainAmmountValue = parseInt(mainAmmount.innerText);

  let addMoneyInput = document.getElementById('add-ammount-input');
  let addMoneyValue = parseInt(addMoneyInput.value);

  if (addMoneyInput.value < 1) {
    errorMessageFunc('Please type valid ammount');
    return;
  }

  addMoneyInput.value = '';
  addPassInput.value = '';

  let calcAmmount = mainAmmountValue + addMoneyValue;
  mainAmmount.innerText = calcAmmount;

  let addBankSelect = document.getElementById('add-bank-select');
  successMessageFunc(addBankSelect.value, 'Add Money', addMoneyValue);

  // Transations
  let addMoneyImgId = document.getElementById('add-money-img');
  let addMoneyImg = addMoneyImgId.getAttribute('src');
  let addMoneyText = document.getElementById('add-money-text');

  let DatesFunc = new Date();
  let updateDate = DatesFunc.toLocaleString();
  transactionList(addMoneyImg, addMoneyText.innerText, updateDate);
});

// Money Cashout
document.getElementById('cashout-btn').addEventListener('click', e => {
  e.preventDefault();
  let cashoutUsername = document.getElementById('cashout-user-input');
  let cashoutPassInput = document.getElementById('cashout-pass-input');
  let pass = '609012';

  if (cashoutUsername.value !== 'im.com' || pass !== cashoutPassInput.value) {
    if (cashoutUsername.value.length !== 6) {
      errorMessageFunc('Please Enter 6 char username ');
      return;
    }
    errorMessageFunc('Please Enter valid username or pin number');
    return;
  }

  let mainAmmount = document.getElementById('main-ammount');
  let mainAmmountValue = parseInt(mainAmmount.innerText);

  let cashoutMoneyInput = document.getElementById('cashout-ammount-input');
  let cashoutMoneyValue = parseInt(cashoutMoneyInput.value);

  if (cashoutMoneyInput.value < 1) {
    errorMessageFunc('Please type valid ammount');
    return;
  }

  cashoutMoneyInput.value = '';
  cashoutPassInput.value = '';

  let calcAmmount = mainAmmountValue - cashoutMoneyValue;
  mainAmmount.innerText = calcAmmount;

  successMessageFunc('Cashout', cashoutMoneyValue);

  // Transations
  let cashoutImgId = document.getElementById('cashout-img');
  let cashoutImg = cashoutImgId.getAttribute('src');
  let cashoutText = document.getElementById('cashout-text');

  let DatesFunc = new Date();
  let updateDate = DatesFunc.toLocaleString();
  transactionList(cashoutImg, cashoutText.innerText, updateDate);
});

// Transfer Money
document.getElementById('transfer-btn').addEventListener('click', e => {
  e.preventDefault();
  let transferphoneInput = document.getElementById('transfer-phone-input');
  let transferPassInput = document.getElementById('transfer-pass-input');
  let pass = '609012';

  if (
    transferphoneInput.value !== '01609216725' ||
    pass !== transferPassInput.value
  ) {
    if (transferphoneInput.value.length !== 11) {
      errorMessageFunc('Please Enter 11 digit number');
      return;
    }
    errorMessageFunc('Please Enter Correct Pin Number');
    return;
  }

  let mainAmmount = document.getElementById('main-ammount');
  let mainAmmountValue = parseInt(mainAmmount.innerText);

  let transferMoneyInput = document.getElementById('transfer-ammount-input');
  let transferMoneyValue = parseInt(transferMoneyInput.value);

  if (transferMoneyInput.value < 1) {
    errorMessageFunc('Please type valid ammount');
    return;
  }

  if (mainAmmountValue < transferMoneyValue) {
    errorMessageFunc('Apnar account a porjapto balance nai');
    return;
  }

  transferphoneInput.value = '';
  transferMoneyInput.value = '';
  transferPassInput.value = '';

  let calcAmmount = mainAmmountValue - transferMoneyValue;
  mainAmmount.innerText = calcAmmount;

  successMessageFunc('Transfer Money', transferMoneyValue);

  // Transations
  let transferImgId = document.getElementById('transfer-img');
  let transferImg = transferImgId.getAttribute('src');
  let transferText = document.getElementById('transfer-text');

  let DatesFunc = new Date();
  let updateDate = DatesFunc.toLocaleString();
  transactionList(transferImg, transferText.innerText, updateDate);
});

// Pay Money
document.getElementById('paybill-btn').addEventListener('click', e => {
  e.preventDefault();
  let paybillPhoneInput = document.getElementById('paybill-phone-input');
  let paybillPassInput = document.getElementById('paybill-pass-input');
  let pass = '609012';

  if (
    paybillPhoneInput.value !== '01609216725' ||
    pass !== paybillPassInput.value
  ) {
    if (paybillPhoneInput.value.length !== 11) {
      errorMessageFunc('Please Enter 11 digit number');
      return;
    }
    errorMessageFunc('Please Enter valid number or Pin code');
    return;
  }

  let mainAmmount = document.getElementById('main-ammount');
  let mainAmmountValue = parseInt(mainAmmount.innerText);

  let paybillMoneyInput = document.getElementById('paybill-amount-input');
  let paybillMoneyValue = parseInt(paybillMoneyInput.value);

  if (paybillMoneyInput.value < 1) {
    errorMessageFunc('Please type valid ammount');
    return;
  }

  if (mainAmmountValue < paybillMoneyValue) {
    errorMessageFunc('Apnar account a porjapto balance nai');
    return;
  }

  paybillPhoneInput.value = '';
  paybillMoneyInput.value = '';
  paybillPassInput.value = '';

  let calcAmmount = mainAmmountValue - paybillMoneyValue;
  mainAmmount.innerText = calcAmmount;

  let paybillAccount = document.getElementById('paybill-account');
  let accountName = paybillAccount.value + ' ' + 'Account';

  successMessageFunc(accountName, 'PayBill', paybillMoneyValue);

  // Transations
  let paybillImgId = document.getElementById('paybill-img');
  let paybillImg = paybillImgId.getAttribute('src');
  let paybillText = document.getElementById('paybill-text');

  let DatesFunc = new Date();
  let updateDate = DatesFunc.toLocaleString();
  transactionList(paybillImg, paybillText.innerText, updateDate);
});

// bonus
document.getElementById('bonus-btn').addEventListener('click', e => {
  e.preventDefault();

  errorMessageFunc('No bonus here.');
  return;
});
