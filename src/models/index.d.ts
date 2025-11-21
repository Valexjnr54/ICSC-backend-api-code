
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model Organization
 * 
 */
export type Organization = $Result.DefaultSelection<Prisma.$OrganizationPayload>
/**
 * Model Attendees
 * 
 */
export type Attendees = $Result.DefaultSelection<Prisma.$AttendeesPayload>
/**
 * Model Booths
 * 
 */
export type Booths = $Result.DefaultSelection<Prisma.$BoothsPayload>
/**
 * Model Exhibitors
 * 
 */
export type Exhibitors = $Result.DefaultSelection<Prisma.$ExhibitorsPayload>
/**
 * Model EventPartners
 * 
 */
export type EventPartners = $Result.DefaultSelection<Prisma.$EventPartnersPayload>
/**
 * Model Speakers
 * 
 */
export type Speakers = $Result.DefaultSelection<Prisma.$SpeakersPayload>
/**
 * Model EventPackages
 * 
 */
export type EventPackages = $Result.DefaultSelection<Prisma.$EventPackagesPayload>
/**
 * Model SpeakerPackage
 * 
 */
export type SpeakerPackage = $Result.DefaultSelection<Prisma.$SpeakerPackagePayload>
/**
 * Model PartnerPackage
 * 
 */
export type PartnerPackage = $Result.DefaultSelection<Prisma.$PartnerPackagePayload>
/**
 * Model assigned_booths
 * 
 */
export type assigned_booths = $Result.DefaultSelection<Prisma.$assigned_boothsPayload>
/**
 * Model EventPartnerPackages
 * 
 */
export type EventPartnerPackages = $Result.DefaultSelection<Prisma.$EventPartnerPackagesPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const OrganizationType: {
  MINISTRY: 'MINISTRY',
  AGENCY: 'AGENCY',
  PARASTATAL: 'PARASTATAL',
  OTHER: 'OTHER'
};

export type OrganizationType = (typeof OrganizationType)[keyof typeof OrganizationType]


export const Role: {
  super_admin: 'super_admin',
  attendee: 'attendee',
  ministry: 'ministry',
  agency: 'agency',
  parastatal: 'parastatal',
  exhibitor: 'exhibitor',
  public_speaker: 'public_speaker',
  event_partner: 'event_partner',
  other: 'other'
};

export type Role = (typeof Role)[keyof typeof Role]


export const CreatorType: {
  ADMIN: 'ADMIN',
  USER: 'USER'
};

export type CreatorType = (typeof CreatorType)[keyof typeof CreatorType]


export const Status: {
  Approved: 'Approved',
  Pending: 'Pending',
  Rejected: 'Rejected',
  Available: 'Available',
  SoldOut: 'SoldOut',
  Reserved: 'Reserved',
  Paid: 'Paid'
};

export type Status = (typeof Status)[keyof typeof Status]

}

export type OrganizationType = $Enums.OrganizationType

export const OrganizationType: typeof $Enums.OrganizationType

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type CreatorType = $Enums.CreatorType

export const CreatorType: typeof $Enums.CreatorType

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Admins
 * const admins = await prisma.admin.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Admins
   * const admins = await prisma.admin.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.organization`: Exposes CRUD operations for the **Organization** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Organizations
    * const organizations = await prisma.organization.findMany()
    * ```
    */
  get organization(): Prisma.OrganizationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.attendees`: Exposes CRUD operations for the **Attendees** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attendees
    * const attendees = await prisma.attendees.findMany()
    * ```
    */
  get attendees(): Prisma.AttendeesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.booths`: Exposes CRUD operations for the **Booths** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Booths
    * const booths = await prisma.booths.findMany()
    * ```
    */
  get booths(): Prisma.BoothsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.exhibitors`: Exposes CRUD operations for the **Exhibitors** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Exhibitors
    * const exhibitors = await prisma.exhibitors.findMany()
    * ```
    */
  get exhibitors(): Prisma.ExhibitorsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.eventPartners`: Exposes CRUD operations for the **EventPartners** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EventPartners
    * const eventPartners = await prisma.eventPartners.findMany()
    * ```
    */
  get eventPartners(): Prisma.EventPartnersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.speakers`: Exposes CRUD operations for the **Speakers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Speakers
    * const speakers = await prisma.speakers.findMany()
    * ```
    */
  get speakers(): Prisma.SpeakersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.eventPackages`: Exposes CRUD operations for the **EventPackages** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EventPackages
    * const eventPackages = await prisma.eventPackages.findMany()
    * ```
    */
  get eventPackages(): Prisma.EventPackagesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.speakerPackage`: Exposes CRUD operations for the **SpeakerPackage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SpeakerPackages
    * const speakerPackages = await prisma.speakerPackage.findMany()
    * ```
    */
  get speakerPackage(): Prisma.SpeakerPackageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.partnerPackage`: Exposes CRUD operations for the **PartnerPackage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PartnerPackages
    * const partnerPackages = await prisma.partnerPackage.findMany()
    * ```
    */
  get partnerPackage(): Prisma.PartnerPackageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.assigned_booths`: Exposes CRUD operations for the **assigned_booths** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Assigned_booths
    * const assigned_booths = await prisma.assigned_booths.findMany()
    * ```
    */
  get assigned_booths(): Prisma.assigned_boothsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.eventPartnerPackages`: Exposes CRUD operations for the **EventPartnerPackages** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EventPartnerPackages
    * const eventPartnerPackages = await prisma.eventPartnerPackages.findMany()
    * ```
    */
  get eventPartnerPackages(): Prisma.EventPartnerPackagesDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.18.0
   * Query Engine version: 34b5a692b7bd79939a9a2c3ef97d816e749cda2f
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Admin: 'Admin',
    Users: 'Users',
    Organization: 'Organization',
    Attendees: 'Attendees',
    Booths: 'Booths',
    Exhibitors: 'Exhibitors',
    EventPartners: 'EventPartners',
    Speakers: 'Speakers',
    EventPackages: 'EventPackages',
    SpeakerPackage: 'SpeakerPackage',
    PartnerPackage: 'PartnerPackage',
    assigned_booths: 'assigned_booths',
    EventPartnerPackages: 'EventPartnerPackages'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "admin" | "users" | "organization" | "attendees" | "booths" | "exhibitors" | "eventPartners" | "speakers" | "eventPackages" | "speakerPackage" | "partnerPackage" | "assigned_booths" | "eventPartnerPackages"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      Organization: {
        payload: Prisma.$OrganizationPayload<ExtArgs>
        fields: Prisma.OrganizationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrganizationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrganizationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          findFirst: {
            args: Prisma.OrganizationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrganizationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          findMany: {
            args: Prisma.OrganizationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          create: {
            args: Prisma.OrganizationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          createMany: {
            args: Prisma.OrganizationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OrganizationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          update: {
            args: Prisma.OrganizationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          deleteMany: {
            args: Prisma.OrganizationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrganizationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrganizationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          aggregate: {
            args: Prisma.OrganizationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrganization>
          }
          groupBy: {
            args: Prisma.OrganizationGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrganizationGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrganizationCountArgs<ExtArgs>
            result: $Utils.Optional<OrganizationCountAggregateOutputType> | number
          }
        }
      }
      Attendees: {
        payload: Prisma.$AttendeesPayload<ExtArgs>
        fields: Prisma.AttendeesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttendeesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendeesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttendeesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendeesPayload>
          }
          findFirst: {
            args: Prisma.AttendeesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendeesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttendeesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendeesPayload>
          }
          findMany: {
            args: Prisma.AttendeesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendeesPayload>[]
          }
          create: {
            args: Prisma.AttendeesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendeesPayload>
          }
          createMany: {
            args: Prisma.AttendeesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AttendeesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendeesPayload>
          }
          update: {
            args: Prisma.AttendeesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendeesPayload>
          }
          deleteMany: {
            args: Prisma.AttendeesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttendeesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AttendeesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendeesPayload>
          }
          aggregate: {
            args: Prisma.AttendeesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttendees>
          }
          groupBy: {
            args: Prisma.AttendeesGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttendeesGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttendeesCountArgs<ExtArgs>
            result: $Utils.Optional<AttendeesCountAggregateOutputType> | number
          }
        }
      }
      Booths: {
        payload: Prisma.$BoothsPayload<ExtArgs>
        fields: Prisma.BoothsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BoothsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoothsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BoothsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoothsPayload>
          }
          findFirst: {
            args: Prisma.BoothsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoothsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BoothsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoothsPayload>
          }
          findMany: {
            args: Prisma.BoothsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoothsPayload>[]
          }
          create: {
            args: Prisma.BoothsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoothsPayload>
          }
          createMany: {
            args: Prisma.BoothsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BoothsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoothsPayload>
          }
          update: {
            args: Prisma.BoothsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoothsPayload>
          }
          deleteMany: {
            args: Prisma.BoothsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BoothsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BoothsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoothsPayload>
          }
          aggregate: {
            args: Prisma.BoothsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBooths>
          }
          groupBy: {
            args: Prisma.BoothsGroupByArgs<ExtArgs>
            result: $Utils.Optional<BoothsGroupByOutputType>[]
          }
          count: {
            args: Prisma.BoothsCountArgs<ExtArgs>
            result: $Utils.Optional<BoothsCountAggregateOutputType> | number
          }
        }
      }
      Exhibitors: {
        payload: Prisma.$ExhibitorsPayload<ExtArgs>
        fields: Prisma.ExhibitorsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExhibitorsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExhibitorsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExhibitorsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExhibitorsPayload>
          }
          findFirst: {
            args: Prisma.ExhibitorsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExhibitorsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExhibitorsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExhibitorsPayload>
          }
          findMany: {
            args: Prisma.ExhibitorsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExhibitorsPayload>[]
          }
          create: {
            args: Prisma.ExhibitorsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExhibitorsPayload>
          }
          createMany: {
            args: Prisma.ExhibitorsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ExhibitorsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExhibitorsPayload>
          }
          update: {
            args: Prisma.ExhibitorsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExhibitorsPayload>
          }
          deleteMany: {
            args: Prisma.ExhibitorsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExhibitorsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ExhibitorsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExhibitorsPayload>
          }
          aggregate: {
            args: Prisma.ExhibitorsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExhibitors>
          }
          groupBy: {
            args: Prisma.ExhibitorsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExhibitorsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExhibitorsCountArgs<ExtArgs>
            result: $Utils.Optional<ExhibitorsCountAggregateOutputType> | number
          }
        }
      }
      EventPartners: {
        payload: Prisma.$EventPartnersPayload<ExtArgs>
        fields: Prisma.EventPartnersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventPartnersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPartnersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventPartnersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPartnersPayload>
          }
          findFirst: {
            args: Prisma.EventPartnersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPartnersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventPartnersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPartnersPayload>
          }
          findMany: {
            args: Prisma.EventPartnersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPartnersPayload>[]
          }
          create: {
            args: Prisma.EventPartnersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPartnersPayload>
          }
          createMany: {
            args: Prisma.EventPartnersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EventPartnersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPartnersPayload>
          }
          update: {
            args: Prisma.EventPartnersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPartnersPayload>
          }
          deleteMany: {
            args: Prisma.EventPartnersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventPartnersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EventPartnersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPartnersPayload>
          }
          aggregate: {
            args: Prisma.EventPartnersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEventPartners>
          }
          groupBy: {
            args: Prisma.EventPartnersGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventPartnersGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventPartnersCountArgs<ExtArgs>
            result: $Utils.Optional<EventPartnersCountAggregateOutputType> | number
          }
        }
      }
      Speakers: {
        payload: Prisma.$SpeakersPayload<ExtArgs>
        fields: Prisma.SpeakersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SpeakersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeakersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SpeakersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeakersPayload>
          }
          findFirst: {
            args: Prisma.SpeakersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeakersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SpeakersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeakersPayload>
          }
          findMany: {
            args: Prisma.SpeakersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeakersPayload>[]
          }
          create: {
            args: Prisma.SpeakersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeakersPayload>
          }
          createMany: {
            args: Prisma.SpeakersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SpeakersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeakersPayload>
          }
          update: {
            args: Prisma.SpeakersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeakersPayload>
          }
          deleteMany: {
            args: Prisma.SpeakersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SpeakersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SpeakersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeakersPayload>
          }
          aggregate: {
            args: Prisma.SpeakersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSpeakers>
          }
          groupBy: {
            args: Prisma.SpeakersGroupByArgs<ExtArgs>
            result: $Utils.Optional<SpeakersGroupByOutputType>[]
          }
          count: {
            args: Prisma.SpeakersCountArgs<ExtArgs>
            result: $Utils.Optional<SpeakersCountAggregateOutputType> | number
          }
        }
      }
      EventPackages: {
        payload: Prisma.$EventPackagesPayload<ExtArgs>
        fields: Prisma.EventPackagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventPackagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPackagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventPackagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPackagesPayload>
          }
          findFirst: {
            args: Prisma.EventPackagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPackagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventPackagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPackagesPayload>
          }
          findMany: {
            args: Prisma.EventPackagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPackagesPayload>[]
          }
          create: {
            args: Prisma.EventPackagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPackagesPayload>
          }
          createMany: {
            args: Prisma.EventPackagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EventPackagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPackagesPayload>
          }
          update: {
            args: Prisma.EventPackagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPackagesPayload>
          }
          deleteMany: {
            args: Prisma.EventPackagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventPackagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EventPackagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPackagesPayload>
          }
          aggregate: {
            args: Prisma.EventPackagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEventPackages>
          }
          groupBy: {
            args: Prisma.EventPackagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventPackagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventPackagesCountArgs<ExtArgs>
            result: $Utils.Optional<EventPackagesCountAggregateOutputType> | number
          }
        }
      }
      SpeakerPackage: {
        payload: Prisma.$SpeakerPackagePayload<ExtArgs>
        fields: Prisma.SpeakerPackageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SpeakerPackageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeakerPackagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SpeakerPackageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeakerPackagePayload>
          }
          findFirst: {
            args: Prisma.SpeakerPackageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeakerPackagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SpeakerPackageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeakerPackagePayload>
          }
          findMany: {
            args: Prisma.SpeakerPackageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeakerPackagePayload>[]
          }
          create: {
            args: Prisma.SpeakerPackageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeakerPackagePayload>
          }
          createMany: {
            args: Prisma.SpeakerPackageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SpeakerPackageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeakerPackagePayload>
          }
          update: {
            args: Prisma.SpeakerPackageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeakerPackagePayload>
          }
          deleteMany: {
            args: Prisma.SpeakerPackageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SpeakerPackageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SpeakerPackageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeakerPackagePayload>
          }
          aggregate: {
            args: Prisma.SpeakerPackageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSpeakerPackage>
          }
          groupBy: {
            args: Prisma.SpeakerPackageGroupByArgs<ExtArgs>
            result: $Utils.Optional<SpeakerPackageGroupByOutputType>[]
          }
          count: {
            args: Prisma.SpeakerPackageCountArgs<ExtArgs>
            result: $Utils.Optional<SpeakerPackageCountAggregateOutputType> | number
          }
        }
      }
      PartnerPackage: {
        payload: Prisma.$PartnerPackagePayload<ExtArgs>
        fields: Prisma.PartnerPackageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PartnerPackageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerPackagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PartnerPackageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerPackagePayload>
          }
          findFirst: {
            args: Prisma.PartnerPackageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerPackagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PartnerPackageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerPackagePayload>
          }
          findMany: {
            args: Prisma.PartnerPackageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerPackagePayload>[]
          }
          create: {
            args: Prisma.PartnerPackageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerPackagePayload>
          }
          createMany: {
            args: Prisma.PartnerPackageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PartnerPackageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerPackagePayload>
          }
          update: {
            args: Prisma.PartnerPackageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerPackagePayload>
          }
          deleteMany: {
            args: Prisma.PartnerPackageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PartnerPackageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PartnerPackageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerPackagePayload>
          }
          aggregate: {
            args: Prisma.PartnerPackageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePartnerPackage>
          }
          groupBy: {
            args: Prisma.PartnerPackageGroupByArgs<ExtArgs>
            result: $Utils.Optional<PartnerPackageGroupByOutputType>[]
          }
          count: {
            args: Prisma.PartnerPackageCountArgs<ExtArgs>
            result: $Utils.Optional<PartnerPackageCountAggregateOutputType> | number
          }
        }
      }
      assigned_booths: {
        payload: Prisma.$assigned_boothsPayload<ExtArgs>
        fields: Prisma.assigned_boothsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.assigned_boothsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$assigned_boothsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.assigned_boothsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$assigned_boothsPayload>
          }
          findFirst: {
            args: Prisma.assigned_boothsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$assigned_boothsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.assigned_boothsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$assigned_boothsPayload>
          }
          findMany: {
            args: Prisma.assigned_boothsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$assigned_boothsPayload>[]
          }
          create: {
            args: Prisma.assigned_boothsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$assigned_boothsPayload>
          }
          createMany: {
            args: Prisma.assigned_boothsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.assigned_boothsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$assigned_boothsPayload>
          }
          update: {
            args: Prisma.assigned_boothsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$assigned_boothsPayload>
          }
          deleteMany: {
            args: Prisma.assigned_boothsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.assigned_boothsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.assigned_boothsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$assigned_boothsPayload>
          }
          aggregate: {
            args: Prisma.Assigned_boothsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAssigned_booths>
          }
          groupBy: {
            args: Prisma.assigned_boothsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Assigned_boothsGroupByOutputType>[]
          }
          count: {
            args: Prisma.assigned_boothsCountArgs<ExtArgs>
            result: $Utils.Optional<Assigned_boothsCountAggregateOutputType> | number
          }
        }
      }
      EventPartnerPackages: {
        payload: Prisma.$EventPartnerPackagesPayload<ExtArgs>
        fields: Prisma.EventPartnerPackagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventPartnerPackagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPartnerPackagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventPartnerPackagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPartnerPackagesPayload>
          }
          findFirst: {
            args: Prisma.EventPartnerPackagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPartnerPackagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventPartnerPackagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPartnerPackagesPayload>
          }
          findMany: {
            args: Prisma.EventPartnerPackagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPartnerPackagesPayload>[]
          }
          create: {
            args: Prisma.EventPartnerPackagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPartnerPackagesPayload>
          }
          createMany: {
            args: Prisma.EventPartnerPackagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EventPartnerPackagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPartnerPackagesPayload>
          }
          update: {
            args: Prisma.EventPartnerPackagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPartnerPackagesPayload>
          }
          deleteMany: {
            args: Prisma.EventPartnerPackagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventPartnerPackagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EventPartnerPackagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPartnerPackagesPayload>
          }
          aggregate: {
            args: Prisma.EventPartnerPackagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEventPartnerPackages>
          }
          groupBy: {
            args: Prisma.EventPartnerPackagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventPartnerPackagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventPartnerPackagesCountArgs<ExtArgs>
            result: $Utils.Optional<EventPartnerPackagesCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    admin?: AdminOmit
    users?: UsersOmit
    organization?: OrganizationOmit
    attendees?: AttendeesOmit
    booths?: BoothsOmit
    exhibitors?: ExhibitorsOmit
    eventPartners?: EventPartnersOmit
    speakers?: SpeakersOmit
    eventPackages?: EventPackagesOmit
    speakerPackage?: SpeakerPackageOmit
    partnerPackage?: PartnerPackageOmit
    assigned_booths?: assigned_boothsOmit
    eventPartnerPackages?: EventPartnerPackagesOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type OrganizationCountOutputType
   */

  export type OrganizationCountOutputType = {
    children: number
  }

  export type OrganizationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    children?: boolean | OrganizationCountOutputTypeCountChildrenArgs
  }

  // Custom InputTypes
  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationCountOutputType
     */
    select?: OrganizationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountChildrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationWhereInput
  }


  /**
   * Count Type BoothsCountOutputType
   */

  export type BoothsCountOutputType = {
    assigned_booths: number
  }

  export type BoothsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assigned_booths?: boolean | BoothsCountOutputTypeCountAssigned_boothsArgs
  }

  // Custom InputTypes
  /**
   * BoothsCountOutputType without action
   */
  export type BoothsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoothsCountOutputType
     */
    select?: BoothsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BoothsCountOutputType without action
   */
  export type BoothsCountOutputTypeCountAssigned_boothsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: assigned_boothsWhereInput
  }


  /**
   * Count Type ExhibitorsCountOutputType
   */

  export type ExhibitorsCountOutputType = {
    assigned_booths: number
  }

  export type ExhibitorsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assigned_booths?: boolean | ExhibitorsCountOutputTypeCountAssigned_boothsArgs
  }

  // Custom InputTypes
  /**
   * ExhibitorsCountOutputType without action
   */
  export type ExhibitorsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExhibitorsCountOutputType
     */
    select?: ExhibitorsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExhibitorsCountOutputType without action
   */
  export type ExhibitorsCountOutputTypeCountAssigned_boothsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: assigned_boothsWhereInput
  }


  /**
   * Count Type EventPartnersCountOutputType
   */

  export type EventPartnersCountOutputType = {
    EventPartnerPackages: number
  }

  export type EventPartnersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    EventPartnerPackages?: boolean | EventPartnersCountOutputTypeCountEventPartnerPackagesArgs
  }

  // Custom InputTypes
  /**
   * EventPartnersCountOutputType without action
   */
  export type EventPartnersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventPartnersCountOutputType
     */
    select?: EventPartnersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventPartnersCountOutputType without action
   */
  export type EventPartnersCountOutputTypeCountEventPartnerPackagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventPartnerPackagesWhereInput
  }


  /**
   * Count Type EventPackagesCountOutputType
   */

  export type EventPackagesCountOutputType = {
    EventPartnerPackages: number
  }

  export type EventPackagesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    EventPartnerPackages?: boolean | EventPackagesCountOutputTypeCountEventPartnerPackagesArgs
  }

  // Custom InputTypes
  /**
   * EventPackagesCountOutputType without action
   */
  export type EventPackagesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventPackagesCountOutputType
     */
    select?: EventPackagesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventPackagesCountOutputType without action
   */
  export type EventPackagesCountOutputTypeCountEventPartnerPackagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventPartnerPackagesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminAvgAggregateOutputType = {
    id: number | null
  }

  export type AdminSumAggregateOutputType = {
    id: number | null
  }

  export type AdminMinAggregateOutputType = {
    id: number | null
    fullname: string | null
    email: string | null
    username: string | null
    role: $Enums.Role | null
    profile_image: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminMaxAggregateOutputType = {
    id: number | null
    fullname: string | null
    email: string | null
    username: string | null
    role: $Enums.Role | null
    profile_image: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    fullname: number
    email: number
    username: number
    role: number
    profile_image: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdminAvgAggregateInputType = {
    id?: true
  }

  export type AdminSumAggregateInputType = {
    id?: true
  }

  export type AdminMinAggregateInputType = {
    id?: true
    fullname?: true
    email?: true
    username?: true
    role?: true
    profile_image?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    fullname?: true
    email?: true
    username?: true
    role?: true
    profile_image?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    fullname?: true
    email?: true
    username?: true
    role?: true
    profile_image?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _avg?: AdminAvgAggregateInputType
    _sum?: AdminSumAggregateInputType
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: number
    fullname: string
    email: string
    username: string
    role: $Enums.Role
    profile_image: string | null
    password: string
    createdAt: Date
    updatedAt: Date
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullname?: boolean
    email?: boolean
    username?: boolean
    role?: boolean
    profile_image?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["admin"]>



  export type AdminSelectScalar = {
    id?: boolean
    fullname?: boolean
    email?: boolean
    username?: boolean
    role?: boolean
    profile_image?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullname" | "email" | "username" | "role" | "profile_image" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["admin"]>

  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fullname: string
      email: string
      username: string
      role: $Enums.Role
      profile_image: string | null
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Admin model
   */
  interface AdminFieldRefs {
    readonly id: FieldRef<"Admin", 'Int'>
    readonly fullname: FieldRef<"Admin", 'String'>
    readonly email: FieldRef<"Admin", 'String'>
    readonly username: FieldRef<"Admin", 'String'>
    readonly role: FieldRef<"Admin", 'Role'>
    readonly profile_image: FieldRef<"Admin", 'String'>
    readonly password: FieldRef<"Admin", 'String'>
    readonly createdAt: FieldRef<"Admin", 'DateTime'>
    readonly updatedAt: FieldRef<"Admin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to delete.
     */
    limit?: number
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
  }


  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    organization: string | null
    organization_short_code: string | null
    contact_person: string | null
    contact_person_email: string | null
    username: string | null
    profile_image: string | null
    role: $Enums.Role | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    organization: string | null
    organization_short_code: string | null
    contact_person: string | null
    contact_person_email: string | null
    username: string | null
    profile_image: string | null
    role: $Enums.Role | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    organization: number
    organization_short_code: number
    contact_person: number
    contact_person_email: number
    username: number
    profile_image: number
    role: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    organization?: true
    organization_short_code?: true
    contact_person?: true
    contact_person_email?: true
    username?: true
    profile_image?: true
    role?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    organization?: true
    organization_short_code?: true
    contact_person?: true
    contact_person_email?: true
    username?: true
    profile_image?: true
    role?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    organization?: true
    organization_short_code?: true
    contact_person?: true
    contact_person_email?: true
    username?: true
    profile_image?: true
    role?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    organization: string
    organization_short_code: string
    contact_person: string
    contact_person_email: string
    username: string
    profile_image: string | null
    role: $Enums.Role
    password: string
    createdAt: Date
    updatedAt: Date
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organization?: boolean
    organization_short_code?: boolean
    contact_person?: boolean
    contact_person_email?: boolean
    username?: boolean
    profile_image?: boolean
    role?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["users"]>



  export type UsersSelectScalar = {
    id?: boolean
    organization?: boolean
    organization_short_code?: boolean
    contact_person?: boolean
    contact_person_email?: boolean
    username?: boolean
    profile_image?: boolean
    role?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "organization" | "organization_short_code" | "contact_person" | "contact_person_email" | "username" | "profile_image" | "role" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["users"]>

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      organization: string
      organization_short_code: string
      contact_person: string
      contact_person_email: string
      username: string
      profile_image: string | null
      role: $Enums.Role
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly id: FieldRef<"Users", 'Int'>
    readonly organization: FieldRef<"Users", 'String'>
    readonly organization_short_code: FieldRef<"Users", 'String'>
    readonly contact_person: FieldRef<"Users", 'String'>
    readonly contact_person_email: FieldRef<"Users", 'String'>
    readonly username: FieldRef<"Users", 'String'>
    readonly profile_image: FieldRef<"Users", 'String'>
    readonly role: FieldRef<"Users", 'Role'>
    readonly password: FieldRef<"Users", 'String'>
    readonly createdAt: FieldRef<"Users", 'DateTime'>
    readonly updatedAt: FieldRef<"Users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
  }


  /**
   * Model Organization
   */

  export type AggregateOrganization = {
    _count: OrganizationCountAggregateOutputType | null
    _avg: OrganizationAvgAggregateOutputType | null
    _sum: OrganizationSumAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  export type OrganizationAvgAggregateOutputType = {
    id: number | null
    parentId: number | null
  }

  export type OrganizationSumAggregateOutputType = {
    id: number | null
    parentId: number | null
  }

  export type OrganizationMinAggregateOutputType = {
    id: number | null
    name: string | null
    abbreviation: string | null
    type: $Enums.OrganizationType | null
    parentId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrganizationMaxAggregateOutputType = {
    id: number | null
    name: string | null
    abbreviation: string | null
    type: $Enums.OrganizationType | null
    parentId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrganizationCountAggregateOutputType = {
    id: number
    name: number
    abbreviation: number
    type: number
    parentId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrganizationAvgAggregateInputType = {
    id?: true
    parentId?: true
  }

  export type OrganizationSumAggregateInputType = {
    id?: true
    parentId?: true
  }

  export type OrganizationMinAggregateInputType = {
    id?: true
    name?: true
    abbreviation?: true
    type?: true
    parentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrganizationMaxAggregateInputType = {
    id?: true
    name?: true
    abbreviation?: true
    type?: true
    parentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrganizationCountAggregateInputType = {
    id?: true
    name?: true
    abbreviation?: true
    type?: true
    parentId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrganizationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organization to aggregate.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Organizations
    **/
    _count?: true | OrganizationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrganizationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrganizationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganizationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganizationMaxAggregateInputType
  }

  export type GetOrganizationAggregateType<T extends OrganizationAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganization[P]>
      : GetScalarType<T[P], AggregateOrganization[P]>
  }




  export type OrganizationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationWhereInput
    orderBy?: OrganizationOrderByWithAggregationInput | OrganizationOrderByWithAggregationInput[]
    by: OrganizationScalarFieldEnum[] | OrganizationScalarFieldEnum
    having?: OrganizationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganizationCountAggregateInputType | true
    _avg?: OrganizationAvgAggregateInputType
    _sum?: OrganizationSumAggregateInputType
    _min?: OrganizationMinAggregateInputType
    _max?: OrganizationMaxAggregateInputType
  }

  export type OrganizationGroupByOutputType = {
    id: number
    name: string
    abbreviation: string | null
    type: $Enums.OrganizationType
    parentId: number | null
    createdAt: Date
    updatedAt: Date
    _count: OrganizationCountAggregateOutputType | null
    _avg: OrganizationAvgAggregateOutputType | null
    _sum: OrganizationSumAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  type GetOrganizationGroupByPayload<T extends OrganizationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganizationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
            : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
        }
      >
    >


  export type OrganizationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    abbreviation?: boolean
    type?: boolean
    parentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parent?: boolean | Organization$parentArgs<ExtArgs>
    children?: boolean | Organization$childrenArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organization"]>



  export type OrganizationSelectScalar = {
    id?: boolean
    name?: boolean
    abbreviation?: boolean
    type?: boolean
    parentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrganizationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "abbreviation" | "type" | "parentId" | "createdAt" | "updatedAt", ExtArgs["result"]["organization"]>
  export type OrganizationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | Organization$parentArgs<ExtArgs>
    children?: boolean | Organization$childrenArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $OrganizationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Organization"
    objects: {
      parent: Prisma.$OrganizationPayload<ExtArgs> | null
      children: Prisma.$OrganizationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      abbreviation: string | null
      type: $Enums.OrganizationType
      parentId: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["organization"]>
    composites: {}
  }

  type OrganizationGetPayload<S extends boolean | null | undefined | OrganizationDefaultArgs> = $Result.GetResult<Prisma.$OrganizationPayload, S>

  type OrganizationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrganizationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrganizationCountAggregateInputType | true
    }

  export interface OrganizationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Organization'], meta: { name: 'Organization' } }
    /**
     * Find zero or one Organization that matches the filter.
     * @param {OrganizationFindUniqueArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrganizationFindUniqueArgs>(args: SelectSubset<T, OrganizationFindUniqueArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Organization that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrganizationFindUniqueOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrganizationFindUniqueOrThrowArgs>(args: SelectSubset<T, OrganizationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrganizationFindFirstArgs>(args?: SelectSubset<T, OrganizationFindFirstArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organization that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrganizationFindFirstOrThrowArgs>(args?: SelectSubset<T, OrganizationFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Organizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organizations
     * const organizations = await prisma.organization.findMany()
     * 
     * // Get first 10 Organizations
     * const organizations = await prisma.organization.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const organizationWithIdOnly = await prisma.organization.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrganizationFindManyArgs>(args?: SelectSubset<T, OrganizationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Organization.
     * @param {OrganizationCreateArgs} args - Arguments to create a Organization.
     * @example
     * // Create one Organization
     * const Organization = await prisma.organization.create({
     *   data: {
     *     // ... data to create a Organization
     *   }
     * })
     * 
     */
    create<T extends OrganizationCreateArgs>(args: SelectSubset<T, OrganizationCreateArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Organizations.
     * @param {OrganizationCreateManyArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrganizationCreateManyArgs>(args?: SelectSubset<T, OrganizationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Organization.
     * @param {OrganizationDeleteArgs} args - Arguments to delete one Organization.
     * @example
     * // Delete one Organization
     * const Organization = await prisma.organization.delete({
     *   where: {
     *     // ... filter to delete one Organization
     *   }
     * })
     * 
     */
    delete<T extends OrganizationDeleteArgs>(args: SelectSubset<T, OrganizationDeleteArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Organization.
     * @param {OrganizationUpdateArgs} args - Arguments to update one Organization.
     * @example
     * // Update one Organization
     * const organization = await prisma.organization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrganizationUpdateArgs>(args: SelectSubset<T, OrganizationUpdateArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Organizations.
     * @param {OrganizationDeleteManyArgs} args - Arguments to filter Organizations to delete.
     * @example
     * // Delete a few Organizations
     * const { count } = await prisma.organization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrganizationDeleteManyArgs>(args?: SelectSubset<T, OrganizationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrganizationUpdateManyArgs>(args: SelectSubset<T, OrganizationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Organization.
     * @param {OrganizationUpsertArgs} args - Arguments to update or create a Organization.
     * @example
     * // Update or create a Organization
     * const organization = await prisma.organization.upsert({
     *   create: {
     *     // ... data to create a Organization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organization we want to update
     *   }
     * })
     */
    upsert<T extends OrganizationUpsertArgs>(args: SelectSubset<T, OrganizationUpsertArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationCountArgs} args - Arguments to filter Organizations to count.
     * @example
     * // Count the number of Organizations
     * const count = await prisma.organization.count({
     *   where: {
     *     // ... the filter for the Organizations we want to count
     *   }
     * })
    **/
    count<T extends OrganizationCountArgs>(
      args?: Subset<T, OrganizationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrganizationAggregateArgs>(args: Subset<T, OrganizationAggregateArgs>): Prisma.PrismaPromise<GetOrganizationAggregateType<T>>

    /**
     * Group by Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrganizationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrganizationGroupByArgs['orderBy'] }
        : { orderBy?: OrganizationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrganizationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Organization model
   */
  readonly fields: OrganizationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Organization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrganizationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parent<T extends Organization$parentArgs<ExtArgs> = {}>(args?: Subset<T, Organization$parentArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    children<T extends Organization$childrenArgs<ExtArgs> = {}>(args?: Subset<T, Organization$childrenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Organization model
   */
  interface OrganizationFieldRefs {
    readonly id: FieldRef<"Organization", 'Int'>
    readonly name: FieldRef<"Organization", 'String'>
    readonly abbreviation: FieldRef<"Organization", 'String'>
    readonly type: FieldRef<"Organization", 'OrganizationType'>
    readonly parentId: FieldRef<"Organization", 'Int'>
    readonly createdAt: FieldRef<"Organization", 'DateTime'>
    readonly updatedAt: FieldRef<"Organization", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Organization findUnique
   */
  export type OrganizationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization findUniqueOrThrow
   */
  export type OrganizationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization findFirst
   */
  export type OrganizationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization findFirstOrThrow
   */
  export type OrganizationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization findMany
   */
  export type OrganizationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organizations to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization create
   */
  export type OrganizationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The data needed to create a Organization.
     */
    data: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
  }

  /**
   * Organization createMany
   */
  export type OrganizationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Organizations.
     */
    data: OrganizationCreateManyInput | OrganizationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Organization update
   */
  export type OrganizationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The data needed to update a Organization.
     */
    data: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
    /**
     * Choose, which Organization to update.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization updateMany
   */
  export type OrganizationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Organizations.
     */
    data: XOR<OrganizationUpdateManyMutationInput, OrganizationUncheckedUpdateManyInput>
    /**
     * Filter which Organizations to update
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to update.
     */
    limit?: number
  }

  /**
   * Organization upsert
   */
  export type OrganizationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The filter to search for the Organization to update in case it exists.
     */
    where: OrganizationWhereUniqueInput
    /**
     * In case the Organization found by the `where` argument doesn't exist, create a new Organization with this data.
     */
    create: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
    /**
     * In case the Organization was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
  }

  /**
   * Organization delete
   */
  export type OrganizationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter which Organization to delete.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization deleteMany
   */
  export type OrganizationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organizations to delete
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to delete.
     */
    limit?: number
  }

  /**
   * Organization.parent
   */
  export type Organization$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    where?: OrganizationWhereInput
  }

  /**
   * Organization.children
   */
  export type Organization$childrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    where?: OrganizationWhereInput
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    cursor?: OrganizationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization without action
   */
  export type OrganizationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
  }


  /**
   * Model Attendees
   */

  export type AggregateAttendees = {
    _count: AttendeesCountAggregateOutputType | null
    _avg: AttendeesAvgAggregateOutputType | null
    _sum: AttendeesSumAggregateOutputType | null
    _min: AttendeesMinAggregateOutputType | null
    _max: AttendeesMaxAggregateOutputType | null
  }

  export type AttendeesAvgAggregateOutputType = {
    id: number | null
    created_by_id: number | null
  }

  export type AttendeesSumAggregateOutputType = {
    id: number | null
    created_by_id: number | null
  }

  export type AttendeesMinAggregateOutputType = {
    id: number | null
    prefix: string | null
    fullname: string | null
    email: string | null
    phone_number: string | null
    nin: string | null
    nin_verified: boolean | null
    position: string | null
    grade: string | null
    organization: string | null
    department: string | null
    department_agency: string | null
    staff_id: string | null
    office_location: string | null
    remark: string | null
    status: $Enums.Status | null
    role: $Enums.Role | null
    password: string | null
    temporal_password: boolean | null
    registeredAt: Date | null
    created_by_id: number | null
    created_by_type: $Enums.CreatorType | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AttendeesMaxAggregateOutputType = {
    id: number | null
    prefix: string | null
    fullname: string | null
    email: string | null
    phone_number: string | null
    nin: string | null
    nin_verified: boolean | null
    position: string | null
    grade: string | null
    organization: string | null
    department: string | null
    department_agency: string | null
    staff_id: string | null
    office_location: string | null
    remark: string | null
    status: $Enums.Status | null
    role: $Enums.Role | null
    password: string | null
    temporal_password: boolean | null
    registeredAt: Date | null
    created_by_id: number | null
    created_by_type: $Enums.CreatorType | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AttendeesCountAggregateOutputType = {
    id: number
    prefix: number
    fullname: number
    email: number
    phone_number: number
    nin: number
    nin_verified: number
    position: number
    grade: number
    organization: number
    department: number
    department_agency: number
    staff_id: number
    office_location: number
    remark: number
    status: number
    role: number
    password: number
    temporal_password: number
    registeredAt: number
    created_by_id: number
    created_by_type: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AttendeesAvgAggregateInputType = {
    id?: true
    created_by_id?: true
  }

  export type AttendeesSumAggregateInputType = {
    id?: true
    created_by_id?: true
  }

  export type AttendeesMinAggregateInputType = {
    id?: true
    prefix?: true
    fullname?: true
    email?: true
    phone_number?: true
    nin?: true
    nin_verified?: true
    position?: true
    grade?: true
    organization?: true
    department?: true
    department_agency?: true
    staff_id?: true
    office_location?: true
    remark?: true
    status?: true
    role?: true
    password?: true
    temporal_password?: true
    registeredAt?: true
    created_by_id?: true
    created_by_type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AttendeesMaxAggregateInputType = {
    id?: true
    prefix?: true
    fullname?: true
    email?: true
    phone_number?: true
    nin?: true
    nin_verified?: true
    position?: true
    grade?: true
    organization?: true
    department?: true
    department_agency?: true
    staff_id?: true
    office_location?: true
    remark?: true
    status?: true
    role?: true
    password?: true
    temporal_password?: true
    registeredAt?: true
    created_by_id?: true
    created_by_type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AttendeesCountAggregateInputType = {
    id?: true
    prefix?: true
    fullname?: true
    email?: true
    phone_number?: true
    nin?: true
    nin_verified?: true
    position?: true
    grade?: true
    organization?: true
    department?: true
    department_agency?: true
    staff_id?: true
    office_location?: true
    remark?: true
    status?: true
    role?: true
    password?: true
    temporal_password?: true
    registeredAt?: true
    created_by_id?: true
    created_by_type?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AttendeesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attendees to aggregate.
     */
    where?: AttendeesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendees to fetch.
     */
    orderBy?: AttendeesOrderByWithRelationInput | AttendeesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttendeesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Attendees
    **/
    _count?: true | AttendeesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AttendeesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AttendeesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttendeesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttendeesMaxAggregateInputType
  }

  export type GetAttendeesAggregateType<T extends AttendeesAggregateArgs> = {
        [P in keyof T & keyof AggregateAttendees]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttendees[P]>
      : GetScalarType<T[P], AggregateAttendees[P]>
  }




  export type AttendeesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendeesWhereInput
    orderBy?: AttendeesOrderByWithAggregationInput | AttendeesOrderByWithAggregationInput[]
    by: AttendeesScalarFieldEnum[] | AttendeesScalarFieldEnum
    having?: AttendeesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttendeesCountAggregateInputType | true
    _avg?: AttendeesAvgAggregateInputType
    _sum?: AttendeesSumAggregateInputType
    _min?: AttendeesMinAggregateInputType
    _max?: AttendeesMaxAggregateInputType
  }

  export type AttendeesGroupByOutputType = {
    id: number
    prefix: string | null
    fullname: string
    email: string
    phone_number: string
    nin: string
    nin_verified: boolean
    position: string
    grade: string
    organization: string
    department: string
    department_agency: string
    staff_id: string | null
    office_location: string | null
    remark: string | null
    status: $Enums.Status
    role: $Enums.Role
    password: string
    temporal_password: boolean
    registeredAt: Date
    created_by_id: number | null
    created_by_type: $Enums.CreatorType | null
    createdAt: Date
    updatedAt: Date
    _count: AttendeesCountAggregateOutputType | null
    _avg: AttendeesAvgAggregateOutputType | null
    _sum: AttendeesSumAggregateOutputType | null
    _min: AttendeesMinAggregateOutputType | null
    _max: AttendeesMaxAggregateOutputType | null
  }

  type GetAttendeesGroupByPayload<T extends AttendeesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttendeesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttendeesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttendeesGroupByOutputType[P]>
            : GetScalarType<T[P], AttendeesGroupByOutputType[P]>
        }
      >
    >


  export type AttendeesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    prefix?: boolean
    fullname?: boolean
    email?: boolean
    phone_number?: boolean
    nin?: boolean
    nin_verified?: boolean
    position?: boolean
    grade?: boolean
    organization?: boolean
    department?: boolean
    department_agency?: boolean
    staff_id?: boolean
    office_location?: boolean
    remark?: boolean
    status?: boolean
    role?: boolean
    password?: boolean
    temporal_password?: boolean
    registeredAt?: boolean
    created_by_id?: boolean
    created_by_type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["attendees"]>



  export type AttendeesSelectScalar = {
    id?: boolean
    prefix?: boolean
    fullname?: boolean
    email?: boolean
    phone_number?: boolean
    nin?: boolean
    nin_verified?: boolean
    position?: boolean
    grade?: boolean
    organization?: boolean
    department?: boolean
    department_agency?: boolean
    staff_id?: boolean
    office_location?: boolean
    remark?: boolean
    status?: boolean
    role?: boolean
    password?: boolean
    temporal_password?: boolean
    registeredAt?: boolean
    created_by_id?: boolean
    created_by_type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AttendeesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "prefix" | "fullname" | "email" | "phone_number" | "nin" | "nin_verified" | "position" | "grade" | "organization" | "department" | "department_agency" | "staff_id" | "office_location" | "remark" | "status" | "role" | "password" | "temporal_password" | "registeredAt" | "created_by_id" | "created_by_type" | "createdAt" | "updatedAt", ExtArgs["result"]["attendees"]>

  export type $AttendeesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Attendees"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      prefix: string | null
      fullname: string
      email: string
      phone_number: string
      nin: string
      nin_verified: boolean
      position: string
      grade: string
      organization: string
      department: string
      department_agency: string
      staff_id: string | null
      office_location: string | null
      remark: string | null
      status: $Enums.Status
      role: $Enums.Role
      password: string
      temporal_password: boolean
      registeredAt: Date
      created_by_id: number | null
      created_by_type: $Enums.CreatorType | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["attendees"]>
    composites: {}
  }

  type AttendeesGetPayload<S extends boolean | null | undefined | AttendeesDefaultArgs> = $Result.GetResult<Prisma.$AttendeesPayload, S>

  type AttendeesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AttendeesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttendeesCountAggregateInputType | true
    }

  export interface AttendeesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Attendees'], meta: { name: 'Attendees' } }
    /**
     * Find zero or one Attendees that matches the filter.
     * @param {AttendeesFindUniqueArgs} args - Arguments to find a Attendees
     * @example
     * // Get one Attendees
     * const attendees = await prisma.attendees.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttendeesFindUniqueArgs>(args: SelectSubset<T, AttendeesFindUniqueArgs<ExtArgs>>): Prisma__AttendeesClient<$Result.GetResult<Prisma.$AttendeesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Attendees that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AttendeesFindUniqueOrThrowArgs} args - Arguments to find a Attendees
     * @example
     * // Get one Attendees
     * const attendees = await prisma.attendees.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttendeesFindUniqueOrThrowArgs>(args: SelectSubset<T, AttendeesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttendeesClient<$Result.GetResult<Prisma.$AttendeesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attendees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendeesFindFirstArgs} args - Arguments to find a Attendees
     * @example
     * // Get one Attendees
     * const attendees = await prisma.attendees.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttendeesFindFirstArgs>(args?: SelectSubset<T, AttendeesFindFirstArgs<ExtArgs>>): Prisma__AttendeesClient<$Result.GetResult<Prisma.$AttendeesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attendees that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendeesFindFirstOrThrowArgs} args - Arguments to find a Attendees
     * @example
     * // Get one Attendees
     * const attendees = await prisma.attendees.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttendeesFindFirstOrThrowArgs>(args?: SelectSubset<T, AttendeesFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttendeesClient<$Result.GetResult<Prisma.$AttendeesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Attendees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendeesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attendees
     * const attendees = await prisma.attendees.findMany()
     * 
     * // Get first 10 Attendees
     * const attendees = await prisma.attendees.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attendeesWithIdOnly = await prisma.attendees.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AttendeesFindManyArgs>(args?: SelectSubset<T, AttendeesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendeesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Attendees.
     * @param {AttendeesCreateArgs} args - Arguments to create a Attendees.
     * @example
     * // Create one Attendees
     * const Attendees = await prisma.attendees.create({
     *   data: {
     *     // ... data to create a Attendees
     *   }
     * })
     * 
     */
    create<T extends AttendeesCreateArgs>(args: SelectSubset<T, AttendeesCreateArgs<ExtArgs>>): Prisma__AttendeesClient<$Result.GetResult<Prisma.$AttendeesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Attendees.
     * @param {AttendeesCreateManyArgs} args - Arguments to create many Attendees.
     * @example
     * // Create many Attendees
     * const attendees = await prisma.attendees.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttendeesCreateManyArgs>(args?: SelectSubset<T, AttendeesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Attendees.
     * @param {AttendeesDeleteArgs} args - Arguments to delete one Attendees.
     * @example
     * // Delete one Attendees
     * const Attendees = await prisma.attendees.delete({
     *   where: {
     *     // ... filter to delete one Attendees
     *   }
     * })
     * 
     */
    delete<T extends AttendeesDeleteArgs>(args: SelectSubset<T, AttendeesDeleteArgs<ExtArgs>>): Prisma__AttendeesClient<$Result.GetResult<Prisma.$AttendeesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Attendees.
     * @param {AttendeesUpdateArgs} args - Arguments to update one Attendees.
     * @example
     * // Update one Attendees
     * const attendees = await prisma.attendees.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttendeesUpdateArgs>(args: SelectSubset<T, AttendeesUpdateArgs<ExtArgs>>): Prisma__AttendeesClient<$Result.GetResult<Prisma.$AttendeesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Attendees.
     * @param {AttendeesDeleteManyArgs} args - Arguments to filter Attendees to delete.
     * @example
     * // Delete a few Attendees
     * const { count } = await prisma.attendees.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttendeesDeleteManyArgs>(args?: SelectSubset<T, AttendeesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attendees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendeesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attendees
     * const attendees = await prisma.attendees.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttendeesUpdateManyArgs>(args: SelectSubset<T, AttendeesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Attendees.
     * @param {AttendeesUpsertArgs} args - Arguments to update or create a Attendees.
     * @example
     * // Update or create a Attendees
     * const attendees = await prisma.attendees.upsert({
     *   create: {
     *     // ... data to create a Attendees
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attendees we want to update
     *   }
     * })
     */
    upsert<T extends AttendeesUpsertArgs>(args: SelectSubset<T, AttendeesUpsertArgs<ExtArgs>>): Prisma__AttendeesClient<$Result.GetResult<Prisma.$AttendeesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Attendees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendeesCountArgs} args - Arguments to filter Attendees to count.
     * @example
     * // Count the number of Attendees
     * const count = await prisma.attendees.count({
     *   where: {
     *     // ... the filter for the Attendees we want to count
     *   }
     * })
    **/
    count<T extends AttendeesCountArgs>(
      args?: Subset<T, AttendeesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttendeesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Attendees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendeesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AttendeesAggregateArgs>(args: Subset<T, AttendeesAggregateArgs>): Prisma.PrismaPromise<GetAttendeesAggregateType<T>>

    /**
     * Group by Attendees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendeesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AttendeesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttendeesGroupByArgs['orderBy'] }
        : { orderBy?: AttendeesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AttendeesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttendeesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Attendees model
   */
  readonly fields: AttendeesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Attendees.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttendeesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Attendees model
   */
  interface AttendeesFieldRefs {
    readonly id: FieldRef<"Attendees", 'Int'>
    readonly prefix: FieldRef<"Attendees", 'String'>
    readonly fullname: FieldRef<"Attendees", 'String'>
    readonly email: FieldRef<"Attendees", 'String'>
    readonly phone_number: FieldRef<"Attendees", 'String'>
    readonly nin: FieldRef<"Attendees", 'String'>
    readonly nin_verified: FieldRef<"Attendees", 'Boolean'>
    readonly position: FieldRef<"Attendees", 'String'>
    readonly grade: FieldRef<"Attendees", 'String'>
    readonly organization: FieldRef<"Attendees", 'String'>
    readonly department: FieldRef<"Attendees", 'String'>
    readonly department_agency: FieldRef<"Attendees", 'String'>
    readonly staff_id: FieldRef<"Attendees", 'String'>
    readonly office_location: FieldRef<"Attendees", 'String'>
    readonly remark: FieldRef<"Attendees", 'String'>
    readonly status: FieldRef<"Attendees", 'Status'>
    readonly role: FieldRef<"Attendees", 'Role'>
    readonly password: FieldRef<"Attendees", 'String'>
    readonly temporal_password: FieldRef<"Attendees", 'Boolean'>
    readonly registeredAt: FieldRef<"Attendees", 'DateTime'>
    readonly created_by_id: FieldRef<"Attendees", 'Int'>
    readonly created_by_type: FieldRef<"Attendees", 'CreatorType'>
    readonly createdAt: FieldRef<"Attendees", 'DateTime'>
    readonly updatedAt: FieldRef<"Attendees", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Attendees findUnique
   */
  export type AttendeesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendees
     */
    select?: AttendeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendees
     */
    omit?: AttendeesOmit<ExtArgs> | null
    /**
     * Filter, which Attendees to fetch.
     */
    where: AttendeesWhereUniqueInput
  }

  /**
   * Attendees findUniqueOrThrow
   */
  export type AttendeesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendees
     */
    select?: AttendeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendees
     */
    omit?: AttendeesOmit<ExtArgs> | null
    /**
     * Filter, which Attendees to fetch.
     */
    where: AttendeesWhereUniqueInput
  }

  /**
   * Attendees findFirst
   */
  export type AttendeesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendees
     */
    select?: AttendeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendees
     */
    omit?: AttendeesOmit<ExtArgs> | null
    /**
     * Filter, which Attendees to fetch.
     */
    where?: AttendeesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendees to fetch.
     */
    orderBy?: AttendeesOrderByWithRelationInput | AttendeesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attendees.
     */
    cursor?: AttendeesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attendees.
     */
    distinct?: AttendeesScalarFieldEnum | AttendeesScalarFieldEnum[]
  }

  /**
   * Attendees findFirstOrThrow
   */
  export type AttendeesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendees
     */
    select?: AttendeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendees
     */
    omit?: AttendeesOmit<ExtArgs> | null
    /**
     * Filter, which Attendees to fetch.
     */
    where?: AttendeesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendees to fetch.
     */
    orderBy?: AttendeesOrderByWithRelationInput | AttendeesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attendees.
     */
    cursor?: AttendeesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attendees.
     */
    distinct?: AttendeesScalarFieldEnum | AttendeesScalarFieldEnum[]
  }

  /**
   * Attendees findMany
   */
  export type AttendeesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendees
     */
    select?: AttendeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendees
     */
    omit?: AttendeesOmit<ExtArgs> | null
    /**
     * Filter, which Attendees to fetch.
     */
    where?: AttendeesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendees to fetch.
     */
    orderBy?: AttendeesOrderByWithRelationInput | AttendeesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Attendees.
     */
    cursor?: AttendeesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendees.
     */
    skip?: number
    distinct?: AttendeesScalarFieldEnum | AttendeesScalarFieldEnum[]
  }

  /**
   * Attendees create
   */
  export type AttendeesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendees
     */
    select?: AttendeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendees
     */
    omit?: AttendeesOmit<ExtArgs> | null
    /**
     * The data needed to create a Attendees.
     */
    data: XOR<AttendeesCreateInput, AttendeesUncheckedCreateInput>
  }

  /**
   * Attendees createMany
   */
  export type AttendeesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Attendees.
     */
    data: AttendeesCreateManyInput | AttendeesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Attendees update
   */
  export type AttendeesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendees
     */
    select?: AttendeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendees
     */
    omit?: AttendeesOmit<ExtArgs> | null
    /**
     * The data needed to update a Attendees.
     */
    data: XOR<AttendeesUpdateInput, AttendeesUncheckedUpdateInput>
    /**
     * Choose, which Attendees to update.
     */
    where: AttendeesWhereUniqueInput
  }

  /**
   * Attendees updateMany
   */
  export type AttendeesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Attendees.
     */
    data: XOR<AttendeesUpdateManyMutationInput, AttendeesUncheckedUpdateManyInput>
    /**
     * Filter which Attendees to update
     */
    where?: AttendeesWhereInput
    /**
     * Limit how many Attendees to update.
     */
    limit?: number
  }

  /**
   * Attendees upsert
   */
  export type AttendeesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendees
     */
    select?: AttendeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendees
     */
    omit?: AttendeesOmit<ExtArgs> | null
    /**
     * The filter to search for the Attendees to update in case it exists.
     */
    where: AttendeesWhereUniqueInput
    /**
     * In case the Attendees found by the `where` argument doesn't exist, create a new Attendees with this data.
     */
    create: XOR<AttendeesCreateInput, AttendeesUncheckedCreateInput>
    /**
     * In case the Attendees was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttendeesUpdateInput, AttendeesUncheckedUpdateInput>
  }

  /**
   * Attendees delete
   */
  export type AttendeesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendees
     */
    select?: AttendeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendees
     */
    omit?: AttendeesOmit<ExtArgs> | null
    /**
     * Filter which Attendees to delete.
     */
    where: AttendeesWhereUniqueInput
  }

  /**
   * Attendees deleteMany
   */
  export type AttendeesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attendees to delete
     */
    where?: AttendeesWhereInput
    /**
     * Limit how many Attendees to delete.
     */
    limit?: number
  }

  /**
   * Attendees without action
   */
  export type AttendeesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendees
     */
    select?: AttendeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendees
     */
    omit?: AttendeesOmit<ExtArgs> | null
  }


  /**
   * Model Booths
   */

  export type AggregateBooths = {
    _count: BoothsCountAggregateOutputType | null
    _avg: BoothsAvgAggregateOutputType | null
    _sum: BoothsSumAggregateOutputType | null
    _min: BoothsMinAggregateOutputType | null
    _max: BoothsMaxAggregateOutputType | null
  }

  export type BoothsAvgAggregateOutputType = {
    id: number | null
    price: number | null
  }

  export type BoothsSumAggregateOutputType = {
    id: number | null
    price: number | null
  }

  export type BoothsMinAggregateOutputType = {
    id: number | null
    booth_number: string | null
    location: string | null
    price: number | null
    booth_size: string | null
    status: $Enums.Status | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BoothsMaxAggregateOutputType = {
    id: number | null
    booth_number: string | null
    location: string | null
    price: number | null
    booth_size: string | null
    status: $Enums.Status | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BoothsCountAggregateOutputType = {
    id: number
    booth_number: number
    location: number
    price: number
    booth_size: number
    features: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BoothsAvgAggregateInputType = {
    id?: true
    price?: true
  }

  export type BoothsSumAggregateInputType = {
    id?: true
    price?: true
  }

  export type BoothsMinAggregateInputType = {
    id?: true
    booth_number?: true
    location?: true
    price?: true
    booth_size?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BoothsMaxAggregateInputType = {
    id?: true
    booth_number?: true
    location?: true
    price?: true
    booth_size?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BoothsCountAggregateInputType = {
    id?: true
    booth_number?: true
    location?: true
    price?: true
    booth_size?: true
    features?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BoothsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Booths to aggregate.
     */
    where?: BoothsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Booths to fetch.
     */
    orderBy?: BoothsOrderByWithRelationInput | BoothsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BoothsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Booths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Booths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Booths
    **/
    _count?: true | BoothsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BoothsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BoothsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BoothsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BoothsMaxAggregateInputType
  }

  export type GetBoothsAggregateType<T extends BoothsAggregateArgs> = {
        [P in keyof T & keyof AggregateBooths]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooths[P]>
      : GetScalarType<T[P], AggregateBooths[P]>
  }




  export type BoothsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BoothsWhereInput
    orderBy?: BoothsOrderByWithAggregationInput | BoothsOrderByWithAggregationInput[]
    by: BoothsScalarFieldEnum[] | BoothsScalarFieldEnum
    having?: BoothsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BoothsCountAggregateInputType | true
    _avg?: BoothsAvgAggregateInputType
    _sum?: BoothsSumAggregateInputType
    _min?: BoothsMinAggregateInputType
    _max?: BoothsMaxAggregateInputType
  }

  export type BoothsGroupByOutputType = {
    id: number
    booth_number: string
    location: string
    price: number
    booth_size: string
    features: JsonValue
    status: $Enums.Status
    createdAt: Date
    updatedAt: Date
    _count: BoothsCountAggregateOutputType | null
    _avg: BoothsAvgAggregateOutputType | null
    _sum: BoothsSumAggregateOutputType | null
    _min: BoothsMinAggregateOutputType | null
    _max: BoothsMaxAggregateOutputType | null
  }

  type GetBoothsGroupByPayload<T extends BoothsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BoothsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BoothsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BoothsGroupByOutputType[P]>
            : GetScalarType<T[P], BoothsGroupByOutputType[P]>
        }
      >
    >


  export type BoothsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    booth_number?: boolean
    location?: boolean
    price?: boolean
    booth_size?: boolean
    features?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    assigned_booths?: boolean | Booths$assigned_boothsArgs<ExtArgs>
    _count?: boolean | BoothsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booths"]>



  export type BoothsSelectScalar = {
    id?: boolean
    booth_number?: boolean
    location?: boolean
    price?: boolean
    booth_size?: boolean
    features?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BoothsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "booth_number" | "location" | "price" | "booth_size" | "features" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["booths"]>
  export type BoothsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assigned_booths?: boolean | Booths$assigned_boothsArgs<ExtArgs>
    _count?: boolean | BoothsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $BoothsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Booths"
    objects: {
      assigned_booths: Prisma.$assigned_boothsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      booth_number: string
      location: string
      price: number
      booth_size: string
      features: Prisma.JsonValue
      status: $Enums.Status
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["booths"]>
    composites: {}
  }

  type BoothsGetPayload<S extends boolean | null | undefined | BoothsDefaultArgs> = $Result.GetResult<Prisma.$BoothsPayload, S>

  type BoothsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BoothsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BoothsCountAggregateInputType | true
    }

  export interface BoothsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Booths'], meta: { name: 'Booths' } }
    /**
     * Find zero or one Booths that matches the filter.
     * @param {BoothsFindUniqueArgs} args - Arguments to find a Booths
     * @example
     * // Get one Booths
     * const booths = await prisma.booths.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BoothsFindUniqueArgs>(args: SelectSubset<T, BoothsFindUniqueArgs<ExtArgs>>): Prisma__BoothsClient<$Result.GetResult<Prisma.$BoothsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Booths that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BoothsFindUniqueOrThrowArgs} args - Arguments to find a Booths
     * @example
     * // Get one Booths
     * const booths = await prisma.booths.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BoothsFindUniqueOrThrowArgs>(args: SelectSubset<T, BoothsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BoothsClient<$Result.GetResult<Prisma.$BoothsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booths that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoothsFindFirstArgs} args - Arguments to find a Booths
     * @example
     * // Get one Booths
     * const booths = await prisma.booths.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BoothsFindFirstArgs>(args?: SelectSubset<T, BoothsFindFirstArgs<ExtArgs>>): Prisma__BoothsClient<$Result.GetResult<Prisma.$BoothsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booths that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoothsFindFirstOrThrowArgs} args - Arguments to find a Booths
     * @example
     * // Get one Booths
     * const booths = await prisma.booths.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BoothsFindFirstOrThrowArgs>(args?: SelectSubset<T, BoothsFindFirstOrThrowArgs<ExtArgs>>): Prisma__BoothsClient<$Result.GetResult<Prisma.$BoothsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Booths that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoothsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Booths
     * const booths = await prisma.booths.findMany()
     * 
     * // Get first 10 Booths
     * const booths = await prisma.booths.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const boothsWithIdOnly = await prisma.booths.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BoothsFindManyArgs>(args?: SelectSubset<T, BoothsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoothsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Booths.
     * @param {BoothsCreateArgs} args - Arguments to create a Booths.
     * @example
     * // Create one Booths
     * const Booths = await prisma.booths.create({
     *   data: {
     *     // ... data to create a Booths
     *   }
     * })
     * 
     */
    create<T extends BoothsCreateArgs>(args: SelectSubset<T, BoothsCreateArgs<ExtArgs>>): Prisma__BoothsClient<$Result.GetResult<Prisma.$BoothsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Booths.
     * @param {BoothsCreateManyArgs} args - Arguments to create many Booths.
     * @example
     * // Create many Booths
     * const booths = await prisma.booths.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BoothsCreateManyArgs>(args?: SelectSubset<T, BoothsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Booths.
     * @param {BoothsDeleteArgs} args - Arguments to delete one Booths.
     * @example
     * // Delete one Booths
     * const Booths = await prisma.booths.delete({
     *   where: {
     *     // ... filter to delete one Booths
     *   }
     * })
     * 
     */
    delete<T extends BoothsDeleteArgs>(args: SelectSubset<T, BoothsDeleteArgs<ExtArgs>>): Prisma__BoothsClient<$Result.GetResult<Prisma.$BoothsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Booths.
     * @param {BoothsUpdateArgs} args - Arguments to update one Booths.
     * @example
     * // Update one Booths
     * const booths = await prisma.booths.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BoothsUpdateArgs>(args: SelectSubset<T, BoothsUpdateArgs<ExtArgs>>): Prisma__BoothsClient<$Result.GetResult<Prisma.$BoothsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Booths.
     * @param {BoothsDeleteManyArgs} args - Arguments to filter Booths to delete.
     * @example
     * // Delete a few Booths
     * const { count } = await prisma.booths.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BoothsDeleteManyArgs>(args?: SelectSubset<T, BoothsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Booths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoothsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Booths
     * const booths = await prisma.booths.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BoothsUpdateManyArgs>(args: SelectSubset<T, BoothsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Booths.
     * @param {BoothsUpsertArgs} args - Arguments to update or create a Booths.
     * @example
     * // Update or create a Booths
     * const booths = await prisma.booths.upsert({
     *   create: {
     *     // ... data to create a Booths
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Booths we want to update
     *   }
     * })
     */
    upsert<T extends BoothsUpsertArgs>(args: SelectSubset<T, BoothsUpsertArgs<ExtArgs>>): Prisma__BoothsClient<$Result.GetResult<Prisma.$BoothsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Booths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoothsCountArgs} args - Arguments to filter Booths to count.
     * @example
     * // Count the number of Booths
     * const count = await prisma.booths.count({
     *   where: {
     *     // ... the filter for the Booths we want to count
     *   }
     * })
    **/
    count<T extends BoothsCountArgs>(
      args?: Subset<T, BoothsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BoothsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Booths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoothsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BoothsAggregateArgs>(args: Subset<T, BoothsAggregateArgs>): Prisma.PrismaPromise<GetBoothsAggregateType<T>>

    /**
     * Group by Booths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoothsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BoothsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BoothsGroupByArgs['orderBy'] }
        : { orderBy?: BoothsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BoothsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBoothsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Booths model
   */
  readonly fields: BoothsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Booths.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BoothsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    assigned_booths<T extends Booths$assigned_boothsArgs<ExtArgs> = {}>(args?: Subset<T, Booths$assigned_boothsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$assigned_boothsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Booths model
   */
  interface BoothsFieldRefs {
    readonly id: FieldRef<"Booths", 'Int'>
    readonly booth_number: FieldRef<"Booths", 'String'>
    readonly location: FieldRef<"Booths", 'String'>
    readonly price: FieldRef<"Booths", 'Float'>
    readonly booth_size: FieldRef<"Booths", 'String'>
    readonly features: FieldRef<"Booths", 'Json'>
    readonly status: FieldRef<"Booths", 'Status'>
    readonly createdAt: FieldRef<"Booths", 'DateTime'>
    readonly updatedAt: FieldRef<"Booths", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Booths findUnique
   */
  export type BoothsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booths
     */
    select?: BoothsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booths
     */
    omit?: BoothsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoothsInclude<ExtArgs> | null
    /**
     * Filter, which Booths to fetch.
     */
    where: BoothsWhereUniqueInput
  }

  /**
   * Booths findUniqueOrThrow
   */
  export type BoothsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booths
     */
    select?: BoothsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booths
     */
    omit?: BoothsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoothsInclude<ExtArgs> | null
    /**
     * Filter, which Booths to fetch.
     */
    where: BoothsWhereUniqueInput
  }

  /**
   * Booths findFirst
   */
  export type BoothsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booths
     */
    select?: BoothsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booths
     */
    omit?: BoothsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoothsInclude<ExtArgs> | null
    /**
     * Filter, which Booths to fetch.
     */
    where?: BoothsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Booths to fetch.
     */
    orderBy?: BoothsOrderByWithRelationInput | BoothsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Booths.
     */
    cursor?: BoothsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Booths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Booths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Booths.
     */
    distinct?: BoothsScalarFieldEnum | BoothsScalarFieldEnum[]
  }

  /**
   * Booths findFirstOrThrow
   */
  export type BoothsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booths
     */
    select?: BoothsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booths
     */
    omit?: BoothsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoothsInclude<ExtArgs> | null
    /**
     * Filter, which Booths to fetch.
     */
    where?: BoothsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Booths to fetch.
     */
    orderBy?: BoothsOrderByWithRelationInput | BoothsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Booths.
     */
    cursor?: BoothsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Booths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Booths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Booths.
     */
    distinct?: BoothsScalarFieldEnum | BoothsScalarFieldEnum[]
  }

  /**
   * Booths findMany
   */
  export type BoothsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booths
     */
    select?: BoothsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booths
     */
    omit?: BoothsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoothsInclude<ExtArgs> | null
    /**
     * Filter, which Booths to fetch.
     */
    where?: BoothsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Booths to fetch.
     */
    orderBy?: BoothsOrderByWithRelationInput | BoothsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Booths.
     */
    cursor?: BoothsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Booths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Booths.
     */
    skip?: number
    distinct?: BoothsScalarFieldEnum | BoothsScalarFieldEnum[]
  }

  /**
   * Booths create
   */
  export type BoothsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booths
     */
    select?: BoothsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booths
     */
    omit?: BoothsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoothsInclude<ExtArgs> | null
    /**
     * The data needed to create a Booths.
     */
    data: XOR<BoothsCreateInput, BoothsUncheckedCreateInput>
  }

  /**
   * Booths createMany
   */
  export type BoothsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Booths.
     */
    data: BoothsCreateManyInput | BoothsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Booths update
   */
  export type BoothsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booths
     */
    select?: BoothsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booths
     */
    omit?: BoothsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoothsInclude<ExtArgs> | null
    /**
     * The data needed to update a Booths.
     */
    data: XOR<BoothsUpdateInput, BoothsUncheckedUpdateInput>
    /**
     * Choose, which Booths to update.
     */
    where: BoothsWhereUniqueInput
  }

  /**
   * Booths updateMany
   */
  export type BoothsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Booths.
     */
    data: XOR<BoothsUpdateManyMutationInput, BoothsUncheckedUpdateManyInput>
    /**
     * Filter which Booths to update
     */
    where?: BoothsWhereInput
    /**
     * Limit how many Booths to update.
     */
    limit?: number
  }

  /**
   * Booths upsert
   */
  export type BoothsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booths
     */
    select?: BoothsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booths
     */
    omit?: BoothsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoothsInclude<ExtArgs> | null
    /**
     * The filter to search for the Booths to update in case it exists.
     */
    where: BoothsWhereUniqueInput
    /**
     * In case the Booths found by the `where` argument doesn't exist, create a new Booths with this data.
     */
    create: XOR<BoothsCreateInput, BoothsUncheckedCreateInput>
    /**
     * In case the Booths was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BoothsUpdateInput, BoothsUncheckedUpdateInput>
  }

  /**
   * Booths delete
   */
  export type BoothsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booths
     */
    select?: BoothsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booths
     */
    omit?: BoothsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoothsInclude<ExtArgs> | null
    /**
     * Filter which Booths to delete.
     */
    where: BoothsWhereUniqueInput
  }

  /**
   * Booths deleteMany
   */
  export type BoothsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Booths to delete
     */
    where?: BoothsWhereInput
    /**
     * Limit how many Booths to delete.
     */
    limit?: number
  }

  /**
   * Booths.assigned_booths
   */
  export type Booths$assigned_boothsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assigned_booths
     */
    select?: assigned_boothsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the assigned_booths
     */
    omit?: assigned_boothsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: assigned_boothsInclude<ExtArgs> | null
    where?: assigned_boothsWhereInput
    orderBy?: assigned_boothsOrderByWithRelationInput | assigned_boothsOrderByWithRelationInput[]
    cursor?: assigned_boothsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Assigned_boothsScalarFieldEnum | Assigned_boothsScalarFieldEnum[]
  }

  /**
   * Booths without action
   */
  export type BoothsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booths
     */
    select?: BoothsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booths
     */
    omit?: BoothsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoothsInclude<ExtArgs> | null
  }


  /**
   * Model Exhibitors
   */

  export type AggregateExhibitors = {
    _count: ExhibitorsCountAggregateOutputType | null
    _avg: ExhibitorsAvgAggregateOutputType | null
    _sum: ExhibitorsSumAggregateOutputType | null
    _min: ExhibitorsMinAggregateOutputType | null
    _max: ExhibitorsMaxAggregateOutputType | null
  }

  export type ExhibitorsAvgAggregateOutputType = {
    id: number | null
  }

  export type ExhibitorsSumAggregateOutputType = {
    id: number | null
  }

  export type ExhibitorsMinAggregateOutputType = {
    id: number | null
    prefix: string | null
    company_name: string | null
    contact_person: string | null
    contact_email: string | null
    contact_phone: string | null
    website: string | null
    description: string | null
    service_product_to_exhibit: string | null
    password: string | null
    role: $Enums.Role | null
    status: $Enums.Status | null
    registeredAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExhibitorsMaxAggregateOutputType = {
    id: number | null
    prefix: string | null
    company_name: string | null
    contact_person: string | null
    contact_email: string | null
    contact_phone: string | null
    website: string | null
    description: string | null
    service_product_to_exhibit: string | null
    password: string | null
    role: $Enums.Role | null
    status: $Enums.Status | null
    registeredAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExhibitorsCountAggregateOutputType = {
    id: number
    prefix: number
    company_name: number
    contact_person: number
    contact_email: number
    contact_phone: number
    website: number
    description: number
    service_product_to_exhibit: number
    password: number
    role: number
    status: number
    registeredAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ExhibitorsAvgAggregateInputType = {
    id?: true
  }

  export type ExhibitorsSumAggregateInputType = {
    id?: true
  }

  export type ExhibitorsMinAggregateInputType = {
    id?: true
    prefix?: true
    company_name?: true
    contact_person?: true
    contact_email?: true
    contact_phone?: true
    website?: true
    description?: true
    service_product_to_exhibit?: true
    password?: true
    role?: true
    status?: true
    registeredAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExhibitorsMaxAggregateInputType = {
    id?: true
    prefix?: true
    company_name?: true
    contact_person?: true
    contact_email?: true
    contact_phone?: true
    website?: true
    description?: true
    service_product_to_exhibit?: true
    password?: true
    role?: true
    status?: true
    registeredAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExhibitorsCountAggregateInputType = {
    id?: true
    prefix?: true
    company_name?: true
    contact_person?: true
    contact_email?: true
    contact_phone?: true
    website?: true
    description?: true
    service_product_to_exhibit?: true
    password?: true
    role?: true
    status?: true
    registeredAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ExhibitorsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Exhibitors to aggregate.
     */
    where?: ExhibitorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exhibitors to fetch.
     */
    orderBy?: ExhibitorsOrderByWithRelationInput | ExhibitorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExhibitorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exhibitors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exhibitors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Exhibitors
    **/
    _count?: true | ExhibitorsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExhibitorsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExhibitorsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExhibitorsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExhibitorsMaxAggregateInputType
  }

  export type GetExhibitorsAggregateType<T extends ExhibitorsAggregateArgs> = {
        [P in keyof T & keyof AggregateExhibitors]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExhibitors[P]>
      : GetScalarType<T[P], AggregateExhibitors[P]>
  }




  export type ExhibitorsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExhibitorsWhereInput
    orderBy?: ExhibitorsOrderByWithAggregationInput | ExhibitorsOrderByWithAggregationInput[]
    by: ExhibitorsScalarFieldEnum[] | ExhibitorsScalarFieldEnum
    having?: ExhibitorsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExhibitorsCountAggregateInputType | true
    _avg?: ExhibitorsAvgAggregateInputType
    _sum?: ExhibitorsSumAggregateInputType
    _min?: ExhibitorsMinAggregateInputType
    _max?: ExhibitorsMaxAggregateInputType
  }

  export type ExhibitorsGroupByOutputType = {
    id: number
    prefix: string | null
    company_name: string
    contact_person: string
    contact_email: string
    contact_phone: string
    website: string | null
    description: string | null
    service_product_to_exhibit: string | null
    password: string
    role: $Enums.Role
    status: $Enums.Status
    registeredAt: Date
    createdAt: Date
    updatedAt: Date
    _count: ExhibitorsCountAggregateOutputType | null
    _avg: ExhibitorsAvgAggregateOutputType | null
    _sum: ExhibitorsSumAggregateOutputType | null
    _min: ExhibitorsMinAggregateOutputType | null
    _max: ExhibitorsMaxAggregateOutputType | null
  }

  type GetExhibitorsGroupByPayload<T extends ExhibitorsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExhibitorsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExhibitorsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExhibitorsGroupByOutputType[P]>
            : GetScalarType<T[P], ExhibitorsGroupByOutputType[P]>
        }
      >
    >


  export type ExhibitorsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    prefix?: boolean
    company_name?: boolean
    contact_person?: boolean
    contact_email?: boolean
    contact_phone?: boolean
    website?: boolean
    description?: boolean
    service_product_to_exhibit?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    registeredAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    assigned_booths?: boolean | Exhibitors$assigned_boothsArgs<ExtArgs>
    _count?: boolean | ExhibitorsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exhibitors"]>



  export type ExhibitorsSelectScalar = {
    id?: boolean
    prefix?: boolean
    company_name?: boolean
    contact_person?: boolean
    contact_email?: boolean
    contact_phone?: boolean
    website?: boolean
    description?: boolean
    service_product_to_exhibit?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    registeredAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ExhibitorsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "prefix" | "company_name" | "contact_person" | "contact_email" | "contact_phone" | "website" | "description" | "service_product_to_exhibit" | "password" | "role" | "status" | "registeredAt" | "createdAt" | "updatedAt", ExtArgs["result"]["exhibitors"]>
  export type ExhibitorsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assigned_booths?: boolean | Exhibitors$assigned_boothsArgs<ExtArgs>
    _count?: boolean | ExhibitorsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ExhibitorsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Exhibitors"
    objects: {
      assigned_booths: Prisma.$assigned_boothsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      prefix: string | null
      company_name: string
      contact_person: string
      contact_email: string
      contact_phone: string
      website: string | null
      description: string | null
      service_product_to_exhibit: string | null
      password: string
      role: $Enums.Role
      status: $Enums.Status
      registeredAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["exhibitors"]>
    composites: {}
  }

  type ExhibitorsGetPayload<S extends boolean | null | undefined | ExhibitorsDefaultArgs> = $Result.GetResult<Prisma.$ExhibitorsPayload, S>

  type ExhibitorsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExhibitorsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExhibitorsCountAggregateInputType | true
    }

  export interface ExhibitorsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Exhibitors'], meta: { name: 'Exhibitors' } }
    /**
     * Find zero or one Exhibitors that matches the filter.
     * @param {ExhibitorsFindUniqueArgs} args - Arguments to find a Exhibitors
     * @example
     * // Get one Exhibitors
     * const exhibitors = await prisma.exhibitors.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExhibitorsFindUniqueArgs>(args: SelectSubset<T, ExhibitorsFindUniqueArgs<ExtArgs>>): Prisma__ExhibitorsClient<$Result.GetResult<Prisma.$ExhibitorsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Exhibitors that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExhibitorsFindUniqueOrThrowArgs} args - Arguments to find a Exhibitors
     * @example
     * // Get one Exhibitors
     * const exhibitors = await prisma.exhibitors.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExhibitorsFindUniqueOrThrowArgs>(args: SelectSubset<T, ExhibitorsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExhibitorsClient<$Result.GetResult<Prisma.$ExhibitorsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exhibitors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExhibitorsFindFirstArgs} args - Arguments to find a Exhibitors
     * @example
     * // Get one Exhibitors
     * const exhibitors = await prisma.exhibitors.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExhibitorsFindFirstArgs>(args?: SelectSubset<T, ExhibitorsFindFirstArgs<ExtArgs>>): Prisma__ExhibitorsClient<$Result.GetResult<Prisma.$ExhibitorsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exhibitors that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExhibitorsFindFirstOrThrowArgs} args - Arguments to find a Exhibitors
     * @example
     * // Get one Exhibitors
     * const exhibitors = await prisma.exhibitors.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExhibitorsFindFirstOrThrowArgs>(args?: SelectSubset<T, ExhibitorsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExhibitorsClient<$Result.GetResult<Prisma.$ExhibitorsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Exhibitors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExhibitorsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Exhibitors
     * const exhibitors = await prisma.exhibitors.findMany()
     * 
     * // Get first 10 Exhibitors
     * const exhibitors = await prisma.exhibitors.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const exhibitorsWithIdOnly = await prisma.exhibitors.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExhibitorsFindManyArgs>(args?: SelectSubset<T, ExhibitorsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExhibitorsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Exhibitors.
     * @param {ExhibitorsCreateArgs} args - Arguments to create a Exhibitors.
     * @example
     * // Create one Exhibitors
     * const Exhibitors = await prisma.exhibitors.create({
     *   data: {
     *     // ... data to create a Exhibitors
     *   }
     * })
     * 
     */
    create<T extends ExhibitorsCreateArgs>(args: SelectSubset<T, ExhibitorsCreateArgs<ExtArgs>>): Prisma__ExhibitorsClient<$Result.GetResult<Prisma.$ExhibitorsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Exhibitors.
     * @param {ExhibitorsCreateManyArgs} args - Arguments to create many Exhibitors.
     * @example
     * // Create many Exhibitors
     * const exhibitors = await prisma.exhibitors.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExhibitorsCreateManyArgs>(args?: SelectSubset<T, ExhibitorsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Exhibitors.
     * @param {ExhibitorsDeleteArgs} args - Arguments to delete one Exhibitors.
     * @example
     * // Delete one Exhibitors
     * const Exhibitors = await prisma.exhibitors.delete({
     *   where: {
     *     // ... filter to delete one Exhibitors
     *   }
     * })
     * 
     */
    delete<T extends ExhibitorsDeleteArgs>(args: SelectSubset<T, ExhibitorsDeleteArgs<ExtArgs>>): Prisma__ExhibitorsClient<$Result.GetResult<Prisma.$ExhibitorsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Exhibitors.
     * @param {ExhibitorsUpdateArgs} args - Arguments to update one Exhibitors.
     * @example
     * // Update one Exhibitors
     * const exhibitors = await prisma.exhibitors.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExhibitorsUpdateArgs>(args: SelectSubset<T, ExhibitorsUpdateArgs<ExtArgs>>): Prisma__ExhibitorsClient<$Result.GetResult<Prisma.$ExhibitorsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Exhibitors.
     * @param {ExhibitorsDeleteManyArgs} args - Arguments to filter Exhibitors to delete.
     * @example
     * // Delete a few Exhibitors
     * const { count } = await prisma.exhibitors.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExhibitorsDeleteManyArgs>(args?: SelectSubset<T, ExhibitorsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exhibitors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExhibitorsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Exhibitors
     * const exhibitors = await prisma.exhibitors.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExhibitorsUpdateManyArgs>(args: SelectSubset<T, ExhibitorsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Exhibitors.
     * @param {ExhibitorsUpsertArgs} args - Arguments to update or create a Exhibitors.
     * @example
     * // Update or create a Exhibitors
     * const exhibitors = await prisma.exhibitors.upsert({
     *   create: {
     *     // ... data to create a Exhibitors
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Exhibitors we want to update
     *   }
     * })
     */
    upsert<T extends ExhibitorsUpsertArgs>(args: SelectSubset<T, ExhibitorsUpsertArgs<ExtArgs>>): Prisma__ExhibitorsClient<$Result.GetResult<Prisma.$ExhibitorsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Exhibitors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExhibitorsCountArgs} args - Arguments to filter Exhibitors to count.
     * @example
     * // Count the number of Exhibitors
     * const count = await prisma.exhibitors.count({
     *   where: {
     *     // ... the filter for the Exhibitors we want to count
     *   }
     * })
    **/
    count<T extends ExhibitorsCountArgs>(
      args?: Subset<T, ExhibitorsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExhibitorsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Exhibitors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExhibitorsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExhibitorsAggregateArgs>(args: Subset<T, ExhibitorsAggregateArgs>): Prisma.PrismaPromise<GetExhibitorsAggregateType<T>>

    /**
     * Group by Exhibitors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExhibitorsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExhibitorsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExhibitorsGroupByArgs['orderBy'] }
        : { orderBy?: ExhibitorsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExhibitorsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExhibitorsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Exhibitors model
   */
  readonly fields: ExhibitorsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Exhibitors.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExhibitorsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    assigned_booths<T extends Exhibitors$assigned_boothsArgs<ExtArgs> = {}>(args?: Subset<T, Exhibitors$assigned_boothsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$assigned_boothsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Exhibitors model
   */
  interface ExhibitorsFieldRefs {
    readonly id: FieldRef<"Exhibitors", 'Int'>
    readonly prefix: FieldRef<"Exhibitors", 'String'>
    readonly company_name: FieldRef<"Exhibitors", 'String'>
    readonly contact_person: FieldRef<"Exhibitors", 'String'>
    readonly contact_email: FieldRef<"Exhibitors", 'String'>
    readonly contact_phone: FieldRef<"Exhibitors", 'String'>
    readonly website: FieldRef<"Exhibitors", 'String'>
    readonly description: FieldRef<"Exhibitors", 'String'>
    readonly service_product_to_exhibit: FieldRef<"Exhibitors", 'String'>
    readonly password: FieldRef<"Exhibitors", 'String'>
    readonly role: FieldRef<"Exhibitors", 'Role'>
    readonly status: FieldRef<"Exhibitors", 'Status'>
    readonly registeredAt: FieldRef<"Exhibitors", 'DateTime'>
    readonly createdAt: FieldRef<"Exhibitors", 'DateTime'>
    readonly updatedAt: FieldRef<"Exhibitors", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Exhibitors findUnique
   */
  export type ExhibitorsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exhibitors
     */
    select?: ExhibitorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exhibitors
     */
    omit?: ExhibitorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExhibitorsInclude<ExtArgs> | null
    /**
     * Filter, which Exhibitors to fetch.
     */
    where: ExhibitorsWhereUniqueInput
  }

  /**
   * Exhibitors findUniqueOrThrow
   */
  export type ExhibitorsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exhibitors
     */
    select?: ExhibitorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exhibitors
     */
    omit?: ExhibitorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExhibitorsInclude<ExtArgs> | null
    /**
     * Filter, which Exhibitors to fetch.
     */
    where: ExhibitorsWhereUniqueInput
  }

  /**
   * Exhibitors findFirst
   */
  export type ExhibitorsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exhibitors
     */
    select?: ExhibitorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exhibitors
     */
    omit?: ExhibitorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExhibitorsInclude<ExtArgs> | null
    /**
     * Filter, which Exhibitors to fetch.
     */
    where?: ExhibitorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exhibitors to fetch.
     */
    orderBy?: ExhibitorsOrderByWithRelationInput | ExhibitorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exhibitors.
     */
    cursor?: ExhibitorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exhibitors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exhibitors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exhibitors.
     */
    distinct?: ExhibitorsScalarFieldEnum | ExhibitorsScalarFieldEnum[]
  }

  /**
   * Exhibitors findFirstOrThrow
   */
  export type ExhibitorsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exhibitors
     */
    select?: ExhibitorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exhibitors
     */
    omit?: ExhibitorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExhibitorsInclude<ExtArgs> | null
    /**
     * Filter, which Exhibitors to fetch.
     */
    where?: ExhibitorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exhibitors to fetch.
     */
    orderBy?: ExhibitorsOrderByWithRelationInput | ExhibitorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exhibitors.
     */
    cursor?: ExhibitorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exhibitors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exhibitors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exhibitors.
     */
    distinct?: ExhibitorsScalarFieldEnum | ExhibitorsScalarFieldEnum[]
  }

  /**
   * Exhibitors findMany
   */
  export type ExhibitorsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exhibitors
     */
    select?: ExhibitorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exhibitors
     */
    omit?: ExhibitorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExhibitorsInclude<ExtArgs> | null
    /**
     * Filter, which Exhibitors to fetch.
     */
    where?: ExhibitorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exhibitors to fetch.
     */
    orderBy?: ExhibitorsOrderByWithRelationInput | ExhibitorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Exhibitors.
     */
    cursor?: ExhibitorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exhibitors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exhibitors.
     */
    skip?: number
    distinct?: ExhibitorsScalarFieldEnum | ExhibitorsScalarFieldEnum[]
  }

  /**
   * Exhibitors create
   */
  export type ExhibitorsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exhibitors
     */
    select?: ExhibitorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exhibitors
     */
    omit?: ExhibitorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExhibitorsInclude<ExtArgs> | null
    /**
     * The data needed to create a Exhibitors.
     */
    data: XOR<ExhibitorsCreateInput, ExhibitorsUncheckedCreateInput>
  }

  /**
   * Exhibitors createMany
   */
  export type ExhibitorsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Exhibitors.
     */
    data: ExhibitorsCreateManyInput | ExhibitorsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Exhibitors update
   */
  export type ExhibitorsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exhibitors
     */
    select?: ExhibitorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exhibitors
     */
    omit?: ExhibitorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExhibitorsInclude<ExtArgs> | null
    /**
     * The data needed to update a Exhibitors.
     */
    data: XOR<ExhibitorsUpdateInput, ExhibitorsUncheckedUpdateInput>
    /**
     * Choose, which Exhibitors to update.
     */
    where: ExhibitorsWhereUniqueInput
  }

  /**
   * Exhibitors updateMany
   */
  export type ExhibitorsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Exhibitors.
     */
    data: XOR<ExhibitorsUpdateManyMutationInput, ExhibitorsUncheckedUpdateManyInput>
    /**
     * Filter which Exhibitors to update
     */
    where?: ExhibitorsWhereInput
    /**
     * Limit how many Exhibitors to update.
     */
    limit?: number
  }

  /**
   * Exhibitors upsert
   */
  export type ExhibitorsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exhibitors
     */
    select?: ExhibitorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exhibitors
     */
    omit?: ExhibitorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExhibitorsInclude<ExtArgs> | null
    /**
     * The filter to search for the Exhibitors to update in case it exists.
     */
    where: ExhibitorsWhereUniqueInput
    /**
     * In case the Exhibitors found by the `where` argument doesn't exist, create a new Exhibitors with this data.
     */
    create: XOR<ExhibitorsCreateInput, ExhibitorsUncheckedCreateInput>
    /**
     * In case the Exhibitors was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExhibitorsUpdateInput, ExhibitorsUncheckedUpdateInput>
  }

  /**
   * Exhibitors delete
   */
  export type ExhibitorsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exhibitors
     */
    select?: ExhibitorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exhibitors
     */
    omit?: ExhibitorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExhibitorsInclude<ExtArgs> | null
    /**
     * Filter which Exhibitors to delete.
     */
    where: ExhibitorsWhereUniqueInput
  }

  /**
   * Exhibitors deleteMany
   */
  export type ExhibitorsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Exhibitors to delete
     */
    where?: ExhibitorsWhereInput
    /**
     * Limit how many Exhibitors to delete.
     */
    limit?: number
  }

  /**
   * Exhibitors.assigned_booths
   */
  export type Exhibitors$assigned_boothsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assigned_booths
     */
    select?: assigned_boothsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the assigned_booths
     */
    omit?: assigned_boothsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: assigned_boothsInclude<ExtArgs> | null
    where?: assigned_boothsWhereInput
    orderBy?: assigned_boothsOrderByWithRelationInput | assigned_boothsOrderByWithRelationInput[]
    cursor?: assigned_boothsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Assigned_boothsScalarFieldEnum | Assigned_boothsScalarFieldEnum[]
  }

  /**
   * Exhibitors without action
   */
  export type ExhibitorsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exhibitors
     */
    select?: ExhibitorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exhibitors
     */
    omit?: ExhibitorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExhibitorsInclude<ExtArgs> | null
  }


  /**
   * Model EventPartners
   */

  export type AggregateEventPartners = {
    _count: EventPartnersCountAggregateOutputType | null
    _avg: EventPartnersAvgAggregateOutputType | null
    _sum: EventPartnersSumAggregateOutputType | null
    _min: EventPartnersMinAggregateOutputType | null
    _max: EventPartnersMaxAggregateOutputType | null
  }

  export type EventPartnersAvgAggregateOutputType = {
    id: number | null
  }

  export type EventPartnersSumAggregateOutputType = {
    id: number | null
  }

  export type EventPartnersMinAggregateOutputType = {
    id: number | null
    prefix: string | null
    fullname: string | null
    email: string | null
    phone_number: string | null
    company_name: string | null
    logo: string | null
    website: string | null
    description: string | null
    why_interested: string | null
    password: string | null
    role: $Enums.Role | null
    status: $Enums.Status | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventPartnersMaxAggregateOutputType = {
    id: number | null
    prefix: string | null
    fullname: string | null
    email: string | null
    phone_number: string | null
    company_name: string | null
    logo: string | null
    website: string | null
    description: string | null
    why_interested: string | null
    password: string | null
    role: $Enums.Role | null
    status: $Enums.Status | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventPartnersCountAggregateOutputType = {
    id: number
    prefix: number
    fullname: number
    email: number
    phone_number: number
    company_name: number
    logo: number
    website: number
    social_media: number
    description: number
    why_interested: number
    password: number
    role: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EventPartnersAvgAggregateInputType = {
    id?: true
  }

  export type EventPartnersSumAggregateInputType = {
    id?: true
  }

  export type EventPartnersMinAggregateInputType = {
    id?: true
    prefix?: true
    fullname?: true
    email?: true
    phone_number?: true
    company_name?: true
    logo?: true
    website?: true
    description?: true
    why_interested?: true
    password?: true
    role?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventPartnersMaxAggregateInputType = {
    id?: true
    prefix?: true
    fullname?: true
    email?: true
    phone_number?: true
    company_name?: true
    logo?: true
    website?: true
    description?: true
    why_interested?: true
    password?: true
    role?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventPartnersCountAggregateInputType = {
    id?: true
    prefix?: true
    fullname?: true
    email?: true
    phone_number?: true
    company_name?: true
    logo?: true
    website?: true
    social_media?: true
    description?: true
    why_interested?: true
    password?: true
    role?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EventPartnersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventPartners to aggregate.
     */
    where?: EventPartnersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventPartners to fetch.
     */
    orderBy?: EventPartnersOrderByWithRelationInput | EventPartnersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventPartnersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventPartners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventPartners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EventPartners
    **/
    _count?: true | EventPartnersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventPartnersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventPartnersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventPartnersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventPartnersMaxAggregateInputType
  }

  export type GetEventPartnersAggregateType<T extends EventPartnersAggregateArgs> = {
        [P in keyof T & keyof AggregateEventPartners]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventPartners[P]>
      : GetScalarType<T[P], AggregateEventPartners[P]>
  }




  export type EventPartnersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventPartnersWhereInput
    orderBy?: EventPartnersOrderByWithAggregationInput | EventPartnersOrderByWithAggregationInput[]
    by: EventPartnersScalarFieldEnum[] | EventPartnersScalarFieldEnum
    having?: EventPartnersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventPartnersCountAggregateInputType | true
    _avg?: EventPartnersAvgAggregateInputType
    _sum?: EventPartnersSumAggregateInputType
    _min?: EventPartnersMinAggregateInputType
    _max?: EventPartnersMaxAggregateInputType
  }

  export type EventPartnersGroupByOutputType = {
    id: number
    prefix: string | null
    fullname: string
    email: string
    phone_number: string
    company_name: string
    logo: string
    website: string | null
    social_media: JsonValue | null
    description: string | null
    why_interested: string | null
    password: string
    role: $Enums.Role
    status: $Enums.Status
    createdAt: Date
    updatedAt: Date
    _count: EventPartnersCountAggregateOutputType | null
    _avg: EventPartnersAvgAggregateOutputType | null
    _sum: EventPartnersSumAggregateOutputType | null
    _min: EventPartnersMinAggregateOutputType | null
    _max: EventPartnersMaxAggregateOutputType | null
  }

  type GetEventPartnersGroupByPayload<T extends EventPartnersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventPartnersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventPartnersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventPartnersGroupByOutputType[P]>
            : GetScalarType<T[P], EventPartnersGroupByOutputType[P]>
        }
      >
    >


  export type EventPartnersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    prefix?: boolean
    fullname?: boolean
    email?: boolean
    phone_number?: boolean
    company_name?: boolean
    logo?: boolean
    website?: boolean
    social_media?: boolean
    description?: boolean
    why_interested?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    EventPartnerPackages?: boolean | EventPartners$EventPartnerPackagesArgs<ExtArgs>
    _count?: boolean | EventPartnersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventPartners"]>



  export type EventPartnersSelectScalar = {
    id?: boolean
    prefix?: boolean
    fullname?: boolean
    email?: boolean
    phone_number?: boolean
    company_name?: boolean
    logo?: boolean
    website?: boolean
    social_media?: boolean
    description?: boolean
    why_interested?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EventPartnersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "prefix" | "fullname" | "email" | "phone_number" | "company_name" | "logo" | "website" | "social_media" | "description" | "why_interested" | "password" | "role" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["eventPartners"]>
  export type EventPartnersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    EventPartnerPackages?: boolean | EventPartners$EventPartnerPackagesArgs<ExtArgs>
    _count?: boolean | EventPartnersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $EventPartnersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EventPartners"
    objects: {
      EventPartnerPackages: Prisma.$EventPartnerPackagesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      prefix: string | null
      fullname: string
      email: string
      phone_number: string
      company_name: string
      logo: string
      website: string | null
      social_media: Prisma.JsonValue | null
      description: string | null
      why_interested: string | null
      password: string
      role: $Enums.Role
      status: $Enums.Status
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["eventPartners"]>
    composites: {}
  }

  type EventPartnersGetPayload<S extends boolean | null | undefined | EventPartnersDefaultArgs> = $Result.GetResult<Prisma.$EventPartnersPayload, S>

  type EventPartnersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventPartnersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventPartnersCountAggregateInputType | true
    }

  export interface EventPartnersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EventPartners'], meta: { name: 'EventPartners' } }
    /**
     * Find zero or one EventPartners that matches the filter.
     * @param {EventPartnersFindUniqueArgs} args - Arguments to find a EventPartners
     * @example
     * // Get one EventPartners
     * const eventPartners = await prisma.eventPartners.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventPartnersFindUniqueArgs>(args: SelectSubset<T, EventPartnersFindUniqueArgs<ExtArgs>>): Prisma__EventPartnersClient<$Result.GetResult<Prisma.$EventPartnersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EventPartners that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventPartnersFindUniqueOrThrowArgs} args - Arguments to find a EventPartners
     * @example
     * // Get one EventPartners
     * const eventPartners = await prisma.eventPartners.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventPartnersFindUniqueOrThrowArgs>(args: SelectSubset<T, EventPartnersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventPartnersClient<$Result.GetResult<Prisma.$EventPartnersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventPartners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventPartnersFindFirstArgs} args - Arguments to find a EventPartners
     * @example
     * // Get one EventPartners
     * const eventPartners = await prisma.eventPartners.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventPartnersFindFirstArgs>(args?: SelectSubset<T, EventPartnersFindFirstArgs<ExtArgs>>): Prisma__EventPartnersClient<$Result.GetResult<Prisma.$EventPartnersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventPartners that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventPartnersFindFirstOrThrowArgs} args - Arguments to find a EventPartners
     * @example
     * // Get one EventPartners
     * const eventPartners = await prisma.eventPartners.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventPartnersFindFirstOrThrowArgs>(args?: SelectSubset<T, EventPartnersFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventPartnersClient<$Result.GetResult<Prisma.$EventPartnersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EventPartners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventPartnersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventPartners
     * const eventPartners = await prisma.eventPartners.findMany()
     * 
     * // Get first 10 EventPartners
     * const eventPartners = await prisma.eventPartners.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventPartnersWithIdOnly = await prisma.eventPartners.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventPartnersFindManyArgs>(args?: SelectSubset<T, EventPartnersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPartnersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EventPartners.
     * @param {EventPartnersCreateArgs} args - Arguments to create a EventPartners.
     * @example
     * // Create one EventPartners
     * const EventPartners = await prisma.eventPartners.create({
     *   data: {
     *     // ... data to create a EventPartners
     *   }
     * })
     * 
     */
    create<T extends EventPartnersCreateArgs>(args: SelectSubset<T, EventPartnersCreateArgs<ExtArgs>>): Prisma__EventPartnersClient<$Result.GetResult<Prisma.$EventPartnersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EventPartners.
     * @param {EventPartnersCreateManyArgs} args - Arguments to create many EventPartners.
     * @example
     * // Create many EventPartners
     * const eventPartners = await prisma.eventPartners.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventPartnersCreateManyArgs>(args?: SelectSubset<T, EventPartnersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a EventPartners.
     * @param {EventPartnersDeleteArgs} args - Arguments to delete one EventPartners.
     * @example
     * // Delete one EventPartners
     * const EventPartners = await prisma.eventPartners.delete({
     *   where: {
     *     // ... filter to delete one EventPartners
     *   }
     * })
     * 
     */
    delete<T extends EventPartnersDeleteArgs>(args: SelectSubset<T, EventPartnersDeleteArgs<ExtArgs>>): Prisma__EventPartnersClient<$Result.GetResult<Prisma.$EventPartnersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EventPartners.
     * @param {EventPartnersUpdateArgs} args - Arguments to update one EventPartners.
     * @example
     * // Update one EventPartners
     * const eventPartners = await prisma.eventPartners.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventPartnersUpdateArgs>(args: SelectSubset<T, EventPartnersUpdateArgs<ExtArgs>>): Prisma__EventPartnersClient<$Result.GetResult<Prisma.$EventPartnersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EventPartners.
     * @param {EventPartnersDeleteManyArgs} args - Arguments to filter EventPartners to delete.
     * @example
     * // Delete a few EventPartners
     * const { count } = await prisma.eventPartners.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventPartnersDeleteManyArgs>(args?: SelectSubset<T, EventPartnersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventPartners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventPartnersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventPartners
     * const eventPartners = await prisma.eventPartners.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventPartnersUpdateManyArgs>(args: SelectSubset<T, EventPartnersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one EventPartners.
     * @param {EventPartnersUpsertArgs} args - Arguments to update or create a EventPartners.
     * @example
     * // Update or create a EventPartners
     * const eventPartners = await prisma.eventPartners.upsert({
     *   create: {
     *     // ... data to create a EventPartners
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventPartners we want to update
     *   }
     * })
     */
    upsert<T extends EventPartnersUpsertArgs>(args: SelectSubset<T, EventPartnersUpsertArgs<ExtArgs>>): Prisma__EventPartnersClient<$Result.GetResult<Prisma.$EventPartnersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EventPartners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventPartnersCountArgs} args - Arguments to filter EventPartners to count.
     * @example
     * // Count the number of EventPartners
     * const count = await prisma.eventPartners.count({
     *   where: {
     *     // ... the filter for the EventPartners we want to count
     *   }
     * })
    **/
    count<T extends EventPartnersCountArgs>(
      args?: Subset<T, EventPartnersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventPartnersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EventPartners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventPartnersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventPartnersAggregateArgs>(args: Subset<T, EventPartnersAggregateArgs>): Prisma.PrismaPromise<GetEventPartnersAggregateType<T>>

    /**
     * Group by EventPartners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventPartnersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EventPartnersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventPartnersGroupByArgs['orderBy'] }
        : { orderBy?: EventPartnersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EventPartnersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventPartnersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EventPartners model
   */
  readonly fields: EventPartnersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EventPartners.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventPartnersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    EventPartnerPackages<T extends EventPartners$EventPartnerPackagesArgs<ExtArgs> = {}>(args?: Subset<T, EventPartners$EventPartnerPackagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPartnerPackagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EventPartners model
   */
  interface EventPartnersFieldRefs {
    readonly id: FieldRef<"EventPartners", 'Int'>
    readonly prefix: FieldRef<"EventPartners", 'String'>
    readonly fullname: FieldRef<"EventPartners", 'String'>
    readonly email: FieldRef<"EventPartners", 'String'>
    readonly phone_number: FieldRef<"EventPartners", 'String'>
    readonly company_name: FieldRef<"EventPartners", 'String'>
    readonly logo: FieldRef<"EventPartners", 'String'>
    readonly website: FieldRef<"EventPartners", 'String'>
    readonly social_media: FieldRef<"EventPartners", 'Json'>
    readonly description: FieldRef<"EventPartners", 'String'>
    readonly why_interested: FieldRef<"EventPartners", 'String'>
    readonly password: FieldRef<"EventPartners", 'String'>
    readonly role: FieldRef<"EventPartners", 'Role'>
    readonly status: FieldRef<"EventPartners", 'Status'>
    readonly createdAt: FieldRef<"EventPartners", 'DateTime'>
    readonly updatedAt: FieldRef<"EventPartners", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EventPartners findUnique
   */
  export type EventPartnersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventPartners
     */
    select?: EventPartnersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventPartners
     */
    omit?: EventPartnersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventPartnersInclude<ExtArgs> | null
    /**
     * Filter, which EventPartners to fetch.
     */
    where: EventPartnersWhereUniqueInput
  }

  /**
   * EventPartners findUniqueOrThrow
   */
  export type EventPartnersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventPartners
     */
    select?: EventPartnersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventPartners
     */
    omit?: EventPartnersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventPartnersInclude<ExtArgs> | null
    /**
     * Filter, which EventPartners to fetch.
     */
    where: EventPartnersWhereUniqueInput
  }

  /**
   * EventPartners findFirst
   */
  export type EventPartnersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventPartners
     */
    select?: EventPartnersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventPartners
     */
    omit?: EventPartnersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventPartnersInclude<ExtArgs> | null
    /**
     * Filter, which EventPartners to fetch.
     */
    where?: EventPartnersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventPartners to fetch.
     */
    orderBy?: EventPartnersOrderByWithRelationInput | EventPartnersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventPartners.
     */
    cursor?: EventPartnersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventPartners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventPartners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventPartners.
     */
    distinct?: EventPartnersScalarFieldEnum | EventPartnersScalarFieldEnum[]
  }

  /**
   * EventPartners findFirstOrThrow
   */
  export type EventPartnersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventPartners
     */
    select?: EventPartnersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventPartners
     */
    omit?: EventPartnersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventPartnersInclude<ExtArgs> | null
    /**
     * Filter, which EventPartners to fetch.
     */
    where?: EventPartnersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventPartners to fetch.
     */
    orderBy?: EventPartnersOrderByWithRelationInput | EventPartnersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventPartners.
     */
    cursor?: EventPartnersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventPartners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventPartners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventPartners.
     */
    distinct?: EventPartnersScalarFieldEnum | EventPartnersScalarFieldEnum[]
  }

  /**
   * EventPartners findMany
   */
  export type EventPartnersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventPartners
     */
    select?: EventPartnersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventPartners
     */
    omit?: EventPartnersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventPartnersInclude<ExtArgs> | null
    /**
     * Filter, which EventPartners to fetch.
     */
    where?: EventPartnersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventPartners to fetch.
     */
    orderBy?: EventPartnersOrderByWithRelationInput | EventPartnersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EventPartners.
     */
    cursor?: EventPartnersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventPartners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventPartners.
     */
    skip?: number
    distinct?: EventPartnersScalarFieldEnum | EventPartnersScalarFieldEnum[]
  }

  /**
   * EventPartners create
   */
  export type EventPartnersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventPartners
     */
    select?: EventPartnersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventPartners
     */
    omit?: EventPartnersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventPartnersInclude<ExtArgs> | null
    /**
     * The data needed to create a EventPartners.
     */
    data: XOR<EventPartnersCreateInput, EventPartnersUncheckedCreateInput>
  }

  /**
   * EventPartners createMany
   */
  export type EventPartnersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EventPartners.
     */
    data: EventPartnersCreateManyInput | EventPartnersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EventPartners update
   */
  export type EventPartnersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventPartners
     */
    select?: EventPartnersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventPartners
     */
    omit?: EventPartnersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventPartnersInclude<ExtArgs> | null
    /**
     * The data needed to update a EventPartners.
     */
    data: XOR<EventPartnersUpdateInput, EventPartnersUncheckedUpdateInput>
    /**
     * Choose, which EventPartners to update.
     */
    where: EventPartnersWhereUniqueInput
  }

  /**
   * EventPartners updateMany
   */
  export type EventPartnersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EventPartners.
     */
    data: XOR<EventPartnersUpdateManyMutationInput, EventPartnersUncheckedUpdateManyInput>
    /**
     * Filter which EventPartners to update
     */
    where?: EventPartnersWhereInput
    /**
     * Limit how many EventPartners to update.
     */
    limit?: number
  }

  /**
   * EventPartners upsert
   */
  export type EventPartnersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventPartners
     */
    select?: EventPartnersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventPartners
     */
    omit?: EventPartnersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventPartnersInclude<ExtArgs> | null
    /**
     * The filter to search for the EventPartners to update in case it exists.
     */
    where: EventPartnersWhereUniqueInput
    /**
     * In case the EventPartners found by the `where` argument doesn't exist, create a new EventPartners with this data.
     */
    create: XOR<EventPartnersCreateInput, EventPartnersUncheckedCreateInput>
    /**
     * In case the EventPartners was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventPartnersUpdateInput, EventPartnersUncheckedUpdateInput>
  }

  /**
   * EventPartners delete
   */
  export type EventPartnersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventPartners
     */
    select?: EventPartnersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventPartners
     */
    omit?: EventPartnersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventPartnersInclude<ExtArgs> | null
    /**
     * Filter which EventPartners to delete.
     */
    where: EventPartnersWhereUniqueInput
  }

  /**
   * EventPartners deleteMany
   */
  export type EventPartnersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventPartners to delete
     */
    where?: EventPartnersWhereInput
    /**
     * Limit how many EventPartners to delete.
     */
    limit?: number
  }

  /**
   * EventPartners.EventPartnerPackages
   */
  export type EventPartners$EventPartnerPackagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventPartnerPackages
     */
    select?: EventPartnerPackagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventPartnerPackages
     */
    omit?: EventPartnerPackagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventPartnerPackagesInclude<ExtArgs> | null
    where?: EventPartnerPackagesWhereInput
    orderBy?: EventPartnerPackagesOrderByWithRelationInput | EventPartnerPackagesOrderByWithRelationInput[]
    cursor?: EventPartnerPackagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventPartnerPackagesScalarFieldEnum | EventPartnerPackagesScalarFieldEnum[]
  }

  /**
   * EventPartners without action
   */
  export type EventPartnersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventPartners
     */
    select?: EventPartnersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventPartners
     */
    omit?: EventPartnersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventPartnersInclude<ExtArgs> | null
  }


  /**
   * Model Speakers
   */

  export type AggregateSpeakers = {
    _count: SpeakersCountAggregateOutputType | null
    _avg: SpeakersAvgAggregateOutputType | null
    _sum: SpeakersSumAggregateOutputType | null
    _min: SpeakersMinAggregateOutputType | null
    _max: SpeakersMaxAggregateOutputType | null
  }

  export type SpeakersAvgAggregateOutputType = {
    id: number | null
  }

  export type SpeakersSumAggregateOutputType = {
    id: number | null
  }

  export type SpeakersMinAggregateOutputType = {
    id: number | null
    prefix: string | null
    first_name: string | null
    last_name: string | null
    fullname: string | null
    country: string | null
    job_title: string | null
    organization: string | null
    phone: string | null
    work_email: string | null
    bio: string | null
    topic: string | null
    experience: string | null
    password: string | null
    role: $Enums.Role | null
    status: $Enums.Status | null
    registeredAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SpeakersMaxAggregateOutputType = {
    id: number | null
    prefix: string | null
    first_name: string | null
    last_name: string | null
    fullname: string | null
    country: string | null
    job_title: string | null
    organization: string | null
    phone: string | null
    work_email: string | null
    bio: string | null
    topic: string | null
    experience: string | null
    password: string | null
    role: $Enums.Role | null
    status: $Enums.Status | null
    registeredAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SpeakersCountAggregateOutputType = {
    id: number
    prefix: number
    first_name: number
    last_name: number
    fullname: number
    country: number
    job_title: number
    organization: number
    phone: number
    social_media: number
    work_email: number
    bio: number
    topic: number
    experience: number
    password: number
    role: number
    status: number
    registeredAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SpeakersAvgAggregateInputType = {
    id?: true
  }

  export type SpeakersSumAggregateInputType = {
    id?: true
  }

  export type SpeakersMinAggregateInputType = {
    id?: true
    prefix?: true
    first_name?: true
    last_name?: true
    fullname?: true
    country?: true
    job_title?: true
    organization?: true
    phone?: true
    work_email?: true
    bio?: true
    topic?: true
    experience?: true
    password?: true
    role?: true
    status?: true
    registeredAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SpeakersMaxAggregateInputType = {
    id?: true
    prefix?: true
    first_name?: true
    last_name?: true
    fullname?: true
    country?: true
    job_title?: true
    organization?: true
    phone?: true
    work_email?: true
    bio?: true
    topic?: true
    experience?: true
    password?: true
    role?: true
    status?: true
    registeredAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SpeakersCountAggregateInputType = {
    id?: true
    prefix?: true
    first_name?: true
    last_name?: true
    fullname?: true
    country?: true
    job_title?: true
    organization?: true
    phone?: true
    social_media?: true
    work_email?: true
    bio?: true
    topic?: true
    experience?: true
    password?: true
    role?: true
    status?: true
    registeredAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SpeakersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Speakers to aggregate.
     */
    where?: SpeakersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Speakers to fetch.
     */
    orderBy?: SpeakersOrderByWithRelationInput | SpeakersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SpeakersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Speakers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Speakers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Speakers
    **/
    _count?: true | SpeakersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SpeakersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SpeakersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SpeakersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SpeakersMaxAggregateInputType
  }

  export type GetSpeakersAggregateType<T extends SpeakersAggregateArgs> = {
        [P in keyof T & keyof AggregateSpeakers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSpeakers[P]>
      : GetScalarType<T[P], AggregateSpeakers[P]>
  }




  export type SpeakersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpeakersWhereInput
    orderBy?: SpeakersOrderByWithAggregationInput | SpeakersOrderByWithAggregationInput[]
    by: SpeakersScalarFieldEnum[] | SpeakersScalarFieldEnum
    having?: SpeakersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SpeakersCountAggregateInputType | true
    _avg?: SpeakersAvgAggregateInputType
    _sum?: SpeakersSumAggregateInputType
    _min?: SpeakersMinAggregateInputType
    _max?: SpeakersMaxAggregateInputType
  }

  export type SpeakersGroupByOutputType = {
    id: number
    prefix: string | null
    first_name: string
    last_name: string
    fullname: string
    country: string
    job_title: string
    organization: string
    phone: string
    social_media: JsonValue | null
    work_email: string
    bio: string
    topic: string
    experience: string | null
    password: string
    role: $Enums.Role
    status: $Enums.Status
    registeredAt: Date
    createdAt: Date
    updatedAt: Date
    _count: SpeakersCountAggregateOutputType | null
    _avg: SpeakersAvgAggregateOutputType | null
    _sum: SpeakersSumAggregateOutputType | null
    _min: SpeakersMinAggregateOutputType | null
    _max: SpeakersMaxAggregateOutputType | null
  }

  type GetSpeakersGroupByPayload<T extends SpeakersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SpeakersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SpeakersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SpeakersGroupByOutputType[P]>
            : GetScalarType<T[P], SpeakersGroupByOutputType[P]>
        }
      >
    >


  export type SpeakersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    prefix?: boolean
    first_name?: boolean
    last_name?: boolean
    fullname?: boolean
    country?: boolean
    job_title?: boolean
    organization?: boolean
    phone?: boolean
    social_media?: boolean
    work_email?: boolean
    bio?: boolean
    topic?: boolean
    experience?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    registeredAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["speakers"]>



  export type SpeakersSelectScalar = {
    id?: boolean
    prefix?: boolean
    first_name?: boolean
    last_name?: boolean
    fullname?: boolean
    country?: boolean
    job_title?: boolean
    organization?: boolean
    phone?: boolean
    social_media?: boolean
    work_email?: boolean
    bio?: boolean
    topic?: boolean
    experience?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    registeredAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SpeakersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "prefix" | "first_name" | "last_name" | "fullname" | "country" | "job_title" | "organization" | "phone" | "social_media" | "work_email" | "bio" | "topic" | "experience" | "password" | "role" | "status" | "registeredAt" | "createdAt" | "updatedAt", ExtArgs["result"]["speakers"]>

  export type $SpeakersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Speakers"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      prefix: string | null
      first_name: string
      last_name: string
      fullname: string
      country: string
      job_title: string
      organization: string
      phone: string
      social_media: Prisma.JsonValue | null
      work_email: string
      bio: string
      topic: string
      experience: string | null
      password: string
      role: $Enums.Role
      status: $Enums.Status
      registeredAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["speakers"]>
    composites: {}
  }

  type SpeakersGetPayload<S extends boolean | null | undefined | SpeakersDefaultArgs> = $Result.GetResult<Prisma.$SpeakersPayload, S>

  type SpeakersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SpeakersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SpeakersCountAggregateInputType | true
    }

  export interface SpeakersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Speakers'], meta: { name: 'Speakers' } }
    /**
     * Find zero or one Speakers that matches the filter.
     * @param {SpeakersFindUniqueArgs} args - Arguments to find a Speakers
     * @example
     * // Get one Speakers
     * const speakers = await prisma.speakers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SpeakersFindUniqueArgs>(args: SelectSubset<T, SpeakersFindUniqueArgs<ExtArgs>>): Prisma__SpeakersClient<$Result.GetResult<Prisma.$SpeakersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Speakers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SpeakersFindUniqueOrThrowArgs} args - Arguments to find a Speakers
     * @example
     * // Get one Speakers
     * const speakers = await prisma.speakers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SpeakersFindUniqueOrThrowArgs>(args: SelectSubset<T, SpeakersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SpeakersClient<$Result.GetResult<Prisma.$SpeakersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Speakers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpeakersFindFirstArgs} args - Arguments to find a Speakers
     * @example
     * // Get one Speakers
     * const speakers = await prisma.speakers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SpeakersFindFirstArgs>(args?: SelectSubset<T, SpeakersFindFirstArgs<ExtArgs>>): Prisma__SpeakersClient<$Result.GetResult<Prisma.$SpeakersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Speakers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpeakersFindFirstOrThrowArgs} args - Arguments to find a Speakers
     * @example
     * // Get one Speakers
     * const speakers = await prisma.speakers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SpeakersFindFirstOrThrowArgs>(args?: SelectSubset<T, SpeakersFindFirstOrThrowArgs<ExtArgs>>): Prisma__SpeakersClient<$Result.GetResult<Prisma.$SpeakersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Speakers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpeakersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Speakers
     * const speakers = await prisma.speakers.findMany()
     * 
     * // Get first 10 Speakers
     * const speakers = await prisma.speakers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const speakersWithIdOnly = await prisma.speakers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SpeakersFindManyArgs>(args?: SelectSubset<T, SpeakersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpeakersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Speakers.
     * @param {SpeakersCreateArgs} args - Arguments to create a Speakers.
     * @example
     * // Create one Speakers
     * const Speakers = await prisma.speakers.create({
     *   data: {
     *     // ... data to create a Speakers
     *   }
     * })
     * 
     */
    create<T extends SpeakersCreateArgs>(args: SelectSubset<T, SpeakersCreateArgs<ExtArgs>>): Prisma__SpeakersClient<$Result.GetResult<Prisma.$SpeakersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Speakers.
     * @param {SpeakersCreateManyArgs} args - Arguments to create many Speakers.
     * @example
     * // Create many Speakers
     * const speakers = await prisma.speakers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SpeakersCreateManyArgs>(args?: SelectSubset<T, SpeakersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Speakers.
     * @param {SpeakersDeleteArgs} args - Arguments to delete one Speakers.
     * @example
     * // Delete one Speakers
     * const Speakers = await prisma.speakers.delete({
     *   where: {
     *     // ... filter to delete one Speakers
     *   }
     * })
     * 
     */
    delete<T extends SpeakersDeleteArgs>(args: SelectSubset<T, SpeakersDeleteArgs<ExtArgs>>): Prisma__SpeakersClient<$Result.GetResult<Prisma.$SpeakersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Speakers.
     * @param {SpeakersUpdateArgs} args - Arguments to update one Speakers.
     * @example
     * // Update one Speakers
     * const speakers = await prisma.speakers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SpeakersUpdateArgs>(args: SelectSubset<T, SpeakersUpdateArgs<ExtArgs>>): Prisma__SpeakersClient<$Result.GetResult<Prisma.$SpeakersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Speakers.
     * @param {SpeakersDeleteManyArgs} args - Arguments to filter Speakers to delete.
     * @example
     * // Delete a few Speakers
     * const { count } = await prisma.speakers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SpeakersDeleteManyArgs>(args?: SelectSubset<T, SpeakersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Speakers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpeakersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Speakers
     * const speakers = await prisma.speakers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SpeakersUpdateManyArgs>(args: SelectSubset<T, SpeakersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Speakers.
     * @param {SpeakersUpsertArgs} args - Arguments to update or create a Speakers.
     * @example
     * // Update or create a Speakers
     * const speakers = await prisma.speakers.upsert({
     *   create: {
     *     // ... data to create a Speakers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Speakers we want to update
     *   }
     * })
     */
    upsert<T extends SpeakersUpsertArgs>(args: SelectSubset<T, SpeakersUpsertArgs<ExtArgs>>): Prisma__SpeakersClient<$Result.GetResult<Prisma.$SpeakersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Speakers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpeakersCountArgs} args - Arguments to filter Speakers to count.
     * @example
     * // Count the number of Speakers
     * const count = await prisma.speakers.count({
     *   where: {
     *     // ... the filter for the Speakers we want to count
     *   }
     * })
    **/
    count<T extends SpeakersCountArgs>(
      args?: Subset<T, SpeakersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SpeakersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Speakers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpeakersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SpeakersAggregateArgs>(args: Subset<T, SpeakersAggregateArgs>): Prisma.PrismaPromise<GetSpeakersAggregateType<T>>

    /**
     * Group by Speakers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpeakersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SpeakersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SpeakersGroupByArgs['orderBy'] }
        : { orderBy?: SpeakersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SpeakersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSpeakersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Speakers model
   */
  readonly fields: SpeakersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Speakers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SpeakersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Speakers model
   */
  interface SpeakersFieldRefs {
    readonly id: FieldRef<"Speakers", 'Int'>
    readonly prefix: FieldRef<"Speakers", 'String'>
    readonly first_name: FieldRef<"Speakers", 'String'>
    readonly last_name: FieldRef<"Speakers", 'String'>
    readonly fullname: FieldRef<"Speakers", 'String'>
    readonly country: FieldRef<"Speakers", 'String'>
    readonly job_title: FieldRef<"Speakers", 'String'>
    readonly organization: FieldRef<"Speakers", 'String'>
    readonly phone: FieldRef<"Speakers", 'String'>
    readonly social_media: FieldRef<"Speakers", 'Json'>
    readonly work_email: FieldRef<"Speakers", 'String'>
    readonly bio: FieldRef<"Speakers", 'String'>
    readonly topic: FieldRef<"Speakers", 'String'>
    readonly experience: FieldRef<"Speakers", 'String'>
    readonly password: FieldRef<"Speakers", 'String'>
    readonly role: FieldRef<"Speakers", 'Role'>
    readonly status: FieldRef<"Speakers", 'Status'>
    readonly registeredAt: FieldRef<"Speakers", 'DateTime'>
    readonly createdAt: FieldRef<"Speakers", 'DateTime'>
    readonly updatedAt: FieldRef<"Speakers", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Speakers findUnique
   */
  export type SpeakersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Speakers
     */
    select?: SpeakersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Speakers
     */
    omit?: SpeakersOmit<ExtArgs> | null
    /**
     * Filter, which Speakers to fetch.
     */
    where: SpeakersWhereUniqueInput
  }

  /**
   * Speakers findUniqueOrThrow
   */
  export type SpeakersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Speakers
     */
    select?: SpeakersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Speakers
     */
    omit?: SpeakersOmit<ExtArgs> | null
    /**
     * Filter, which Speakers to fetch.
     */
    where: SpeakersWhereUniqueInput
  }

  /**
   * Speakers findFirst
   */
  export type SpeakersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Speakers
     */
    select?: SpeakersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Speakers
     */
    omit?: SpeakersOmit<ExtArgs> | null
    /**
     * Filter, which Speakers to fetch.
     */
    where?: SpeakersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Speakers to fetch.
     */
    orderBy?: SpeakersOrderByWithRelationInput | SpeakersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Speakers.
     */
    cursor?: SpeakersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Speakers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Speakers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Speakers.
     */
    distinct?: SpeakersScalarFieldEnum | SpeakersScalarFieldEnum[]
  }

  /**
   * Speakers findFirstOrThrow
   */
  export type SpeakersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Speakers
     */
    select?: SpeakersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Speakers
     */
    omit?: SpeakersOmit<ExtArgs> | null
    /**
     * Filter, which Speakers to fetch.
     */
    where?: SpeakersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Speakers to fetch.
     */
    orderBy?: SpeakersOrderByWithRelationInput | SpeakersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Speakers.
     */
    cursor?: SpeakersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Speakers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Speakers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Speakers.
     */
    distinct?: SpeakersScalarFieldEnum | SpeakersScalarFieldEnum[]
  }

  /**
   * Speakers findMany
   */
  export type SpeakersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Speakers
     */
    select?: SpeakersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Speakers
     */
    omit?: SpeakersOmit<ExtArgs> | null
    /**
     * Filter, which Speakers to fetch.
     */
    where?: SpeakersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Speakers to fetch.
     */
    orderBy?: SpeakersOrderByWithRelationInput | SpeakersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Speakers.
     */
    cursor?: SpeakersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Speakers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Speakers.
     */
    skip?: number
    distinct?: SpeakersScalarFieldEnum | SpeakersScalarFieldEnum[]
  }

  /**
   * Speakers create
   */
  export type SpeakersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Speakers
     */
    select?: SpeakersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Speakers
     */
    omit?: SpeakersOmit<ExtArgs> | null
    /**
     * The data needed to create a Speakers.
     */
    data: XOR<SpeakersCreateInput, SpeakersUncheckedCreateInput>
  }

  /**
   * Speakers createMany
   */
  export type SpeakersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Speakers.
     */
    data: SpeakersCreateManyInput | SpeakersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Speakers update
   */
  export type SpeakersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Speakers
     */
    select?: SpeakersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Speakers
     */
    omit?: SpeakersOmit<ExtArgs> | null
    /**
     * The data needed to update a Speakers.
     */
    data: XOR<SpeakersUpdateInput, SpeakersUncheckedUpdateInput>
    /**
     * Choose, which Speakers to update.
     */
    where: SpeakersWhereUniqueInput
  }

  /**
   * Speakers updateMany
   */
  export type SpeakersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Speakers.
     */
    data: XOR<SpeakersUpdateManyMutationInput, SpeakersUncheckedUpdateManyInput>
    /**
     * Filter which Speakers to update
     */
    where?: SpeakersWhereInput
    /**
     * Limit how many Speakers to update.
     */
    limit?: number
  }

  /**
   * Speakers upsert
   */
  export type SpeakersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Speakers
     */
    select?: SpeakersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Speakers
     */
    omit?: SpeakersOmit<ExtArgs> | null
    /**
     * The filter to search for the Speakers to update in case it exists.
     */
    where: SpeakersWhereUniqueInput
    /**
     * In case the Speakers found by the `where` argument doesn't exist, create a new Speakers with this data.
     */
    create: XOR<SpeakersCreateInput, SpeakersUncheckedCreateInput>
    /**
     * In case the Speakers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SpeakersUpdateInput, SpeakersUncheckedUpdateInput>
  }

  /**
   * Speakers delete
   */
  export type SpeakersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Speakers
     */
    select?: SpeakersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Speakers
     */
    omit?: SpeakersOmit<ExtArgs> | null
    /**
     * Filter which Speakers to delete.
     */
    where: SpeakersWhereUniqueInput
  }

  /**
   * Speakers deleteMany
   */
  export type SpeakersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Speakers to delete
     */
    where?: SpeakersWhereInput
    /**
     * Limit how many Speakers to delete.
     */
    limit?: number
  }

  /**
   * Speakers without action
   */
  export type SpeakersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Speakers
     */
    select?: SpeakersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Speakers
     */
    omit?: SpeakersOmit<ExtArgs> | null
  }


  /**
   * Model EventPackages
   */

  export type AggregateEventPackages = {
    _count: EventPackagesCountAggregateOutputType | null
    _avg: EventPackagesAvgAggregateOutputType | null
    _sum: EventPackagesSumAggregateOutputType | null
    _min: EventPackagesMinAggregateOutputType | null
    _max: EventPackagesMaxAggregateOutputType | null
  }

  export type EventPackagesAvgAggregateOutputType = {
    id: number | null
    price: number | null
  }

  export type EventPackagesSumAggregateOutputType = {
    id: number | null
    price: number | null
  }

  export type EventPackagesMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    price: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventPackagesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    price: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventPackagesCountAggregateOutputType = {
    id: number
    name: number
    description: number
    price: number
    features: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EventPackagesAvgAggregateInputType = {
    id?: true
    price?: true
  }

  export type EventPackagesSumAggregateInputType = {
    id?: true
    price?: true
  }

  export type EventPackagesMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventPackagesMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventPackagesCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    features?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EventPackagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventPackages to aggregate.
     */
    where?: EventPackagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventPackages to fetch.
     */
    orderBy?: EventPackagesOrderByWithRelationInput | EventPackagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventPackagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventPackages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventPackages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EventPackages
    **/
    _count?: true | EventPackagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventPackagesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventPackagesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventPackagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventPackagesMaxAggregateInputType
  }

  export type GetEventPackagesAggregateType<T extends EventPackagesAggregateArgs> = {
        [P in keyof T & keyof AggregateEventPackages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventPackages[P]>
      : GetScalarType<T[P], AggregateEventPackages[P]>
  }




  export type EventPackagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventPackagesWhereInput
    orderBy?: EventPackagesOrderByWithAggregationInput | EventPackagesOrderByWithAggregationInput[]
    by: EventPackagesScalarFieldEnum[] | EventPackagesScalarFieldEnum
    having?: EventPackagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventPackagesCountAggregateInputType | true
    _avg?: EventPackagesAvgAggregateInputType
    _sum?: EventPackagesSumAggregateInputType
    _min?: EventPackagesMinAggregateInputType
    _max?: EventPackagesMaxAggregateInputType
  }

  export type EventPackagesGroupByOutputType = {
    id: number
    name: string
    description: string
    price: number
    features: JsonValue
    createdAt: Date
    updatedAt: Date
    _count: EventPackagesCountAggregateOutputType | null
    _avg: EventPackagesAvgAggregateOutputType | null
    _sum: EventPackagesSumAggregateOutputType | null
    _min: EventPackagesMinAggregateOutputType | null
    _max: EventPackagesMaxAggregateOutputType | null
  }

  type GetEventPackagesGroupByPayload<T extends EventPackagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventPackagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventPackagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventPackagesGroupByOutputType[P]>
            : GetScalarType<T[P], EventPackagesGroupByOutputType[P]>
        }
      >
    >


  export type EventPackagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    features?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    EventPartnerPackages?: boolean | EventPackages$EventPartnerPackagesArgs<ExtArgs>
    _count?: boolean | EventPackagesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventPackages"]>



  export type EventPackagesSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    features?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EventPackagesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "price" | "features" | "createdAt" | "updatedAt", ExtArgs["result"]["eventPackages"]>
  export type EventPackagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    EventPartnerPackages?: boolean | EventPackages$EventPartnerPackagesArgs<ExtArgs>
    _count?: boolean | EventPackagesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $EventPackagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EventPackages"
    objects: {
      EventPartnerPackages: Prisma.$EventPartnerPackagesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
      price: number
      features: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["eventPackages"]>
    composites: {}
  }

  type EventPackagesGetPayload<S extends boolean | null | undefined | EventPackagesDefaultArgs> = $Result.GetResult<Prisma.$EventPackagesPayload, S>

  type EventPackagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventPackagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventPackagesCountAggregateInputType | true
    }

  export interface EventPackagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EventPackages'], meta: { name: 'EventPackages' } }
    /**
     * Find zero or one EventPackages that matches the filter.
     * @param {EventPackagesFindUniqueArgs} args - Arguments to find a EventPackages
     * @example
     * // Get one EventPackages
     * const eventPackages = await prisma.eventPackages.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventPackagesFindUniqueArgs>(args: SelectSubset<T, EventPackagesFindUniqueArgs<ExtArgs>>): Prisma__EventPackagesClient<$Result.GetResult<Prisma.$EventPackagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EventPackages that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventPackagesFindUniqueOrThrowArgs} args - Arguments to find a EventPackages
     * @example
     * // Get one EventPackages
     * const eventPackages = await prisma.eventPackages.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventPackagesFindUniqueOrThrowArgs>(args: SelectSubset<T, EventPackagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventPackagesClient<$Result.GetResult<Prisma.$EventPackagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventPackages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventPackagesFindFirstArgs} args - Arguments to find a EventPackages
     * @example
     * // Get one EventPackages
     * const eventPackages = await prisma.eventPackages.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventPackagesFindFirstArgs>(args?: SelectSubset<T, EventPackagesFindFirstArgs<ExtArgs>>): Prisma__EventPackagesClient<$Result.GetResult<Prisma.$EventPackagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventPackages that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventPackagesFindFirstOrThrowArgs} args - Arguments to find a EventPackages
     * @example
     * // Get one EventPackages
     * const eventPackages = await prisma.eventPackages.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventPackagesFindFirstOrThrowArgs>(args?: SelectSubset<T, EventPackagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventPackagesClient<$Result.GetResult<Prisma.$EventPackagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EventPackages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventPackagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventPackages
     * const eventPackages = await prisma.eventPackages.findMany()
     * 
     * // Get first 10 EventPackages
     * const eventPackages = await prisma.eventPackages.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventPackagesWithIdOnly = await prisma.eventPackages.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventPackagesFindManyArgs>(args?: SelectSubset<T, EventPackagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPackagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EventPackages.
     * @param {EventPackagesCreateArgs} args - Arguments to create a EventPackages.
     * @example
     * // Create one EventPackages
     * const EventPackages = await prisma.eventPackages.create({
     *   data: {
     *     // ... data to create a EventPackages
     *   }
     * })
     * 
     */
    create<T extends EventPackagesCreateArgs>(args: SelectSubset<T, EventPackagesCreateArgs<ExtArgs>>): Prisma__EventPackagesClient<$Result.GetResult<Prisma.$EventPackagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EventPackages.
     * @param {EventPackagesCreateManyArgs} args - Arguments to create many EventPackages.
     * @example
     * // Create many EventPackages
     * const eventPackages = await prisma.eventPackages.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventPackagesCreateManyArgs>(args?: SelectSubset<T, EventPackagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a EventPackages.
     * @param {EventPackagesDeleteArgs} args - Arguments to delete one EventPackages.
     * @example
     * // Delete one EventPackages
     * const EventPackages = await prisma.eventPackages.delete({
     *   where: {
     *     // ... filter to delete one EventPackages
     *   }
     * })
     * 
     */
    delete<T extends EventPackagesDeleteArgs>(args: SelectSubset<T, EventPackagesDeleteArgs<ExtArgs>>): Prisma__EventPackagesClient<$Result.GetResult<Prisma.$EventPackagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EventPackages.
     * @param {EventPackagesUpdateArgs} args - Arguments to update one EventPackages.
     * @example
     * // Update one EventPackages
     * const eventPackages = await prisma.eventPackages.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventPackagesUpdateArgs>(args: SelectSubset<T, EventPackagesUpdateArgs<ExtArgs>>): Prisma__EventPackagesClient<$Result.GetResult<Prisma.$EventPackagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EventPackages.
     * @param {EventPackagesDeleteManyArgs} args - Arguments to filter EventPackages to delete.
     * @example
     * // Delete a few EventPackages
     * const { count } = await prisma.eventPackages.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventPackagesDeleteManyArgs>(args?: SelectSubset<T, EventPackagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventPackages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventPackagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventPackages
     * const eventPackages = await prisma.eventPackages.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventPackagesUpdateManyArgs>(args: SelectSubset<T, EventPackagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one EventPackages.
     * @param {EventPackagesUpsertArgs} args - Arguments to update or create a EventPackages.
     * @example
     * // Update or create a EventPackages
     * const eventPackages = await prisma.eventPackages.upsert({
     *   create: {
     *     // ... data to create a EventPackages
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventPackages we want to update
     *   }
     * })
     */
    upsert<T extends EventPackagesUpsertArgs>(args: SelectSubset<T, EventPackagesUpsertArgs<ExtArgs>>): Prisma__EventPackagesClient<$Result.GetResult<Prisma.$EventPackagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EventPackages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventPackagesCountArgs} args - Arguments to filter EventPackages to count.
     * @example
     * // Count the number of EventPackages
     * const count = await prisma.eventPackages.count({
     *   where: {
     *     // ... the filter for the EventPackages we want to count
     *   }
     * })
    **/
    count<T extends EventPackagesCountArgs>(
      args?: Subset<T, EventPackagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventPackagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EventPackages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventPackagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventPackagesAggregateArgs>(args: Subset<T, EventPackagesAggregateArgs>): Prisma.PrismaPromise<GetEventPackagesAggregateType<T>>

    /**
     * Group by EventPackages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventPackagesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EventPackagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventPackagesGroupByArgs['orderBy'] }
        : { orderBy?: EventPackagesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EventPackagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventPackagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EventPackages model
   */
  readonly fields: EventPackagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EventPackages.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventPackagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    EventPartnerPackages<T extends EventPackages$EventPartnerPackagesArgs<ExtArgs> = {}>(args?: Subset<T, EventPackages$EventPartnerPackagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPartnerPackagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EventPackages model
   */
  interface EventPackagesFieldRefs {
    readonly id: FieldRef<"EventPackages", 'Int'>
    readonly name: FieldRef<"EventPackages", 'String'>
    readonly description: FieldRef<"EventPackages", 'String'>
    readonly price: FieldRef<"EventPackages", 'Float'>
    readonly features: FieldRef<"EventPackages", 'Json'>
    readonly createdAt: FieldRef<"EventPackages", 'DateTime'>
    readonly updatedAt: FieldRef<"EventPackages", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EventPackages findUnique
   */
  export type EventPackagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventPackages
     */
    select?: EventPackagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventPackages
     */
    omit?: EventPackagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventPackagesInclude<ExtArgs> | null
    /**
     * Filter, which EventPackages to fetch.
     */
    where: EventPackagesWhereUniqueInput
  }

  /**
   * EventPackages findUniqueOrThrow
   */
  export type EventPackagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventPackages
     */
    select?: EventPackagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventPackages
     */
    omit?: EventPackagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventPackagesInclude<ExtArgs> | null
    /**
     * Filter, which EventPackages to fetch.
     */
    where: EventPackagesWhereUniqueInput
  }

  /**
   * EventPackages findFirst
   */
  export type EventPackagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventPackages
     */
    select?: EventPackagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventPackages
     */
    omit?: EventPackagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventPackagesInclude<ExtArgs> | null
    /**
     * Filter, which EventPackages to fetch.
     */
    where?: EventPackagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventPackages to fetch.
     */
    orderBy?: EventPackagesOrderByWithRelationInput | EventPackagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventPackages.
     */
    cursor?: EventPackagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventPackages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventPackages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventPackages.
     */
    distinct?: EventPackagesScalarFieldEnum | EventPackagesScalarFieldEnum[]
  }

  /**
   * EventPackages findFirstOrThrow
   */
  export type EventPackagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventPackages
     */
    select?: EventPackagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventPackages
     */
    omit?: EventPackagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventPackagesInclude<ExtArgs> | null
    /**
     * Filter, which EventPackages to fetch.
     */
    where?: EventPackagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventPackages to fetch.
     */
    orderBy?: EventPackagesOrderByWithRelationInput | EventPackagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventPackages.
     */
    cursor?: EventPackagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventPackages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventPackages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventPackages.
     */
    distinct?: EventPackagesScalarFieldEnum | EventPackagesScalarFieldEnum[]
  }

  /**
   * EventPackages findMany
   */
  export type EventPackagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventPackages
     */
    select?: EventPackagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventPackages
     */
    omit?: EventPackagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventPackagesInclude<ExtArgs> | null
    /**
     * Filter, which EventPackages to fetch.
     */
    where?: EventPackagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventPackages to fetch.
     */
    orderBy?: EventPackagesOrderByWithRelationInput | EventPackagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EventPackages.
     */
    cursor?: EventPackagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventPackages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventPackages.
     */
    skip?: number
    distinct?: EventPackagesScalarFieldEnum | EventPackagesScalarFieldEnum[]
  }

  /**
   * EventPackages create
   */
  export type EventPackagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventPackages
     */
    select?: EventPackagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventPackages
     */
    omit?: EventPackagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventPackagesInclude<ExtArgs> | null
    /**
     * The data needed to create a EventPackages.
     */
    data: XOR<EventPackagesCreateInput, EventPackagesUncheckedCreateInput>
  }

  /**
   * EventPackages createMany
   */
  export type EventPackagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EventPackages.
     */
    data: EventPackagesCreateManyInput | EventPackagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EventPackages update
   */
  export type EventPackagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventPackages
     */
    select?: EventPackagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventPackages
     */
    omit?: EventPackagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventPackagesInclude<ExtArgs> | null
    /**
     * The data needed to update a EventPackages.
     */
    data: XOR<EventPackagesUpdateInput, EventPackagesUncheckedUpdateInput>
    /**
     * Choose, which EventPackages to update.
     */
    where: EventPackagesWhereUniqueInput
  }

  /**
   * EventPackages updateMany
   */
  export type EventPackagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EventPackages.
     */
    data: XOR<EventPackagesUpdateManyMutationInput, EventPackagesUncheckedUpdateManyInput>
    /**
     * Filter which EventPackages to update
     */
    where?: EventPackagesWhereInput
    /**
     * Limit how many EventPackages to update.
     */
    limit?: number
  }

  /**
   * EventPackages upsert
   */
  export type EventPackagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventPackages
     */
    select?: EventPackagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventPackages
     */
    omit?: EventPackagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventPackagesInclude<ExtArgs> | null
    /**
     * The filter to search for the EventPackages to update in case it exists.
     */
    where: EventPackagesWhereUniqueInput
    /**
     * In case the EventPackages found by the `where` argument doesn't exist, create a new EventPackages with this data.
     */
    create: XOR<EventPackagesCreateInput, EventPackagesUncheckedCreateInput>
    /**
     * In case the EventPackages was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventPackagesUpdateInput, EventPackagesUncheckedUpdateInput>
  }

  /**
   * EventPackages delete
   */
  export type EventPackagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventPackages
     */
    select?: EventPackagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventPackages
     */
    omit?: EventPackagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventPackagesInclude<ExtArgs> | null
    /**
     * Filter which EventPackages to delete.
     */
    where: EventPackagesWhereUniqueInput
  }

  /**
   * EventPackages deleteMany
   */
  export type EventPackagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventPackages to delete
     */
    where?: EventPackagesWhereInput
    /**
     * Limit how many EventPackages to delete.
     */
    limit?: number
  }

  /**
   * EventPackages.EventPartnerPackages
   */
  export type EventPackages$EventPartnerPackagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventPartnerPackages
     */
    select?: EventPartnerPackagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventPartnerPackages
     */
    omit?: EventPartnerPackagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventPartnerPackagesInclude<ExtArgs> | null
    where?: EventPartnerPackagesWhereInput
    orderBy?: EventPartnerPackagesOrderByWithRelationInput | EventPartnerPackagesOrderByWithRelationInput[]
    cursor?: EventPartnerPackagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventPartnerPackagesScalarFieldEnum | EventPartnerPackagesScalarFieldEnum[]
  }

  /**
   * EventPackages without action
   */
  export type EventPackagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventPackages
     */
    select?: EventPackagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventPackages
     */
    omit?: EventPackagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventPackagesInclude<ExtArgs> | null
  }


  /**
   * Model SpeakerPackage
   */

  export type AggregateSpeakerPackage = {
    _count: SpeakerPackageCountAggregateOutputType | null
    _avg: SpeakerPackageAvgAggregateOutputType | null
    _sum: SpeakerPackageSumAggregateOutputType | null
    _min: SpeakerPackageMinAggregateOutputType | null
    _max: SpeakerPackageMaxAggregateOutputType | null
  }

  export type SpeakerPackageAvgAggregateOutputType = {
    id: number | null
    price: number | null
  }

  export type SpeakerPackageSumAggregateOutputType = {
    id: number | null
    price: number | null
  }

  export type SpeakerPackageMinAggregateOutputType = {
    id: number | null
    slug: string | null
    title: string | null
    price: number | null
    description: string | null
    limitedText: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SpeakerPackageMaxAggregateOutputType = {
    id: number | null
    slug: string | null
    title: string | null
    price: number | null
    description: string | null
    limitedText: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SpeakerPackageCountAggregateOutputType = {
    id: number
    slug: number
    title: number
    price: number
    description: number
    features: number
    limitedText: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SpeakerPackageAvgAggregateInputType = {
    id?: true
    price?: true
  }

  export type SpeakerPackageSumAggregateInputType = {
    id?: true
    price?: true
  }

  export type SpeakerPackageMinAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    price?: true
    description?: true
    limitedText?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SpeakerPackageMaxAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    price?: true
    description?: true
    limitedText?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SpeakerPackageCountAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    price?: true
    description?: true
    features?: true
    limitedText?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SpeakerPackageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SpeakerPackage to aggregate.
     */
    where?: SpeakerPackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpeakerPackages to fetch.
     */
    orderBy?: SpeakerPackageOrderByWithRelationInput | SpeakerPackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SpeakerPackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpeakerPackages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpeakerPackages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SpeakerPackages
    **/
    _count?: true | SpeakerPackageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SpeakerPackageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SpeakerPackageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SpeakerPackageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SpeakerPackageMaxAggregateInputType
  }

  export type GetSpeakerPackageAggregateType<T extends SpeakerPackageAggregateArgs> = {
        [P in keyof T & keyof AggregateSpeakerPackage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSpeakerPackage[P]>
      : GetScalarType<T[P], AggregateSpeakerPackage[P]>
  }




  export type SpeakerPackageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpeakerPackageWhereInput
    orderBy?: SpeakerPackageOrderByWithAggregationInput | SpeakerPackageOrderByWithAggregationInput[]
    by: SpeakerPackageScalarFieldEnum[] | SpeakerPackageScalarFieldEnum
    having?: SpeakerPackageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SpeakerPackageCountAggregateInputType | true
    _avg?: SpeakerPackageAvgAggregateInputType
    _sum?: SpeakerPackageSumAggregateInputType
    _min?: SpeakerPackageMinAggregateInputType
    _max?: SpeakerPackageMaxAggregateInputType
  }

  export type SpeakerPackageGroupByOutputType = {
    id: number
    slug: string
    title: string
    price: number
    description: string | null
    features: JsonValue
    limitedText: string | null
    createdAt: Date
    updatedAt: Date
    _count: SpeakerPackageCountAggregateOutputType | null
    _avg: SpeakerPackageAvgAggregateOutputType | null
    _sum: SpeakerPackageSumAggregateOutputType | null
    _min: SpeakerPackageMinAggregateOutputType | null
    _max: SpeakerPackageMaxAggregateOutputType | null
  }

  type GetSpeakerPackageGroupByPayload<T extends SpeakerPackageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SpeakerPackageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SpeakerPackageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SpeakerPackageGroupByOutputType[P]>
            : GetScalarType<T[P], SpeakerPackageGroupByOutputType[P]>
        }
      >
    >


  export type SpeakerPackageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title?: boolean
    price?: boolean
    description?: boolean
    features?: boolean
    limitedText?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["speakerPackage"]>



  export type SpeakerPackageSelectScalar = {
    id?: boolean
    slug?: boolean
    title?: boolean
    price?: boolean
    description?: boolean
    features?: boolean
    limitedText?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SpeakerPackageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slug" | "title" | "price" | "description" | "features" | "limitedText" | "createdAt" | "updatedAt", ExtArgs["result"]["speakerPackage"]>

  export type $SpeakerPackagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SpeakerPackage"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      slug: string
      title: string
      price: number
      description: string | null
      features: Prisma.JsonValue
      limitedText: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["speakerPackage"]>
    composites: {}
  }

  type SpeakerPackageGetPayload<S extends boolean | null | undefined | SpeakerPackageDefaultArgs> = $Result.GetResult<Prisma.$SpeakerPackagePayload, S>

  type SpeakerPackageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SpeakerPackageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SpeakerPackageCountAggregateInputType | true
    }

  export interface SpeakerPackageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SpeakerPackage'], meta: { name: 'SpeakerPackage' } }
    /**
     * Find zero or one SpeakerPackage that matches the filter.
     * @param {SpeakerPackageFindUniqueArgs} args - Arguments to find a SpeakerPackage
     * @example
     * // Get one SpeakerPackage
     * const speakerPackage = await prisma.speakerPackage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SpeakerPackageFindUniqueArgs>(args: SelectSubset<T, SpeakerPackageFindUniqueArgs<ExtArgs>>): Prisma__SpeakerPackageClient<$Result.GetResult<Prisma.$SpeakerPackagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SpeakerPackage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SpeakerPackageFindUniqueOrThrowArgs} args - Arguments to find a SpeakerPackage
     * @example
     * // Get one SpeakerPackage
     * const speakerPackage = await prisma.speakerPackage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SpeakerPackageFindUniqueOrThrowArgs>(args: SelectSubset<T, SpeakerPackageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SpeakerPackageClient<$Result.GetResult<Prisma.$SpeakerPackagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SpeakerPackage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpeakerPackageFindFirstArgs} args - Arguments to find a SpeakerPackage
     * @example
     * // Get one SpeakerPackage
     * const speakerPackage = await prisma.speakerPackage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SpeakerPackageFindFirstArgs>(args?: SelectSubset<T, SpeakerPackageFindFirstArgs<ExtArgs>>): Prisma__SpeakerPackageClient<$Result.GetResult<Prisma.$SpeakerPackagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SpeakerPackage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpeakerPackageFindFirstOrThrowArgs} args - Arguments to find a SpeakerPackage
     * @example
     * // Get one SpeakerPackage
     * const speakerPackage = await prisma.speakerPackage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SpeakerPackageFindFirstOrThrowArgs>(args?: SelectSubset<T, SpeakerPackageFindFirstOrThrowArgs<ExtArgs>>): Prisma__SpeakerPackageClient<$Result.GetResult<Prisma.$SpeakerPackagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SpeakerPackages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpeakerPackageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SpeakerPackages
     * const speakerPackages = await prisma.speakerPackage.findMany()
     * 
     * // Get first 10 SpeakerPackages
     * const speakerPackages = await prisma.speakerPackage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const speakerPackageWithIdOnly = await prisma.speakerPackage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SpeakerPackageFindManyArgs>(args?: SelectSubset<T, SpeakerPackageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpeakerPackagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SpeakerPackage.
     * @param {SpeakerPackageCreateArgs} args - Arguments to create a SpeakerPackage.
     * @example
     * // Create one SpeakerPackage
     * const SpeakerPackage = await prisma.speakerPackage.create({
     *   data: {
     *     // ... data to create a SpeakerPackage
     *   }
     * })
     * 
     */
    create<T extends SpeakerPackageCreateArgs>(args: SelectSubset<T, SpeakerPackageCreateArgs<ExtArgs>>): Prisma__SpeakerPackageClient<$Result.GetResult<Prisma.$SpeakerPackagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SpeakerPackages.
     * @param {SpeakerPackageCreateManyArgs} args - Arguments to create many SpeakerPackages.
     * @example
     * // Create many SpeakerPackages
     * const speakerPackage = await prisma.speakerPackage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SpeakerPackageCreateManyArgs>(args?: SelectSubset<T, SpeakerPackageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SpeakerPackage.
     * @param {SpeakerPackageDeleteArgs} args - Arguments to delete one SpeakerPackage.
     * @example
     * // Delete one SpeakerPackage
     * const SpeakerPackage = await prisma.speakerPackage.delete({
     *   where: {
     *     // ... filter to delete one SpeakerPackage
     *   }
     * })
     * 
     */
    delete<T extends SpeakerPackageDeleteArgs>(args: SelectSubset<T, SpeakerPackageDeleteArgs<ExtArgs>>): Prisma__SpeakerPackageClient<$Result.GetResult<Prisma.$SpeakerPackagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SpeakerPackage.
     * @param {SpeakerPackageUpdateArgs} args - Arguments to update one SpeakerPackage.
     * @example
     * // Update one SpeakerPackage
     * const speakerPackage = await prisma.speakerPackage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SpeakerPackageUpdateArgs>(args: SelectSubset<T, SpeakerPackageUpdateArgs<ExtArgs>>): Prisma__SpeakerPackageClient<$Result.GetResult<Prisma.$SpeakerPackagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SpeakerPackages.
     * @param {SpeakerPackageDeleteManyArgs} args - Arguments to filter SpeakerPackages to delete.
     * @example
     * // Delete a few SpeakerPackages
     * const { count } = await prisma.speakerPackage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SpeakerPackageDeleteManyArgs>(args?: SelectSubset<T, SpeakerPackageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SpeakerPackages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpeakerPackageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SpeakerPackages
     * const speakerPackage = await prisma.speakerPackage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SpeakerPackageUpdateManyArgs>(args: SelectSubset<T, SpeakerPackageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SpeakerPackage.
     * @param {SpeakerPackageUpsertArgs} args - Arguments to update or create a SpeakerPackage.
     * @example
     * // Update or create a SpeakerPackage
     * const speakerPackage = await prisma.speakerPackage.upsert({
     *   create: {
     *     // ... data to create a SpeakerPackage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SpeakerPackage we want to update
     *   }
     * })
     */
    upsert<T extends SpeakerPackageUpsertArgs>(args: SelectSubset<T, SpeakerPackageUpsertArgs<ExtArgs>>): Prisma__SpeakerPackageClient<$Result.GetResult<Prisma.$SpeakerPackagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SpeakerPackages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpeakerPackageCountArgs} args - Arguments to filter SpeakerPackages to count.
     * @example
     * // Count the number of SpeakerPackages
     * const count = await prisma.speakerPackage.count({
     *   where: {
     *     // ... the filter for the SpeakerPackages we want to count
     *   }
     * })
    **/
    count<T extends SpeakerPackageCountArgs>(
      args?: Subset<T, SpeakerPackageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SpeakerPackageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SpeakerPackage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpeakerPackageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SpeakerPackageAggregateArgs>(args: Subset<T, SpeakerPackageAggregateArgs>): Prisma.PrismaPromise<GetSpeakerPackageAggregateType<T>>

    /**
     * Group by SpeakerPackage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpeakerPackageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SpeakerPackageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SpeakerPackageGroupByArgs['orderBy'] }
        : { orderBy?: SpeakerPackageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SpeakerPackageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSpeakerPackageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SpeakerPackage model
   */
  readonly fields: SpeakerPackageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SpeakerPackage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SpeakerPackageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SpeakerPackage model
   */
  interface SpeakerPackageFieldRefs {
    readonly id: FieldRef<"SpeakerPackage", 'Int'>
    readonly slug: FieldRef<"SpeakerPackage", 'String'>
    readonly title: FieldRef<"SpeakerPackage", 'String'>
    readonly price: FieldRef<"SpeakerPackage", 'Float'>
    readonly description: FieldRef<"SpeakerPackage", 'String'>
    readonly features: FieldRef<"SpeakerPackage", 'Json'>
    readonly limitedText: FieldRef<"SpeakerPackage", 'String'>
    readonly createdAt: FieldRef<"SpeakerPackage", 'DateTime'>
    readonly updatedAt: FieldRef<"SpeakerPackage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SpeakerPackage findUnique
   */
  export type SpeakerPackageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpeakerPackage
     */
    select?: SpeakerPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpeakerPackage
     */
    omit?: SpeakerPackageOmit<ExtArgs> | null
    /**
     * Filter, which SpeakerPackage to fetch.
     */
    where: SpeakerPackageWhereUniqueInput
  }

  /**
   * SpeakerPackage findUniqueOrThrow
   */
  export type SpeakerPackageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpeakerPackage
     */
    select?: SpeakerPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpeakerPackage
     */
    omit?: SpeakerPackageOmit<ExtArgs> | null
    /**
     * Filter, which SpeakerPackage to fetch.
     */
    where: SpeakerPackageWhereUniqueInput
  }

  /**
   * SpeakerPackage findFirst
   */
  export type SpeakerPackageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpeakerPackage
     */
    select?: SpeakerPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpeakerPackage
     */
    omit?: SpeakerPackageOmit<ExtArgs> | null
    /**
     * Filter, which SpeakerPackage to fetch.
     */
    where?: SpeakerPackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpeakerPackages to fetch.
     */
    orderBy?: SpeakerPackageOrderByWithRelationInput | SpeakerPackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SpeakerPackages.
     */
    cursor?: SpeakerPackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpeakerPackages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpeakerPackages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SpeakerPackages.
     */
    distinct?: SpeakerPackageScalarFieldEnum | SpeakerPackageScalarFieldEnum[]
  }

  /**
   * SpeakerPackage findFirstOrThrow
   */
  export type SpeakerPackageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpeakerPackage
     */
    select?: SpeakerPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpeakerPackage
     */
    omit?: SpeakerPackageOmit<ExtArgs> | null
    /**
     * Filter, which SpeakerPackage to fetch.
     */
    where?: SpeakerPackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpeakerPackages to fetch.
     */
    orderBy?: SpeakerPackageOrderByWithRelationInput | SpeakerPackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SpeakerPackages.
     */
    cursor?: SpeakerPackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpeakerPackages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpeakerPackages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SpeakerPackages.
     */
    distinct?: SpeakerPackageScalarFieldEnum | SpeakerPackageScalarFieldEnum[]
  }

  /**
   * SpeakerPackage findMany
   */
  export type SpeakerPackageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpeakerPackage
     */
    select?: SpeakerPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpeakerPackage
     */
    omit?: SpeakerPackageOmit<ExtArgs> | null
    /**
     * Filter, which SpeakerPackages to fetch.
     */
    where?: SpeakerPackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpeakerPackages to fetch.
     */
    orderBy?: SpeakerPackageOrderByWithRelationInput | SpeakerPackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SpeakerPackages.
     */
    cursor?: SpeakerPackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpeakerPackages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpeakerPackages.
     */
    skip?: number
    distinct?: SpeakerPackageScalarFieldEnum | SpeakerPackageScalarFieldEnum[]
  }

  /**
   * SpeakerPackage create
   */
  export type SpeakerPackageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpeakerPackage
     */
    select?: SpeakerPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpeakerPackage
     */
    omit?: SpeakerPackageOmit<ExtArgs> | null
    /**
     * The data needed to create a SpeakerPackage.
     */
    data: XOR<SpeakerPackageCreateInput, SpeakerPackageUncheckedCreateInput>
  }

  /**
   * SpeakerPackage createMany
   */
  export type SpeakerPackageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SpeakerPackages.
     */
    data: SpeakerPackageCreateManyInput | SpeakerPackageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SpeakerPackage update
   */
  export type SpeakerPackageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpeakerPackage
     */
    select?: SpeakerPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpeakerPackage
     */
    omit?: SpeakerPackageOmit<ExtArgs> | null
    /**
     * The data needed to update a SpeakerPackage.
     */
    data: XOR<SpeakerPackageUpdateInput, SpeakerPackageUncheckedUpdateInput>
    /**
     * Choose, which SpeakerPackage to update.
     */
    where: SpeakerPackageWhereUniqueInput
  }

  /**
   * SpeakerPackage updateMany
   */
  export type SpeakerPackageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SpeakerPackages.
     */
    data: XOR<SpeakerPackageUpdateManyMutationInput, SpeakerPackageUncheckedUpdateManyInput>
    /**
     * Filter which SpeakerPackages to update
     */
    where?: SpeakerPackageWhereInput
    /**
     * Limit how many SpeakerPackages to update.
     */
    limit?: number
  }

  /**
   * SpeakerPackage upsert
   */
  export type SpeakerPackageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpeakerPackage
     */
    select?: SpeakerPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpeakerPackage
     */
    omit?: SpeakerPackageOmit<ExtArgs> | null
    /**
     * The filter to search for the SpeakerPackage to update in case it exists.
     */
    where: SpeakerPackageWhereUniqueInput
    /**
     * In case the SpeakerPackage found by the `where` argument doesn't exist, create a new SpeakerPackage with this data.
     */
    create: XOR<SpeakerPackageCreateInput, SpeakerPackageUncheckedCreateInput>
    /**
     * In case the SpeakerPackage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SpeakerPackageUpdateInput, SpeakerPackageUncheckedUpdateInput>
  }

  /**
   * SpeakerPackage delete
   */
  export type SpeakerPackageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpeakerPackage
     */
    select?: SpeakerPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpeakerPackage
     */
    omit?: SpeakerPackageOmit<ExtArgs> | null
    /**
     * Filter which SpeakerPackage to delete.
     */
    where: SpeakerPackageWhereUniqueInput
  }

  /**
   * SpeakerPackage deleteMany
   */
  export type SpeakerPackageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SpeakerPackages to delete
     */
    where?: SpeakerPackageWhereInput
    /**
     * Limit how many SpeakerPackages to delete.
     */
    limit?: number
  }

  /**
   * SpeakerPackage without action
   */
  export type SpeakerPackageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpeakerPackage
     */
    select?: SpeakerPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpeakerPackage
     */
    omit?: SpeakerPackageOmit<ExtArgs> | null
  }


  /**
   * Model PartnerPackage
   */

  export type AggregatePartnerPackage = {
    _count: PartnerPackageCountAggregateOutputType | null
    _avg: PartnerPackageAvgAggregateOutputType | null
    _sum: PartnerPackageSumAggregateOutputType | null
    _min: PartnerPackageMinAggregateOutputType | null
    _max: PartnerPackageMaxAggregateOutputType | null
  }

  export type PartnerPackageAvgAggregateOutputType = {
    id: number | null
    price: number | null
  }

  export type PartnerPackageSumAggregateOutputType = {
    id: number | null
    price: number | null
  }

  export type PartnerPackageMinAggregateOutputType = {
    id: number | null
    slug: string | null
    title: string | null
    price: number | null
    description: string | null
    limitedText: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PartnerPackageMaxAggregateOutputType = {
    id: number | null
    slug: string | null
    title: string | null
    price: number | null
    description: string | null
    limitedText: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PartnerPackageCountAggregateOutputType = {
    id: number
    slug: number
    title: number
    price: number
    description: number
    features: number
    limitedText: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PartnerPackageAvgAggregateInputType = {
    id?: true
    price?: true
  }

  export type PartnerPackageSumAggregateInputType = {
    id?: true
    price?: true
  }

  export type PartnerPackageMinAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    price?: true
    description?: true
    limitedText?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PartnerPackageMaxAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    price?: true
    description?: true
    limitedText?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PartnerPackageCountAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    price?: true
    description?: true
    features?: true
    limitedText?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PartnerPackageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PartnerPackage to aggregate.
     */
    where?: PartnerPackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PartnerPackages to fetch.
     */
    orderBy?: PartnerPackageOrderByWithRelationInput | PartnerPackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PartnerPackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PartnerPackages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PartnerPackages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PartnerPackages
    **/
    _count?: true | PartnerPackageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PartnerPackageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PartnerPackageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PartnerPackageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PartnerPackageMaxAggregateInputType
  }

  export type GetPartnerPackageAggregateType<T extends PartnerPackageAggregateArgs> = {
        [P in keyof T & keyof AggregatePartnerPackage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePartnerPackage[P]>
      : GetScalarType<T[P], AggregatePartnerPackage[P]>
  }




  export type PartnerPackageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartnerPackageWhereInput
    orderBy?: PartnerPackageOrderByWithAggregationInput | PartnerPackageOrderByWithAggregationInput[]
    by: PartnerPackageScalarFieldEnum[] | PartnerPackageScalarFieldEnum
    having?: PartnerPackageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PartnerPackageCountAggregateInputType | true
    _avg?: PartnerPackageAvgAggregateInputType
    _sum?: PartnerPackageSumAggregateInputType
    _min?: PartnerPackageMinAggregateInputType
    _max?: PartnerPackageMaxAggregateInputType
  }

  export type PartnerPackageGroupByOutputType = {
    id: number
    slug: string
    title: string
    price: number
    description: string | null
    features: JsonValue
    limitedText: string | null
    createdAt: Date
    updatedAt: Date
    _count: PartnerPackageCountAggregateOutputType | null
    _avg: PartnerPackageAvgAggregateOutputType | null
    _sum: PartnerPackageSumAggregateOutputType | null
    _min: PartnerPackageMinAggregateOutputType | null
    _max: PartnerPackageMaxAggregateOutputType | null
  }

  type GetPartnerPackageGroupByPayload<T extends PartnerPackageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PartnerPackageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PartnerPackageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PartnerPackageGroupByOutputType[P]>
            : GetScalarType<T[P], PartnerPackageGroupByOutputType[P]>
        }
      >
    >


  export type PartnerPackageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title?: boolean
    price?: boolean
    description?: boolean
    features?: boolean
    limitedText?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["partnerPackage"]>



  export type PartnerPackageSelectScalar = {
    id?: boolean
    slug?: boolean
    title?: boolean
    price?: boolean
    description?: boolean
    features?: boolean
    limitedText?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PartnerPackageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slug" | "title" | "price" | "description" | "features" | "limitedText" | "createdAt" | "updatedAt", ExtArgs["result"]["partnerPackage"]>

  export type $PartnerPackagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PartnerPackage"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      slug: string
      title: string
      price: number
      description: string | null
      features: Prisma.JsonValue
      limitedText: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["partnerPackage"]>
    composites: {}
  }

  type PartnerPackageGetPayload<S extends boolean | null | undefined | PartnerPackageDefaultArgs> = $Result.GetResult<Prisma.$PartnerPackagePayload, S>

  type PartnerPackageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PartnerPackageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PartnerPackageCountAggregateInputType | true
    }

  export interface PartnerPackageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PartnerPackage'], meta: { name: 'PartnerPackage' } }
    /**
     * Find zero or one PartnerPackage that matches the filter.
     * @param {PartnerPackageFindUniqueArgs} args - Arguments to find a PartnerPackage
     * @example
     * // Get one PartnerPackage
     * const partnerPackage = await prisma.partnerPackage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PartnerPackageFindUniqueArgs>(args: SelectSubset<T, PartnerPackageFindUniqueArgs<ExtArgs>>): Prisma__PartnerPackageClient<$Result.GetResult<Prisma.$PartnerPackagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PartnerPackage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PartnerPackageFindUniqueOrThrowArgs} args - Arguments to find a PartnerPackage
     * @example
     * // Get one PartnerPackage
     * const partnerPackage = await prisma.partnerPackage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PartnerPackageFindUniqueOrThrowArgs>(args: SelectSubset<T, PartnerPackageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PartnerPackageClient<$Result.GetResult<Prisma.$PartnerPackagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PartnerPackage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerPackageFindFirstArgs} args - Arguments to find a PartnerPackage
     * @example
     * // Get one PartnerPackage
     * const partnerPackage = await prisma.partnerPackage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PartnerPackageFindFirstArgs>(args?: SelectSubset<T, PartnerPackageFindFirstArgs<ExtArgs>>): Prisma__PartnerPackageClient<$Result.GetResult<Prisma.$PartnerPackagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PartnerPackage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerPackageFindFirstOrThrowArgs} args - Arguments to find a PartnerPackage
     * @example
     * // Get one PartnerPackage
     * const partnerPackage = await prisma.partnerPackage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PartnerPackageFindFirstOrThrowArgs>(args?: SelectSubset<T, PartnerPackageFindFirstOrThrowArgs<ExtArgs>>): Prisma__PartnerPackageClient<$Result.GetResult<Prisma.$PartnerPackagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PartnerPackages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerPackageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PartnerPackages
     * const partnerPackages = await prisma.partnerPackage.findMany()
     * 
     * // Get first 10 PartnerPackages
     * const partnerPackages = await prisma.partnerPackage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const partnerPackageWithIdOnly = await prisma.partnerPackage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PartnerPackageFindManyArgs>(args?: SelectSubset<T, PartnerPackageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartnerPackagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PartnerPackage.
     * @param {PartnerPackageCreateArgs} args - Arguments to create a PartnerPackage.
     * @example
     * // Create one PartnerPackage
     * const PartnerPackage = await prisma.partnerPackage.create({
     *   data: {
     *     // ... data to create a PartnerPackage
     *   }
     * })
     * 
     */
    create<T extends PartnerPackageCreateArgs>(args: SelectSubset<T, PartnerPackageCreateArgs<ExtArgs>>): Prisma__PartnerPackageClient<$Result.GetResult<Prisma.$PartnerPackagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PartnerPackages.
     * @param {PartnerPackageCreateManyArgs} args - Arguments to create many PartnerPackages.
     * @example
     * // Create many PartnerPackages
     * const partnerPackage = await prisma.partnerPackage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PartnerPackageCreateManyArgs>(args?: SelectSubset<T, PartnerPackageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PartnerPackage.
     * @param {PartnerPackageDeleteArgs} args - Arguments to delete one PartnerPackage.
     * @example
     * // Delete one PartnerPackage
     * const PartnerPackage = await prisma.partnerPackage.delete({
     *   where: {
     *     // ... filter to delete one PartnerPackage
     *   }
     * })
     * 
     */
    delete<T extends PartnerPackageDeleteArgs>(args: SelectSubset<T, PartnerPackageDeleteArgs<ExtArgs>>): Prisma__PartnerPackageClient<$Result.GetResult<Prisma.$PartnerPackagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PartnerPackage.
     * @param {PartnerPackageUpdateArgs} args - Arguments to update one PartnerPackage.
     * @example
     * // Update one PartnerPackage
     * const partnerPackage = await prisma.partnerPackage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PartnerPackageUpdateArgs>(args: SelectSubset<T, PartnerPackageUpdateArgs<ExtArgs>>): Prisma__PartnerPackageClient<$Result.GetResult<Prisma.$PartnerPackagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PartnerPackages.
     * @param {PartnerPackageDeleteManyArgs} args - Arguments to filter PartnerPackages to delete.
     * @example
     * // Delete a few PartnerPackages
     * const { count } = await prisma.partnerPackage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PartnerPackageDeleteManyArgs>(args?: SelectSubset<T, PartnerPackageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PartnerPackages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerPackageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PartnerPackages
     * const partnerPackage = await prisma.partnerPackage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PartnerPackageUpdateManyArgs>(args: SelectSubset<T, PartnerPackageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PartnerPackage.
     * @param {PartnerPackageUpsertArgs} args - Arguments to update or create a PartnerPackage.
     * @example
     * // Update or create a PartnerPackage
     * const partnerPackage = await prisma.partnerPackage.upsert({
     *   create: {
     *     // ... data to create a PartnerPackage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PartnerPackage we want to update
     *   }
     * })
     */
    upsert<T extends PartnerPackageUpsertArgs>(args: SelectSubset<T, PartnerPackageUpsertArgs<ExtArgs>>): Prisma__PartnerPackageClient<$Result.GetResult<Prisma.$PartnerPackagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PartnerPackages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerPackageCountArgs} args - Arguments to filter PartnerPackages to count.
     * @example
     * // Count the number of PartnerPackages
     * const count = await prisma.partnerPackage.count({
     *   where: {
     *     // ... the filter for the PartnerPackages we want to count
     *   }
     * })
    **/
    count<T extends PartnerPackageCountArgs>(
      args?: Subset<T, PartnerPackageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PartnerPackageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PartnerPackage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerPackageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PartnerPackageAggregateArgs>(args: Subset<T, PartnerPackageAggregateArgs>): Prisma.PrismaPromise<GetPartnerPackageAggregateType<T>>

    /**
     * Group by PartnerPackage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerPackageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PartnerPackageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PartnerPackageGroupByArgs['orderBy'] }
        : { orderBy?: PartnerPackageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PartnerPackageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPartnerPackageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PartnerPackage model
   */
  readonly fields: PartnerPackageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PartnerPackage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PartnerPackageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PartnerPackage model
   */
  interface PartnerPackageFieldRefs {
    readonly id: FieldRef<"PartnerPackage", 'Int'>
    readonly slug: FieldRef<"PartnerPackage", 'String'>
    readonly title: FieldRef<"PartnerPackage", 'String'>
    readonly price: FieldRef<"PartnerPackage", 'Float'>
    readonly description: FieldRef<"PartnerPackage", 'String'>
    readonly features: FieldRef<"PartnerPackage", 'Json'>
    readonly limitedText: FieldRef<"PartnerPackage", 'String'>
    readonly createdAt: FieldRef<"PartnerPackage", 'DateTime'>
    readonly updatedAt: FieldRef<"PartnerPackage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PartnerPackage findUnique
   */
  export type PartnerPackageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerPackage
     */
    select?: PartnerPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerPackage
     */
    omit?: PartnerPackageOmit<ExtArgs> | null
    /**
     * Filter, which PartnerPackage to fetch.
     */
    where: PartnerPackageWhereUniqueInput
  }

  /**
   * PartnerPackage findUniqueOrThrow
   */
  export type PartnerPackageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerPackage
     */
    select?: PartnerPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerPackage
     */
    omit?: PartnerPackageOmit<ExtArgs> | null
    /**
     * Filter, which PartnerPackage to fetch.
     */
    where: PartnerPackageWhereUniqueInput
  }

  /**
   * PartnerPackage findFirst
   */
  export type PartnerPackageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerPackage
     */
    select?: PartnerPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerPackage
     */
    omit?: PartnerPackageOmit<ExtArgs> | null
    /**
     * Filter, which PartnerPackage to fetch.
     */
    where?: PartnerPackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PartnerPackages to fetch.
     */
    orderBy?: PartnerPackageOrderByWithRelationInput | PartnerPackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PartnerPackages.
     */
    cursor?: PartnerPackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PartnerPackages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PartnerPackages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PartnerPackages.
     */
    distinct?: PartnerPackageScalarFieldEnum | PartnerPackageScalarFieldEnum[]
  }

  /**
   * PartnerPackage findFirstOrThrow
   */
  export type PartnerPackageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerPackage
     */
    select?: PartnerPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerPackage
     */
    omit?: PartnerPackageOmit<ExtArgs> | null
    /**
     * Filter, which PartnerPackage to fetch.
     */
    where?: PartnerPackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PartnerPackages to fetch.
     */
    orderBy?: PartnerPackageOrderByWithRelationInput | PartnerPackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PartnerPackages.
     */
    cursor?: PartnerPackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PartnerPackages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PartnerPackages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PartnerPackages.
     */
    distinct?: PartnerPackageScalarFieldEnum | PartnerPackageScalarFieldEnum[]
  }

  /**
   * PartnerPackage findMany
   */
  export type PartnerPackageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerPackage
     */
    select?: PartnerPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerPackage
     */
    omit?: PartnerPackageOmit<ExtArgs> | null
    /**
     * Filter, which PartnerPackages to fetch.
     */
    where?: PartnerPackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PartnerPackages to fetch.
     */
    orderBy?: PartnerPackageOrderByWithRelationInput | PartnerPackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PartnerPackages.
     */
    cursor?: PartnerPackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PartnerPackages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PartnerPackages.
     */
    skip?: number
    distinct?: PartnerPackageScalarFieldEnum | PartnerPackageScalarFieldEnum[]
  }

  /**
   * PartnerPackage create
   */
  export type PartnerPackageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerPackage
     */
    select?: PartnerPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerPackage
     */
    omit?: PartnerPackageOmit<ExtArgs> | null
    /**
     * The data needed to create a PartnerPackage.
     */
    data: XOR<PartnerPackageCreateInput, PartnerPackageUncheckedCreateInput>
  }

  /**
   * PartnerPackage createMany
   */
  export type PartnerPackageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PartnerPackages.
     */
    data: PartnerPackageCreateManyInput | PartnerPackageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PartnerPackage update
   */
  export type PartnerPackageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerPackage
     */
    select?: PartnerPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerPackage
     */
    omit?: PartnerPackageOmit<ExtArgs> | null
    /**
     * The data needed to update a PartnerPackage.
     */
    data: XOR<PartnerPackageUpdateInput, PartnerPackageUncheckedUpdateInput>
    /**
     * Choose, which PartnerPackage to update.
     */
    where: PartnerPackageWhereUniqueInput
  }

  /**
   * PartnerPackage updateMany
   */
  export type PartnerPackageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PartnerPackages.
     */
    data: XOR<PartnerPackageUpdateManyMutationInput, PartnerPackageUncheckedUpdateManyInput>
    /**
     * Filter which PartnerPackages to update
     */
    where?: PartnerPackageWhereInput
    /**
     * Limit how many PartnerPackages to update.
     */
    limit?: number
  }

  /**
   * PartnerPackage upsert
   */
  export type PartnerPackageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerPackage
     */
    select?: PartnerPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerPackage
     */
    omit?: PartnerPackageOmit<ExtArgs> | null
    /**
     * The filter to search for the PartnerPackage to update in case it exists.
     */
    where: PartnerPackageWhereUniqueInput
    /**
     * In case the PartnerPackage found by the `where` argument doesn't exist, create a new PartnerPackage with this data.
     */
    create: XOR<PartnerPackageCreateInput, PartnerPackageUncheckedCreateInput>
    /**
     * In case the PartnerPackage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PartnerPackageUpdateInput, PartnerPackageUncheckedUpdateInput>
  }

  /**
   * PartnerPackage delete
   */
  export type PartnerPackageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerPackage
     */
    select?: PartnerPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerPackage
     */
    omit?: PartnerPackageOmit<ExtArgs> | null
    /**
     * Filter which PartnerPackage to delete.
     */
    where: PartnerPackageWhereUniqueInput
  }

  /**
   * PartnerPackage deleteMany
   */
  export type PartnerPackageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PartnerPackages to delete
     */
    where?: PartnerPackageWhereInput
    /**
     * Limit how many PartnerPackages to delete.
     */
    limit?: number
  }

  /**
   * PartnerPackage without action
   */
  export type PartnerPackageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerPackage
     */
    select?: PartnerPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerPackage
     */
    omit?: PartnerPackageOmit<ExtArgs> | null
  }


  /**
   * Model assigned_booths
   */

  export type AggregateAssigned_booths = {
    _count: Assigned_boothsCountAggregateOutputType | null
    _avg: Assigned_boothsAvgAggregateOutputType | null
    _sum: Assigned_boothsSumAggregateOutputType | null
    _min: Assigned_boothsMinAggregateOutputType | null
    _max: Assigned_boothsMaxAggregateOutputType | null
  }

  export type Assigned_boothsAvgAggregateOutputType = {
    id: number | null
    booth_id: number | null
    assigned_to_id: number | null
  }

  export type Assigned_boothsSumAggregateOutputType = {
    id: number | null
    booth_id: number | null
    assigned_to_id: number | null
  }

  export type Assigned_boothsMinAggregateOutputType = {
    id: number | null
    booth_id: number | null
    assigned_to_id: number | null
    assignedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Assigned_boothsMaxAggregateOutputType = {
    id: number | null
    booth_id: number | null
    assigned_to_id: number | null
    assignedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Assigned_boothsCountAggregateOutputType = {
    id: number
    booth_id: number
    assigned_to_id: number
    assignedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Assigned_boothsAvgAggregateInputType = {
    id?: true
    booth_id?: true
    assigned_to_id?: true
  }

  export type Assigned_boothsSumAggregateInputType = {
    id?: true
    booth_id?: true
    assigned_to_id?: true
  }

  export type Assigned_boothsMinAggregateInputType = {
    id?: true
    booth_id?: true
    assigned_to_id?: true
    assignedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Assigned_boothsMaxAggregateInputType = {
    id?: true
    booth_id?: true
    assigned_to_id?: true
    assignedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Assigned_boothsCountAggregateInputType = {
    id?: true
    booth_id?: true
    assigned_to_id?: true
    assignedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Assigned_boothsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which assigned_booths to aggregate.
     */
    where?: assigned_boothsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of assigned_booths to fetch.
     */
    orderBy?: assigned_boothsOrderByWithRelationInput | assigned_boothsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: assigned_boothsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` assigned_booths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` assigned_booths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned assigned_booths
    **/
    _count?: true | Assigned_boothsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Assigned_boothsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Assigned_boothsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Assigned_boothsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Assigned_boothsMaxAggregateInputType
  }

  export type GetAssigned_boothsAggregateType<T extends Assigned_boothsAggregateArgs> = {
        [P in keyof T & keyof AggregateAssigned_booths]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssigned_booths[P]>
      : GetScalarType<T[P], AggregateAssigned_booths[P]>
  }




  export type assigned_boothsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: assigned_boothsWhereInput
    orderBy?: assigned_boothsOrderByWithAggregationInput | assigned_boothsOrderByWithAggregationInput[]
    by: Assigned_boothsScalarFieldEnum[] | Assigned_boothsScalarFieldEnum
    having?: assigned_boothsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Assigned_boothsCountAggregateInputType | true
    _avg?: Assigned_boothsAvgAggregateInputType
    _sum?: Assigned_boothsSumAggregateInputType
    _min?: Assigned_boothsMinAggregateInputType
    _max?: Assigned_boothsMaxAggregateInputType
  }

  export type Assigned_boothsGroupByOutputType = {
    id: number
    booth_id: number
    assigned_to_id: number
    assignedAt: Date
    createdAt: Date
    updatedAt: Date
    _count: Assigned_boothsCountAggregateOutputType | null
    _avg: Assigned_boothsAvgAggregateOutputType | null
    _sum: Assigned_boothsSumAggregateOutputType | null
    _min: Assigned_boothsMinAggregateOutputType | null
    _max: Assigned_boothsMaxAggregateOutputType | null
  }

  type GetAssigned_boothsGroupByPayload<T extends assigned_boothsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Assigned_boothsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Assigned_boothsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Assigned_boothsGroupByOutputType[P]>
            : GetScalarType<T[P], Assigned_boothsGroupByOutputType[P]>
        }
      >
    >


  export type assigned_boothsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    booth_id?: boolean
    assigned_to_id?: boolean
    assignedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    booth?: boolean | BoothsDefaultArgs<ExtArgs>
    assigned_to?: boolean | ExhibitorsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assigned_booths"]>



  export type assigned_boothsSelectScalar = {
    id?: boolean
    booth_id?: boolean
    assigned_to_id?: boolean
    assignedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type assigned_boothsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "booth_id" | "assigned_to_id" | "assignedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["assigned_booths"]>
  export type assigned_boothsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booth?: boolean | BoothsDefaultArgs<ExtArgs>
    assigned_to?: boolean | ExhibitorsDefaultArgs<ExtArgs>
  }

  export type $assigned_boothsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "assigned_booths"
    objects: {
      booth: Prisma.$BoothsPayload<ExtArgs>
      assigned_to: Prisma.$ExhibitorsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      booth_id: number
      assigned_to_id: number
      assignedAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["assigned_booths"]>
    composites: {}
  }

  type assigned_boothsGetPayload<S extends boolean | null | undefined | assigned_boothsDefaultArgs> = $Result.GetResult<Prisma.$assigned_boothsPayload, S>

  type assigned_boothsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<assigned_boothsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Assigned_boothsCountAggregateInputType | true
    }

  export interface assigned_boothsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['assigned_booths'], meta: { name: 'assigned_booths' } }
    /**
     * Find zero or one Assigned_booths that matches the filter.
     * @param {assigned_boothsFindUniqueArgs} args - Arguments to find a Assigned_booths
     * @example
     * // Get one Assigned_booths
     * const assigned_booths = await prisma.assigned_booths.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends assigned_boothsFindUniqueArgs>(args: SelectSubset<T, assigned_boothsFindUniqueArgs<ExtArgs>>): Prisma__assigned_boothsClient<$Result.GetResult<Prisma.$assigned_boothsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Assigned_booths that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {assigned_boothsFindUniqueOrThrowArgs} args - Arguments to find a Assigned_booths
     * @example
     * // Get one Assigned_booths
     * const assigned_booths = await prisma.assigned_booths.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends assigned_boothsFindUniqueOrThrowArgs>(args: SelectSubset<T, assigned_boothsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__assigned_boothsClient<$Result.GetResult<Prisma.$assigned_boothsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Assigned_booths that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {assigned_boothsFindFirstArgs} args - Arguments to find a Assigned_booths
     * @example
     * // Get one Assigned_booths
     * const assigned_booths = await prisma.assigned_booths.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends assigned_boothsFindFirstArgs>(args?: SelectSubset<T, assigned_boothsFindFirstArgs<ExtArgs>>): Prisma__assigned_boothsClient<$Result.GetResult<Prisma.$assigned_boothsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Assigned_booths that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {assigned_boothsFindFirstOrThrowArgs} args - Arguments to find a Assigned_booths
     * @example
     * // Get one Assigned_booths
     * const assigned_booths = await prisma.assigned_booths.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends assigned_boothsFindFirstOrThrowArgs>(args?: SelectSubset<T, assigned_boothsFindFirstOrThrowArgs<ExtArgs>>): Prisma__assigned_boothsClient<$Result.GetResult<Prisma.$assigned_boothsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Assigned_booths that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {assigned_boothsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Assigned_booths
     * const assigned_booths = await prisma.assigned_booths.findMany()
     * 
     * // Get first 10 Assigned_booths
     * const assigned_booths = await prisma.assigned_booths.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const assigned_boothsWithIdOnly = await prisma.assigned_booths.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends assigned_boothsFindManyArgs>(args?: SelectSubset<T, assigned_boothsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$assigned_boothsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Assigned_booths.
     * @param {assigned_boothsCreateArgs} args - Arguments to create a Assigned_booths.
     * @example
     * // Create one Assigned_booths
     * const Assigned_booths = await prisma.assigned_booths.create({
     *   data: {
     *     // ... data to create a Assigned_booths
     *   }
     * })
     * 
     */
    create<T extends assigned_boothsCreateArgs>(args: SelectSubset<T, assigned_boothsCreateArgs<ExtArgs>>): Prisma__assigned_boothsClient<$Result.GetResult<Prisma.$assigned_boothsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Assigned_booths.
     * @param {assigned_boothsCreateManyArgs} args - Arguments to create many Assigned_booths.
     * @example
     * // Create many Assigned_booths
     * const assigned_booths = await prisma.assigned_booths.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends assigned_boothsCreateManyArgs>(args?: SelectSubset<T, assigned_boothsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Assigned_booths.
     * @param {assigned_boothsDeleteArgs} args - Arguments to delete one Assigned_booths.
     * @example
     * // Delete one Assigned_booths
     * const Assigned_booths = await prisma.assigned_booths.delete({
     *   where: {
     *     // ... filter to delete one Assigned_booths
     *   }
     * })
     * 
     */
    delete<T extends assigned_boothsDeleteArgs>(args: SelectSubset<T, assigned_boothsDeleteArgs<ExtArgs>>): Prisma__assigned_boothsClient<$Result.GetResult<Prisma.$assigned_boothsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Assigned_booths.
     * @param {assigned_boothsUpdateArgs} args - Arguments to update one Assigned_booths.
     * @example
     * // Update one Assigned_booths
     * const assigned_booths = await prisma.assigned_booths.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends assigned_boothsUpdateArgs>(args: SelectSubset<T, assigned_boothsUpdateArgs<ExtArgs>>): Prisma__assigned_boothsClient<$Result.GetResult<Prisma.$assigned_boothsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Assigned_booths.
     * @param {assigned_boothsDeleteManyArgs} args - Arguments to filter Assigned_booths to delete.
     * @example
     * // Delete a few Assigned_booths
     * const { count } = await prisma.assigned_booths.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends assigned_boothsDeleteManyArgs>(args?: SelectSubset<T, assigned_boothsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assigned_booths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {assigned_boothsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Assigned_booths
     * const assigned_booths = await prisma.assigned_booths.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends assigned_boothsUpdateManyArgs>(args: SelectSubset<T, assigned_boothsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Assigned_booths.
     * @param {assigned_boothsUpsertArgs} args - Arguments to update or create a Assigned_booths.
     * @example
     * // Update or create a Assigned_booths
     * const assigned_booths = await prisma.assigned_booths.upsert({
     *   create: {
     *     // ... data to create a Assigned_booths
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Assigned_booths we want to update
     *   }
     * })
     */
    upsert<T extends assigned_boothsUpsertArgs>(args: SelectSubset<T, assigned_boothsUpsertArgs<ExtArgs>>): Prisma__assigned_boothsClient<$Result.GetResult<Prisma.$assigned_boothsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Assigned_booths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {assigned_boothsCountArgs} args - Arguments to filter Assigned_booths to count.
     * @example
     * // Count the number of Assigned_booths
     * const count = await prisma.assigned_booths.count({
     *   where: {
     *     // ... the filter for the Assigned_booths we want to count
     *   }
     * })
    **/
    count<T extends assigned_boothsCountArgs>(
      args?: Subset<T, assigned_boothsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Assigned_boothsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Assigned_booths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Assigned_boothsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Assigned_boothsAggregateArgs>(args: Subset<T, Assigned_boothsAggregateArgs>): Prisma.PrismaPromise<GetAssigned_boothsAggregateType<T>>

    /**
     * Group by Assigned_booths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {assigned_boothsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends assigned_boothsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: assigned_boothsGroupByArgs['orderBy'] }
        : { orderBy?: assigned_boothsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, assigned_boothsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssigned_boothsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the assigned_booths model
   */
  readonly fields: assigned_boothsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for assigned_booths.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__assigned_boothsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    booth<T extends BoothsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BoothsDefaultArgs<ExtArgs>>): Prisma__BoothsClient<$Result.GetResult<Prisma.$BoothsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    assigned_to<T extends ExhibitorsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExhibitorsDefaultArgs<ExtArgs>>): Prisma__ExhibitorsClient<$Result.GetResult<Prisma.$ExhibitorsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the assigned_booths model
   */
  interface assigned_boothsFieldRefs {
    readonly id: FieldRef<"assigned_booths", 'Int'>
    readonly booth_id: FieldRef<"assigned_booths", 'Int'>
    readonly assigned_to_id: FieldRef<"assigned_booths", 'Int'>
    readonly assignedAt: FieldRef<"assigned_booths", 'DateTime'>
    readonly createdAt: FieldRef<"assigned_booths", 'DateTime'>
    readonly updatedAt: FieldRef<"assigned_booths", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * assigned_booths findUnique
   */
  export type assigned_boothsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assigned_booths
     */
    select?: assigned_boothsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the assigned_booths
     */
    omit?: assigned_boothsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: assigned_boothsInclude<ExtArgs> | null
    /**
     * Filter, which assigned_booths to fetch.
     */
    where: assigned_boothsWhereUniqueInput
  }

  /**
   * assigned_booths findUniqueOrThrow
   */
  export type assigned_boothsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assigned_booths
     */
    select?: assigned_boothsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the assigned_booths
     */
    omit?: assigned_boothsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: assigned_boothsInclude<ExtArgs> | null
    /**
     * Filter, which assigned_booths to fetch.
     */
    where: assigned_boothsWhereUniqueInput
  }

  /**
   * assigned_booths findFirst
   */
  export type assigned_boothsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assigned_booths
     */
    select?: assigned_boothsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the assigned_booths
     */
    omit?: assigned_boothsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: assigned_boothsInclude<ExtArgs> | null
    /**
     * Filter, which assigned_booths to fetch.
     */
    where?: assigned_boothsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of assigned_booths to fetch.
     */
    orderBy?: assigned_boothsOrderByWithRelationInput | assigned_boothsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for assigned_booths.
     */
    cursor?: assigned_boothsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` assigned_booths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` assigned_booths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of assigned_booths.
     */
    distinct?: Assigned_boothsScalarFieldEnum | Assigned_boothsScalarFieldEnum[]
  }

  /**
   * assigned_booths findFirstOrThrow
   */
  export type assigned_boothsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assigned_booths
     */
    select?: assigned_boothsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the assigned_booths
     */
    omit?: assigned_boothsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: assigned_boothsInclude<ExtArgs> | null
    /**
     * Filter, which assigned_booths to fetch.
     */
    where?: assigned_boothsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of assigned_booths to fetch.
     */
    orderBy?: assigned_boothsOrderByWithRelationInput | assigned_boothsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for assigned_booths.
     */
    cursor?: assigned_boothsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` assigned_booths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` assigned_booths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of assigned_booths.
     */
    distinct?: Assigned_boothsScalarFieldEnum | Assigned_boothsScalarFieldEnum[]
  }

  /**
   * assigned_booths findMany
   */
  export type assigned_boothsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assigned_booths
     */
    select?: assigned_boothsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the assigned_booths
     */
    omit?: assigned_boothsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: assigned_boothsInclude<ExtArgs> | null
    /**
     * Filter, which assigned_booths to fetch.
     */
    where?: assigned_boothsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of assigned_booths to fetch.
     */
    orderBy?: assigned_boothsOrderByWithRelationInput | assigned_boothsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing assigned_booths.
     */
    cursor?: assigned_boothsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` assigned_booths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` assigned_booths.
     */
    skip?: number
    distinct?: Assigned_boothsScalarFieldEnum | Assigned_boothsScalarFieldEnum[]
  }

  /**
   * assigned_booths create
   */
  export type assigned_boothsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assigned_booths
     */
    select?: assigned_boothsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the assigned_booths
     */
    omit?: assigned_boothsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: assigned_boothsInclude<ExtArgs> | null
    /**
     * The data needed to create a assigned_booths.
     */
    data: XOR<assigned_boothsCreateInput, assigned_boothsUncheckedCreateInput>
  }

  /**
   * assigned_booths createMany
   */
  export type assigned_boothsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many assigned_booths.
     */
    data: assigned_boothsCreateManyInput | assigned_boothsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * assigned_booths update
   */
  export type assigned_boothsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assigned_booths
     */
    select?: assigned_boothsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the assigned_booths
     */
    omit?: assigned_boothsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: assigned_boothsInclude<ExtArgs> | null
    /**
     * The data needed to update a assigned_booths.
     */
    data: XOR<assigned_boothsUpdateInput, assigned_boothsUncheckedUpdateInput>
    /**
     * Choose, which assigned_booths to update.
     */
    where: assigned_boothsWhereUniqueInput
  }

  /**
   * assigned_booths updateMany
   */
  export type assigned_boothsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update assigned_booths.
     */
    data: XOR<assigned_boothsUpdateManyMutationInput, assigned_boothsUncheckedUpdateManyInput>
    /**
     * Filter which assigned_booths to update
     */
    where?: assigned_boothsWhereInput
    /**
     * Limit how many assigned_booths to update.
     */
    limit?: number
  }

  /**
   * assigned_booths upsert
   */
  export type assigned_boothsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assigned_booths
     */
    select?: assigned_boothsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the assigned_booths
     */
    omit?: assigned_boothsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: assigned_boothsInclude<ExtArgs> | null
    /**
     * The filter to search for the assigned_booths to update in case it exists.
     */
    where: assigned_boothsWhereUniqueInput
    /**
     * In case the assigned_booths found by the `where` argument doesn't exist, create a new assigned_booths with this data.
     */
    create: XOR<assigned_boothsCreateInput, assigned_boothsUncheckedCreateInput>
    /**
     * In case the assigned_booths was found with the provided `where` argument, update it with this data.
     */
    update: XOR<assigned_boothsUpdateInput, assigned_boothsUncheckedUpdateInput>
  }

  /**
   * assigned_booths delete
   */
  export type assigned_boothsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assigned_booths
     */
    select?: assigned_boothsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the assigned_booths
     */
    omit?: assigned_boothsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: assigned_boothsInclude<ExtArgs> | null
    /**
     * Filter which assigned_booths to delete.
     */
    where: assigned_boothsWhereUniqueInput
  }

  /**
   * assigned_booths deleteMany
   */
  export type assigned_boothsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which assigned_booths to delete
     */
    where?: assigned_boothsWhereInput
    /**
     * Limit how many assigned_booths to delete.
     */
    limit?: number
  }

  /**
   * assigned_booths without action
   */
  export type assigned_boothsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assigned_booths
     */
    select?: assigned_boothsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the assigned_booths
     */
    omit?: assigned_boothsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: assigned_boothsInclude<ExtArgs> | null
  }


  /**
   * Model EventPartnerPackages
   */

  export type AggregateEventPartnerPackages = {
    _count: EventPartnerPackagesCountAggregateOutputType | null
    _avg: EventPartnerPackagesAvgAggregateOutputType | null
    _sum: EventPartnerPackagesSumAggregateOutputType | null
    _min: EventPartnerPackagesMinAggregateOutputType | null
    _max: EventPartnerPackagesMaxAggregateOutputType | null
  }

  export type EventPartnerPackagesAvgAggregateOutputType = {
    id: number | null
    event_partner_id: number | null
    event_package_id: number | null
  }

  export type EventPartnerPackagesSumAggregateOutputType = {
    id: number | null
    event_partner_id: number | null
    event_package_id: number | null
  }

  export type EventPartnerPackagesMinAggregateOutputType = {
    id: number | null
    event_partner_id: number | null
    event_package_id: number | null
    payment_reference: string | null
    payment_status: $Enums.Status | null
    payment_method: string | null
    proof_of_payment: string | null
    assignedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventPartnerPackagesMaxAggregateOutputType = {
    id: number | null
    event_partner_id: number | null
    event_package_id: number | null
    payment_reference: string | null
    payment_status: $Enums.Status | null
    payment_method: string | null
    proof_of_payment: string | null
    assignedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventPartnerPackagesCountAggregateOutputType = {
    id: number
    event_partner_id: number
    event_package_id: number
    payment_reference: number
    payment_status: number
    payment_method: number
    proof_of_payment: number
    assignedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EventPartnerPackagesAvgAggregateInputType = {
    id?: true
    event_partner_id?: true
    event_package_id?: true
  }

  export type EventPartnerPackagesSumAggregateInputType = {
    id?: true
    event_partner_id?: true
    event_package_id?: true
  }

  export type EventPartnerPackagesMinAggregateInputType = {
    id?: true
    event_partner_id?: true
    event_package_id?: true
    payment_reference?: true
    payment_status?: true
    payment_method?: true
    proof_of_payment?: true
    assignedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventPartnerPackagesMaxAggregateInputType = {
    id?: true
    event_partner_id?: true
    event_package_id?: true
    payment_reference?: true
    payment_status?: true
    payment_method?: true
    proof_of_payment?: true
    assignedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventPartnerPackagesCountAggregateInputType = {
    id?: true
    event_partner_id?: true
    event_package_id?: true
    payment_reference?: true
    payment_status?: true
    payment_method?: true
    proof_of_payment?: true
    assignedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EventPartnerPackagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventPartnerPackages to aggregate.
     */
    where?: EventPartnerPackagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventPartnerPackages to fetch.
     */
    orderBy?: EventPartnerPackagesOrderByWithRelationInput | EventPartnerPackagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventPartnerPackagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventPartnerPackages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventPartnerPackages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EventPartnerPackages
    **/
    _count?: true | EventPartnerPackagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventPartnerPackagesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventPartnerPackagesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventPartnerPackagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventPartnerPackagesMaxAggregateInputType
  }

  export type GetEventPartnerPackagesAggregateType<T extends EventPartnerPackagesAggregateArgs> = {
        [P in keyof T & keyof AggregateEventPartnerPackages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventPartnerPackages[P]>
      : GetScalarType<T[P], AggregateEventPartnerPackages[P]>
  }




  export type EventPartnerPackagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventPartnerPackagesWhereInput
    orderBy?: EventPartnerPackagesOrderByWithAggregationInput | EventPartnerPackagesOrderByWithAggregationInput[]
    by: EventPartnerPackagesScalarFieldEnum[] | EventPartnerPackagesScalarFieldEnum
    having?: EventPartnerPackagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventPartnerPackagesCountAggregateInputType | true
    _avg?: EventPartnerPackagesAvgAggregateInputType
    _sum?: EventPartnerPackagesSumAggregateInputType
    _min?: EventPartnerPackagesMinAggregateInputType
    _max?: EventPartnerPackagesMaxAggregateInputType
  }

  export type EventPartnerPackagesGroupByOutputType = {
    id: number
    event_partner_id: number
    event_package_id: number
    payment_reference: string | null
    payment_status: $Enums.Status
    payment_method: string | null
    proof_of_payment: string | null
    assignedAt: Date
    createdAt: Date
    updatedAt: Date
    _count: EventPartnerPackagesCountAggregateOutputType | null
    _avg: EventPartnerPackagesAvgAggregateOutputType | null
    _sum: EventPartnerPackagesSumAggregateOutputType | null
    _min: EventPartnerPackagesMinAggregateOutputType | null
    _max: EventPartnerPackagesMaxAggregateOutputType | null
  }

  type GetEventPartnerPackagesGroupByPayload<T extends EventPartnerPackagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventPartnerPackagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventPartnerPackagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventPartnerPackagesGroupByOutputType[P]>
            : GetScalarType<T[P], EventPartnerPackagesGroupByOutputType[P]>
        }
      >
    >


  export type EventPartnerPackagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    event_partner_id?: boolean
    event_package_id?: boolean
    payment_reference?: boolean
    payment_status?: boolean
    payment_method?: boolean
    proof_of_payment?: boolean
    assignedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    event_partner?: boolean | EventPartnersDefaultArgs<ExtArgs>
    event_package?: boolean | EventPackagesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventPartnerPackages"]>



  export type EventPartnerPackagesSelectScalar = {
    id?: boolean
    event_partner_id?: boolean
    event_package_id?: boolean
    payment_reference?: boolean
    payment_status?: boolean
    payment_method?: boolean
    proof_of_payment?: boolean
    assignedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EventPartnerPackagesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "event_partner_id" | "event_package_id" | "payment_reference" | "payment_status" | "payment_method" | "proof_of_payment" | "assignedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["eventPartnerPackages"]>
  export type EventPartnerPackagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event_partner?: boolean | EventPartnersDefaultArgs<ExtArgs>
    event_package?: boolean | EventPackagesDefaultArgs<ExtArgs>
  }

  export type $EventPartnerPackagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EventPartnerPackages"
    objects: {
      event_partner: Prisma.$EventPartnersPayload<ExtArgs>
      event_package: Prisma.$EventPackagesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      event_partner_id: number
      event_package_id: number
      payment_reference: string | null
      payment_status: $Enums.Status
      payment_method: string | null
      proof_of_payment: string | null
      assignedAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["eventPartnerPackages"]>
    composites: {}
  }

  type EventPartnerPackagesGetPayload<S extends boolean | null | undefined | EventPartnerPackagesDefaultArgs> = $Result.GetResult<Prisma.$EventPartnerPackagesPayload, S>

  type EventPartnerPackagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventPartnerPackagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventPartnerPackagesCountAggregateInputType | true
    }

  export interface EventPartnerPackagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EventPartnerPackages'], meta: { name: 'EventPartnerPackages' } }
    /**
     * Find zero or one EventPartnerPackages that matches the filter.
     * @param {EventPartnerPackagesFindUniqueArgs} args - Arguments to find a EventPartnerPackages
     * @example
     * // Get one EventPartnerPackages
     * const eventPartnerPackages = await prisma.eventPartnerPackages.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventPartnerPackagesFindUniqueArgs>(args: SelectSubset<T, EventPartnerPackagesFindUniqueArgs<ExtArgs>>): Prisma__EventPartnerPackagesClient<$Result.GetResult<Prisma.$EventPartnerPackagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EventPartnerPackages that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventPartnerPackagesFindUniqueOrThrowArgs} args - Arguments to find a EventPartnerPackages
     * @example
     * // Get one EventPartnerPackages
     * const eventPartnerPackages = await prisma.eventPartnerPackages.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventPartnerPackagesFindUniqueOrThrowArgs>(args: SelectSubset<T, EventPartnerPackagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventPartnerPackagesClient<$Result.GetResult<Prisma.$EventPartnerPackagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventPartnerPackages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventPartnerPackagesFindFirstArgs} args - Arguments to find a EventPartnerPackages
     * @example
     * // Get one EventPartnerPackages
     * const eventPartnerPackages = await prisma.eventPartnerPackages.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventPartnerPackagesFindFirstArgs>(args?: SelectSubset<T, EventPartnerPackagesFindFirstArgs<ExtArgs>>): Prisma__EventPartnerPackagesClient<$Result.GetResult<Prisma.$EventPartnerPackagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventPartnerPackages that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventPartnerPackagesFindFirstOrThrowArgs} args - Arguments to find a EventPartnerPackages
     * @example
     * // Get one EventPartnerPackages
     * const eventPartnerPackages = await prisma.eventPartnerPackages.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventPartnerPackagesFindFirstOrThrowArgs>(args?: SelectSubset<T, EventPartnerPackagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventPartnerPackagesClient<$Result.GetResult<Prisma.$EventPartnerPackagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EventPartnerPackages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventPartnerPackagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventPartnerPackages
     * const eventPartnerPackages = await prisma.eventPartnerPackages.findMany()
     * 
     * // Get first 10 EventPartnerPackages
     * const eventPartnerPackages = await prisma.eventPartnerPackages.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventPartnerPackagesWithIdOnly = await prisma.eventPartnerPackages.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventPartnerPackagesFindManyArgs>(args?: SelectSubset<T, EventPartnerPackagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPartnerPackagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EventPartnerPackages.
     * @param {EventPartnerPackagesCreateArgs} args - Arguments to create a EventPartnerPackages.
     * @example
     * // Create one EventPartnerPackages
     * const EventPartnerPackages = await prisma.eventPartnerPackages.create({
     *   data: {
     *     // ... data to create a EventPartnerPackages
     *   }
     * })
     * 
     */
    create<T extends EventPartnerPackagesCreateArgs>(args: SelectSubset<T, EventPartnerPackagesCreateArgs<ExtArgs>>): Prisma__EventPartnerPackagesClient<$Result.GetResult<Prisma.$EventPartnerPackagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EventPartnerPackages.
     * @param {EventPartnerPackagesCreateManyArgs} args - Arguments to create many EventPartnerPackages.
     * @example
     * // Create many EventPartnerPackages
     * const eventPartnerPackages = await prisma.eventPartnerPackages.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventPartnerPackagesCreateManyArgs>(args?: SelectSubset<T, EventPartnerPackagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a EventPartnerPackages.
     * @param {EventPartnerPackagesDeleteArgs} args - Arguments to delete one EventPartnerPackages.
     * @example
     * // Delete one EventPartnerPackages
     * const EventPartnerPackages = await prisma.eventPartnerPackages.delete({
     *   where: {
     *     // ... filter to delete one EventPartnerPackages
     *   }
     * })
     * 
     */
    delete<T extends EventPartnerPackagesDeleteArgs>(args: SelectSubset<T, EventPartnerPackagesDeleteArgs<ExtArgs>>): Prisma__EventPartnerPackagesClient<$Result.GetResult<Prisma.$EventPartnerPackagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EventPartnerPackages.
     * @param {EventPartnerPackagesUpdateArgs} args - Arguments to update one EventPartnerPackages.
     * @example
     * // Update one EventPartnerPackages
     * const eventPartnerPackages = await prisma.eventPartnerPackages.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventPartnerPackagesUpdateArgs>(args: SelectSubset<T, EventPartnerPackagesUpdateArgs<ExtArgs>>): Prisma__EventPartnerPackagesClient<$Result.GetResult<Prisma.$EventPartnerPackagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EventPartnerPackages.
     * @param {EventPartnerPackagesDeleteManyArgs} args - Arguments to filter EventPartnerPackages to delete.
     * @example
     * // Delete a few EventPartnerPackages
     * const { count } = await prisma.eventPartnerPackages.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventPartnerPackagesDeleteManyArgs>(args?: SelectSubset<T, EventPartnerPackagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventPartnerPackages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventPartnerPackagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventPartnerPackages
     * const eventPartnerPackages = await prisma.eventPartnerPackages.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventPartnerPackagesUpdateManyArgs>(args: SelectSubset<T, EventPartnerPackagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one EventPartnerPackages.
     * @param {EventPartnerPackagesUpsertArgs} args - Arguments to update or create a EventPartnerPackages.
     * @example
     * // Update or create a EventPartnerPackages
     * const eventPartnerPackages = await prisma.eventPartnerPackages.upsert({
     *   create: {
     *     // ... data to create a EventPartnerPackages
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventPartnerPackages we want to update
     *   }
     * })
     */
    upsert<T extends EventPartnerPackagesUpsertArgs>(args: SelectSubset<T, EventPartnerPackagesUpsertArgs<ExtArgs>>): Prisma__EventPartnerPackagesClient<$Result.GetResult<Prisma.$EventPartnerPackagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EventPartnerPackages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventPartnerPackagesCountArgs} args - Arguments to filter EventPartnerPackages to count.
     * @example
     * // Count the number of EventPartnerPackages
     * const count = await prisma.eventPartnerPackages.count({
     *   where: {
     *     // ... the filter for the EventPartnerPackages we want to count
     *   }
     * })
    **/
    count<T extends EventPartnerPackagesCountArgs>(
      args?: Subset<T, EventPartnerPackagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventPartnerPackagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EventPartnerPackages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventPartnerPackagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventPartnerPackagesAggregateArgs>(args: Subset<T, EventPartnerPackagesAggregateArgs>): Prisma.PrismaPromise<GetEventPartnerPackagesAggregateType<T>>

    /**
     * Group by EventPartnerPackages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventPartnerPackagesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EventPartnerPackagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventPartnerPackagesGroupByArgs['orderBy'] }
        : { orderBy?: EventPartnerPackagesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EventPartnerPackagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventPartnerPackagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EventPartnerPackages model
   */
  readonly fields: EventPartnerPackagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EventPartnerPackages.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventPartnerPackagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event_partner<T extends EventPartnersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventPartnersDefaultArgs<ExtArgs>>): Prisma__EventPartnersClient<$Result.GetResult<Prisma.$EventPartnersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    event_package<T extends EventPackagesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventPackagesDefaultArgs<ExtArgs>>): Prisma__EventPackagesClient<$Result.GetResult<Prisma.$EventPackagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EventPartnerPackages model
   */
  interface EventPartnerPackagesFieldRefs {
    readonly id: FieldRef<"EventPartnerPackages", 'Int'>
    readonly event_partner_id: FieldRef<"EventPartnerPackages", 'Int'>
    readonly event_package_id: FieldRef<"EventPartnerPackages", 'Int'>
    readonly payment_reference: FieldRef<"EventPartnerPackages", 'String'>
    readonly payment_status: FieldRef<"EventPartnerPackages", 'Status'>
    readonly payment_method: FieldRef<"EventPartnerPackages", 'String'>
    readonly proof_of_payment: FieldRef<"EventPartnerPackages", 'String'>
    readonly assignedAt: FieldRef<"EventPartnerPackages", 'DateTime'>
    readonly createdAt: FieldRef<"EventPartnerPackages", 'DateTime'>
    readonly updatedAt: FieldRef<"EventPartnerPackages", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EventPartnerPackages findUnique
   */
  export type EventPartnerPackagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventPartnerPackages
     */
    select?: EventPartnerPackagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventPartnerPackages
     */
    omit?: EventPartnerPackagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventPartnerPackagesInclude<ExtArgs> | null
    /**
     * Filter, which EventPartnerPackages to fetch.
     */
    where: EventPartnerPackagesWhereUniqueInput
  }

  /**
   * EventPartnerPackages findUniqueOrThrow
   */
  export type EventPartnerPackagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventPartnerPackages
     */
    select?: EventPartnerPackagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventPartnerPackages
     */
    omit?: EventPartnerPackagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventPartnerPackagesInclude<ExtArgs> | null
    /**
     * Filter, which EventPartnerPackages to fetch.
     */
    where: EventPartnerPackagesWhereUniqueInput
  }

  /**
   * EventPartnerPackages findFirst
   */
  export type EventPartnerPackagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventPartnerPackages
     */
    select?: EventPartnerPackagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventPartnerPackages
     */
    omit?: EventPartnerPackagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventPartnerPackagesInclude<ExtArgs> | null
    /**
     * Filter, which EventPartnerPackages to fetch.
     */
    where?: EventPartnerPackagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventPartnerPackages to fetch.
     */
    orderBy?: EventPartnerPackagesOrderByWithRelationInput | EventPartnerPackagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventPartnerPackages.
     */
    cursor?: EventPartnerPackagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventPartnerPackages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventPartnerPackages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventPartnerPackages.
     */
    distinct?: EventPartnerPackagesScalarFieldEnum | EventPartnerPackagesScalarFieldEnum[]
  }

  /**
   * EventPartnerPackages findFirstOrThrow
   */
  export type EventPartnerPackagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventPartnerPackages
     */
    select?: EventPartnerPackagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventPartnerPackages
     */
    omit?: EventPartnerPackagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventPartnerPackagesInclude<ExtArgs> | null
    /**
     * Filter, which EventPartnerPackages to fetch.
     */
    where?: EventPartnerPackagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventPartnerPackages to fetch.
     */
    orderBy?: EventPartnerPackagesOrderByWithRelationInput | EventPartnerPackagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventPartnerPackages.
     */
    cursor?: EventPartnerPackagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventPartnerPackages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventPartnerPackages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventPartnerPackages.
     */
    distinct?: EventPartnerPackagesScalarFieldEnum | EventPartnerPackagesScalarFieldEnum[]
  }

  /**
   * EventPartnerPackages findMany
   */
  export type EventPartnerPackagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventPartnerPackages
     */
    select?: EventPartnerPackagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventPartnerPackages
     */
    omit?: EventPartnerPackagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventPartnerPackagesInclude<ExtArgs> | null
    /**
     * Filter, which EventPartnerPackages to fetch.
     */
    where?: EventPartnerPackagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventPartnerPackages to fetch.
     */
    orderBy?: EventPartnerPackagesOrderByWithRelationInput | EventPartnerPackagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EventPartnerPackages.
     */
    cursor?: EventPartnerPackagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventPartnerPackages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventPartnerPackages.
     */
    skip?: number
    distinct?: EventPartnerPackagesScalarFieldEnum | EventPartnerPackagesScalarFieldEnum[]
  }

  /**
   * EventPartnerPackages create
   */
  export type EventPartnerPackagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventPartnerPackages
     */
    select?: EventPartnerPackagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventPartnerPackages
     */
    omit?: EventPartnerPackagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventPartnerPackagesInclude<ExtArgs> | null
    /**
     * The data needed to create a EventPartnerPackages.
     */
    data: XOR<EventPartnerPackagesCreateInput, EventPartnerPackagesUncheckedCreateInput>
  }

  /**
   * EventPartnerPackages createMany
   */
  export type EventPartnerPackagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EventPartnerPackages.
     */
    data: EventPartnerPackagesCreateManyInput | EventPartnerPackagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EventPartnerPackages update
   */
  export type EventPartnerPackagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventPartnerPackages
     */
    select?: EventPartnerPackagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventPartnerPackages
     */
    omit?: EventPartnerPackagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventPartnerPackagesInclude<ExtArgs> | null
    /**
     * The data needed to update a EventPartnerPackages.
     */
    data: XOR<EventPartnerPackagesUpdateInput, EventPartnerPackagesUncheckedUpdateInput>
    /**
     * Choose, which EventPartnerPackages to update.
     */
    where: EventPartnerPackagesWhereUniqueInput
  }

  /**
   * EventPartnerPackages updateMany
   */
  export type EventPartnerPackagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EventPartnerPackages.
     */
    data: XOR<EventPartnerPackagesUpdateManyMutationInput, EventPartnerPackagesUncheckedUpdateManyInput>
    /**
     * Filter which EventPartnerPackages to update
     */
    where?: EventPartnerPackagesWhereInput
    /**
     * Limit how many EventPartnerPackages to update.
     */
    limit?: number
  }

  /**
   * EventPartnerPackages upsert
   */
  export type EventPartnerPackagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventPartnerPackages
     */
    select?: EventPartnerPackagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventPartnerPackages
     */
    omit?: EventPartnerPackagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventPartnerPackagesInclude<ExtArgs> | null
    /**
     * The filter to search for the EventPartnerPackages to update in case it exists.
     */
    where: EventPartnerPackagesWhereUniqueInput
    /**
     * In case the EventPartnerPackages found by the `where` argument doesn't exist, create a new EventPartnerPackages with this data.
     */
    create: XOR<EventPartnerPackagesCreateInput, EventPartnerPackagesUncheckedCreateInput>
    /**
     * In case the EventPartnerPackages was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventPartnerPackagesUpdateInput, EventPartnerPackagesUncheckedUpdateInput>
  }

  /**
   * EventPartnerPackages delete
   */
  export type EventPartnerPackagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventPartnerPackages
     */
    select?: EventPartnerPackagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventPartnerPackages
     */
    omit?: EventPartnerPackagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventPartnerPackagesInclude<ExtArgs> | null
    /**
     * Filter which EventPartnerPackages to delete.
     */
    where: EventPartnerPackagesWhereUniqueInput
  }

  /**
   * EventPartnerPackages deleteMany
   */
  export type EventPartnerPackagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventPartnerPackages to delete
     */
    where?: EventPartnerPackagesWhereInput
    /**
     * Limit how many EventPartnerPackages to delete.
     */
    limit?: number
  }

  /**
   * EventPartnerPackages without action
   */
  export type EventPartnerPackagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventPartnerPackages
     */
    select?: EventPartnerPackagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventPartnerPackages
     */
    omit?: EventPartnerPackagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventPartnerPackagesInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AdminScalarFieldEnum: {
    id: 'id',
    fullname: 'fullname',
    email: 'email',
    username: 'username',
    role: 'role',
    profile_image: 'profile_image',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    organization: 'organization',
    organization_short_code: 'organization_short_code',
    contact_person: 'contact_person',
    contact_person_email: 'contact_person_email',
    username: 'username',
    profile_image: 'profile_image',
    role: 'role',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const OrganizationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    abbreviation: 'abbreviation',
    type: 'type',
    parentId: 'parentId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrganizationScalarFieldEnum = (typeof OrganizationScalarFieldEnum)[keyof typeof OrganizationScalarFieldEnum]


  export const AttendeesScalarFieldEnum: {
    id: 'id',
    prefix: 'prefix',
    fullname: 'fullname',
    email: 'email',
    phone_number: 'phone_number',
    nin: 'nin',
    nin_verified: 'nin_verified',
    position: 'position',
    grade: 'grade',
    organization: 'organization',
    department: 'department',
    department_agency: 'department_agency',
    staff_id: 'staff_id',
    office_location: 'office_location',
    remark: 'remark',
    status: 'status',
    role: 'role',
    password: 'password',
    temporal_password: 'temporal_password',
    registeredAt: 'registeredAt',
    created_by_id: 'created_by_id',
    created_by_type: 'created_by_type',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AttendeesScalarFieldEnum = (typeof AttendeesScalarFieldEnum)[keyof typeof AttendeesScalarFieldEnum]


  export const BoothsScalarFieldEnum: {
    id: 'id',
    booth_number: 'booth_number',
    location: 'location',
    price: 'price',
    booth_size: 'booth_size',
    features: 'features',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BoothsScalarFieldEnum = (typeof BoothsScalarFieldEnum)[keyof typeof BoothsScalarFieldEnum]


  export const ExhibitorsScalarFieldEnum: {
    id: 'id',
    prefix: 'prefix',
    company_name: 'company_name',
    contact_person: 'contact_person',
    contact_email: 'contact_email',
    contact_phone: 'contact_phone',
    website: 'website',
    description: 'description',
    service_product_to_exhibit: 'service_product_to_exhibit',
    password: 'password',
    role: 'role',
    status: 'status',
    registeredAt: 'registeredAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ExhibitorsScalarFieldEnum = (typeof ExhibitorsScalarFieldEnum)[keyof typeof ExhibitorsScalarFieldEnum]


  export const EventPartnersScalarFieldEnum: {
    id: 'id',
    prefix: 'prefix',
    fullname: 'fullname',
    email: 'email',
    phone_number: 'phone_number',
    company_name: 'company_name',
    logo: 'logo',
    website: 'website',
    social_media: 'social_media',
    description: 'description',
    why_interested: 'why_interested',
    password: 'password',
    role: 'role',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EventPartnersScalarFieldEnum = (typeof EventPartnersScalarFieldEnum)[keyof typeof EventPartnersScalarFieldEnum]


  export const SpeakersScalarFieldEnum: {
    id: 'id',
    prefix: 'prefix',
    first_name: 'first_name',
    last_name: 'last_name',
    fullname: 'fullname',
    country: 'country',
    job_title: 'job_title',
    organization: 'organization',
    phone: 'phone',
    social_media: 'social_media',
    work_email: 'work_email',
    bio: 'bio',
    topic: 'topic',
    experience: 'experience',
    password: 'password',
    role: 'role',
    status: 'status',
    registeredAt: 'registeredAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SpeakersScalarFieldEnum = (typeof SpeakersScalarFieldEnum)[keyof typeof SpeakersScalarFieldEnum]


  export const EventPackagesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    price: 'price',
    features: 'features',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EventPackagesScalarFieldEnum = (typeof EventPackagesScalarFieldEnum)[keyof typeof EventPackagesScalarFieldEnum]


  export const SpeakerPackageScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    title: 'title',
    price: 'price',
    description: 'description',
    features: 'features',
    limitedText: 'limitedText',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SpeakerPackageScalarFieldEnum = (typeof SpeakerPackageScalarFieldEnum)[keyof typeof SpeakerPackageScalarFieldEnum]


  export const PartnerPackageScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    title: 'title',
    price: 'price',
    description: 'description',
    features: 'features',
    limitedText: 'limitedText',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PartnerPackageScalarFieldEnum = (typeof PartnerPackageScalarFieldEnum)[keyof typeof PartnerPackageScalarFieldEnum]


  export const Assigned_boothsScalarFieldEnum: {
    id: 'id',
    booth_id: 'booth_id',
    assigned_to_id: 'assigned_to_id',
    assignedAt: 'assignedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Assigned_boothsScalarFieldEnum = (typeof Assigned_boothsScalarFieldEnum)[keyof typeof Assigned_boothsScalarFieldEnum]


  export const EventPartnerPackagesScalarFieldEnum: {
    id: 'id',
    event_partner_id: 'event_partner_id',
    event_package_id: 'event_package_id',
    payment_reference: 'payment_reference',
    payment_status: 'payment_status',
    payment_method: 'payment_method',
    proof_of_payment: 'proof_of_payment',
    assignedAt: 'assignedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EventPartnerPackagesScalarFieldEnum = (typeof EventPartnerPackagesScalarFieldEnum)[keyof typeof EventPartnerPackagesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const AdminOrderByRelevanceFieldEnum: {
    fullname: 'fullname',
    email: 'email',
    username: 'username',
    profile_image: 'profile_image',
    password: 'password'
  };

  export type AdminOrderByRelevanceFieldEnum = (typeof AdminOrderByRelevanceFieldEnum)[keyof typeof AdminOrderByRelevanceFieldEnum]


  export const UsersOrderByRelevanceFieldEnum: {
    organization: 'organization',
    organization_short_code: 'organization_short_code',
    contact_person: 'contact_person',
    contact_person_email: 'contact_person_email',
    username: 'username',
    profile_image: 'profile_image',
    password: 'password'
  };

  export type UsersOrderByRelevanceFieldEnum = (typeof UsersOrderByRelevanceFieldEnum)[keyof typeof UsersOrderByRelevanceFieldEnum]


  export const OrganizationOrderByRelevanceFieldEnum: {
    name: 'name',
    abbreviation: 'abbreviation'
  };

  export type OrganizationOrderByRelevanceFieldEnum = (typeof OrganizationOrderByRelevanceFieldEnum)[keyof typeof OrganizationOrderByRelevanceFieldEnum]


  export const AttendeesOrderByRelevanceFieldEnum: {
    prefix: 'prefix',
    fullname: 'fullname',
    email: 'email',
    phone_number: 'phone_number',
    nin: 'nin',
    position: 'position',
    grade: 'grade',
    organization: 'organization',
    department: 'department',
    department_agency: 'department_agency',
    staff_id: 'staff_id',
    office_location: 'office_location',
    remark: 'remark',
    password: 'password'
  };

  export type AttendeesOrderByRelevanceFieldEnum = (typeof AttendeesOrderByRelevanceFieldEnum)[keyof typeof AttendeesOrderByRelevanceFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const BoothsOrderByRelevanceFieldEnum: {
    booth_number: 'booth_number',
    location: 'location',
    booth_size: 'booth_size'
  };

  export type BoothsOrderByRelevanceFieldEnum = (typeof BoothsOrderByRelevanceFieldEnum)[keyof typeof BoothsOrderByRelevanceFieldEnum]


  export const ExhibitorsOrderByRelevanceFieldEnum: {
    prefix: 'prefix',
    company_name: 'company_name',
    contact_person: 'contact_person',
    contact_email: 'contact_email',
    contact_phone: 'contact_phone',
    website: 'website',
    description: 'description',
    service_product_to_exhibit: 'service_product_to_exhibit',
    password: 'password'
  };

  export type ExhibitorsOrderByRelevanceFieldEnum = (typeof ExhibitorsOrderByRelevanceFieldEnum)[keyof typeof ExhibitorsOrderByRelevanceFieldEnum]


  export const EventPartnersOrderByRelevanceFieldEnum: {
    prefix: 'prefix',
    fullname: 'fullname',
    email: 'email',
    phone_number: 'phone_number',
    company_name: 'company_name',
    logo: 'logo',
    website: 'website',
    description: 'description',
    why_interested: 'why_interested',
    password: 'password'
  };

  export type EventPartnersOrderByRelevanceFieldEnum = (typeof EventPartnersOrderByRelevanceFieldEnum)[keyof typeof EventPartnersOrderByRelevanceFieldEnum]


  export const SpeakersOrderByRelevanceFieldEnum: {
    prefix: 'prefix',
    first_name: 'first_name',
    last_name: 'last_name',
    fullname: 'fullname',
    country: 'country',
    job_title: 'job_title',
    organization: 'organization',
    phone: 'phone',
    work_email: 'work_email',
    bio: 'bio',
    topic: 'topic',
    experience: 'experience',
    password: 'password'
  };

  export type SpeakersOrderByRelevanceFieldEnum = (typeof SpeakersOrderByRelevanceFieldEnum)[keyof typeof SpeakersOrderByRelevanceFieldEnum]


  export const EventPackagesOrderByRelevanceFieldEnum: {
    name: 'name',
    description: 'description'
  };

  export type EventPackagesOrderByRelevanceFieldEnum = (typeof EventPackagesOrderByRelevanceFieldEnum)[keyof typeof EventPackagesOrderByRelevanceFieldEnum]


  export const SpeakerPackageOrderByRelevanceFieldEnum: {
    slug: 'slug',
    title: 'title',
    description: 'description',
    limitedText: 'limitedText'
  };

  export type SpeakerPackageOrderByRelevanceFieldEnum = (typeof SpeakerPackageOrderByRelevanceFieldEnum)[keyof typeof SpeakerPackageOrderByRelevanceFieldEnum]


  export const PartnerPackageOrderByRelevanceFieldEnum: {
    slug: 'slug',
    title: 'title',
    description: 'description',
    limitedText: 'limitedText'
  };

  export type PartnerPackageOrderByRelevanceFieldEnum = (typeof PartnerPackageOrderByRelevanceFieldEnum)[keyof typeof PartnerPackageOrderByRelevanceFieldEnum]


  export const EventPartnerPackagesOrderByRelevanceFieldEnum: {
    payment_reference: 'payment_reference',
    payment_method: 'payment_method',
    proof_of_payment: 'proof_of_payment'
  };

  export type EventPartnerPackagesOrderByRelevanceFieldEnum = (typeof EventPartnerPackagesOrderByRelevanceFieldEnum)[keyof typeof EventPartnerPackagesOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'OrganizationType'
   */
  export type EnumOrganizationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrganizationType'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'CreatorType'
   */
  export type EnumCreatorTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CreatorType'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    
  /**
   * Deep Input Types
   */


  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    id?: IntFilter<"Admin"> | number
    fullname?: StringFilter<"Admin"> | string
    email?: StringFilter<"Admin"> | string
    username?: StringFilter<"Admin"> | string
    role?: EnumRoleFilter<"Admin"> | $Enums.Role
    profile_image?: StringNullableFilter<"Admin"> | string | null
    password?: StringFilter<"Admin"> | string
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    updatedAt?: DateTimeFilter<"Admin"> | Date | string
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    username?: SortOrder
    role?: SortOrder
    profile_image?: SortOrderInput | SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: AdminOrderByRelevanceInput
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    username?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    fullname?: StringFilter<"Admin"> | string
    role?: EnumRoleFilter<"Admin"> | $Enums.Role
    profile_image?: StringNullableFilter<"Admin"> | string | null
    password?: StringFilter<"Admin"> | string
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    updatedAt?: DateTimeFilter<"Admin"> | Date | string
  }, "id" | "email" | "username">

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    username?: SortOrder
    role?: SortOrder
    profile_image?: SortOrderInput | SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _avg?: AdminAvgOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
    _sum?: AdminSumOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Admin"> | number
    fullname?: StringWithAggregatesFilter<"Admin"> | string
    email?: StringWithAggregatesFilter<"Admin"> | string
    username?: StringWithAggregatesFilter<"Admin"> | string
    role?: EnumRoleWithAggregatesFilter<"Admin"> | $Enums.Role
    profile_image?: StringNullableWithAggregatesFilter<"Admin"> | string | null
    password?: StringWithAggregatesFilter<"Admin"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
  }

  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id?: IntFilter<"Users"> | number
    organization?: StringFilter<"Users"> | string
    organization_short_code?: StringFilter<"Users"> | string
    contact_person?: StringFilter<"Users"> | string
    contact_person_email?: StringFilter<"Users"> | string
    username?: StringFilter<"Users"> | string
    profile_image?: StringNullableFilter<"Users"> | string | null
    role?: EnumRoleFilter<"Users"> | $Enums.Role
    password?: StringFilter<"Users"> | string
    createdAt?: DateTimeFilter<"Users"> | Date | string
    updatedAt?: DateTimeFilter<"Users"> | Date | string
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    organization?: SortOrder
    organization_short_code?: SortOrder
    contact_person?: SortOrder
    contact_person_email?: SortOrder
    username?: SortOrder
    profile_image?: SortOrderInput | SortOrder
    role?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: UsersOrderByRelevanceInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    contact_person_email?: string
    username?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    organization?: StringFilter<"Users"> | string
    organization_short_code?: StringFilter<"Users"> | string
    contact_person?: StringFilter<"Users"> | string
    profile_image?: StringNullableFilter<"Users"> | string | null
    role?: EnumRoleFilter<"Users"> | $Enums.Role
    password?: StringFilter<"Users"> | string
    createdAt?: DateTimeFilter<"Users"> | Date | string
    updatedAt?: DateTimeFilter<"Users"> | Date | string
  }, "id" | "contact_person_email" | "username">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    organization?: SortOrder
    organization_short_code?: SortOrder
    contact_person?: SortOrder
    contact_person_email?: SortOrder
    username?: SortOrder
    profile_image?: SortOrderInput | SortOrder
    role?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _avg?: UsersAvgOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
    _sum?: UsersSumOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Users"> | number
    organization?: StringWithAggregatesFilter<"Users"> | string
    organization_short_code?: StringWithAggregatesFilter<"Users"> | string
    contact_person?: StringWithAggregatesFilter<"Users"> | string
    contact_person_email?: StringWithAggregatesFilter<"Users"> | string
    username?: StringWithAggregatesFilter<"Users"> | string
    profile_image?: StringNullableWithAggregatesFilter<"Users"> | string | null
    role?: EnumRoleWithAggregatesFilter<"Users"> | $Enums.Role
    password?: StringWithAggregatesFilter<"Users"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
  }

  export type OrganizationWhereInput = {
    AND?: OrganizationWhereInput | OrganizationWhereInput[]
    OR?: OrganizationWhereInput[]
    NOT?: OrganizationWhereInput | OrganizationWhereInput[]
    id?: IntFilter<"Organization"> | number
    name?: StringFilter<"Organization"> | string
    abbreviation?: StringNullableFilter<"Organization"> | string | null
    type?: EnumOrganizationTypeFilter<"Organization"> | $Enums.OrganizationType
    parentId?: IntNullableFilter<"Organization"> | number | null
    createdAt?: DateTimeFilter<"Organization"> | Date | string
    updatedAt?: DateTimeFilter<"Organization"> | Date | string
    parent?: XOR<OrganizationNullableScalarRelationFilter, OrganizationWhereInput> | null
    children?: OrganizationListRelationFilter
  }

  export type OrganizationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    abbreviation?: SortOrderInput | SortOrder
    type?: SortOrder
    parentId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parent?: OrganizationOrderByWithRelationInput
    children?: OrganizationOrderByRelationAggregateInput
    _relevance?: OrganizationOrderByRelevanceInput
  }

  export type OrganizationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    abbreviation?: string
    AND?: OrganizationWhereInput | OrganizationWhereInput[]
    OR?: OrganizationWhereInput[]
    NOT?: OrganizationWhereInput | OrganizationWhereInput[]
    name?: StringFilter<"Organization"> | string
    type?: EnumOrganizationTypeFilter<"Organization"> | $Enums.OrganizationType
    parentId?: IntNullableFilter<"Organization"> | number | null
    createdAt?: DateTimeFilter<"Organization"> | Date | string
    updatedAt?: DateTimeFilter<"Organization"> | Date | string
    parent?: XOR<OrganizationNullableScalarRelationFilter, OrganizationWhereInput> | null
    children?: OrganizationListRelationFilter
  }, "id" | "abbreviation">

  export type OrganizationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    abbreviation?: SortOrderInput | SortOrder
    type?: SortOrder
    parentId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrganizationCountOrderByAggregateInput
    _avg?: OrganizationAvgOrderByAggregateInput
    _max?: OrganizationMaxOrderByAggregateInput
    _min?: OrganizationMinOrderByAggregateInput
    _sum?: OrganizationSumOrderByAggregateInput
  }

  export type OrganizationScalarWhereWithAggregatesInput = {
    AND?: OrganizationScalarWhereWithAggregatesInput | OrganizationScalarWhereWithAggregatesInput[]
    OR?: OrganizationScalarWhereWithAggregatesInput[]
    NOT?: OrganizationScalarWhereWithAggregatesInput | OrganizationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Organization"> | number
    name?: StringWithAggregatesFilter<"Organization"> | string
    abbreviation?: StringNullableWithAggregatesFilter<"Organization"> | string | null
    type?: EnumOrganizationTypeWithAggregatesFilter<"Organization"> | $Enums.OrganizationType
    parentId?: IntNullableWithAggregatesFilter<"Organization"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Organization"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Organization"> | Date | string
  }

  export type AttendeesWhereInput = {
    AND?: AttendeesWhereInput | AttendeesWhereInput[]
    OR?: AttendeesWhereInput[]
    NOT?: AttendeesWhereInput | AttendeesWhereInput[]
    id?: IntFilter<"Attendees"> | number
    prefix?: StringNullableFilter<"Attendees"> | string | null
    fullname?: StringFilter<"Attendees"> | string
    email?: StringFilter<"Attendees"> | string
    phone_number?: StringFilter<"Attendees"> | string
    nin?: StringFilter<"Attendees"> | string
    nin_verified?: BoolFilter<"Attendees"> | boolean
    position?: StringFilter<"Attendees"> | string
    grade?: StringFilter<"Attendees"> | string
    organization?: StringFilter<"Attendees"> | string
    department?: StringFilter<"Attendees"> | string
    department_agency?: StringFilter<"Attendees"> | string
    staff_id?: StringNullableFilter<"Attendees"> | string | null
    office_location?: StringNullableFilter<"Attendees"> | string | null
    remark?: StringNullableFilter<"Attendees"> | string | null
    status?: EnumStatusFilter<"Attendees"> | $Enums.Status
    role?: EnumRoleFilter<"Attendees"> | $Enums.Role
    password?: StringFilter<"Attendees"> | string
    temporal_password?: BoolFilter<"Attendees"> | boolean
    registeredAt?: DateTimeFilter<"Attendees"> | Date | string
    created_by_id?: IntNullableFilter<"Attendees"> | number | null
    created_by_type?: EnumCreatorTypeNullableFilter<"Attendees"> | $Enums.CreatorType | null
    createdAt?: DateTimeFilter<"Attendees"> | Date | string
    updatedAt?: DateTimeFilter<"Attendees"> | Date | string
  }

  export type AttendeesOrderByWithRelationInput = {
    id?: SortOrder
    prefix?: SortOrderInput | SortOrder
    fullname?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    nin?: SortOrder
    nin_verified?: SortOrder
    position?: SortOrder
    grade?: SortOrder
    organization?: SortOrder
    department?: SortOrder
    department_agency?: SortOrder
    staff_id?: SortOrderInput | SortOrder
    office_location?: SortOrderInput | SortOrder
    remark?: SortOrderInput | SortOrder
    status?: SortOrder
    role?: SortOrder
    password?: SortOrder
    temporal_password?: SortOrder
    registeredAt?: SortOrder
    created_by_id?: SortOrderInput | SortOrder
    created_by_type?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: AttendeesOrderByRelevanceInput
  }

  export type AttendeesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    nin?: string
    AND?: AttendeesWhereInput | AttendeesWhereInput[]
    OR?: AttendeesWhereInput[]
    NOT?: AttendeesWhereInput | AttendeesWhereInput[]
    prefix?: StringNullableFilter<"Attendees"> | string | null
    fullname?: StringFilter<"Attendees"> | string
    phone_number?: StringFilter<"Attendees"> | string
    nin_verified?: BoolFilter<"Attendees"> | boolean
    position?: StringFilter<"Attendees"> | string
    grade?: StringFilter<"Attendees"> | string
    organization?: StringFilter<"Attendees"> | string
    department?: StringFilter<"Attendees"> | string
    department_agency?: StringFilter<"Attendees"> | string
    staff_id?: StringNullableFilter<"Attendees"> | string | null
    office_location?: StringNullableFilter<"Attendees"> | string | null
    remark?: StringNullableFilter<"Attendees"> | string | null
    status?: EnumStatusFilter<"Attendees"> | $Enums.Status
    role?: EnumRoleFilter<"Attendees"> | $Enums.Role
    password?: StringFilter<"Attendees"> | string
    temporal_password?: BoolFilter<"Attendees"> | boolean
    registeredAt?: DateTimeFilter<"Attendees"> | Date | string
    created_by_id?: IntNullableFilter<"Attendees"> | number | null
    created_by_type?: EnumCreatorTypeNullableFilter<"Attendees"> | $Enums.CreatorType | null
    createdAt?: DateTimeFilter<"Attendees"> | Date | string
    updatedAt?: DateTimeFilter<"Attendees"> | Date | string
  }, "id" | "email" | "nin">

  export type AttendeesOrderByWithAggregationInput = {
    id?: SortOrder
    prefix?: SortOrderInput | SortOrder
    fullname?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    nin?: SortOrder
    nin_verified?: SortOrder
    position?: SortOrder
    grade?: SortOrder
    organization?: SortOrder
    department?: SortOrder
    department_agency?: SortOrder
    staff_id?: SortOrderInput | SortOrder
    office_location?: SortOrderInput | SortOrder
    remark?: SortOrderInput | SortOrder
    status?: SortOrder
    role?: SortOrder
    password?: SortOrder
    temporal_password?: SortOrder
    registeredAt?: SortOrder
    created_by_id?: SortOrderInput | SortOrder
    created_by_type?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AttendeesCountOrderByAggregateInput
    _avg?: AttendeesAvgOrderByAggregateInput
    _max?: AttendeesMaxOrderByAggregateInput
    _min?: AttendeesMinOrderByAggregateInput
    _sum?: AttendeesSumOrderByAggregateInput
  }

  export type AttendeesScalarWhereWithAggregatesInput = {
    AND?: AttendeesScalarWhereWithAggregatesInput | AttendeesScalarWhereWithAggregatesInput[]
    OR?: AttendeesScalarWhereWithAggregatesInput[]
    NOT?: AttendeesScalarWhereWithAggregatesInput | AttendeesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Attendees"> | number
    prefix?: StringNullableWithAggregatesFilter<"Attendees"> | string | null
    fullname?: StringWithAggregatesFilter<"Attendees"> | string
    email?: StringWithAggregatesFilter<"Attendees"> | string
    phone_number?: StringWithAggregatesFilter<"Attendees"> | string
    nin?: StringWithAggregatesFilter<"Attendees"> | string
    nin_verified?: BoolWithAggregatesFilter<"Attendees"> | boolean
    position?: StringWithAggregatesFilter<"Attendees"> | string
    grade?: StringWithAggregatesFilter<"Attendees"> | string
    organization?: StringWithAggregatesFilter<"Attendees"> | string
    department?: StringWithAggregatesFilter<"Attendees"> | string
    department_agency?: StringWithAggregatesFilter<"Attendees"> | string
    staff_id?: StringNullableWithAggregatesFilter<"Attendees"> | string | null
    office_location?: StringNullableWithAggregatesFilter<"Attendees"> | string | null
    remark?: StringNullableWithAggregatesFilter<"Attendees"> | string | null
    status?: EnumStatusWithAggregatesFilter<"Attendees"> | $Enums.Status
    role?: EnumRoleWithAggregatesFilter<"Attendees"> | $Enums.Role
    password?: StringWithAggregatesFilter<"Attendees"> | string
    temporal_password?: BoolWithAggregatesFilter<"Attendees"> | boolean
    registeredAt?: DateTimeWithAggregatesFilter<"Attendees"> | Date | string
    created_by_id?: IntNullableWithAggregatesFilter<"Attendees"> | number | null
    created_by_type?: EnumCreatorTypeNullableWithAggregatesFilter<"Attendees"> | $Enums.CreatorType | null
    createdAt?: DateTimeWithAggregatesFilter<"Attendees"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Attendees"> | Date | string
  }

  export type BoothsWhereInput = {
    AND?: BoothsWhereInput | BoothsWhereInput[]
    OR?: BoothsWhereInput[]
    NOT?: BoothsWhereInput | BoothsWhereInput[]
    id?: IntFilter<"Booths"> | number
    booth_number?: StringFilter<"Booths"> | string
    location?: StringFilter<"Booths"> | string
    price?: FloatFilter<"Booths"> | number
    booth_size?: StringFilter<"Booths"> | string
    features?: JsonFilter<"Booths">
    status?: EnumStatusFilter<"Booths"> | $Enums.Status
    createdAt?: DateTimeFilter<"Booths"> | Date | string
    updatedAt?: DateTimeFilter<"Booths"> | Date | string
    assigned_booths?: Assigned_boothsListRelationFilter
  }

  export type BoothsOrderByWithRelationInput = {
    id?: SortOrder
    booth_number?: SortOrder
    location?: SortOrder
    price?: SortOrder
    booth_size?: SortOrder
    features?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    assigned_booths?: assigned_boothsOrderByRelationAggregateInput
    _relevance?: BoothsOrderByRelevanceInput
  }

  export type BoothsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    booth_number?: string
    AND?: BoothsWhereInput | BoothsWhereInput[]
    OR?: BoothsWhereInput[]
    NOT?: BoothsWhereInput | BoothsWhereInput[]
    location?: StringFilter<"Booths"> | string
    price?: FloatFilter<"Booths"> | number
    booth_size?: StringFilter<"Booths"> | string
    features?: JsonFilter<"Booths">
    status?: EnumStatusFilter<"Booths"> | $Enums.Status
    createdAt?: DateTimeFilter<"Booths"> | Date | string
    updatedAt?: DateTimeFilter<"Booths"> | Date | string
    assigned_booths?: Assigned_boothsListRelationFilter
  }, "id" | "booth_number">

  export type BoothsOrderByWithAggregationInput = {
    id?: SortOrder
    booth_number?: SortOrder
    location?: SortOrder
    price?: SortOrder
    booth_size?: SortOrder
    features?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BoothsCountOrderByAggregateInput
    _avg?: BoothsAvgOrderByAggregateInput
    _max?: BoothsMaxOrderByAggregateInput
    _min?: BoothsMinOrderByAggregateInput
    _sum?: BoothsSumOrderByAggregateInput
  }

  export type BoothsScalarWhereWithAggregatesInput = {
    AND?: BoothsScalarWhereWithAggregatesInput | BoothsScalarWhereWithAggregatesInput[]
    OR?: BoothsScalarWhereWithAggregatesInput[]
    NOT?: BoothsScalarWhereWithAggregatesInput | BoothsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Booths"> | number
    booth_number?: StringWithAggregatesFilter<"Booths"> | string
    location?: StringWithAggregatesFilter<"Booths"> | string
    price?: FloatWithAggregatesFilter<"Booths"> | number
    booth_size?: StringWithAggregatesFilter<"Booths"> | string
    features?: JsonWithAggregatesFilter<"Booths">
    status?: EnumStatusWithAggregatesFilter<"Booths"> | $Enums.Status
    createdAt?: DateTimeWithAggregatesFilter<"Booths"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Booths"> | Date | string
  }

  export type ExhibitorsWhereInput = {
    AND?: ExhibitorsWhereInput | ExhibitorsWhereInput[]
    OR?: ExhibitorsWhereInput[]
    NOT?: ExhibitorsWhereInput | ExhibitorsWhereInput[]
    id?: IntFilter<"Exhibitors"> | number
    prefix?: StringNullableFilter<"Exhibitors"> | string | null
    company_name?: StringFilter<"Exhibitors"> | string
    contact_person?: StringFilter<"Exhibitors"> | string
    contact_email?: StringFilter<"Exhibitors"> | string
    contact_phone?: StringFilter<"Exhibitors"> | string
    website?: StringNullableFilter<"Exhibitors"> | string | null
    description?: StringNullableFilter<"Exhibitors"> | string | null
    service_product_to_exhibit?: StringNullableFilter<"Exhibitors"> | string | null
    password?: StringFilter<"Exhibitors"> | string
    role?: EnumRoleFilter<"Exhibitors"> | $Enums.Role
    status?: EnumStatusFilter<"Exhibitors"> | $Enums.Status
    registeredAt?: DateTimeFilter<"Exhibitors"> | Date | string
    createdAt?: DateTimeFilter<"Exhibitors"> | Date | string
    updatedAt?: DateTimeFilter<"Exhibitors"> | Date | string
    assigned_booths?: Assigned_boothsListRelationFilter
  }

  export type ExhibitorsOrderByWithRelationInput = {
    id?: SortOrder
    prefix?: SortOrderInput | SortOrder
    company_name?: SortOrder
    contact_person?: SortOrder
    contact_email?: SortOrder
    contact_phone?: SortOrder
    website?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    service_product_to_exhibit?: SortOrderInput | SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    registeredAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    assigned_booths?: assigned_boothsOrderByRelationAggregateInput
    _relevance?: ExhibitorsOrderByRelevanceInput
  }

  export type ExhibitorsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    contact_email?: string
    AND?: ExhibitorsWhereInput | ExhibitorsWhereInput[]
    OR?: ExhibitorsWhereInput[]
    NOT?: ExhibitorsWhereInput | ExhibitorsWhereInput[]
    prefix?: StringNullableFilter<"Exhibitors"> | string | null
    company_name?: StringFilter<"Exhibitors"> | string
    contact_person?: StringFilter<"Exhibitors"> | string
    contact_phone?: StringFilter<"Exhibitors"> | string
    website?: StringNullableFilter<"Exhibitors"> | string | null
    description?: StringNullableFilter<"Exhibitors"> | string | null
    service_product_to_exhibit?: StringNullableFilter<"Exhibitors"> | string | null
    password?: StringFilter<"Exhibitors"> | string
    role?: EnumRoleFilter<"Exhibitors"> | $Enums.Role
    status?: EnumStatusFilter<"Exhibitors"> | $Enums.Status
    registeredAt?: DateTimeFilter<"Exhibitors"> | Date | string
    createdAt?: DateTimeFilter<"Exhibitors"> | Date | string
    updatedAt?: DateTimeFilter<"Exhibitors"> | Date | string
    assigned_booths?: Assigned_boothsListRelationFilter
  }, "id" | "contact_email">

  export type ExhibitorsOrderByWithAggregationInput = {
    id?: SortOrder
    prefix?: SortOrderInput | SortOrder
    company_name?: SortOrder
    contact_person?: SortOrder
    contact_email?: SortOrder
    contact_phone?: SortOrder
    website?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    service_product_to_exhibit?: SortOrderInput | SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    registeredAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ExhibitorsCountOrderByAggregateInput
    _avg?: ExhibitorsAvgOrderByAggregateInput
    _max?: ExhibitorsMaxOrderByAggregateInput
    _min?: ExhibitorsMinOrderByAggregateInput
    _sum?: ExhibitorsSumOrderByAggregateInput
  }

  export type ExhibitorsScalarWhereWithAggregatesInput = {
    AND?: ExhibitorsScalarWhereWithAggregatesInput | ExhibitorsScalarWhereWithAggregatesInput[]
    OR?: ExhibitorsScalarWhereWithAggregatesInput[]
    NOT?: ExhibitorsScalarWhereWithAggregatesInput | ExhibitorsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Exhibitors"> | number
    prefix?: StringNullableWithAggregatesFilter<"Exhibitors"> | string | null
    company_name?: StringWithAggregatesFilter<"Exhibitors"> | string
    contact_person?: StringWithAggregatesFilter<"Exhibitors"> | string
    contact_email?: StringWithAggregatesFilter<"Exhibitors"> | string
    contact_phone?: StringWithAggregatesFilter<"Exhibitors"> | string
    website?: StringNullableWithAggregatesFilter<"Exhibitors"> | string | null
    description?: StringNullableWithAggregatesFilter<"Exhibitors"> | string | null
    service_product_to_exhibit?: StringNullableWithAggregatesFilter<"Exhibitors"> | string | null
    password?: StringWithAggregatesFilter<"Exhibitors"> | string
    role?: EnumRoleWithAggregatesFilter<"Exhibitors"> | $Enums.Role
    status?: EnumStatusWithAggregatesFilter<"Exhibitors"> | $Enums.Status
    registeredAt?: DateTimeWithAggregatesFilter<"Exhibitors"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Exhibitors"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Exhibitors"> | Date | string
  }

  export type EventPartnersWhereInput = {
    AND?: EventPartnersWhereInput | EventPartnersWhereInput[]
    OR?: EventPartnersWhereInput[]
    NOT?: EventPartnersWhereInput | EventPartnersWhereInput[]
    id?: IntFilter<"EventPartners"> | number
    prefix?: StringNullableFilter<"EventPartners"> | string | null
    fullname?: StringFilter<"EventPartners"> | string
    email?: StringFilter<"EventPartners"> | string
    phone_number?: StringFilter<"EventPartners"> | string
    company_name?: StringFilter<"EventPartners"> | string
    logo?: StringFilter<"EventPartners"> | string
    website?: StringNullableFilter<"EventPartners"> | string | null
    social_media?: JsonNullableFilter<"EventPartners">
    description?: StringNullableFilter<"EventPartners"> | string | null
    why_interested?: StringNullableFilter<"EventPartners"> | string | null
    password?: StringFilter<"EventPartners"> | string
    role?: EnumRoleFilter<"EventPartners"> | $Enums.Role
    status?: EnumStatusFilter<"EventPartners"> | $Enums.Status
    createdAt?: DateTimeFilter<"EventPartners"> | Date | string
    updatedAt?: DateTimeFilter<"EventPartners"> | Date | string
    EventPartnerPackages?: EventPartnerPackagesListRelationFilter
  }

  export type EventPartnersOrderByWithRelationInput = {
    id?: SortOrder
    prefix?: SortOrderInput | SortOrder
    fullname?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    company_name?: SortOrder
    logo?: SortOrder
    website?: SortOrderInput | SortOrder
    social_media?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    why_interested?: SortOrderInput | SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    EventPartnerPackages?: EventPartnerPackagesOrderByRelationAggregateInput
    _relevance?: EventPartnersOrderByRelevanceInput
  }

  export type EventPartnersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: EventPartnersWhereInput | EventPartnersWhereInput[]
    OR?: EventPartnersWhereInput[]
    NOT?: EventPartnersWhereInput | EventPartnersWhereInput[]
    prefix?: StringNullableFilter<"EventPartners"> | string | null
    fullname?: StringFilter<"EventPartners"> | string
    phone_number?: StringFilter<"EventPartners"> | string
    company_name?: StringFilter<"EventPartners"> | string
    logo?: StringFilter<"EventPartners"> | string
    website?: StringNullableFilter<"EventPartners"> | string | null
    social_media?: JsonNullableFilter<"EventPartners">
    description?: StringNullableFilter<"EventPartners"> | string | null
    why_interested?: StringNullableFilter<"EventPartners"> | string | null
    password?: StringFilter<"EventPartners"> | string
    role?: EnumRoleFilter<"EventPartners"> | $Enums.Role
    status?: EnumStatusFilter<"EventPartners"> | $Enums.Status
    createdAt?: DateTimeFilter<"EventPartners"> | Date | string
    updatedAt?: DateTimeFilter<"EventPartners"> | Date | string
    EventPartnerPackages?: EventPartnerPackagesListRelationFilter
  }, "id" | "email">

  export type EventPartnersOrderByWithAggregationInput = {
    id?: SortOrder
    prefix?: SortOrderInput | SortOrder
    fullname?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    company_name?: SortOrder
    logo?: SortOrder
    website?: SortOrderInput | SortOrder
    social_media?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    why_interested?: SortOrderInput | SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EventPartnersCountOrderByAggregateInput
    _avg?: EventPartnersAvgOrderByAggregateInput
    _max?: EventPartnersMaxOrderByAggregateInput
    _min?: EventPartnersMinOrderByAggregateInput
    _sum?: EventPartnersSumOrderByAggregateInput
  }

  export type EventPartnersScalarWhereWithAggregatesInput = {
    AND?: EventPartnersScalarWhereWithAggregatesInput | EventPartnersScalarWhereWithAggregatesInput[]
    OR?: EventPartnersScalarWhereWithAggregatesInput[]
    NOT?: EventPartnersScalarWhereWithAggregatesInput | EventPartnersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"EventPartners"> | number
    prefix?: StringNullableWithAggregatesFilter<"EventPartners"> | string | null
    fullname?: StringWithAggregatesFilter<"EventPartners"> | string
    email?: StringWithAggregatesFilter<"EventPartners"> | string
    phone_number?: StringWithAggregatesFilter<"EventPartners"> | string
    company_name?: StringWithAggregatesFilter<"EventPartners"> | string
    logo?: StringWithAggregatesFilter<"EventPartners"> | string
    website?: StringNullableWithAggregatesFilter<"EventPartners"> | string | null
    social_media?: JsonNullableWithAggregatesFilter<"EventPartners">
    description?: StringNullableWithAggregatesFilter<"EventPartners"> | string | null
    why_interested?: StringNullableWithAggregatesFilter<"EventPartners"> | string | null
    password?: StringWithAggregatesFilter<"EventPartners"> | string
    role?: EnumRoleWithAggregatesFilter<"EventPartners"> | $Enums.Role
    status?: EnumStatusWithAggregatesFilter<"EventPartners"> | $Enums.Status
    createdAt?: DateTimeWithAggregatesFilter<"EventPartners"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"EventPartners"> | Date | string
  }

  export type SpeakersWhereInput = {
    AND?: SpeakersWhereInput | SpeakersWhereInput[]
    OR?: SpeakersWhereInput[]
    NOT?: SpeakersWhereInput | SpeakersWhereInput[]
    id?: IntFilter<"Speakers"> | number
    prefix?: StringNullableFilter<"Speakers"> | string | null
    first_name?: StringFilter<"Speakers"> | string
    last_name?: StringFilter<"Speakers"> | string
    fullname?: StringFilter<"Speakers"> | string
    country?: StringFilter<"Speakers"> | string
    job_title?: StringFilter<"Speakers"> | string
    organization?: StringFilter<"Speakers"> | string
    phone?: StringFilter<"Speakers"> | string
    social_media?: JsonNullableFilter<"Speakers">
    work_email?: StringFilter<"Speakers"> | string
    bio?: StringFilter<"Speakers"> | string
    topic?: StringFilter<"Speakers"> | string
    experience?: StringNullableFilter<"Speakers"> | string | null
    password?: StringFilter<"Speakers"> | string
    role?: EnumRoleFilter<"Speakers"> | $Enums.Role
    status?: EnumStatusFilter<"Speakers"> | $Enums.Status
    registeredAt?: DateTimeFilter<"Speakers"> | Date | string
    createdAt?: DateTimeFilter<"Speakers"> | Date | string
    updatedAt?: DateTimeFilter<"Speakers"> | Date | string
  }

  export type SpeakersOrderByWithRelationInput = {
    id?: SortOrder
    prefix?: SortOrderInput | SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    fullname?: SortOrder
    country?: SortOrder
    job_title?: SortOrder
    organization?: SortOrder
    phone?: SortOrder
    social_media?: SortOrderInput | SortOrder
    work_email?: SortOrder
    bio?: SortOrder
    topic?: SortOrder
    experience?: SortOrderInput | SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    registeredAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: SpeakersOrderByRelevanceInput
  }

  export type SpeakersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    work_email?: string
    AND?: SpeakersWhereInput | SpeakersWhereInput[]
    OR?: SpeakersWhereInput[]
    NOT?: SpeakersWhereInput | SpeakersWhereInput[]
    prefix?: StringNullableFilter<"Speakers"> | string | null
    first_name?: StringFilter<"Speakers"> | string
    last_name?: StringFilter<"Speakers"> | string
    fullname?: StringFilter<"Speakers"> | string
    country?: StringFilter<"Speakers"> | string
    job_title?: StringFilter<"Speakers"> | string
    organization?: StringFilter<"Speakers"> | string
    phone?: StringFilter<"Speakers"> | string
    social_media?: JsonNullableFilter<"Speakers">
    bio?: StringFilter<"Speakers"> | string
    topic?: StringFilter<"Speakers"> | string
    experience?: StringNullableFilter<"Speakers"> | string | null
    password?: StringFilter<"Speakers"> | string
    role?: EnumRoleFilter<"Speakers"> | $Enums.Role
    status?: EnumStatusFilter<"Speakers"> | $Enums.Status
    registeredAt?: DateTimeFilter<"Speakers"> | Date | string
    createdAt?: DateTimeFilter<"Speakers"> | Date | string
    updatedAt?: DateTimeFilter<"Speakers"> | Date | string
  }, "id" | "work_email">

  export type SpeakersOrderByWithAggregationInput = {
    id?: SortOrder
    prefix?: SortOrderInput | SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    fullname?: SortOrder
    country?: SortOrder
    job_title?: SortOrder
    organization?: SortOrder
    phone?: SortOrder
    social_media?: SortOrderInput | SortOrder
    work_email?: SortOrder
    bio?: SortOrder
    topic?: SortOrder
    experience?: SortOrderInput | SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    registeredAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SpeakersCountOrderByAggregateInput
    _avg?: SpeakersAvgOrderByAggregateInput
    _max?: SpeakersMaxOrderByAggregateInput
    _min?: SpeakersMinOrderByAggregateInput
    _sum?: SpeakersSumOrderByAggregateInput
  }

  export type SpeakersScalarWhereWithAggregatesInput = {
    AND?: SpeakersScalarWhereWithAggregatesInput | SpeakersScalarWhereWithAggregatesInput[]
    OR?: SpeakersScalarWhereWithAggregatesInput[]
    NOT?: SpeakersScalarWhereWithAggregatesInput | SpeakersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Speakers"> | number
    prefix?: StringNullableWithAggregatesFilter<"Speakers"> | string | null
    first_name?: StringWithAggregatesFilter<"Speakers"> | string
    last_name?: StringWithAggregatesFilter<"Speakers"> | string
    fullname?: StringWithAggregatesFilter<"Speakers"> | string
    country?: StringWithAggregatesFilter<"Speakers"> | string
    job_title?: StringWithAggregatesFilter<"Speakers"> | string
    organization?: StringWithAggregatesFilter<"Speakers"> | string
    phone?: StringWithAggregatesFilter<"Speakers"> | string
    social_media?: JsonNullableWithAggregatesFilter<"Speakers">
    work_email?: StringWithAggregatesFilter<"Speakers"> | string
    bio?: StringWithAggregatesFilter<"Speakers"> | string
    topic?: StringWithAggregatesFilter<"Speakers"> | string
    experience?: StringNullableWithAggregatesFilter<"Speakers"> | string | null
    password?: StringWithAggregatesFilter<"Speakers"> | string
    role?: EnumRoleWithAggregatesFilter<"Speakers"> | $Enums.Role
    status?: EnumStatusWithAggregatesFilter<"Speakers"> | $Enums.Status
    registeredAt?: DateTimeWithAggregatesFilter<"Speakers"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Speakers"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Speakers"> | Date | string
  }

  export type EventPackagesWhereInput = {
    AND?: EventPackagesWhereInput | EventPackagesWhereInput[]
    OR?: EventPackagesWhereInput[]
    NOT?: EventPackagesWhereInput | EventPackagesWhereInput[]
    id?: IntFilter<"EventPackages"> | number
    name?: StringFilter<"EventPackages"> | string
    description?: StringFilter<"EventPackages"> | string
    price?: FloatFilter<"EventPackages"> | number
    features?: JsonFilter<"EventPackages">
    createdAt?: DateTimeFilter<"EventPackages"> | Date | string
    updatedAt?: DateTimeFilter<"EventPackages"> | Date | string
    EventPartnerPackages?: EventPartnerPackagesListRelationFilter
  }

  export type EventPackagesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    features?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    EventPartnerPackages?: EventPartnerPackagesOrderByRelationAggregateInput
    _relevance?: EventPackagesOrderByRelevanceInput
  }

  export type EventPackagesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EventPackagesWhereInput | EventPackagesWhereInput[]
    OR?: EventPackagesWhereInput[]
    NOT?: EventPackagesWhereInput | EventPackagesWhereInput[]
    name?: StringFilter<"EventPackages"> | string
    description?: StringFilter<"EventPackages"> | string
    price?: FloatFilter<"EventPackages"> | number
    features?: JsonFilter<"EventPackages">
    createdAt?: DateTimeFilter<"EventPackages"> | Date | string
    updatedAt?: DateTimeFilter<"EventPackages"> | Date | string
    EventPartnerPackages?: EventPartnerPackagesListRelationFilter
  }, "id">

  export type EventPackagesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    features?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EventPackagesCountOrderByAggregateInput
    _avg?: EventPackagesAvgOrderByAggregateInput
    _max?: EventPackagesMaxOrderByAggregateInput
    _min?: EventPackagesMinOrderByAggregateInput
    _sum?: EventPackagesSumOrderByAggregateInput
  }

  export type EventPackagesScalarWhereWithAggregatesInput = {
    AND?: EventPackagesScalarWhereWithAggregatesInput | EventPackagesScalarWhereWithAggregatesInput[]
    OR?: EventPackagesScalarWhereWithAggregatesInput[]
    NOT?: EventPackagesScalarWhereWithAggregatesInput | EventPackagesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"EventPackages"> | number
    name?: StringWithAggregatesFilter<"EventPackages"> | string
    description?: StringWithAggregatesFilter<"EventPackages"> | string
    price?: FloatWithAggregatesFilter<"EventPackages"> | number
    features?: JsonWithAggregatesFilter<"EventPackages">
    createdAt?: DateTimeWithAggregatesFilter<"EventPackages"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"EventPackages"> | Date | string
  }

  export type SpeakerPackageWhereInput = {
    AND?: SpeakerPackageWhereInput | SpeakerPackageWhereInput[]
    OR?: SpeakerPackageWhereInput[]
    NOT?: SpeakerPackageWhereInput | SpeakerPackageWhereInput[]
    id?: IntFilter<"SpeakerPackage"> | number
    slug?: StringFilter<"SpeakerPackage"> | string
    title?: StringFilter<"SpeakerPackage"> | string
    price?: FloatFilter<"SpeakerPackage"> | number
    description?: StringNullableFilter<"SpeakerPackage"> | string | null
    features?: JsonFilter<"SpeakerPackage">
    limitedText?: StringNullableFilter<"SpeakerPackage"> | string | null
    createdAt?: DateTimeFilter<"SpeakerPackage"> | Date | string
    updatedAt?: DateTimeFilter<"SpeakerPackage"> | Date | string
  }

  export type SpeakerPackageOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    price?: SortOrder
    description?: SortOrderInput | SortOrder
    features?: SortOrder
    limitedText?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: SpeakerPackageOrderByRelevanceInput
  }

  export type SpeakerPackageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug?: string
    AND?: SpeakerPackageWhereInput | SpeakerPackageWhereInput[]
    OR?: SpeakerPackageWhereInput[]
    NOT?: SpeakerPackageWhereInput | SpeakerPackageWhereInput[]
    title?: StringFilter<"SpeakerPackage"> | string
    price?: FloatFilter<"SpeakerPackage"> | number
    description?: StringNullableFilter<"SpeakerPackage"> | string | null
    features?: JsonFilter<"SpeakerPackage">
    limitedText?: StringNullableFilter<"SpeakerPackage"> | string | null
    createdAt?: DateTimeFilter<"SpeakerPackage"> | Date | string
    updatedAt?: DateTimeFilter<"SpeakerPackage"> | Date | string
  }, "id" | "slug">

  export type SpeakerPackageOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    price?: SortOrder
    description?: SortOrderInput | SortOrder
    features?: SortOrder
    limitedText?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SpeakerPackageCountOrderByAggregateInput
    _avg?: SpeakerPackageAvgOrderByAggregateInput
    _max?: SpeakerPackageMaxOrderByAggregateInput
    _min?: SpeakerPackageMinOrderByAggregateInput
    _sum?: SpeakerPackageSumOrderByAggregateInput
  }

  export type SpeakerPackageScalarWhereWithAggregatesInput = {
    AND?: SpeakerPackageScalarWhereWithAggregatesInput | SpeakerPackageScalarWhereWithAggregatesInput[]
    OR?: SpeakerPackageScalarWhereWithAggregatesInput[]
    NOT?: SpeakerPackageScalarWhereWithAggregatesInput | SpeakerPackageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SpeakerPackage"> | number
    slug?: StringWithAggregatesFilter<"SpeakerPackage"> | string
    title?: StringWithAggregatesFilter<"SpeakerPackage"> | string
    price?: FloatWithAggregatesFilter<"SpeakerPackage"> | number
    description?: StringNullableWithAggregatesFilter<"SpeakerPackage"> | string | null
    features?: JsonWithAggregatesFilter<"SpeakerPackage">
    limitedText?: StringNullableWithAggregatesFilter<"SpeakerPackage"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"SpeakerPackage"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SpeakerPackage"> | Date | string
  }

  export type PartnerPackageWhereInput = {
    AND?: PartnerPackageWhereInput | PartnerPackageWhereInput[]
    OR?: PartnerPackageWhereInput[]
    NOT?: PartnerPackageWhereInput | PartnerPackageWhereInput[]
    id?: IntFilter<"PartnerPackage"> | number
    slug?: StringFilter<"PartnerPackage"> | string
    title?: StringFilter<"PartnerPackage"> | string
    price?: FloatFilter<"PartnerPackage"> | number
    description?: StringNullableFilter<"PartnerPackage"> | string | null
    features?: JsonFilter<"PartnerPackage">
    limitedText?: StringNullableFilter<"PartnerPackage"> | string | null
    createdAt?: DateTimeFilter<"PartnerPackage"> | Date | string
    updatedAt?: DateTimeFilter<"PartnerPackage"> | Date | string
  }

  export type PartnerPackageOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    price?: SortOrder
    description?: SortOrderInput | SortOrder
    features?: SortOrder
    limitedText?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: PartnerPackageOrderByRelevanceInput
  }

  export type PartnerPackageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug?: string
    AND?: PartnerPackageWhereInput | PartnerPackageWhereInput[]
    OR?: PartnerPackageWhereInput[]
    NOT?: PartnerPackageWhereInput | PartnerPackageWhereInput[]
    title?: StringFilter<"PartnerPackage"> | string
    price?: FloatFilter<"PartnerPackage"> | number
    description?: StringNullableFilter<"PartnerPackage"> | string | null
    features?: JsonFilter<"PartnerPackage">
    limitedText?: StringNullableFilter<"PartnerPackage"> | string | null
    createdAt?: DateTimeFilter<"PartnerPackage"> | Date | string
    updatedAt?: DateTimeFilter<"PartnerPackage"> | Date | string
  }, "id" | "slug">

  export type PartnerPackageOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    price?: SortOrder
    description?: SortOrderInput | SortOrder
    features?: SortOrder
    limitedText?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PartnerPackageCountOrderByAggregateInput
    _avg?: PartnerPackageAvgOrderByAggregateInput
    _max?: PartnerPackageMaxOrderByAggregateInput
    _min?: PartnerPackageMinOrderByAggregateInput
    _sum?: PartnerPackageSumOrderByAggregateInput
  }

  export type PartnerPackageScalarWhereWithAggregatesInput = {
    AND?: PartnerPackageScalarWhereWithAggregatesInput | PartnerPackageScalarWhereWithAggregatesInput[]
    OR?: PartnerPackageScalarWhereWithAggregatesInput[]
    NOT?: PartnerPackageScalarWhereWithAggregatesInput | PartnerPackageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PartnerPackage"> | number
    slug?: StringWithAggregatesFilter<"PartnerPackage"> | string
    title?: StringWithAggregatesFilter<"PartnerPackage"> | string
    price?: FloatWithAggregatesFilter<"PartnerPackage"> | number
    description?: StringNullableWithAggregatesFilter<"PartnerPackage"> | string | null
    features?: JsonWithAggregatesFilter<"PartnerPackage">
    limitedText?: StringNullableWithAggregatesFilter<"PartnerPackage"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PartnerPackage"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PartnerPackage"> | Date | string
  }

  export type assigned_boothsWhereInput = {
    AND?: assigned_boothsWhereInput | assigned_boothsWhereInput[]
    OR?: assigned_boothsWhereInput[]
    NOT?: assigned_boothsWhereInput | assigned_boothsWhereInput[]
    id?: IntFilter<"assigned_booths"> | number
    booth_id?: IntFilter<"assigned_booths"> | number
    assigned_to_id?: IntFilter<"assigned_booths"> | number
    assignedAt?: DateTimeFilter<"assigned_booths"> | Date | string
    createdAt?: DateTimeFilter<"assigned_booths"> | Date | string
    updatedAt?: DateTimeFilter<"assigned_booths"> | Date | string
    booth?: XOR<BoothsScalarRelationFilter, BoothsWhereInput>
    assigned_to?: XOR<ExhibitorsScalarRelationFilter, ExhibitorsWhereInput>
  }

  export type assigned_boothsOrderByWithRelationInput = {
    id?: SortOrder
    booth_id?: SortOrder
    assigned_to_id?: SortOrder
    assignedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    booth?: BoothsOrderByWithRelationInput
    assigned_to?: ExhibitorsOrderByWithRelationInput
  }

  export type assigned_boothsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    booth_id?: number
    AND?: assigned_boothsWhereInput | assigned_boothsWhereInput[]
    OR?: assigned_boothsWhereInput[]
    NOT?: assigned_boothsWhereInput | assigned_boothsWhereInput[]
    assigned_to_id?: IntFilter<"assigned_booths"> | number
    assignedAt?: DateTimeFilter<"assigned_booths"> | Date | string
    createdAt?: DateTimeFilter<"assigned_booths"> | Date | string
    updatedAt?: DateTimeFilter<"assigned_booths"> | Date | string
    booth?: XOR<BoothsScalarRelationFilter, BoothsWhereInput>
    assigned_to?: XOR<ExhibitorsScalarRelationFilter, ExhibitorsWhereInput>
  }, "id" | "booth_id">

  export type assigned_boothsOrderByWithAggregationInput = {
    id?: SortOrder
    booth_id?: SortOrder
    assigned_to_id?: SortOrder
    assignedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: assigned_boothsCountOrderByAggregateInput
    _avg?: assigned_boothsAvgOrderByAggregateInput
    _max?: assigned_boothsMaxOrderByAggregateInput
    _min?: assigned_boothsMinOrderByAggregateInput
    _sum?: assigned_boothsSumOrderByAggregateInput
  }

  export type assigned_boothsScalarWhereWithAggregatesInput = {
    AND?: assigned_boothsScalarWhereWithAggregatesInput | assigned_boothsScalarWhereWithAggregatesInput[]
    OR?: assigned_boothsScalarWhereWithAggregatesInput[]
    NOT?: assigned_boothsScalarWhereWithAggregatesInput | assigned_boothsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"assigned_booths"> | number
    booth_id?: IntWithAggregatesFilter<"assigned_booths"> | number
    assigned_to_id?: IntWithAggregatesFilter<"assigned_booths"> | number
    assignedAt?: DateTimeWithAggregatesFilter<"assigned_booths"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"assigned_booths"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"assigned_booths"> | Date | string
  }

  export type EventPartnerPackagesWhereInput = {
    AND?: EventPartnerPackagesWhereInput | EventPartnerPackagesWhereInput[]
    OR?: EventPartnerPackagesWhereInput[]
    NOT?: EventPartnerPackagesWhereInput | EventPartnerPackagesWhereInput[]
    id?: IntFilter<"EventPartnerPackages"> | number
    event_partner_id?: IntFilter<"EventPartnerPackages"> | number
    event_package_id?: IntFilter<"EventPartnerPackages"> | number
    payment_reference?: StringNullableFilter<"EventPartnerPackages"> | string | null
    payment_status?: EnumStatusFilter<"EventPartnerPackages"> | $Enums.Status
    payment_method?: StringNullableFilter<"EventPartnerPackages"> | string | null
    proof_of_payment?: StringNullableFilter<"EventPartnerPackages"> | string | null
    assignedAt?: DateTimeFilter<"EventPartnerPackages"> | Date | string
    createdAt?: DateTimeFilter<"EventPartnerPackages"> | Date | string
    updatedAt?: DateTimeFilter<"EventPartnerPackages"> | Date | string
    event_partner?: XOR<EventPartnersScalarRelationFilter, EventPartnersWhereInput>
    event_package?: XOR<EventPackagesScalarRelationFilter, EventPackagesWhereInput>
  }

  export type EventPartnerPackagesOrderByWithRelationInput = {
    id?: SortOrder
    event_partner_id?: SortOrder
    event_package_id?: SortOrder
    payment_reference?: SortOrderInput | SortOrder
    payment_status?: SortOrder
    payment_method?: SortOrderInput | SortOrder
    proof_of_payment?: SortOrderInput | SortOrder
    assignedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    event_partner?: EventPartnersOrderByWithRelationInput
    event_package?: EventPackagesOrderByWithRelationInput
    _relevance?: EventPartnerPackagesOrderByRelevanceInput
  }

  export type EventPartnerPackagesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EventPartnerPackagesWhereInput | EventPartnerPackagesWhereInput[]
    OR?: EventPartnerPackagesWhereInput[]
    NOT?: EventPartnerPackagesWhereInput | EventPartnerPackagesWhereInput[]
    event_partner_id?: IntFilter<"EventPartnerPackages"> | number
    event_package_id?: IntFilter<"EventPartnerPackages"> | number
    payment_reference?: StringNullableFilter<"EventPartnerPackages"> | string | null
    payment_status?: EnumStatusFilter<"EventPartnerPackages"> | $Enums.Status
    payment_method?: StringNullableFilter<"EventPartnerPackages"> | string | null
    proof_of_payment?: StringNullableFilter<"EventPartnerPackages"> | string | null
    assignedAt?: DateTimeFilter<"EventPartnerPackages"> | Date | string
    createdAt?: DateTimeFilter<"EventPartnerPackages"> | Date | string
    updatedAt?: DateTimeFilter<"EventPartnerPackages"> | Date | string
    event_partner?: XOR<EventPartnersScalarRelationFilter, EventPartnersWhereInput>
    event_package?: XOR<EventPackagesScalarRelationFilter, EventPackagesWhereInput>
  }, "id">

  export type EventPartnerPackagesOrderByWithAggregationInput = {
    id?: SortOrder
    event_partner_id?: SortOrder
    event_package_id?: SortOrder
    payment_reference?: SortOrderInput | SortOrder
    payment_status?: SortOrder
    payment_method?: SortOrderInput | SortOrder
    proof_of_payment?: SortOrderInput | SortOrder
    assignedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EventPartnerPackagesCountOrderByAggregateInput
    _avg?: EventPartnerPackagesAvgOrderByAggregateInput
    _max?: EventPartnerPackagesMaxOrderByAggregateInput
    _min?: EventPartnerPackagesMinOrderByAggregateInput
    _sum?: EventPartnerPackagesSumOrderByAggregateInput
  }

  export type EventPartnerPackagesScalarWhereWithAggregatesInput = {
    AND?: EventPartnerPackagesScalarWhereWithAggregatesInput | EventPartnerPackagesScalarWhereWithAggregatesInput[]
    OR?: EventPartnerPackagesScalarWhereWithAggregatesInput[]
    NOT?: EventPartnerPackagesScalarWhereWithAggregatesInput | EventPartnerPackagesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"EventPartnerPackages"> | number
    event_partner_id?: IntWithAggregatesFilter<"EventPartnerPackages"> | number
    event_package_id?: IntWithAggregatesFilter<"EventPartnerPackages"> | number
    payment_reference?: StringNullableWithAggregatesFilter<"EventPartnerPackages"> | string | null
    payment_status?: EnumStatusWithAggregatesFilter<"EventPartnerPackages"> | $Enums.Status
    payment_method?: StringNullableWithAggregatesFilter<"EventPartnerPackages"> | string | null
    proof_of_payment?: StringNullableWithAggregatesFilter<"EventPartnerPackages"> | string | null
    assignedAt?: DateTimeWithAggregatesFilter<"EventPartnerPackages"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"EventPartnerPackages"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"EventPartnerPackages"> | Date | string
  }

  export type AdminCreateInput = {
    fullname: string
    email: string
    username: string
    role?: $Enums.Role
    profile_image?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUncheckedCreateInput = {
    id?: number
    fullname: string
    email: string
    username: string
    role?: $Enums.Role
    profile_image?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUpdateInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminCreateManyInput = {
    id?: number
    fullname: string
    email: string
    username: string
    role?: $Enums.Role
    profile_image?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUpdateManyMutationInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersCreateInput = {
    organization: string
    organization_short_code: string
    contact_person: string
    contact_person_email: string
    username: string
    profile_image?: string | null
    role?: $Enums.Role
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsersUncheckedCreateInput = {
    id?: number
    organization: string
    organization_short_code: string
    contact_person: string
    contact_person_email: string
    username: string
    profile_image?: string | null
    role?: $Enums.Role
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsersUpdateInput = {
    organization?: StringFieldUpdateOperationsInput | string
    organization_short_code?: StringFieldUpdateOperationsInput | string
    contact_person?: StringFieldUpdateOperationsInput | string
    contact_person_email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    organization?: StringFieldUpdateOperationsInput | string
    organization_short_code?: StringFieldUpdateOperationsInput | string
    contact_person?: StringFieldUpdateOperationsInput | string
    contact_person_email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersCreateManyInput = {
    id?: number
    organization: string
    organization_short_code: string
    contact_person: string
    contact_person_email: string
    username: string
    profile_image?: string | null
    role?: $Enums.Role
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsersUpdateManyMutationInput = {
    organization?: StringFieldUpdateOperationsInput | string
    organization_short_code?: StringFieldUpdateOperationsInput | string
    contact_person?: StringFieldUpdateOperationsInput | string
    contact_person_email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    organization?: StringFieldUpdateOperationsInput | string
    organization_short_code?: StringFieldUpdateOperationsInput | string
    contact_person?: StringFieldUpdateOperationsInput | string
    contact_person_email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationCreateInput = {
    name: string
    abbreviation?: string | null
    type?: $Enums.OrganizationType
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: OrganizationCreateNestedOneWithoutChildrenInput
    children?: OrganizationCreateNestedManyWithoutParentInput
  }

  export type OrganizationUncheckedCreateInput = {
    id?: number
    name: string
    abbreviation?: string | null
    type?: $Enums.OrganizationType
    parentId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: OrganizationUncheckedCreateNestedManyWithoutParentInput
  }

  export type OrganizationUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    abbreviation?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumOrganizationTypeFieldUpdateOperationsInput | $Enums.OrganizationType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: OrganizationUpdateOneWithoutChildrenNestedInput
    children?: OrganizationUpdateManyWithoutParentNestedInput
  }

  export type OrganizationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    abbreviation?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumOrganizationTypeFieldUpdateOperationsInput | $Enums.OrganizationType
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: OrganizationUncheckedUpdateManyWithoutParentNestedInput
  }

  export type OrganizationCreateManyInput = {
    id?: number
    name: string
    abbreviation?: string | null
    type?: $Enums.OrganizationType
    parentId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrganizationUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    abbreviation?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumOrganizationTypeFieldUpdateOperationsInput | $Enums.OrganizationType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    abbreviation?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumOrganizationTypeFieldUpdateOperationsInput | $Enums.OrganizationType
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendeesCreateInput = {
    prefix?: string | null
    fullname: string
    email: string
    phone_number: string
    nin: string
    nin_verified?: boolean
    position: string
    grade: string
    organization: string
    department: string
    department_agency: string
    staff_id?: string | null
    office_location?: string | null
    remark?: string | null
    status?: $Enums.Status
    role?: $Enums.Role
    password: string
    temporal_password?: boolean
    registeredAt?: Date | string
    created_by_id?: number | null
    created_by_type?: $Enums.CreatorType | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttendeesUncheckedCreateInput = {
    id?: number
    prefix?: string | null
    fullname: string
    email: string
    phone_number: string
    nin: string
    nin_verified?: boolean
    position: string
    grade: string
    organization: string
    department: string
    department_agency: string
    staff_id?: string | null
    office_location?: string | null
    remark?: string | null
    status?: $Enums.Status
    role?: $Enums.Role
    password: string
    temporal_password?: boolean
    registeredAt?: Date | string
    created_by_id?: number | null
    created_by_type?: $Enums.CreatorType | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttendeesUpdateInput = {
    prefix?: NullableStringFieldUpdateOperationsInput | string | null
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    nin?: StringFieldUpdateOperationsInput | string
    nin_verified?: BoolFieldUpdateOperationsInput | boolean
    position?: StringFieldUpdateOperationsInput | string
    grade?: StringFieldUpdateOperationsInput | string
    organization?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    department_agency?: StringFieldUpdateOperationsInput | string
    staff_id?: NullableStringFieldUpdateOperationsInput | string | null
    office_location?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password?: StringFieldUpdateOperationsInput | string
    temporal_password?: BoolFieldUpdateOperationsInput | boolean
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_by_type?: NullableEnumCreatorTypeFieldUpdateOperationsInput | $Enums.CreatorType | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendeesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    prefix?: NullableStringFieldUpdateOperationsInput | string | null
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    nin?: StringFieldUpdateOperationsInput | string
    nin_verified?: BoolFieldUpdateOperationsInput | boolean
    position?: StringFieldUpdateOperationsInput | string
    grade?: StringFieldUpdateOperationsInput | string
    organization?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    department_agency?: StringFieldUpdateOperationsInput | string
    staff_id?: NullableStringFieldUpdateOperationsInput | string | null
    office_location?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password?: StringFieldUpdateOperationsInput | string
    temporal_password?: BoolFieldUpdateOperationsInput | boolean
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_by_type?: NullableEnumCreatorTypeFieldUpdateOperationsInput | $Enums.CreatorType | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendeesCreateManyInput = {
    id?: number
    prefix?: string | null
    fullname: string
    email: string
    phone_number: string
    nin: string
    nin_verified?: boolean
    position: string
    grade: string
    organization: string
    department: string
    department_agency: string
    staff_id?: string | null
    office_location?: string | null
    remark?: string | null
    status?: $Enums.Status
    role?: $Enums.Role
    password: string
    temporal_password?: boolean
    registeredAt?: Date | string
    created_by_id?: number | null
    created_by_type?: $Enums.CreatorType | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttendeesUpdateManyMutationInput = {
    prefix?: NullableStringFieldUpdateOperationsInput | string | null
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    nin?: StringFieldUpdateOperationsInput | string
    nin_verified?: BoolFieldUpdateOperationsInput | boolean
    position?: StringFieldUpdateOperationsInput | string
    grade?: StringFieldUpdateOperationsInput | string
    organization?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    department_agency?: StringFieldUpdateOperationsInput | string
    staff_id?: NullableStringFieldUpdateOperationsInput | string | null
    office_location?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password?: StringFieldUpdateOperationsInput | string
    temporal_password?: BoolFieldUpdateOperationsInput | boolean
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_by_type?: NullableEnumCreatorTypeFieldUpdateOperationsInput | $Enums.CreatorType | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendeesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    prefix?: NullableStringFieldUpdateOperationsInput | string | null
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    nin?: StringFieldUpdateOperationsInput | string
    nin_verified?: BoolFieldUpdateOperationsInput | boolean
    position?: StringFieldUpdateOperationsInput | string
    grade?: StringFieldUpdateOperationsInput | string
    organization?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    department_agency?: StringFieldUpdateOperationsInput | string
    staff_id?: NullableStringFieldUpdateOperationsInput | string | null
    office_location?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password?: StringFieldUpdateOperationsInput | string
    temporal_password?: BoolFieldUpdateOperationsInput | boolean
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_by_type?: NullableEnumCreatorTypeFieldUpdateOperationsInput | $Enums.CreatorType | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BoothsCreateInput = {
    booth_number: string
    location: string
    price: number
    booth_size: string
    features: JsonNullValueInput | InputJsonValue
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    assigned_booths?: assigned_boothsCreateNestedManyWithoutBoothInput
  }

  export type BoothsUncheckedCreateInput = {
    id?: number
    booth_number: string
    location: string
    price: number
    booth_size: string
    features: JsonNullValueInput | InputJsonValue
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    assigned_booths?: assigned_boothsUncheckedCreateNestedManyWithoutBoothInput
  }

  export type BoothsUpdateInput = {
    booth_number?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    booth_size?: StringFieldUpdateOperationsInput | string
    features?: JsonNullValueInput | InputJsonValue
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assigned_booths?: assigned_boothsUpdateManyWithoutBoothNestedInput
  }

  export type BoothsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    booth_number?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    booth_size?: StringFieldUpdateOperationsInput | string
    features?: JsonNullValueInput | InputJsonValue
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assigned_booths?: assigned_boothsUncheckedUpdateManyWithoutBoothNestedInput
  }

  export type BoothsCreateManyInput = {
    id?: number
    booth_number: string
    location: string
    price: number
    booth_size: string
    features: JsonNullValueInput | InputJsonValue
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BoothsUpdateManyMutationInput = {
    booth_number?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    booth_size?: StringFieldUpdateOperationsInput | string
    features?: JsonNullValueInput | InputJsonValue
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BoothsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    booth_number?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    booth_size?: StringFieldUpdateOperationsInput | string
    features?: JsonNullValueInput | InputJsonValue
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExhibitorsCreateInput = {
    prefix?: string | null
    company_name: string
    contact_person: string
    contact_email: string
    contact_phone: string
    website?: string | null
    description?: string | null
    service_product_to_exhibit?: string | null
    password: string
    role?: $Enums.Role
    status?: $Enums.Status
    registeredAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    assigned_booths?: assigned_boothsCreateNestedManyWithoutAssigned_toInput
  }

  export type ExhibitorsUncheckedCreateInput = {
    id?: number
    prefix?: string | null
    company_name: string
    contact_person: string
    contact_email: string
    contact_phone: string
    website?: string | null
    description?: string | null
    service_product_to_exhibit?: string | null
    password: string
    role?: $Enums.Role
    status?: $Enums.Status
    registeredAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    assigned_booths?: assigned_boothsUncheckedCreateNestedManyWithoutAssigned_toInput
  }

  export type ExhibitorsUpdateInput = {
    prefix?: NullableStringFieldUpdateOperationsInput | string | null
    company_name?: StringFieldUpdateOperationsInput | string
    contact_person?: StringFieldUpdateOperationsInput | string
    contact_email?: StringFieldUpdateOperationsInput | string
    contact_phone?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    service_product_to_exhibit?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assigned_booths?: assigned_boothsUpdateManyWithoutAssigned_toNestedInput
  }

  export type ExhibitorsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    prefix?: NullableStringFieldUpdateOperationsInput | string | null
    company_name?: StringFieldUpdateOperationsInput | string
    contact_person?: StringFieldUpdateOperationsInput | string
    contact_email?: StringFieldUpdateOperationsInput | string
    contact_phone?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    service_product_to_exhibit?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assigned_booths?: assigned_boothsUncheckedUpdateManyWithoutAssigned_toNestedInput
  }

  export type ExhibitorsCreateManyInput = {
    id?: number
    prefix?: string | null
    company_name: string
    contact_person: string
    contact_email: string
    contact_phone: string
    website?: string | null
    description?: string | null
    service_product_to_exhibit?: string | null
    password: string
    role?: $Enums.Role
    status?: $Enums.Status
    registeredAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExhibitorsUpdateManyMutationInput = {
    prefix?: NullableStringFieldUpdateOperationsInput | string | null
    company_name?: StringFieldUpdateOperationsInput | string
    contact_person?: StringFieldUpdateOperationsInput | string
    contact_email?: StringFieldUpdateOperationsInput | string
    contact_phone?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    service_product_to_exhibit?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExhibitorsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    prefix?: NullableStringFieldUpdateOperationsInput | string | null
    company_name?: StringFieldUpdateOperationsInput | string
    contact_person?: StringFieldUpdateOperationsInput | string
    contact_email?: StringFieldUpdateOperationsInput | string
    contact_phone?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    service_product_to_exhibit?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventPartnersCreateInput = {
    prefix?: string | null
    fullname: string
    email: string
    phone_number: string
    company_name: string
    logo: string
    website?: string | null
    social_media?: NullableJsonNullValueInput | InputJsonValue
    description?: string | null
    why_interested?: string | null
    password: string
    role?: $Enums.Role
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    EventPartnerPackages?: EventPartnerPackagesCreateNestedManyWithoutEvent_partnerInput
  }

  export type EventPartnersUncheckedCreateInput = {
    id?: number
    prefix?: string | null
    fullname: string
    email: string
    phone_number: string
    company_name: string
    logo: string
    website?: string | null
    social_media?: NullableJsonNullValueInput | InputJsonValue
    description?: string | null
    why_interested?: string | null
    password: string
    role?: $Enums.Role
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    EventPartnerPackages?: EventPartnerPackagesUncheckedCreateNestedManyWithoutEvent_partnerInput
  }

  export type EventPartnersUpdateInput = {
    prefix?: NullableStringFieldUpdateOperationsInput | string | null
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    social_media?: NullableJsonNullValueInput | InputJsonValue
    description?: NullableStringFieldUpdateOperationsInput | string | null
    why_interested?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    EventPartnerPackages?: EventPartnerPackagesUpdateManyWithoutEvent_partnerNestedInput
  }

  export type EventPartnersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    prefix?: NullableStringFieldUpdateOperationsInput | string | null
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    social_media?: NullableJsonNullValueInput | InputJsonValue
    description?: NullableStringFieldUpdateOperationsInput | string | null
    why_interested?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    EventPartnerPackages?: EventPartnerPackagesUncheckedUpdateManyWithoutEvent_partnerNestedInput
  }

  export type EventPartnersCreateManyInput = {
    id?: number
    prefix?: string | null
    fullname: string
    email: string
    phone_number: string
    company_name: string
    logo: string
    website?: string | null
    social_media?: NullableJsonNullValueInput | InputJsonValue
    description?: string | null
    why_interested?: string | null
    password: string
    role?: $Enums.Role
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventPartnersUpdateManyMutationInput = {
    prefix?: NullableStringFieldUpdateOperationsInput | string | null
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    social_media?: NullableJsonNullValueInput | InputJsonValue
    description?: NullableStringFieldUpdateOperationsInput | string | null
    why_interested?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventPartnersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    prefix?: NullableStringFieldUpdateOperationsInput | string | null
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    social_media?: NullableJsonNullValueInput | InputJsonValue
    description?: NullableStringFieldUpdateOperationsInput | string | null
    why_interested?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpeakersCreateInput = {
    prefix?: string | null
    first_name: string
    last_name: string
    fullname: string
    country: string
    job_title: string
    organization: string
    phone: string
    social_media?: NullableJsonNullValueInput | InputJsonValue
    work_email: string
    bio: string
    topic: string
    experience?: string | null
    password: string
    role?: $Enums.Role
    status?: $Enums.Status
    registeredAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SpeakersUncheckedCreateInput = {
    id?: number
    prefix?: string | null
    first_name: string
    last_name: string
    fullname: string
    country: string
    job_title: string
    organization: string
    phone: string
    social_media?: NullableJsonNullValueInput | InputJsonValue
    work_email: string
    bio: string
    topic: string
    experience?: string | null
    password: string
    role?: $Enums.Role
    status?: $Enums.Status
    registeredAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SpeakersUpdateInput = {
    prefix?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    job_title?: StringFieldUpdateOperationsInput | string
    organization?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    social_media?: NullableJsonNullValueInput | InputJsonValue
    work_email?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpeakersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    prefix?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    job_title?: StringFieldUpdateOperationsInput | string
    organization?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    social_media?: NullableJsonNullValueInput | InputJsonValue
    work_email?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpeakersCreateManyInput = {
    id?: number
    prefix?: string | null
    first_name: string
    last_name: string
    fullname: string
    country: string
    job_title: string
    organization: string
    phone: string
    social_media?: NullableJsonNullValueInput | InputJsonValue
    work_email: string
    bio: string
    topic: string
    experience?: string | null
    password: string
    role?: $Enums.Role
    status?: $Enums.Status
    registeredAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SpeakersUpdateManyMutationInput = {
    prefix?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    job_title?: StringFieldUpdateOperationsInput | string
    organization?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    social_media?: NullableJsonNullValueInput | InputJsonValue
    work_email?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpeakersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    prefix?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    job_title?: StringFieldUpdateOperationsInput | string
    organization?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    social_media?: NullableJsonNullValueInput | InputJsonValue
    work_email?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventPackagesCreateInput = {
    name: string
    description: string
    price: number
    features: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    EventPartnerPackages?: EventPartnerPackagesCreateNestedManyWithoutEvent_packageInput
  }

  export type EventPackagesUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    price: number
    features: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    EventPartnerPackages?: EventPartnerPackagesUncheckedCreateNestedManyWithoutEvent_packageInput
  }

  export type EventPackagesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    features?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    EventPartnerPackages?: EventPartnerPackagesUpdateManyWithoutEvent_packageNestedInput
  }

  export type EventPackagesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    features?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    EventPartnerPackages?: EventPartnerPackagesUncheckedUpdateManyWithoutEvent_packageNestedInput
  }

  export type EventPackagesCreateManyInput = {
    id?: number
    name: string
    description: string
    price: number
    features: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventPackagesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    features?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventPackagesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    features?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpeakerPackageCreateInput = {
    slug: string
    title: string
    price: number
    description?: string | null
    features: JsonNullValueInput | InputJsonValue
    limitedText?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SpeakerPackageUncheckedCreateInput = {
    id?: number
    slug: string
    title: string
    price: number
    description?: string | null
    features: JsonNullValueInput | InputJsonValue
    limitedText?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SpeakerPackageUpdateInput = {
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    features?: JsonNullValueInput | InputJsonValue
    limitedText?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpeakerPackageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    features?: JsonNullValueInput | InputJsonValue
    limitedText?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpeakerPackageCreateManyInput = {
    id?: number
    slug: string
    title: string
    price: number
    description?: string | null
    features: JsonNullValueInput | InputJsonValue
    limitedText?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SpeakerPackageUpdateManyMutationInput = {
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    features?: JsonNullValueInput | InputJsonValue
    limitedText?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpeakerPackageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    features?: JsonNullValueInput | InputJsonValue
    limitedText?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartnerPackageCreateInput = {
    slug: string
    title: string
    price: number
    description?: string | null
    features: JsonNullValueInput | InputJsonValue
    limitedText?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PartnerPackageUncheckedCreateInput = {
    id?: number
    slug: string
    title: string
    price: number
    description?: string | null
    features: JsonNullValueInput | InputJsonValue
    limitedText?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PartnerPackageUpdateInput = {
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    features?: JsonNullValueInput | InputJsonValue
    limitedText?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartnerPackageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    features?: JsonNullValueInput | InputJsonValue
    limitedText?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartnerPackageCreateManyInput = {
    id?: number
    slug: string
    title: string
    price: number
    description?: string | null
    features: JsonNullValueInput | InputJsonValue
    limitedText?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PartnerPackageUpdateManyMutationInput = {
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    features?: JsonNullValueInput | InputJsonValue
    limitedText?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartnerPackageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    features?: JsonNullValueInput | InputJsonValue
    limitedText?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type assigned_boothsCreateInput = {
    assignedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    booth: BoothsCreateNestedOneWithoutAssigned_boothsInput
    assigned_to: ExhibitorsCreateNestedOneWithoutAssigned_boothsInput
  }

  export type assigned_boothsUncheckedCreateInput = {
    id?: number
    booth_id: number
    assigned_to_id: number
    assignedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type assigned_boothsUpdateInput = {
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    booth?: BoothsUpdateOneRequiredWithoutAssigned_boothsNestedInput
    assigned_to?: ExhibitorsUpdateOneRequiredWithoutAssigned_boothsNestedInput
  }

  export type assigned_boothsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    booth_id?: IntFieldUpdateOperationsInput | number
    assigned_to_id?: IntFieldUpdateOperationsInput | number
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type assigned_boothsCreateManyInput = {
    id?: number
    booth_id: number
    assigned_to_id: number
    assignedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type assigned_boothsUpdateManyMutationInput = {
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type assigned_boothsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    booth_id?: IntFieldUpdateOperationsInput | number
    assigned_to_id?: IntFieldUpdateOperationsInput | number
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventPartnerPackagesCreateInput = {
    payment_reference?: string | null
    payment_status?: $Enums.Status
    payment_method?: string | null
    proof_of_payment?: string | null
    assignedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    event_partner: EventPartnersCreateNestedOneWithoutEventPartnerPackagesInput
    event_package: EventPackagesCreateNestedOneWithoutEventPartnerPackagesInput
  }

  export type EventPartnerPackagesUncheckedCreateInput = {
    id?: number
    event_partner_id: number
    event_package_id: number
    payment_reference?: string | null
    payment_status?: $Enums.Status
    payment_method?: string | null
    proof_of_payment?: string | null
    assignedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventPartnerPackagesUpdateInput = {
    payment_reference?: NullableStringFieldUpdateOperationsInput | string | null
    payment_status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    proof_of_payment?: NullableStringFieldUpdateOperationsInput | string | null
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event_partner?: EventPartnersUpdateOneRequiredWithoutEventPartnerPackagesNestedInput
    event_package?: EventPackagesUpdateOneRequiredWithoutEventPartnerPackagesNestedInput
  }

  export type EventPartnerPackagesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    event_partner_id?: IntFieldUpdateOperationsInput | number
    event_package_id?: IntFieldUpdateOperationsInput | number
    payment_reference?: NullableStringFieldUpdateOperationsInput | string | null
    payment_status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    proof_of_payment?: NullableStringFieldUpdateOperationsInput | string | null
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventPartnerPackagesCreateManyInput = {
    id?: number
    event_partner_id: number
    event_package_id: number
    payment_reference?: string | null
    payment_status?: $Enums.Status
    payment_method?: string | null
    proof_of_payment?: string | null
    assignedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventPartnerPackagesUpdateManyMutationInput = {
    payment_reference?: NullableStringFieldUpdateOperationsInput | string | null
    payment_status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    proof_of_payment?: NullableStringFieldUpdateOperationsInput | string | null
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventPartnerPackagesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    event_partner_id?: IntFieldUpdateOperationsInput | number
    event_package_id?: IntFieldUpdateOperationsInput | number
    payment_reference?: NullableStringFieldUpdateOperationsInput | string | null
    payment_status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    proof_of_payment?: NullableStringFieldUpdateOperationsInput | string | null
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AdminOrderByRelevanceInput = {
    fields: AdminOrderByRelevanceFieldEnum | AdminOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    username?: SortOrder
    role?: SortOrder
    profile_image?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    username?: SortOrder
    role?: SortOrder
    profile_image?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    username?: SortOrder
    role?: SortOrder
    profile_image?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UsersOrderByRelevanceInput = {
    fields: UsersOrderByRelevanceFieldEnum | UsersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    organization?: SortOrder
    organization_short_code?: SortOrder
    contact_person?: SortOrder
    contact_person_email?: SortOrder
    username?: SortOrder
    profile_image?: SortOrder
    role?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    organization?: SortOrder
    organization_short_code?: SortOrder
    contact_person?: SortOrder
    contact_person_email?: SortOrder
    username?: SortOrder
    profile_image?: SortOrder
    role?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    organization?: SortOrder
    organization_short_code?: SortOrder
    contact_person?: SortOrder
    contact_person_email?: SortOrder
    username?: SortOrder
    profile_image?: SortOrder
    role?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumOrganizationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.OrganizationType | EnumOrganizationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OrganizationType[]
    notIn?: $Enums.OrganizationType[]
    not?: NestedEnumOrganizationTypeFilter<$PrismaModel> | $Enums.OrganizationType
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type OrganizationNullableScalarRelationFilter = {
    is?: OrganizationWhereInput | null
    isNot?: OrganizationWhereInput | null
  }

  export type OrganizationListRelationFilter = {
    every?: OrganizationWhereInput
    some?: OrganizationWhereInput
    none?: OrganizationWhereInput
  }

  export type OrganizationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrganizationOrderByRelevanceInput = {
    fields: OrganizationOrderByRelevanceFieldEnum | OrganizationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type OrganizationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    abbreviation?: SortOrder
    type?: SortOrder
    parentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrganizationAvgOrderByAggregateInput = {
    id?: SortOrder
    parentId?: SortOrder
  }

  export type OrganizationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    abbreviation?: SortOrder
    type?: SortOrder
    parentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrganizationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    abbreviation?: SortOrder
    type?: SortOrder
    parentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrganizationSumOrderByAggregateInput = {
    id?: SortOrder
    parentId?: SortOrder
  }

  export type EnumOrganizationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrganizationType | EnumOrganizationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OrganizationType[]
    notIn?: $Enums.OrganizationType[]
    not?: NestedEnumOrganizationTypeWithAggregatesFilter<$PrismaModel> | $Enums.OrganizationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrganizationTypeFilter<$PrismaModel>
    _max?: NestedEnumOrganizationTypeFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[]
    notIn?: $Enums.Status[]
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type EnumCreatorTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.CreatorType | EnumCreatorTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.CreatorType[] | null
    notIn?: $Enums.CreatorType[] | null
    not?: NestedEnumCreatorTypeNullableFilter<$PrismaModel> | $Enums.CreatorType | null
  }

  export type AttendeesOrderByRelevanceInput = {
    fields: AttendeesOrderByRelevanceFieldEnum | AttendeesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AttendeesCountOrderByAggregateInput = {
    id?: SortOrder
    prefix?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    nin?: SortOrder
    nin_verified?: SortOrder
    position?: SortOrder
    grade?: SortOrder
    organization?: SortOrder
    department?: SortOrder
    department_agency?: SortOrder
    staff_id?: SortOrder
    office_location?: SortOrder
    remark?: SortOrder
    status?: SortOrder
    role?: SortOrder
    password?: SortOrder
    temporal_password?: SortOrder
    registeredAt?: SortOrder
    created_by_id?: SortOrder
    created_by_type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AttendeesAvgOrderByAggregateInput = {
    id?: SortOrder
    created_by_id?: SortOrder
  }

  export type AttendeesMaxOrderByAggregateInput = {
    id?: SortOrder
    prefix?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    nin?: SortOrder
    nin_verified?: SortOrder
    position?: SortOrder
    grade?: SortOrder
    organization?: SortOrder
    department?: SortOrder
    department_agency?: SortOrder
    staff_id?: SortOrder
    office_location?: SortOrder
    remark?: SortOrder
    status?: SortOrder
    role?: SortOrder
    password?: SortOrder
    temporal_password?: SortOrder
    registeredAt?: SortOrder
    created_by_id?: SortOrder
    created_by_type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AttendeesMinOrderByAggregateInput = {
    id?: SortOrder
    prefix?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    nin?: SortOrder
    nin_verified?: SortOrder
    position?: SortOrder
    grade?: SortOrder
    organization?: SortOrder
    department?: SortOrder
    department_agency?: SortOrder
    staff_id?: SortOrder
    office_location?: SortOrder
    remark?: SortOrder
    status?: SortOrder
    role?: SortOrder
    password?: SortOrder
    temporal_password?: SortOrder
    registeredAt?: SortOrder
    created_by_id?: SortOrder
    created_by_type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AttendeesSumOrderByAggregateInput = {
    id?: SortOrder
    created_by_id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[]
    notIn?: $Enums.Status[]
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type EnumCreatorTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CreatorType | EnumCreatorTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.CreatorType[] | null
    notIn?: $Enums.CreatorType[] | null
    not?: NestedEnumCreatorTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.CreatorType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumCreatorTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumCreatorTypeNullableFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type Assigned_boothsListRelationFilter = {
    every?: assigned_boothsWhereInput
    some?: assigned_boothsWhereInput
    none?: assigned_boothsWhereInput
  }

  export type assigned_boothsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BoothsOrderByRelevanceInput = {
    fields: BoothsOrderByRelevanceFieldEnum | BoothsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BoothsCountOrderByAggregateInput = {
    id?: SortOrder
    booth_number?: SortOrder
    location?: SortOrder
    price?: SortOrder
    booth_size?: SortOrder
    features?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoothsAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
  }

  export type BoothsMaxOrderByAggregateInput = {
    id?: SortOrder
    booth_number?: SortOrder
    location?: SortOrder
    price?: SortOrder
    booth_size?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoothsMinOrderByAggregateInput = {
    id?: SortOrder
    booth_number?: SortOrder
    location?: SortOrder
    price?: SortOrder
    booth_size?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoothsSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type ExhibitorsOrderByRelevanceInput = {
    fields: ExhibitorsOrderByRelevanceFieldEnum | ExhibitorsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ExhibitorsCountOrderByAggregateInput = {
    id?: SortOrder
    prefix?: SortOrder
    company_name?: SortOrder
    contact_person?: SortOrder
    contact_email?: SortOrder
    contact_phone?: SortOrder
    website?: SortOrder
    description?: SortOrder
    service_product_to_exhibit?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    registeredAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExhibitorsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ExhibitorsMaxOrderByAggregateInput = {
    id?: SortOrder
    prefix?: SortOrder
    company_name?: SortOrder
    contact_person?: SortOrder
    contact_email?: SortOrder
    contact_phone?: SortOrder
    website?: SortOrder
    description?: SortOrder
    service_product_to_exhibit?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    registeredAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExhibitorsMinOrderByAggregateInput = {
    id?: SortOrder
    prefix?: SortOrder
    company_name?: SortOrder
    contact_person?: SortOrder
    contact_email?: SortOrder
    contact_phone?: SortOrder
    website?: SortOrder
    description?: SortOrder
    service_product_to_exhibit?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    registeredAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExhibitorsSumOrderByAggregateInput = {
    id?: SortOrder
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type EventPartnerPackagesListRelationFilter = {
    every?: EventPartnerPackagesWhereInput
    some?: EventPartnerPackagesWhereInput
    none?: EventPartnerPackagesWhereInput
  }

  export type EventPartnerPackagesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventPartnersOrderByRelevanceInput = {
    fields: EventPartnersOrderByRelevanceFieldEnum | EventPartnersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type EventPartnersCountOrderByAggregateInput = {
    id?: SortOrder
    prefix?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    company_name?: SortOrder
    logo?: SortOrder
    website?: SortOrder
    social_media?: SortOrder
    description?: SortOrder
    why_interested?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventPartnersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EventPartnersMaxOrderByAggregateInput = {
    id?: SortOrder
    prefix?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    company_name?: SortOrder
    logo?: SortOrder
    website?: SortOrder
    description?: SortOrder
    why_interested?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventPartnersMinOrderByAggregateInput = {
    id?: SortOrder
    prefix?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    company_name?: SortOrder
    logo?: SortOrder
    website?: SortOrder
    description?: SortOrder
    why_interested?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventPartnersSumOrderByAggregateInput = {
    id?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type SpeakersOrderByRelevanceInput = {
    fields: SpeakersOrderByRelevanceFieldEnum | SpeakersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SpeakersCountOrderByAggregateInput = {
    id?: SortOrder
    prefix?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    fullname?: SortOrder
    country?: SortOrder
    job_title?: SortOrder
    organization?: SortOrder
    phone?: SortOrder
    social_media?: SortOrder
    work_email?: SortOrder
    bio?: SortOrder
    topic?: SortOrder
    experience?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    registeredAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SpeakersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SpeakersMaxOrderByAggregateInput = {
    id?: SortOrder
    prefix?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    fullname?: SortOrder
    country?: SortOrder
    job_title?: SortOrder
    organization?: SortOrder
    phone?: SortOrder
    work_email?: SortOrder
    bio?: SortOrder
    topic?: SortOrder
    experience?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    registeredAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SpeakersMinOrderByAggregateInput = {
    id?: SortOrder
    prefix?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    fullname?: SortOrder
    country?: SortOrder
    job_title?: SortOrder
    organization?: SortOrder
    phone?: SortOrder
    work_email?: SortOrder
    bio?: SortOrder
    topic?: SortOrder
    experience?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    registeredAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SpeakersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EventPackagesOrderByRelevanceInput = {
    fields: EventPackagesOrderByRelevanceFieldEnum | EventPackagesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type EventPackagesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    features?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventPackagesAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
  }

  export type EventPackagesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventPackagesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventPackagesSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
  }

  export type SpeakerPackageOrderByRelevanceInput = {
    fields: SpeakerPackageOrderByRelevanceFieldEnum | SpeakerPackageOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SpeakerPackageCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    price?: SortOrder
    description?: SortOrder
    features?: SortOrder
    limitedText?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SpeakerPackageAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
  }

  export type SpeakerPackageMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    price?: SortOrder
    description?: SortOrder
    limitedText?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SpeakerPackageMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    price?: SortOrder
    description?: SortOrder
    limitedText?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SpeakerPackageSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
  }

  export type PartnerPackageOrderByRelevanceInput = {
    fields: PartnerPackageOrderByRelevanceFieldEnum | PartnerPackageOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PartnerPackageCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    price?: SortOrder
    description?: SortOrder
    features?: SortOrder
    limitedText?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PartnerPackageAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
  }

  export type PartnerPackageMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    price?: SortOrder
    description?: SortOrder
    limitedText?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PartnerPackageMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    price?: SortOrder
    description?: SortOrder
    limitedText?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PartnerPackageSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
  }

  export type BoothsScalarRelationFilter = {
    is?: BoothsWhereInput
    isNot?: BoothsWhereInput
  }

  export type ExhibitorsScalarRelationFilter = {
    is?: ExhibitorsWhereInput
    isNot?: ExhibitorsWhereInput
  }

  export type assigned_boothsCountOrderByAggregateInput = {
    id?: SortOrder
    booth_id?: SortOrder
    assigned_to_id?: SortOrder
    assignedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type assigned_boothsAvgOrderByAggregateInput = {
    id?: SortOrder
    booth_id?: SortOrder
    assigned_to_id?: SortOrder
  }

  export type assigned_boothsMaxOrderByAggregateInput = {
    id?: SortOrder
    booth_id?: SortOrder
    assigned_to_id?: SortOrder
    assignedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type assigned_boothsMinOrderByAggregateInput = {
    id?: SortOrder
    booth_id?: SortOrder
    assigned_to_id?: SortOrder
    assignedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type assigned_boothsSumOrderByAggregateInput = {
    id?: SortOrder
    booth_id?: SortOrder
    assigned_to_id?: SortOrder
  }

  export type EventPartnersScalarRelationFilter = {
    is?: EventPartnersWhereInput
    isNot?: EventPartnersWhereInput
  }

  export type EventPackagesScalarRelationFilter = {
    is?: EventPackagesWhereInput
    isNot?: EventPackagesWhereInput
  }

  export type EventPartnerPackagesOrderByRelevanceInput = {
    fields: EventPartnerPackagesOrderByRelevanceFieldEnum | EventPartnerPackagesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type EventPartnerPackagesCountOrderByAggregateInput = {
    id?: SortOrder
    event_partner_id?: SortOrder
    event_package_id?: SortOrder
    payment_reference?: SortOrder
    payment_status?: SortOrder
    payment_method?: SortOrder
    proof_of_payment?: SortOrder
    assignedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventPartnerPackagesAvgOrderByAggregateInput = {
    id?: SortOrder
    event_partner_id?: SortOrder
    event_package_id?: SortOrder
  }

  export type EventPartnerPackagesMaxOrderByAggregateInput = {
    id?: SortOrder
    event_partner_id?: SortOrder
    event_package_id?: SortOrder
    payment_reference?: SortOrder
    payment_status?: SortOrder
    payment_method?: SortOrder
    proof_of_payment?: SortOrder
    assignedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventPartnerPackagesMinOrderByAggregateInput = {
    id?: SortOrder
    event_partner_id?: SortOrder
    event_package_id?: SortOrder
    payment_reference?: SortOrder
    payment_status?: SortOrder
    payment_method?: SortOrder
    proof_of_payment?: SortOrder
    assignedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventPartnerPackagesSumOrderByAggregateInput = {
    id?: SortOrder
    event_partner_id?: SortOrder
    event_package_id?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type OrganizationCreateNestedOneWithoutChildrenInput = {
    create?: XOR<OrganizationCreateWithoutChildrenInput, OrganizationUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutChildrenInput
    connect?: OrganizationWhereUniqueInput
  }

  export type OrganizationCreateNestedManyWithoutParentInput = {
    create?: XOR<OrganizationCreateWithoutParentInput, OrganizationUncheckedCreateWithoutParentInput> | OrganizationCreateWithoutParentInput[] | OrganizationUncheckedCreateWithoutParentInput[]
    connectOrCreate?: OrganizationCreateOrConnectWithoutParentInput | OrganizationCreateOrConnectWithoutParentInput[]
    createMany?: OrganizationCreateManyParentInputEnvelope
    connect?: OrganizationWhereUniqueInput | OrganizationWhereUniqueInput[]
  }

  export type OrganizationUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<OrganizationCreateWithoutParentInput, OrganizationUncheckedCreateWithoutParentInput> | OrganizationCreateWithoutParentInput[] | OrganizationUncheckedCreateWithoutParentInput[]
    connectOrCreate?: OrganizationCreateOrConnectWithoutParentInput | OrganizationCreateOrConnectWithoutParentInput[]
    createMany?: OrganizationCreateManyParentInputEnvelope
    connect?: OrganizationWhereUniqueInput | OrganizationWhereUniqueInput[]
  }

  export type EnumOrganizationTypeFieldUpdateOperationsInput = {
    set?: $Enums.OrganizationType
  }

  export type OrganizationUpdateOneWithoutChildrenNestedInput = {
    create?: XOR<OrganizationCreateWithoutChildrenInput, OrganizationUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutChildrenInput
    upsert?: OrganizationUpsertWithoutChildrenInput
    disconnect?: OrganizationWhereInput | boolean
    delete?: OrganizationWhereInput | boolean
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutChildrenInput, OrganizationUpdateWithoutChildrenInput>, OrganizationUncheckedUpdateWithoutChildrenInput>
  }

  export type OrganizationUpdateManyWithoutParentNestedInput = {
    create?: XOR<OrganizationCreateWithoutParentInput, OrganizationUncheckedCreateWithoutParentInput> | OrganizationCreateWithoutParentInput[] | OrganizationUncheckedCreateWithoutParentInput[]
    connectOrCreate?: OrganizationCreateOrConnectWithoutParentInput | OrganizationCreateOrConnectWithoutParentInput[]
    upsert?: OrganizationUpsertWithWhereUniqueWithoutParentInput | OrganizationUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: OrganizationCreateManyParentInputEnvelope
    set?: OrganizationWhereUniqueInput | OrganizationWhereUniqueInput[]
    disconnect?: OrganizationWhereUniqueInput | OrganizationWhereUniqueInput[]
    delete?: OrganizationWhereUniqueInput | OrganizationWhereUniqueInput[]
    connect?: OrganizationWhereUniqueInput | OrganizationWhereUniqueInput[]
    update?: OrganizationUpdateWithWhereUniqueWithoutParentInput | OrganizationUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: OrganizationUpdateManyWithWhereWithoutParentInput | OrganizationUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: OrganizationScalarWhereInput | OrganizationScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type OrganizationUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<OrganizationCreateWithoutParentInput, OrganizationUncheckedCreateWithoutParentInput> | OrganizationCreateWithoutParentInput[] | OrganizationUncheckedCreateWithoutParentInput[]
    connectOrCreate?: OrganizationCreateOrConnectWithoutParentInput | OrganizationCreateOrConnectWithoutParentInput[]
    upsert?: OrganizationUpsertWithWhereUniqueWithoutParentInput | OrganizationUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: OrganizationCreateManyParentInputEnvelope
    set?: OrganizationWhereUniqueInput | OrganizationWhereUniqueInput[]
    disconnect?: OrganizationWhereUniqueInput | OrganizationWhereUniqueInput[]
    delete?: OrganizationWhereUniqueInput | OrganizationWhereUniqueInput[]
    connect?: OrganizationWhereUniqueInput | OrganizationWhereUniqueInput[]
    update?: OrganizationUpdateWithWhereUniqueWithoutParentInput | OrganizationUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: OrganizationUpdateManyWithWhereWithoutParentInput | OrganizationUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: OrganizationScalarWhereInput | OrganizationScalarWhereInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type NullableEnumCreatorTypeFieldUpdateOperationsInput = {
    set?: $Enums.CreatorType | null
  }

  export type assigned_boothsCreateNestedManyWithoutBoothInput = {
    create?: XOR<assigned_boothsCreateWithoutBoothInput, assigned_boothsUncheckedCreateWithoutBoothInput> | assigned_boothsCreateWithoutBoothInput[] | assigned_boothsUncheckedCreateWithoutBoothInput[]
    connectOrCreate?: assigned_boothsCreateOrConnectWithoutBoothInput | assigned_boothsCreateOrConnectWithoutBoothInput[]
    createMany?: assigned_boothsCreateManyBoothInputEnvelope
    connect?: assigned_boothsWhereUniqueInput | assigned_boothsWhereUniqueInput[]
  }

  export type assigned_boothsUncheckedCreateNestedManyWithoutBoothInput = {
    create?: XOR<assigned_boothsCreateWithoutBoothInput, assigned_boothsUncheckedCreateWithoutBoothInput> | assigned_boothsCreateWithoutBoothInput[] | assigned_boothsUncheckedCreateWithoutBoothInput[]
    connectOrCreate?: assigned_boothsCreateOrConnectWithoutBoothInput | assigned_boothsCreateOrConnectWithoutBoothInput[]
    createMany?: assigned_boothsCreateManyBoothInputEnvelope
    connect?: assigned_boothsWhereUniqueInput | assigned_boothsWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type assigned_boothsUpdateManyWithoutBoothNestedInput = {
    create?: XOR<assigned_boothsCreateWithoutBoothInput, assigned_boothsUncheckedCreateWithoutBoothInput> | assigned_boothsCreateWithoutBoothInput[] | assigned_boothsUncheckedCreateWithoutBoothInput[]
    connectOrCreate?: assigned_boothsCreateOrConnectWithoutBoothInput | assigned_boothsCreateOrConnectWithoutBoothInput[]
    upsert?: assigned_boothsUpsertWithWhereUniqueWithoutBoothInput | assigned_boothsUpsertWithWhereUniqueWithoutBoothInput[]
    createMany?: assigned_boothsCreateManyBoothInputEnvelope
    set?: assigned_boothsWhereUniqueInput | assigned_boothsWhereUniqueInput[]
    disconnect?: assigned_boothsWhereUniqueInput | assigned_boothsWhereUniqueInput[]
    delete?: assigned_boothsWhereUniqueInput | assigned_boothsWhereUniqueInput[]
    connect?: assigned_boothsWhereUniqueInput | assigned_boothsWhereUniqueInput[]
    update?: assigned_boothsUpdateWithWhereUniqueWithoutBoothInput | assigned_boothsUpdateWithWhereUniqueWithoutBoothInput[]
    updateMany?: assigned_boothsUpdateManyWithWhereWithoutBoothInput | assigned_boothsUpdateManyWithWhereWithoutBoothInput[]
    deleteMany?: assigned_boothsScalarWhereInput | assigned_boothsScalarWhereInput[]
  }

  export type assigned_boothsUncheckedUpdateManyWithoutBoothNestedInput = {
    create?: XOR<assigned_boothsCreateWithoutBoothInput, assigned_boothsUncheckedCreateWithoutBoothInput> | assigned_boothsCreateWithoutBoothInput[] | assigned_boothsUncheckedCreateWithoutBoothInput[]
    connectOrCreate?: assigned_boothsCreateOrConnectWithoutBoothInput | assigned_boothsCreateOrConnectWithoutBoothInput[]
    upsert?: assigned_boothsUpsertWithWhereUniqueWithoutBoothInput | assigned_boothsUpsertWithWhereUniqueWithoutBoothInput[]
    createMany?: assigned_boothsCreateManyBoothInputEnvelope
    set?: assigned_boothsWhereUniqueInput | assigned_boothsWhereUniqueInput[]
    disconnect?: assigned_boothsWhereUniqueInput | assigned_boothsWhereUniqueInput[]
    delete?: assigned_boothsWhereUniqueInput | assigned_boothsWhereUniqueInput[]
    connect?: assigned_boothsWhereUniqueInput | assigned_boothsWhereUniqueInput[]
    update?: assigned_boothsUpdateWithWhereUniqueWithoutBoothInput | assigned_boothsUpdateWithWhereUniqueWithoutBoothInput[]
    updateMany?: assigned_boothsUpdateManyWithWhereWithoutBoothInput | assigned_boothsUpdateManyWithWhereWithoutBoothInput[]
    deleteMany?: assigned_boothsScalarWhereInput | assigned_boothsScalarWhereInput[]
  }

  export type assigned_boothsCreateNestedManyWithoutAssigned_toInput = {
    create?: XOR<assigned_boothsCreateWithoutAssigned_toInput, assigned_boothsUncheckedCreateWithoutAssigned_toInput> | assigned_boothsCreateWithoutAssigned_toInput[] | assigned_boothsUncheckedCreateWithoutAssigned_toInput[]
    connectOrCreate?: assigned_boothsCreateOrConnectWithoutAssigned_toInput | assigned_boothsCreateOrConnectWithoutAssigned_toInput[]
    createMany?: assigned_boothsCreateManyAssigned_toInputEnvelope
    connect?: assigned_boothsWhereUniqueInput | assigned_boothsWhereUniqueInput[]
  }

  export type assigned_boothsUncheckedCreateNestedManyWithoutAssigned_toInput = {
    create?: XOR<assigned_boothsCreateWithoutAssigned_toInput, assigned_boothsUncheckedCreateWithoutAssigned_toInput> | assigned_boothsCreateWithoutAssigned_toInput[] | assigned_boothsUncheckedCreateWithoutAssigned_toInput[]
    connectOrCreate?: assigned_boothsCreateOrConnectWithoutAssigned_toInput | assigned_boothsCreateOrConnectWithoutAssigned_toInput[]
    createMany?: assigned_boothsCreateManyAssigned_toInputEnvelope
    connect?: assigned_boothsWhereUniqueInput | assigned_boothsWhereUniqueInput[]
  }

  export type assigned_boothsUpdateManyWithoutAssigned_toNestedInput = {
    create?: XOR<assigned_boothsCreateWithoutAssigned_toInput, assigned_boothsUncheckedCreateWithoutAssigned_toInput> | assigned_boothsCreateWithoutAssigned_toInput[] | assigned_boothsUncheckedCreateWithoutAssigned_toInput[]
    connectOrCreate?: assigned_boothsCreateOrConnectWithoutAssigned_toInput | assigned_boothsCreateOrConnectWithoutAssigned_toInput[]
    upsert?: assigned_boothsUpsertWithWhereUniqueWithoutAssigned_toInput | assigned_boothsUpsertWithWhereUniqueWithoutAssigned_toInput[]
    createMany?: assigned_boothsCreateManyAssigned_toInputEnvelope
    set?: assigned_boothsWhereUniqueInput | assigned_boothsWhereUniqueInput[]
    disconnect?: assigned_boothsWhereUniqueInput | assigned_boothsWhereUniqueInput[]
    delete?: assigned_boothsWhereUniqueInput | assigned_boothsWhereUniqueInput[]
    connect?: assigned_boothsWhereUniqueInput | assigned_boothsWhereUniqueInput[]
    update?: assigned_boothsUpdateWithWhereUniqueWithoutAssigned_toInput | assigned_boothsUpdateWithWhereUniqueWithoutAssigned_toInput[]
    updateMany?: assigned_boothsUpdateManyWithWhereWithoutAssigned_toInput | assigned_boothsUpdateManyWithWhereWithoutAssigned_toInput[]
    deleteMany?: assigned_boothsScalarWhereInput | assigned_boothsScalarWhereInput[]
  }

  export type assigned_boothsUncheckedUpdateManyWithoutAssigned_toNestedInput = {
    create?: XOR<assigned_boothsCreateWithoutAssigned_toInput, assigned_boothsUncheckedCreateWithoutAssigned_toInput> | assigned_boothsCreateWithoutAssigned_toInput[] | assigned_boothsUncheckedCreateWithoutAssigned_toInput[]
    connectOrCreate?: assigned_boothsCreateOrConnectWithoutAssigned_toInput | assigned_boothsCreateOrConnectWithoutAssigned_toInput[]
    upsert?: assigned_boothsUpsertWithWhereUniqueWithoutAssigned_toInput | assigned_boothsUpsertWithWhereUniqueWithoutAssigned_toInput[]
    createMany?: assigned_boothsCreateManyAssigned_toInputEnvelope
    set?: assigned_boothsWhereUniqueInput | assigned_boothsWhereUniqueInput[]
    disconnect?: assigned_boothsWhereUniqueInput | assigned_boothsWhereUniqueInput[]
    delete?: assigned_boothsWhereUniqueInput | assigned_boothsWhereUniqueInput[]
    connect?: assigned_boothsWhereUniqueInput | assigned_boothsWhereUniqueInput[]
    update?: assigned_boothsUpdateWithWhereUniqueWithoutAssigned_toInput | assigned_boothsUpdateWithWhereUniqueWithoutAssigned_toInput[]
    updateMany?: assigned_boothsUpdateManyWithWhereWithoutAssigned_toInput | assigned_boothsUpdateManyWithWhereWithoutAssigned_toInput[]
    deleteMany?: assigned_boothsScalarWhereInput | assigned_boothsScalarWhereInput[]
  }

  export type EventPartnerPackagesCreateNestedManyWithoutEvent_partnerInput = {
    create?: XOR<EventPartnerPackagesCreateWithoutEvent_partnerInput, EventPartnerPackagesUncheckedCreateWithoutEvent_partnerInput> | EventPartnerPackagesCreateWithoutEvent_partnerInput[] | EventPartnerPackagesUncheckedCreateWithoutEvent_partnerInput[]
    connectOrCreate?: EventPartnerPackagesCreateOrConnectWithoutEvent_partnerInput | EventPartnerPackagesCreateOrConnectWithoutEvent_partnerInput[]
    createMany?: EventPartnerPackagesCreateManyEvent_partnerInputEnvelope
    connect?: EventPartnerPackagesWhereUniqueInput | EventPartnerPackagesWhereUniqueInput[]
  }

  export type EventPartnerPackagesUncheckedCreateNestedManyWithoutEvent_partnerInput = {
    create?: XOR<EventPartnerPackagesCreateWithoutEvent_partnerInput, EventPartnerPackagesUncheckedCreateWithoutEvent_partnerInput> | EventPartnerPackagesCreateWithoutEvent_partnerInput[] | EventPartnerPackagesUncheckedCreateWithoutEvent_partnerInput[]
    connectOrCreate?: EventPartnerPackagesCreateOrConnectWithoutEvent_partnerInput | EventPartnerPackagesCreateOrConnectWithoutEvent_partnerInput[]
    createMany?: EventPartnerPackagesCreateManyEvent_partnerInputEnvelope
    connect?: EventPartnerPackagesWhereUniqueInput | EventPartnerPackagesWhereUniqueInput[]
  }

  export type EventPartnerPackagesUpdateManyWithoutEvent_partnerNestedInput = {
    create?: XOR<EventPartnerPackagesCreateWithoutEvent_partnerInput, EventPartnerPackagesUncheckedCreateWithoutEvent_partnerInput> | EventPartnerPackagesCreateWithoutEvent_partnerInput[] | EventPartnerPackagesUncheckedCreateWithoutEvent_partnerInput[]
    connectOrCreate?: EventPartnerPackagesCreateOrConnectWithoutEvent_partnerInput | EventPartnerPackagesCreateOrConnectWithoutEvent_partnerInput[]
    upsert?: EventPartnerPackagesUpsertWithWhereUniqueWithoutEvent_partnerInput | EventPartnerPackagesUpsertWithWhereUniqueWithoutEvent_partnerInput[]
    createMany?: EventPartnerPackagesCreateManyEvent_partnerInputEnvelope
    set?: EventPartnerPackagesWhereUniqueInput | EventPartnerPackagesWhereUniqueInput[]
    disconnect?: EventPartnerPackagesWhereUniqueInput | EventPartnerPackagesWhereUniqueInput[]
    delete?: EventPartnerPackagesWhereUniqueInput | EventPartnerPackagesWhereUniqueInput[]
    connect?: EventPartnerPackagesWhereUniqueInput | EventPartnerPackagesWhereUniqueInput[]
    update?: EventPartnerPackagesUpdateWithWhereUniqueWithoutEvent_partnerInput | EventPartnerPackagesUpdateWithWhereUniqueWithoutEvent_partnerInput[]
    updateMany?: EventPartnerPackagesUpdateManyWithWhereWithoutEvent_partnerInput | EventPartnerPackagesUpdateManyWithWhereWithoutEvent_partnerInput[]
    deleteMany?: EventPartnerPackagesScalarWhereInput | EventPartnerPackagesScalarWhereInput[]
  }

  export type EventPartnerPackagesUncheckedUpdateManyWithoutEvent_partnerNestedInput = {
    create?: XOR<EventPartnerPackagesCreateWithoutEvent_partnerInput, EventPartnerPackagesUncheckedCreateWithoutEvent_partnerInput> | EventPartnerPackagesCreateWithoutEvent_partnerInput[] | EventPartnerPackagesUncheckedCreateWithoutEvent_partnerInput[]
    connectOrCreate?: EventPartnerPackagesCreateOrConnectWithoutEvent_partnerInput | EventPartnerPackagesCreateOrConnectWithoutEvent_partnerInput[]
    upsert?: EventPartnerPackagesUpsertWithWhereUniqueWithoutEvent_partnerInput | EventPartnerPackagesUpsertWithWhereUniqueWithoutEvent_partnerInput[]
    createMany?: EventPartnerPackagesCreateManyEvent_partnerInputEnvelope
    set?: EventPartnerPackagesWhereUniqueInput | EventPartnerPackagesWhereUniqueInput[]
    disconnect?: EventPartnerPackagesWhereUniqueInput | EventPartnerPackagesWhereUniqueInput[]
    delete?: EventPartnerPackagesWhereUniqueInput | EventPartnerPackagesWhereUniqueInput[]
    connect?: EventPartnerPackagesWhereUniqueInput | EventPartnerPackagesWhereUniqueInput[]
    update?: EventPartnerPackagesUpdateWithWhereUniqueWithoutEvent_partnerInput | EventPartnerPackagesUpdateWithWhereUniqueWithoutEvent_partnerInput[]
    updateMany?: EventPartnerPackagesUpdateManyWithWhereWithoutEvent_partnerInput | EventPartnerPackagesUpdateManyWithWhereWithoutEvent_partnerInput[]
    deleteMany?: EventPartnerPackagesScalarWhereInput | EventPartnerPackagesScalarWhereInput[]
  }

  export type EventPartnerPackagesCreateNestedManyWithoutEvent_packageInput = {
    create?: XOR<EventPartnerPackagesCreateWithoutEvent_packageInput, EventPartnerPackagesUncheckedCreateWithoutEvent_packageInput> | EventPartnerPackagesCreateWithoutEvent_packageInput[] | EventPartnerPackagesUncheckedCreateWithoutEvent_packageInput[]
    connectOrCreate?: EventPartnerPackagesCreateOrConnectWithoutEvent_packageInput | EventPartnerPackagesCreateOrConnectWithoutEvent_packageInput[]
    createMany?: EventPartnerPackagesCreateManyEvent_packageInputEnvelope
    connect?: EventPartnerPackagesWhereUniqueInput | EventPartnerPackagesWhereUniqueInput[]
  }

  export type EventPartnerPackagesUncheckedCreateNestedManyWithoutEvent_packageInput = {
    create?: XOR<EventPartnerPackagesCreateWithoutEvent_packageInput, EventPartnerPackagesUncheckedCreateWithoutEvent_packageInput> | EventPartnerPackagesCreateWithoutEvent_packageInput[] | EventPartnerPackagesUncheckedCreateWithoutEvent_packageInput[]
    connectOrCreate?: EventPartnerPackagesCreateOrConnectWithoutEvent_packageInput | EventPartnerPackagesCreateOrConnectWithoutEvent_packageInput[]
    createMany?: EventPartnerPackagesCreateManyEvent_packageInputEnvelope
    connect?: EventPartnerPackagesWhereUniqueInput | EventPartnerPackagesWhereUniqueInput[]
  }

  export type EventPartnerPackagesUpdateManyWithoutEvent_packageNestedInput = {
    create?: XOR<EventPartnerPackagesCreateWithoutEvent_packageInput, EventPartnerPackagesUncheckedCreateWithoutEvent_packageInput> | EventPartnerPackagesCreateWithoutEvent_packageInput[] | EventPartnerPackagesUncheckedCreateWithoutEvent_packageInput[]
    connectOrCreate?: EventPartnerPackagesCreateOrConnectWithoutEvent_packageInput | EventPartnerPackagesCreateOrConnectWithoutEvent_packageInput[]
    upsert?: EventPartnerPackagesUpsertWithWhereUniqueWithoutEvent_packageInput | EventPartnerPackagesUpsertWithWhereUniqueWithoutEvent_packageInput[]
    createMany?: EventPartnerPackagesCreateManyEvent_packageInputEnvelope
    set?: EventPartnerPackagesWhereUniqueInput | EventPartnerPackagesWhereUniqueInput[]
    disconnect?: EventPartnerPackagesWhereUniqueInput | EventPartnerPackagesWhereUniqueInput[]
    delete?: EventPartnerPackagesWhereUniqueInput | EventPartnerPackagesWhereUniqueInput[]
    connect?: EventPartnerPackagesWhereUniqueInput | EventPartnerPackagesWhereUniqueInput[]
    update?: EventPartnerPackagesUpdateWithWhereUniqueWithoutEvent_packageInput | EventPartnerPackagesUpdateWithWhereUniqueWithoutEvent_packageInput[]
    updateMany?: EventPartnerPackagesUpdateManyWithWhereWithoutEvent_packageInput | EventPartnerPackagesUpdateManyWithWhereWithoutEvent_packageInput[]
    deleteMany?: EventPartnerPackagesScalarWhereInput | EventPartnerPackagesScalarWhereInput[]
  }

  export type EventPartnerPackagesUncheckedUpdateManyWithoutEvent_packageNestedInput = {
    create?: XOR<EventPartnerPackagesCreateWithoutEvent_packageInput, EventPartnerPackagesUncheckedCreateWithoutEvent_packageInput> | EventPartnerPackagesCreateWithoutEvent_packageInput[] | EventPartnerPackagesUncheckedCreateWithoutEvent_packageInput[]
    connectOrCreate?: EventPartnerPackagesCreateOrConnectWithoutEvent_packageInput | EventPartnerPackagesCreateOrConnectWithoutEvent_packageInput[]
    upsert?: EventPartnerPackagesUpsertWithWhereUniqueWithoutEvent_packageInput | EventPartnerPackagesUpsertWithWhereUniqueWithoutEvent_packageInput[]
    createMany?: EventPartnerPackagesCreateManyEvent_packageInputEnvelope
    set?: EventPartnerPackagesWhereUniqueInput | EventPartnerPackagesWhereUniqueInput[]
    disconnect?: EventPartnerPackagesWhereUniqueInput | EventPartnerPackagesWhereUniqueInput[]
    delete?: EventPartnerPackagesWhereUniqueInput | EventPartnerPackagesWhereUniqueInput[]
    connect?: EventPartnerPackagesWhereUniqueInput | EventPartnerPackagesWhereUniqueInput[]
    update?: EventPartnerPackagesUpdateWithWhereUniqueWithoutEvent_packageInput | EventPartnerPackagesUpdateWithWhereUniqueWithoutEvent_packageInput[]
    updateMany?: EventPartnerPackagesUpdateManyWithWhereWithoutEvent_packageInput | EventPartnerPackagesUpdateManyWithWhereWithoutEvent_packageInput[]
    deleteMany?: EventPartnerPackagesScalarWhereInput | EventPartnerPackagesScalarWhereInput[]
  }

  export type BoothsCreateNestedOneWithoutAssigned_boothsInput = {
    create?: XOR<BoothsCreateWithoutAssigned_boothsInput, BoothsUncheckedCreateWithoutAssigned_boothsInput>
    connectOrCreate?: BoothsCreateOrConnectWithoutAssigned_boothsInput
    connect?: BoothsWhereUniqueInput
  }

  export type ExhibitorsCreateNestedOneWithoutAssigned_boothsInput = {
    create?: XOR<ExhibitorsCreateWithoutAssigned_boothsInput, ExhibitorsUncheckedCreateWithoutAssigned_boothsInput>
    connectOrCreate?: ExhibitorsCreateOrConnectWithoutAssigned_boothsInput
    connect?: ExhibitorsWhereUniqueInput
  }

  export type BoothsUpdateOneRequiredWithoutAssigned_boothsNestedInput = {
    create?: XOR<BoothsCreateWithoutAssigned_boothsInput, BoothsUncheckedCreateWithoutAssigned_boothsInput>
    connectOrCreate?: BoothsCreateOrConnectWithoutAssigned_boothsInput
    upsert?: BoothsUpsertWithoutAssigned_boothsInput
    connect?: BoothsWhereUniqueInput
    update?: XOR<XOR<BoothsUpdateToOneWithWhereWithoutAssigned_boothsInput, BoothsUpdateWithoutAssigned_boothsInput>, BoothsUncheckedUpdateWithoutAssigned_boothsInput>
  }

  export type ExhibitorsUpdateOneRequiredWithoutAssigned_boothsNestedInput = {
    create?: XOR<ExhibitorsCreateWithoutAssigned_boothsInput, ExhibitorsUncheckedCreateWithoutAssigned_boothsInput>
    connectOrCreate?: ExhibitorsCreateOrConnectWithoutAssigned_boothsInput
    upsert?: ExhibitorsUpsertWithoutAssigned_boothsInput
    connect?: ExhibitorsWhereUniqueInput
    update?: XOR<XOR<ExhibitorsUpdateToOneWithWhereWithoutAssigned_boothsInput, ExhibitorsUpdateWithoutAssigned_boothsInput>, ExhibitorsUncheckedUpdateWithoutAssigned_boothsInput>
  }

  export type EventPartnersCreateNestedOneWithoutEventPartnerPackagesInput = {
    create?: XOR<EventPartnersCreateWithoutEventPartnerPackagesInput, EventPartnersUncheckedCreateWithoutEventPartnerPackagesInput>
    connectOrCreate?: EventPartnersCreateOrConnectWithoutEventPartnerPackagesInput
    connect?: EventPartnersWhereUniqueInput
  }

  export type EventPackagesCreateNestedOneWithoutEventPartnerPackagesInput = {
    create?: XOR<EventPackagesCreateWithoutEventPartnerPackagesInput, EventPackagesUncheckedCreateWithoutEventPartnerPackagesInput>
    connectOrCreate?: EventPackagesCreateOrConnectWithoutEventPartnerPackagesInput
    connect?: EventPackagesWhereUniqueInput
  }

  export type EventPartnersUpdateOneRequiredWithoutEventPartnerPackagesNestedInput = {
    create?: XOR<EventPartnersCreateWithoutEventPartnerPackagesInput, EventPartnersUncheckedCreateWithoutEventPartnerPackagesInput>
    connectOrCreate?: EventPartnersCreateOrConnectWithoutEventPartnerPackagesInput
    upsert?: EventPartnersUpsertWithoutEventPartnerPackagesInput
    connect?: EventPartnersWhereUniqueInput
    update?: XOR<XOR<EventPartnersUpdateToOneWithWhereWithoutEventPartnerPackagesInput, EventPartnersUpdateWithoutEventPartnerPackagesInput>, EventPartnersUncheckedUpdateWithoutEventPartnerPackagesInput>
  }

  export type EventPackagesUpdateOneRequiredWithoutEventPartnerPackagesNestedInput = {
    create?: XOR<EventPackagesCreateWithoutEventPartnerPackagesInput, EventPackagesUncheckedCreateWithoutEventPartnerPackagesInput>
    connectOrCreate?: EventPackagesCreateOrConnectWithoutEventPartnerPackagesInput
    upsert?: EventPackagesUpsertWithoutEventPartnerPackagesInput
    connect?: EventPackagesWhereUniqueInput
    update?: XOR<XOR<EventPackagesUpdateToOneWithWhereWithoutEventPartnerPackagesInput, EventPackagesUpdateWithoutEventPartnerPackagesInput>, EventPackagesUncheckedUpdateWithoutEventPartnerPackagesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumOrganizationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.OrganizationType | EnumOrganizationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OrganizationType[]
    notIn?: $Enums.OrganizationType[]
    not?: NestedEnumOrganizationTypeFilter<$PrismaModel> | $Enums.OrganizationType
  }

  export type NestedEnumOrganizationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrganizationType | EnumOrganizationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OrganizationType[]
    notIn?: $Enums.OrganizationType[]
    not?: NestedEnumOrganizationTypeWithAggregatesFilter<$PrismaModel> | $Enums.OrganizationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrganizationTypeFilter<$PrismaModel>
    _max?: NestedEnumOrganizationTypeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[]
    notIn?: $Enums.Status[]
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type NestedEnumCreatorTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.CreatorType | EnumCreatorTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.CreatorType[] | null
    notIn?: $Enums.CreatorType[] | null
    not?: NestedEnumCreatorTypeNullableFilter<$PrismaModel> | $Enums.CreatorType | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[]
    notIn?: $Enums.Status[]
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type NestedEnumCreatorTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CreatorType | EnumCreatorTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.CreatorType[] | null
    notIn?: $Enums.CreatorType[] | null
    not?: NestedEnumCreatorTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.CreatorType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumCreatorTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumCreatorTypeNullableFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type OrganizationCreateWithoutChildrenInput = {
    name: string
    abbreviation?: string | null
    type?: $Enums.OrganizationType
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: OrganizationCreateNestedOneWithoutChildrenInput
  }

  export type OrganizationUncheckedCreateWithoutChildrenInput = {
    id?: number
    name: string
    abbreviation?: string | null
    type?: $Enums.OrganizationType
    parentId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrganizationCreateOrConnectWithoutChildrenInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutChildrenInput, OrganizationUncheckedCreateWithoutChildrenInput>
  }

  export type OrganizationCreateWithoutParentInput = {
    name: string
    abbreviation?: string | null
    type?: $Enums.OrganizationType
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: OrganizationCreateNestedManyWithoutParentInput
  }

  export type OrganizationUncheckedCreateWithoutParentInput = {
    id?: number
    name: string
    abbreviation?: string | null
    type?: $Enums.OrganizationType
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: OrganizationUncheckedCreateNestedManyWithoutParentInput
  }

  export type OrganizationCreateOrConnectWithoutParentInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutParentInput, OrganizationUncheckedCreateWithoutParentInput>
  }

  export type OrganizationCreateManyParentInputEnvelope = {
    data: OrganizationCreateManyParentInput | OrganizationCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type OrganizationUpsertWithoutChildrenInput = {
    update: XOR<OrganizationUpdateWithoutChildrenInput, OrganizationUncheckedUpdateWithoutChildrenInput>
    create: XOR<OrganizationCreateWithoutChildrenInput, OrganizationUncheckedCreateWithoutChildrenInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutChildrenInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutChildrenInput, OrganizationUncheckedUpdateWithoutChildrenInput>
  }

  export type OrganizationUpdateWithoutChildrenInput = {
    name?: StringFieldUpdateOperationsInput | string
    abbreviation?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumOrganizationTypeFieldUpdateOperationsInput | $Enums.OrganizationType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: OrganizationUpdateOneWithoutChildrenNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutChildrenInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    abbreviation?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumOrganizationTypeFieldUpdateOperationsInput | $Enums.OrganizationType
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationUpsertWithWhereUniqueWithoutParentInput = {
    where: OrganizationWhereUniqueInput
    update: XOR<OrganizationUpdateWithoutParentInput, OrganizationUncheckedUpdateWithoutParentInput>
    create: XOR<OrganizationCreateWithoutParentInput, OrganizationUncheckedCreateWithoutParentInput>
  }

  export type OrganizationUpdateWithWhereUniqueWithoutParentInput = {
    where: OrganizationWhereUniqueInput
    data: XOR<OrganizationUpdateWithoutParentInput, OrganizationUncheckedUpdateWithoutParentInput>
  }

  export type OrganizationUpdateManyWithWhereWithoutParentInput = {
    where: OrganizationScalarWhereInput
    data: XOR<OrganizationUpdateManyMutationInput, OrganizationUncheckedUpdateManyWithoutParentInput>
  }

  export type OrganizationScalarWhereInput = {
    AND?: OrganizationScalarWhereInput | OrganizationScalarWhereInput[]
    OR?: OrganizationScalarWhereInput[]
    NOT?: OrganizationScalarWhereInput | OrganizationScalarWhereInput[]
    id?: IntFilter<"Organization"> | number
    name?: StringFilter<"Organization"> | string
    abbreviation?: StringNullableFilter<"Organization"> | string | null
    type?: EnumOrganizationTypeFilter<"Organization"> | $Enums.OrganizationType
    parentId?: IntNullableFilter<"Organization"> | number | null
    createdAt?: DateTimeFilter<"Organization"> | Date | string
    updatedAt?: DateTimeFilter<"Organization"> | Date | string
  }

  export type assigned_boothsCreateWithoutBoothInput = {
    assignedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    assigned_to: ExhibitorsCreateNestedOneWithoutAssigned_boothsInput
  }

  export type assigned_boothsUncheckedCreateWithoutBoothInput = {
    id?: number
    assigned_to_id: number
    assignedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type assigned_boothsCreateOrConnectWithoutBoothInput = {
    where: assigned_boothsWhereUniqueInput
    create: XOR<assigned_boothsCreateWithoutBoothInput, assigned_boothsUncheckedCreateWithoutBoothInput>
  }

  export type assigned_boothsCreateManyBoothInputEnvelope = {
    data: assigned_boothsCreateManyBoothInput | assigned_boothsCreateManyBoothInput[]
    skipDuplicates?: boolean
  }

  export type assigned_boothsUpsertWithWhereUniqueWithoutBoothInput = {
    where: assigned_boothsWhereUniqueInput
    update: XOR<assigned_boothsUpdateWithoutBoothInput, assigned_boothsUncheckedUpdateWithoutBoothInput>
    create: XOR<assigned_boothsCreateWithoutBoothInput, assigned_boothsUncheckedCreateWithoutBoothInput>
  }

  export type assigned_boothsUpdateWithWhereUniqueWithoutBoothInput = {
    where: assigned_boothsWhereUniqueInput
    data: XOR<assigned_boothsUpdateWithoutBoothInput, assigned_boothsUncheckedUpdateWithoutBoothInput>
  }

  export type assigned_boothsUpdateManyWithWhereWithoutBoothInput = {
    where: assigned_boothsScalarWhereInput
    data: XOR<assigned_boothsUpdateManyMutationInput, assigned_boothsUncheckedUpdateManyWithoutBoothInput>
  }

  export type assigned_boothsScalarWhereInput = {
    AND?: assigned_boothsScalarWhereInput | assigned_boothsScalarWhereInput[]
    OR?: assigned_boothsScalarWhereInput[]
    NOT?: assigned_boothsScalarWhereInput | assigned_boothsScalarWhereInput[]
    id?: IntFilter<"assigned_booths"> | number
    booth_id?: IntFilter<"assigned_booths"> | number
    assigned_to_id?: IntFilter<"assigned_booths"> | number
    assignedAt?: DateTimeFilter<"assigned_booths"> | Date | string
    createdAt?: DateTimeFilter<"assigned_booths"> | Date | string
    updatedAt?: DateTimeFilter<"assigned_booths"> | Date | string
  }

  export type assigned_boothsCreateWithoutAssigned_toInput = {
    assignedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    booth: BoothsCreateNestedOneWithoutAssigned_boothsInput
  }

  export type assigned_boothsUncheckedCreateWithoutAssigned_toInput = {
    id?: number
    booth_id: number
    assignedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type assigned_boothsCreateOrConnectWithoutAssigned_toInput = {
    where: assigned_boothsWhereUniqueInput
    create: XOR<assigned_boothsCreateWithoutAssigned_toInput, assigned_boothsUncheckedCreateWithoutAssigned_toInput>
  }

  export type assigned_boothsCreateManyAssigned_toInputEnvelope = {
    data: assigned_boothsCreateManyAssigned_toInput | assigned_boothsCreateManyAssigned_toInput[]
    skipDuplicates?: boolean
  }

  export type assigned_boothsUpsertWithWhereUniqueWithoutAssigned_toInput = {
    where: assigned_boothsWhereUniqueInput
    update: XOR<assigned_boothsUpdateWithoutAssigned_toInput, assigned_boothsUncheckedUpdateWithoutAssigned_toInput>
    create: XOR<assigned_boothsCreateWithoutAssigned_toInput, assigned_boothsUncheckedCreateWithoutAssigned_toInput>
  }

  export type assigned_boothsUpdateWithWhereUniqueWithoutAssigned_toInput = {
    where: assigned_boothsWhereUniqueInput
    data: XOR<assigned_boothsUpdateWithoutAssigned_toInput, assigned_boothsUncheckedUpdateWithoutAssigned_toInput>
  }

  export type assigned_boothsUpdateManyWithWhereWithoutAssigned_toInput = {
    where: assigned_boothsScalarWhereInput
    data: XOR<assigned_boothsUpdateManyMutationInput, assigned_boothsUncheckedUpdateManyWithoutAssigned_toInput>
  }

  export type EventPartnerPackagesCreateWithoutEvent_partnerInput = {
    payment_reference?: string | null
    payment_status?: $Enums.Status
    payment_method?: string | null
    proof_of_payment?: string | null
    assignedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    event_package: EventPackagesCreateNestedOneWithoutEventPartnerPackagesInput
  }

  export type EventPartnerPackagesUncheckedCreateWithoutEvent_partnerInput = {
    id?: number
    event_package_id: number
    payment_reference?: string | null
    payment_status?: $Enums.Status
    payment_method?: string | null
    proof_of_payment?: string | null
    assignedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventPartnerPackagesCreateOrConnectWithoutEvent_partnerInput = {
    where: EventPartnerPackagesWhereUniqueInput
    create: XOR<EventPartnerPackagesCreateWithoutEvent_partnerInput, EventPartnerPackagesUncheckedCreateWithoutEvent_partnerInput>
  }

  export type EventPartnerPackagesCreateManyEvent_partnerInputEnvelope = {
    data: EventPartnerPackagesCreateManyEvent_partnerInput | EventPartnerPackagesCreateManyEvent_partnerInput[]
    skipDuplicates?: boolean
  }

  export type EventPartnerPackagesUpsertWithWhereUniqueWithoutEvent_partnerInput = {
    where: EventPartnerPackagesWhereUniqueInput
    update: XOR<EventPartnerPackagesUpdateWithoutEvent_partnerInput, EventPartnerPackagesUncheckedUpdateWithoutEvent_partnerInput>
    create: XOR<EventPartnerPackagesCreateWithoutEvent_partnerInput, EventPartnerPackagesUncheckedCreateWithoutEvent_partnerInput>
  }

  export type EventPartnerPackagesUpdateWithWhereUniqueWithoutEvent_partnerInput = {
    where: EventPartnerPackagesWhereUniqueInput
    data: XOR<EventPartnerPackagesUpdateWithoutEvent_partnerInput, EventPartnerPackagesUncheckedUpdateWithoutEvent_partnerInput>
  }

  export type EventPartnerPackagesUpdateManyWithWhereWithoutEvent_partnerInput = {
    where: EventPartnerPackagesScalarWhereInput
    data: XOR<EventPartnerPackagesUpdateManyMutationInput, EventPartnerPackagesUncheckedUpdateManyWithoutEvent_partnerInput>
  }

  export type EventPartnerPackagesScalarWhereInput = {
    AND?: EventPartnerPackagesScalarWhereInput | EventPartnerPackagesScalarWhereInput[]
    OR?: EventPartnerPackagesScalarWhereInput[]
    NOT?: EventPartnerPackagesScalarWhereInput | EventPartnerPackagesScalarWhereInput[]
    id?: IntFilter<"EventPartnerPackages"> | number
    event_partner_id?: IntFilter<"EventPartnerPackages"> | number
    event_package_id?: IntFilter<"EventPartnerPackages"> | number
    payment_reference?: StringNullableFilter<"EventPartnerPackages"> | string | null
    payment_status?: EnumStatusFilter<"EventPartnerPackages"> | $Enums.Status
    payment_method?: StringNullableFilter<"EventPartnerPackages"> | string | null
    proof_of_payment?: StringNullableFilter<"EventPartnerPackages"> | string | null
    assignedAt?: DateTimeFilter<"EventPartnerPackages"> | Date | string
    createdAt?: DateTimeFilter<"EventPartnerPackages"> | Date | string
    updatedAt?: DateTimeFilter<"EventPartnerPackages"> | Date | string
  }

  export type EventPartnerPackagesCreateWithoutEvent_packageInput = {
    payment_reference?: string | null
    payment_status?: $Enums.Status
    payment_method?: string | null
    proof_of_payment?: string | null
    assignedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    event_partner: EventPartnersCreateNestedOneWithoutEventPartnerPackagesInput
  }

  export type EventPartnerPackagesUncheckedCreateWithoutEvent_packageInput = {
    id?: number
    event_partner_id: number
    payment_reference?: string | null
    payment_status?: $Enums.Status
    payment_method?: string | null
    proof_of_payment?: string | null
    assignedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventPartnerPackagesCreateOrConnectWithoutEvent_packageInput = {
    where: EventPartnerPackagesWhereUniqueInput
    create: XOR<EventPartnerPackagesCreateWithoutEvent_packageInput, EventPartnerPackagesUncheckedCreateWithoutEvent_packageInput>
  }

  export type EventPartnerPackagesCreateManyEvent_packageInputEnvelope = {
    data: EventPartnerPackagesCreateManyEvent_packageInput | EventPartnerPackagesCreateManyEvent_packageInput[]
    skipDuplicates?: boolean
  }

  export type EventPartnerPackagesUpsertWithWhereUniqueWithoutEvent_packageInput = {
    where: EventPartnerPackagesWhereUniqueInput
    update: XOR<EventPartnerPackagesUpdateWithoutEvent_packageInput, EventPartnerPackagesUncheckedUpdateWithoutEvent_packageInput>
    create: XOR<EventPartnerPackagesCreateWithoutEvent_packageInput, EventPartnerPackagesUncheckedCreateWithoutEvent_packageInput>
  }

  export type EventPartnerPackagesUpdateWithWhereUniqueWithoutEvent_packageInput = {
    where: EventPartnerPackagesWhereUniqueInput
    data: XOR<EventPartnerPackagesUpdateWithoutEvent_packageInput, EventPartnerPackagesUncheckedUpdateWithoutEvent_packageInput>
  }

  export type EventPartnerPackagesUpdateManyWithWhereWithoutEvent_packageInput = {
    where: EventPartnerPackagesScalarWhereInput
    data: XOR<EventPartnerPackagesUpdateManyMutationInput, EventPartnerPackagesUncheckedUpdateManyWithoutEvent_packageInput>
  }

  export type BoothsCreateWithoutAssigned_boothsInput = {
    booth_number: string
    location: string
    price: number
    booth_size: string
    features: JsonNullValueInput | InputJsonValue
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BoothsUncheckedCreateWithoutAssigned_boothsInput = {
    id?: number
    booth_number: string
    location: string
    price: number
    booth_size: string
    features: JsonNullValueInput | InputJsonValue
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BoothsCreateOrConnectWithoutAssigned_boothsInput = {
    where: BoothsWhereUniqueInput
    create: XOR<BoothsCreateWithoutAssigned_boothsInput, BoothsUncheckedCreateWithoutAssigned_boothsInput>
  }

  export type ExhibitorsCreateWithoutAssigned_boothsInput = {
    prefix?: string | null
    company_name: string
    contact_person: string
    contact_email: string
    contact_phone: string
    website?: string | null
    description?: string | null
    service_product_to_exhibit?: string | null
    password: string
    role?: $Enums.Role
    status?: $Enums.Status
    registeredAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExhibitorsUncheckedCreateWithoutAssigned_boothsInput = {
    id?: number
    prefix?: string | null
    company_name: string
    contact_person: string
    contact_email: string
    contact_phone: string
    website?: string | null
    description?: string | null
    service_product_to_exhibit?: string | null
    password: string
    role?: $Enums.Role
    status?: $Enums.Status
    registeredAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExhibitorsCreateOrConnectWithoutAssigned_boothsInput = {
    where: ExhibitorsWhereUniqueInput
    create: XOR<ExhibitorsCreateWithoutAssigned_boothsInput, ExhibitorsUncheckedCreateWithoutAssigned_boothsInput>
  }

  export type BoothsUpsertWithoutAssigned_boothsInput = {
    update: XOR<BoothsUpdateWithoutAssigned_boothsInput, BoothsUncheckedUpdateWithoutAssigned_boothsInput>
    create: XOR<BoothsCreateWithoutAssigned_boothsInput, BoothsUncheckedCreateWithoutAssigned_boothsInput>
    where?: BoothsWhereInput
  }

  export type BoothsUpdateToOneWithWhereWithoutAssigned_boothsInput = {
    where?: BoothsWhereInput
    data: XOR<BoothsUpdateWithoutAssigned_boothsInput, BoothsUncheckedUpdateWithoutAssigned_boothsInput>
  }

  export type BoothsUpdateWithoutAssigned_boothsInput = {
    booth_number?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    booth_size?: StringFieldUpdateOperationsInput | string
    features?: JsonNullValueInput | InputJsonValue
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BoothsUncheckedUpdateWithoutAssigned_boothsInput = {
    id?: IntFieldUpdateOperationsInput | number
    booth_number?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    booth_size?: StringFieldUpdateOperationsInput | string
    features?: JsonNullValueInput | InputJsonValue
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExhibitorsUpsertWithoutAssigned_boothsInput = {
    update: XOR<ExhibitorsUpdateWithoutAssigned_boothsInput, ExhibitorsUncheckedUpdateWithoutAssigned_boothsInput>
    create: XOR<ExhibitorsCreateWithoutAssigned_boothsInput, ExhibitorsUncheckedCreateWithoutAssigned_boothsInput>
    where?: ExhibitorsWhereInput
  }

  export type ExhibitorsUpdateToOneWithWhereWithoutAssigned_boothsInput = {
    where?: ExhibitorsWhereInput
    data: XOR<ExhibitorsUpdateWithoutAssigned_boothsInput, ExhibitorsUncheckedUpdateWithoutAssigned_boothsInput>
  }

  export type ExhibitorsUpdateWithoutAssigned_boothsInput = {
    prefix?: NullableStringFieldUpdateOperationsInput | string | null
    company_name?: StringFieldUpdateOperationsInput | string
    contact_person?: StringFieldUpdateOperationsInput | string
    contact_email?: StringFieldUpdateOperationsInput | string
    contact_phone?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    service_product_to_exhibit?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExhibitorsUncheckedUpdateWithoutAssigned_boothsInput = {
    id?: IntFieldUpdateOperationsInput | number
    prefix?: NullableStringFieldUpdateOperationsInput | string | null
    company_name?: StringFieldUpdateOperationsInput | string
    contact_person?: StringFieldUpdateOperationsInput | string
    contact_email?: StringFieldUpdateOperationsInput | string
    contact_phone?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    service_product_to_exhibit?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventPartnersCreateWithoutEventPartnerPackagesInput = {
    prefix?: string | null
    fullname: string
    email: string
    phone_number: string
    company_name: string
    logo: string
    website?: string | null
    social_media?: NullableJsonNullValueInput | InputJsonValue
    description?: string | null
    why_interested?: string | null
    password: string
    role?: $Enums.Role
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventPartnersUncheckedCreateWithoutEventPartnerPackagesInput = {
    id?: number
    prefix?: string | null
    fullname: string
    email: string
    phone_number: string
    company_name: string
    logo: string
    website?: string | null
    social_media?: NullableJsonNullValueInput | InputJsonValue
    description?: string | null
    why_interested?: string | null
    password: string
    role?: $Enums.Role
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventPartnersCreateOrConnectWithoutEventPartnerPackagesInput = {
    where: EventPartnersWhereUniqueInput
    create: XOR<EventPartnersCreateWithoutEventPartnerPackagesInput, EventPartnersUncheckedCreateWithoutEventPartnerPackagesInput>
  }

  export type EventPackagesCreateWithoutEventPartnerPackagesInput = {
    name: string
    description: string
    price: number
    features: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventPackagesUncheckedCreateWithoutEventPartnerPackagesInput = {
    id?: number
    name: string
    description: string
    price: number
    features: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventPackagesCreateOrConnectWithoutEventPartnerPackagesInput = {
    where: EventPackagesWhereUniqueInput
    create: XOR<EventPackagesCreateWithoutEventPartnerPackagesInput, EventPackagesUncheckedCreateWithoutEventPartnerPackagesInput>
  }

  export type EventPartnersUpsertWithoutEventPartnerPackagesInput = {
    update: XOR<EventPartnersUpdateWithoutEventPartnerPackagesInput, EventPartnersUncheckedUpdateWithoutEventPartnerPackagesInput>
    create: XOR<EventPartnersCreateWithoutEventPartnerPackagesInput, EventPartnersUncheckedCreateWithoutEventPartnerPackagesInput>
    where?: EventPartnersWhereInput
  }

  export type EventPartnersUpdateToOneWithWhereWithoutEventPartnerPackagesInput = {
    where?: EventPartnersWhereInput
    data: XOR<EventPartnersUpdateWithoutEventPartnerPackagesInput, EventPartnersUncheckedUpdateWithoutEventPartnerPackagesInput>
  }

  export type EventPartnersUpdateWithoutEventPartnerPackagesInput = {
    prefix?: NullableStringFieldUpdateOperationsInput | string | null
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    social_media?: NullableJsonNullValueInput | InputJsonValue
    description?: NullableStringFieldUpdateOperationsInput | string | null
    why_interested?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventPartnersUncheckedUpdateWithoutEventPartnerPackagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    prefix?: NullableStringFieldUpdateOperationsInput | string | null
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    social_media?: NullableJsonNullValueInput | InputJsonValue
    description?: NullableStringFieldUpdateOperationsInput | string | null
    why_interested?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventPackagesUpsertWithoutEventPartnerPackagesInput = {
    update: XOR<EventPackagesUpdateWithoutEventPartnerPackagesInput, EventPackagesUncheckedUpdateWithoutEventPartnerPackagesInput>
    create: XOR<EventPackagesCreateWithoutEventPartnerPackagesInput, EventPackagesUncheckedCreateWithoutEventPartnerPackagesInput>
    where?: EventPackagesWhereInput
  }

  export type EventPackagesUpdateToOneWithWhereWithoutEventPartnerPackagesInput = {
    where?: EventPackagesWhereInput
    data: XOR<EventPackagesUpdateWithoutEventPartnerPackagesInput, EventPackagesUncheckedUpdateWithoutEventPartnerPackagesInput>
  }

  export type EventPackagesUpdateWithoutEventPartnerPackagesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    features?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventPackagesUncheckedUpdateWithoutEventPartnerPackagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    features?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationCreateManyParentInput = {
    id?: number
    name: string
    abbreviation?: string | null
    type?: $Enums.OrganizationType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrganizationUpdateWithoutParentInput = {
    name?: StringFieldUpdateOperationsInput | string
    abbreviation?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumOrganizationTypeFieldUpdateOperationsInput | $Enums.OrganizationType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: OrganizationUpdateManyWithoutParentNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutParentInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    abbreviation?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumOrganizationTypeFieldUpdateOperationsInput | $Enums.OrganizationType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: OrganizationUncheckedUpdateManyWithoutParentNestedInput
  }

  export type OrganizationUncheckedUpdateManyWithoutParentInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    abbreviation?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumOrganizationTypeFieldUpdateOperationsInput | $Enums.OrganizationType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type assigned_boothsCreateManyBoothInput = {
    id?: number
    assigned_to_id: number
    assignedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type assigned_boothsUpdateWithoutBoothInput = {
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assigned_to?: ExhibitorsUpdateOneRequiredWithoutAssigned_boothsNestedInput
  }

  export type assigned_boothsUncheckedUpdateWithoutBoothInput = {
    id?: IntFieldUpdateOperationsInput | number
    assigned_to_id?: IntFieldUpdateOperationsInput | number
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type assigned_boothsUncheckedUpdateManyWithoutBoothInput = {
    id?: IntFieldUpdateOperationsInput | number
    assigned_to_id?: IntFieldUpdateOperationsInput | number
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type assigned_boothsCreateManyAssigned_toInput = {
    id?: number
    booth_id: number
    assignedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type assigned_boothsUpdateWithoutAssigned_toInput = {
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    booth?: BoothsUpdateOneRequiredWithoutAssigned_boothsNestedInput
  }

  export type assigned_boothsUncheckedUpdateWithoutAssigned_toInput = {
    id?: IntFieldUpdateOperationsInput | number
    booth_id?: IntFieldUpdateOperationsInput | number
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type assigned_boothsUncheckedUpdateManyWithoutAssigned_toInput = {
    id?: IntFieldUpdateOperationsInput | number
    booth_id?: IntFieldUpdateOperationsInput | number
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventPartnerPackagesCreateManyEvent_partnerInput = {
    id?: number
    event_package_id: number
    payment_reference?: string | null
    payment_status?: $Enums.Status
    payment_method?: string | null
    proof_of_payment?: string | null
    assignedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventPartnerPackagesUpdateWithoutEvent_partnerInput = {
    payment_reference?: NullableStringFieldUpdateOperationsInput | string | null
    payment_status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    proof_of_payment?: NullableStringFieldUpdateOperationsInput | string | null
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event_package?: EventPackagesUpdateOneRequiredWithoutEventPartnerPackagesNestedInput
  }

  export type EventPartnerPackagesUncheckedUpdateWithoutEvent_partnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    event_package_id?: IntFieldUpdateOperationsInput | number
    payment_reference?: NullableStringFieldUpdateOperationsInput | string | null
    payment_status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    proof_of_payment?: NullableStringFieldUpdateOperationsInput | string | null
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventPartnerPackagesUncheckedUpdateManyWithoutEvent_partnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    event_package_id?: IntFieldUpdateOperationsInput | number
    payment_reference?: NullableStringFieldUpdateOperationsInput | string | null
    payment_status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    proof_of_payment?: NullableStringFieldUpdateOperationsInput | string | null
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventPartnerPackagesCreateManyEvent_packageInput = {
    id?: number
    event_partner_id: number
    payment_reference?: string | null
    payment_status?: $Enums.Status
    payment_method?: string | null
    proof_of_payment?: string | null
    assignedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventPartnerPackagesUpdateWithoutEvent_packageInput = {
    payment_reference?: NullableStringFieldUpdateOperationsInput | string | null
    payment_status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    proof_of_payment?: NullableStringFieldUpdateOperationsInput | string | null
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event_partner?: EventPartnersUpdateOneRequiredWithoutEventPartnerPackagesNestedInput
  }

  export type EventPartnerPackagesUncheckedUpdateWithoutEvent_packageInput = {
    id?: IntFieldUpdateOperationsInput | number
    event_partner_id?: IntFieldUpdateOperationsInput | number
    payment_reference?: NullableStringFieldUpdateOperationsInput | string | null
    payment_status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    proof_of_payment?: NullableStringFieldUpdateOperationsInput | string | null
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventPartnerPackagesUncheckedUpdateManyWithoutEvent_packageInput = {
    id?: IntFieldUpdateOperationsInput | number
    event_partner_id?: IntFieldUpdateOperationsInput | number
    payment_reference?: NullableStringFieldUpdateOperationsInput | string | null
    payment_status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    proof_of_payment?: NullableStringFieldUpdateOperationsInput | string | null
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}