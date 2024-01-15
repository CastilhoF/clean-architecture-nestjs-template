import { DomainEvent } from '@/base/core/domain/events/domain-event';
import { DomainEvents } from '@/base/core/domain/events/domain-events';
import BaseEntity from './_/base.entity';

export abstract class AggregateRoot extends BaseEntity {
  private _domainEvents: DomainEvent[] = [];

  get domainEvents(): DomainEvent[] {
    return this._domainEvents;
  }

  protected addDomainEvent(domainEvent: DomainEvent): void {
    this._domainEvents.push(domainEvent);
    DomainEvents.markAggregateForDispatch(this);
  }

  public clearEvents() {
    this._domainEvents = [];
  }
}
