export type ConsumerCallback = (b: Buffer) => any;

import { Schema, SchemaType, SchemaTypeOpts } from "mongoose";

export type MongooseTypedSchema<T> = Record<
  keyof T,
  SchemaTypeOpts<any> | Schema | SchemaType
>;

/* return the current storage region */
export type GetRegion = () => string;

export type SaveFile = (data: Buffer, key: string) => Promise<void>;

export type SetBucketName = (name: string) => void;

export type GetSignedObjectURL = (fileName: string) => string;

/**
 * If endpoint is not provided it takes AWS S3 by default.
 */
export interface ObjectStorageServiceConfig {
  accessKey: string;
  secretKey: string;
  region: string;
  BucketName: string;
  endpoint?: string;
}

export type MakeObjectStorageService = (
  config: ObjectStorageServiceConfig
) => IOBjectStorageServices;

export interface IOBjectStorageServices {
  GetRegion: GetRegion;
  SaveFile: SaveFile;
  SetBucketName: SetBucketName;
  GetSignedObjectURL: GetSignedObjectURL;
}
