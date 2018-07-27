declare class Meteor$Mongo {
  Collection: typeof Meteor$Mongo$Collection;
  Cursor: typeof Meteor$Mongo$Cursor;
}

declare class Meteor$Mongo$BulkOp {
  find(
    selector: number | string | Meteor$Mongo$ObjectId | Meteor$Mongo$Selector
  ): Meteor$Mongo$BulkOpHandle;
  execute(): Promise<{}>;
}

declare class Meteor$Mongo$BulkOpHandle {
  deleteMany(modifier: Meteor$Mongo$Modifier): void;
  deleteOne(modifier: Meteor$Mongo$Modifier): void;
  updateMany(modifier: Meteor$Mongo$Modifier): void;
  updateOne(modifier: Meteor$Mongo$Modifier): void;
}

declare type Meteor$Mongo$FindOptions = $Shape<{
  fields?: Meteor$Mongo$FieldSpecifier,
  limit?: number,
  reactive?: boolean,
  skip?: number,
  sort?: Meteor$Mongo$SortSpecifier
}>;

declare type Meteor$Mongo$FindOptionsWithTransform<
  EntryT,
  TransformedEntryT
> = Meteor$Mongo$FindOptions & {
  transform: EntryT => TransformedEntryT
};

declare class Meteor$Mongo$Collection<EntryT> {
  _ensureIndex(
    index: {[fieldPath: string]: -1 | 1 | boolean | string},
    options?: {|
      background?: boolean,
      default_language?: string,
      name?: string,
      partialFilterExpression?: Meteor$Mongo$Selector,
      sparse?: boolean,
      unique?: boolean,
      weights?: {}
    |}
  ): void;
  allow(options: {
    fetch?: string | string[],
    insert?: (userId: string, doc: EntryT) => boolean,
    remove?: (userId: string, doc: EntryT) => boolean,
    update?: (
      userId: string,
      doc: EntryT,
      fieldNames: string[],
      modifier: Meteor$Mongo$Modifier
    ) => boolean
  }): boolean;
  allow<TransformedEntryT>(options: {
    fetch?: string | string[],
    insert?: (userId: string, doc: TransformedEntryT) => boolean,
    remove?: (userId: string, doc: TransformedEntryT) => boolean,
    transform?: EntryT => TransformedEntryT,
    update?: (
      userId: string,
      doc: TransformedEntryT,
      fieldNames: string[],
      modifier: Meteor$Mongo$Modifier
    ) => boolean
  }): boolean;
  constructor(name: string): void;
  deny(options: {
    fetch?: string | string[],
    insert?: (userId: string, doc: EntryT) => boolean,
    remove?: (userId: string, doc: EntryT) => boolean,
    update?: (
      userId: string,
      doc: EntryT,
      fieldNames: string[],
      modifier: Meteor$Mongo$Modifier
    ) => boolean
  }): boolean;
  deny<TransformedEntryT>(options: {
    fetch?: string | string[],
    insert?: (userId: string, doc: TransformedEntryT) => boolean,
    remove?: (userId: string, doc: TransformedEntryT) => boolean,
    transform?: EntryT => TransformedEntryT,
    update?: (
      userId: string,
      doc: TransformedEntryT,
      fieldNames: string[],
      modifier: Meteor$Mongo$Modifier
    ) => boolean
  }): boolean;
  find(
    selector?: number | string | Meteor$Mongo$ObjectId | Meteor$Mongo$Selector,
    options?: ?Meteor$Mongo$FindOptions
  ): Meteor$Mongo$Cursor<EntryT>;
  find<TransformedEntryT>(
    selector?: number | string | Meteor$Mongo$ObjectId | Meteor$Mongo$Selector,
    options?: ?Meteor$Mongo$FindOptionsWithTransform<EntryT, TransformedEntryT>
  ): Meteor$Mongo$Cursor<TransformedEntryT>;
  findOne(
    selector?: number | string | Meteor$Mongo$ObjectId | Meteor$Mongo$Selector,
    options?: ?Meteor$Mongo$FindOptions
  ): ?EntryT;
  findOne<TransformedEntryT>(
    selector?: number | string | Meteor$Mongo$ObjectId | Meteor$Mongo$Selector,
    options?: ?Meteor$Mongo$FindOptionsWithTransform<EntryT, TransformedEntryT>
  ): ?TransformedEntryT;
  insert(doc: EntryT): string;
  insert(
    doc: EntryT,
    callback: ((Error, void) => mixed) & ((void, string) => mixed)
  ): void;
  rawCollection(): Meteor$Mongo$RawCollection<EntryT>;
  remove(
    selector: number | string | Meteor$Mongo$ObjectId | Meteor$Mongo$Selector
  ): void;
  remove(
    selector: number | string | Meteor$Mongo$ObjectId | Meteor$Mongo$Selector,
    callback: (?Error) => mixed
  ): void;
  update(
    selector: number | string | Meteor$Mongo$ObjectId | Meteor$Mongo$Selector,
    modifier: Meteor$Mongo$Modifier,
    options?: {multi?: boolean, upsert?: boolean}
  ): number;
  update(
    selector: number | string | Meteor$Mongo$ObjectId | Meteor$Mongo$Selector,
    modifier: Meteor$Mongo$Modifier,
    options?: {multi?: boolean, upsert?: boolean},
    callback: ((Error, void) => mixed) & ((void, number) => mixed)
  ): void;
  upsert(
    selector: number | string | Meteor$Mongo$ObjectId | Meteor$Mongo$Selector,
    modifier: Meteor$Mongo$Modifier,
    options?: {multi?: boolean}
  ): {insertedId?: string, numberAffected: number};
  upsert(
    selector: number | string | Meteor$Mongo$ObjectId | Meteor$Mongo$Selector,
    modifier: Meteor$Mongo$Modifier,
    options?: {multi?: boolean},
    callback: ((Error, void) => mixed) &
      ((void, {insertedId?: string, numberAffected: number}) => mixed)
  ): void;
}

declare class Meteor$Mongo$Cursor<EntryT> {
  count(): number;
  fetch(): Array<EntryT>;
  forEach((EntryT) => mixed): void;
  map<TransformedEntryT>((EntryT) => TransformedEntryT): TransformedEntryT[];
}

declare type Meteor$Mongo$FieldSpecifier = {
  [fieldPath: string]:
    | 0
    | 1
    | boolean
    | {|$elemMatch: Meteor$Mongo$Selector|}
    | {|$meta: 'textScore'|}
    | {|$slice: number | [number, number]|}
};

declare type Meteor$Mongo$Modifier = {
  [fieldPath: string]: mixed
};

declare class Meteor$Mongo$ObjectId {
  _str: string;
  constructor(hex: string): void;
}

declare class Meteor$Mongo$RawCollection<T> {
  bulkWrite(pipeline: {}[]): Promise<{}>;
  deleteMany(selector: Meteor$Mongo$Selector): Promise<{}>;
  insertMany(docs: T[]): Promise<{}>;
  initializeUnorderedBulkOp(): Meteor$Mongo$BulkOp;
}

declare type Meteor$Mongo$Selector = {
  [fieldPath: string]: mixed
};

declare type Meteor$Mongo$SortSpecifier =
  | {|$natural: -1 | 1|}
  | {[fieldPath: string]: -1 | 1 | {|$meta: 'textScore'|}};

declare class Meteor$MongoInternals {
  NpmModules: {
    mongodb: {
      module: {
        ObjectId: typeof Meteor$Mongo$ObjectId
      }
    }
  };
}

declare module 'meteor/mongo' {
  declare module.exports: {
    Mongo: Meteor$Mongo,
    MongoInternals: Meteor$MongoInternals
  };
}
