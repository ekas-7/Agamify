
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Repository
 * 
 */
export type Repository = $Result.DefaultSelection<Prisma.$RepositoryPayload>
/**
 * Model RepoUser
 * 
 */
export type RepoUser = $Result.DefaultSelection<Prisma.$RepoUserPayload>
/**
 * Model Branch
 * 
 */
export type Branch = $Result.DefaultSelection<Prisma.$BranchPayload>
/**
 * Model Language
 * 
 */
export type Language = $Result.DefaultSelection<Prisma.$LanguagePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Owner: {
  OWNER: 'OWNER',
  CONTRIBUTOR: 'CONTRIBUTOR',
  NON_CONTRIBUTOR: 'NON_CONTRIBUTOR'
};

export type Owner = (typeof Owner)[keyof typeof Owner]


export const Role: {
  OWNER: 'OWNER',
  CONTRIBUTOR: 'CONTRIBUTOR',
  NON_CONTRIBUTOR: 'NON_CONTRIBUTOR'
};

export type Role = (typeof Role)[keyof typeof Role]


export const FrameworkCategory: {
  FRONTEND: 'FRONTEND',
  BACKEND: 'BACKEND',
  FULLSTACK: 'FULLSTACK',
  MOBILE: 'MOBILE',
  DESKTOP: 'DESKTOP'
};

export type FrameworkCategory = (typeof FrameworkCategory)[keyof typeof FrameworkCategory]

}

export type Owner = $Enums.Owner

export const Owner: typeof $Enums.Owner

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type FrameworkCategory = $Enums.FrameworkCategory

export const FrameworkCategory: typeof $Enums.FrameworkCategory

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.repository`: Exposes CRUD operations for the **Repository** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Repositories
    * const repositories = await prisma.repository.findMany()
    * ```
    */
  get repository(): Prisma.RepositoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.repoUser`: Exposes CRUD operations for the **RepoUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RepoUsers
    * const repoUsers = await prisma.repoUser.findMany()
    * ```
    */
  get repoUser(): Prisma.RepoUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.branch`: Exposes CRUD operations for the **Branch** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Branches
    * const branches = await prisma.branch.findMany()
    * ```
    */
  get branch(): Prisma.BranchDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.language`: Exposes CRUD operations for the **Language** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Languages
    * const languages = await prisma.language.findMany()
    * ```
    */
  get language(): Prisma.LanguageDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.10.1
   * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    User: 'User',
    Repository: 'Repository',
    RepoUser: 'RepoUser',
    Branch: 'Branch',
    Language: 'Language'
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
      modelProps: "user" | "repository" | "repoUser" | "branch" | "language"
      txIsolationLevel: never
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Repository: {
        payload: Prisma.$RepositoryPayload<ExtArgs>
        fields: Prisma.RepositoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RepositoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepositoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RepositoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepositoryPayload>
          }
          findFirst: {
            args: Prisma.RepositoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepositoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RepositoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepositoryPayload>
          }
          findMany: {
            args: Prisma.RepositoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepositoryPayload>[]
          }
          create: {
            args: Prisma.RepositoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepositoryPayload>
          }
          createMany: {
            args: Prisma.RepositoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RepositoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepositoryPayload>
          }
          update: {
            args: Prisma.RepositoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepositoryPayload>
          }
          deleteMany: {
            args: Prisma.RepositoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RepositoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RepositoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepositoryPayload>
          }
          aggregate: {
            args: Prisma.RepositoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRepository>
          }
          groupBy: {
            args: Prisma.RepositoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<RepositoryGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.RepositoryFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.RepositoryAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.RepositoryCountArgs<ExtArgs>
            result: $Utils.Optional<RepositoryCountAggregateOutputType> | number
          }
        }
      }
      RepoUser: {
        payload: Prisma.$RepoUserPayload<ExtArgs>
        fields: Prisma.RepoUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RepoUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepoUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RepoUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepoUserPayload>
          }
          findFirst: {
            args: Prisma.RepoUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepoUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RepoUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepoUserPayload>
          }
          findMany: {
            args: Prisma.RepoUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepoUserPayload>[]
          }
          create: {
            args: Prisma.RepoUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepoUserPayload>
          }
          createMany: {
            args: Prisma.RepoUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RepoUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepoUserPayload>
          }
          update: {
            args: Prisma.RepoUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepoUserPayload>
          }
          deleteMany: {
            args: Prisma.RepoUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RepoUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RepoUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepoUserPayload>
          }
          aggregate: {
            args: Prisma.RepoUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRepoUser>
          }
          groupBy: {
            args: Prisma.RepoUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<RepoUserGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.RepoUserFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.RepoUserAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.RepoUserCountArgs<ExtArgs>
            result: $Utils.Optional<RepoUserCountAggregateOutputType> | number
          }
        }
      }
      Branch: {
        payload: Prisma.$BranchPayload<ExtArgs>
        fields: Prisma.BranchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BranchFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BranchFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          findFirst: {
            args: Prisma.BranchFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BranchFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          findMany: {
            args: Prisma.BranchFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>[]
          }
          create: {
            args: Prisma.BranchCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          createMany: {
            args: Prisma.BranchCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BranchDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          update: {
            args: Prisma.BranchUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          deleteMany: {
            args: Prisma.BranchDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BranchUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BranchUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          aggregate: {
            args: Prisma.BranchAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBranch>
          }
          groupBy: {
            args: Prisma.BranchGroupByArgs<ExtArgs>
            result: $Utils.Optional<BranchGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.BranchFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.BranchAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.BranchCountArgs<ExtArgs>
            result: $Utils.Optional<BranchCountAggregateOutputType> | number
          }
        }
      }
      Language: {
        payload: Prisma.$LanguagePayload<ExtArgs>
        fields: Prisma.LanguageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LanguageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LanguageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>
          }
          findFirst: {
            args: Prisma.LanguageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LanguageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>
          }
          findMany: {
            args: Prisma.LanguageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>[]
          }
          create: {
            args: Prisma.LanguageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>
          }
          createMany: {
            args: Prisma.LanguageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.LanguageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>
          }
          update: {
            args: Prisma.LanguageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>
          }
          deleteMany: {
            args: Prisma.LanguageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LanguageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LanguageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>
          }
          aggregate: {
            args: Prisma.LanguageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLanguage>
          }
          groupBy: {
            args: Prisma.LanguageGroupByArgs<ExtArgs>
            result: $Utils.Optional<LanguageGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.LanguageFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.LanguageAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.LanguageCountArgs<ExtArgs>
            result: $Utils.Optional<LanguageCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    }
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
    user?: UserOmit
    repository?: RepositoryOmit
    repoUser?: RepoUserOmit
    branch?: BranchOmit
    language?: LanguageOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    repositories: number
    repoUsers: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    repositories?: boolean | UserCountOutputTypeCountRepositoriesArgs
    repoUsers?: boolean | UserCountOutputTypeCountRepoUsersArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRepositoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RepositoryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRepoUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RepoUserWhereInput
  }


  /**
   * Count Type RepositoryCountOutputType
   */

  export type RepositoryCountOutputType = {
    branches: number
    repoUsers: number
  }

  export type RepositoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    branches?: boolean | RepositoryCountOutputTypeCountBranchesArgs
    repoUsers?: boolean | RepositoryCountOutputTypeCountRepoUsersArgs
  }

  // Custom InputTypes
  /**
   * RepositoryCountOutputType without action
   */
  export type RepositoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepositoryCountOutputType
     */
    select?: RepositoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RepositoryCountOutputType without action
   */
  export type RepositoryCountOutputTypeCountBranchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BranchWhereInput
  }

  /**
   * RepositoryCountOutputType without action
   */
  export type RepositoryCountOutputTypeCountRepoUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RepoUserWhereInput
  }


  /**
   * Count Type BranchCountOutputType
   */

  export type BranchCountOutputType = {
    languages: number
  }

  export type BranchCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    languages?: boolean | BranchCountOutputTypeCountLanguagesArgs
  }

  // Custom InputTypes
  /**
   * BranchCountOutputType without action
   */
  export type BranchCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BranchCountOutputType
     */
    select?: BranchCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BranchCountOutputType without action
   */
  export type BranchCountOutputTypeCountLanguagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LanguageWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    owner: $Enums.Owner | null
    contributor: string | null
    nonContributor: string | null
    githubId: string | null
    githubUsername: string | null
    avatarUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    owner: $Enums.Owner | null
    contributor: string | null
    nonContributor: string | null
    githubId: string | null
    githubUsername: string | null
    avatarUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    owner: number
    contributor: number
    nonContributor: number
    githubId: number
    githubUsername: number
    avatarUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    owner?: true
    contributor?: true
    nonContributor?: true
    githubId?: true
    githubUsername?: true
    avatarUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    owner?: true
    contributor?: true
    nonContributor?: true
    githubId?: true
    githubUsername?: true
    avatarUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    owner?: true
    contributor?: true
    nonContributor?: true
    githubId?: true
    githubUsername?: true
    avatarUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
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
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string
    owner: $Enums.Owner
    contributor: string | null
    nonContributor: string | null
    githubId: string | null
    githubUsername: string | null
    avatarUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    owner?: boolean
    contributor?: boolean
    nonContributor?: boolean
    githubId?: boolean
    githubUsername?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    repositories?: boolean | User$repositoriesArgs<ExtArgs>
    repoUsers?: boolean | User$repoUsersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    owner?: boolean
    contributor?: boolean
    nonContributor?: boolean
    githubId?: boolean
    githubUsername?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "owner" | "contributor" | "nonContributor" | "githubId" | "githubUsername" | "avatarUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    repositories?: boolean | User$repositoriesArgs<ExtArgs>
    repoUsers?: boolean | User$repoUsersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      repositories: Prisma.$RepositoryPayload<ExtArgs>[]
      repoUsers: Prisma.$RepoUserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string
      owner: $Enums.Owner
      contributor: string | null
      nonContributor: string | null
      githubId: string | null
      githubUsername: string | null
      avatarUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    repositories<T extends User$repositoriesArgs<ExtArgs> = {}>(args?: Subset<T, User$repositoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    repoUsers<T extends User$repoUsersArgs<ExtArgs> = {}>(args?: Subset<T, User$repoUsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepoUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly owner: FieldRef<"User", 'Owner'>
    readonly contributor: FieldRef<"User", 'String'>
    readonly nonContributor: FieldRef<"User", 'String'>
    readonly githubId: FieldRef<"User", 'String'>
    readonly githubUsername: FieldRef<"User", 'String'>
    readonly avatarUrl: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User findRaw
   */
  export type UserFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User.repositories
   */
  export type User$repositoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repository
     */
    select?: RepositorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repository
     */
    omit?: RepositoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepositoryInclude<ExtArgs> | null
    where?: RepositoryWhereInput
    orderBy?: RepositoryOrderByWithRelationInput | RepositoryOrderByWithRelationInput[]
    cursor?: RepositoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RepositoryScalarFieldEnum | RepositoryScalarFieldEnum[]
  }

  /**
   * User.repoUsers
   */
  export type User$repoUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepoUser
     */
    select?: RepoUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepoUser
     */
    omit?: RepoUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepoUserInclude<ExtArgs> | null
    where?: RepoUserWhereInput
    orderBy?: RepoUserOrderByWithRelationInput | RepoUserOrderByWithRelationInput[]
    cursor?: RepoUserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RepoUserScalarFieldEnum | RepoUserScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Repository
   */

  export type AggregateRepository = {
    _count: RepositoryCountAggregateOutputType | null
    _avg: RepositoryAvgAggregateOutputType | null
    _sum: RepositorySumAggregateOutputType | null
    _min: RepositoryMinAggregateOutputType | null
    _max: RepositoryMaxAggregateOutputType | null
  }

  export type RepositoryAvgAggregateOutputType = {
    githubId: number | null
  }

  export type RepositorySumAggregateOutputType = {
    githubId: number | null
  }

  export type RepositoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    ownerId: string | null
    createdAt: Date | null
    githubId: number | null
    htmlUrl: string | null
    cloneUrl: string | null
    isPrivate: boolean | null
  }

  export type RepositoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    ownerId: string | null
    createdAt: Date | null
    githubId: number | null
    htmlUrl: string | null
    cloneUrl: string | null
    isPrivate: boolean | null
  }

  export type RepositoryCountAggregateOutputType = {
    id: number
    name: number
    description: number
    ownerId: number
    createdAt: number
    githubId: number
    htmlUrl: number
    cloneUrl: number
    isPrivate: number
    _all: number
  }


  export type RepositoryAvgAggregateInputType = {
    githubId?: true
  }

  export type RepositorySumAggregateInputType = {
    githubId?: true
  }

  export type RepositoryMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    ownerId?: true
    createdAt?: true
    githubId?: true
    htmlUrl?: true
    cloneUrl?: true
    isPrivate?: true
  }

  export type RepositoryMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    ownerId?: true
    createdAt?: true
    githubId?: true
    htmlUrl?: true
    cloneUrl?: true
    isPrivate?: true
  }

  export type RepositoryCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    ownerId?: true
    createdAt?: true
    githubId?: true
    htmlUrl?: true
    cloneUrl?: true
    isPrivate?: true
    _all?: true
  }

  export type RepositoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Repository to aggregate.
     */
    where?: RepositoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Repositories to fetch.
     */
    orderBy?: RepositoryOrderByWithRelationInput | RepositoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RepositoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Repositories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Repositories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Repositories
    **/
    _count?: true | RepositoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RepositoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RepositorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RepositoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RepositoryMaxAggregateInputType
  }

  export type GetRepositoryAggregateType<T extends RepositoryAggregateArgs> = {
        [P in keyof T & keyof AggregateRepository]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRepository[P]>
      : GetScalarType<T[P], AggregateRepository[P]>
  }




  export type RepositoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RepositoryWhereInput
    orderBy?: RepositoryOrderByWithAggregationInput | RepositoryOrderByWithAggregationInput[]
    by: RepositoryScalarFieldEnum[] | RepositoryScalarFieldEnum
    having?: RepositoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RepositoryCountAggregateInputType | true
    _avg?: RepositoryAvgAggregateInputType
    _sum?: RepositorySumAggregateInputType
    _min?: RepositoryMinAggregateInputType
    _max?: RepositoryMaxAggregateInputType
  }

  export type RepositoryGroupByOutputType = {
    id: string
    name: string
    description: string | null
    ownerId: string
    createdAt: Date
    githubId: number | null
    htmlUrl: string | null
    cloneUrl: string | null
    isPrivate: boolean
    _count: RepositoryCountAggregateOutputType | null
    _avg: RepositoryAvgAggregateOutputType | null
    _sum: RepositorySumAggregateOutputType | null
    _min: RepositoryMinAggregateOutputType | null
    _max: RepositoryMaxAggregateOutputType | null
  }

  type GetRepositoryGroupByPayload<T extends RepositoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RepositoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RepositoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RepositoryGroupByOutputType[P]>
            : GetScalarType<T[P], RepositoryGroupByOutputType[P]>
        }
      >
    >


  export type RepositorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    ownerId?: boolean
    createdAt?: boolean
    githubId?: boolean
    htmlUrl?: boolean
    cloneUrl?: boolean
    isPrivate?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    branches?: boolean | Repository$branchesArgs<ExtArgs>
    repoUsers?: boolean | Repository$repoUsersArgs<ExtArgs>
    _count?: boolean | RepositoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["repository"]>



  export type RepositorySelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    ownerId?: boolean
    createdAt?: boolean
    githubId?: boolean
    htmlUrl?: boolean
    cloneUrl?: boolean
    isPrivate?: boolean
  }

  export type RepositoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "ownerId" | "createdAt" | "githubId" | "htmlUrl" | "cloneUrl" | "isPrivate", ExtArgs["result"]["repository"]>
  export type RepositoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    branches?: boolean | Repository$branchesArgs<ExtArgs>
    repoUsers?: boolean | Repository$repoUsersArgs<ExtArgs>
    _count?: boolean | RepositoryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $RepositoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Repository"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      branches: Prisma.$BranchPayload<ExtArgs>[]
      repoUsers: Prisma.$RepoUserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      ownerId: string
      createdAt: Date
      githubId: number | null
      htmlUrl: string | null
      cloneUrl: string | null
      isPrivate: boolean
    }, ExtArgs["result"]["repository"]>
    composites: {}
  }

  type RepositoryGetPayload<S extends boolean | null | undefined | RepositoryDefaultArgs> = $Result.GetResult<Prisma.$RepositoryPayload, S>

  type RepositoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RepositoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RepositoryCountAggregateInputType | true
    }

  export interface RepositoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Repository'], meta: { name: 'Repository' } }
    /**
     * Find zero or one Repository that matches the filter.
     * @param {RepositoryFindUniqueArgs} args - Arguments to find a Repository
     * @example
     * // Get one Repository
     * const repository = await prisma.repository.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RepositoryFindUniqueArgs>(args: SelectSubset<T, RepositoryFindUniqueArgs<ExtArgs>>): Prisma__RepositoryClient<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Repository that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RepositoryFindUniqueOrThrowArgs} args - Arguments to find a Repository
     * @example
     * // Get one Repository
     * const repository = await prisma.repository.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RepositoryFindUniqueOrThrowArgs>(args: SelectSubset<T, RepositoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RepositoryClient<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Repository that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepositoryFindFirstArgs} args - Arguments to find a Repository
     * @example
     * // Get one Repository
     * const repository = await prisma.repository.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RepositoryFindFirstArgs>(args?: SelectSubset<T, RepositoryFindFirstArgs<ExtArgs>>): Prisma__RepositoryClient<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Repository that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepositoryFindFirstOrThrowArgs} args - Arguments to find a Repository
     * @example
     * // Get one Repository
     * const repository = await prisma.repository.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RepositoryFindFirstOrThrowArgs>(args?: SelectSubset<T, RepositoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__RepositoryClient<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Repositories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepositoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Repositories
     * const repositories = await prisma.repository.findMany()
     * 
     * // Get first 10 Repositories
     * const repositories = await prisma.repository.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const repositoryWithIdOnly = await prisma.repository.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RepositoryFindManyArgs>(args?: SelectSubset<T, RepositoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Repository.
     * @param {RepositoryCreateArgs} args - Arguments to create a Repository.
     * @example
     * // Create one Repository
     * const Repository = await prisma.repository.create({
     *   data: {
     *     // ... data to create a Repository
     *   }
     * })
     * 
     */
    create<T extends RepositoryCreateArgs>(args: SelectSubset<T, RepositoryCreateArgs<ExtArgs>>): Prisma__RepositoryClient<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Repositories.
     * @param {RepositoryCreateManyArgs} args - Arguments to create many Repositories.
     * @example
     * // Create many Repositories
     * const repository = await prisma.repository.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RepositoryCreateManyArgs>(args?: SelectSubset<T, RepositoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Repository.
     * @param {RepositoryDeleteArgs} args - Arguments to delete one Repository.
     * @example
     * // Delete one Repository
     * const Repository = await prisma.repository.delete({
     *   where: {
     *     // ... filter to delete one Repository
     *   }
     * })
     * 
     */
    delete<T extends RepositoryDeleteArgs>(args: SelectSubset<T, RepositoryDeleteArgs<ExtArgs>>): Prisma__RepositoryClient<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Repository.
     * @param {RepositoryUpdateArgs} args - Arguments to update one Repository.
     * @example
     * // Update one Repository
     * const repository = await prisma.repository.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RepositoryUpdateArgs>(args: SelectSubset<T, RepositoryUpdateArgs<ExtArgs>>): Prisma__RepositoryClient<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Repositories.
     * @param {RepositoryDeleteManyArgs} args - Arguments to filter Repositories to delete.
     * @example
     * // Delete a few Repositories
     * const { count } = await prisma.repository.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RepositoryDeleteManyArgs>(args?: SelectSubset<T, RepositoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Repositories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepositoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Repositories
     * const repository = await prisma.repository.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RepositoryUpdateManyArgs>(args: SelectSubset<T, RepositoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Repository.
     * @param {RepositoryUpsertArgs} args - Arguments to update or create a Repository.
     * @example
     * // Update or create a Repository
     * const repository = await prisma.repository.upsert({
     *   create: {
     *     // ... data to create a Repository
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Repository we want to update
     *   }
     * })
     */
    upsert<T extends RepositoryUpsertArgs>(args: SelectSubset<T, RepositoryUpsertArgs<ExtArgs>>): Prisma__RepositoryClient<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Repositories that matches the filter.
     * @param {RepositoryFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const repository = await prisma.repository.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: RepositoryFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Repository.
     * @param {RepositoryAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const repository = await prisma.repository.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: RepositoryAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Repositories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepositoryCountArgs} args - Arguments to filter Repositories to count.
     * @example
     * // Count the number of Repositories
     * const count = await prisma.repository.count({
     *   where: {
     *     // ... the filter for the Repositories we want to count
     *   }
     * })
    **/
    count<T extends RepositoryCountArgs>(
      args?: Subset<T, RepositoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RepositoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Repository.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepositoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RepositoryAggregateArgs>(args: Subset<T, RepositoryAggregateArgs>): Prisma.PrismaPromise<GetRepositoryAggregateType<T>>

    /**
     * Group by Repository.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepositoryGroupByArgs} args - Group by arguments.
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
      T extends RepositoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RepositoryGroupByArgs['orderBy'] }
        : { orderBy?: RepositoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RepositoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRepositoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Repository model
   */
  readonly fields: RepositoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Repository.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RepositoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    branches<T extends Repository$branchesArgs<ExtArgs> = {}>(args?: Subset<T, Repository$branchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    repoUsers<T extends Repository$repoUsersArgs<ExtArgs> = {}>(args?: Subset<T, Repository$repoUsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepoUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Repository model
   */
  interface RepositoryFieldRefs {
    readonly id: FieldRef<"Repository", 'String'>
    readonly name: FieldRef<"Repository", 'String'>
    readonly description: FieldRef<"Repository", 'String'>
    readonly ownerId: FieldRef<"Repository", 'String'>
    readonly createdAt: FieldRef<"Repository", 'DateTime'>
    readonly githubId: FieldRef<"Repository", 'Int'>
    readonly htmlUrl: FieldRef<"Repository", 'String'>
    readonly cloneUrl: FieldRef<"Repository", 'String'>
    readonly isPrivate: FieldRef<"Repository", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Repository findUnique
   */
  export type RepositoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repository
     */
    select?: RepositorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repository
     */
    omit?: RepositoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepositoryInclude<ExtArgs> | null
    /**
     * Filter, which Repository to fetch.
     */
    where: RepositoryWhereUniqueInput
  }

  /**
   * Repository findUniqueOrThrow
   */
  export type RepositoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repository
     */
    select?: RepositorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repository
     */
    omit?: RepositoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepositoryInclude<ExtArgs> | null
    /**
     * Filter, which Repository to fetch.
     */
    where: RepositoryWhereUniqueInput
  }

  /**
   * Repository findFirst
   */
  export type RepositoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repository
     */
    select?: RepositorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repository
     */
    omit?: RepositoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepositoryInclude<ExtArgs> | null
    /**
     * Filter, which Repository to fetch.
     */
    where?: RepositoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Repositories to fetch.
     */
    orderBy?: RepositoryOrderByWithRelationInput | RepositoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Repositories.
     */
    cursor?: RepositoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Repositories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Repositories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Repositories.
     */
    distinct?: RepositoryScalarFieldEnum | RepositoryScalarFieldEnum[]
  }

  /**
   * Repository findFirstOrThrow
   */
  export type RepositoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repository
     */
    select?: RepositorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repository
     */
    omit?: RepositoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepositoryInclude<ExtArgs> | null
    /**
     * Filter, which Repository to fetch.
     */
    where?: RepositoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Repositories to fetch.
     */
    orderBy?: RepositoryOrderByWithRelationInput | RepositoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Repositories.
     */
    cursor?: RepositoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Repositories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Repositories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Repositories.
     */
    distinct?: RepositoryScalarFieldEnum | RepositoryScalarFieldEnum[]
  }

  /**
   * Repository findMany
   */
  export type RepositoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repository
     */
    select?: RepositorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repository
     */
    omit?: RepositoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepositoryInclude<ExtArgs> | null
    /**
     * Filter, which Repositories to fetch.
     */
    where?: RepositoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Repositories to fetch.
     */
    orderBy?: RepositoryOrderByWithRelationInput | RepositoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Repositories.
     */
    cursor?: RepositoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Repositories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Repositories.
     */
    skip?: number
    distinct?: RepositoryScalarFieldEnum | RepositoryScalarFieldEnum[]
  }

  /**
   * Repository create
   */
  export type RepositoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repository
     */
    select?: RepositorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repository
     */
    omit?: RepositoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepositoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Repository.
     */
    data: XOR<RepositoryCreateInput, RepositoryUncheckedCreateInput>
  }

  /**
   * Repository createMany
   */
  export type RepositoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Repositories.
     */
    data: RepositoryCreateManyInput | RepositoryCreateManyInput[]
  }

  /**
   * Repository update
   */
  export type RepositoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repository
     */
    select?: RepositorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repository
     */
    omit?: RepositoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepositoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Repository.
     */
    data: XOR<RepositoryUpdateInput, RepositoryUncheckedUpdateInput>
    /**
     * Choose, which Repository to update.
     */
    where: RepositoryWhereUniqueInput
  }

  /**
   * Repository updateMany
   */
  export type RepositoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Repositories.
     */
    data: XOR<RepositoryUpdateManyMutationInput, RepositoryUncheckedUpdateManyInput>
    /**
     * Filter which Repositories to update
     */
    where?: RepositoryWhereInput
    /**
     * Limit how many Repositories to update.
     */
    limit?: number
  }

  /**
   * Repository upsert
   */
  export type RepositoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repository
     */
    select?: RepositorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repository
     */
    omit?: RepositoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepositoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Repository to update in case it exists.
     */
    where: RepositoryWhereUniqueInput
    /**
     * In case the Repository found by the `where` argument doesn't exist, create a new Repository with this data.
     */
    create: XOR<RepositoryCreateInput, RepositoryUncheckedCreateInput>
    /**
     * In case the Repository was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RepositoryUpdateInput, RepositoryUncheckedUpdateInput>
  }

  /**
   * Repository delete
   */
  export type RepositoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repository
     */
    select?: RepositorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repository
     */
    omit?: RepositoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepositoryInclude<ExtArgs> | null
    /**
     * Filter which Repository to delete.
     */
    where: RepositoryWhereUniqueInput
  }

  /**
   * Repository deleteMany
   */
  export type RepositoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Repositories to delete
     */
    where?: RepositoryWhereInput
    /**
     * Limit how many Repositories to delete.
     */
    limit?: number
  }

  /**
   * Repository findRaw
   */
  export type RepositoryFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Repository aggregateRaw
   */
  export type RepositoryAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Repository.branches
   */
  export type Repository$branchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    where?: BranchWhereInput
    orderBy?: BranchOrderByWithRelationInput | BranchOrderByWithRelationInput[]
    cursor?: BranchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BranchScalarFieldEnum | BranchScalarFieldEnum[]
  }

  /**
   * Repository.repoUsers
   */
  export type Repository$repoUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepoUser
     */
    select?: RepoUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepoUser
     */
    omit?: RepoUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepoUserInclude<ExtArgs> | null
    where?: RepoUserWhereInput
    orderBy?: RepoUserOrderByWithRelationInput | RepoUserOrderByWithRelationInput[]
    cursor?: RepoUserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RepoUserScalarFieldEnum | RepoUserScalarFieldEnum[]
  }

  /**
   * Repository without action
   */
  export type RepositoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repository
     */
    select?: RepositorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repository
     */
    omit?: RepositoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepositoryInclude<ExtArgs> | null
  }


  /**
   * Model RepoUser
   */

  export type AggregateRepoUser = {
    _count: RepoUserCountAggregateOutputType | null
    _min: RepoUserMinAggregateOutputType | null
    _max: RepoUserMaxAggregateOutputType | null
  }

  export type RepoUserMinAggregateOutputType = {
    id: string | null
    userId: string | null
    repositoryId: string | null
    role: $Enums.Role | null
  }

  export type RepoUserMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    repositoryId: string | null
    role: $Enums.Role | null
  }

  export type RepoUserCountAggregateOutputType = {
    id: number
    userId: number
    repositoryId: number
    role: number
    _all: number
  }


  export type RepoUserMinAggregateInputType = {
    id?: true
    userId?: true
    repositoryId?: true
    role?: true
  }

  export type RepoUserMaxAggregateInputType = {
    id?: true
    userId?: true
    repositoryId?: true
    role?: true
  }

  export type RepoUserCountAggregateInputType = {
    id?: true
    userId?: true
    repositoryId?: true
    role?: true
    _all?: true
  }

  export type RepoUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RepoUser to aggregate.
     */
    where?: RepoUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RepoUsers to fetch.
     */
    orderBy?: RepoUserOrderByWithRelationInput | RepoUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RepoUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RepoUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RepoUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RepoUsers
    **/
    _count?: true | RepoUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RepoUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RepoUserMaxAggregateInputType
  }

  export type GetRepoUserAggregateType<T extends RepoUserAggregateArgs> = {
        [P in keyof T & keyof AggregateRepoUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRepoUser[P]>
      : GetScalarType<T[P], AggregateRepoUser[P]>
  }




  export type RepoUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RepoUserWhereInput
    orderBy?: RepoUserOrderByWithAggregationInput | RepoUserOrderByWithAggregationInput[]
    by: RepoUserScalarFieldEnum[] | RepoUserScalarFieldEnum
    having?: RepoUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RepoUserCountAggregateInputType | true
    _min?: RepoUserMinAggregateInputType
    _max?: RepoUserMaxAggregateInputType
  }

  export type RepoUserGroupByOutputType = {
    id: string
    userId: string
    repositoryId: string
    role: $Enums.Role
    _count: RepoUserCountAggregateOutputType | null
    _min: RepoUserMinAggregateOutputType | null
    _max: RepoUserMaxAggregateOutputType | null
  }

  type GetRepoUserGroupByPayload<T extends RepoUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RepoUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RepoUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RepoUserGroupByOutputType[P]>
            : GetScalarType<T[P], RepoUserGroupByOutputType[P]>
        }
      >
    >


  export type RepoUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    repositoryId?: boolean
    role?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    repository?: boolean | RepositoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["repoUser"]>



  export type RepoUserSelectScalar = {
    id?: boolean
    userId?: boolean
    repositoryId?: boolean
    role?: boolean
  }

  export type RepoUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "repositoryId" | "role", ExtArgs["result"]["repoUser"]>
  export type RepoUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    repository?: boolean | RepositoryDefaultArgs<ExtArgs>
  }

  export type $RepoUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RepoUser"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      repository: Prisma.$RepositoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      repositoryId: string
      role: $Enums.Role
    }, ExtArgs["result"]["repoUser"]>
    composites: {}
  }

  type RepoUserGetPayload<S extends boolean | null | undefined | RepoUserDefaultArgs> = $Result.GetResult<Prisma.$RepoUserPayload, S>

  type RepoUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RepoUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RepoUserCountAggregateInputType | true
    }

  export interface RepoUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RepoUser'], meta: { name: 'RepoUser' } }
    /**
     * Find zero or one RepoUser that matches the filter.
     * @param {RepoUserFindUniqueArgs} args - Arguments to find a RepoUser
     * @example
     * // Get one RepoUser
     * const repoUser = await prisma.repoUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RepoUserFindUniqueArgs>(args: SelectSubset<T, RepoUserFindUniqueArgs<ExtArgs>>): Prisma__RepoUserClient<$Result.GetResult<Prisma.$RepoUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RepoUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RepoUserFindUniqueOrThrowArgs} args - Arguments to find a RepoUser
     * @example
     * // Get one RepoUser
     * const repoUser = await prisma.repoUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RepoUserFindUniqueOrThrowArgs>(args: SelectSubset<T, RepoUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RepoUserClient<$Result.GetResult<Prisma.$RepoUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RepoUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepoUserFindFirstArgs} args - Arguments to find a RepoUser
     * @example
     * // Get one RepoUser
     * const repoUser = await prisma.repoUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RepoUserFindFirstArgs>(args?: SelectSubset<T, RepoUserFindFirstArgs<ExtArgs>>): Prisma__RepoUserClient<$Result.GetResult<Prisma.$RepoUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RepoUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepoUserFindFirstOrThrowArgs} args - Arguments to find a RepoUser
     * @example
     * // Get one RepoUser
     * const repoUser = await prisma.repoUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RepoUserFindFirstOrThrowArgs>(args?: SelectSubset<T, RepoUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__RepoUserClient<$Result.GetResult<Prisma.$RepoUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RepoUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepoUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RepoUsers
     * const repoUsers = await prisma.repoUser.findMany()
     * 
     * // Get first 10 RepoUsers
     * const repoUsers = await prisma.repoUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const repoUserWithIdOnly = await prisma.repoUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RepoUserFindManyArgs>(args?: SelectSubset<T, RepoUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepoUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RepoUser.
     * @param {RepoUserCreateArgs} args - Arguments to create a RepoUser.
     * @example
     * // Create one RepoUser
     * const RepoUser = await prisma.repoUser.create({
     *   data: {
     *     // ... data to create a RepoUser
     *   }
     * })
     * 
     */
    create<T extends RepoUserCreateArgs>(args: SelectSubset<T, RepoUserCreateArgs<ExtArgs>>): Prisma__RepoUserClient<$Result.GetResult<Prisma.$RepoUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RepoUsers.
     * @param {RepoUserCreateManyArgs} args - Arguments to create many RepoUsers.
     * @example
     * // Create many RepoUsers
     * const repoUser = await prisma.repoUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RepoUserCreateManyArgs>(args?: SelectSubset<T, RepoUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RepoUser.
     * @param {RepoUserDeleteArgs} args - Arguments to delete one RepoUser.
     * @example
     * // Delete one RepoUser
     * const RepoUser = await prisma.repoUser.delete({
     *   where: {
     *     // ... filter to delete one RepoUser
     *   }
     * })
     * 
     */
    delete<T extends RepoUserDeleteArgs>(args: SelectSubset<T, RepoUserDeleteArgs<ExtArgs>>): Prisma__RepoUserClient<$Result.GetResult<Prisma.$RepoUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RepoUser.
     * @param {RepoUserUpdateArgs} args - Arguments to update one RepoUser.
     * @example
     * // Update one RepoUser
     * const repoUser = await prisma.repoUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RepoUserUpdateArgs>(args: SelectSubset<T, RepoUserUpdateArgs<ExtArgs>>): Prisma__RepoUserClient<$Result.GetResult<Prisma.$RepoUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RepoUsers.
     * @param {RepoUserDeleteManyArgs} args - Arguments to filter RepoUsers to delete.
     * @example
     * // Delete a few RepoUsers
     * const { count } = await prisma.repoUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RepoUserDeleteManyArgs>(args?: SelectSubset<T, RepoUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RepoUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepoUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RepoUsers
     * const repoUser = await prisma.repoUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RepoUserUpdateManyArgs>(args: SelectSubset<T, RepoUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RepoUser.
     * @param {RepoUserUpsertArgs} args - Arguments to update or create a RepoUser.
     * @example
     * // Update or create a RepoUser
     * const repoUser = await prisma.repoUser.upsert({
     *   create: {
     *     // ... data to create a RepoUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RepoUser we want to update
     *   }
     * })
     */
    upsert<T extends RepoUserUpsertArgs>(args: SelectSubset<T, RepoUserUpsertArgs<ExtArgs>>): Prisma__RepoUserClient<$Result.GetResult<Prisma.$RepoUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RepoUsers that matches the filter.
     * @param {RepoUserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const repoUser = await prisma.repoUser.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: RepoUserFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a RepoUser.
     * @param {RepoUserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const repoUser = await prisma.repoUser.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: RepoUserAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of RepoUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepoUserCountArgs} args - Arguments to filter RepoUsers to count.
     * @example
     * // Count the number of RepoUsers
     * const count = await prisma.repoUser.count({
     *   where: {
     *     // ... the filter for the RepoUsers we want to count
     *   }
     * })
    **/
    count<T extends RepoUserCountArgs>(
      args?: Subset<T, RepoUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RepoUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RepoUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepoUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RepoUserAggregateArgs>(args: Subset<T, RepoUserAggregateArgs>): Prisma.PrismaPromise<GetRepoUserAggregateType<T>>

    /**
     * Group by RepoUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepoUserGroupByArgs} args - Group by arguments.
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
      T extends RepoUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RepoUserGroupByArgs['orderBy'] }
        : { orderBy?: RepoUserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RepoUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRepoUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RepoUser model
   */
  readonly fields: RepoUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RepoUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RepoUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    repository<T extends RepositoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RepositoryDefaultArgs<ExtArgs>>): Prisma__RepositoryClient<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RepoUser model
   */
  interface RepoUserFieldRefs {
    readonly id: FieldRef<"RepoUser", 'String'>
    readonly userId: FieldRef<"RepoUser", 'String'>
    readonly repositoryId: FieldRef<"RepoUser", 'String'>
    readonly role: FieldRef<"RepoUser", 'Role'>
  }
    

  // Custom InputTypes
  /**
   * RepoUser findUnique
   */
  export type RepoUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepoUser
     */
    select?: RepoUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepoUser
     */
    omit?: RepoUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepoUserInclude<ExtArgs> | null
    /**
     * Filter, which RepoUser to fetch.
     */
    where: RepoUserWhereUniqueInput
  }

  /**
   * RepoUser findUniqueOrThrow
   */
  export type RepoUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepoUser
     */
    select?: RepoUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepoUser
     */
    omit?: RepoUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepoUserInclude<ExtArgs> | null
    /**
     * Filter, which RepoUser to fetch.
     */
    where: RepoUserWhereUniqueInput
  }

  /**
   * RepoUser findFirst
   */
  export type RepoUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepoUser
     */
    select?: RepoUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepoUser
     */
    omit?: RepoUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepoUserInclude<ExtArgs> | null
    /**
     * Filter, which RepoUser to fetch.
     */
    where?: RepoUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RepoUsers to fetch.
     */
    orderBy?: RepoUserOrderByWithRelationInput | RepoUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RepoUsers.
     */
    cursor?: RepoUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RepoUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RepoUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RepoUsers.
     */
    distinct?: RepoUserScalarFieldEnum | RepoUserScalarFieldEnum[]
  }

  /**
   * RepoUser findFirstOrThrow
   */
  export type RepoUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepoUser
     */
    select?: RepoUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepoUser
     */
    omit?: RepoUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepoUserInclude<ExtArgs> | null
    /**
     * Filter, which RepoUser to fetch.
     */
    where?: RepoUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RepoUsers to fetch.
     */
    orderBy?: RepoUserOrderByWithRelationInput | RepoUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RepoUsers.
     */
    cursor?: RepoUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RepoUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RepoUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RepoUsers.
     */
    distinct?: RepoUserScalarFieldEnum | RepoUserScalarFieldEnum[]
  }

  /**
   * RepoUser findMany
   */
  export type RepoUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepoUser
     */
    select?: RepoUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepoUser
     */
    omit?: RepoUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepoUserInclude<ExtArgs> | null
    /**
     * Filter, which RepoUsers to fetch.
     */
    where?: RepoUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RepoUsers to fetch.
     */
    orderBy?: RepoUserOrderByWithRelationInput | RepoUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RepoUsers.
     */
    cursor?: RepoUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RepoUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RepoUsers.
     */
    skip?: number
    distinct?: RepoUserScalarFieldEnum | RepoUserScalarFieldEnum[]
  }

  /**
   * RepoUser create
   */
  export type RepoUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepoUser
     */
    select?: RepoUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepoUser
     */
    omit?: RepoUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepoUserInclude<ExtArgs> | null
    /**
     * The data needed to create a RepoUser.
     */
    data: XOR<RepoUserCreateInput, RepoUserUncheckedCreateInput>
  }

  /**
   * RepoUser createMany
   */
  export type RepoUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RepoUsers.
     */
    data: RepoUserCreateManyInput | RepoUserCreateManyInput[]
  }

  /**
   * RepoUser update
   */
  export type RepoUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepoUser
     */
    select?: RepoUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepoUser
     */
    omit?: RepoUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepoUserInclude<ExtArgs> | null
    /**
     * The data needed to update a RepoUser.
     */
    data: XOR<RepoUserUpdateInput, RepoUserUncheckedUpdateInput>
    /**
     * Choose, which RepoUser to update.
     */
    where: RepoUserWhereUniqueInput
  }

  /**
   * RepoUser updateMany
   */
  export type RepoUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RepoUsers.
     */
    data: XOR<RepoUserUpdateManyMutationInput, RepoUserUncheckedUpdateManyInput>
    /**
     * Filter which RepoUsers to update
     */
    where?: RepoUserWhereInput
    /**
     * Limit how many RepoUsers to update.
     */
    limit?: number
  }

  /**
   * RepoUser upsert
   */
  export type RepoUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepoUser
     */
    select?: RepoUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepoUser
     */
    omit?: RepoUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepoUserInclude<ExtArgs> | null
    /**
     * The filter to search for the RepoUser to update in case it exists.
     */
    where: RepoUserWhereUniqueInput
    /**
     * In case the RepoUser found by the `where` argument doesn't exist, create a new RepoUser with this data.
     */
    create: XOR<RepoUserCreateInput, RepoUserUncheckedCreateInput>
    /**
     * In case the RepoUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RepoUserUpdateInput, RepoUserUncheckedUpdateInput>
  }

  /**
   * RepoUser delete
   */
  export type RepoUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepoUser
     */
    select?: RepoUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepoUser
     */
    omit?: RepoUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepoUserInclude<ExtArgs> | null
    /**
     * Filter which RepoUser to delete.
     */
    where: RepoUserWhereUniqueInput
  }

  /**
   * RepoUser deleteMany
   */
  export type RepoUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RepoUsers to delete
     */
    where?: RepoUserWhereInput
    /**
     * Limit how many RepoUsers to delete.
     */
    limit?: number
  }

  /**
   * RepoUser findRaw
   */
  export type RepoUserFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * RepoUser aggregateRaw
   */
  export type RepoUserAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * RepoUser without action
   */
  export type RepoUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepoUser
     */
    select?: RepoUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepoUser
     */
    omit?: RepoUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepoUserInclude<ExtArgs> | null
  }


  /**
   * Model Branch
   */

  export type AggregateBranch = {
    _count: BranchCountAggregateOutputType | null
    _min: BranchMinAggregateOutputType | null
    _max: BranchMaxAggregateOutputType | null
  }

  export type BranchMinAggregateOutputType = {
    id: string | null
    name: string | null
    repositoryId: string | null
    lastCommit: string | null
    isProtected: boolean | null
    createdAt: Date | null
  }

  export type BranchMaxAggregateOutputType = {
    id: string | null
    name: string | null
    repositoryId: string | null
    lastCommit: string | null
    isProtected: boolean | null
    createdAt: Date | null
  }

  export type BranchCountAggregateOutputType = {
    id: number
    name: number
    repositoryId: number
    lastCommit: number
    isProtected: number
    createdAt: number
    migratesTo: number
    _all: number
  }


  export type BranchMinAggregateInputType = {
    id?: true
    name?: true
    repositoryId?: true
    lastCommit?: true
    isProtected?: true
    createdAt?: true
  }

  export type BranchMaxAggregateInputType = {
    id?: true
    name?: true
    repositoryId?: true
    lastCommit?: true
    isProtected?: true
    createdAt?: true
  }

  export type BranchCountAggregateInputType = {
    id?: true
    name?: true
    repositoryId?: true
    lastCommit?: true
    isProtected?: true
    createdAt?: true
    migratesTo?: true
    _all?: true
  }

  export type BranchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Branch to aggregate.
     */
    where?: BranchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Branches to fetch.
     */
    orderBy?: BranchOrderByWithRelationInput | BranchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BranchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Branches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Branches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Branches
    **/
    _count?: true | BranchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BranchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BranchMaxAggregateInputType
  }

  export type GetBranchAggregateType<T extends BranchAggregateArgs> = {
        [P in keyof T & keyof AggregateBranch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBranch[P]>
      : GetScalarType<T[P], AggregateBranch[P]>
  }




  export type BranchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BranchWhereInput
    orderBy?: BranchOrderByWithAggregationInput | BranchOrderByWithAggregationInput[]
    by: BranchScalarFieldEnum[] | BranchScalarFieldEnum
    having?: BranchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BranchCountAggregateInputType | true
    _min?: BranchMinAggregateInputType
    _max?: BranchMaxAggregateInputType
  }

  export type BranchGroupByOutputType = {
    id: string
    name: string
    repositoryId: string
    lastCommit: string | null
    isProtected: boolean
    createdAt: Date
    migratesTo: string[]
    _count: BranchCountAggregateOutputType | null
    _min: BranchMinAggregateOutputType | null
    _max: BranchMaxAggregateOutputType | null
  }

  type GetBranchGroupByPayload<T extends BranchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BranchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BranchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BranchGroupByOutputType[P]>
            : GetScalarType<T[P], BranchGroupByOutputType[P]>
        }
      >
    >


  export type BranchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    repositoryId?: boolean
    lastCommit?: boolean
    isProtected?: boolean
    createdAt?: boolean
    migratesTo?: boolean
    repository?: boolean | RepositoryDefaultArgs<ExtArgs>
    languages?: boolean | Branch$languagesArgs<ExtArgs>
    _count?: boolean | BranchCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["branch"]>



  export type BranchSelectScalar = {
    id?: boolean
    name?: boolean
    repositoryId?: boolean
    lastCommit?: boolean
    isProtected?: boolean
    createdAt?: boolean
    migratesTo?: boolean
  }

  export type BranchOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "repositoryId" | "lastCommit" | "isProtected" | "createdAt" | "migratesTo", ExtArgs["result"]["branch"]>
  export type BranchInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    repository?: boolean | RepositoryDefaultArgs<ExtArgs>
    languages?: boolean | Branch$languagesArgs<ExtArgs>
    _count?: boolean | BranchCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $BranchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Branch"
    objects: {
      repository: Prisma.$RepositoryPayload<ExtArgs>
      languages: Prisma.$LanguagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      repositoryId: string
      lastCommit: string | null
      isProtected: boolean
      createdAt: Date
      migratesTo: string[]
    }, ExtArgs["result"]["branch"]>
    composites: {}
  }

  type BranchGetPayload<S extends boolean | null | undefined | BranchDefaultArgs> = $Result.GetResult<Prisma.$BranchPayload, S>

  type BranchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BranchFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BranchCountAggregateInputType | true
    }

  export interface BranchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Branch'], meta: { name: 'Branch' } }
    /**
     * Find zero or one Branch that matches the filter.
     * @param {BranchFindUniqueArgs} args - Arguments to find a Branch
     * @example
     * // Get one Branch
     * const branch = await prisma.branch.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BranchFindUniqueArgs>(args: SelectSubset<T, BranchFindUniqueArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Branch that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BranchFindUniqueOrThrowArgs} args - Arguments to find a Branch
     * @example
     * // Get one Branch
     * const branch = await prisma.branch.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BranchFindUniqueOrThrowArgs>(args: SelectSubset<T, BranchFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Branch that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchFindFirstArgs} args - Arguments to find a Branch
     * @example
     * // Get one Branch
     * const branch = await prisma.branch.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BranchFindFirstArgs>(args?: SelectSubset<T, BranchFindFirstArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Branch that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchFindFirstOrThrowArgs} args - Arguments to find a Branch
     * @example
     * // Get one Branch
     * const branch = await prisma.branch.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BranchFindFirstOrThrowArgs>(args?: SelectSubset<T, BranchFindFirstOrThrowArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Branches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Branches
     * const branches = await prisma.branch.findMany()
     * 
     * // Get first 10 Branches
     * const branches = await prisma.branch.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const branchWithIdOnly = await prisma.branch.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BranchFindManyArgs>(args?: SelectSubset<T, BranchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Branch.
     * @param {BranchCreateArgs} args - Arguments to create a Branch.
     * @example
     * // Create one Branch
     * const Branch = await prisma.branch.create({
     *   data: {
     *     // ... data to create a Branch
     *   }
     * })
     * 
     */
    create<T extends BranchCreateArgs>(args: SelectSubset<T, BranchCreateArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Branches.
     * @param {BranchCreateManyArgs} args - Arguments to create many Branches.
     * @example
     * // Create many Branches
     * const branch = await prisma.branch.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BranchCreateManyArgs>(args?: SelectSubset<T, BranchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Branch.
     * @param {BranchDeleteArgs} args - Arguments to delete one Branch.
     * @example
     * // Delete one Branch
     * const Branch = await prisma.branch.delete({
     *   where: {
     *     // ... filter to delete one Branch
     *   }
     * })
     * 
     */
    delete<T extends BranchDeleteArgs>(args: SelectSubset<T, BranchDeleteArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Branch.
     * @param {BranchUpdateArgs} args - Arguments to update one Branch.
     * @example
     * // Update one Branch
     * const branch = await prisma.branch.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BranchUpdateArgs>(args: SelectSubset<T, BranchUpdateArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Branches.
     * @param {BranchDeleteManyArgs} args - Arguments to filter Branches to delete.
     * @example
     * // Delete a few Branches
     * const { count } = await prisma.branch.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BranchDeleteManyArgs>(args?: SelectSubset<T, BranchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Branches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Branches
     * const branch = await prisma.branch.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BranchUpdateManyArgs>(args: SelectSubset<T, BranchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Branch.
     * @param {BranchUpsertArgs} args - Arguments to update or create a Branch.
     * @example
     * // Update or create a Branch
     * const branch = await prisma.branch.upsert({
     *   create: {
     *     // ... data to create a Branch
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Branch we want to update
     *   }
     * })
     */
    upsert<T extends BranchUpsertArgs>(args: SelectSubset<T, BranchUpsertArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Branches that matches the filter.
     * @param {BranchFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const branch = await prisma.branch.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: BranchFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Branch.
     * @param {BranchAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const branch = await prisma.branch.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: BranchAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Branches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchCountArgs} args - Arguments to filter Branches to count.
     * @example
     * // Count the number of Branches
     * const count = await prisma.branch.count({
     *   where: {
     *     // ... the filter for the Branches we want to count
     *   }
     * })
    **/
    count<T extends BranchCountArgs>(
      args?: Subset<T, BranchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BranchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Branch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BranchAggregateArgs>(args: Subset<T, BranchAggregateArgs>): Prisma.PrismaPromise<GetBranchAggregateType<T>>

    /**
     * Group by Branch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchGroupByArgs} args - Group by arguments.
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
      T extends BranchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BranchGroupByArgs['orderBy'] }
        : { orderBy?: BranchGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BranchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBranchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Branch model
   */
  readonly fields: BranchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Branch.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BranchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    repository<T extends RepositoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RepositoryDefaultArgs<ExtArgs>>): Prisma__RepositoryClient<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    languages<T extends Branch$languagesArgs<ExtArgs> = {}>(args?: Subset<T, Branch$languagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Branch model
   */
  interface BranchFieldRefs {
    readonly id: FieldRef<"Branch", 'String'>
    readonly name: FieldRef<"Branch", 'String'>
    readonly repositoryId: FieldRef<"Branch", 'String'>
    readonly lastCommit: FieldRef<"Branch", 'String'>
    readonly isProtected: FieldRef<"Branch", 'Boolean'>
    readonly createdAt: FieldRef<"Branch", 'DateTime'>
    readonly migratesTo: FieldRef<"Branch", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * Branch findUnique
   */
  export type BranchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter, which Branch to fetch.
     */
    where: BranchWhereUniqueInput
  }

  /**
   * Branch findUniqueOrThrow
   */
  export type BranchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter, which Branch to fetch.
     */
    where: BranchWhereUniqueInput
  }

  /**
   * Branch findFirst
   */
  export type BranchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter, which Branch to fetch.
     */
    where?: BranchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Branches to fetch.
     */
    orderBy?: BranchOrderByWithRelationInput | BranchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Branches.
     */
    cursor?: BranchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Branches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Branches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Branches.
     */
    distinct?: BranchScalarFieldEnum | BranchScalarFieldEnum[]
  }

  /**
   * Branch findFirstOrThrow
   */
  export type BranchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter, which Branch to fetch.
     */
    where?: BranchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Branches to fetch.
     */
    orderBy?: BranchOrderByWithRelationInput | BranchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Branches.
     */
    cursor?: BranchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Branches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Branches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Branches.
     */
    distinct?: BranchScalarFieldEnum | BranchScalarFieldEnum[]
  }

  /**
   * Branch findMany
   */
  export type BranchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter, which Branches to fetch.
     */
    where?: BranchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Branches to fetch.
     */
    orderBy?: BranchOrderByWithRelationInput | BranchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Branches.
     */
    cursor?: BranchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Branches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Branches.
     */
    skip?: number
    distinct?: BranchScalarFieldEnum | BranchScalarFieldEnum[]
  }

  /**
   * Branch create
   */
  export type BranchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * The data needed to create a Branch.
     */
    data: XOR<BranchCreateInput, BranchUncheckedCreateInput>
  }

  /**
   * Branch createMany
   */
  export type BranchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Branches.
     */
    data: BranchCreateManyInput | BranchCreateManyInput[]
  }

  /**
   * Branch update
   */
  export type BranchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * The data needed to update a Branch.
     */
    data: XOR<BranchUpdateInput, BranchUncheckedUpdateInput>
    /**
     * Choose, which Branch to update.
     */
    where: BranchWhereUniqueInput
  }

  /**
   * Branch updateMany
   */
  export type BranchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Branches.
     */
    data: XOR<BranchUpdateManyMutationInput, BranchUncheckedUpdateManyInput>
    /**
     * Filter which Branches to update
     */
    where?: BranchWhereInput
    /**
     * Limit how many Branches to update.
     */
    limit?: number
  }

  /**
   * Branch upsert
   */
  export type BranchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * The filter to search for the Branch to update in case it exists.
     */
    where: BranchWhereUniqueInput
    /**
     * In case the Branch found by the `where` argument doesn't exist, create a new Branch with this data.
     */
    create: XOR<BranchCreateInput, BranchUncheckedCreateInput>
    /**
     * In case the Branch was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BranchUpdateInput, BranchUncheckedUpdateInput>
  }

  /**
   * Branch delete
   */
  export type BranchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter which Branch to delete.
     */
    where: BranchWhereUniqueInput
  }

  /**
   * Branch deleteMany
   */
  export type BranchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Branches to delete
     */
    where?: BranchWhereInput
    /**
     * Limit how many Branches to delete.
     */
    limit?: number
  }

  /**
   * Branch findRaw
   */
  export type BranchFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Branch aggregateRaw
   */
  export type BranchAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Branch.languages
   */
  export type Branch$languagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    where?: LanguageWhereInput
    orderBy?: LanguageOrderByWithRelationInput | LanguageOrderByWithRelationInput[]
    cursor?: LanguageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LanguageScalarFieldEnum | LanguageScalarFieldEnum[]
  }

  /**
   * Branch without action
   */
  export type BranchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
  }


  /**
   * Model Language
   */

  export type AggregateLanguage = {
    _count: LanguageCountAggregateOutputType | null
    _min: LanguageMinAggregateOutputType | null
    _max: LanguageMaxAggregateOutputType | null
  }

  export type LanguageMinAggregateOutputType = {
    id: string | null
    name: string | null
    version: string | null
    branchId: string | null
    category: $Enums.FrameworkCategory | null
  }

  export type LanguageMaxAggregateOutputType = {
    id: string | null
    name: string | null
    version: string | null
    branchId: string | null
    category: $Enums.FrameworkCategory | null
  }

  export type LanguageCountAggregateOutputType = {
    id: number
    name: number
    version: number
    branchId: number
    category: number
    _all: number
  }


  export type LanguageMinAggregateInputType = {
    id?: true
    name?: true
    version?: true
    branchId?: true
    category?: true
  }

  export type LanguageMaxAggregateInputType = {
    id?: true
    name?: true
    version?: true
    branchId?: true
    category?: true
  }

  export type LanguageCountAggregateInputType = {
    id?: true
    name?: true
    version?: true
    branchId?: true
    category?: true
    _all?: true
  }

  export type LanguageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Language to aggregate.
     */
    where?: LanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Languages to fetch.
     */
    orderBy?: LanguageOrderByWithRelationInput | LanguageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Languages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Languages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Languages
    **/
    _count?: true | LanguageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LanguageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LanguageMaxAggregateInputType
  }

  export type GetLanguageAggregateType<T extends LanguageAggregateArgs> = {
        [P in keyof T & keyof AggregateLanguage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLanguage[P]>
      : GetScalarType<T[P], AggregateLanguage[P]>
  }




  export type LanguageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LanguageWhereInput
    orderBy?: LanguageOrderByWithAggregationInput | LanguageOrderByWithAggregationInput[]
    by: LanguageScalarFieldEnum[] | LanguageScalarFieldEnum
    having?: LanguageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LanguageCountAggregateInputType | true
    _min?: LanguageMinAggregateInputType
    _max?: LanguageMaxAggregateInputType
  }

  export type LanguageGroupByOutputType = {
    id: string
    name: string
    version: string | null
    branchId: string | null
    category: $Enums.FrameworkCategory
    _count: LanguageCountAggregateOutputType | null
    _min: LanguageMinAggregateOutputType | null
    _max: LanguageMaxAggregateOutputType | null
  }

  type GetLanguageGroupByPayload<T extends LanguageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LanguageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LanguageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LanguageGroupByOutputType[P]>
            : GetScalarType<T[P], LanguageGroupByOutputType[P]>
        }
      >
    >


  export type LanguageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    version?: boolean
    branchId?: boolean
    category?: boolean
    branch?: boolean | Language$branchArgs<ExtArgs>
  }, ExtArgs["result"]["language"]>



  export type LanguageSelectScalar = {
    id?: boolean
    name?: boolean
    version?: boolean
    branchId?: boolean
    category?: boolean
  }

  export type LanguageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "version" | "branchId" | "category", ExtArgs["result"]["language"]>
  export type LanguageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    branch?: boolean | Language$branchArgs<ExtArgs>
  }

  export type $LanguagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Language"
    objects: {
      branch: Prisma.$BranchPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      version: string | null
      branchId: string | null
      category: $Enums.FrameworkCategory
    }, ExtArgs["result"]["language"]>
    composites: {}
  }

  type LanguageGetPayload<S extends boolean | null | undefined | LanguageDefaultArgs> = $Result.GetResult<Prisma.$LanguagePayload, S>

  type LanguageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LanguageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LanguageCountAggregateInputType | true
    }

  export interface LanguageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Language'], meta: { name: 'Language' } }
    /**
     * Find zero or one Language that matches the filter.
     * @param {LanguageFindUniqueArgs} args - Arguments to find a Language
     * @example
     * // Get one Language
     * const language = await prisma.language.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LanguageFindUniqueArgs>(args: SelectSubset<T, LanguageFindUniqueArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Language that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LanguageFindUniqueOrThrowArgs} args - Arguments to find a Language
     * @example
     * // Get one Language
     * const language = await prisma.language.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LanguageFindUniqueOrThrowArgs>(args: SelectSubset<T, LanguageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Language that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageFindFirstArgs} args - Arguments to find a Language
     * @example
     * // Get one Language
     * const language = await prisma.language.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LanguageFindFirstArgs>(args?: SelectSubset<T, LanguageFindFirstArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Language that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageFindFirstOrThrowArgs} args - Arguments to find a Language
     * @example
     * // Get one Language
     * const language = await prisma.language.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LanguageFindFirstOrThrowArgs>(args?: SelectSubset<T, LanguageFindFirstOrThrowArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Languages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Languages
     * const languages = await prisma.language.findMany()
     * 
     * // Get first 10 Languages
     * const languages = await prisma.language.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const languageWithIdOnly = await prisma.language.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LanguageFindManyArgs>(args?: SelectSubset<T, LanguageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Language.
     * @param {LanguageCreateArgs} args - Arguments to create a Language.
     * @example
     * // Create one Language
     * const Language = await prisma.language.create({
     *   data: {
     *     // ... data to create a Language
     *   }
     * })
     * 
     */
    create<T extends LanguageCreateArgs>(args: SelectSubset<T, LanguageCreateArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Languages.
     * @param {LanguageCreateManyArgs} args - Arguments to create many Languages.
     * @example
     * // Create many Languages
     * const language = await prisma.language.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LanguageCreateManyArgs>(args?: SelectSubset<T, LanguageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Language.
     * @param {LanguageDeleteArgs} args - Arguments to delete one Language.
     * @example
     * // Delete one Language
     * const Language = await prisma.language.delete({
     *   where: {
     *     // ... filter to delete one Language
     *   }
     * })
     * 
     */
    delete<T extends LanguageDeleteArgs>(args: SelectSubset<T, LanguageDeleteArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Language.
     * @param {LanguageUpdateArgs} args - Arguments to update one Language.
     * @example
     * // Update one Language
     * const language = await prisma.language.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LanguageUpdateArgs>(args: SelectSubset<T, LanguageUpdateArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Languages.
     * @param {LanguageDeleteManyArgs} args - Arguments to filter Languages to delete.
     * @example
     * // Delete a few Languages
     * const { count } = await prisma.language.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LanguageDeleteManyArgs>(args?: SelectSubset<T, LanguageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Languages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Languages
     * const language = await prisma.language.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LanguageUpdateManyArgs>(args: SelectSubset<T, LanguageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Language.
     * @param {LanguageUpsertArgs} args - Arguments to update or create a Language.
     * @example
     * // Update or create a Language
     * const language = await prisma.language.upsert({
     *   create: {
     *     // ... data to create a Language
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Language we want to update
     *   }
     * })
     */
    upsert<T extends LanguageUpsertArgs>(args: SelectSubset<T, LanguageUpsertArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Languages that matches the filter.
     * @param {LanguageFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const language = await prisma.language.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: LanguageFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Language.
     * @param {LanguageAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const language = await prisma.language.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: LanguageAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Languages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageCountArgs} args - Arguments to filter Languages to count.
     * @example
     * // Count the number of Languages
     * const count = await prisma.language.count({
     *   where: {
     *     // ... the filter for the Languages we want to count
     *   }
     * })
    **/
    count<T extends LanguageCountArgs>(
      args?: Subset<T, LanguageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LanguageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Language.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LanguageAggregateArgs>(args: Subset<T, LanguageAggregateArgs>): Prisma.PrismaPromise<GetLanguageAggregateType<T>>

    /**
     * Group by Language.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageGroupByArgs} args - Group by arguments.
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
      T extends LanguageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LanguageGroupByArgs['orderBy'] }
        : { orderBy?: LanguageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LanguageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLanguageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Language model
   */
  readonly fields: LanguageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Language.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LanguageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    branch<T extends Language$branchArgs<ExtArgs> = {}>(args?: Subset<T, Language$branchArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Language model
   */
  interface LanguageFieldRefs {
    readonly id: FieldRef<"Language", 'String'>
    readonly name: FieldRef<"Language", 'String'>
    readonly version: FieldRef<"Language", 'String'>
    readonly branchId: FieldRef<"Language", 'String'>
    readonly category: FieldRef<"Language", 'FrameworkCategory'>
  }
    

  // Custom InputTypes
  /**
   * Language findUnique
   */
  export type LanguageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * Filter, which Language to fetch.
     */
    where: LanguageWhereUniqueInput
  }

  /**
   * Language findUniqueOrThrow
   */
  export type LanguageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * Filter, which Language to fetch.
     */
    where: LanguageWhereUniqueInput
  }

  /**
   * Language findFirst
   */
  export type LanguageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * Filter, which Language to fetch.
     */
    where?: LanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Languages to fetch.
     */
    orderBy?: LanguageOrderByWithRelationInput | LanguageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Languages.
     */
    cursor?: LanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Languages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Languages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Languages.
     */
    distinct?: LanguageScalarFieldEnum | LanguageScalarFieldEnum[]
  }

  /**
   * Language findFirstOrThrow
   */
  export type LanguageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * Filter, which Language to fetch.
     */
    where?: LanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Languages to fetch.
     */
    orderBy?: LanguageOrderByWithRelationInput | LanguageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Languages.
     */
    cursor?: LanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Languages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Languages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Languages.
     */
    distinct?: LanguageScalarFieldEnum | LanguageScalarFieldEnum[]
  }

  /**
   * Language findMany
   */
  export type LanguageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * Filter, which Languages to fetch.
     */
    where?: LanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Languages to fetch.
     */
    orderBy?: LanguageOrderByWithRelationInput | LanguageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Languages.
     */
    cursor?: LanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Languages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Languages.
     */
    skip?: number
    distinct?: LanguageScalarFieldEnum | LanguageScalarFieldEnum[]
  }

  /**
   * Language create
   */
  export type LanguageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * The data needed to create a Language.
     */
    data: XOR<LanguageCreateInput, LanguageUncheckedCreateInput>
  }

  /**
   * Language createMany
   */
  export type LanguageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Languages.
     */
    data: LanguageCreateManyInput | LanguageCreateManyInput[]
  }

  /**
   * Language update
   */
  export type LanguageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * The data needed to update a Language.
     */
    data: XOR<LanguageUpdateInput, LanguageUncheckedUpdateInput>
    /**
     * Choose, which Language to update.
     */
    where: LanguageWhereUniqueInput
  }

  /**
   * Language updateMany
   */
  export type LanguageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Languages.
     */
    data: XOR<LanguageUpdateManyMutationInput, LanguageUncheckedUpdateManyInput>
    /**
     * Filter which Languages to update
     */
    where?: LanguageWhereInput
    /**
     * Limit how many Languages to update.
     */
    limit?: number
  }

  /**
   * Language upsert
   */
  export type LanguageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * The filter to search for the Language to update in case it exists.
     */
    where: LanguageWhereUniqueInput
    /**
     * In case the Language found by the `where` argument doesn't exist, create a new Language with this data.
     */
    create: XOR<LanguageCreateInput, LanguageUncheckedCreateInput>
    /**
     * In case the Language was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LanguageUpdateInput, LanguageUncheckedUpdateInput>
  }

  /**
   * Language delete
   */
  export type LanguageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * Filter which Language to delete.
     */
    where: LanguageWhereUniqueInput
  }

  /**
   * Language deleteMany
   */
  export type LanguageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Languages to delete
     */
    where?: LanguageWhereInput
    /**
     * Limit how many Languages to delete.
     */
    limit?: number
  }

  /**
   * Language findRaw
   */
  export type LanguageFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Language aggregateRaw
   */
  export type LanguageAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Language.branch
   */
  export type Language$branchArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    where?: BranchWhereInput
  }

  /**
   * Language without action
   */
  export type LanguageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    owner: 'owner',
    contributor: 'contributor',
    nonContributor: 'nonContributor',
    githubId: 'githubId',
    githubUsername: 'githubUsername',
    avatarUrl: 'avatarUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RepositoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    ownerId: 'ownerId',
    createdAt: 'createdAt',
    githubId: 'githubId',
    htmlUrl: 'htmlUrl',
    cloneUrl: 'cloneUrl',
    isPrivate: 'isPrivate'
  };

  export type RepositoryScalarFieldEnum = (typeof RepositoryScalarFieldEnum)[keyof typeof RepositoryScalarFieldEnum]


  export const RepoUserScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    repositoryId: 'repositoryId',
    role: 'role'
  };

  export type RepoUserScalarFieldEnum = (typeof RepoUserScalarFieldEnum)[keyof typeof RepoUserScalarFieldEnum]


  export const BranchScalarFieldEnum: {
    id: 'id',
    name: 'name',
    repositoryId: 'repositoryId',
    lastCommit: 'lastCommit',
    isProtected: 'isProtected',
    createdAt: 'createdAt',
    migratesTo: 'migratesTo'
  };

  export type BranchScalarFieldEnum = (typeof BranchScalarFieldEnum)[keyof typeof BranchScalarFieldEnum]


  export const LanguageScalarFieldEnum: {
    id: 'id',
    name: 'name',
    version: 'version',
    branchId: 'branchId',
    category: 'category'
  };

  export type LanguageScalarFieldEnum = (typeof LanguageScalarFieldEnum)[keyof typeof LanguageScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Owner'
   */
  export type EnumOwnerFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Owner'>
    


  /**
   * Reference to a field of type 'Owner[]'
   */
  export type ListEnumOwnerFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Owner[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'FrameworkCategory'
   */
  export type EnumFrameworkCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FrameworkCategory'>
    


  /**
   * Reference to a field of type 'FrameworkCategory[]'
   */
  export type ListEnumFrameworkCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FrameworkCategory[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    owner?: EnumOwnerFilter<"User"> | $Enums.Owner
    contributor?: StringNullableFilter<"User"> | string | null
    nonContributor?: StringNullableFilter<"User"> | string | null
    githubId?: StringNullableFilter<"User"> | string | null
    githubUsername?: StringNullableFilter<"User"> | string | null
    avatarUrl?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    repositories?: RepositoryListRelationFilter
    repoUsers?: RepoUserListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    owner?: SortOrder
    contributor?: SortOrder
    nonContributor?: SortOrder
    githubId?: SortOrder
    githubUsername?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    repositories?: RepositoryOrderByRelationAggregateInput
    repoUsers?: RepoUserOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    githubId?: string
    githubUsername?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    owner?: EnumOwnerFilter<"User"> | $Enums.Owner
    contributor?: StringNullableFilter<"User"> | string | null
    nonContributor?: StringNullableFilter<"User"> | string | null
    avatarUrl?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    repositories?: RepositoryListRelationFilter
    repoUsers?: RepoUserListRelationFilter
  }, "id" | "email" | "githubId" | "githubUsername">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    owner?: SortOrder
    contributor?: SortOrder
    nonContributor?: SortOrder
    githubId?: SortOrder
    githubUsername?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    owner?: EnumOwnerWithAggregatesFilter<"User"> | $Enums.Owner
    contributor?: StringNullableWithAggregatesFilter<"User"> | string | null
    nonContributor?: StringNullableWithAggregatesFilter<"User"> | string | null
    githubId?: StringNullableWithAggregatesFilter<"User"> | string | null
    githubUsername?: StringNullableWithAggregatesFilter<"User"> | string | null
    avatarUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type RepositoryWhereInput = {
    AND?: RepositoryWhereInput | RepositoryWhereInput[]
    OR?: RepositoryWhereInput[]
    NOT?: RepositoryWhereInput | RepositoryWhereInput[]
    id?: StringFilter<"Repository"> | string
    name?: StringFilter<"Repository"> | string
    description?: StringNullableFilter<"Repository"> | string | null
    ownerId?: StringFilter<"Repository"> | string
    createdAt?: DateTimeFilter<"Repository"> | Date | string
    githubId?: IntNullableFilter<"Repository"> | number | null
    htmlUrl?: StringNullableFilter<"Repository"> | string | null
    cloneUrl?: StringNullableFilter<"Repository"> | string | null
    isPrivate?: BoolFilter<"Repository"> | boolean
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    branches?: BranchListRelationFilter
    repoUsers?: RepoUserListRelationFilter
  }

  export type RepositoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    githubId?: SortOrder
    htmlUrl?: SortOrder
    cloneUrl?: SortOrder
    isPrivate?: SortOrder
    owner?: UserOrderByWithRelationInput
    branches?: BranchOrderByRelationAggregateInput
    repoUsers?: RepoUserOrderByRelationAggregateInput
  }

  export type RepositoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    githubId?: number
    AND?: RepositoryWhereInput | RepositoryWhereInput[]
    OR?: RepositoryWhereInput[]
    NOT?: RepositoryWhereInput | RepositoryWhereInput[]
    name?: StringFilter<"Repository"> | string
    description?: StringNullableFilter<"Repository"> | string | null
    ownerId?: StringFilter<"Repository"> | string
    createdAt?: DateTimeFilter<"Repository"> | Date | string
    htmlUrl?: StringNullableFilter<"Repository"> | string | null
    cloneUrl?: StringNullableFilter<"Repository"> | string | null
    isPrivate?: BoolFilter<"Repository"> | boolean
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    branches?: BranchListRelationFilter
    repoUsers?: RepoUserListRelationFilter
  }, "id" | "githubId">

  export type RepositoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    githubId?: SortOrder
    htmlUrl?: SortOrder
    cloneUrl?: SortOrder
    isPrivate?: SortOrder
    _count?: RepositoryCountOrderByAggregateInput
    _avg?: RepositoryAvgOrderByAggregateInput
    _max?: RepositoryMaxOrderByAggregateInput
    _min?: RepositoryMinOrderByAggregateInput
    _sum?: RepositorySumOrderByAggregateInput
  }

  export type RepositoryScalarWhereWithAggregatesInput = {
    AND?: RepositoryScalarWhereWithAggregatesInput | RepositoryScalarWhereWithAggregatesInput[]
    OR?: RepositoryScalarWhereWithAggregatesInput[]
    NOT?: RepositoryScalarWhereWithAggregatesInput | RepositoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Repository"> | string
    name?: StringWithAggregatesFilter<"Repository"> | string
    description?: StringNullableWithAggregatesFilter<"Repository"> | string | null
    ownerId?: StringWithAggregatesFilter<"Repository"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Repository"> | Date | string
    githubId?: IntNullableWithAggregatesFilter<"Repository"> | number | null
    htmlUrl?: StringNullableWithAggregatesFilter<"Repository"> | string | null
    cloneUrl?: StringNullableWithAggregatesFilter<"Repository"> | string | null
    isPrivate?: BoolWithAggregatesFilter<"Repository"> | boolean
  }

  export type RepoUserWhereInput = {
    AND?: RepoUserWhereInput | RepoUserWhereInput[]
    OR?: RepoUserWhereInput[]
    NOT?: RepoUserWhereInput | RepoUserWhereInput[]
    id?: StringFilter<"RepoUser"> | string
    userId?: StringFilter<"RepoUser"> | string
    repositoryId?: StringFilter<"RepoUser"> | string
    role?: EnumRoleFilter<"RepoUser"> | $Enums.Role
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    repository?: XOR<RepositoryScalarRelationFilter, RepositoryWhereInput>
  }

  export type RepoUserOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    repositoryId?: SortOrder
    role?: SortOrder
    user?: UserOrderByWithRelationInput
    repository?: RepositoryOrderByWithRelationInput
  }

  export type RepoUserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_repositoryId?: RepoUserUserIdRepositoryIdCompoundUniqueInput
    AND?: RepoUserWhereInput | RepoUserWhereInput[]
    OR?: RepoUserWhereInput[]
    NOT?: RepoUserWhereInput | RepoUserWhereInput[]
    userId?: StringFilter<"RepoUser"> | string
    repositoryId?: StringFilter<"RepoUser"> | string
    role?: EnumRoleFilter<"RepoUser"> | $Enums.Role
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    repository?: XOR<RepositoryScalarRelationFilter, RepositoryWhereInput>
  }, "id" | "userId_repositoryId">

  export type RepoUserOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    repositoryId?: SortOrder
    role?: SortOrder
    _count?: RepoUserCountOrderByAggregateInput
    _max?: RepoUserMaxOrderByAggregateInput
    _min?: RepoUserMinOrderByAggregateInput
  }

  export type RepoUserScalarWhereWithAggregatesInput = {
    AND?: RepoUserScalarWhereWithAggregatesInput | RepoUserScalarWhereWithAggregatesInput[]
    OR?: RepoUserScalarWhereWithAggregatesInput[]
    NOT?: RepoUserScalarWhereWithAggregatesInput | RepoUserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RepoUser"> | string
    userId?: StringWithAggregatesFilter<"RepoUser"> | string
    repositoryId?: StringWithAggregatesFilter<"RepoUser"> | string
    role?: EnumRoleWithAggregatesFilter<"RepoUser"> | $Enums.Role
  }

  export type BranchWhereInput = {
    AND?: BranchWhereInput | BranchWhereInput[]
    OR?: BranchWhereInput[]
    NOT?: BranchWhereInput | BranchWhereInput[]
    id?: StringFilter<"Branch"> | string
    name?: StringFilter<"Branch"> | string
    repositoryId?: StringFilter<"Branch"> | string
    lastCommit?: StringNullableFilter<"Branch"> | string | null
    isProtected?: BoolFilter<"Branch"> | boolean
    createdAt?: DateTimeFilter<"Branch"> | Date | string
    migratesTo?: StringNullableListFilter<"Branch">
    repository?: XOR<RepositoryScalarRelationFilter, RepositoryWhereInput>
    languages?: LanguageListRelationFilter
  }

  export type BranchOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    repositoryId?: SortOrder
    lastCommit?: SortOrder
    isProtected?: SortOrder
    createdAt?: SortOrder
    migratesTo?: SortOrder
    repository?: RepositoryOrderByWithRelationInput
    languages?: LanguageOrderByRelationAggregateInput
  }

  export type BranchWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name_repositoryId?: BranchNameRepositoryIdCompoundUniqueInput
    AND?: BranchWhereInput | BranchWhereInput[]
    OR?: BranchWhereInput[]
    NOT?: BranchWhereInput | BranchWhereInput[]
    name?: StringFilter<"Branch"> | string
    repositoryId?: StringFilter<"Branch"> | string
    lastCommit?: StringNullableFilter<"Branch"> | string | null
    isProtected?: BoolFilter<"Branch"> | boolean
    createdAt?: DateTimeFilter<"Branch"> | Date | string
    migratesTo?: StringNullableListFilter<"Branch">
    repository?: XOR<RepositoryScalarRelationFilter, RepositoryWhereInput>
    languages?: LanguageListRelationFilter
  }, "id" | "name_repositoryId">

  export type BranchOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    repositoryId?: SortOrder
    lastCommit?: SortOrder
    isProtected?: SortOrder
    createdAt?: SortOrder
    migratesTo?: SortOrder
    _count?: BranchCountOrderByAggregateInput
    _max?: BranchMaxOrderByAggregateInput
    _min?: BranchMinOrderByAggregateInput
  }

  export type BranchScalarWhereWithAggregatesInput = {
    AND?: BranchScalarWhereWithAggregatesInput | BranchScalarWhereWithAggregatesInput[]
    OR?: BranchScalarWhereWithAggregatesInput[]
    NOT?: BranchScalarWhereWithAggregatesInput | BranchScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Branch"> | string
    name?: StringWithAggregatesFilter<"Branch"> | string
    repositoryId?: StringWithAggregatesFilter<"Branch"> | string
    lastCommit?: StringNullableWithAggregatesFilter<"Branch"> | string | null
    isProtected?: BoolWithAggregatesFilter<"Branch"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Branch"> | Date | string
    migratesTo?: StringNullableListFilter<"Branch">
  }

  export type LanguageWhereInput = {
    AND?: LanguageWhereInput | LanguageWhereInput[]
    OR?: LanguageWhereInput[]
    NOT?: LanguageWhereInput | LanguageWhereInput[]
    id?: StringFilter<"Language"> | string
    name?: StringFilter<"Language"> | string
    version?: StringNullableFilter<"Language"> | string | null
    branchId?: StringNullableFilter<"Language"> | string | null
    category?: EnumFrameworkCategoryFilter<"Language"> | $Enums.FrameworkCategory
    branch?: XOR<BranchNullableScalarRelationFilter, BranchWhereInput> | null
  }

  export type LanguageOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    version?: SortOrder
    branchId?: SortOrder
    category?: SortOrder
    branch?: BranchOrderByWithRelationInput
  }

  export type LanguageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: LanguageWhereInput | LanguageWhereInput[]
    OR?: LanguageWhereInput[]
    NOT?: LanguageWhereInput | LanguageWhereInput[]
    version?: StringNullableFilter<"Language"> | string | null
    branchId?: StringNullableFilter<"Language"> | string | null
    category?: EnumFrameworkCategoryFilter<"Language"> | $Enums.FrameworkCategory
    branch?: XOR<BranchNullableScalarRelationFilter, BranchWhereInput> | null
  }, "id" | "name">

  export type LanguageOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    version?: SortOrder
    branchId?: SortOrder
    category?: SortOrder
    _count?: LanguageCountOrderByAggregateInput
    _max?: LanguageMaxOrderByAggregateInput
    _min?: LanguageMinOrderByAggregateInput
  }

  export type LanguageScalarWhereWithAggregatesInput = {
    AND?: LanguageScalarWhereWithAggregatesInput | LanguageScalarWhereWithAggregatesInput[]
    OR?: LanguageScalarWhereWithAggregatesInput[]
    NOT?: LanguageScalarWhereWithAggregatesInput | LanguageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Language"> | string
    name?: StringWithAggregatesFilter<"Language"> | string
    version?: StringNullableWithAggregatesFilter<"Language"> | string | null
    branchId?: StringNullableWithAggregatesFilter<"Language"> | string | null
    category?: EnumFrameworkCategoryWithAggregatesFilter<"Language"> | $Enums.FrameworkCategory
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email: string
    owner?: $Enums.Owner
    contributor?: string | null
    nonContributor?: string | null
    githubId?: string | null
    githubUsername?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    repositories?: RepositoryCreateNestedManyWithoutOwnerInput
    repoUsers?: RepoUserCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email: string
    owner?: $Enums.Owner
    contributor?: string | null
    nonContributor?: string | null
    githubId?: string | null
    githubUsername?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    repositories?: RepositoryUncheckedCreateNestedManyWithoutOwnerInput
    repoUsers?: RepoUserUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    owner?: EnumOwnerFieldUpdateOperationsInput | $Enums.Owner
    contributor?: NullableStringFieldUpdateOperationsInput | string | null
    nonContributor?: NullableStringFieldUpdateOperationsInput | string | null
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    githubUsername?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    repositories?: RepositoryUpdateManyWithoutOwnerNestedInput
    repoUsers?: RepoUserUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    owner?: EnumOwnerFieldUpdateOperationsInput | $Enums.Owner
    contributor?: NullableStringFieldUpdateOperationsInput | string | null
    nonContributor?: NullableStringFieldUpdateOperationsInput | string | null
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    githubUsername?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    repositories?: RepositoryUncheckedUpdateManyWithoutOwnerNestedInput
    repoUsers?: RepoUserUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email: string
    owner?: $Enums.Owner
    contributor?: string | null
    nonContributor?: string | null
    githubId?: string | null
    githubUsername?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    owner?: EnumOwnerFieldUpdateOperationsInput | $Enums.Owner
    contributor?: NullableStringFieldUpdateOperationsInput | string | null
    nonContributor?: NullableStringFieldUpdateOperationsInput | string | null
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    githubUsername?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    owner?: EnumOwnerFieldUpdateOperationsInput | $Enums.Owner
    contributor?: NullableStringFieldUpdateOperationsInput | string | null
    nonContributor?: NullableStringFieldUpdateOperationsInput | string | null
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    githubUsername?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RepositoryCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    githubId?: number | null
    htmlUrl?: string | null
    cloneUrl?: string | null
    isPrivate?: boolean
    owner: UserCreateNestedOneWithoutRepositoriesInput
    branches?: BranchCreateNestedManyWithoutRepositoryInput
    repoUsers?: RepoUserCreateNestedManyWithoutRepositoryInput
  }

  export type RepositoryUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    ownerId: string
    createdAt?: Date | string
    githubId?: number | null
    htmlUrl?: string | null
    cloneUrl?: string | null
    isPrivate?: boolean
    branches?: BranchUncheckedCreateNestedManyWithoutRepositoryInput
    repoUsers?: RepoUserUncheckedCreateNestedManyWithoutRepositoryInput
  }

  export type RepositoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    githubId?: NullableIntFieldUpdateOperationsInput | number | null
    htmlUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cloneUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    owner?: UserUpdateOneRequiredWithoutRepositoriesNestedInput
    branches?: BranchUpdateManyWithoutRepositoryNestedInput
    repoUsers?: RepoUserUpdateManyWithoutRepositoryNestedInput
  }

  export type RepositoryUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    githubId?: NullableIntFieldUpdateOperationsInput | number | null
    htmlUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cloneUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    branches?: BranchUncheckedUpdateManyWithoutRepositoryNestedInput
    repoUsers?: RepoUserUncheckedUpdateManyWithoutRepositoryNestedInput
  }

  export type RepositoryCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    ownerId: string
    createdAt?: Date | string
    githubId?: number | null
    htmlUrl?: string | null
    cloneUrl?: string | null
    isPrivate?: boolean
  }

  export type RepositoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    githubId?: NullableIntFieldUpdateOperationsInput | number | null
    htmlUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cloneUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RepositoryUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    githubId?: NullableIntFieldUpdateOperationsInput | number | null
    htmlUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cloneUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RepoUserCreateInput = {
    id?: string
    role?: $Enums.Role
    user: UserCreateNestedOneWithoutRepoUsersInput
    repository: RepositoryCreateNestedOneWithoutRepoUsersInput
  }

  export type RepoUserUncheckedCreateInput = {
    id?: string
    userId: string
    repositoryId: string
    role?: $Enums.Role
  }

  export type RepoUserUpdateInput = {
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    user?: UserUpdateOneRequiredWithoutRepoUsersNestedInput
    repository?: RepositoryUpdateOneRequiredWithoutRepoUsersNestedInput
  }

  export type RepoUserUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    repositoryId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type RepoUserCreateManyInput = {
    id?: string
    userId: string
    repositoryId: string
    role?: $Enums.Role
  }

  export type RepoUserUpdateManyMutationInput = {
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type RepoUserUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    repositoryId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type BranchCreateInput = {
    id?: string
    name: string
    lastCommit?: string | null
    isProtected?: boolean
    createdAt?: Date | string
    migratesTo?: BranchCreatemigratesToInput | string[]
    repository: RepositoryCreateNestedOneWithoutBranchesInput
    languages?: LanguageCreateNestedManyWithoutBranchInput
  }

  export type BranchUncheckedCreateInput = {
    id?: string
    name: string
    repositoryId: string
    lastCommit?: string | null
    isProtected?: boolean
    createdAt?: Date | string
    migratesTo?: BranchCreatemigratesToInput | string[]
    languages?: LanguageUncheckedCreateNestedManyWithoutBranchInput
  }

  export type BranchUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    lastCommit?: NullableStringFieldUpdateOperationsInput | string | null
    isProtected?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    migratesTo?: BranchUpdatemigratesToInput | string[]
    repository?: RepositoryUpdateOneRequiredWithoutBranchesNestedInput
    languages?: LanguageUpdateManyWithoutBranchNestedInput
  }

  export type BranchUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    repositoryId?: StringFieldUpdateOperationsInput | string
    lastCommit?: NullableStringFieldUpdateOperationsInput | string | null
    isProtected?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    migratesTo?: BranchUpdatemigratesToInput | string[]
    languages?: LanguageUncheckedUpdateManyWithoutBranchNestedInput
  }

  export type BranchCreateManyInput = {
    id?: string
    name: string
    repositoryId: string
    lastCommit?: string | null
    isProtected?: boolean
    createdAt?: Date | string
    migratesTo?: BranchCreatemigratesToInput | string[]
  }

  export type BranchUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    lastCommit?: NullableStringFieldUpdateOperationsInput | string | null
    isProtected?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    migratesTo?: BranchUpdatemigratesToInput | string[]
  }

  export type BranchUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    repositoryId?: StringFieldUpdateOperationsInput | string
    lastCommit?: NullableStringFieldUpdateOperationsInput | string | null
    isProtected?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    migratesTo?: BranchUpdatemigratesToInput | string[]
  }

  export type LanguageCreateInput = {
    id?: string
    name: string
    version?: string | null
    category?: $Enums.FrameworkCategory
    branch?: BranchCreateNestedOneWithoutLanguagesInput
  }

  export type LanguageUncheckedCreateInput = {
    id?: string
    name: string
    version?: string | null
    branchId?: string | null
    category?: $Enums.FrameworkCategory
  }

  export type LanguageUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    version?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumFrameworkCategoryFieldUpdateOperationsInput | $Enums.FrameworkCategory
    branch?: BranchUpdateOneWithoutLanguagesNestedInput
  }

  export type LanguageUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    version?: NullableStringFieldUpdateOperationsInput | string | null
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumFrameworkCategoryFieldUpdateOperationsInput | $Enums.FrameworkCategory
  }

  export type LanguageCreateManyInput = {
    id?: string
    name: string
    version?: string | null
    branchId?: string | null
    category?: $Enums.FrameworkCategory
  }

  export type LanguageUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    version?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumFrameworkCategoryFieldUpdateOperationsInput | $Enums.FrameworkCategory
  }

  export type LanguageUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    version?: NullableStringFieldUpdateOperationsInput | string | null
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumFrameworkCategoryFieldUpdateOperationsInput | $Enums.FrameworkCategory
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type EnumOwnerFilter<$PrismaModel = never> = {
    equals?: $Enums.Owner | EnumOwnerFieldRefInput<$PrismaModel>
    in?: $Enums.Owner[] | ListEnumOwnerFieldRefInput<$PrismaModel>
    notIn?: $Enums.Owner[] | ListEnumOwnerFieldRefInput<$PrismaModel>
    not?: NestedEnumOwnerFilter<$PrismaModel> | $Enums.Owner
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type RepositoryListRelationFilter = {
    every?: RepositoryWhereInput
    some?: RepositoryWhereInput
    none?: RepositoryWhereInput
  }

  export type RepoUserListRelationFilter = {
    every?: RepoUserWhereInput
    some?: RepoUserWhereInput
    none?: RepoUserWhereInput
  }

  export type RepositoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RepoUserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    owner?: SortOrder
    contributor?: SortOrder
    nonContributor?: SortOrder
    githubId?: SortOrder
    githubUsername?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    owner?: SortOrder
    contributor?: SortOrder
    nonContributor?: SortOrder
    githubId?: SortOrder
    githubUsername?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    owner?: SortOrder
    contributor?: SortOrder
    nonContributor?: SortOrder
    githubId?: SortOrder
    githubUsername?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type EnumOwnerWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Owner | EnumOwnerFieldRefInput<$PrismaModel>
    in?: $Enums.Owner[] | ListEnumOwnerFieldRefInput<$PrismaModel>
    notIn?: $Enums.Owner[] | ListEnumOwnerFieldRefInput<$PrismaModel>
    not?: NestedEnumOwnerWithAggregatesFilter<$PrismaModel> | $Enums.Owner
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOwnerFilter<$PrismaModel>
    _max?: NestedEnumOwnerFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type BranchListRelationFilter = {
    every?: BranchWhereInput
    some?: BranchWhereInput
    none?: BranchWhereInput
  }

  export type BranchOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RepositoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    githubId?: SortOrder
    htmlUrl?: SortOrder
    cloneUrl?: SortOrder
    isPrivate?: SortOrder
  }

  export type RepositoryAvgOrderByAggregateInput = {
    githubId?: SortOrder
  }

  export type RepositoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    githubId?: SortOrder
    htmlUrl?: SortOrder
    cloneUrl?: SortOrder
    isPrivate?: SortOrder
  }

  export type RepositoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    githubId?: SortOrder
    htmlUrl?: SortOrder
    cloneUrl?: SortOrder
    isPrivate?: SortOrder
  }

  export type RepositorySumOrderByAggregateInput = {
    githubId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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
    isSet?: boolean
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type RepositoryScalarRelationFilter = {
    is?: RepositoryWhereInput
    isNot?: RepositoryWhereInput
  }

  export type RepoUserUserIdRepositoryIdCompoundUniqueInput = {
    userId: string
    repositoryId: string
  }

  export type RepoUserCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    repositoryId?: SortOrder
    role?: SortOrder
  }

  export type RepoUserMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    repositoryId?: SortOrder
    role?: SortOrder
  }

  export type RepoUserMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    repositoryId?: SortOrder
    role?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type LanguageListRelationFilter = {
    every?: LanguageWhereInput
    some?: LanguageWhereInput
    none?: LanguageWhereInput
  }

  export type LanguageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BranchNameRepositoryIdCompoundUniqueInput = {
    name: string
    repositoryId: string
  }

  export type BranchCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    repositoryId?: SortOrder
    lastCommit?: SortOrder
    isProtected?: SortOrder
    createdAt?: SortOrder
    migratesTo?: SortOrder
  }

  export type BranchMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    repositoryId?: SortOrder
    lastCommit?: SortOrder
    isProtected?: SortOrder
    createdAt?: SortOrder
  }

  export type BranchMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    repositoryId?: SortOrder
    lastCommit?: SortOrder
    isProtected?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumFrameworkCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.FrameworkCategory | EnumFrameworkCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.FrameworkCategory[] | ListEnumFrameworkCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.FrameworkCategory[] | ListEnumFrameworkCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumFrameworkCategoryFilter<$PrismaModel> | $Enums.FrameworkCategory
  }

  export type BranchNullableScalarRelationFilter = {
    is?: BranchWhereInput | null
    isNot?: BranchWhereInput | null
  }

  export type LanguageCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    version?: SortOrder
    branchId?: SortOrder
    category?: SortOrder
  }

  export type LanguageMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    version?: SortOrder
    branchId?: SortOrder
    category?: SortOrder
  }

  export type LanguageMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    version?: SortOrder
    branchId?: SortOrder
    category?: SortOrder
  }

  export type EnumFrameworkCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FrameworkCategory | EnumFrameworkCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.FrameworkCategory[] | ListEnumFrameworkCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.FrameworkCategory[] | ListEnumFrameworkCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumFrameworkCategoryWithAggregatesFilter<$PrismaModel> | $Enums.FrameworkCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFrameworkCategoryFilter<$PrismaModel>
    _max?: NestedEnumFrameworkCategoryFilter<$PrismaModel>
  }

  export type RepositoryCreateNestedManyWithoutOwnerInput = {
    create?: XOR<RepositoryCreateWithoutOwnerInput, RepositoryUncheckedCreateWithoutOwnerInput> | RepositoryCreateWithoutOwnerInput[] | RepositoryUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: RepositoryCreateOrConnectWithoutOwnerInput | RepositoryCreateOrConnectWithoutOwnerInput[]
    createMany?: RepositoryCreateManyOwnerInputEnvelope
    connect?: RepositoryWhereUniqueInput | RepositoryWhereUniqueInput[]
  }

  export type RepoUserCreateNestedManyWithoutUserInput = {
    create?: XOR<RepoUserCreateWithoutUserInput, RepoUserUncheckedCreateWithoutUserInput> | RepoUserCreateWithoutUserInput[] | RepoUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RepoUserCreateOrConnectWithoutUserInput | RepoUserCreateOrConnectWithoutUserInput[]
    createMany?: RepoUserCreateManyUserInputEnvelope
    connect?: RepoUserWhereUniqueInput | RepoUserWhereUniqueInput[]
  }

  export type RepositoryUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<RepositoryCreateWithoutOwnerInput, RepositoryUncheckedCreateWithoutOwnerInput> | RepositoryCreateWithoutOwnerInput[] | RepositoryUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: RepositoryCreateOrConnectWithoutOwnerInput | RepositoryCreateOrConnectWithoutOwnerInput[]
    createMany?: RepositoryCreateManyOwnerInputEnvelope
    connect?: RepositoryWhereUniqueInput | RepositoryWhereUniqueInput[]
  }

  export type RepoUserUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RepoUserCreateWithoutUserInput, RepoUserUncheckedCreateWithoutUserInput> | RepoUserCreateWithoutUserInput[] | RepoUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RepoUserCreateOrConnectWithoutUserInput | RepoUserCreateOrConnectWithoutUserInput[]
    createMany?: RepoUserCreateManyUserInputEnvelope
    connect?: RepoUserWhereUniqueInput | RepoUserWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumOwnerFieldUpdateOperationsInput = {
    set?: $Enums.Owner
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RepositoryUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<RepositoryCreateWithoutOwnerInput, RepositoryUncheckedCreateWithoutOwnerInput> | RepositoryCreateWithoutOwnerInput[] | RepositoryUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: RepositoryCreateOrConnectWithoutOwnerInput | RepositoryCreateOrConnectWithoutOwnerInput[]
    upsert?: RepositoryUpsertWithWhereUniqueWithoutOwnerInput | RepositoryUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: RepositoryCreateManyOwnerInputEnvelope
    set?: RepositoryWhereUniqueInput | RepositoryWhereUniqueInput[]
    disconnect?: RepositoryWhereUniqueInput | RepositoryWhereUniqueInput[]
    delete?: RepositoryWhereUniqueInput | RepositoryWhereUniqueInput[]
    connect?: RepositoryWhereUniqueInput | RepositoryWhereUniqueInput[]
    update?: RepositoryUpdateWithWhereUniqueWithoutOwnerInput | RepositoryUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: RepositoryUpdateManyWithWhereWithoutOwnerInput | RepositoryUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: RepositoryScalarWhereInput | RepositoryScalarWhereInput[]
  }

  export type RepoUserUpdateManyWithoutUserNestedInput = {
    create?: XOR<RepoUserCreateWithoutUserInput, RepoUserUncheckedCreateWithoutUserInput> | RepoUserCreateWithoutUserInput[] | RepoUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RepoUserCreateOrConnectWithoutUserInput | RepoUserCreateOrConnectWithoutUserInput[]
    upsert?: RepoUserUpsertWithWhereUniqueWithoutUserInput | RepoUserUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RepoUserCreateManyUserInputEnvelope
    set?: RepoUserWhereUniqueInput | RepoUserWhereUniqueInput[]
    disconnect?: RepoUserWhereUniqueInput | RepoUserWhereUniqueInput[]
    delete?: RepoUserWhereUniqueInput | RepoUserWhereUniqueInput[]
    connect?: RepoUserWhereUniqueInput | RepoUserWhereUniqueInput[]
    update?: RepoUserUpdateWithWhereUniqueWithoutUserInput | RepoUserUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RepoUserUpdateManyWithWhereWithoutUserInput | RepoUserUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RepoUserScalarWhereInput | RepoUserScalarWhereInput[]
  }

  export type RepositoryUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<RepositoryCreateWithoutOwnerInput, RepositoryUncheckedCreateWithoutOwnerInput> | RepositoryCreateWithoutOwnerInput[] | RepositoryUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: RepositoryCreateOrConnectWithoutOwnerInput | RepositoryCreateOrConnectWithoutOwnerInput[]
    upsert?: RepositoryUpsertWithWhereUniqueWithoutOwnerInput | RepositoryUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: RepositoryCreateManyOwnerInputEnvelope
    set?: RepositoryWhereUniqueInput | RepositoryWhereUniqueInput[]
    disconnect?: RepositoryWhereUniqueInput | RepositoryWhereUniqueInput[]
    delete?: RepositoryWhereUniqueInput | RepositoryWhereUniqueInput[]
    connect?: RepositoryWhereUniqueInput | RepositoryWhereUniqueInput[]
    update?: RepositoryUpdateWithWhereUniqueWithoutOwnerInput | RepositoryUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: RepositoryUpdateManyWithWhereWithoutOwnerInput | RepositoryUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: RepositoryScalarWhereInput | RepositoryScalarWhereInput[]
  }

  export type RepoUserUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RepoUserCreateWithoutUserInput, RepoUserUncheckedCreateWithoutUserInput> | RepoUserCreateWithoutUserInput[] | RepoUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RepoUserCreateOrConnectWithoutUserInput | RepoUserCreateOrConnectWithoutUserInput[]
    upsert?: RepoUserUpsertWithWhereUniqueWithoutUserInput | RepoUserUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RepoUserCreateManyUserInputEnvelope
    set?: RepoUserWhereUniqueInput | RepoUserWhereUniqueInput[]
    disconnect?: RepoUserWhereUniqueInput | RepoUserWhereUniqueInput[]
    delete?: RepoUserWhereUniqueInput | RepoUserWhereUniqueInput[]
    connect?: RepoUserWhereUniqueInput | RepoUserWhereUniqueInput[]
    update?: RepoUserUpdateWithWhereUniqueWithoutUserInput | RepoUserUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RepoUserUpdateManyWithWhereWithoutUserInput | RepoUserUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RepoUserScalarWhereInput | RepoUserScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutRepositoriesInput = {
    create?: XOR<UserCreateWithoutRepositoriesInput, UserUncheckedCreateWithoutRepositoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRepositoriesInput
    connect?: UserWhereUniqueInput
  }

  export type BranchCreateNestedManyWithoutRepositoryInput = {
    create?: XOR<BranchCreateWithoutRepositoryInput, BranchUncheckedCreateWithoutRepositoryInput> | BranchCreateWithoutRepositoryInput[] | BranchUncheckedCreateWithoutRepositoryInput[]
    connectOrCreate?: BranchCreateOrConnectWithoutRepositoryInput | BranchCreateOrConnectWithoutRepositoryInput[]
    createMany?: BranchCreateManyRepositoryInputEnvelope
    connect?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
  }

  export type RepoUserCreateNestedManyWithoutRepositoryInput = {
    create?: XOR<RepoUserCreateWithoutRepositoryInput, RepoUserUncheckedCreateWithoutRepositoryInput> | RepoUserCreateWithoutRepositoryInput[] | RepoUserUncheckedCreateWithoutRepositoryInput[]
    connectOrCreate?: RepoUserCreateOrConnectWithoutRepositoryInput | RepoUserCreateOrConnectWithoutRepositoryInput[]
    createMany?: RepoUserCreateManyRepositoryInputEnvelope
    connect?: RepoUserWhereUniqueInput | RepoUserWhereUniqueInput[]
  }

  export type BranchUncheckedCreateNestedManyWithoutRepositoryInput = {
    create?: XOR<BranchCreateWithoutRepositoryInput, BranchUncheckedCreateWithoutRepositoryInput> | BranchCreateWithoutRepositoryInput[] | BranchUncheckedCreateWithoutRepositoryInput[]
    connectOrCreate?: BranchCreateOrConnectWithoutRepositoryInput | BranchCreateOrConnectWithoutRepositoryInput[]
    createMany?: BranchCreateManyRepositoryInputEnvelope
    connect?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
  }

  export type RepoUserUncheckedCreateNestedManyWithoutRepositoryInput = {
    create?: XOR<RepoUserCreateWithoutRepositoryInput, RepoUserUncheckedCreateWithoutRepositoryInput> | RepoUserCreateWithoutRepositoryInput[] | RepoUserUncheckedCreateWithoutRepositoryInput[]
    connectOrCreate?: RepoUserCreateOrConnectWithoutRepositoryInput | RepoUserCreateOrConnectWithoutRepositoryInput[]
    createMany?: RepoUserCreateManyRepositoryInputEnvelope
    connect?: RepoUserWhereUniqueInput | RepoUserWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutRepositoriesNestedInput = {
    create?: XOR<UserCreateWithoutRepositoriesInput, UserUncheckedCreateWithoutRepositoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRepositoriesInput
    upsert?: UserUpsertWithoutRepositoriesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRepositoriesInput, UserUpdateWithoutRepositoriesInput>, UserUncheckedUpdateWithoutRepositoriesInput>
  }

  export type BranchUpdateManyWithoutRepositoryNestedInput = {
    create?: XOR<BranchCreateWithoutRepositoryInput, BranchUncheckedCreateWithoutRepositoryInput> | BranchCreateWithoutRepositoryInput[] | BranchUncheckedCreateWithoutRepositoryInput[]
    connectOrCreate?: BranchCreateOrConnectWithoutRepositoryInput | BranchCreateOrConnectWithoutRepositoryInput[]
    upsert?: BranchUpsertWithWhereUniqueWithoutRepositoryInput | BranchUpsertWithWhereUniqueWithoutRepositoryInput[]
    createMany?: BranchCreateManyRepositoryInputEnvelope
    set?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
    disconnect?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
    delete?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
    connect?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
    update?: BranchUpdateWithWhereUniqueWithoutRepositoryInput | BranchUpdateWithWhereUniqueWithoutRepositoryInput[]
    updateMany?: BranchUpdateManyWithWhereWithoutRepositoryInput | BranchUpdateManyWithWhereWithoutRepositoryInput[]
    deleteMany?: BranchScalarWhereInput | BranchScalarWhereInput[]
  }

  export type RepoUserUpdateManyWithoutRepositoryNestedInput = {
    create?: XOR<RepoUserCreateWithoutRepositoryInput, RepoUserUncheckedCreateWithoutRepositoryInput> | RepoUserCreateWithoutRepositoryInput[] | RepoUserUncheckedCreateWithoutRepositoryInput[]
    connectOrCreate?: RepoUserCreateOrConnectWithoutRepositoryInput | RepoUserCreateOrConnectWithoutRepositoryInput[]
    upsert?: RepoUserUpsertWithWhereUniqueWithoutRepositoryInput | RepoUserUpsertWithWhereUniqueWithoutRepositoryInput[]
    createMany?: RepoUserCreateManyRepositoryInputEnvelope
    set?: RepoUserWhereUniqueInput | RepoUserWhereUniqueInput[]
    disconnect?: RepoUserWhereUniqueInput | RepoUserWhereUniqueInput[]
    delete?: RepoUserWhereUniqueInput | RepoUserWhereUniqueInput[]
    connect?: RepoUserWhereUniqueInput | RepoUserWhereUniqueInput[]
    update?: RepoUserUpdateWithWhereUniqueWithoutRepositoryInput | RepoUserUpdateWithWhereUniqueWithoutRepositoryInput[]
    updateMany?: RepoUserUpdateManyWithWhereWithoutRepositoryInput | RepoUserUpdateManyWithWhereWithoutRepositoryInput[]
    deleteMany?: RepoUserScalarWhereInput | RepoUserScalarWhereInput[]
  }

  export type BranchUncheckedUpdateManyWithoutRepositoryNestedInput = {
    create?: XOR<BranchCreateWithoutRepositoryInput, BranchUncheckedCreateWithoutRepositoryInput> | BranchCreateWithoutRepositoryInput[] | BranchUncheckedCreateWithoutRepositoryInput[]
    connectOrCreate?: BranchCreateOrConnectWithoutRepositoryInput | BranchCreateOrConnectWithoutRepositoryInput[]
    upsert?: BranchUpsertWithWhereUniqueWithoutRepositoryInput | BranchUpsertWithWhereUniqueWithoutRepositoryInput[]
    createMany?: BranchCreateManyRepositoryInputEnvelope
    set?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
    disconnect?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
    delete?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
    connect?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
    update?: BranchUpdateWithWhereUniqueWithoutRepositoryInput | BranchUpdateWithWhereUniqueWithoutRepositoryInput[]
    updateMany?: BranchUpdateManyWithWhereWithoutRepositoryInput | BranchUpdateManyWithWhereWithoutRepositoryInput[]
    deleteMany?: BranchScalarWhereInput | BranchScalarWhereInput[]
  }

  export type RepoUserUncheckedUpdateManyWithoutRepositoryNestedInput = {
    create?: XOR<RepoUserCreateWithoutRepositoryInput, RepoUserUncheckedCreateWithoutRepositoryInput> | RepoUserCreateWithoutRepositoryInput[] | RepoUserUncheckedCreateWithoutRepositoryInput[]
    connectOrCreate?: RepoUserCreateOrConnectWithoutRepositoryInput | RepoUserCreateOrConnectWithoutRepositoryInput[]
    upsert?: RepoUserUpsertWithWhereUniqueWithoutRepositoryInput | RepoUserUpsertWithWhereUniqueWithoutRepositoryInput[]
    createMany?: RepoUserCreateManyRepositoryInputEnvelope
    set?: RepoUserWhereUniqueInput | RepoUserWhereUniqueInput[]
    disconnect?: RepoUserWhereUniqueInput | RepoUserWhereUniqueInput[]
    delete?: RepoUserWhereUniqueInput | RepoUserWhereUniqueInput[]
    connect?: RepoUserWhereUniqueInput | RepoUserWhereUniqueInput[]
    update?: RepoUserUpdateWithWhereUniqueWithoutRepositoryInput | RepoUserUpdateWithWhereUniqueWithoutRepositoryInput[]
    updateMany?: RepoUserUpdateManyWithWhereWithoutRepositoryInput | RepoUserUpdateManyWithWhereWithoutRepositoryInput[]
    deleteMany?: RepoUserScalarWhereInput | RepoUserScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutRepoUsersInput = {
    create?: XOR<UserCreateWithoutRepoUsersInput, UserUncheckedCreateWithoutRepoUsersInput>
    connectOrCreate?: UserCreateOrConnectWithoutRepoUsersInput
    connect?: UserWhereUniqueInput
  }

  export type RepositoryCreateNestedOneWithoutRepoUsersInput = {
    create?: XOR<RepositoryCreateWithoutRepoUsersInput, RepositoryUncheckedCreateWithoutRepoUsersInput>
    connectOrCreate?: RepositoryCreateOrConnectWithoutRepoUsersInput
    connect?: RepositoryWhereUniqueInput
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type UserUpdateOneRequiredWithoutRepoUsersNestedInput = {
    create?: XOR<UserCreateWithoutRepoUsersInput, UserUncheckedCreateWithoutRepoUsersInput>
    connectOrCreate?: UserCreateOrConnectWithoutRepoUsersInput
    upsert?: UserUpsertWithoutRepoUsersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRepoUsersInput, UserUpdateWithoutRepoUsersInput>, UserUncheckedUpdateWithoutRepoUsersInput>
  }

  export type RepositoryUpdateOneRequiredWithoutRepoUsersNestedInput = {
    create?: XOR<RepositoryCreateWithoutRepoUsersInput, RepositoryUncheckedCreateWithoutRepoUsersInput>
    connectOrCreate?: RepositoryCreateOrConnectWithoutRepoUsersInput
    upsert?: RepositoryUpsertWithoutRepoUsersInput
    connect?: RepositoryWhereUniqueInput
    update?: XOR<XOR<RepositoryUpdateToOneWithWhereWithoutRepoUsersInput, RepositoryUpdateWithoutRepoUsersInput>, RepositoryUncheckedUpdateWithoutRepoUsersInput>
  }

  export type BranchCreatemigratesToInput = {
    set: string[]
  }

  export type RepositoryCreateNestedOneWithoutBranchesInput = {
    create?: XOR<RepositoryCreateWithoutBranchesInput, RepositoryUncheckedCreateWithoutBranchesInput>
    connectOrCreate?: RepositoryCreateOrConnectWithoutBranchesInput
    connect?: RepositoryWhereUniqueInput
  }

  export type LanguageCreateNestedManyWithoutBranchInput = {
    create?: XOR<LanguageCreateWithoutBranchInput, LanguageUncheckedCreateWithoutBranchInput> | LanguageCreateWithoutBranchInput[] | LanguageUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: LanguageCreateOrConnectWithoutBranchInput | LanguageCreateOrConnectWithoutBranchInput[]
    createMany?: LanguageCreateManyBranchInputEnvelope
    connect?: LanguageWhereUniqueInput | LanguageWhereUniqueInput[]
  }

  export type LanguageUncheckedCreateNestedManyWithoutBranchInput = {
    create?: XOR<LanguageCreateWithoutBranchInput, LanguageUncheckedCreateWithoutBranchInput> | LanguageCreateWithoutBranchInput[] | LanguageUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: LanguageCreateOrConnectWithoutBranchInput | LanguageCreateOrConnectWithoutBranchInput[]
    createMany?: LanguageCreateManyBranchInputEnvelope
    connect?: LanguageWhereUniqueInput | LanguageWhereUniqueInput[]
  }

  export type BranchUpdatemigratesToInput = {
    set?: string[]
    push?: string | string[]
  }

  export type RepositoryUpdateOneRequiredWithoutBranchesNestedInput = {
    create?: XOR<RepositoryCreateWithoutBranchesInput, RepositoryUncheckedCreateWithoutBranchesInput>
    connectOrCreate?: RepositoryCreateOrConnectWithoutBranchesInput
    upsert?: RepositoryUpsertWithoutBranchesInput
    connect?: RepositoryWhereUniqueInput
    update?: XOR<XOR<RepositoryUpdateToOneWithWhereWithoutBranchesInput, RepositoryUpdateWithoutBranchesInput>, RepositoryUncheckedUpdateWithoutBranchesInput>
  }

  export type LanguageUpdateManyWithoutBranchNestedInput = {
    create?: XOR<LanguageCreateWithoutBranchInput, LanguageUncheckedCreateWithoutBranchInput> | LanguageCreateWithoutBranchInput[] | LanguageUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: LanguageCreateOrConnectWithoutBranchInput | LanguageCreateOrConnectWithoutBranchInput[]
    upsert?: LanguageUpsertWithWhereUniqueWithoutBranchInput | LanguageUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: LanguageCreateManyBranchInputEnvelope
    set?: LanguageWhereUniqueInput | LanguageWhereUniqueInput[]
    disconnect?: LanguageWhereUniqueInput | LanguageWhereUniqueInput[]
    delete?: LanguageWhereUniqueInput | LanguageWhereUniqueInput[]
    connect?: LanguageWhereUniqueInput | LanguageWhereUniqueInput[]
    update?: LanguageUpdateWithWhereUniqueWithoutBranchInput | LanguageUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: LanguageUpdateManyWithWhereWithoutBranchInput | LanguageUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: LanguageScalarWhereInput | LanguageScalarWhereInput[]
  }

  export type LanguageUncheckedUpdateManyWithoutBranchNestedInput = {
    create?: XOR<LanguageCreateWithoutBranchInput, LanguageUncheckedCreateWithoutBranchInput> | LanguageCreateWithoutBranchInput[] | LanguageUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: LanguageCreateOrConnectWithoutBranchInput | LanguageCreateOrConnectWithoutBranchInput[]
    upsert?: LanguageUpsertWithWhereUniqueWithoutBranchInput | LanguageUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: LanguageCreateManyBranchInputEnvelope
    set?: LanguageWhereUniqueInput | LanguageWhereUniqueInput[]
    disconnect?: LanguageWhereUniqueInput | LanguageWhereUniqueInput[]
    delete?: LanguageWhereUniqueInput | LanguageWhereUniqueInput[]
    connect?: LanguageWhereUniqueInput | LanguageWhereUniqueInput[]
    update?: LanguageUpdateWithWhereUniqueWithoutBranchInput | LanguageUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: LanguageUpdateManyWithWhereWithoutBranchInput | LanguageUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: LanguageScalarWhereInput | LanguageScalarWhereInput[]
  }

  export type BranchCreateNestedOneWithoutLanguagesInput = {
    create?: XOR<BranchCreateWithoutLanguagesInput, BranchUncheckedCreateWithoutLanguagesInput>
    connectOrCreate?: BranchCreateOrConnectWithoutLanguagesInput
    connect?: BranchWhereUniqueInput
  }

  export type EnumFrameworkCategoryFieldUpdateOperationsInput = {
    set?: $Enums.FrameworkCategory
  }

  export type BranchUpdateOneWithoutLanguagesNestedInput = {
    create?: XOR<BranchCreateWithoutLanguagesInput, BranchUncheckedCreateWithoutLanguagesInput>
    connectOrCreate?: BranchCreateOrConnectWithoutLanguagesInput
    upsert?: BranchUpsertWithoutLanguagesInput
    disconnect?: boolean
    delete?: BranchWhereInput | boolean
    connect?: BranchWhereUniqueInput
    update?: XOR<XOR<BranchUpdateToOneWithWhereWithoutLanguagesInput, BranchUpdateWithoutLanguagesInput>, BranchUncheckedUpdateWithoutLanguagesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type NestedEnumOwnerFilter<$PrismaModel = never> = {
    equals?: $Enums.Owner | EnumOwnerFieldRefInput<$PrismaModel>
    in?: $Enums.Owner[] | ListEnumOwnerFieldRefInput<$PrismaModel>
    notIn?: $Enums.Owner[] | ListEnumOwnerFieldRefInput<$PrismaModel>
    not?: NestedEnumOwnerFilter<$PrismaModel> | $Enums.Owner
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedEnumOwnerWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Owner | EnumOwnerFieldRefInput<$PrismaModel>
    in?: $Enums.Owner[] | ListEnumOwnerFieldRefInput<$PrismaModel>
    notIn?: $Enums.Owner[] | ListEnumOwnerFieldRefInput<$PrismaModel>
    not?: NestedEnumOwnerWithAggregatesFilter<$PrismaModel> | $Enums.Owner
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOwnerFilter<$PrismaModel>
    _max?: NestedEnumOwnerFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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
    isSet?: boolean
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedEnumFrameworkCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.FrameworkCategory | EnumFrameworkCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.FrameworkCategory[] | ListEnumFrameworkCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.FrameworkCategory[] | ListEnumFrameworkCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumFrameworkCategoryFilter<$PrismaModel> | $Enums.FrameworkCategory
  }

  export type NestedEnumFrameworkCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FrameworkCategory | EnumFrameworkCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.FrameworkCategory[] | ListEnumFrameworkCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.FrameworkCategory[] | ListEnumFrameworkCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumFrameworkCategoryWithAggregatesFilter<$PrismaModel> | $Enums.FrameworkCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFrameworkCategoryFilter<$PrismaModel>
    _max?: NestedEnumFrameworkCategoryFilter<$PrismaModel>
  }

  export type RepositoryCreateWithoutOwnerInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    githubId?: number | null
    htmlUrl?: string | null
    cloneUrl?: string | null
    isPrivate?: boolean
    branches?: BranchCreateNestedManyWithoutRepositoryInput
    repoUsers?: RepoUserCreateNestedManyWithoutRepositoryInput
  }

  export type RepositoryUncheckedCreateWithoutOwnerInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    githubId?: number | null
    htmlUrl?: string | null
    cloneUrl?: string | null
    isPrivate?: boolean
    branches?: BranchUncheckedCreateNestedManyWithoutRepositoryInput
    repoUsers?: RepoUserUncheckedCreateNestedManyWithoutRepositoryInput
  }

  export type RepositoryCreateOrConnectWithoutOwnerInput = {
    where: RepositoryWhereUniqueInput
    create: XOR<RepositoryCreateWithoutOwnerInput, RepositoryUncheckedCreateWithoutOwnerInput>
  }

  export type RepositoryCreateManyOwnerInputEnvelope = {
    data: RepositoryCreateManyOwnerInput | RepositoryCreateManyOwnerInput[]
  }

  export type RepoUserCreateWithoutUserInput = {
    id?: string
    role?: $Enums.Role
    repository: RepositoryCreateNestedOneWithoutRepoUsersInput
  }

  export type RepoUserUncheckedCreateWithoutUserInput = {
    id?: string
    repositoryId: string
    role?: $Enums.Role
  }

  export type RepoUserCreateOrConnectWithoutUserInput = {
    where: RepoUserWhereUniqueInput
    create: XOR<RepoUserCreateWithoutUserInput, RepoUserUncheckedCreateWithoutUserInput>
  }

  export type RepoUserCreateManyUserInputEnvelope = {
    data: RepoUserCreateManyUserInput | RepoUserCreateManyUserInput[]
  }

  export type RepositoryUpsertWithWhereUniqueWithoutOwnerInput = {
    where: RepositoryWhereUniqueInput
    update: XOR<RepositoryUpdateWithoutOwnerInput, RepositoryUncheckedUpdateWithoutOwnerInput>
    create: XOR<RepositoryCreateWithoutOwnerInput, RepositoryUncheckedCreateWithoutOwnerInput>
  }

  export type RepositoryUpdateWithWhereUniqueWithoutOwnerInput = {
    where: RepositoryWhereUniqueInput
    data: XOR<RepositoryUpdateWithoutOwnerInput, RepositoryUncheckedUpdateWithoutOwnerInput>
  }

  export type RepositoryUpdateManyWithWhereWithoutOwnerInput = {
    where: RepositoryScalarWhereInput
    data: XOR<RepositoryUpdateManyMutationInput, RepositoryUncheckedUpdateManyWithoutOwnerInput>
  }

  export type RepositoryScalarWhereInput = {
    AND?: RepositoryScalarWhereInput | RepositoryScalarWhereInput[]
    OR?: RepositoryScalarWhereInput[]
    NOT?: RepositoryScalarWhereInput | RepositoryScalarWhereInput[]
    id?: StringFilter<"Repository"> | string
    name?: StringFilter<"Repository"> | string
    description?: StringNullableFilter<"Repository"> | string | null
    ownerId?: StringFilter<"Repository"> | string
    createdAt?: DateTimeFilter<"Repository"> | Date | string
    githubId?: IntNullableFilter<"Repository"> | number | null
    htmlUrl?: StringNullableFilter<"Repository"> | string | null
    cloneUrl?: StringNullableFilter<"Repository"> | string | null
    isPrivate?: BoolFilter<"Repository"> | boolean
  }

  export type RepoUserUpsertWithWhereUniqueWithoutUserInput = {
    where: RepoUserWhereUniqueInput
    update: XOR<RepoUserUpdateWithoutUserInput, RepoUserUncheckedUpdateWithoutUserInput>
    create: XOR<RepoUserCreateWithoutUserInput, RepoUserUncheckedCreateWithoutUserInput>
  }

  export type RepoUserUpdateWithWhereUniqueWithoutUserInput = {
    where: RepoUserWhereUniqueInput
    data: XOR<RepoUserUpdateWithoutUserInput, RepoUserUncheckedUpdateWithoutUserInput>
  }

  export type RepoUserUpdateManyWithWhereWithoutUserInput = {
    where: RepoUserScalarWhereInput
    data: XOR<RepoUserUpdateManyMutationInput, RepoUserUncheckedUpdateManyWithoutUserInput>
  }

  export type RepoUserScalarWhereInput = {
    AND?: RepoUserScalarWhereInput | RepoUserScalarWhereInput[]
    OR?: RepoUserScalarWhereInput[]
    NOT?: RepoUserScalarWhereInput | RepoUserScalarWhereInput[]
    id?: StringFilter<"RepoUser"> | string
    userId?: StringFilter<"RepoUser"> | string
    repositoryId?: StringFilter<"RepoUser"> | string
    role?: EnumRoleFilter<"RepoUser"> | $Enums.Role
  }

  export type UserCreateWithoutRepositoriesInput = {
    id?: string
    name?: string | null
    email: string
    owner?: $Enums.Owner
    contributor?: string | null
    nonContributor?: string | null
    githubId?: string | null
    githubUsername?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    repoUsers?: RepoUserCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRepositoriesInput = {
    id?: string
    name?: string | null
    email: string
    owner?: $Enums.Owner
    contributor?: string | null
    nonContributor?: string | null
    githubId?: string | null
    githubUsername?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    repoUsers?: RepoUserUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRepositoriesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRepositoriesInput, UserUncheckedCreateWithoutRepositoriesInput>
  }

  export type BranchCreateWithoutRepositoryInput = {
    id?: string
    name: string
    lastCommit?: string | null
    isProtected?: boolean
    createdAt?: Date | string
    migratesTo?: BranchCreatemigratesToInput | string[]
    languages?: LanguageCreateNestedManyWithoutBranchInput
  }

  export type BranchUncheckedCreateWithoutRepositoryInput = {
    id?: string
    name: string
    lastCommit?: string | null
    isProtected?: boolean
    createdAt?: Date | string
    migratesTo?: BranchCreatemigratesToInput | string[]
    languages?: LanguageUncheckedCreateNestedManyWithoutBranchInput
  }

  export type BranchCreateOrConnectWithoutRepositoryInput = {
    where: BranchWhereUniqueInput
    create: XOR<BranchCreateWithoutRepositoryInput, BranchUncheckedCreateWithoutRepositoryInput>
  }

  export type BranchCreateManyRepositoryInputEnvelope = {
    data: BranchCreateManyRepositoryInput | BranchCreateManyRepositoryInput[]
  }

  export type RepoUserCreateWithoutRepositoryInput = {
    id?: string
    role?: $Enums.Role
    user: UserCreateNestedOneWithoutRepoUsersInput
  }

  export type RepoUserUncheckedCreateWithoutRepositoryInput = {
    id?: string
    userId: string
    role?: $Enums.Role
  }

  export type RepoUserCreateOrConnectWithoutRepositoryInput = {
    where: RepoUserWhereUniqueInput
    create: XOR<RepoUserCreateWithoutRepositoryInput, RepoUserUncheckedCreateWithoutRepositoryInput>
  }

  export type RepoUserCreateManyRepositoryInputEnvelope = {
    data: RepoUserCreateManyRepositoryInput | RepoUserCreateManyRepositoryInput[]
  }

  export type UserUpsertWithoutRepositoriesInput = {
    update: XOR<UserUpdateWithoutRepositoriesInput, UserUncheckedUpdateWithoutRepositoriesInput>
    create: XOR<UserCreateWithoutRepositoriesInput, UserUncheckedCreateWithoutRepositoriesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRepositoriesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRepositoriesInput, UserUncheckedUpdateWithoutRepositoriesInput>
  }

  export type UserUpdateWithoutRepositoriesInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    owner?: EnumOwnerFieldUpdateOperationsInput | $Enums.Owner
    contributor?: NullableStringFieldUpdateOperationsInput | string | null
    nonContributor?: NullableStringFieldUpdateOperationsInput | string | null
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    githubUsername?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    repoUsers?: RepoUserUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRepositoriesInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    owner?: EnumOwnerFieldUpdateOperationsInput | $Enums.Owner
    contributor?: NullableStringFieldUpdateOperationsInput | string | null
    nonContributor?: NullableStringFieldUpdateOperationsInput | string | null
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    githubUsername?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    repoUsers?: RepoUserUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BranchUpsertWithWhereUniqueWithoutRepositoryInput = {
    where: BranchWhereUniqueInput
    update: XOR<BranchUpdateWithoutRepositoryInput, BranchUncheckedUpdateWithoutRepositoryInput>
    create: XOR<BranchCreateWithoutRepositoryInput, BranchUncheckedCreateWithoutRepositoryInput>
  }

  export type BranchUpdateWithWhereUniqueWithoutRepositoryInput = {
    where: BranchWhereUniqueInput
    data: XOR<BranchUpdateWithoutRepositoryInput, BranchUncheckedUpdateWithoutRepositoryInput>
  }

  export type BranchUpdateManyWithWhereWithoutRepositoryInput = {
    where: BranchScalarWhereInput
    data: XOR<BranchUpdateManyMutationInput, BranchUncheckedUpdateManyWithoutRepositoryInput>
  }

  export type BranchScalarWhereInput = {
    AND?: BranchScalarWhereInput | BranchScalarWhereInput[]
    OR?: BranchScalarWhereInput[]
    NOT?: BranchScalarWhereInput | BranchScalarWhereInput[]
    id?: StringFilter<"Branch"> | string
    name?: StringFilter<"Branch"> | string
    repositoryId?: StringFilter<"Branch"> | string
    lastCommit?: StringNullableFilter<"Branch"> | string | null
    isProtected?: BoolFilter<"Branch"> | boolean
    createdAt?: DateTimeFilter<"Branch"> | Date | string
    migratesTo?: StringNullableListFilter<"Branch">
  }

  export type RepoUserUpsertWithWhereUniqueWithoutRepositoryInput = {
    where: RepoUserWhereUniqueInput
    update: XOR<RepoUserUpdateWithoutRepositoryInput, RepoUserUncheckedUpdateWithoutRepositoryInput>
    create: XOR<RepoUserCreateWithoutRepositoryInput, RepoUserUncheckedCreateWithoutRepositoryInput>
  }

  export type RepoUserUpdateWithWhereUniqueWithoutRepositoryInput = {
    where: RepoUserWhereUniqueInput
    data: XOR<RepoUserUpdateWithoutRepositoryInput, RepoUserUncheckedUpdateWithoutRepositoryInput>
  }

  export type RepoUserUpdateManyWithWhereWithoutRepositoryInput = {
    where: RepoUserScalarWhereInput
    data: XOR<RepoUserUpdateManyMutationInput, RepoUserUncheckedUpdateManyWithoutRepositoryInput>
  }

  export type UserCreateWithoutRepoUsersInput = {
    id?: string
    name?: string | null
    email: string
    owner?: $Enums.Owner
    contributor?: string | null
    nonContributor?: string | null
    githubId?: string | null
    githubUsername?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    repositories?: RepositoryCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutRepoUsersInput = {
    id?: string
    name?: string | null
    email: string
    owner?: $Enums.Owner
    contributor?: string | null
    nonContributor?: string | null
    githubId?: string | null
    githubUsername?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    repositories?: RepositoryUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutRepoUsersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRepoUsersInput, UserUncheckedCreateWithoutRepoUsersInput>
  }

  export type RepositoryCreateWithoutRepoUsersInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    githubId?: number | null
    htmlUrl?: string | null
    cloneUrl?: string | null
    isPrivate?: boolean
    owner: UserCreateNestedOneWithoutRepositoriesInput
    branches?: BranchCreateNestedManyWithoutRepositoryInput
  }

  export type RepositoryUncheckedCreateWithoutRepoUsersInput = {
    id?: string
    name: string
    description?: string | null
    ownerId: string
    createdAt?: Date | string
    githubId?: number | null
    htmlUrl?: string | null
    cloneUrl?: string | null
    isPrivate?: boolean
    branches?: BranchUncheckedCreateNestedManyWithoutRepositoryInput
  }

  export type RepositoryCreateOrConnectWithoutRepoUsersInput = {
    where: RepositoryWhereUniqueInput
    create: XOR<RepositoryCreateWithoutRepoUsersInput, RepositoryUncheckedCreateWithoutRepoUsersInput>
  }

  export type UserUpsertWithoutRepoUsersInput = {
    update: XOR<UserUpdateWithoutRepoUsersInput, UserUncheckedUpdateWithoutRepoUsersInput>
    create: XOR<UserCreateWithoutRepoUsersInput, UserUncheckedCreateWithoutRepoUsersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRepoUsersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRepoUsersInput, UserUncheckedUpdateWithoutRepoUsersInput>
  }

  export type UserUpdateWithoutRepoUsersInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    owner?: EnumOwnerFieldUpdateOperationsInput | $Enums.Owner
    contributor?: NullableStringFieldUpdateOperationsInput | string | null
    nonContributor?: NullableStringFieldUpdateOperationsInput | string | null
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    githubUsername?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    repositories?: RepositoryUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutRepoUsersInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    owner?: EnumOwnerFieldUpdateOperationsInput | $Enums.Owner
    contributor?: NullableStringFieldUpdateOperationsInput | string | null
    nonContributor?: NullableStringFieldUpdateOperationsInput | string | null
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    githubUsername?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    repositories?: RepositoryUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type RepositoryUpsertWithoutRepoUsersInput = {
    update: XOR<RepositoryUpdateWithoutRepoUsersInput, RepositoryUncheckedUpdateWithoutRepoUsersInput>
    create: XOR<RepositoryCreateWithoutRepoUsersInput, RepositoryUncheckedCreateWithoutRepoUsersInput>
    where?: RepositoryWhereInput
  }

  export type RepositoryUpdateToOneWithWhereWithoutRepoUsersInput = {
    where?: RepositoryWhereInput
    data: XOR<RepositoryUpdateWithoutRepoUsersInput, RepositoryUncheckedUpdateWithoutRepoUsersInput>
  }

  export type RepositoryUpdateWithoutRepoUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    githubId?: NullableIntFieldUpdateOperationsInput | number | null
    htmlUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cloneUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    owner?: UserUpdateOneRequiredWithoutRepositoriesNestedInput
    branches?: BranchUpdateManyWithoutRepositoryNestedInput
  }

  export type RepositoryUncheckedUpdateWithoutRepoUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    githubId?: NullableIntFieldUpdateOperationsInput | number | null
    htmlUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cloneUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    branches?: BranchUncheckedUpdateManyWithoutRepositoryNestedInput
  }

  export type RepositoryCreateWithoutBranchesInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    githubId?: number | null
    htmlUrl?: string | null
    cloneUrl?: string | null
    isPrivate?: boolean
    owner: UserCreateNestedOneWithoutRepositoriesInput
    repoUsers?: RepoUserCreateNestedManyWithoutRepositoryInput
  }

  export type RepositoryUncheckedCreateWithoutBranchesInput = {
    id?: string
    name: string
    description?: string | null
    ownerId: string
    createdAt?: Date | string
    githubId?: number | null
    htmlUrl?: string | null
    cloneUrl?: string | null
    isPrivate?: boolean
    repoUsers?: RepoUserUncheckedCreateNestedManyWithoutRepositoryInput
  }

  export type RepositoryCreateOrConnectWithoutBranchesInput = {
    where: RepositoryWhereUniqueInput
    create: XOR<RepositoryCreateWithoutBranchesInput, RepositoryUncheckedCreateWithoutBranchesInput>
  }

  export type LanguageCreateWithoutBranchInput = {
    id?: string
    name: string
    version?: string | null
    category?: $Enums.FrameworkCategory
  }

  export type LanguageUncheckedCreateWithoutBranchInput = {
    id?: string
    name: string
    version?: string | null
    category?: $Enums.FrameworkCategory
  }

  export type LanguageCreateOrConnectWithoutBranchInput = {
    where: LanguageWhereUniqueInput
    create: XOR<LanguageCreateWithoutBranchInput, LanguageUncheckedCreateWithoutBranchInput>
  }

  export type LanguageCreateManyBranchInputEnvelope = {
    data: LanguageCreateManyBranchInput | LanguageCreateManyBranchInput[]
  }

  export type RepositoryUpsertWithoutBranchesInput = {
    update: XOR<RepositoryUpdateWithoutBranchesInput, RepositoryUncheckedUpdateWithoutBranchesInput>
    create: XOR<RepositoryCreateWithoutBranchesInput, RepositoryUncheckedCreateWithoutBranchesInput>
    where?: RepositoryWhereInput
  }

  export type RepositoryUpdateToOneWithWhereWithoutBranchesInput = {
    where?: RepositoryWhereInput
    data: XOR<RepositoryUpdateWithoutBranchesInput, RepositoryUncheckedUpdateWithoutBranchesInput>
  }

  export type RepositoryUpdateWithoutBranchesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    githubId?: NullableIntFieldUpdateOperationsInput | number | null
    htmlUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cloneUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    owner?: UserUpdateOneRequiredWithoutRepositoriesNestedInput
    repoUsers?: RepoUserUpdateManyWithoutRepositoryNestedInput
  }

  export type RepositoryUncheckedUpdateWithoutBranchesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    githubId?: NullableIntFieldUpdateOperationsInput | number | null
    htmlUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cloneUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    repoUsers?: RepoUserUncheckedUpdateManyWithoutRepositoryNestedInput
  }

  export type LanguageUpsertWithWhereUniqueWithoutBranchInput = {
    where: LanguageWhereUniqueInput
    update: XOR<LanguageUpdateWithoutBranchInput, LanguageUncheckedUpdateWithoutBranchInput>
    create: XOR<LanguageCreateWithoutBranchInput, LanguageUncheckedCreateWithoutBranchInput>
  }

  export type LanguageUpdateWithWhereUniqueWithoutBranchInput = {
    where: LanguageWhereUniqueInput
    data: XOR<LanguageUpdateWithoutBranchInput, LanguageUncheckedUpdateWithoutBranchInput>
  }

  export type LanguageUpdateManyWithWhereWithoutBranchInput = {
    where: LanguageScalarWhereInput
    data: XOR<LanguageUpdateManyMutationInput, LanguageUncheckedUpdateManyWithoutBranchInput>
  }

  export type LanguageScalarWhereInput = {
    AND?: LanguageScalarWhereInput | LanguageScalarWhereInput[]
    OR?: LanguageScalarWhereInput[]
    NOT?: LanguageScalarWhereInput | LanguageScalarWhereInput[]
    id?: StringFilter<"Language"> | string
    name?: StringFilter<"Language"> | string
    version?: StringNullableFilter<"Language"> | string | null
    branchId?: StringNullableFilter<"Language"> | string | null
    category?: EnumFrameworkCategoryFilter<"Language"> | $Enums.FrameworkCategory
  }

  export type BranchCreateWithoutLanguagesInput = {
    id?: string
    name: string
    lastCommit?: string | null
    isProtected?: boolean
    createdAt?: Date | string
    migratesTo?: BranchCreatemigratesToInput | string[]
    repository: RepositoryCreateNestedOneWithoutBranchesInput
  }

  export type BranchUncheckedCreateWithoutLanguagesInput = {
    id?: string
    name: string
    repositoryId: string
    lastCommit?: string | null
    isProtected?: boolean
    createdAt?: Date | string
    migratesTo?: BranchCreatemigratesToInput | string[]
  }

  export type BranchCreateOrConnectWithoutLanguagesInput = {
    where: BranchWhereUniqueInput
    create: XOR<BranchCreateWithoutLanguagesInput, BranchUncheckedCreateWithoutLanguagesInput>
  }

  export type BranchUpsertWithoutLanguagesInput = {
    update: XOR<BranchUpdateWithoutLanguagesInput, BranchUncheckedUpdateWithoutLanguagesInput>
    create: XOR<BranchCreateWithoutLanguagesInput, BranchUncheckedCreateWithoutLanguagesInput>
    where?: BranchWhereInput
  }

  export type BranchUpdateToOneWithWhereWithoutLanguagesInput = {
    where?: BranchWhereInput
    data: XOR<BranchUpdateWithoutLanguagesInput, BranchUncheckedUpdateWithoutLanguagesInput>
  }

  export type BranchUpdateWithoutLanguagesInput = {
    name?: StringFieldUpdateOperationsInput | string
    lastCommit?: NullableStringFieldUpdateOperationsInput | string | null
    isProtected?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    migratesTo?: BranchUpdatemigratesToInput | string[]
    repository?: RepositoryUpdateOneRequiredWithoutBranchesNestedInput
  }

  export type BranchUncheckedUpdateWithoutLanguagesInput = {
    name?: StringFieldUpdateOperationsInput | string
    repositoryId?: StringFieldUpdateOperationsInput | string
    lastCommit?: NullableStringFieldUpdateOperationsInput | string | null
    isProtected?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    migratesTo?: BranchUpdatemigratesToInput | string[]
  }

  export type RepositoryCreateManyOwnerInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    githubId?: number | null
    htmlUrl?: string | null
    cloneUrl?: string | null
    isPrivate?: boolean
  }

  export type RepoUserCreateManyUserInput = {
    id?: string
    repositoryId: string
    role?: $Enums.Role
  }

  export type RepositoryUpdateWithoutOwnerInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    githubId?: NullableIntFieldUpdateOperationsInput | number | null
    htmlUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cloneUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    branches?: BranchUpdateManyWithoutRepositoryNestedInput
    repoUsers?: RepoUserUpdateManyWithoutRepositoryNestedInput
  }

  export type RepositoryUncheckedUpdateWithoutOwnerInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    githubId?: NullableIntFieldUpdateOperationsInput | number | null
    htmlUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cloneUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    branches?: BranchUncheckedUpdateManyWithoutRepositoryNestedInput
    repoUsers?: RepoUserUncheckedUpdateManyWithoutRepositoryNestedInput
  }

  export type RepositoryUncheckedUpdateManyWithoutOwnerInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    githubId?: NullableIntFieldUpdateOperationsInput | number | null
    htmlUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cloneUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RepoUserUpdateWithoutUserInput = {
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    repository?: RepositoryUpdateOneRequiredWithoutRepoUsersNestedInput
  }

  export type RepoUserUncheckedUpdateWithoutUserInput = {
    repositoryId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type RepoUserUncheckedUpdateManyWithoutUserInput = {
    repositoryId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type BranchCreateManyRepositoryInput = {
    id?: string
    name: string
    lastCommit?: string | null
    isProtected?: boolean
    createdAt?: Date | string
    migratesTo?: BranchCreatemigratesToInput | string[]
  }

  export type RepoUserCreateManyRepositoryInput = {
    id?: string
    userId: string
    role?: $Enums.Role
  }

  export type BranchUpdateWithoutRepositoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    lastCommit?: NullableStringFieldUpdateOperationsInput | string | null
    isProtected?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    migratesTo?: BranchUpdatemigratesToInput | string[]
    languages?: LanguageUpdateManyWithoutBranchNestedInput
  }

  export type BranchUncheckedUpdateWithoutRepositoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    lastCommit?: NullableStringFieldUpdateOperationsInput | string | null
    isProtected?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    migratesTo?: BranchUpdatemigratesToInput | string[]
    languages?: LanguageUncheckedUpdateManyWithoutBranchNestedInput
  }

  export type BranchUncheckedUpdateManyWithoutRepositoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    lastCommit?: NullableStringFieldUpdateOperationsInput | string | null
    isProtected?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    migratesTo?: BranchUpdatemigratesToInput | string[]
  }

  export type RepoUserUpdateWithoutRepositoryInput = {
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    user?: UserUpdateOneRequiredWithoutRepoUsersNestedInput
  }

  export type RepoUserUncheckedUpdateWithoutRepositoryInput = {
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type RepoUserUncheckedUpdateManyWithoutRepositoryInput = {
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type LanguageCreateManyBranchInput = {
    id?: string
    name: string
    version?: string | null
    category?: $Enums.FrameworkCategory
  }

  export type LanguageUpdateWithoutBranchInput = {
    name?: StringFieldUpdateOperationsInput | string
    version?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumFrameworkCategoryFieldUpdateOperationsInput | $Enums.FrameworkCategory
  }

  export type LanguageUncheckedUpdateWithoutBranchInput = {
    name?: StringFieldUpdateOperationsInput | string
    version?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumFrameworkCategoryFieldUpdateOperationsInput | $Enums.FrameworkCategory
  }

  export type LanguageUncheckedUpdateManyWithoutBranchInput = {
    name?: StringFieldUpdateOperationsInput | string
    version?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumFrameworkCategoryFieldUpdateOperationsInput | $Enums.FrameworkCategory
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