import { Option } from './option';

export class None<T> extends Option<T> {

  constructor() {
    super(false);
  }
}
