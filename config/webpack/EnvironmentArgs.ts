class EnvironmentArgs {
    public NODE_ENV?: 'development' | 'production' | 'none';
    public analyze: boolean = false;

    constructor(envArgs: any) {
        this.NODE_ENV = envArgs.NODE_ENV;
        this.analyze = envArgs.analyze === 'true' ? true : false;
    }
}

export default EnvironmentArgs;
