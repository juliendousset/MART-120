function CheckForm()
{
    // Sets Values Once the Form is Submitted
    RectXs [0] = 0;
    Compounds = document.getElementById("C").value;
    InitialInvestment = document.getElementById("IV").value;
    TimeHorizon = parseInt(document.getElementById("TH").value) + 1;
    RectWidth = canvaswidth/TimeHorizon;
    InterestRate = document.getElementById("IR").value/100;
    Middle = canvasheight-(canvasheight/3);
    Scale = Middle/CompoundInterest(TimeHorizon - 1);
    CompoundedMoneyValue[0] = InitialInvestment;
    InflationCompoundedValue[0] = InitialInvestment;
    MoneyLostValue[0] = InitialInvestment;

    // Checks if the Entire Form is Filled
    if(InitialInvestment == ""  || isNaN(InitialInvestment) || Compounds == ""  || isNaN(Compounds) || TimeHorizon == ""  || isNaN(TimeHorizon) || InterestRate == ""  || isNaN(InterestRate))
    {
        FormFilled = "no";
    }
    else
    {
        FormFilled = "yes"
    }

    // Check to Make sure all Text Boxes are Filled out
    if(InitialInvestment == ""  || isNaN(InitialInvestment))
    {
        document.getElementById("IV").style.backgroundColor ="red";
        document.getElementById("IV").focus();
    }
    else
    {
        document.getElementById("IV").style.backgroundColor ="white";
    }
    if(Compounds == "" || isNaN(Compounds))
    {
        document.getElementById("C").style.backgroundColor ="red";
        document.getElementById("C").focus();
    }
    else
    {
        document.getElementById("C").style.backgroundColor ="white";
    }
    if(TimeHorizon == "" || isNaN(TimeHorizon))
    {
        document.getElementById("TH").style.backgroundColor ="red";
        document.getElementById("TH").focus();
    }
    else
    {
        document.getElementById("TH").style.backgroundColor ="white";
    }
    if(InterestRate == "" || isNaN(InterestRate))
    {
        document.getElementById("IR").style.backgroundColor ="red";
        document.getElementById("IR").focus();
    }
    else
    {
        document.getElementById("IR").style.backgroundColor ="white";
    }
}