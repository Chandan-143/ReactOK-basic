


class A{

    // 1. properties
        name; // this is only decleration

        suruname=''; // this is only decleration and initialization
        address ='Chandan'


    //2 constructor

    constructor(){
        //this.member
        this.name='Riya'
        this.suruname="Chandan"
    }



    //3 methods

    showNmae(){
        console.log(this.name)
    }
}

// lets crate a class object

// let object = new ClassNmae();

let obj = new A();

// obj.name;
// obj.suruname;
// obj.address;
obj.showNmae();