import DateCustom from '../wrapper/date/date-custom.wrapper';
import ULID from '../wrapper/string/ulid.wrapper';
import UlidGenerator from '@/base/_/application/helper/generator/ulid/ulid.generator';

class BaseEntity {
  private readonly _id: ULID;
  private readonly _createdAt: DateCustom;
  private _updatedAt: DateCustom;

  protected constructor(id?: string, createdAt?: Date, updatedAt?: Date) {
    id
      ? (this._id = ULID.create(id, 'id'))
      : (this._id = ULID.create(UlidGenerator.execute(), 'id'));
    this._createdAt = DateCustom.create(createdAt ?? new Date(), 'created at');
    this._updatedAt = DateCustom.create(updatedAt ?? new Date(), 'updated at');
  }

  public get id(): string {
    return this._id?.value;
  }

  public get createdAt(): Date {
    return this._createdAt.value;
  }

  public get updatedAt(): Date {
    return this._updatedAt.value;
  }

  public set updatedAt(updatedAt: Date) {
    this._updatedAt = DateCustom.create(updatedAt, 'updated at');
  }

  public equals(entity: BaseEntity): boolean {
    return this.id === entity.id;
  }
}

export default BaseEntity;
