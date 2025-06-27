class Starship {
    size: number
    name: string

    public constructor(name: string, size: number) {
        this.size = size
        this.name = name
    }
}

export class Cruiser extends Starship {
    maxCapacity: number
    occupiedCapacity: number = 0

    public constructor(name: string, size: number, maxCapacity: number) {
        super(name, size)
        this.maxCapacity = maxCapacity
    }

    public load(quantity: number) {
        if (this.occupiedCapacity + quantity <= this.maxCapacity) {
            this.occupiedCapacity += quantity
            console.log(`Free space: ${this.maxCapacity - this.occupiedCapacity}`)
        } else {
            console.log("No room left for loading")
        }
    }

    public unload(quantity: number) {
        this.occupiedCapacity -= quantity
        console.log(`Free space: ${this.maxCapacity - this.occupiedCapacity}`)
    }

    public getCurrentFreeSpace(): number {
        return this.maxCapacity - this.occupiedCapacity
    }
}

export class Interceptor extends Starship {
    guns: number
    private maxShotPerGun: number = 1
    private currentShotCount: number = 0

    public constructor(name: string, size: number, guns: number) {
        super(name, size)
        this.guns = guns
    }

    public shoot() {
        if (this.currentShotCount < this.maxShotPerGun * this.guns) {
            this.currentShotCount += 1
            console.log("Shot fired")
        } else {
            console.log("Reload before shoot")
        }
    }

    public reload() {
        this.currentShotCount = 0
        console.log("Guns are reloaded")
    }

    public getCurrentShotCount(): number {
        return this.currentShotCount
    }
}

