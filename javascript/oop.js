/*
class person
{
    setvalues(age,name)
    {
        this.age=age;
        this.name=name;  
    }
    printvalues()
    {
        console.log(this.age);
        console.log(this.name);
    }
}

ob=new person();
ob.setvalues(20,"ajay");
ob.printvalues();
*/

class students
{
    setvalues(rollno,name,age,marks)
    {
        this.rollno=rollno;
        this.name=name;
        this.age=age;
        this.marks=marks;  
    }
    printvalues()
    {
        console.log(this.rollno);
        console.log(this.name);
        console.log(this.age);
        console.log(this.marks);
    }
}

s1=new students();
s1.setvalues(1,"aaa",20,80);
s1.printvalues();

s2=new students();
s2.setvalues(2,"bbb",20,70);
s2.printvalues();

s3=new students();
s3.setvalues(3,"ccc",20,45);
s3.printvalues();

s4=new students();
s4.setvalues(4,"ddd",20,60);
s4.printvalues();

arr=[];
arr.push(s1);
arr.push(s2);
arr.push(s3);
arr.push(s4);
/*
data=arr.filter(o=>o.marks>50)
for(ob of data)
{
    console.log(ob.name)
    console.log(ob.marks)
}
*/

val=arr.map(ob=>ob.toUpperCase());
for(o of val)
{
    console.log(o.name)
}