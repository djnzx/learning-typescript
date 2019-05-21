export function pipe_sync(...fns: Array<Function>): Function {
  const len = fns.length - 1;
  return function(this: any, x: any) {
    let y = x;
    for (let i = 0; i <= len; i++) {
      y = fns[i].call(this, y)
    }
    return y
  }
}

export function pipe_async(...fns: Array<Function>): Function {
  const len = fns.length - 1;
  return async function(this: any, x: any) {
    let y = x;
    for (let i = 0; i <= len; i++) {
      y = await fns[i].call(this, y)
    }
    return y
  }
}

export function pipe_async2(fns: Array<Function>): Function {
  const len = fns.length - 1;
  return async function(this: any, x: any) {
    let y = x;
    for (let i = 0; i <= len; i++) {
      y = await fns[i].call(this, y)
    }
    return y
  }
}
