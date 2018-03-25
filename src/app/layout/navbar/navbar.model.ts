export class Menu{
  constructor(
    public name: string,
    public items: Items[],
    public submenu :Submenu[]
  ) {}
}

export class Items{
  constructor(
      public name:string,
      public url:string,
  ){}
}

export class Submenu{
  constructor(
    public name: string,
    public items: Items[],  
  ){}
}