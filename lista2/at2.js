let astro = (day,month) => {



  if (month < 1 || month > 12)

    {console.log("Mes invalido");}

  if (day < 1 || day > 32)

    {console.log("Dia Invalido");}

  if ((month == 1 && day < 20) || (month == 12 && day >= 22))

    {  console.log("Capricórnio");

    }

  if ((month == 2 && day < 19) || (month == 1 && day >= 22))

    {  console.log("Aquário");
    }

  if ((month == 3 && day < 21) || (month == 2 && day >= 24))

    {  console.log("Peixes");

    }

  if ((month == 4 && day < 20) || (month == 3 && day >= 23))

    {  console.log("Aries");

    }

  if ((month == 5 && day < 21) || (month == 4 && day >= 23))

    {  console.log("Touro");

    }

  if ((month == 6 && day < 22) || (month == 5 && day >= 23))

    {  console.log("Gêmeos");

    }

  if ((month == 7 && day < 23) || (month == 6 && day >= 22))

    {  console.log("Câncer");

    }

  if ((month == 8 && day < 23) || (month == 7 && day >= 21))

    {  console.log("Leão");

    }

  if ((month == 9 && day < 23) || (month == 8 && day >= 20))

    {  console.log("Virgem");

    }

  if ((month == 10 && day < 24) || (month == 9 && day >= 21))

    {  console.log("Libra");

    }

  if ((month == 11 && day < 22) || (month == 10 && day >= 19))

    {  console.log("Escorpião");

    }

  if ((month == 12 && day < 22) || (month == 11 && day >= 20))

    {  console.log("Sagitário");}

  }


  astro(4,12)