import Environment from "./Constants/Environment";

class EnvironmentArgs {
    public NODE_ENV: Environment = Environment.DEVELOPMENT;
    public analyze: boolean = false;

    constructor(envArgs: any) {
        if (envArgs) {
            this.NODE_ENV = envArgs.NODE_ENV || Environment.DEVELOPMENT;
            this.analyze = envArgs.analyze === 'true' ? true : false;
        }
    }

    isProduction (): boolean {
        return this.NODE_ENV === Environment.PRODUCTION
    }
}

export default EnvironmentArgs;
