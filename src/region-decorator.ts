import {IRegionAdapter, RegionDefinition} from "@uxland/regions";


export const regionsProperty = '__lit_regions__';

export const region = <T = any>(regionDefinition: RegionDefinition) =>
    (proto: any, propName: string) => {
        proto.constructor[regionsProperty] = {...proto.constructor[regionsProperty], [propName]: regionDefinition}
    };