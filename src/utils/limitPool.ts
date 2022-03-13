/* eslint-disable prettier/prettier */
interface ILimitPool {
  limit: number;
  pool: Promise<unknown>[];
  count: number;
  len: number;
}

class LimitPool implements ILimitPool {
  len: number;
  result: unknown[];
  limit: number;
  pool: Promise<unknown>[];
  count = 0;
  constructor(limit: number, pool: Promise<unknown>[]) {
    this.limit = limit;
    this.pool = pool;
    this.len = this.pool.length
    this.result = new Array(this.len).fill(false)
  }
  async run() {
    return new Promise((resolve) => {
      const next = () => {
        const idx = this.count++;
        if (idx >= this.pool.length) {
          return !this.result.includes(false) && resolve(this.result);
        }
        const p = this.pool[idx]
        Promise.resolve(p).then(res => {
          this.result[idx] = res;
          if (idx < this.len) {
            next()
          }
        }).catch(err => {
          this.result[idx] = err;
          if (idx < this.len) {
            next()
          }
        })
      }
      while (this.count < this.limit) {
        next()
      }
    });
  }
}

export default LimitPool;

