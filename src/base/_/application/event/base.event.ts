abstract class BaseEvent<T> {
  abstract emit(event: string, input: T): Promise<void> | void;
}

export default BaseEvent;
