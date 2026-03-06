export interface Algorithm {

    allow( key: string ): Promise<boolean>;

}
