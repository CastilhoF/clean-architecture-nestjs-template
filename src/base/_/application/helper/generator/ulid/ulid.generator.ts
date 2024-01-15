import UlidRawGenerator from '../../../../infrastructure/helper/generator/ulid-raw.generator';

abstract class UlidGenerator {
  abstract execute(): string;

  abstract validate(ulid: string): boolean;

  public static execute(): string {
    return new UlidRawGenerator().execute();
  }

  public static validate(ulid: string): boolean {
    return new UlidRawGenerator().validate(ulid);
  }
}

export default UlidGenerator;
