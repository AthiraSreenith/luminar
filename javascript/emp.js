class employee
{
    constructor(name,idno,sal)
    {
        this.name=name;
        this.idno=idno;
        this.sal=sal;
    }
    static getcname(cmpname)
    {
        cmpname="tatamotors";
        return cmpname;
    }
    printvalues()
    {
        console.log("name="+this.name);
        console.log("idno="+this.idno);
        console.log("sal="+this.sal);
    }
}
o1=new employee("aaa",111,10000)
o1.printvalues();
o2=new employee("bbb",112,40000)
o2.printvalues();
o3=new employee("ccc",113,25000)
o1.printvalues();
o4=new employee("ddd",114,35000)
o1.printvalues();


arr=[];
arr.push(o1)
arr.push(o2)
arr.push(o3)
arr.push(o4)

for(int i = 0 ; i < array.length;i++)
{
    for(int j = i+1 ; j< array.length;j++)
    {
        if(array[i] > array[j])
        {
            int temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
}
for(i of arr)
    {
        console.log(arra)
    }



