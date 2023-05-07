export type IActivities = {
    greet(name: string) : Promise<string>;
    getName(): Promise<string>;
}

