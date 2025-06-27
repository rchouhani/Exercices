export class NonProfit {
    private name: string;
    private city: string;
    members: Member[] = [];
    private memberCapacity: number;

    public constructor(name: string, city: string, memberCapacity: number) {
        this.name = name;
        this.city = city;
        this.memberCapacity = memberCapacity;
    }

    addMember(member: Member) {     
        this.members.push(member)
    }
   
 }

export class Member {
    private name: string;
    private age: number;
    private city: string;

    public constructor(name: string, age: number, city: string) {
        this.name = name;
        this.age = age;
        this.city = city;
    }

 }

 const Romain = new Member("Romain", 35, "Paris")