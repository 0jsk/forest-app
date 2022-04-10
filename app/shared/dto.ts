// credits to: https://github.com/tamj0rd2/dto/blob/master/src/dto.ts
/* eslint-disable @typescript-eslint/no-explicit-any */

type IsOptional<T> = Extract<T, undefined> extends never ? false : true;
type Function_ = (...args: readonly unknown[]) => unknown;
type IsFunction<T> = T extends Function_ ? true : false;

type IsValueType<T> = T extends
  | any[]
  | Date
  | Function_
  | Map<any, any>
  | Set<any>
  | boolean
  | number
  | string
  | null
  | undefined
  ? true
  : false;

type ReplaceDate<T> = T extends Date ? string : T;
type ReplaceSet<T> = T extends Set<infer X> ? X[] : T;
type ReplaceMap<T> = T extends Map<infer K, infer I>
  ? {
      [key in K extends number | string | symbol
        ? K
        : string]: IsValueType<I> extends true
        ? I
        : { [K in keyof ExcludeFuncsFromObject<I>]: Dto<I[K]> };
    }
  : T;
type ReplaceArray<T> = T extends (infer X)[] ? Dto<X>[] : T;

type ExcludeFuncsFromObject<T> = Pick<
  T,
  { [K in keyof T]: IsFunction<T[K]> extends true ? never : K }[keyof T]
>;

type Dtoified<T> = IsValueType<T> extends true
  ? ReplaceDate<ReplaceMap<ReplaceSet<ReplaceArray<T>>>>
  : { [K in keyof ExcludeFuncsFromObject<T>]: Dto<T[K]> };

export type Dto<T> = IsFunction<T> extends true
  ? never
  : IsOptional<T> extends true
  ? Dtoified<Exclude<T, undefined>> | null
  : Dtoified<T>;
