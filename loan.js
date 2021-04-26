$(document).ready(function (){
    $("button").on("click", loanCalculation)
})

function loanCalculation (event)
{
    event.preventDefault();

    let salary = $("#salary").val();

    let creditScore = $("#creditScore").val();

    let monthsAtJob = $("#job").val();

    let approved = `Your Loan is Approved`;

    let denied = `No Loan for You`;
    
    if (salary >= 40000)
    {
        if(creditScore >= 600)
        {
            $("span#loanOutput").text(approved)
        }
        else if (creditScore < 600)
        {
            if (monthsAtJob > 12)
            {
                $("span#loanOutput").text(approved)
            }
            else if (monthsAtJob < 12)
            {
                $("span#loanOutput").text(denied)
            }
        }
    }
    else if (salary < 40000)
    {
        if (creditScore >= 600)
        {
            if (monthsAtJob > 12)
            {
                $("span#loanOutput").text(approved)
            }
            else if (monthsAtJob < 12)
            {
                $("span#loanOutput").text(denied)
            }
        }
        else if (creditScore < 600)
        {
            $("span#loanOutput").text(denied)
        }
    }
}