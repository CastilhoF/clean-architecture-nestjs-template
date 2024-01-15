class PaginationException extends Error {
  constructor(stack: any = null) {
    super('the page is invalid, check the total number of pages.');
    this.stack = stack;
    this.name = PaginationException.name;
  }
}

export default PaginationException;
