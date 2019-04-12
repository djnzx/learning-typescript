import { Option } from './option';

export class Some<T> extends Option<T> {

  constructor(value: T) {
    super(true, value);
  }
}
