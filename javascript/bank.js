class bank
{
    constructor(accno,acctype,name)
    {
        this.accno=accno;
        this.acctype=acctype;
        this.name=name;
        this.bal=2000;
    }
    static getbname(bnkname)
    {
        bnkname="sbt";
        return bnkname;
    }
    printvalues()
    {
        console.log("accno="+this.accno);
        console.log("acctype="+this.acctype);
        console.log("name="+this.name);
    }
    deposit(amt)
    {
        this.bal=this.bal+amt;
        console.log("bal="+this.bal);
    }
    withdrawal(amt)
    {
        if(amt>this.bal)
            {
                alert("insufficient balance");
            }
        else
        {
            this.bal=this.bal-amt;
            console.log("bal="+this.bal);
        }    
    }
    balanceenquiry()
    {
        console.log("your account"+this.accno+"available balance"+this.bal);
    }
}
ob=new bank(1123,"savings","aaa");
bank.getbname();
ob.printvalues();
ob.deposit(20000);
ob.withdrawal(2000);
ob.balanceenquiry();