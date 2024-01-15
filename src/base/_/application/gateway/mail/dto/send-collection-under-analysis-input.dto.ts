export class SendCollectionUnderAnalysisInputDto {
  readonly fullName: string;
  readonly email: string;
  readonly collectionName: string;

  constructor(collectionName: string, fullName: string, email: string) {
    this.collectionName = collectionName;
    this.fullName = fullName;
    this.email = email;
  }
}
