// Array of quotations
const quotations = [
    "Life is what you make it. - Eleanor Roosevelt",
    "You are never too old to set another goal or to dream a new dream. - Malala Yousafzai",
    "There is nothing impossible to they who will try. - Alexander The Great"
  ];
  
  // Function to get a random quotation
  function getRandomQuotation() {
    const index = Math.floor(Math.random() * quotations.length);
    return quotations[index];
  }
  
  // Prints random quotation to the console
  console.log(getRandomQuotation());
  