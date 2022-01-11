import { Type } from "@angular/core";

export interface RoutesConfig {
    name: string;
    module: Type<any>;
}