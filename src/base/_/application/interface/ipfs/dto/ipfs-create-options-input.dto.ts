export interface IpfsMetadataDto {
  name: string;
  description: string;
}

export interface IpfsOptionsDto {
  cidVersion: 0 | 1;
  wrapWithDirectory: boolean;
}

export default interface IpfsCreateOptionsInputDto {
  metadata: IpfsMetadataDto;
  options: IpfsOptionsDto;
}
