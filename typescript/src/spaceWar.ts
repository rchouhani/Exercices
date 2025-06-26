class Starship {
    private name: string;
    private type: string;
    private size: number;

    public constructor(name: string, size: number, type: string){
        this.name = name;
        this.type = type;
        this.size = size;
    }
}

class Cruiser extends Starship {
    private maxCapacity: number;
    private occupiedCapacity: number = 0;

public constructor(name: string, size: number, type: string, maxCapacity: number){
    super(name, size, type)
    this.maxCapacity = maxCapacity;
}
}

class Interceptors extends Starship {
public constructor{
}
}

