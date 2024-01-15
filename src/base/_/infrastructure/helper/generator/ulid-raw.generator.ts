import { Injectable } from '@nestjs/common';
import UlidGenerator from '../../../application/helper/generator/ulid/ulid.generator';

@Injectable()
class UlidRawGenerator implements UlidGenerator {
  private readonly chars: string =
    '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  private readonly baseTimestamp: number = 1293840000000; // Timestamp de referência (1 de janeiro de 2011)

  public execute(): string {
    let ulid = (Date.now() - this.baseTimestamp).toString(36).padStart(10, '0');

    for (let i = 0; i < 16; i++) {
      const randomIndex = Math.floor(Math.random() * this.chars.length);
      ulid += this.chars.charAt(randomIndex);
    }

    return ulid;
  }

  public static execute(): string {
    return new UlidRawGenerator().execute();
  }

  public validate(ulid: string): boolean {
    if (ulid.length !== 26) return false;

    for (let i = 0; i < ulid.length; i++) {
      const char = ulid[i];
      if (this.chars.indexOf(char) === -1) {
        return false;
      }
    }

    const timestamp = ulid.substring(0, 10);
    const timestampNumber = parseInt(timestamp, 36);

    const currentTimestamp = Date.now() - this.baseTimestamp;

    return !(isNaN(timestampNumber) || timestampNumber > currentTimestamp);
  }

  public static validate(ulid: string): boolean {
    return new UlidRawGenerator().validate(ulid);
  }
}

export default UlidRawGenerator;
